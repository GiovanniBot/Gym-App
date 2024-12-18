import { Center, Spinner } from "@gluestack-ui/themed";

export default function Loading() {
  return (
    <Center flex={1}>
      <Spinner color={"$primary100"} />
    </Center>
  );
}
