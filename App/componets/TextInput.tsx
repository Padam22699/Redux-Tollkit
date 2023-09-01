import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  TextInput as PaperTextInput,
  Button,
  DefaultTheme,
  IconButton,
} from 'react-native-paper';
import {Black, Primary, ligthYellow} from '../Colors/Colors';
interface TextProps {
  placeHolder: string;
  error?: boolean;
  errorMassage?: string;
  value: string;
  onChange: (value: string) => void;
  passWord?: true;
  passWorsShow?: boolean;
  KeyBordType?: any;
}

const TextInput: React.FC<TextProps> = ({
  placeHolder,
  error,
  errorMassage,
  value,
  onChange,
  passWorsShow,
  KeyBordType,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.inputConatiner}>
      <PaperTextInput
        theme={theme}
        style={{width: '85%', height: 60}}
        label={placeHolder}
        value={value}
        mode="outlined"
        keyboardType={KeyBordType}
        // email-address
        //  numeric
        secureTextEntry={passWorsShow}
        error={error}
        onChangeText={newText => onChange(newText)}
        right={
          <IconButton
            icon={() => <Icon name={'eye'} size={20} color={Black} />}
            iconColor={Black}
          />
        }
      />
      {error ? (
        <Text
          style={{
            alignSelf: 'flex-start',
            marginLeft: 32,
            marginTop: 5,
            color: '#800000',
          }}>
          {errorMassage}
        </Text>
      ) : null}
    </View>
  );
};

export default TextInput;
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Primary,
    accent: ligthYellow,
    text: 'black',
    placeholder: 'gray',
    background: 'white',
    surface: 'white',
    disabled: ligthYellow,
  },
  roundness: 4,
  TextInput: {
    underlineColor: 'transparent',
    borderColor: ligthYellow,
    borderWidth: 1,
  },
};
const styles = StyleSheet.create({
  inputConatiner: {
    // marginTop: '20%',
    alignItems: 'center',
  },
});
