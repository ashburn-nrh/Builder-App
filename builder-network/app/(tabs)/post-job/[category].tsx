import { View, Text, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { jobFollowUps } from '../../../constants/JobCategory';
import { useJob } from '@/context/JobContext';

export default function JobDetails() {
    
  const { category } = useLocalSearchParams();
  const job = Array.isArray(category) ? category[0] : category;
  const followUp = jobFollowUps[job];
  const router = useRouter();

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  if (!followUp) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-center text-gray-500">
          No follow-up questions available for "{job}"
        </Text>
      </View>
    );
  }

  const handleNext = () => {
    if (selectedOption) {
      router.push(`/post-job/${job}/invite`);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="px-4 py-4 bg-gray-100 border-b border-gray-200">
        <Text className="text-xl font-bold text-gray-800">Job Details: {job}</Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text className="text-lg font-semibold mb-4">{followUp.question}</Text>

        {followUp.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedOption(option)}
            className={`mb-3 p-4 rounded-lg border ${
              selectedOption === option ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50'
            }`}
          >
            <Text className="text-gray-800">{option}</Text>
          </TouchableOpacity>
        ))}

        {selectedOption && (
          <TouchableOpacity
            onPress={handleNext}
            className="mt-6 bg-blue-600 py-3 rounded-lg"
          >
            <Text className="text-white text-center font-semibold text-base">Next</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
    </SafeAreaView>
  );
}
