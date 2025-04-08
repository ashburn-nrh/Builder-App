import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Post Job',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hammer" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="my-job/index"
        options={{
          title: 'My Job',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="clipboard" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />

      {/* 👇 This hides non-tab files from showing in the tab bar */}
      <Tabs.Screen name="post-job/[category]" options={{ href: null }} />
      <Tabs.Screen name="post-job/[category]/invite" options={{ href: null }} />
      <Tabs.Screen name="login" options={{href:null}}/>
      <Tabs.Screen name="sign-up" options={{href:null}}/>
      <Tabs.Screen name="post-job/index" options={{href:null}}/>
      <Tabs.Screen name="my-job/[id]" options={{ href: null }} />
      
    </Tabs>
  );
}
