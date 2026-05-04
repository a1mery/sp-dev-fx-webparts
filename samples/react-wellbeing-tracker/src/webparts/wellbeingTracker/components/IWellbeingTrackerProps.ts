import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface IWellbeingTrackerProps {
  context: WebPartContext;
  title: string;
  activitiesListName: string;
  completionsListName: string;
}
