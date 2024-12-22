import { ComponentProps } from "react";
import { Button, Text } from "@gluestack-ui/themed";

type Props = ComponentProps<typeof Button> & {
  name: string;
  isActive: boolean;
};

export function MuscleGroupSelector({ name, isActive, ...rest }: Props) {
  return (
    <Button
      mr="$3"
      minWidth="$24"
      h="$10"
      bg="$primary900"
      rounded="$md"
      justifyContent="center"
      alignItems="center"
      borderColor="$primary300"
      borderWidth={isActive ? 1 : 0}
      {...rest}
    >
      <Text
        color={isActive ? "$primary300" : "$gray200"}
        textTransform="uppercase"
        fontSize="$xs"
        fontFamily="$heading"
      >
        {name}
      </Text>
    </Button>
  );
}
