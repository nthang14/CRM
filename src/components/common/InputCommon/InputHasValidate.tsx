import { Control, Controller } from "react-hook-form";
import { InputProps, TextField } from "@mui/material";
export type InputType = {
  control: Control | undefined;
  rules: object;
  label?: string;
  error: any;
  className?: string;
  name: string;
  inputProps: Partial<InputProps>;
  type: string;
  onChange?: any;
  disabled?: boolean;
  defaultValue?: string;
  attribute?: any;
};
const InputHasValidate = ({ ...props }: InputType) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      defaultValue=""
      rules={props.rules}
      render={({ field }) => (
        <TextField
          autoFocus
          className={`w-full ${props.className}`}
          label={props.label}
          {...field}
          value={field.value.trim()}
          defaultValue={props.defaultValue}
          type={props.type}
          onChange={(e) => {
            props.onChange(e);
          }}
          onBlur={(e) => field.onBlur()}
          disabled={!!props.disabled}
          error={!!props.error}
          helperText={`${props.error ? props.error.message : ""}`}
          InputProps={props.inputProps}
          inputProps={props.attribute}
        />
      )}
    />
  );
};

export default InputHasValidate;
