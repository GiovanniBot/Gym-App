import { ComponentProps } from "react";
import { ButtonSpinner, Button as GSButton, Text } from "@gluestack-ui/themed";

type Props = ComponentProps<typeof GSButton> & {
  title: string;
  isLoading?: boolean;
};

export function Button({ title, isLoading = false, ...rest }: Props) {
  return (
    <GSButton
      w="$full"
      h="$14"
      rounded="$sm"
      bg="$primary300"
      borderWidth="$0"
      $active-bg="$primary200"
      disabled={isLoading}
      $disabled={{
        bg: "$gray300",
        opacity: 0.5,
      }}
      {...rest}
    >
      {isLoading ? (
        <ButtonSpinner color={"$white"} />
      ) : (
        <Text color="$white" fontFamily="$body" fontSize="$md">
          {title}
        </Text>
      )}
    </GSButton>
  );
}
