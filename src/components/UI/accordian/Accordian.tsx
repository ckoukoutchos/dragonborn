import React, { Component } from 'react';

import classes from './Accordian.module.css';
import Button from '../button/Button';

// interface SecondaryCardProps {
//   btnColor?: string[];
//   btnText?: string[];
//   children: any;
//   editing?: boolean;
//   onCancel?: any;
//   onEdit?: any;
//   label: string;
//   wide?: boolean;
// }

class Accordian extends Component<any, any> {
  state = {
    showItem: null
  };

  render() {
    const { children, editing, onEdit, items, label } = this.props;

    let button: any = null;

    if (this.state.showItem) {
      button = (
        <Button color='Primary' btnType='CornerTopRight' clicked={onEdit}>
          {editing ? (
            <span className={classes.DownArrow} />
          ) : (
            <span className={classes.UpArrow} />
          )}
        </Button>
      );
    }

    const itemList = items.map((item: any) => {
      return (
        <div className={classes.PanelHeader}>
          <div className={classes.Label}>{label}</div>
          <Button color='Primary' btnType='CornerTopRight' clicked={onEdit}>
            {editing ? (
              <span className={classes.DownArrow} />
            ) : (
              <span className={classes.UpArrow} />
            )}
          </Button>
        </div>
      );
    });

    return (
      <div className={classes.Container}>
        {itemList}
        {children}
      </div>
    );
  }
}

export default Accordian;
