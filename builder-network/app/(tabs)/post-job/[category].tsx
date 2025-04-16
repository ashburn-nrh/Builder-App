import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { jobCategories } from '@/constants/JobCategory';
import { Ionicons } from '@expo/vector-icons';

export default function JobDetails() {
  const { category } = useLocalSearchParams();
  const job = Array.isArray(category) ? category[0] : category;
  const router = useRouter();

  const followUp = jobCategories[job];



  const [steps, setSteps] = useState<any[]>(followUp ? [followUp] : []);
  const [selections, setSelections] = useState<string[]>([]);

  const handleOptionSelect = (option: any) => {
    const currentStep = steps[steps.length - 1];

    // Add selected option
    setSelections(prev => [...prev, typeof option === 'string' ? option : option.label]);

    // If the option has a next step, add it
    if (option.next) {
      setSteps(prev => [...prev, option.next]);
    }
  };

  const handleBack = () => {
    if (steps.length > 1) {
      setSteps(prev => prev.slice(0, -1));
      setSelections(prev => prev.slice(0, -1));
    } else {
      router.push('/post-job');
    }
  };

  const handleNext = () => {
    // You can send the selections to the next screen via query or context
    router.push(`/post-job/${job}/invite`);
  };

  if (!followUp) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-center text-gray-500">
          No follow-up questions available for "{job}"
        </Text>
      </View>
    );
  }

  const currentStep = steps[steps.length - 1];
  const selected = selections[steps.length - 1];

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View className="flex-1 bg-white">
        {/* Header */}
        <View className="flex-row px-6 py-4 bg-white border-b border-gray-200">
          <TouchableOpacity onPress={handleBack} className="mr-4">
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-blue-500 text-xl font-extrabold">
            <Text className="text-blue-500 text-2xl">B</Text>UILDER NETWORK
          </Text>
        </View>

        {/* Content */}
        <ScrollView className="bg-primary" contentContainerStyle={{ padding: 16, paddingBottom: 100 }}>
          <Text className="text-xl font-bold text-gray-800 mb-5">Job Details: {job}</Text>
          <Text className="text-lg font-semibold mb-4">{currentStep.question}</Text>

          {currentStep.options.map((option: any, index: number) => {
            const label = typeof option === 'string' ? option : option.label;
            const isSelected = selections[steps.length - 1] === label;
            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleOptionSelect(option)}
                className={`mb-3 p-4 rounded-lg border ${
                  isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50'
                }`}
              >
                <Text className="text-gray-800">{label}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Bottom Buttons */}
        <View className="flex-row justify-between items-center px-6 py-4 bg-white border-t border-gray-200">
          <TouchableOpacity onPress={handleBack} className="flex-1 mr-2 bg-gray-200 py-3 rounded-xl">
            <Text className="text-center text-gray-800 font-medium">Back</Text>
          </TouchableOpacity>

          {steps.length > 0 && (!currentStep.options[0]?.next || selections.length === steps.length) && (
            <TouchableOpacity onPress={handleNext} className="flex-1 ml-2 bg-blue-600 py-3 rounded-xl">
              <Text className="text-center text-white font-medium">Next</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
