import { View, Text, StyleSheet } from "react-native";
import { Link, router } from "expo-router";
import {
  Box,
  Button,
  ButtonText,
  Center,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Icon,
  Input,
  InputField,
} from "@gluestack-ui/themed";
import { CircleUserRound } from "lucide-react-native";

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <CircleUserRound color="black" size={128} />
      <Box w="$72" m="$6">
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
        <Button backgroundColor="gray">
          <ButtonText>Logar-se</ButtonText>
        </Button>
        <Button variant="solid" mt="$2" onPress={() => router.push("/register")} backgroundColor="black">
          <ButtonText>Cadastrar-se</ButtonText>
        </Button>
        <Center m="$6">
          <Link href="/reset">
            <Text>Esqueceu sua senha?</Text>
          </Link>
        </Center>
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
