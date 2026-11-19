import * as React from "react";
import styles from "./ModernCharts.module.scss";
import { IModernChartsProps } from "../IModernChartsWebPartProps";
import { MChart } from "../IModernChartsWebPartProps";
import "chart.js";
import type * as ChartJs from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { HorizontalBar } from "react-chartjs-2";
import { Radar } from "react-chartjs-2";
import { Polar } from "react-chartjs-2";
import ChartOptions from "../ChartOptions";
import {
  DocumentCard,
  DocumentCardTitle,
  DocumentCardLocation,
} from "@fluentui/react/lib/DocumentCard";

export default class ModernCharts extends React.Component<
  IModernChartsProps,
  {}
> {
  public render(): JSX.Element {
    const charts: JSX.Element[] = this.props.charts.map(
      (chart: MChart, i: number) => {
        return (
          <DocumentCard
            onClickHref="#"
            className={
              styles.docContainer +
              " ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg" +
              chart.config.size
            }
            key={chart.key}
          >
            <div className={styles.chartCard}>
              {this.chart(
                ChartOptions.Data(chart) as ChartJs.ChartData,
                ChartOptions.Options() as ChartJs.ChartOptions,
                chart.config.type
              )}
            </div>
            <DocumentCardLocation location={chart.config.description} />
            <DocumentCardTitle title={chart.config.title} />
          </DocumentCard>
        );
      }
    );

    return (
      <div className={styles.chartjs + " ms-Grid"}>
        <div className={"ms-Grid-row"}>{charts}</div>
        <div style={{ clear: "both" }} />
      </div>
    );
  }

  public chart(
    data: ChartJs.ChartData,
    options: ChartJs.ChartOptions,
    type: string
  ): JSX.Element {
    switch (type) {
      case "doughnut":
        return <Doughnut data={data} options={options} />;
      case "line":
        return (
          <Line data={data} options={options} legend={{ display: false }} />
        );
      case "pie":
        return <Pie data={data} options={options} />;
      case "bar":
        return (
          <Bar data={data} options={options} legend={{ display: false }} />
        );
      case "horizontalbar":
        return (
          <HorizontalBar
            data={data}
            options={options}
            legend={{ display: false }}
          />
        );
      case "radar":
        return (
          <Radar data={data} options={options} legend={{ display: false }} />
        );
      case "polar":
        return <Polar data={data} options={options} />;
      default:
        return <Line data={data} options={options} />;
    }
  }
}
