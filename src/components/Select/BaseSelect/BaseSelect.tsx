import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { FC, useState } from "react";
import { IMarka } from "../../../types/Management/Marka";

interface Props {
  label: string;
  data?: IMarka[];
  state: string | null;
  setState?: (value: string) => void;
  setFieldValue?: (field: string, value: number | string) => void;
  fieldName?: string;
}

const BaseSelect: FC<Props> = ({
  label,
  data,
  state,
  setState,
  setFieldValue,
  fieldName,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    if (setFieldValue && fieldName) {
      setFieldValue(fieldName, event.target.value);
    } else {
      setState && setState(event.target.value);
    }
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={state === null ? "" : state}
        label={label}
        onChange={handleChange}
      >
        {data?.map((row) => (
          <MenuItem value={row.id}>{row.title}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default BaseSelect;
