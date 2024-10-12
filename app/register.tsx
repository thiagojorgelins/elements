import { View, StyleSheet } from "react-native";
import {
  Box,
  Button,
  ButtonText,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
} from "@gluestack-ui/themed";
import { router } from "expo-router"

export default function RegisterPage() {
  return (
    <View style={styles.container}>
      <Box w="$72" m="$6">
        <FormControl size="md">
          <FormControlLabel mb="$1">
            <FormControlLabelText>Nome</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField type="text" placeholder="Digite seu nome" />
          </Input>
        </FormControl>
        <FormControl size="md">
          <FormControlLabel mb="$1">
            <FormControlLabelText>Email</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField type="text" placeholder="Digite seu email" />
          </Input>
        </FormControl>
        <FormControl size="md">
          <FormControlLabel mb="$1">
            <FormControlLabelText>Senha</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField type="password" placeholder="Digite sua senha" />
          </Input>
        </FormControl>
      </Box>
      <Box w="$72">
        <Button backgroundColor="black" onPress={() => router.push("/")}>
          <ButtonText>Cadastrar</ButtonText>
        </Button>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
