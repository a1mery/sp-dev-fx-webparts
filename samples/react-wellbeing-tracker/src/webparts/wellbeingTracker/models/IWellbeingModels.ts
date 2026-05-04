export type ActivityCategory = 'Health' | 'Mindfulness' | 'Social';
export type ViewPeriod = 'week' | 'month';

export interface IActivity {
  id: number;
  title: string;
  category: ActivityCategory;
}

export interface ICompletion {
  id: number;
  activityId: number;
  completionDate: string; // 'YYYY-MM-DD'
}
