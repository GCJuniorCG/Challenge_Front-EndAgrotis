import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import React from "react";
import { Controller } from "react-hook-form";

import { FormInputProps } from "./FormInputProps";

export const FormInputDate = ({ name, control, label }: FormInputProps) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Controller
        name={name}
        control={control}
        rules={{
          required: "Campo obrigatório",
        }}
        render={({ field, fieldState: { error } }) => {
          const { ref, ...rest } = field;

          return (
            <KeyboardDatePicker
              required
              fullWidth
              variant="inline"
              label={label}
              rifmFormatter={(val) => val.replace(/[^[a-zA-Z0-9-]*$]+/gi, "")}
              refuse={/[^[a-zA-Z0-9-]*$]+/gi}
              autoOk
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              error={!!error}
              format="dd/MM/yyyy"
              {...rest}
            />
          );
        }}
      />
    </MuiPickersUtilsProvider>
  );
};
