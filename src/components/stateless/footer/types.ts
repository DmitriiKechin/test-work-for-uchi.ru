export interface IFooter {
  date: Date;
  tasksMatrix: boolean[][];
  activeCell: number[];
  setTaskTimeList: React.Dispatch<React.SetStateAction<Date[]>>;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  setScrollDate: React.Dispatch<React.SetStateAction<boolean>>;
}
