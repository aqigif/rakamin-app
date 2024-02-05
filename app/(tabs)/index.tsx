import { ScrollView, Text, View, Image, Button, Pressable, TouchableOpacity, StyleSheet } from 'react-native';

export default function TabOneScreen() {

  // components : https://reactnative.dev/docs/components-and-apis
  // Scrollview
  // View
  // Text
  // Image
  // Button
  // Touch : TouchableOpacity, Pressable, TouchableHighlight : https://reactnative.dev/docs/handling-touches

  // styling
  return (
    <ScrollView>
      <View style={{backgroundColor: 'white'}}>
        <Text>Halo React Native</Text>
      </View>
      <Text>Halo React Native</Text>
      {/* image from network */}
      <TouchableOpacity onPress={() => console.log("hi hi touch")}>
      <Image
        style={styles.imageBox}
        source={{
          uri: 'https://studio.mrngroup.co/storage/app/media/Prambors/Editorial%203/meme%2010-20230523181152.webp?tr=w-600',
        }}
      />
      </TouchableOpacity>
      {/* image from local */}
      <Pressable onPress={() => console.log("hi hi image")}>
        <Image
          style={{
            width: 200,
            height: 200,
          }}
          source={require('../../assets/images/meme.jpeg')}
        />
      </Pressable>
      <Button title='Press me' onPress={() => console.log("hi hi button")}/>
      <TouchableOpacity>
        <View></View>
      </TouchableOpacity>

      {/* // card */}
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageBox: {
    width: 200,
    height: 200,
  }
})
