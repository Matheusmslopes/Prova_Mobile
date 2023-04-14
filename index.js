import { Button, Image, Text, View } from "react-native";
import styles from "./styles"

export default function RPG(props) {

    return (
        <View style={styles.card}>
            <View style={styles.card_img}>
                <Image 
                    source={{uri: props.card.url}} 
                    style={styles.img}
                />
            </View>
            <Text style={styles.nome}>{props.card.nome}</Text>
            <View style={styles.card_content}>
                <View style={styles.content}>
                    <Text style={styles.descricao}>{props.card.descricao}</Text>
                    <Button title="Trocar"
                    color = 'black'/>
                </View>
            </View>
        </View>
    );
}