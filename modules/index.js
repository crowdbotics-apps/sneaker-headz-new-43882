import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, FlatList } from 'react-native';
const sneakersData = [{
  id: '1',
  name: 'Sneaker 1',
  type: 'Casual',
  description: 'This is a casual sneaker.',
  price: '$100',
  image: 'https://tinyurl.com/42evm3m3'
} // ... add more sneakers data
];

const Screen = () => {
  return <SafeAreaView style={_styles.AOGGTUTz}>
      <View style={_styles.TVXnwJGw}>
        <Button title="My Favorite" onPress={() => {}} />
        <TextInput placeholder="Search" style={_styles.WKcvLvWM} />
        <Text>Display types</Text>
        <TextInput placeholder="Type 1" style={_styles.RIRywuyc} />
        <TextInput placeholder="Type n" style={_styles.VQfbFhzn} />
        <Text>Set price range</Text>
        <TextInput placeholder="From" style={_styles.empEOJas} />
        <TextInput placeholder="To" style={_styles.xamtfsix} />
        <Text>Set sneaker size</Text>
        <TextInput placeholder="From" style={_styles.ZObhCqIa} />
        <TextInput placeholder="To" style={_styles.IlBvOjmB} />
      </View>
      <FlatList data={sneakersData} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={_styles.OIgdhbIv}>
            <Image source={{
        uri: item.image
      }} style={_styles.DeGVVaZd} />
            <Text>{item.name}</Text>
            <Text>{item.type}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
            <Button title="Show More" onPress={() => {}} />
          </View>} />
    </SafeAreaView>;
};

export default Screen;

const _styles = StyleSheet.create({
  AOGGTUTz: {
    flex: 1,
    backgroundColor: "#fff"
  },
  TVXnwJGw: {
    padding: 20
  },
  WKcvLvWM: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  RIRywuyc: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  VQfbFhzn: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  empEOJas: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  xamtfsix: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  ZObhCqIa: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  IlBvOjmB: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  OIgdhbIv: {
    padding: 20
  },
  DeGVVaZd: {
    width: 100,
    height: 100
  }
});