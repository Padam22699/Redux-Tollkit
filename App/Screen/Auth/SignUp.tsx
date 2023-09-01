import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Primary, White} from '../../Colors/Colors';
import {login} from '../../Assest/ImageConstent';
import TextInput from '../../componets/TextInput';
import {Button, DefaultTheme} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  EmailValidation,
  PasswordValidation,
} from '../../componets/Validation/Validation';
import CheckBox from 'react-native-check-box';

interface loginProps {
  navigation: any;
}
const SignUp: React.FC<loginProps> = ({navigation}): React.JSX.Element => {
  const [name, Setname] = useState({value: '', errorMsg: '', error: false});
  const [mobileNumber, SetmobileNumber] = useState({
    value: '',
    errorMsg: '',
    error: false,
  });
  const [email, setEmail] = useState({value: '', errorMsg: '', error: false});
  const [Password, setPassword] = useState({
    value: '',
    errorMsg: '',
    error: false,
  });
  const [checked, setChecked] = useState(false);

  const handleEmailChange = (newValue: string) => {
    console.log(newValue);
    setEmail({value: newValue, errorMsg: '', error: false});
  };
  const handlePasswordChange = (newValue: string) => {
    console.log(newValue);

    setPassword({value: newValue, errorMsg: '', error: false});
  };
  const handleNameChange = (newValue: string) => {
    console.log(newValue);

    Setname({value: newValue, errorMsg: '', error: false});
  };
  const handleMobileNumberChange = (newValue: string) => {
    console.log(newValue);

    SetmobileNumber({value: newValue, errorMsg: '', error: false});
  };

  const handleLogin = () => {
    const EmailValidations: boolean = EmailValidation(email.value);
    let login: boolean = false;
    if (email.value.length == 0) {
      setEmail({
        value: email.value,
        errorMsg: 'Pls provide email',
        error: true,
      });
    } else {
      if (!EmailValidations) {
        setEmail({
          value: email.value,
          errorMsg: 'plz Provide Correct Email',
          error: true,
        });
      }
    }

    const PasswordValidationmas = PasswordValidation(Password.value);

    if (PasswordValidationmas.length != 0) {
      console.log('hello');
      setPassword({
        value: Password.value,
        error: true,
        errorMsg: PasswordValidationmas,
      });
    } else {
      setPassword({
        value: Password.value,
        error: false,
        errorMsg: PasswordValidationmas,
      });
    }

    if (name.value.length == 0) {
      Setname({
        value: name.value,
        error: true,
        errorMsg: 'Plz Provide name',
      });
    }

    if (mobileNumber.value.length != 10) {
      SetmobileNumber({
        value: name.value,
        error: true,
        errorMsg: 'Mobile number should be 10 characture long',
      });
    }
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="default" backgroundColor={Primary} />
      <View style={styles.conatiner2}>
        <Image
          source={require('../../Assest/Img/Login.png')}
          style={styles.loginImage}
        />
        <Text style={styles.LoginText}>SignUp</Text>
      </View>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container3}
        keyboardShouldPersistTaps="handled">
        <View style={{flex: 1, marginTop: '10%'}}>
          <TextInput
            placeHolder="Name"
            value={name.value}
            onChange={handleNameChange}
            error={name.error}
            errorMassage={name.errorMsg}
          />
          <View style={{marginTop: 30}}>
            <TextInput
              placeHolder="Mobile Number"
              value={mobileNumber.value}
              KeyBordType="numeric"
              onChange={handleMobileNumberChange}
              error={mobileNumber.error}
              errorMassage={mobileNumber.errorMsg}
            />
          </View>
          <View style={{marginTop: 30}}>
            <TextInput
              placeHolder="Email"
              value={email.value}
              onChange={handleEmailChange}
              error={email.error}
              errorMassage={email.errorMsg}
            />
          </View>
          <View style={{marginTop: 30}}>
            <TextInput
              placeHolder="Password"
              passWorsShow={!checked}
              value={Password.value}
              onChange={handlePasswordChange}
              error={Password.error}
              errorMassage={Password.errorMsg}
            />
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 40,
            }}>
            <CheckBox
              style={{marginRight: 10}} // Adjust the spacing between checkbox and text
              onClick={() => {
                setChecked(!checked);
              }}
              isChecked={checked}
            />
            <Text>Show Password</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}
            activeOpacity={0.9}
            style={{alignSelf: 'flex-end', marginRight: 20, marginTop: 30}}>
            <Text>
              Already have account'
              <Text style={{fontSize: 16, color: Primary}}>Login</Text>
            </Text>
          </TouchableOpacity>

          <View style={{alignItems: 'center', marginTop: 20}}>
            <Button
              theme={theme}
              style={{width: '80%', marginTop: 50}}
              mode="contained"
              onPress={() => handleLogin()}>
              Submit
            </Button>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

export default SignUp;
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Primary, // Change the primary color
    accent: 'green', // Change the accent color
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container3: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  conatiner2: {
    height: 250,
    backgroundColor: Primary,
    borderBottomLeftRadius: 100,
    justifyContent: 'center',
  },
  LoginText: {
    color: White,
    fontSize: 30,
    fontWeight: '600',
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: 10,
    textShadowOffset: {width: 2, height: 2},
    textShadowColor: 'rgba(255, 255, 255, 0.4)', // Lighter shadow color
    textShadowRadius: 5,
  },
  loginImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  inputConatiner: {
    marginTop: '10%',
    alignItems: 'center',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
