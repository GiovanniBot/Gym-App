import { ComponentProps } from "react";
import { Input as GSInput, InputField } from "@gluestack-ui/themed";

type Props = ComponentProps<typeof InputField>;

export function Input({ ...rest }: Props) {
  return (
    <GSInput
      bg="$primary950"
      h="$14"
      px="$4"
      rounded="$md"
      borderWidth="$1"
      borderColor="$primary900"
      $focus={{
        borderWidth: "$1",
        borderColor: "$primary100",
      }}
    >
      <InputField
        color="$white"
        fontFamily="$body"
        placeholderTextColor="$gray300"
        {...rest}
      />
    </GSInput>
  );
}
