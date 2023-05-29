import { SafeAreaView, View, Text, TextInput, Pressable, Image} from 'react-native'
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const Home = () => {
  return (
    <SafeAreaView className={`flex-1 bg-slate-50`}>
    <View className={`flex-1 items-center justify-center gap-8`}>
      <Image
        source={{ uri: 'https://source.unsplash.com/random' }}
        className={`w-24 h-24 rounded-full`}
        resizeMode="cover"
      />
      <View className={`gap-2 items-center`}>
        <Text className={`text-slate-900 text-3xl font-bold`}>Eduildo Lima</Text>
        <Text className={`text-slate-900 text-lg`}>limaeduildo@dev.com</Text>
      </View>
    </View>
    <View className={`flex-1 justify-center gap-8`}>
      <Pressable className={`flex-row items-center gap-2 px-8`}>
        <Ionicons name="settings-outline" size={24} className={`text-slate-900`} />
        <Text className={`text-slate-900 text-lg`}>Configurações</Text>
      </Pressable>
      <Pressable className={`flex-row items-center gap-2 px-8`}>
        <Ionicons name="help-buoy-outline" size={24} className={`text-slate-900`} />
        <Text className={`text-slate-900 text-lg`}>Ajuda</Text>
      </Pressable>
      <Pressable className={`flex-row items-center gap-2 px-8`}>
        <MaterialIcons name="logout" size={24} className={`text-slate-900`} />
        <Text className={`text-slate-900 text-lg`}>Sair</Text>
      </Pressable>
    </View>
  </SafeAreaView>

  )
}

export default Home