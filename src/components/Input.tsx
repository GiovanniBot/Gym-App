import { ComponentProps } from "react";
import { Input as GSInput, InputField } from "@gluestack-ui/themed";

type Props = ComponentProps<typeof InputField> & {
  isReadOnly?: boolean;
};

export function Input({ isReadOnly = false, ...rest }: Props) {
  return (
    <GSInput
      h="$14"
      rounded="$md"
      borderWidth="$1"
      borderColor="$primary900"
      $focus={{
        borderWidth: "$1",
        borderColor: "$primary100",
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
  );
}
