import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


import store from './services/store';
import Rooter from './services/rooter';

const App = () => {
  return (
    <>
        <Provider store={store}>
          <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
              <Rooter />
            </SafeAreaView>
          </SafeAreaProvider>
        </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;