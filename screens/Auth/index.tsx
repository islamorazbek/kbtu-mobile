import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { Button, KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import Login from '../../components/forms/Login'
import Register from '../../components/forms/Register'
import { useTypedSelector } from '../../hooks/redux-toolkit'
import { RootStackParamList } from '../../types/routing'

type AuthScreenProps = NativeStackScreenProps<RootStackParamList, 'Auth'>

const AuthScreen: React.FC<AuthScreenProps> = ({ route, navigation }) => {
  const { isAuthenticated } = useTypedSelector(store => store.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate('Home')
    }
  }, [isAuthenticated])

  const [isRegistration, setIsRegistration] = useState(false);

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>

      {!isRegistration ?
        <Login />
        :
        <Register />
      }

      <View style={{marginTop: 10}}>
        {isRegistration ?
          <Button title='Already have an account? Log in' onPress={() => setIsRegistration(false)} />
          : <Button title='Do not have an account? Register' onPress={() => setIsRegistration(true)} />
        }
      </View>

    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  image: {
    marginBottom: 40,
    width: "50%",
    height: "20%",
  },

  inputView: {
    backgroundColor: "#FFDDD2",
    borderRadius: 30,
    width: "75%",
    height: 45,
    marginBottom: 10,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "85%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#FF6464",
  },
});

export default AuthScreen