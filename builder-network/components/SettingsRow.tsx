import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

interface SettingsRowProps {
  iconName: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress?: () => void;
}

const SettingsRow: React.FC<SettingsRowProps> = ({ iconName, label, onPress }) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View className="flex-row items-center justify-between m-2">
          <View className="flex-row items-center">
            <Ionicons name={iconName} size={24} color="gray" />
            <Text className="text-gray-700 text-lg pl-4">{label}</Text>
          </View>
          <Ionicons name="arrow-forward" size={24} color="gray" />
        </View>
      </TouchableOpacity>
      <View className="h-px bg-gray-300 my-2" />
    </>
  );
};

export default SettingsRow;
