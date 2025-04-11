import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { jobFollowUps } from '../../../constants/JobCategory';
import { useJob } from '@/context/JobContext';
import { Ionicons } from '@expo/vector-icons';

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

  const handleBack = () => {
    router.push('/post-job');
  };

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View className="flex-1 bg-white">
        {/* Header */}
        <View className="flex-row px-6 py-4 bg-white border-b border-gray-200">
        <TouchableOpacity onPress={() => router.push('/(tabs)/post-job')} className="mr-4">
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
                            <Text className="text-blue-500 text-xl font-extrabold">
                              <Text className="text-blue-500 text-2xl">B</Text>UILDER NETWORK
                            </Text>
        </View>

        {/* Content */}
        <ScrollView
          className="bg-primary"
          contentContainerStyle={{ padding: 16, paddingBottom: 100 }}
        >
          <Text className="text-xl font-bold text-gray-800 mb-5">Job Details: {job}</Text>
          <Text className="text-lg font-semibold mb-4">{followUp.question}</Text>

          {followUp.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedOption(option)}
              className={`mb-3 p-4 rounded-lg border ${
                selectedOption === option
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 bg-gray-50'
              }`}
            >
              <Text className="text-gray-800">{option}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Bottom Fixed Buttons */}
        {selectedOption && (
          <View className="flex-row justify-between items-center px-6 py-4 bg-white border-t border-gray-200">
            <TouchableOpacity
              onPress={handleBack}
              className="flex-1 mr-2 bg-gray-200 py-3 rounded-xl"
            >
              <Text className="text-center text-gray-800 font-medium">Back</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleNext}
              className="flex-1 ml-2 bg-blue-600 py-3 rounded-xl"
            >
              <Text className="text-center text-white font-medium">Next</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
