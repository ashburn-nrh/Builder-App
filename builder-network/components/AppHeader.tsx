// components/AppHeader.tsx
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import LightLogo from './LightLogo'; // adjust path if needed

type AppHeaderProps = {
  onBackPress: () => void;
};

export default function AppHeader({ onBackPress }: AppHeaderProps) {
  return (
    <View className="flex-row items-center px-4 py-4 bg-white border-b border-gray-200">
  {/* Back Arrow */}
  <TouchableOpacity onPress={onBackPress} className="mr-2 ml-2">
    <Ionicons name="arrow-back" size={24} color="black" />
  </TouchableOpacity>

  {/* Logo and Title */}
  <View className="flex-row items-center ">
  <LightLogo />
  <Text
    className="text-blue-500 text-xl font-extrabold ml-4"
    numberOfLines={1}
  >
    THE <Text className="text-blue-500 text-2xl">B</Text>UILDER NETWORK
  </Text>
</View>
</View>

  );
}
