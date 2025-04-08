import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { jobFollowUps } from '../../../constants/JobCategory';

export default function JobDetails() {
  const { category } = useLocalSearchParams();
  const job = Array.isArray(category) ? category[0] : category;
  const followUp = jobFollowUps[job];

  if (!followUp) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-center text-gray-500">No follow-up questions available for "{job}"</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      <View className="px-4 py-4 bg-gray-100 border-b border-gray-200">
        <Text className="text-xl font-bold text-gray-800">Job Details: {job}</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text className="text-lg font-semibold mb-4">{followUp.question}</Text>

        {followUp.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            className="mb-3 p-4 rounded-lg border border-gray-300 bg-gray-50"
          >
            <Text className="text-gray-800">{option}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
