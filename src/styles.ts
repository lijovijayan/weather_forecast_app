import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  'd-flex': {
    display: 'flex',
  },
  'flex-column': {
    flexDirection: 'column',
  },
  'flex-row': {
    flexDirection: 'row',
  },
  "p-10": {
    padding: 10,
  },
  input: {
      borderColor: "#000",
      borderWidth: 2,
      borderRadius: 4,
      paddingHorizontal: 10,
  },
  inputContainer: {
      padding: 3,
  },
  button: {
      backgroundColor: "blue",
      width: "100%",
      height: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
  },
  buttonText: {
    color: "#fff",
  },
  buttonContainer: {
      padding: 4,
  },
  "w-100": {
    width: "100%",
  }
});
