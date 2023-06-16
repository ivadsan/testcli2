import {useEffect} from 'react';
import React from 'react';

import MainStack from './navigation/MainStack';
import {Linking} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import * as RootNavigation from './RootNavigation';

function App(): JSX.Element {
  useEffect(() => {
    Linking.addEventListener('url', event => {
      const {url} = event;
      if (url !== null && url.includes('myapp://')) {
        InAppBrowser.close();
        RootNavigation.navigate('Congrats');
      }
    });
  }, []);

  return <MainStack />;
}

export default App;
