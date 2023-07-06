import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";

const InputField = ({ value, label, name, placeholder, type, onChange }) => (
  <FormControl marginTop="8">
    {label && <label htmlFor="input-field">{label}</label>}
    <input
      type={type}
      value={value}
      name={name}
      className="mt-8 border rounded p-4"
      placeholder={placeholder}
      onChange={onChange}
    />
  </FormControl>
);

export default InputField;

<FormControl marginTop="8" isInvalid={"!!formik.errors.name"} isRequired>
  <FormLabel>Name</FormLabel>
  <Input
    name="name"
    value={"formik.values.name"}
    onChange={"formik.handleChange"}
    autoComplete="off"
    placeholder="My awesome NFT"
  />
  <FormHelperText>Name of your NFT collection</FormHelperText>
  <FormErrorMessage>{"formik.errors.name"}</FormErrorMessage>
</FormControl>;
