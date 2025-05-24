import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const StrongestSkill = () => {
  const { skills } = useLocalSearchParams();
  const [options, setOptions] = useState<string[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<string>('');

  useEffect(() => {
    if (skills) {
      try {
        const parsed = JSON.parse(skills as string);
        setOptions(parsed);
      } catch (e) {
        console.error('Failed to parse skills:', e);
      }
    }
  }, [skills]);

  const handleContinue = () => {
    if (!selectedSkill) return;
    // Save the strongest skill or move to the next screen
    console.log('Selected strongest skill:', selectedSkill);
    router.push('/(tabs)/tradesperson/work-details/ReviewIDCardScreen'); // Adjust accordingly
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f7fdf4] p-5">
      <Text className="text-lg text-gray-500 mb-1">Step 3/5</Text>
      <Text className="text-3xl font-bold text-gray-800 mb-2">Select your strongest skillet</Text>
      <Text className="text-base text-gray-700 mb-4">
        Pass skills evaluations to unlock leads in your areas of expertise.
      </Text>

      <ScrollView className="space-y-3 mb-6">
        {options.map((item) => (
          <Pressable
            key={item}
            onPress={() => setSelectedSkill(item)}
            className={`flex-row items-center justify-between border px-4 py-3 rounded-lg ${
              selectedSkill === item ? 'border-blue-600 bg-blue-50' : 'border-gray-300'
            }`}
          >
            <Text className="text-base text-gray-800">{item}</Text>
            <View
              className={`w-5 h-5 rounded-full border-2 ${
                selectedSkill === item ? 'border-blue-600 bg-blue-600' : 'border-gray-400'
              }`}
            />
          </Pressable>
        ))}
      </ScrollView>

      <TouchableOpacity
        disabled={!selectedSkill}
        onPress={handleContinue}
        className={`py-3 rounded-lg ${
          selectedSkill ? 'bg-blue-700' : 'bg-blue-200'
        }`}
      >
        <Text className="text-white text-center font-semibold">Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default StrongestSkill;
