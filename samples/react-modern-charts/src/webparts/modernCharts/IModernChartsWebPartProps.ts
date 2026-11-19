import { IPropertyPaneDropdownOption } from '@microsoft/sp-property-pane';
import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface IFieldProperty extends IPropertyPaneDropdownOption {
  fieldtype: string;
}

export interface IChartColors {
  bgColors: string[];
  hoverColors: string[];
}

export interface IChartOptions {
  legend: {
    display: boolean;
    layout: {
      padding: number;
    };
    position: string;
    labels: {
      fontColor: string;
    };
    scales: {
      yAxes: Array<{
        ticks: {
          beginAtZero: boolean;
        };
      }>;
    };
  };
}

export interface IChartDataset {
  data: number[];
  backgroundColor: string[];
  hoverBackgroundColor: string[];
}

export interface IChartData {
  labels: string[];
  datasets: IChartDataset[];
}

export interface ICalculatedChartData {
  data: number[];
  labels: string[];
}

export interface ChartConfiguration {
  title: string;
  description: string;
  other: boolean;
  dataUrlDisabled: boolean;
  colsDisabled: boolean;
  listsDisabled: boolean;
  type: string;
  url: string;
  dataurl: string;
  list: string | null;
  col1: string;
  col2: string;
  act: string;
  unique: string;
  size: number;
  options: IChartOptions;
  columns: IFieldProperty[];
  lists: IPropertyPaneDropdownOption[];
  theme: string;
  bgColors: string[];
  hoverColors: string[];
  hasTaxField?: boolean;
}

export interface IModernChartsWebPartProps {
  description: string;
  numCharts: number;
  chartConfig: Array<ChartConfiguration>;
  state: boolean;
  firstLoad: boolean;
  siteOptions: IPropertyPaneDropdownOption[];
  listOptions: IPropertyPaneDropdownOption[];
  url: string;
  other: boolean;
  maxResults: number;
}

export interface IModernChartsProps {
  description: string;
  title: string;
  state: boolean;
  config: Record<string, unknown>;
  context: WebPartContext;
  data: Record<string, unknown>;
  charts: Array<MChart>;
}

export interface MChart {
  data: number[];
  labels: string[];
  config: ChartConfiguration;
  key: number;
}
