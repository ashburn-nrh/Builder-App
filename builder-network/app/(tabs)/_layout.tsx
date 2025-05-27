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
        name="client/my-job/index"
        options={{
          title: 'My Job',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="clipboard" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="client/profile/index"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />

      {/* 👇 This hides non-tab files from showing in the tab bar */}
      <Tabs.Screen name="client/post-job/[category]" options={{ href: null }} />
      <Tabs.Screen name="client/post-job/[category]/invite" options={{ href: null }} />
      <Tabs.Screen name="login" options={{href:null}}/>
      <Tabs.Screen name="tradesperson/sign-up" options={{href:null}}/>
      <Tabs.Screen name="client/post-job/index" options={{href:null}}/>

      <Tabs.Screen name="client/my-job/CloseJob" options={{ href: null }} />
      <Tabs.Screen name="client/profile/contact/index" options={{ href: null }} />
      <Tabs.Screen name="client/post-job/[category]/work-area" options={{ href: null }} />
      <Tabs.Screen name="client/post-job/[category]/client-details" options={{ href: null }} />
      <Tabs.Screen name="tradesperson/work-details/WorkDetails" options={{ href: null }} />
      <Tabs.Screen name='tradesperson/work-details/WorkDetailsStep1' options={{ href: null }} />
            <Tabs.Screen name='tradesperson/work-details/WorkDetailsStep2' options={{ href: null }} />
      <Tabs.Screen name='tradesperson/work-details/TravelDistance' options={{ href: null }} />
      <Tabs.Screen name='tradesperson/work-details/ReviewIDCardScreen' options={{ href: null }} />
      <Tabs.Screen name='tradesperson/work-details/SelectIDScreen' options={{ href: null }} />
      <Tabs.Screen name='tradesperson/work-details/IDCheckScreen' options={{ href: null }} />
      <Tabs.Screen name='tradesperson/work-details/VerifySkillsScreen' options={{ href: null }} />
      <Tabs.Screen name='tradesperson/work-details/StrongestSkill' options={{ href: null }} />
      <Tabs.Screen name='tradesperson/work-details/Qualified' options={{ href: null }} />
      <Tabs.Screen name='tradesperson/work-details/PaymentMethod' options={{ href: null }} />
      <Tabs.Screen name='tradesperson/work-details/PrePayment' options={{ href: null }} />
      <Tabs.Screen name='tradesperson/work-details/profileIntro' options={{ href: null }} />
      <Tabs.Screen name='client/my-job/EditJob' options={{ href: null }} />
      <Tabs.Screen name='client/post-job/getResponses' options={{ href: null }} />
      <Tabs.Screen name='client/post-job/[category]/client-dashboard' options={{ href: null }} />


      
    </Tabs>
  );
}
