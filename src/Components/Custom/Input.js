import { TextField } from "@mui/material";

export default function Input(props) {
    const { variant, name, label, required, value, type, onChange, error = null } = props;
    return (
      <TextField
        variant={variant}
        required={required}
        label={label}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        color="primary"
        {...(error && {error: true, helperText:error})}
      />
    );
  }