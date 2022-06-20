import { TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

import { FormInputProps } from "./FormInputProps";

export const FormInputObservacao = ({
  name,
  control,
  label,
}: FormInputProps) => {
  const maxChars = 1000;
  const [charsCount, setCharsCount] = useState(0);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const { onChange } = field;

        return (
          <>
            <TextField
              helperText={error ? error.message : null}
              error={!!error}
              fullWidth
              multiline
              rows={4}
              label={label}
              {...field}
              onChange={(e) => {
                setCharsCount(e.target.value.length);
                onChange(e);
              }}
            />
            <Typography align="right" variant="caption" display="block">
              {charsCount}/{maxChars}
            </Typography>
          </>
        );
      }}
    />
  );
};
