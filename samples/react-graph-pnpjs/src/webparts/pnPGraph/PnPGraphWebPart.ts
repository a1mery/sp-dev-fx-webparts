import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart
} from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'PnPGraphWebPartStrings';
import PnPGraph from './components/PnPGraph';
import { IPnPGraphProps } from './components/IPnPGraphProps';

import { setup as pnpSetup } from '@pnp/common';

export interface IPnPGraphWebPartProps {
  description: string;
}

export default class PnPGraphWebPart extends BaseClientSideWebPart<IPnPGraphWebPartProps> {
  private _root: ReturnType<typeof createRoot>;

  public onInit(): Promise<void> {

    pnpSetup({
      spfxContext: this.context
    });

    return Promise.resolve();
  }

  public render(): void {
    const element: React.ReactElement<IPnPGraphProps > = React.createElement(
      PnPGraph,
      {
        description: this.properties.description
      }
    );

    if (!this._root) {
      this._root = createRoot(this.domElement);
    }

    this._root.render(element);
  }

  protected onDispose(): void {
    if (this._root) {
      this._root.unmount();
    }
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
