// app/(tabs)/my-job/index.tsx
import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const dummyJobs = [
  {
    id: '1',
    title: 'Leaking Pipe Repair',
    category: 'Plumbing',
    option: 'Fix leaking pipe',
    description: 'Need to fix a leaking pipe under the kitchen sink.',
    datePosted: 'April 20, 2025',
    invitesSent: ['Alice Builder', 'Bob Construct'],
  },
  {
    id: '2',
    title: 'Ceiling Fan Installation',
    category: 'Electrical',
    option: 'Install ceiling fan',
    description: 'Looking to install a new ceiling fan in the living room.',
    datePosted: 'April 25, 2025',
    invitesSent: ['Charlie Works'],
  },
];

export default function MyJobScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-b from-primary to-white">
      <View className="flex-1 bg-primary p-4">
        <Text className="text-3xl font-bold text-gray-800 mb-6">My Jobs</Text>

        <FlatList
          data={dummyJobs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => router.push(`/my-job/${item.id}`)}
              className="mb-4 p-4 bg-white rounded-xl shadow-sm"
            >
              <Text className="text-base text-gray-500 mb-1">{item.datePosted}</Text>
              <Text className="text-xl font-bold text-gray-800 mb-1">{item.title}</Text>
              <Text className="text-sm text-gray-700 mb-2">{item.description}</Text>
              <Text className="text-sm text-gray-500 mb-1">
                Category: <Text className="font-medium">{item.category}</Text>
              </Text>
              <Text className="text-sm text-gray-500 mb-1">
                Work: <Text className="font-medium">{item.option}</Text>
              </Text>
              <Text className="text-sm text-gray-500">
                Invites Sent: {item.invitesSent.length}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
