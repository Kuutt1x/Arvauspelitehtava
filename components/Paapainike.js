import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export default function Paapainike({ title, onPress, disabled }) {
  return (
    <Pressable
    onPress={onPress} disabled={disabled} style={({ pressed }) => [styles.painike,disabled && styles.painikePois,pressed && !disabled && styles.painikePainettu,]}
    >
    <Text style={styles.painikeTeksti}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  painike: {marginTop: 8,backgroundColor: "#2e86de",paddingVertical: 12,paddingHorizontal: 18,borderRadius: 6,},
  painikePainettu: { opacity: 0.85 },
  painikePois: { opacity: 0.5 },
  painikeTeksti: { color: "#fff", fontWeight: "700", letterSpacing: 0.3 },
});
