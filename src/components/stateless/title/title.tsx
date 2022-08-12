import { parse2Date } from '../../../helpers/parseDate';
import { Button } from '../button/button';
import { Wrapper } from './styles';
import { ITitle } from './types';

export const Title: React.FC<ITitle> = ({ setTaskTimeList }) => {
  const clickHandler = () => {
    const taskTime = parse2Date(
      prompt('Enter event time:\n YYYY-MM-DD HH:mm:ss') || ' '
    );

    if (!taskTime) {
      alert('Не правильный формат даты');
      return;
    }

    setTaskTimeList((prev) => [...prev, taskTime]);
  };

  return (
    <Wrapper>
      <div>Interview Calendar</div>
      <Button
        onClick={() => {
          clickHandler();
        }}
        fontSize="1.4em"
      >
        +
      </Button>
    </Wrapper>
  );
};
