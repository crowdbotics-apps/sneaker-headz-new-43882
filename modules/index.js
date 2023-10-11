import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, FlatList } from 'react-native';
const dummyData = [{
  id: '1',
  name: 'John Doe',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '2',
  name: 'Jane Doe',
  image: 'https://tinyurl.com/42evm3m3'
} // Add more dummy data here
];

const ScreenComponent = () => {
  return <SafeAreaView style={_styles.oTjmliif}>
      <View style={_styles.AENmcoEY}>
        <Text style={_styles.tDXJAiQQ}>Section 1:</Text>
        <TextInput placeholder="Group name" style={_styles.HQAFgwsQ} />
        <TextInput placeholder="Group description" style={_styles.MZfNBIBH} />

        <Text style={_styles.wYAyTVLL}>Section 2:</Text>
        <TextInput placeholder="Add people" style={_styles.KOINfMBR} />
        <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
        item
      }) => <View style={_styles.ZVJSnYAI}>
              <Image source={{
          uri: item.image
        }} style={_styles.CaSQrSpX} />
              <Text style={_styles.dsrSuvIQ}>{item.name}</Text>
            </View>} />
        <View style={_styles.jYtZuyat}>
          <Button title="Add Users" onPress={() => {}} />
          <Button title="Remove Users" onPress={() => {}} />
        </View>

        <Text style={_styles.uvxZenRW}>Section 3:</Text>
        <View style={_styles.wEwhIcaO}>
          <Button title="Create Group" onPress={() => {}} />
          <Button title="Cancel" onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  oTjmliif: {
    flex: 1,
    backgroundColor: "#fff"
  },
  AENmcoEY: {
    padding: 20
  },
  tDXJAiQQ: {
    fontSize: 20,
    fontWeight: "bold"
  },
  HQAFgwsQ: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    padding: 10,
    marginTop: 10
  },
  MZfNBIBH: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    padding: 10,
    marginTop: 10
  },
  wYAyTVLL: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  KOINfMBR: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    padding: 10,
    marginTop: 10
  },
  ZVJSnYAI: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  CaSQrSpX: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  dsrSuvIQ: {
    marginLeft: 10
  },
  jYtZuyat: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  uvxZenRW: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  wEwhIcaO: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  }
});