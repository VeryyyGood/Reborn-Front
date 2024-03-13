import React from "react";
import { View, Text, Button } from "react-native";

function Login({navigation}) {
    return (
      <View>
        <Text>start!</Text>
        <Button 
          title="go to main" 
          onPress={() => navigation.navigate('Main')}
        />
      </View>
    );
  }

  export default Login;