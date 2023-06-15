import {useEffect} from 'react';
import React from 'react';

import MainStack from './navigation/MainStack';
import {Linking} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';

function App(): JSX.Element {
  useEffect(() => {
    Linking.addEventListener('url', res => {
      const {url} = res;
      if (url !== null && url.includes('myapp')) {
        InAppBrowser.close();
      }
    });
  }, []);

  return <MainStack />;
}

export default App;
