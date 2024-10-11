import { View, Text, StyleSheet } from "react-native";
import { Image, Input, Button } from "@rneui/themed";
import { Link } from "expo-router";

export default function RegisterPage() {
  return (
    <View style={styles.container}>
      <Input
        label="Nome"
        placeholder="Digite seu nome"
        inputContainerStyle={{ borderBottomWidth: 0 }}
        style={styles.input}
        inputMode="text"
        labelStyle={{ color: "black", marginBottom: 8 }}
      />
      <Input
        label="Email"
        placeholder="Digite seu email"
        inputContainerStyle={{ borderBottomWidth: 0 }}
        style={styles.input}
        inputMode="email"
        labelStyle={{ color: "black", marginBottom: 8 }}
      />
      <Input
        label="Senha"
        placeholder="Digite sua senha"
        inputContainerStyle={{ borderBottomWidth: 0 }}
        secureTextEntry={true}
        style={styles.input}
        labelStyle={{ color: "black", marginBottom: 8 }}
      />
      <Button
        title="Cadastrar"
        buttonStyle={{
          backgroundColor: "black",
          borderWidth: 2,
          borderColor: "white",
          borderRadius: 30,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{ fontWeight: "bold" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
    padding: 8,
  },
});
