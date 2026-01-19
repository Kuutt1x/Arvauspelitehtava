import { useMemo, useState } from "react";
import { Alert } from "react-native";
const satunnainen1to100 = () => Math.floor(Math.random() * 100) + 1;
export default function useArvauspeli() {
const [oikeaNumero, setOikeaNumero] = useState(() => satunnainen1to100());
const [arvausTeksti, setArvausTeksti] = useState("");
const [palaute, setPalaute] = useState("");
const [arvaustenMaara, setArvaustenMaara] = useState(0); 
const [peliPaattynyt, setPeliPaattynyt] = useState(false);
const siistitty = useMemo(() => arvausTeksti.trim(), [arvausTeksti]);
const alustaUudelleen = () => {
    setOikeaNumero(satunnainen1to100());setArvausTeksti("");setPalaute(""); setArvaustenMaara(0); setPeliPaattynyt(false);
  };
  const teeArvaus = () => {
    if (peliPaattynyt) return;
    const arvaus = parseInt(siistitty, 10);
    if (Number.isNaN(arvaus)) {
    Alert.alert("Virheellinen syöte", "Syötä numero väliltä 1–100.");
    return;
    }
    if (arvaus < 1 || arvaus > 100) {
    Alert.alert("Numero ei kelpaa", "Numeron pitää olla väliltä 1–100.");
    return;
    }
    const seuraavaMaara = arvaustenMaara + 1;
    setArvaustenMaara(seuraavaMaara);
    if (arvaus < oikeaNumero) {setPalaute(`Your guess ${arvaus} is too low`);} else if (arvaus > oikeaNumero) {setPalaute(`Your guess ${arvaus} is too high`);}
     else {setPalaute("");setPeliPaattynyt(true);
    Alert.alert("", `You guessed the number in ${seuraavaMaara} guesses`, [
    { text: "OK", onPress: alustaUudelleen },
]);
    }
    setArvausTeksti("");
  };
  return {arvausTeksti,setArvausTeksti,palaute,arvaustenMaara,peliPaattynyt,teeArvaus,alustaUudelleen,};
}
