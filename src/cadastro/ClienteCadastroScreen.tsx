import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";

function AdmCadastroScreen(): JSX.Element {

    const [nome, setNome] = useState("");
    const [celular, setCelular] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [pais, setPais] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [cep, setCep] = useState("");
    const [complemento, setComplemento] = useState("");
    const [password, setPassword] = useState("");

    function cadastro(){
        const dados = {
            nome: nome,
            celular: celular,
            email: email,
            cpf:cpf,
            dataNascimento,
            cidade: cidade,
            estado: estado,
            pais: pais,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cep: cep,
            complemento: complemento,
            password: password
        }
        console.log(dados);
    }
    return(
        <View style={styles.container}>
            <ScrollView style={{height: '100%', width: "auto"}} contentContainerStyle={{paddingTop: 200}}>
            <Image style={styles.logo} resizeMode="contain" source={require('../assets/images/cliente.png')}/>

                <View style={styles.card}>
                    <Text style={styles.title}>
                        Cadastro para Cliente
                    </Text>
  <View style={styles.inputContainer}>
  <TextInput
    style={[styles.input, styles.fullWidth]}
    placeholder="Nome"
    placeholderTextColor="#151413"
    onChangeText={(textName) => setNome(textName)}
  />
  </View>
  <View style={styles.inputContainer}>
  <TextInput
    style={[styles.input, styles.fullWidth]}
    placeholder="E-mail"
    placeholderTextColor="#151413"
    onChangeText={(textEmail) => setEmail(textEmail)}
    secureTextEntry
  />
  </View>
  <View style={styles.inputContainer}>
    <TextInput
    style={[styles.input, styles.fullWidth]}
    placeholder="CPF"
    placeholderTextColor="#151413"
    onChangeText={(textCpf) => setCpf(textCpf)}
  />
  </View>
<View style={styles.inputContainer}>
    <TextInput
      style={[styles.input, styles.fullWidth]}
      placeholder="Data de Nascimento"
      placeholderTextColor="#151413"
      onChangeText={(textDataNascimento) => setDataNascimento(textDataNascimento)}
      secureTextEntry
    />
    </View>
    <View style={styles.inputContainer}>
    <TextInput
    style={[styles.input, styles.fullWidth]}
    placeholder="Cidade"
    placeholderTextColor="#151413"
    onChangeText={(textCidade) => setCidade(textCidade)}
  />
  </View>
  <View style={styles.inputContainer}>
    <TextInput
      style={[styles.input, styles.fullWidth]}
      placeholder="Estado"
      placeholderTextColor="#151413"
      onChangeText={(textEstado) => setEstado(textEstado)}
    />
</View>
<View style={styles.inputContainer}>
    <TextInput
      style={[styles.input, styles.fullWidth]}
      placeholder="País"
      placeholderTextColor="#151413"
      onChangeText={(textPais) => setPais(textPais)}
      secureTextEntry
    />
    </View>
    <View style={styles.inputContainer}>
      <TextInput
      style={[styles.input, styles.fullWidth]}
      placeholder="Rua"
      placeholderTextColor="#151413"
      onChangeText={(textRua) => setRua(textRua)}
    />
    </View>
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, styles.fullWidth]}
        placeholder="Número"
        placeholderTextColor="#151413"
        onChangeText={(textNumero) => setNumero(textNumero)}
      />
</View>
<View style={styles.inputContainer}>
  <TextInput
    style={[styles.input, styles.fullWidth]}
    placeholder="Bairro"
    placeholderTextColor="#151413"
    onChangeText={(textBairro) => setBairro(textBairro)}
    secureTextEntry
  />
  </View>
  <View style={styles.inputContainer}>
    <TextInput
    style={[styles.input, styles.fullWidth]}
    placeholder="CEP"
    placeholderTextColor="#151413"
    onChangeText={(textCep) => setCep(textCep)}
  />
  </View>
  <View style={styles.inputContainer}>
        <TextInput
        style={[styles.input, styles.fullWidth]}
        placeholder="Complemento"
        placeholderTextColor="#151413"
        onChangeText={(textComplemento) => setComplemento(textComplemento)}
      />
</View>
    <View style={styles.inputContainer}>
    <TextInput
      style={[styles.input, styles.fullWidth]}
      placeholder="Senha"
      placeholderTextColor="#151413"
      onChangeText={(textPassword) => setPassword(textPassword)}
    />
</View>

                <TouchableOpacity style={styles.button} onPress={() => {cadastro()}}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Já possui conta? Entre!</Text>
                    </TouchableOpacity>
                    </View>
        </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
      },
      input: {
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#0035FA',
        backgroundColor: '#FFFFFF'
      },
      fullWidth: {
        flex: 1,
        marginRight: 5,
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#16B3EA', 
      },
    card:{
        backgroundColor: "#09E0D0",
        width: 300,
        borderRadius: 10,
        padding: 20,
        elevation: 3,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2
    },
    logo:{
        width: 80,
        height: 80,
        marginBottom: 20,
        marginTop: -150
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 20,
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#0BDD45',
        height: 40,
        borderRadius: 8
    },
    buttonText: {
        color: '#151413',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 40,
        fontWeight: 'bold'
        
    },
    forgotPassword: {
        color: '#5174FF',
        textAlign: 'center',
        marginTop: 10,
    },
});

export default AdmCadastroScreen;