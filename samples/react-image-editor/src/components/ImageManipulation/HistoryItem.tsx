
import * as React from 'react';
import styles from './ImageManipulation.module.scss';

import {
  IImageManipulationSettings,
  manipulationTypeData,
  IManipulationTypeDataDetails } from './ImageManipulation.types';
import { Icon } from '@fluentui/react';

// tslint:disable-next-line: typedef
export const historyItem = (item: IImageManipulationSettings, _index: number): JSX.Element|undefined => {
  if (!item) {
    return undefined;
  }
  const data: IManipulationTypeDataDetails = manipulationTypeData[item.type];

  const detailrender: JSX.Element = data.toHTML(item);
    return (
        <span  className={styles.historyItem}>
          <span className={styles.historyItemIcon}>{data.svgIcon ?
          <img className={styles.historyItemSvg} src={data.svgIcon} /> :
          <Icon iconName={data.iconName} />}</span>
          <span className={styles.historyItemText}>{data.text}</span>
          <span className={styles.historyItemDetails}>{detailrender}</span>
        </span>
    );
};
