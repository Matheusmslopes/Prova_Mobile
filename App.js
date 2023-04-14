import { StyleSheet, Text, View } from 'react-native';
import RPG from './src/components/RPG';

export default function App() {

  const cards = [
    {
      nome: "Capacete de Salomão",
      url: "https://i.pinimg.com/originals/06/24/db/0624dbe68e87cbd1be9ee0a818c62e8a.jpg",
      descricao: "Capacete que contém a sabedoria de Salomão. Contém 60 de defesa e 0 de ataque. Bônus de sabedoria aumentada. ",
    },
    {
      nome: "Armadura de pele de dragão",
      url: "https://i.pinimg.com/736x/6c/80/0b/6c800bcd0843e8dfa1d637280c123c57.jpg",
      descricao: "Armadura feita com a pele do dragão. 60 de defesa e 0 de ataque. Bônus de 20 de defesa contra ataque de dragões.",
    },
    {
      nome: "Arco de Apolo",
      url: "https://4.bp.blogspot.com/-qryTAzvIJeI/WYzifDArYwI/AAAAAAAABi4/69XiemrWaJs1jZR7kPwidK2c4PsPqXLvACLcBGAs/s640/the_evening_huntress_by_leesmith.jpg",
      descricao: "Arco que contém a energia do Sol nas suas flechas. 80 de ataque e 0 de defesa. Atinge seu poder máximo ao meio-dia.",
    },
  ];

  return (
    <View style={styles.container}>
      {cards.map((card, index) => (
        <RPG key={index} card={card} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 30,
    backgroundColor: '#20063b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
