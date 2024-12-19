import {
  VStack,
  Image,
  Center,
  Text,
  Heading,
  ScrollView,
} from "@gluestack-ui/themed";

import { useNavigation } from "@react-navigation/native";

import { AuthNavigationRoutesProps } from "@routes/auth.routes";

import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignUp() {
  const navigation = useNavigation<AuthNavigationRoutesProps>();

  function handleSignIn() {
    navigation.goBack();
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="People training"
          w="$full"
          h={624}
          position="absolute"
          top={0}
        />

        <VStack flex={1} px="$10" pt="$14">
          <Center my="$24">
            <Logo width={210} height={70} />
          </Center>

          <Center gap="$2">
            <Heading color="$gray100" fontSize="$xl">
              Sign up
            </Heading>

            <Input placeholder="Name" autoCapitalize="words" />
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder="Password" secureTextEntry />
            <Input placeholder="Confirm password" secureTextEntry />

            <Button title="Create account" my="$4" />
          </Center>

          <Center pt={30}>
            <Text color="$gray200" fontSize="$md">
              Already have an account?
            </Text>
            <Text
              color="$primary300"
              fontSize="$lg"
              underline
              onPress={handleSignIn}
            >
              Sign in
            </Text>
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
