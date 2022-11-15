import { useFormik } from 'formik';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAppDispatch, useTypedSelector } from '../../hooks/redux-toolkit';
import { loginSchema } from '../../schemas/login.schema';
import { logInThunk } from '../../store/features/auth/auth.thunk';

const Login = () => {
  const dispatch = useAppDispatch();
  const { isAuthLoading } = useTypedSelector(store => store.auth);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      dispatch(logInThunk(values))
    },
    validationSchema: loginSchema
  })

  const { values, handleChange, handleBlur, handleSubmit, isValid, errors, dirty } = formik;

  return (
    <View style={styles.container}>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter an email..."
          placeholderTextColor="#003f5c"
          value={values.email}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter a password..."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          value={values.password}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
        />
      </View>

      <TouchableOpacity
        onPress={() => handleSubmit()}
        disabled={!(isValid && dirty) || isAuthLoading}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          Login
        </Text>
      </TouchableOpacity>

    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },

  button: {
    backgroundColor: '#FF6464',
    width: "85%",
    borderRadius: 15,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: '#FFFFFF'
  },

  image: {
    marginBottom: 40,
    width: "50%",
    height: "20%",
  },

  inputView: {
    backgroundColor: "#FFDDD2",
    borderRadius: 10,
    width: "85%",
    height: 45,
    marginBottom: 20,
  },

  errorView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
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

export default Login