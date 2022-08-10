export interface IButton {
  disabled?: boolean;
  fontSize?: string;
  children: string | JSX.Element;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
