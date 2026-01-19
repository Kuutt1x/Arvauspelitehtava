import React from "react";
import { StyleSheet, TextInput } from "react-native";
export default function ArvausSyote({ value, onChangeText, disabled }) {
  return (
    <TextInput value={value}onChangeText={onChangeText}placeholder=""keyboardType="number-pad"editable={!disabled}style={[styles.syote, disabled && styles.syotePois]}maxLength={3}/>);
}

const styles = StyleSheet.create({
  syote: {width: 140,height: 44,borderWidth: 1,borderColor: "#bbb",borderRadius: 6,paddingHorizontal: 12,fontSize: 18,textAlign: "center",marginTop: 8,},
  syotePois: { opacity: 0.6 },
});
