import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import WellbeingTracker from './components/WellbeingTracker';
import { IWellbeingTrackerProps } from './components/IWellbeingTrackerProps';

export interface IWellbeingTrackerWebPartProps {
  title: string;
  activitiesListName: string;
  completionsListName: string;
}

export default class WellbeingTrackerWebPart extends BaseClientSideWebPart<IWellbeingTrackerWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IWellbeingTrackerProps> = React.createElement(
      WellbeingTracker,
      {
        context: this.context,
        title: this.properties.title || 'Wellbeing & Engagement Tracker',
        activitiesListName: this.properties.activitiesListName || 'WellbeingActivities',
        completionsListName: this.properties.completionsListName || 'WellbeingCompletions',
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: { description: 'Configure the Wellbeing & Engagement Tracker' },
          groups: [
            {
              groupName: 'Display',
              groupFields: [
                PropertyPaneTextField('title', {
                  label: 'Web Part Title',
                  placeholder: 'Wellbeing & Engagement Tracker',
                }),
              ],
            },
            {
              groupName: 'SharePoint Lists',
              groupFields: [
                PropertyPaneTextField('activitiesListName', {
                  label: 'Activities List Name',
                  placeholder: 'WellbeingActivities',
                  description: 'List with Title (text) and Category (choice: Health, Mindfulness, Social) columns',
                }),
                PropertyPaneTextField('completionsListName', {
                  label: 'Completions List Name',
                  placeholder: 'WellbeingCompletions',
                  description: 'List with Title (text), ActivityId (number), and CompletionDate (date) columns',
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
