// app/(tabs)/my-job/index.tsx
import { View, Text, FlatList, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const dummyJobs = [
  {
    id: '1',
    category: 'Plumbing',
    option: 'Fix leaking pipe',
    invitesSent: ['Alice Builder', 'Bob Construct'],
  },
  {
    id: '2',
    category: 'Electrical',
    option: 'Install ceiling fan',
    invitesSent: ['Charlie Works'],
  },
];

export default function MyJobScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1  bg-gradient-to-b from-primary to-white ">
    <View className="flex-1 bg-primary p-4">
      <Text className="text-3xl font-bold text-gray-800 mb-6">My Jobs</Text>


      <FlatList
      className='' 
        data={dummyJobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/my-job/${item.id}`)}
            className="mb-4 p-4 bg-white rounded-lg shadow-sm"
          >
            <Text className="text-lg font-semibold text-gray-800">{item.category}</Text>
            <Text className="text-gray-600">{item.option}</Text>
            <Text className="text-sm text-gray-500 mt-1">
              Invites Sent: {item.invitesSent.length}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
    </SafeAreaView>
  );
}
