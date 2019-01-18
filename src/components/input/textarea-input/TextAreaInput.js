import React from 'react';

import classes from './TextAreaInput.module.css';

const textareaInput = props => {
  const { editing, value } = props;
  return (
    <div
      className={[
        classes.Container,
        editing ? classes.Edit : classes.Disabled
      ].join(' ')}
    >
      <textarea
        className={[
          classes.Input,
          editing ? classes.Edit : classes.Disabled
        ].join(' ')}
        disabled={!editing}
        value={value}
      />
    </div>
  );
};

export default textareaInput;
