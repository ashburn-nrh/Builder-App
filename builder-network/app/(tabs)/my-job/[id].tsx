import { View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const dummyJobs = {
  '1': {
    category: 'Plumbing',
    option: 'Fix leaking pipe',
    invitesSent: ['Alice Builder', 'Bob Construct'],
  },
  '2': {
    category: 'Electrical',
    option: 'Install ceiling fan',
    invitesSent: ['Charlie Works'],
  },
};

export default function JobDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const job = dummyJobs[id ?? ''];

  if (!job) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-gray-500">Job not found.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
    <View className="flex-1 bg-white p-6">
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.push('/my-job')} className="mb-4 flex-row items-center">
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text className="text-2xl font-bold text-gray-800 mb-4">Job Details</Text>

      {/* Job Card */}
      <View className="bg-gray-100 p-4 rounded-lg mb-6">
        <Text className="text-lg font-semibold text-gray-800">Category: {job.category}</Text>
        <Text className="text-gray-700 mt-1">Option: {job.option}</Text>
        <Text className="text-gray-700 mt-1">
          Invites Sent: {job.invitesSent.join(', ')}
        </Text>
      </View>

      {/* Buttons */}
      <TouchableOpacity className="bg-blue-600 py-3 rounded-lg mb-4">
        <Text className="text-white text-center font-semibold">Edit Job</Text>
      </TouchableOpacity>

      <TouchableOpacity className="bg-red-500 py-3 rounded-lg">
        <Text className="text-white text-center font-semibold">Close Job</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}
