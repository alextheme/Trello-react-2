/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import React from 'react';

const Board = (props: { title: string }): JSX.Element => {
  const { title } = props;
  return <span className="boards__list-element-title">{title}</span>;
};

export default Board;