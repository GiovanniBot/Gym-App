import { ScrollView, TouchableOpacity } from "react-native";
import { VStack, Center, Text, Heading } from "@gluestack-ui/themed";

import { DefaultHeader } from "@components/DefaultHeader";
import { UserImage } from "@components/UserImage";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function Profile() {
  return (
    <VStack flex={1}>
      <DefaultHeader title="Profile" />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt="$6" px="$10">
          <UserImage
            source={require("@assets/user.png")}
            alt="User Image"
            size="xl"
          />

          <TouchableOpacity>
            <Text
              color="$primary300"
              fontFamily="$heading"
              fontSize="$md"
              mt="$2"
              mb="$8"
              borderStyle="solid"
              borderWidth={1}
              borderColor="$primary600"
              rounded="$md"
              px="$2"
              py="$1"
            >
              Change photo
            </Text>
          </TouchableOpacity>

          <Center w="$full" gap="$3">
            <Input
              placeholder="Name"
              value="GiovanniBot"
              bg="$primary900"
              borderColor="$primary800"
              isReadOnly
            />
            <Input
              placeholder="E-mail"
              value="giovanni.as.br@gmail.com"
              bg="$primary900"
              borderColor="$primary800"
              isReadOnly
            />
          </Center>

          <Heading
            alignSelf="flex-start"
            color="$gray200"
            fontFamily="$heading"
            fontSize="$md"
            mt="$6"
            mb="$3"
          >
            Change password
          </Heading>

          <Center w="$full" gap="$3">
            <Input
              placeholder="Current password"
              bg="$primary900"
              borderColor="$primary800"
            />
            <Input
              placeholder="New password"
              bg="$primary900"
              borderColor="$primary800"
            />
            <Input
              placeholder="Confirm password"
              bg="$primary900"
              borderColor="$primary800"
            />

            <Button title="Change password" />
          </Center>
        </Center>
      </ScrollView>
    </VStack>
  );
}
