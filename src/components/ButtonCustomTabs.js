import {Button, Linking} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';

const ButtonCustomTabs = () => {
  const openUrl = async url => {
    if (await InAppBrowser.isAvailable()) {
      InAppBrowser.open(url, {
        // iOS Properties
        dismissButtonStyle: 'cancel',
        preferredBarTintColor: '#453AA4',
        preferredControlTintColor: 'white',
        readerMode: true,
        animated: true,
        modalEnabled: true,
        // Android Properties
        showTitle: true,
        toolbarColor: '#6200EE',
        secondaryToolbarColor: 'black',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
        // Animation
        animations: {
          startEnter: 'slide_in_right',
          startExit: 'slide_out_left',
          endEnter: 'slide_in_left',
          endExit: 'slide_out_right',
        },
      });
    } else {
      Linking.openURL(url);
    }
  };
  return (
    <Button
      title="Press Me"
      onPress={() =>
        openUrl(
          'https://beta.mercadopago.com.ar/checkout/v1/beta11/redirect?preference-id=239658604-a222518f-db60-4278-af59-f94ca88c4472&device-override=mobile&deeplink=true',
        )
      }
    />
  );
};

export default ButtonCustomTabs;
