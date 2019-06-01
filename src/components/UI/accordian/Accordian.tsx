import React from 'react';
import classes from './Accordian.module.css';
import Panel from './panel/Panel';

const accordian = (props: any) => {
  const { items } = props;

  const itemList = items.map((item: any, index: number) => {
    return (
      <Panel key={index} label={item.name}>
        <p>{item.desc}</p>
      </Panel>
    );
  });

  return (
    <div className={[classes.Container, classes.Panel].join(' ')}>
      {itemList}
    </div>
  );
};

export default accordian;
