import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const professions = [
  'Plumber',
  'Electrician',
  'Painter',
  'Carpenter',
  'Welder',
  'Mason',
  'AC Mechanic',
  'Gardener',
  'Tile Fitter',
  'Glass Installer',
  'Cleaner',
  'Pest Controller',
];

const WorkDetails = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelection = (profession: string) => {
    if (selected.includes(profession)) {
      setSelected(selected.filter((item) => item !== profession));
    } else {
      if (selected.length >= 5) {
        Alert.alert('Limit Reached', 'You can only select 5 professions.');
        return;
      }
      setSelected([...selected, profession]);
    }
  };

  const handleContinue = () => {
    if (selected.length !== 5) {
      Alert.alert('Incomplete', 'Please select exactly 5 professions to continue.');
      return;
    }

    // Save selections or send to backend here

    // Navigate to main app
    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView className="flex-1 bg-white p-6">
      <Text className="text-2xl font-bold text-gray-800 mb-4">Select 5 Professions</Text>

      <FlatList
        data={professions}
        keyExtractor={(item) => item}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 10 }}
        renderItem={({ item }) => {
          const isSelected = selected.includes(item);
          return (
            <TouchableOpacity
              onPress={() => toggleSelection(item)}
              className={`flex-1 m-1 p-3 rounded-lg ${
                isSelected ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <Text className={`text-center font-medium ${isSelected ? 'text-white' : 'text-gray-800'}`}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
      />

      <TouchableOpacity
        onPress={handleContinue}
        className="mt-6 bg-blue-700 py-3 rounded-lg"
      >
        <Text className="text-center text-white font-semibold text-lg">Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WorkDetails;

const styles = StyleSheet.create({});
