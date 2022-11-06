import React, { useContext } from 'react';
import { NavigationEvents  } from 'react-navigation';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext  } from '../context/AuthContext';

const SigninScreen = ()=> {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);
    return (
        <View style={styles.container}>
        <NavigationEvents 
         onWillFocus={clearErrorMessage}
        />
        <AuthForm
          headerText="Sign in for Tracker"
          errorMessage={state.errorMessage}
          submitButtonText="Sign In"
          onSubmit={signin}
        />
        {state.loading && <ActivityIndicator size="large" color="#00ff00" />}
       <NavLink
        routeName="Signup"
        text="Don't have an account? create instead!"
       />
      </View>
    )
}

SigninScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };
const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 200,
      }
});
export default SigninScreen;