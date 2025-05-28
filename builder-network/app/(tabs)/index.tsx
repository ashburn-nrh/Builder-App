import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  StatusBar,
  useColorScheme,
} from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import LightLogo from '@/components/LightLogo';

import { useAppStore } from '@/store/useAppStore';
import ClientNav from '@/components/ClientNav';
import TradespersonNav from '@/components/TradespersonNav';

const screenWidth = Dimensions.get('window').width;

export default function HomeScreen() {

  const { userType, clientJobPosted } = useAppStore();

  const [open, setOpen] = useState(false);
  const colorScheme = useColorScheme(); // Detect system theme
  const isDarkMode = colorScheme === 'dark';

  return (
    <>
      <StatusBar
        backgroundColor={isDarkMode ? 'black' : 'white'}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <SafeAreaView className="flex-1 bg-blue-700">
        {/* Header */}
        <View className="flex-row justify-between items-center px-4 py-4 bg-gray-900 border-b border-gray-300">
          <LightLogo />
          <Text className="text-white text-xl font-extrabold px-5">
            <Text className="text-blue-500 text-2xl ">B</Text>UILDER NETWORK
          </Text>

          <TouchableOpacity onPress={() => setOpen(!open)} className="p-2">
            <Ionicons name="menu" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Menu */}
        {open && (
          <View
            style={{ width: screenWidth, top: 100 }}
            className="absolute left-0 bg-white border-y border-gray-200 z-50 shadow-md mt-5"
          >
            <TouchableOpacity
              onPress={() => setOpen(false)}
              className="absolute top-3 right-4 z-50"
            >
              <Ionicons name="close" size={24} color="gray" />
            </TouchableOpacity>

            <View className="pt-8">
              <Link href="/client/post-job" asChild>
                <TouchableOpacity className="px-4 py-4 border-b border-gray-100">
                  <Text className="text-gray-700 text-base pl-4">Post Job</Text>
                </TouchableOpacity>
              </Link>

              <Link href="/login" asChild>
                <TouchableOpacity className="px-4 py-4 border-b border-gray-100">
                  <Text className="text-gray-700 text-base pl-4">Login</Text>
                </TouchableOpacity>
              </Link>

              <Link href="/tradesperson/sign-up" asChild>
                <TouchableOpacity className="px-4 py-4">
                  <Text className="text-gray-700 text-base pl-4">Sign Up as a tradesperson</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        )}

        {/* Main Content */}
        <View className="flex-1 justify-center px-10">
          <Text className="text-white tracking-wider text-sm mb-3">
            THE RELIABLE WAY TO HIRE A
          </Text>
          <Text className="text-white text-4xl font-extrabold leading-tight mb-4">
            TRADES PERSON
          </Text>
        </View>

        {/* CTA box */}
        <View className="flex-1 px-10 ">
          <View className="bg-white px-4 py-3 rounded-2xl w-64">
            <Text className="text-gray-700 font-bold text-lg mb-1">What Is Your Job?</Text>
            <TouchableOpacity className="flex-row items-center justify-between">
              <Text className="text-blue-500 font-semibold text-sm">FOR EXAMPLE: PAINTING</Text>
              <Ionicons name="arrow-forward" size={16} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/* footer stats */}
        <View className="bg-black py-10 px-6 flex-row flex-wrap justify-around">
          <View className="items-center mb-6">
            <Text className="text-white text-3xl font-bold">232,870</Text>
            <Text className="text-gray-400 text-sm">tradespeople</Text>
          </View>
          <View className="items-center mb-6">
            <Text className="text-white text-3xl font-bold">40+</Text>
            <Text className="text-gray-400 text-sm">trade categories</Text>
          </View>
          <View className="items-center">
            <Text className="text-white text-3xl font-bold">2,509,604</Text>
            <Text className="text-gray-400 text-sm">reviews</Text>
          </View>
                {userType === 'client' && clientJobPosted && <ClientNav />}
                {userType === 'tradesperson' && <TradespersonNav />}
        </View>
      </SafeAreaView>
    </>
  );
}
