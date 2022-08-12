import React from 'react';
import { Days } from '../days/days';
import { Month } from '../month/month';
import { Wrapper } from './styles';
import { IDate } from './types';

export const Dates: React.FC<IDate> = (props) => {
  return (
    <Wrapper>
      <Days {...props} />
      <Month {...props} />
    </Wrapper>
  );
};
