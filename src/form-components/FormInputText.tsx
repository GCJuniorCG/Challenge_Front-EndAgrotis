import TextField from "@material-ui/core/TextField";
import React from "react";
import { Controller } from "react-hook-form";

import { FormInputProps } from "./FormInputProps";

export const FormInputText = ({ name, control, label }: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: "Campo obrigatório",
      }}
      render={({ field, fieldState: { error } }) => {
        return (
          <TextField
            helperText={error ? error.message : null}
            error={!!error}
            required
            fullWidth
            label={label}
            {...field}
          />
        );
      }}
    />
  );
};
