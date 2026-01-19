import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ArvausSyote from "./components/ArvausSyote";
import Paapainike from "./components/Paapainike";
import useArvauspeli from "./hooks/useArvauspeli";

export default function App() {
  const { arvausTeksti, setArvausTeksti, palaute, peliPaattynyt, teeArvaus } = useArvauspeli();
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}><Text style={styles.otsikko}>Guess a number between 1-100</Text>{!!palaute && <Text style={styles.palaute}>{palaute}</Text>}<ArvausSyote value={arvausTeksti}onChangeText={setArvausTeksti} disabled={peliPaattynyt}/><Paapainike title="MAKE GUESS" onPress={teeArvaus} disabled={peliPaattynyt}
      />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
safe: { flex: 1, backgroundColor: "#fff" },
container: {flex: 1,padding: 24,alignItems: "center",justifyContent: "flex-start",gap: 16,},
otsikko: { fontSize: 20, fontWeight: "600", marginTop: 24 },
palaute: { fontSize: 18, marginTop: 16 },
});
