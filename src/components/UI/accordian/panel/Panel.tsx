import React, { Component } from 'react';
import Button from '../../button/Button';
import classes from './Panel.module.css';

interface PanelProps {
  children: any;
  label: string;
  odd: boolean;
  onPrimaryClicked?: () => void;
  onSecondaryClicked?: () => void;
}

interface PanelState {
  panelOpen: boolean;
}

class Panel extends Component<PanelProps, PanelState> {
  state = {
    panelOpen: false
  };

  /**
   * @name onPanelToggle
   * @description toggle panel open state
   */
  onPanelToggle = () =>
    this.setState((prevState: any) => ({ panelOpen: !prevState.panelOpen }));

  render() {
    const {
      children,
      label,
      odd,
      onPrimaryClicked,
      onSecondaryClicked
    } = this.props;
    const { panelOpen } = this.state;

    const headerClass = odd
      ? [classes.PanelHeader, classes.Odd].join(' ')
      : classes.PanelHeader;

    let panel = (
      <>
        <div className={headerClass} onClick={this.onPanelToggle}>
          <div className={classes.Label}>{label}</div>
          <span className={classes.DownArrow} />
        </div>
      </>
    );

    if (panelOpen) {
      panel = (
        <>
          <div
            className={[headerClass, classes.Editing].join(' ')}
            onClick={this.onPanelToggle}
          >
            <div className={classes.Label}>{label}</div>
            <span className={classes.UpArrow} />
          </div>
          <div>{children}</div>

          {onSecondaryClicked ? (
            <Button btnType='Flat' color='Warn' clicked={onSecondaryClicked}>
              Delete
            </Button>
          ) : null}

          {onPrimaryClicked ? (
            <Button btnType='Flat' color='Primary' clicked={onPrimaryClicked}>
              Add
            </Button>
          ) : null}
        </>
      );
    }
    return panel;
  }
}

export default Panel;
