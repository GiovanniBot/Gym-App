import { TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  VStack,
  Icon,
  HStack,
  Heading,
  Text,
  Image,
  Box,
} from "@gluestack-ui/themed";
import { ArrowLeft } from "lucide-react-native";

import { AppNavigationRoutesProps } from "@routes/app.routes";

import BodySvg from "@assets/body.svg";
import SeriesSvg from "@assets/series.svg";
import RepetitionsSvg from "@assets/repetitions.svg";

import { Button } from "@components/Button";

export function Exercise() {
  const navigation = useNavigation<AppNavigationRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack flex={1}>
      <VStack px="$8" bg="$primary900" pt="$16">
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={ArrowLeft} color="$primary300" size="xl" />
        </TouchableOpacity>

        <HStack justifyContent="space-between" alignItems="center" my="$4">
          <Heading
            color="$gray100"
            fontFamily="$heading"
            fontSize="$lg"
            flexShrink={1}
          >
            Pulley
          </Heading>

          <HStack alignContent="center">
            <Icon as={BodySvg} color="$primary300" size="lg" />

            <Text color="$gray200" ml="$1" textTransform="capitalize">
              Back
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 36 }}
      >
        <VStack p="$8">
          <Image
            source={{
              uri: "https://media.istockphoto.com/id/1366052585/pt/foto/shot-of-a-group-of-friends-hanging-out-before-working-out-together.jpg?s=612x612&w=0&k=20&c=2mu-p2mc-2PP54HcmO9bRBbWYjlX-t5y5ZXaabpPmKs=",
            }}
            alt="Exercise image"
            mb="$3"
            resizeMode="cover"
            rounded="$md"
            w="$full"
            h="$80"
          />
          <Box bg="$primary900" rounded="$md" pb="$4" px="$4">
            <HStack
              alignItems="center"
              justifyContent="space-around"
              mb="$6"
              mt="$5"
            >
              <HStack>
                <SeriesSvg />
                <Text color="$gray200" ml="$2">
                  3 series
                </Text>
              </HStack>

              <HStack>
                <RepetitionsSvg />
                <Text color="$gray200" ml="$2">
                  12 repetitions
                </Text>
              </HStack>
            </HStack>

            <Button title="Mark as done" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
