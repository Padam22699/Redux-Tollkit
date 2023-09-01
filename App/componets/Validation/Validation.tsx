export const EmailValidation = (email: string): boolean => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (reg.test(email) === false) {
    return false;
  } else {
    return true;
  }
};
export const PasswordValidation = (Password: string): string => {
  if (Password.trim().length > 5) {
    return '';
  } else {
    return 'Password length should be 6';
  }
};

export const NameValidation = (Password: string): string => {
  if (Password.trim().length != 0) {
    return '';
  } else {
    return 'Name should not Empty';
  }
};
