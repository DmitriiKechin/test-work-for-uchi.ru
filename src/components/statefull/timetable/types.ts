export interface ITimetable {
  tasksMatrix: boolean[][];
  activeCell: number[];
  setActiveCell: React.Dispatch<React.SetStateAction<number[]>>;
}
