import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import './global.css';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-2xl font-bold">Hello, Expo!</Text>
        <Text className="text-gray-500">This is a simple Expo app.</Text>
      </View>
    </>
  );
}
