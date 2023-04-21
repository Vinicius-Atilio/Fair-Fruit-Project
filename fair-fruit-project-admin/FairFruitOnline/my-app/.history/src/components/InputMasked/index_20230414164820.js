import { useState } from 'react';
import { TextField } from '@material-ui/core';
import InputMask from 'react-input-mask';
import { forwardRef } from 'react';
import MaskedInput from 'react-text-mask';

const InputMasked = forwardRef((props, ref) => {
  const [inputRef, ...other] = useState(props.value);

//   const handleChange = (event) => {
//     setValue(event.target.value);
//     if (props.onChange) {
//       props.onChange(event);
//     }
//   };

  return (
    <MaskedInput
        {...other}
        ref={ref}
        inputRef={inputRef}
        maskChar=""
        mask={props.mask}
        // value={value}
        // onChange={handleChange}
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
    </MaskedInput>
  );
});

export default InputMasked;