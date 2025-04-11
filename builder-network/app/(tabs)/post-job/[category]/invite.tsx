import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';

const dummyTradespersons = [
  { id: '1', name: 'Alice Builder' },
  { id: '2', name: 'Bob Construct' },
  { id: '3', name: 'Charlie Works' },
];

export default function InviteScreen() {
  const { category } = useLocalSearchParams<{ category: string }>();
  const router = useRouter();

  const handleInvite = (name: string) => {
    alert(`Invite sent to ${name}`);
    router.push('/'); // or route to a success/summary page
  };

  return (
    <SafeAreaView className="flex-1 bg-primary">

        {/* Header */}
        <View className="flex-row items-center mb-4 bg-white   ">
        
        <Text className="text-xl font-bold mb-4 text-black px-4 py-2  ">
          Recommended Tradespersons for {category}
        </Text>
        </View>
        <View className="flex-1 p-4">
        <FlatList
          data={dummyTradespersons}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="bg-white p-4 rounded-xl mb-3 flex-row justify-between items-center">
              <Text className="text-gray-800">{item.name}</Text>
              <TouchableOpacity
                onPress={() => handleInvite(item.name)}
                className="bg-blue-500 px-4 py-2 rounded-lg"
              >
                <Text className="text-white font-medium">Invite</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
