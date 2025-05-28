// components/ClientNav.tsx
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';
export default function ClientNav() {
  return (
    <View className="flex-row justify-around bg-white py-4 border-t border-gray-200">
      {/* Home */}
      <TouchableOpacity onPress={() => router.push('/client/post-job')} className="items-center">
        <Ionicons name="home-outline" size={24} color="black" />
        <Text className="text-xs text-black">Home</Text>
      </TouchableOpacity>

      {/* Leads */}
      <TouchableOpacity onPress={() => router.push('/(tabs)/client/my-job')} className="items-center">
        <Ionicons name="briefcase-outline" size={24} color="black" />
        <Text className="text-xs text-black">Leads</Text>
      </TouchableOpacity>

      {/* Profile */}
      <TouchableOpacity onPress={() => router.push('/(tabs)/client/profile')} className="items-center">
        <Ionicons name="person-outline" size={24} color="black" />
        <Text className="text-xs text-black">Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
