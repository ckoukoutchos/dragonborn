import React from 'react';

import classes from './TextAreaInput.module.css';

interface TextareaInput {
  editing: boolean;
  onChange: any;
  value?: string;
}

const textareaInput = (props: TextareaInput) => {
  const { editing, onChange, value } = props;
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
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default textareaInput;
