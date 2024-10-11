import { View, StyleSheet } from "react-native";
import { Input, Button } from "@rneui/themed";

export default function ResetPage() {
  return (
    <View style={styles.container}>
      <Input
        label="Email"
        placeholder="Digite seu email"
        inputContainerStyle={{ borderBottomWidth: 0 }}
        style={styles.input}
        inputMode="email"
        labelStyle={{ color: "black", marginBottom: 8 }}
      />
      <Button
        title="Enviar"
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
