import React, { useContext } from "react";
import { NavigationEvents  } from 'react-navigation';
import { View, StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";
import { Context as AuthContext  } from '../context/AuthContext';
import NavLink from "../components/NavLink";

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
       <NavigationEvents 
         onWillFocus={clearErrorMessage}
        />
      <AuthForm
        headerText="Sign up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
     <NavLink
      routeName="Signin"
      text="Already have an account? Signin instead!"
     />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  }
});
export default SignupScreen;
