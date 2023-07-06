import { Button } from "@chakra-ui/react";

const TextButton = ({
  type,
  className = "",
  rightIcon,
  isLoading,
  processing,
  disabled,
  loadingText,
  children,
}) => {
  return (
    <Button
      type={type}
      rightIcon={rightIcon}
      isLoading={isLoading}
      disabled={disabled}
      loadingText={loadingText}
      className={
        `inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 ${
          processing && "opacity-25"
        } ` + className
      }
    >
      {children}
    </Button>
  );
};

export default TextButton;
