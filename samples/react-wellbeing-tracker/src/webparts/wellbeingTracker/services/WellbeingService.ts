import { SPFI, spfi, SPFx } from '@pnp/sp';
import '@pnp/sp/webs';
import '@pnp/sp/lists';
import '@pnp/sp/items';
import '@pnp/sp/site-users/web';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import { IActivity, ICompletion } from '../models/IWellbeingModels';

export class WellbeingService {
  private _sp: SPFI;
  private _activitiesListName: string;
  private _completionsListName: string;
  private _currentUserId: number = 0;

  constructor(context: WebPartContext, activitiesListName: string, completionsListName: string) {
    this._sp = spfi().using(SPFx(context));
    this._activitiesListName = activitiesListName;
    this._completionsListName = completionsListName;
  }

  public async init(): Promise<void> {
    const user = await this._sp.web.currentUser.select('Id')();
    this._currentUserId = user.Id;
  }

  public async getActivities(): Promise<IActivity[]> {
    const items = await this._sp.web.lists
      .getByTitle(this._activitiesListName)
      .items
      .select('Id', 'Title', 'Category')
      .orderBy('Title')();

    return items.map(item => ({
      id: item.Id,
      title: item.Title,
      category: item.Category,
    }));
  }

  public async addActivity(title: string, category: string): Promise<IActivity> {
    const { data } = await this._sp.web.lists
      .getByTitle(this._activitiesListName)
      .items
      .add({ Title: title, Category: category });

    return { id: data.Id, title: data.Title, category: data.Category };
  }

  public async getCompletions(startDate: Date, endDate: Date): Promise<ICompletion[]> {
    const start = this._toDateKey(startDate);
    const end = this._toDateKey(endDate);

    const items = await this._sp.web.lists
      .getByTitle(this._completionsListName)
      .items
      .select('Id', 'ActivityId', 'CompletionDate')
      .filter(`CompletionDate ge '${start}' and CompletionDate le '${end}' and AuthorId eq ${this._currentUserId}`)
      .top(500)();

    return items.map(item => ({
      id: item.Id,
      activityId: item.ActivityId,
      completionDate: (item.CompletionDate as string).split('T')[0],
    }));
  }

  public async addCompletion(activityId: number, date: Date): Promise<ICompletion> {
    const dateStr = this._toDateKey(date);
    const { data } = await this._sp.web.lists
      .getByTitle(this._completionsListName)
      .items
      .add({ Title: dateStr, ActivityId: activityId, CompletionDate: dateStr });

    return {
      id: data.Id,
      activityId: data.ActivityId,
      completionDate: (data.CompletionDate as string).split('T')[0],
    };
  }

  public async removeCompletion(completionId: number): Promise<void> {
    await this._sp.web.lists
      .getByTitle(this._completionsListName)
      .items
      .getById(completionId)
      .delete();
  }

  private _toDateKey(date: Date): string {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }
}
