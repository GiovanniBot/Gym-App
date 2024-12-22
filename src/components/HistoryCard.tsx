import { HStack, Heading, VStack, Text } from "@gluestack-ui/themed";

export function HistoryCard() {
  return (
    <HStack
      w="$full"
      px="$5"
      py="$4"
      mb="$3"
      bg="$primary800"
      rounded="$sm"
      alignItems="center"
      justifyContent="space-between"
    >
      <VStack mr="$5">
        <Heading
          color="$white"
          fontSize="$md"
          textTransform="capitalize"
          fontFamily="$heading"
        >
          Triceps
        </Heading>
        <Text color="$gray100" fontSize="$md" mb="$1" numberOfLines={1}>
          Skull crusher
        </Text>
      </VStack>

      <Text color="$gray300" fontSize="$sm" mt="$1">
        20:09 PM
      </Text>
    </HStack>
  );
}
