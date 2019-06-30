export const isNumber = (number: number | string) => {
  if (typeof number === 'number') {
    return true;
  } else if (typeof parseInt(number) === 'number') {
    return true;
  } else {
    return false;
  }
}

export const passwordMatch = (password1: string, password2: string) => password1 === password2;

const emailRegex = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;

export const validEmail = (email: string) => emailRegex.test(email);

export const validPassword = (password: string) => password.trim().length > 5;