import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { WebView } from 'react-native-webview';

const { width, height} = Dimensions.get('window');

const TravelDistance = () => {
  const [distance, setDistance] = useState(15); // in miles
  const [workEverywhere, setWorkEverywhere] = useState(false);

  const googleMapsUrl = `https://www.google.com/maps/@12.9716,77.5946,12z`;
    // Replace with actual coordinates

  const handleContinue = () => {
    // You can send `distance` and `workEverywhere` to your backend or context here
    router.replace('/(tabs)/tradesperson/TravelDistance'); // Replace with actual route
  };
  

  return (
    <SafeAreaView className="flex-1 bg-[#f7faf7] p-4">
      <Text className="text-2xl font-bold text-gray-900 mb-1">
        How far can you travel for work?
      </Text>
      <Text className="text-base text-gray-600 mb-4">
        Set the maximum distance you are willing to travel from your location.
      </Text>

      <View className="mb-4">
        <Text className="text-blue-600 font-semibold mb-1">
          438 leads in your work area
        </Text>
        <Slider
          style={{ width: width - 60, height: 40 }}
          minimumValue={5}
          maximumValue={50}
          step={1}
          value={distance}
          onValueChange={setDistance}
          minimumTrackTintColor="#1e40af"
          maximumTrackTintColor="#d1d5db"
        />
        <Text className="text-sm text-gray-700 mt-1">{distance} miles</Text>
      </View>
      <WebView
        source={{ uri: googleMapsUrl }}
        style={{ width, height }}
      />

      <View className="flex-row items-center my-6">
        <Switch
          value={workEverywhere}
          onValueChange={setWorkEverywhere}
          thumbColor={workEverywhere ? '#2563eb' : '#ccc'}
        />
        <Text className="ml-2 text-gray-800">I work throughout the </Text>
      </View>

      <TouchableOpacity
        onPress={handleContinue}
        className="bg-blue-700 py-3 rounded-lg"
      >
        <Text className="text-center text-white font-semibold text-lg">
          Continue
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TravelDistance;
