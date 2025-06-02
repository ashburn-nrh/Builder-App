import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  StatusBar,
  useColorScheme,
  ScrollView,
  Image
} from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import LightLogo from '@/components/LightLogo';

import { useAppStore } from '@/store/useAppStore';
import ClientNav from '@/components/ClientNav';
import TradespersonNav from '@/components/TradespersonNav';

import  Girl  from '../../assets/images/Girl.png'
import HeroImage from '../../assets/images/hero.png';
import Screenshot from '../../assets/images/screenshot.png'

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
    <SafeAreaView className="flex-1 bg-blue-600">
      {/* Scrollable Content */}

        {/* Header */}
        <View className="flex-row justify-between items-center px-4 py-4 bg-gray-900 border-b border-gray-300">
          <LightLogo />
          <Text className="text-white text-xl font-extrabold px-5">
            <Text className="text-blue-500 text-2xl">B</Text>UILDER NETWORK
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
              <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 10 }}
      >
        {/* Top Hero Section */}
        <View className="flex-1 justify-center px-10 mt-10">
          <Text className="text-white tracking-wider text-sm mb-3">
            THE RELIABLE WAY TO HIRE A
          </Text>
          <Text className="text-white text-4xl font-extrabold leading-tight mb-4">
            TRADES PERSON
          </Text>
        </View>

        {/* CTA box */}
        <View className="px-10 mt-4 ">
          <View className="bg-white px-4 py-3 rounded-2xl w-64">
            <Text className="text-gray-700 font-bold text-lg mb-1">What Is Your Job?</Text>
            <TouchableOpacity className="flex-row items-center justify-between">
              <Text className="text-blue-500 font-semibold text-sm">FOR EXAMPLE: PAINTING</Text>
              <Ionicons name="arrow-forward" size={16} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <Image
          source={HeroImage}
          style={{alignContent: 'center', width: '100%', height: 350, borderRadius: 20, marginBottom: 10, marginTop: 10}}
        ></Image>

        {/* Footer Stats - STICK TO END OF HERO SECTION */}
        <View className="bg-black py-10 px-6 flex-row flex-wrap justify-around mt-8">
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
        </View>

        {/* Remaining content appears below footer */}
        <View className="flex-1 bg-primary p-5">
        <Text className="text-center text-lg font-semibold mt-4">How to hire the right trades person</Text>

        {[
          { step: 'STEP 1', text: 'Post Your Job For Free' },
          { step: 'STEP 2', text: 'Tradespeople Respond' },
          { step: 'STEP 3', text: 'Review Quotes And Choose' },
        ].map((item, index) => (
          <View key={index} className="items-center mt-8">
            <View className="w-24 h-24 rounded-full border-2 border-blue-600 bg-gray-200" />
            <Text className="mt-2 font-bold text-blue-700">{item.step}</Text>
            <Text className="text-center text-gray-700">{item.text}</Text>
          </View>
        ))}

        <TouchableOpacity className="bg-blue-600 rounded-md mt-8 py-3 mx-8">
          <Text className="text-center text-white font-semibold">SEE HOW IT WORKS</Text>
        </TouchableOpacity>
        </View>


        {/* How It Works Section */}
{/* Why The Builder Network Section */}
        <View className="mt-10  p-4 rounded-md">
          <Text className="text-white text-xl font-semibold  mb-2">
            Why The Builder Network is the reliable way
          </Text>
          <Text className="text-white text-base mb-4">
            Hiring a tradesperson when you need one isn’t always easy. The Builder Network lets you find tradespeople who
            are right for the job.
          </Text>
          <View className=" w-24 h-24 rounded-full bg-gray-400 self-center mb-4"  />
          <View className="space-y-4">
            <View >
              <Text className="font-bold text-base text-white">The tradespeople you require</Text>
              <Text className="text-white text-base">
                Post your job for free to access tradespeople with the skills you require and get responses from those who want to do it.
              </Text>
            </View>
            <View>
              <Text className="font-bold text-base text-white">Genuine customer reviews</Text>
              <Text className="text-white text-base">
                You can read real reviews from previous customers to make informed decisions.
              </Text>
            </View>
            <View>
              <Text className="font-bold text-base text-white">You're in control</Text>
              <Text className="text-white text-base">
                Only the tradespeople you choose can contact you. View profiles and feedback to decide who to hire.
              </Text>
            </View>
          </View>
          <Text className=' text-white text-center text-2xl mt-3'>
            Ready to Hire a Tradesperson?
          </Text>
          <TouchableOpacity className="bg-black  mt-6 py-4 rounded-full ">
            <Text className="text-center text-white font-bold ">POST YOUR JOB</Text>
          </TouchableOpacity>
        </View>

        {/* Popular Trades */}
        <View className=" mt-10 mb-10">
          <Text className="text-2xl font-semibold mb-4 text-center">Popular trades</Text>
          <View className="flex-row justify-between">
            <View className="items-center w-[48%] p-4 bg-gray-100 rounded-md">
              <View className="w-16 h-16 rounded-full bg-blue-600 mb-2" />
              <Text className="font-medium text-center">Painting & Decorating</Text>
              <Text className="text-xs text-center text-gray-600 mt-1">
                Thinking About Giving Your Space A Fresh, New Look?
              </Text>
            </View>
            <View className="items-center w-[48%] p-4 bg-gray-100 rounded-md">
              <View className="w-16 h-16 rounded-full bg-blue-600 mb-2" />
              <Text className="font-medium text-center">Plumbing</Text>
              <Text className="text-xs text-center text-gray-600 mt-1">
                Curious If You Need A Professional Plumber?
              </Text>
            </View>
          </View>
        </View>

        {/* Image Section */}
        <View className='flex-1 items-center mt-5'>
          <Image 
          source={Girl}
          style={{ justifyContent: 'center', alignItems: 'center',  }}>

          </Image>
        </View>
        {/* image section ends here */}

        <View className='flex-1 mt-8 mx-10'>
          <Text className='text-white text-2xl font-semibold '>Looking for leads?</Text>
          <Text className='text-white text-xl mt-2 font-semibold'>Grow your business with{'\n'}
The Builder Network</Text>
          <Text className='text-white text-base mt-2'>The Builder Network is the reliable way to get more of the
work you want. Sign up for free to receive a steady
stream of local job opportunities that match your
skills. Take on big jobs or smaller gap fillers - it’s up
to you.</Text>
        </View>
        <View className='flex-1 items-center mt-5 mb-10 bg-primary p-5 rounded-md'> 
          <Image
          source={Screenshot}></Image>
        </View>

      </ScrollView>
    </SafeAreaView>
  </>
);

}
