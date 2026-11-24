import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface IModernChartsProps {
  description: string;
  title: string;
  state: boolean;
  config: Object;
  context: WebPartContext;
  data: Object;
  charts: Array<MChart>;
}
export interface MChart {
  size: number;
  data: Object;
  config: Object;
  key: number;
}