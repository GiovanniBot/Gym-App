import { useState } from "react";
import { SectionList } from "react-native";
import { Heading, VStack, Text } from "@gluestack-ui/themed";

import { DefaultHeader } from "@components/DefaultHeader";
import { HistoryCard } from "@components/HistoryCard";

export function History() {
  const [exercises, setExercises] = useState<any[]>([
    {
      title: "20.09.24",
      data: ["Triceps pushdown", "Skull crusher"],
    },
    {
      title: "24.12.24",
      data: ["Biceps curl"],
    },
  ]);

  return (
    <VStack flex={1}>
      <DefaultHeader title="History" />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading
            color="$primary100"
            fontFamily="$heading"
            fontSize="$md"
            mt="$10"
            mb="$3"
          >
            {section.title}
          </Heading>
        )}
        style={{ paddingHorizontal: 24 }}
        contentContainerStyle={
          exercises.length === 0 && {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }
        }
        ListEmptyComponent={() => (
          <Text color="$gray300">No history found</Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}
