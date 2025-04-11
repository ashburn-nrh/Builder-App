import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';

const iconButtons = [
  {
    name: 'send-outline',
    type: 'Ionicons',
    label: 'Send invites',
    route: '/send',
  },
  {
    name: 'message1',
    type: 'AntDesign',
    label: 'Get reponses',
    route: '/messages',
  },
  {
    name: 'people-outline',
    type: 'Ionicons',
    label: 'Start chats',
    route: '/people',
  },
];

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
    router.push('/'); // or navigate elsewhere
  };

  const renderIcon = (icon: typeof iconButtons[0]) => {
    const IconComponent = icon.type === 'Ionicons' ? Ionicons : AntDesign;

    return (
      <TouchableOpacity
        key={icon.route}
        onPress={() => router.push(icon.route)}
        className="items-center"
      >
        <IconComponent name={icon.name as any} size={24} color="black" />
        <Text className="text-xs text-black mt-1">{icon.label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-primary">
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
      <View className="flex-1 p-4">
        {/* Icons Row */}
        <View className="flex-row justify-evenly items-center mb-4">
          {iconButtons.map(renderIcon)}
        </View>

        {/* Heading */}
        <Text className="text-2xl font-bold mb-4 text-black">
          Recommended Tradespersons{category ? ` for ${category}` : ''}
        </Text>

        {/* List */}
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
