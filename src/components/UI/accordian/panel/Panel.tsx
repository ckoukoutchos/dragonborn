import React, { Component } from 'react';
import Button from '../../button/Button';
import classes from './Panel.module.css';

class Panel extends Component<any> {
  state = {
    panelOpen: false
  };

  onPanelToggle = () =>
    this.setState((prevState: any) => ({ panelOpen: !prevState.panelOpen }));

  render() {
    const { children, label } = this.props;
    const { panelOpen } = this.state;

    return (
      <>
        <div
          className={
            panelOpen ? classes.PanelHeaderEditing : classes.PanelHeader
          }
          onClick={this.onPanelToggle}
        >
          <div className={classes.Label}>{label}</div>
          <Button
            color={panelOpen ? 'Primary' : 'DarkGrey'}
            btnType='CornerTopRight'
            clicked={() => null}
          >
            {panelOpen ? (
              <span className={classes.UpArrow} />
            ) : (
              <span className={classes.DownArrow} />
            )}
          </Button>
        </div>
        {panelOpen ? <div>{children}</div> : null}
      </>
    );
  }
}

export default Panel;
