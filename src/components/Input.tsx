import { ComponentProps } from "react";
import {
  Input as GSInput,
  InputField,
  FormControl,
  FormControlError,
  FormControlErrorText,
} from "@gluestack-ui/themed";

type Props = ComponentProps<typeof InputField> & {
  errorMessage?: string | null;
  isInvalid?: boolean;
  isReadOnly?: boolean;
};

export function Input({
  isReadOnly = false,
  errorMessage = null,
  isInvalid = false,
  ...rest
}: Props) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} w="$full">
      <GSInput
        isInvalid={invalid}
        h="$14"
        rounded="$md"
        borderWidth="$1"
        borderColor="$primary900"
        $focus={{
          borderWidth: "$1",
          borderColor: invalid ? "$red500" : "$primary100",
        }}
        $invalid={{
          borderWidth: "$1",
          borderColor: "$red500",
        }}
        isReadOnly={isReadOnly}
        opacity={isReadOnly ? 0.6 : 1}
      >
        <InputField
          bg="$primary950"
          px="$4"
          borderWidth="$1"
          borderColor="$primary900"
          color="$white"
          fontFamily="$body"
          placeholderTextColor="$gray300"
          {...rest}
        />
      </GSInput>

      <FormControlError>
        <FormControlErrorText color="$red500" fontFamily="$body">
          {errorMessage}
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
}
