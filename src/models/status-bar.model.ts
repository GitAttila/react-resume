export interface StatusBarItem {
  caption: string;
  value: number; // number between 0 and 1 - percentage
}

export interface StatusBarChartData {
  title: string;
  values: StatusBarItem[];
}
