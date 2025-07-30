import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  StatusBar,
  useColorScheme,
  ScrollView,
  Image,
  Button
} from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { Entypo, Feather, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import LightLogo from '@/components/LightLogo';

import { useAppStore } from '@/store/useAppStore';
import ClientNav from '@/components/ClientNav';
import TradespersonNav from '@/components/TradespersonNav';

import background from '../../assets/images/Background.png';

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

{/* background image */}
        <ImageBackground
      source={background}      
      style={{ flex: 1 }}
      className="pt-16"
    >
        {/* Top Hero Section */}
        <View className="flex-1 items-center px-10 mt-20 mb-44">
          <Text className="text-white tracking-wider text-sm mb-3">
            THE RELIABLE WAY TO HIRE A
          </Text>
          <Text className="text-white text-4xl font-extrabold leading-tight mb-4">
            TRADES PERSON
          </Text>
        </View>

        {/* CTA box */}
        <View className="items-center px-10 mt-10 mb-24">
          <View className="bg-white px-4 py-3 rounded-2xl w-64">
            <Text className="text-gray-700 font-bold text-lg mb-1">What Is Your Job?</Text>
            <TouchableOpacity className="flex-row items-center justify-between">
              <Text className="text-blue-500 font-semibold text-sm">FOR EXAMPLE: PAINTING</Text>
              <Ionicons name="arrow-forward" size={16} color="black" />
            </TouchableOpacity>
          </View>
        </View>
{/* 
        <Image
          source={HeroImage}
          style={{alignContent: 'center', width: '100%', height: 350, borderRadius: 20, marginBottom: 10, marginTop: 10}}
        ></Image> */}



        {/* Footer Stats - STICK TO END OF HERO SECTION */}
        <View className="bg-black py-10 px-6 flex-row flex-wrap justify-around mt-">
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
        </ImageBackground>

        {/* Remaining content appears below footer */}
        <View className="flex-1 bg-white p-5">
        <Text className="text-center text-xl font-semibold mt-4">How to hire the right </Text>
        <Text className='text-center text-xl font-semibold mt-2 text-blue-700'>tradesperson</Text>

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

        <TouchableOpacity className="bg-blue-600 rounded-full mt-8 py-3 mx-12">
          <Text className="text-center text-white font-semibold">SEE HOW IT WORKS</Text>
        </TouchableOpacity>
        </View>


        {/* How It Works Section */}
{/* Why The Builder Network Section */}
    <ScrollView className="flex-1 bg-black px-5 pt-10">
      <Text className="text-white text-2xl font-bold mb-2">Why The Builder Network is</Text>
      <Text className="text-white text-2xl font-bold mb-4">the reliable way</Text>
      <Text className="text-white text-base mb-6">
        Hiring a tradesperson when you need one isn’t always easy. The Builder Network simplifies
        the process, giving you confidence and control every step of the way.
      </Text>

      {/* Card: Find Skilled Tradespeople */}
      <View className="bg-white rounded-2xl p-5 mb-4 flex-row items-start space-x-4">
        <FontAwesome5 name="tools" size={28} color="#1D4ED8" />
        <View className="flex-1">
          <Text className="text-black font-bold text-lg mb-1">Find Skilled Tradespeople</Text>
          <Text className="text-gray-600">
            Post your job for free and connect with professionals who have the right skills for the
            task. Only those interested will respond — you choose who to engage.
          </Text>
        </View>
      </View>

      {/* Card: Genuine Customer Reviews */}
      <View className="bg-white rounded-2xl p-5 mb-4 flex-row items-start space-x-4">
        <MaterialIcons name="verified-user" size={28} color="#1D4ED8" />
        <View className="flex-1">
          <Text className="text-black font-bold text-lg mb-1">Genuine Customer Reviews</Text>
          <Text className="text-gray-600">
            Read real reviews from previous customers to help you make informed hiring decisions
            with confidence.
          </Text>
        </View>
      </View>

      {/* Card: Full Control at Every Step */}
      <View className="bg-white rounded-2xl p-5 mb-4 flex-row items-start space-x-4">
        <Entypo name="lock-open" size={28} color="#1D4ED8" />
        <View className="flex-1">
          <Text className="text-black font-bold text-lg mb-1">Full Control at Every Step</Text>
          <Text className="text-gray-600">
            Browse profiles, work history, and ratings before you chat. Only the tradespeople you
            select can contact you.
          </Text>
        </View>
      </View>

      {/* Card: A Hassle-Free Experience */}
      <View className="bg-white rounded-2xl p-5 mb-10 flex-row items-start space-x-4">
        <Feather name="thumbs-up" size={28} color="#1D4ED8" />
        <View className="flex-1">
          <Text className="text-black font-bold text-lg mb-1">A Hassle-Free Experience</Text>
          <Text className="text-gray-600">
            No cold calls, no pressure. Just an easy-to-use platform that lets you manage the
            process on your terms — from start to finish.
          </Text>
        </View>
      </View>
      </ScrollView>

      <View className="flex-row bg-blue-600 px-5 py-8 items-center justify-between">
        {/* Text on the left */}
        <Text className="text-white text-xl font-bold">
          Ready to hire{'\n'}a trades person
        </Text>

        {/* Button on the right */}
        <TouchableOpacity className="bg-white rounded-full px-4 py-2 items-center justify-center">
          <Text className="text-black text-base font-semibold">Post your job now</Text>
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
        {/* Download App Section */}
<View className="bg-[#001534] px-5 pt-8 pb-6">
  <Text className="text-white text-2xl font-bold mb-3">Download our app</Text>
  <Text className="text-white text-base leading-6 mb-4">
    Posting and managing your jobs is even easier with the Builder Network app.
    Add photos and information in an instant and keep things moving with notifications and chat,
    allowing you to message tradespeople wherever you are. Once the job’s done,
    leave a rating and review straight from your phone.
  </Text>

  {/* Download Buttons */}
  <View className="flex-row space-x-4 mt-2 mb-4">
    <TouchableOpacity className="bg-white rounded-md px-4 py-3">
      <Image
        source={require('@/assets/images/googleplay.png')}
        className="w-32 h-10"
        resizeMode="contain"
      />
    </TouchableOpacity>
    <TouchableOpacity className="bg-white rounded-md px-4 py-3">
      <Image
        source={require('@/assets/images/app-store.png')}
        className="w-32 h-10"
        resizeMode="contain"
      />
    </TouchableOpacity>
  </View>

  <Text className="text-white mt-2">
    Looking for our trades' person app? <Text className="underline">Find it here</Text>
  </Text>
</View>

{/* Review Section */}
<View className="bg-[#F1F8FF] p-6">
  <View className="bg-[#007BFF] rounded-xl p-6">
    <Text className="text-white text-xl font-bold mb-2">Millions of genuine reviews</Text>
    <Text className="text-white text-base mb-4">
      Reviews on The Builder Network are written by customers like you
    </Text>
    <TouchableOpacity className="bg-black px-6 py-3 rounded-lg self-start">
      <Text className="text-white font-semibold">Post your job</Text>
    </TouchableOpacity>
  </View>
</View>

{/* Final CTA Section */}
<View className="bg-[#0057D9] flex items-center justify-center p-6">
  <Image
    source={require('@/assets/images/homescreen3.png')} // Add your illustration asset
    className=""
    resizeMode="contain"
  />
  <TouchableOpacity className="bg-white rounded-full px-12 py-4 ">
    <Text className="text-black font-semibold">Post your job now</Text>
  </TouchableOpacity>
</View>
        {/* Footer Section */}
<View className="bg-black px-6 py-10">
  {/* First Links Column */}
  <View className="flex flex-wrap flex-row justify-between">
    <View className="space-y-3 mb-6 w-1/2">
      {[
        'Post a job',
        'How it works',
        'Find trades',
        "Customer helpdesk",
        "Ask a trades' person",
        'Register as trades person',
        'Quality requirements',
        'Reviews policy',
        'Tradespeople helpdesk',
      ].map((text, index) => (
        <Text key={index} className="text-white underline text-sm">
          {text}
        </Text>
      ))}
    </View>

    {/* Second Links Column */}
    <View className="space-y-3 mb-6 w-1/2">
      {['About us', 'Press and media', 'Vacancies', 'Become a partner', 'Trades', 'Services', 'Cities', 'Pricing guides'].map((text, index) => (
        <Text key={index} className="text-white underline text-sm">
          {text}
        </Text>
      ))}
    </View>
  </View>

  {/* Rating Dots & TrustPilot */}
  <View className="flex-row justify-center space-x-4 mt-6">
    {[1, 2, 3].map((_, i) => (
      <View key={i} className="w-6 h-6 bg-[#f4fef4] rounded-full" />
    ))}
  </View>

  <View className="mt-4 items-center">
    <Image
      source={require('@/assets/images/trustpilot.png')} // Replace with your Trustpilot asset
      className="w-52 h-8"
      resizeMode="contain"
    />
  </View>

  {/* App Store Buttons */}
  <View className="flex-row justify-center space-x-4 mt-6">
    <Image
      source={require('@/assets/images/app-store.png')}
      className="w-36 h-12"
      resizeMode="contain"
    />
    <Image
      source={require('@/assets/images/googleplay.png')}
      className="w-36 h-12"
      resizeMode="contain"
    />
  </View>

  {/* Footer Bottom */}
  <View className="mt-6 space-y-3">
    {['Privacy', 'Cookie policy', 'Cookie settings', 'Terms and conditions'].map((text, i) => (
      <Text key={i} className="text-white underline text-sm text-center">
        {text}
      </Text>
    ))}
    <Text className="text-white text-xs text-center mt-4">© 2008–2025 The Builder Network Limited</Text>
  </View>
</View>

{/* Find tradespeople + Professions Section */}
<View className="bg-blue-600 px-6 py-10 space-y-8">
  {/* Cities */}
  <View>
    <Text className="text-white font-bold text-base mb-4">Find tradespeople in your area</Text>
    <View className="flex-row flex-wrap justify-between">
      {[
        'London', 'Manchester', 'Glasgow', 'Bristol', 'Birmingham', 'Nottingham',
        'Leeds', 'Liverpool', 'Sheffield', 'Edinburgh', 'Cardiff', 'Leicester',
        'Stockport', 'Newcastle Upon Type', 'Milton Keynes', 'Northampton',
        'Norwich', 'Derby', 'Reading', 'Coventry', 'Stoke On Trent', 'Cambridge',
        'Southampton', 'More cities +',
      ].map((city, i) => (
        <Text key={i} className="text-white underline w-1/2 text-sm mb-2">
          {city}
        </Text>
      ))}
    </View>
  </View>

  {/* Professions */}
  <View>
    <Text className="text-white font-bold text-base mb-4">Our tradespeople's professions</Text>
    <View className="flex-row flex-wrap justify-between">
      {[
        'Handymen', 'Painters and Decorators', 'Builders', 'Landscape Gardeners',
        'Carpenters', 'Plasterers', 'Tilers', 'Flooring Fitters',
        'Fencers', 'Bricklayers', 'Bathroom Fitters', 'Window Fitters',
        'Kitchen Fitters', 'Fascias and Soffits Installers',
        'Gas Engineers', 'Roofers', 'Fireplace Installers', 'More trades +',
      ].map((trade, i) => (
        <Text key={i} className="text-white underline w-1/2 text-sm mb-2">
          {trade}
        </Text>
      ))}
    </View>
  </View>

  {/* Instar Group Links */}
  <View className="pt-6 border-t border-white/20">
    <Text className="text-white font-semibold mb-2">Part of the Instar Group and Anti family</Text>
    <View className="space-y-1">
      <Text className="text-white text-xs">
        USA: <Text className="underline">HomeAdvisor</Text> & <Text className="underline">Anti</Text> & <Text className="underline">Instar</Text>
      </Text>
      <Text className="text-white text-xs">Canada: <Text className="underline">Homes tars</Text></Text>
      <Text className="text-white text-xs">The Netherlands: <Text className="underline">Workshop</Text></Text>
      <Text className="text-white text-xs">France: <Text className="underline">Travail</Text></Text>
      <Text className="text-white text-xs">Germany: <Text className="underline">Hammer</Text></Text>
      <Text className="text-white text-xs">Austria: <Text className="underline">Hammer</Text></Text>
      <Text className="text-white text-xs">Italy: <Text className="underline">Instar</Text></Text>
    </View>
  </View>
</View>
      </ScrollView>
    </SafeAreaView>
  </>
);

}
