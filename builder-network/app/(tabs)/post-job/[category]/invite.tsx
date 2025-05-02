import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const iconButtons = [
  {
    name: 'send-outline',
    type: 'Ionicons',
    label: 'Send invites',
    route: '/send-invites',
  },
  {
    name: 'message1',
    type: 'AntDesign',
    label: 'Get responses',
    route: '/messages',
  },
  {
    name: 'people-outline',
    type: 'Ionicons',
    label: 'Start chats',
    route: '/people',
  },
];

// Updated dummy data with rating and location
const dummyTradespersons = [
  { id: '1', name: 'Alice Builder', rating: 4.5, location: 'New York' },
  { id: '2', name: 'Bob Construct', rating: 4.0, location: 'Los Angeles' },
  { id: '3', name: 'Charlie Works', rating: 3.8, location: 'Chicago' },
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

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesome key={`full-${i}`} name="star" size={16} color="#fbbf24" />);
    }
    if (halfStar) {
      stars.push(<FontAwesome key="half" name="star-half-full" size={16} color="#fbbf24" />);
    }
    while (stars.length < 5) {
      stars.push(<FontAwesome key={`empty-${stars.length}`} name="star-o" size={16} color="#fbbf24" />);
    }

    return <View className="flex-row space-x-1">{stars}</View>;
  };

  return (
    <SafeAreaView className="flex-1 bg-primary">
      {/* Header */}
      <View className="flex-row px-6 py-4 bg-white border-b border-gray-200 items-center">
        <TouchableOpacity
          onPress={() => router.push('/(tabs)/post-job')}
          className="mr-4"
        >
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
            <View className="bg-white p-4 rounded-xl mb-3">
              <Text className="text-gray-800 text-lg font-semibold mb-1">
                {item.name}
              </Text>

              {/* Location */}
              <Text className="text-gray-500 text-sm mb-1">📍 {item.location}</Text>

              {/* Rating */}
              <View className="mb-2">{renderStars(item.rating)}</View>

              {/* Invite Button */}
              <View className="flex-row justify-end">
                <TouchableOpacity
                  onPress={() => handleInvite(item.name)}
                  className="bg-blue-500 px-4 py-2 rounded-lg"
                >
                  <Text className="text-white font-medium">Invite</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
