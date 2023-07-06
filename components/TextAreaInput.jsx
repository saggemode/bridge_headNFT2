import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
const TextAreaInput = ({
  fieldName,
  label,
  register,
  errors,
  placeHolder,
  isRequired,
  maximLength,
  minimLength,
  isPattern,
  onChange,
  FormHelperText,
  FormErrorMessage,
  isInvalid,
  rows,
}) => {
  return (
    <FormControl marginTop="8" isRequired={isRequired} isInvalid={isInvalid}>
      {label && <FormLabel htmlFor="input-field">{label}</FormLabel>}
      <Textarea
        placeholder={placeHolder}
        resize="none"
        autoComplete="off"
        onChange={onChange}
        rows={rows}
        {...register(fieldName, {
          required: {
            value: isRequired,
            message: "This is required",
          },
          maxLength: {
            value: maximLength,
            message: `Value must be maximum ${maximLength}`,
          },
          minLength: {
            value: minimLength,
            message: `Value must be minimum ${minimLength}`,
          },
          pattern: {
            value: isPattern,
            message: "Please enter valid email",
          },
        })}
      />

      {/* <p>{errors[fieldName] && errors[fieldName].message} </p> */}
      {FormHelperText && <FormHelperText>{FormHelperText}</FormHelperText>}
      {FormErrorMessage && (
        <FormErrorMessage>{FormErrorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default TextAreaInput;
