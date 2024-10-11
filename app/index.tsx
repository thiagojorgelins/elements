import { View, Text, StyleSheet } from "react-native";
import { Input, Button, Icon } from "@rneui/themed";
import { Link, router } from "expo-router";

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <Icon
        name="user"
        type="font-awesome"
        size={100}
        color="black"
        style={styles.icon} 
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
        title="Logar-se"
        buttonStyle={{
          backgroundColor: "gray",
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
      <Button
        title="Cadastre-se"
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
        onPress={() => router.push("/register")}
      />
      
      <Link href="/reset">
        <Text>Esqueceu sua senha?</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
    padding: 8,
  },
});
