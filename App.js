import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ImageBackground, ScrollView } from 'react-native';

export default function App() {
  return (
  <ScrollView>
      <ImageBackground
         style={styles.container}
         resizeMode='cover'
         source={{uri:"https://cdn.wallpapersafari.com/36/37/O5cokz.jpg"}}
      >
      <ImageBackground
         style={styles.card_veiculo}
         source={{uri:"https://cdn.autopapo.com.br/box/uploads/2021/06/24182207/ferrari-296_gtb-2022-1600-01-e16.jpg"}}
      >
        <Text style={styles.card_titulo}>Minha Ferrari</Text>
        <Text style={styles.card_valor}>Apenas - R$250.000,00</Text>
      </ImageBackground>
     <ImageBackground
      style={styles.card_veiculo}
      source={{uri:"https://cdn.autopapo.com.br/box/uploads/2021/06/24182207/ferrari-296_gtb-2022-1600-01-e16.jpg"}}
    >
      <Text style={styles.card_titulo}>Minha Ferrari</Text>
      <Text style={styles.card_valor}>Apenas - R$250.000,00</Text>
     </ImageBackground>

     <ImageBackground
      style={styles.card_veiculo}
      source={{uri:"https://cdn.autopapo.com.br/box/uploads/2021/06/24182207/ferrari-296_gtb-2022-1600-01-e16.jpg"}}
    >
      <Text style={styles.card_titulo}>Minha Ferrari</Text>
      <Text style={styles.card_valor}>Apenas - R$250.000,00</Text>
     </ImageBackground>

     <ImageBackground
      style={styles.card_veiculo}
      source={{uri:"https://cdn.autopapo.com.br/box/uploads/2021/06/24182207/ferrari-296_gtb-2022-1600-01-e16.jpg"}}
    >
      <Text style={styles.card_titulo}>Minha Ferrari</Text>
      <Text style={styles.card_valor}>Apenas - R$250.000,00</Text>
     </ImageBackground>
     
    </ImageBackground>
  </ScrollView>
 
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: 'center',
  },
  card_veiculo:{
    width: 380,
    height: 250,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 20
  },
  card_titulo:{
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#0f0f0fcf",
    paddingLeft: 10,
    color: "#FFF"
  },
  card_valor:{
    fontSize: 20,
    backgroundColor: "#0f0f0fcf",
    textAlign: "centere",
    color: "#FFF",
    marginTop: 192
  }
});
