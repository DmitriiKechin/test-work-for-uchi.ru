import { Substrate, Wrapper, Image } from './styles';
import image from './../../main.png';
import { Title } from '../../components/stateless/title/title';
import { Dates } from '../../components/statefull/date/date';
import { Timetable } from '../../components/statefull/timetable/timetable';
import { Footer } from '../../components/stateless/footer/footer';
import { useState } from 'react';
import { getTasksStateDefault } from '../../helpers/getTasksStateDefault';
import { getDaysAmount } from '../../helpers/getDaysAmount';
import { useTasksMatrix } from '../../hooks/useTasksMatrix';

export const MainPage: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [activeCell, setActiveCell] = useState<number[]>([0, 0]);
  const [taskTimeList, setTaskTimeList] = useState<Date[]>([]);
  const tasksMatrix = useTasksMatrix(taskTimeList, date);
  const [scrollDate, setScrollDate] = useState<boolean>(false);

  return (
    <Wrapper>
      {/* <Substrate>
        <Image src={image} />
      </Substrate> */}
      <Title setTaskTimeList={setTaskTimeList} />
      <Dates
        scrollDate={scrollDate}
        setScrollDate={setScrollDate}
        date={date}
        setDate={setDate}
      />
      <Timetable
        tasksMatrix={tasksMatrix}
        activeCell={activeCell}
        setActiveCell={setActiveCell}
      />
      <Footer
        setScrollDate={setScrollDate}
        date={date}
        setDate={setDate}
        tasksMatrix={tasksMatrix}
        activeCell={activeCell}
        setTaskTimeList={setTaskTimeList}
      />
    </Wrapper>
  );
};
