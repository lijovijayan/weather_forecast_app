import {useState} from 'react';
export interface IData {
  inputText: string;
  buttonDisabled: boolean;
}
export function useFormInput() {
  const [data, setCountry] = useState({
    inputText: '',
    buttonDisabled: false,
  });
  const setCountryValue = (_country: string): void => {
    setCountry({
      inputText: _country,
      buttonDisabled: _country && _country.length > 0 ? false : true,
    });
  };
  return [data, setCountryValue];
}
