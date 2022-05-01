---
title: '# Google Maps in Flutter | Easy Integration'
description: 'Google Maps In Flutter is a developer preview Widget that lets you integrate Google Maps in Flutter App. This article discusses it in detail with examples.'
date: '2019-09-03'
modified_date: '2019-09-03'
image: '/assets/images/posts'
---
# Google Maps in Flutter | Easy Integration

 [September 3, 2019September 3, 2019](https://androidmonks.com/google-maps-flutter/ "6:00 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Google Maps in Flutter | Easy Integration](#Google_Maps_in_Flutter_Easy_Integration)
	+ [1.1 Step 1 – Create API Key for Google Maps SDK](#Step_1_8211_Create_API_Key_for_Google_Maps_SDK)
	+ [1.2 Step 2 – Preparing the Google Maps in Flutter App](#Step_2_8211_Preparing_the_Google_Maps_in_Flutter_App)
		- [1.2.1 For Android](#For_Android)
		- [1.2.2 For IOS](#For_IOS)
	+ [1.3 Step 3 – GoogleMaps Widget](#Step_3_8211_GoogleMaps_Widget)
		- * + [1.3.0.0.1 GoogleMap](#GoogleMap)
				+ [1.3.0.0.2 GoogleMapController](#GoogleMapController)
				+ [1.3.0.0.3 CameraPosition](#CameraPosition)
	+ [1.4 Step 4 – Creating GoogleMaps – Example App](#Step_4_8211_Creating_GoogleMaps_8211_Example_App)
	+ [1.5 Google Maps – Conclusion](#Google_Maps_8211_Conclusion)
## Google Maps in Flutter | Easy Integration

[Google Maps in Flutter](https://androidmonks.com/google-maps-flutter/) is a very easy process to do with the help of the **google\_maps\_flutter plugin.**In this article, we will look at how to integrate Google Maps with the Flutter App in 4 simple steps.

**Note: Google Maps Flutter is still in developer preview(It cannot be released to the app store yet). Make sure to wait for the stable release before releasing.**

The main pre-requisite is to have a google cloud platform account. If you do not have one, create it here – [Google Cloud Platform](https://cloud.google.com/maps-platform/)

Once done, log in to the console and follow the steps below to create a simple **API key** for the **Google Maps SDK**

### Step 1 – Create API Key for Google Maps SDK

Make sure to log in and choose the **2nd API from the list(Maps SDK for Android)**. Since we are writing this article specific to android, make sure to do this as the first step.

![Google API List](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Google API List](https://androidmonks.com/wp-content/uploads/2019/09/Screen-Shot-2019-09-03-at-9.14.44-AM.png) **Google API List**Enable the API by clicking the button given.

![Enable the API](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Enable the API](https://androidmonks.com/wp-content/uploads/2019/09/Screen-Shot-2019-09-03-at-9.17.11-AM.png) **Enable the API**Once enabled, choose the **credentials** button on the top bar and choose the credentials tab like below.

![Credentials Tab in Maps SDK](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Credentials Tab in Maps SDK](https://androidmonks.com/wp-content/uploads/2019/09/Screen-Shot-2019-09-03-at-9.21.22-AM.png) **Credentials Tab in Maps SDK**Choose the **Create credentials** button and create a basic API key to use in the further sections.

![Create Credentials](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Create Credentials](https://androidmonks.com/wp-content/uploads/2019/09/Screen-Shot-2019-09-03-at-9.22.06-AM.png) **Create Credentials**Once this is done, **do not disclose the API key to anyone at any point since this is a private key to be used specifically to be used for your application’s Maps only.**

### Step 2 – Preparing the Google Maps in Flutter App

Once the Google Maps SDK is enabled with a Credential/API key, time to use it in our Flutter App. As a pre-requisite, fill out the following places with the key.

#### For Android

Go to the android>app>src>main>Androidmanifest.xml and make sure that the Manifest looks like below,


```
<manifest ...
 <application ...
 <meta-data android:name="com.google.android.geo.API\_KEY"
 android:value="YOUR KEY HERE"/>
```
**Where the YOUR KEY HERE is replaced with the API key we generated in Step 1**

#### For IOS

Similarly for IOS as well, make sure to edit the Appdelegate.m file like below.


```
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application
    didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  [GMSServices provideAPIKey:@"YOUR KEY HERE"];
  [GeneratedPluginRegistrant registerWithRegistry:self];
  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}
@end
```
**Where, YOUR KEY HERE is replaced with the API key we generated in Step 1**

### Step 3 – GoogleMaps Widget

With Step 1 & 2 completed, time to look at how to bring the Maps inside the Flutter Application. To begin with, add the dependency in the pubspec.yaml file like given below.


```
dependencies: 
 **google\_maps\_flutter: ^0.5.21**

```
Do packages get and add import the following package to the main.dart file.

import ‘package:google\_maps\_flutter/google\_maps\_flutter.dart’;  
 Once these two are done, time to look at the Widgets that this package provides.

###### GoogleMap

GoogleMap Widget provides the main control over providing Google Maps inside the Flutter Application. There are several important attributes that are part of this Widget which will help in creating the Maps we require. They are

* mapType – This attribute defines what type of Map is to be shown. There are options to show either **satellite, hybrid, normal.** Choose either of these by giving the value as MapType.hybrid etc.
* initialCameraPosition – The initial camera position is important to render the Map on the Flutter UI. This will move the camera position from this point only. To give the initial Camera position, create a variable with the **CameraPosition** class as its value. To know more about the CameraPosition see the next sub-section.
* onMapCreated – This is a callback that gets fired whenever the camera position is changed. Since the user can move the Map by either pinching or swiping the map, this will get fired every single time. In case there is a use case to move the camera angle programmatically, you will have to make use of the GoogleMapController which we will see in the next sub-section.

###### GoogleMapController

This class provides control of the GoogleMap itself by creating an instance of it. Since there is no explicit way of changing the camera position of the google map, we will be using this GoogleMapController to control all sorts of activities on the GoogleMap class. To know more about how we can use the Google Map Controller see the Next section for the example application.

###### CameraPosition

CameraPosition class provides the required camera position values that will be required to show any position on the GoogleMap.


```
CameraPosition initPosition = CameraPosition( 
target: LatLng(14.5, 25.7), zoom: 7, );
```
The CameraPosition class takes in various attributes like target, zoom, etc. The **Target** attribute marks the Latitude & Longitude position on the Google Map. This class takes in a double value like LatLng(double, double) to mark it at that position.

To know more about how we make use of this CameraPosition, check the next section for the example application.

### Step 4 – Creating GoogleMaps – Example App

With the 3 steps completed, find the final app example below. This example creates an animated camera transition on Google Maps when it is created. This is a very useful way to provide [Google Maps in Flutter](https://androidmonks.com/google-maps-flutter/) Application.

Do not forget to check out the final section for the example output of this App.


```
import 'dart:async';
import 'package:flutter/material.dart';
import 'package:google\_maps\_flutter/google\_maps\_flutter.dart';

void main() => runApp(GoogleMapApp());

class GoogleMapApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Sample GoogleMap Widget',
home: GoogleMapWidget(),
);
}
}

class GoogleMapWidget extends StatefulWidget {
GoogleMapWidget({Key key}) : super(key: key);

@override
\_GoogleMapWidgetState createState() => \_GoogleMapWidgetState();
}

class \_GoogleMapWidgetState extends State {

Completer \_controller = Completer();

@override
void initState() {
super.initState();
}

CameraPosition initPosition = CameraPosition(
target: LatLng(14.5, 25.7),
zoom: 7,
);

void updateGoogleMap()
async{
GoogleMapController cont = await \_controller.future;
setState(() {
CameraPosition newtPosition = CameraPosition(
target: LatLng(14.5, 28.7),
zoom: 4,
);
cont.animateCamera(CameraUpdate.newCameraPosition(newtPosition));
});

}

@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
backgroundColor: Colors.black45,
title: Text("Update Google Map"),
),
body: Center(
child: Column(
children: [
Container(
height: 400.0,
child: GoogleMap(
mapType: MapType.hybrid,
initialCameraPosition: initPosition,
onMapCreated: (GoogleMapController controller){
\_controller.complete(controller);
},
),
),
FlatButton(
child: Text("Update Map", style: TextStyle(color: Colors.white),),
color: Colors.deepOrange,
onPressed: (){
updateGoogleMap();
},
)
],
),
));
}
}

```
 

### Google Maps – Conclusion

For the example App code above, the Flutter App looks like,

![Google Maps in Flutter](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Google Maps in Flutter](https://androidmonks.com/wp-content/uploads/2019/09/googlemap1.png) **Google Maps in Flutter**![Google Maps in Flutter](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Google Maps in Flutter](https://androidmonks.com/wp-content/uploads/2019/09/googlemap2.png) **Google Maps in Flutter**This is easy to create once the API key is integrated. However, note that this Widget is still in developer preview and is not going to be present in the stable branch until the next major update. Make sure to keep tabs on the Flutter Dev releases to know more about this [Google Maps in Flutter](https://androidmonks.com/google-maps-flutter/).

***“Learn and Be Curious”***

[Tweet](https://twitter.com/intent/tweet?text=Google+Maps+in+Flutter++Easy+Integration&url=https%3A%2F%2Fandroidmonks.com%2Fgoogle-maps-flutter%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fgoogle-maps-flutter%2F)0 Shares Categories [Flutter](https://androidmonks.com/category/flutter/) [Leave a comment](https://androidmonks.com/google-maps-flutter/#respond) Post navigation[Percent Indicator Plugin in Flutter](https://androidmonks.com/percent-indicator-flutter/)[Shimmer Effect in Flutter | List Loading Effect](https://androidmonks.com/shimmer-effect-flutter/)### Leave a Comment [Cancel reply](/google-maps-flutter/#respond)

Comment

Name Email Website  

  Search for:   ## Archives

* [August 2020](https://androidmonks.com/2020/08/)
* [March 2020](https://androidmonks.com/2020/03/)
* [January 2020](https://androidmonks.com/2020/01/)
* [December 2019](https://androidmonks.com/2019/12/)
* [November 2019](https://androidmonks.com/2019/11/)
* [October 2019](https://androidmonks.com/2019/10/)
* [September 2019](https://androidmonks.com/2019/09/)
* [August 2019](https://androidmonks.com/2019/08/)
* [July 2019](https://androidmonks.com/2019/07/)
* [June 2019](https://androidmonks.com/2019/06/)
* [May 2019](https://androidmonks.com/2019/05/)
* [April 2019](https://androidmonks.com/2019/04/)
* [March 2019](https://androidmonks.com/2019/03/)
* [February 2019](https://androidmonks.com/2019/02/)
* [January 2019](https://androidmonks.com/2019/01/)
* [December 2018](https://androidmonks.com/2018/12/)
* [November 2018](https://androidmonks.com/2018/11/)
* [October 2018](https://androidmonks.com/2018/10/)
* [September 2018](https://androidmonks.com/2018/09/)
* [August 2018](https://androidmonks.com/2018/08/)
* [July 2018](https://androidmonks.com/2018/07/)
 © 2021 Android Monks • Powered by [GeneratePress](https://generatepress.com) This website uses cookies to improve your experience. We'll assume you're ok with this, but you can opt-out if you wish. Cookie settingsACCEPTPrivacy & Cookies Policy   Close #### Privacy Overview

This website uses cookies to improve your experience while you navigate through the website. Out of these cookies, the cookies that are categorized as necessary are stored on your browser as they are essential for the working of basic functionalities of the website. We also use third-party cookies that help us analyze and understand how you use this website. These cookies will be stored in your browser only with your consent. You also have the option to opt-out of these cookies. But opting out of some of these cookies may have an effect on your browsing experience.  Necessary  Necessary Always EnabledNecessary cookies are absolutely essential for the website to function properly. This category only includes cookies that ensures basic functionalities and security features of the website. These cookies do not store any personal information.

 Non-necessary  Non-necessaryAny cookies that may not be particularly necessary for the website to function and is used specifically to collect user personal data via analytics, ads, other embedded contents are termed as non-necessary cookies. It is mandatory to procure user consent prior to running these cookies on your website.

  /* <![CDATA[ */
var tocplus = {"visibility\_show":"show","visibility\_hide":"hide","width":"Auto"};
/* ]]> */  /* <![CDATA[ */
var socialWarfare = {"addons":[],"post\_id":"1930","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "bb51998ee8";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "1930";var swpClickTracking = false; 