import { Center, Heading, Text } from "@gluestack-ui/themed";

type Props = {
  title: string;
};

export function DefaultHeader({ title }: Props) {
  return (
    <Center bg="$primary900" pb="$6" pt="$16">
      <Heading color="$gray100" fontSize="$xl" fontFamily="$heading">
        {title}
      </Heading>
    </Center>
  );
}
