import { useState } from "react";
import { FlatList } from "react-native";
import { HStack, Heading, Text, VStack } from "@gluestack-ui/themed";

import { HomeHeader } from "@components/HomeHeader";
import { MuscleGroupSelector } from "@components/MuscleGroupSelector";
import { ExerciseCard } from "@components/ExerciseCard";

export function Home() {
  const [groupSelected, setGroupSelected] = useState("Triceps");
  const [muscleGroups, setMuscleGroups] = useState<string[]>([
    "Triceps",
    "Biceps",
    "Shoulders",
    "Back",
    "Chest",
  ]);
  const [exercises, setExercises] = useState([
    "Machine Shoulder Press",
    "Lateral Raise",
    "Front Raise",
    "Upright Row",
    "Triceps Pushdown",
    "Skull Crusher",
    "French Press",
  ]);

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        style={{ marginVertical: 30, maxHeight: 40, minHeight: 40 }}
        data={muscleGroups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <MuscleGroupSelector
            name={item}
            isActive={groupSelected.toUpperCase() === item.toUpperCase()}
            onPress={() => setGroupSelected(item)}
          />
        )}
      />

      <VStack px="$6" flex={1}>
        <HStack justifyContent="space-between" alignItems="center" mb="$5">
          <Heading color="$gray200" fontSize="$md" fontFamily="$heading">
            Exercícios
          </Heading>

          <Text color="$gray200" fontSize="$sm" fontFamily="$body">
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <ExerciseCard />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 45 }}
        />
      </VStack>
    </VStack>
  );
}
