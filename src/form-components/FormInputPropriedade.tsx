import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

import { FormInputProps } from "./FormInputProps";

import { Propriedades } from "../data";

export const FormInputPropriedade: React.FC<FormInputProps> = ({
  name,
  control,
  label,
}) => {
  const [CPNJ, setCNPJ] = useState("");

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
                {Propriedades.map((option: any) => {
                  return (
                    <MenuItem
                      key={option.id}
                      value={option.id}
                      onClick={() => {
                        setCNPJ(option.cpnj);
                      }}
                    >
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
      <Typography variant="caption" display="block">
        {CPNJ}
      </Typography>
    </FormControl>
  );
};
