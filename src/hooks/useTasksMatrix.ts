import { useEffect, useState } from 'react';
import { getTasksStateDefault } from '../helpers/getTasksStateDefault';

export function useTasksMatrix(taskTimeList: Date[], date: Date): boolean[][] {
  const [tasksMatrix, setTasksMatrix] = useState<boolean[][]>(
    getTasksStateDefault(7)
  );

  useEffect(() => {
    const marix = getTasksStateDefault(7);

    taskTimeList.forEach((taskTime) => {
      if (
        taskTime.getFullYear() !== date.getFullYear() ||
        taskTime.getMonth() !== date.getMonth() ||
        taskTime.getDate() !== date.getDate() ||
        taskTime.getHours() < 8 ||
        taskTime.getHours() > 22
      ) {
        return;
      }
      marix[taskTime.getHours() - 8][
        Math.floor(
          (taskTime.getMinutes() + taskTime.getSeconds() / 60) * 0.11667
        )
      ] = true;
    });

    setTasksMatrix(marix);
  }, [taskTimeList, date]);

  return tasksMatrix;
}
