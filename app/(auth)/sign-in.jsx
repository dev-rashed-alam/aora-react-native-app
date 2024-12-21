import { View, Text, SafeAreaView, ScrollView, Image, Alert } from 'react-native'
import React, {useState} from 'react'
import {images} from  "../../constants"
import FormField from '../../components/FormField'
import CustomerButton from "../../components/CustomButton"
import { Link, router } from 'expo-router'
import { signIn } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {setUser, setIsLogged} = useGlobalContext()

  const submit = async () => {

    if(!form.email || !form.password){
      Alert.alert('Error', 'Please fill in all the fields');
      return;
    }

    setIsSubmitting(true)
    try {
      const result = await signIn(form.email, form.password);
      setUser(result);
      setIsLogged(true);
      router.replace('/home');
    } catch (error) {
      Alert.alert('Error', error.message)
    }finally{
      setIsSubmitting(false)
    }
  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center px-4 my-6 min-h-[95vh]'>
          <Image 
            source={images.logo}
            resizeMode='contain'
            className='w-[115px] h-[35px]'
          />

          <Text className='text-2xl text-white text-semibold mt-10 font-psemibold '>
            Log in to Aora
          </Text>

          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({...form, email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({...form, password: e})}
            otherStyles="mt-7"
          />

          <CustomerButton
            title="Sign In"
            handlePress={submit}
            containerStyle="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have account?
            </Text>
            <Link href="/sign-up" className='text-lg font-psemibold text-secondary'>Sign up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn