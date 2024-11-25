import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import {icons} from "../../constants"

const TabIcon = ({icons, color, name, focused}) => {
  return <View className="items-center justify-center gap-2">
    <Image source={icons} resizeMode='contain' tintColor={color} className='w-6 h-6' />
    {/* <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{color: color}}>{name}</Text> */}
  </View>
}

const TabsLayout = () => {
  return (
   <>
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        // tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 64,
        }
      }} 
    >
      <Tabs.Screen name='home' options={{
        title: 'Home',
        headerShown: false,
        tabBarIcon: ({color, focused}) => (<TabIcon icons={icons.home} name='Home' color={color} focused={focused} />)
      }}/>
      <Tabs.Screen name='bookmark' options={{
        title: 'Bookmark',
        headerShown: false,
        tabBarIcon: ({color, focused}) => (<TabIcon icons={icons.bookmark} name='Bookmark' color={color} focused={focused} />),
      }}/>
      
      <Tabs.Screen name='create' options={{
        title: 'Create',
        headerShown: false,
        tabBarIcon: ({color, focused}) => (<TabIcon icons={icons.plus} name='Create' color={color} focused={focused} />)
      }}/>
      
      <Tabs.Screen name='profile' options={{
        title: 'Profile',
        headerShown: false,
        tabBarIcon: ({color, focused}) => (<TabIcon icons={icons.profile} name='Profile' color={color} focused={focused} />)
      }}/>
    </Tabs>
   </>
  )
}

export default TabsLayout