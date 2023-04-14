import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    card: {
        width: 300,
        height: 600,
        padding: 10,
        backgroundColor: 'black',
        alignItems: "center",
        position: "relative",
        borderRadius: 10,
        marginHorizontal: 30
    },
    
    card_img: {
        width: "100%",
        height: "50%",
    },
    
    img: {
        width: "100%",
        height: "100%"
    },
    
    content: {
        width: "100%",
        height: "100%",
        backgroundColor: "#a4031f",
        border: "10px solid #a4031f",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 10,
    },
    
    card_content: {
        width: "100%",
        height: "50%",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 5,
    },
    
    nome: {
        width: "70%",
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: "center",
        padding: 5,
        backgroundColor: "#f2a359",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
        borderRadius: 10
    },
    
    descricao: {
        color: 'white',
        fontSize: 18,
        fontWeight: '400',
        textAlign: "center",
    }
})

export default styles;