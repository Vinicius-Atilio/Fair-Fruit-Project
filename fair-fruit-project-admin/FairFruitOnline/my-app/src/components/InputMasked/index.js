import { useState } from 'react';
import { TextField } from '@material-ui/core';
import InputMask from 'react-input-mask';
import { forwardRef } from 'react';
import MaskedInput from 'react-text-mask';

const InputMasked = (props) => {
  const [value, setValue] = useState(props.value);

  const handleChange = (event) => {
    setValue(event.target.value);
    if (props.onChange) {
      props.onChange(event);
    }
  };

  return (
    <InputMask
      maskChar=""
      mask={props.mask}
      value={value}
      onChange={handleChange}
    >
      {(inputProps) => (
        <TextField
          {...inputProps}
          id={props.id}
          label={props.label}
          variant={props.variant}
          value={props.value}
          type={props.type}
          fullWidth={props.fullWidth}
          size={props.size}
          margin={props.margin}
        />
      )}
    </InputMask>
  );
};

export default InputMasked;