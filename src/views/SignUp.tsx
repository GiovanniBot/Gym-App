import { useNavigation } from "@react-navigation/native";
import {
  VStack,
  Image,
  Center,
  Text,
  Heading,
  ScrollView,
  useToast,
} from "@gluestack-ui/themed";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { AuthNavigationRoutesProps } from "@routes/auth.routes";

import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const signUpSchema = yup.object().shape({
  name: yup.string().required("Name field is required."),
  email: yup
    .string()
    .required("E-mail field is required.")
    .email("Invalid email address"),
  password: yup
    .string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters."),
  confirmPassword: yup
    .string()
    .required("Please confirm your password.")
    .oneOf([yup.ref("password"), ""], "Passwords must match."),
});

export function SignUp() {
  const navigation = useNavigation<AuthNavigationRoutesProps>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  const toast = useToast();

  function handleGoToSignIn() {
    navigation.goBack();
  }

  function handleSignUp({
    name,
    email,
    password,
    confirmPassword,
  }: FormDataProps) {
    console.log({ name, email, password, confirmPassword });
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

            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Name"
                  autoCapitalize="words"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.name?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.email?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Password"
                  autoCapitalize="none"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.password?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Confirm password"
                  autoCapitalize="none"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                  onSubmitEditing={handleSubmit(handleSignUp)}
                  returnKeyType="send"
                  errorMessage={errors.confirmPassword?.message}
                />
              )}
            />

            <Button
              title="Create account"
              my="$4"
              onPress={handleSubmit(handleSignUp)}
            />
          </Center>

          <Center pt={24} mb="$24">
            <Text color="$gray200" fontSize="$md">
              Already have an account?
            </Text>
            <Text
              color="$primary300"
              fontSize="$lg"
              underline
              onPress={handleGoToSignIn}
            >
              Sign in
            </Text>
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
