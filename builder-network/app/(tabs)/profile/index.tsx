import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import ProfileAvatar from '@/components/ProfileAvatar';
import SettingsRow from '@/components/SettingsRow';

const Index = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView className="flex-1 px-6 pt-6" contentContainerStyle={{ paddingBottom: 20 }}>
        <Text className="text-3xl font-bold text-gray-800 mb-8">Profile</Text>

        <ProfileAvatar  
          name="Ashburn"
          imageUrl="https://randomuser.me/api/portraits/men/10.jpg"
        />

        {/* ACCOUNT SECTION */}
        <Text className="text-xl font-semibold text-gray-800 mt-10 mb-4">Account</Text>

        <SettingsRow 
          iconName="person-outline"
          label="Contact Information"
          onPress={() => {}}
        />
        <SettingsRow
          iconName="person-circle-outline"
          label="Manage account"
          onPress={() => {}}
        />
        <SettingsRow 
          iconName="help-outline"
          label="My questions"
          onPress={() => {}}
        />

        {/* SETTINGS SECTION */}
        <Text className="text-xl font-semibold text-gray-800 mt-10 mb-4">Settings</Text>

        <SettingsRow 
          iconName="notifications-outline"
          label="Notifications"
          onPress={() => {}}
        />

        {/* SUPPORT SECTION */}
        <Text className="text-xl font-semibold text-gray-800 mt-10 mb-4">Support</Text>

        <SettingsRow 
          iconName="information-circle-outline"
          label="Support center"
          onPress={() => {}}
        />
        <SettingsRow 
          iconName="chatbubble-ellipses-outline"
          label="Contact us"
          onPress={() => {}}
        />
                <SettingsRow 
          iconName="grid-outline"
          label="Download our app"
          onPress={() => {}}
        />

        {/* About */}
        <Text className="text-xl font-semibold text-gray-800 mt-10 mb-4">About</Text>

        <SettingsRow 
          iconName="book-outline"
          label=" Terms and conditions"
          onPress={() => {}}
        />


        {/* OTHERS */}
        <Text className="text-xl font-semibold text-gray-800 mt-10 mb-4">Others</Text>

        <SettingsRow 
          iconName="log-out-outline"
          label="Logout"
          onPress={() => {}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
