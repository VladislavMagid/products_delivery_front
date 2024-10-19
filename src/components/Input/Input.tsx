import { InputProps } from "./types";
import { StyledInput, InputWrapper, InputLabel, ErrorContainer } from "./styles";

function Input({
  id,
  name,
  type = "text",
  placeholder,
  label,
  disabled,
  error,
  value,
  onChange,
}: InputProps) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <StyledInput
        disabled={disabled}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        $error={error}
        value={value}
        onChange={onChange}
      />
      {!!error && <ErrorContainer>{error}</ErrorContainer>}
    </InputWrapper>
  );
}

export default Input;