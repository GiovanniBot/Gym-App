import { VStack, HStack, Heading, Text, Icon } from "@gluestack-ui/themed";
import { LogOut } from "lucide-react-native";

import { UserImage } from "./UserImage";

export function HomeHeader() {
  return (
    <HStack
      bg="$primary900"
      pt="$16"
      pb="$5"
      px="$6"
      alignItems="center"
      gap="$4"
    >
      <UserImage
        source={require("@assets/user.png")}
        alt="User profile image"
        w="$16"
        h="$16"
      />

      <VStack flex={1}>
        <Text color="$gray100" fontSize="$sm">
          Olá,{" "}
        </Text>
        <Heading color="$gray100" fontSize="$md">
          Giovanni
        </Heading>
      </VStack>

      <Icon as={LogOut} color="$gray200" size="xl" />
    </HStack>
  );
}
