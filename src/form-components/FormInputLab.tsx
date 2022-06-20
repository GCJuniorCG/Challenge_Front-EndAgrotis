import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Controller } from "react-hook-form";

import { FormInputProps } from "./FormInputProps";

import { Laboratorios } from "../data";

export const FormInputLab: React.FC<FormInputProps> = ({
  name,
  control,
  label,
}) => {
  return (
    <FormControl fullWidth>
      <Controller
        name={name}
        control={control}
        rules={{
          required: "Campo obrigatório",
        }}
        render={({ field, fieldState: { error } }) => {
          return (
            <>
              <InputLabel className={error?.message ? " Mui-error" : ""}>
                {label}
              </InputLabel>
              <Select required error={!!error} {...field}>
                {Laboratorios.map((option: any) => {
                  return (
                    <MenuItem key={option.id} value={option.id}>
                      {option.nome}
                    </MenuItem>
                  );
                })}
              </Select>
              {error && error.message && (
                <Typography
                  variant="caption"
                  display="block"
                  className="MuiFormHelperText-root Mui-error"
                >
                  Campo obrigatório
                </Typography>
              )}
            </>
          );
        }}
      />
    </FormControl>
  );
};
