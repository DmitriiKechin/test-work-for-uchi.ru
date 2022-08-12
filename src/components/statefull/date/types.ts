export interface IDate {
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  date: Date;
  setScrollDate: React.Dispatch<React.SetStateAction<boolean>>;
  scrollDate: boolean;
}
