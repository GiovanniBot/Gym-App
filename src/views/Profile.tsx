import { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";

import { VStack, Center, Text, Heading, useToast } from "@gluestack-ui/themed";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

import { DefaultHeader } from "@components/DefaultHeader";
import { UserImage } from "@components/UserImage";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

import UserPhotoDefault from "@assets/userPhotoDefault.png";
import { ToastMessage } from "@components/ToastMessage";

export function Profile() {
  const [userPhoto, setUserPhoto] = useState<string>(UserPhotoDefault);

  const toast = useToast();

  async function handleChangePhoto() {
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: "images",
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });

      if (photoSelected.canceled) {
        return;
      }

      const photoURI = photoSelected.assets[0].uri;

      if (photoURI) {
        const photoInfo = (await FileSystem.getInfoAsync(photoURI)) as {
          size: number;
        };

        if (photoInfo.size && photoInfo.size / 1024 / 1024 > 5) {
          return toast.show({
            placement: "top",
            render: ({ id }) => (
              <ToastMessage
                id={id}
                action="error"
                title="Photo too large"
                description="Please choose a photo smaller than 5MB"
                onClose={() => toast.close(id)}
              />
            ),
          });
        }

        setUserPhoto(photoURI);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <VStack flex={1}>
      <DefaultHeader title="Profile" />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt="$6" px="$10">
          <UserImage source={userPhoto} alt="User Image" size="xl" />

          <TouchableOpacity onPress={handleChangePhoto}>
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
