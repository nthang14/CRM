import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import * as React from "react";
import { Control } from "react-hook-form";
import { useTranslations } from "next-intl";
import { InputProps } from "@mui/material";
import { DateValidationError } from "@mui/x-date-pickers/models";

export type DatePickerType = {
  control: Control | undefined;
  rules: object;
  label?: string;
  error: any;
  className?: string;
  name: string;
  inputProps: Partial<InputProps>;
  onChange?: any;
  disabled?: boolean;
  defaultValue?: string;
  minDate?: any;
  maxDate?: any;
  format?: string;
  setError?: any;
};

const DatePickerCommon = ({ ...props }: DatePickerType) => {
  const mint = useTranslations("mint_nft");
  const t = useTranslations();
  const [error, setError] = React.useState<DateValidationError | null>(null);
  const errorMessage = React.useMemo(() => {
    switch (error) {
      case "maxDate":
      case "minDate": {
        return "message";
      }
    }
  }, [error]);
  return (
    <DatePicker
      onChange={props.onChange}
      defaultValue={props.defaultValue}
      className={"w-full " + (props.className ?? "")}
      label={props.label}
      format={props.format || "YYYY-MM-DD"}
      minDate={props.minDate}
      maxDate={props.maxDate}
      onError={(newError) => setError(newError)}
      slotProps={{
        textField: {
          helperText: errorMessage,
        },
      }}
    />
  );
};

export default DatePickerCommon;
