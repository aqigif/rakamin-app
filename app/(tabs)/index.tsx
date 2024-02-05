import { ScrollView, Text, View,Image } from 'react-native';

export default function TabOneScreen() {

  return (
    <ScrollView>
      <View style={{backgroundColor: 'white'}}>
        <Text>Halo React Native</Text>
      </View>
      <Text>Halo React Native</Text>
      {/* image from network */}
      <Image
        style={{
          width: 200,
          height: 200,
        }}
        source={{
          uri: 'https://studio.mrngroup.co/storage/app/media/Prambors/Editorial%203/meme%2010-20230523181152.webp?tr=w-600',
        }}
      />
      {/* image from local */}
      <Image
        style={{
          width: 200,
          height: 200,
        }}
        source={require('../../assets/images/meme.jpeg')}
      />
    </ScrollView>
  );
}

