/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { useEffect } from 'react';
import ReactMoE, {
  MoEGeoLocation,
  MoEProperties,
} from "react-native-moengage";
import React from 'react';
//import notifee from '@notifee/react-native';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
   MoEInitConfig, MoEPushConfig, MoEngageLogConfig, MoEngageLogLevel 
} from "react-native-moengage";

//import notifee, { EventType } from '@notifee/react-native';
// import { 
//   AndroidColor 
// } from '@notifee/react-native';

ReactMoE.setEventListener("pushTokenGenerated", (payload) => { 
  console.log("Callback event");
  console.log("ReactNative AppRunning pushTokenGenerated", payload); 
});

ReactMoE.setEventListener("pushClicked", (notificationPayload) => { 
  console.log("ReactNative pushClicked", notificationPayload); 
});

///inAppInfo is of type MoEInAppData
ReactMoE.setEventListener("inAppCampaignShown", (inAppInfo) =>
  console.log("inAppCampaignShown", inAppInfo)
);
///inAppInfo is of type MoEClickData
ReactMoE.setEventListener("inAppCampaignClicked", (inAppInfo) =>
  console.log("inAppCampaignClicked", inAppInfo)
);
///inAppInfo is of type MoEInAppData
ReactMoE.setEventListener("inAppCampaignDismissed", (inAppInfo) =>
  console.log("inAppCampaignDismissed", inAppInfo)
);
///inAppInfo is of type MoEClickData
ReactMoE.setEventListener("inAppCampaignCustomAction", (inAppInfo) =>
  console.log("inAppCampaignCustomAction", inAppInfo)
);

function App() {



  async function onDisplayNotification() {
    
    let properties = new MoEProperties();
    properties.addAttribute("quantity", true);
    properties.addAttribute("product", "iPhone");

    ReactMoE.trackEvent("Purchase", properties);
    console.log("Event Triggered")

    // Request permissions (required for iOS)
    // await notifee.requestPermission()

    // // Create a channel (required for Android)
    // const channelId = await notifee.createChannel({
    //   id: 'default',
    //   name: 'Default Channel',
    // });

    // // Display a notification
    // await notifee.displayNotification({
    //   title: 'Notification Title',
    //   body: 'Main body content of the notification',
    //   android: {
    //     channelId,
    //     smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
    //     // pressAction is needed if you want the notification to open the app when pressed
    //     pressAction: {
    //       id: 'default',
    //     },
    //   },
    // });
  }

  // useEffect(() => {
  //   return notifee.onForegroundEvent(({ type, detail }) => {
  //     switch (type) {
  //       case EventType.DISMISSED:
  //         console.log('User dismissed notification', detail.notification);
  //         break;
  //       case EventType.PRESS:
  //         console.log('User pressed notification', detail.notification);
  //         break;
  //     }
  //   });
  // }, []);
  

	ReactMoE.initialize(""); //
  ReactMoE.registerForPush();
  ReactMoE.setUserUniqueID(""); //Set Unique ID
  ReactMoE.setUserGender("Male");
  ReactMoE.showInApp()

  console.log("ReactNative AppRunning");

  return(
<SafeAreaView>
    <View>
    <Text style={styles.text}> Welcome To MoEngage </Text >
    <Text style={styles.text}> The best marketing tool</Text>
    <Button title="Display Notification" onPress={() => onDisplayNotification()} />
    </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30, // Change the font size as per requirement
    fontFamily: 'Arial', // Change the font family as per requirement
    color: 'red', // Change the font color as per requirement
  },
});

export default App;
