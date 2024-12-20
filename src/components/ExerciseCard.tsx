import {
  HStack,
  VStack,
  Heading,
  Image,
  Text,
  Icon,
} from "@gluestack-ui/themed";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ChevronRight } from "lucide-react-native";

type Props = TouchableOpacityProps;

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="$gray500"
        rounded="$sm"
        alignItems="center"
        p="$0"
        pr="$6"
        mb="$3"
      >
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/1366052585/pt/foto/shot-of-a-group-of-friends-hanging-out-before-working-out-together.jpg?s=612x612&w=0&k=20&c=2mu-p2mc-2PP54HcmO9bRBbWYjlX-t5y5ZXaabpPmKs=",
          }}
          alt="Exercise image"
          w="$20"
          h="$20"
          rounded="$sm"
          mr="$4"
          resizeMode="cover"
        />

        <VStack flex={1}>
          <Heading fontSize="$md" color="$white" fontFamily="$heading">
            Pulley machine
          </Heading>
          <Text
            fontSize="$sm"
            color="$gray200"
            mt="$1"
            mb="$1"
            numberOfLines={2}
          >
            3 series x 10 reps
          </Text>
        </VStack>

        <Icon as={ChevronRight} color="$gray300" size="lg" />
      </HStack>
    </TouchableOpacity>
  );
}
