import React, { useState,useRef, useImperativeHandle } from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const PasswordSignUp = React.forwardRef((props, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  useImperativeHandle(ref, () => ({
    togglePasswordVisibility: () => {
      togglePasswordVisibility();
      inputRef.current.focus();
    },
  }));

  return (
    <FormControl variant="outlined" error={props.error || null}>
      <InputLabel htmlFor="outlined-adornment-password">
        {props.label}
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={togglePasswordVisibility} edge="end">
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        value={props.value}
        onChange={props.onChange}
        labelWidth={props.labelWidth || 70}
        className={props.className}
        onBlur={props.onBlur || null}
        inputRef={inputRef}
      />
      {props.helperText && <FormHelperText>{props.helperText}</FormHelperText>}
    </FormControl>
  );
});

export default PasswordSignUp;
