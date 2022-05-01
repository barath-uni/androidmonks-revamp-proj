---
title: '# Flutter Open Source Plugins in 2019 [Top 5]'
description: 'In this article'
date: '2019-10-17'
modified_date: '2019-10-17'
image: '/assets/images/posts'
---
# Flutter Open Source Plugins in 2019 [Top 5]

 [October 17, 2019October 17, 2019](https://androidmonks.com/flutter-open-source-plugins/ "11:00 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Flutter Open Source Plugins in 2019](#Flutter_Open_Source_Plugins_in_2019)
* [2 Flutter video-player Plugin](#Flutter_video-player_Plugin)
	+ - * [2.0.0.1 For Android](#For_Android)
			* [2.0.0.2 For IOS](#For_IOS)
* [3 Adding the dependency](#Adding_the_dependency)
* [4 Video\_Player plugin – Basics](#Video_Player_plugin_8211_Basics)
* [5 Flutter Video Player App](#Flutter_Video_Player_App)
* [6 Flutter UI – Shimmer Effect Plugin](#Flutter_UI_8211_Shimmer_Effect_Plugin)
* [7 Shimmer.fromColors – Properties](#ShimmerfromColors_8211_Properties)
* [8 Shimmer UI Effect App](#Shimmer_UI_Effect_App)
* [9 Flutter UI – Badges Plugin](#Flutter_UI_8211_Badges_Plugin)
* [10 Badge Class Properties](#Badge_Class_Properties)
* [11 Flutter Badge – Example Application](#Flutter_Badge_8211_Example_Application)
* [12 Flutter Google Maps Plugin](#Flutter_Google_Maps_Plugin)
	+ - [12.0.1 For Android](#For_Android-2)
		- [12.0.2 For IOS](#For_IOS-2)
* [13 All GoogleMaps Widget](#All_GoogleMaps_Widget)
	+ - * [13.0.0.1 GoogleMap](#GoogleMap)
			* [13.0.0.2 GoogleMapController](#GoogleMapController)
			* [13.0.0.3 CameraPosition](#CameraPosition)
* [14 Creating GoogleMaps App](#Creating_GoogleMaps_App)
* [15 Google Maps – Conclusion](#Google_Maps_8211_Conclusion)
* [16 ImagePicker – Image Gallery Plugin](#ImagePicker_8211_Image_Gallery_Plugin)
* [17 Image Picker Widget – Basics](#Image_Picker_Widget_8211_Basics)
* [18 ImagePicker Widget – Example Application](#ImagePicker_Widget_8211_Example_Application)
* [19 Flutter Plugins – Conclusion.](#Flutter_Plugins_8211_Conclusion)
### Flutter Open Source Plugins in 2019

This article covers the 5 important flutter open-source plugins that are available. The list comprises of all the different sections with the Flutter framework. These plugins are simple dependencies that have to be included in your pubspec.yaml file before using. This list contains UI related plugin and Function related plugins as well.

All these plugins are required to make modifications to the **pubspec.yaml file**present inside the **lib** folder inside the project.

### Flutter video-player Plugin

This plugin lets you embed a local video in your Flutter app. Easily integrates and lets you play the video. **Note: Up to Flutter 1.9, there is no video player class present in Flutter. Have to dependent on external plugins like the video\_player.**

Before using the VideoPlayer class in Flutter. We will have to take some pre-requisites for IOS and Android Application.

###### For Android

Make sure, that the minimum SDK is set to 21. You can modify this through the Build Gradle inside the android>app folder.

Once done, make sure that the AndroidManifest.xml file has the Internet permission added. (i.e) add the following line in the Androidmanifest.xml file.


```
<uses-permission android:name="android.permission.INTERNET"/>
```
###### For IOS

Make sure the following lines are added to the **info.plist** file. This will help in giving permission to use the Internet to render the videos if required. Add the below lines to <project root>/ios/Runner/Info.plist


```
<key>NSAppTransportSecurity</key>
<dict>
  <key>NSAllowsArbitraryLoads</key>
  <true/>
</dict>
```
### Adding the dependency

Once the above pre-requisites are done. Time to add the dependency to the **pubspec.yaml** file. Add the following lines to the dependency section and use **get packages** to sync the project.

**dependencies: video\_player: ^0.10.1+3**

### Video\_Player plugin – Basics

Video\_Player plugin provides the support to play both the network as well as local videos on the device. It creates a simple API for the videos to be called. In this application, we will look at how the Video\_Player plugin uses the Controller object and how to create the Future<> Builder to play the video on loading.

As always, we will start off by using the [Scaffold Widget](https://androidmonks.com/scaffold-flutter/) as the parent body widget. The idea is to play the video but also provide Button controls to play and pause the video.

In order to call the video player object from any place, we need a controller to hold that. It is possible by using the VideoPlayerController class. We will look at how all of that is pieced together in the below section.

Do not forget to read the last section for a clearer explanation of what the code does. Since we do not have a lot of things going on, I have directly put the code for use below.

### Flutter Video Player App

 


```
import 'dart:async';

import 'package:flutter/material.dart';
import 'package:video\_player/video\_player.dart';

void main() => runApp(VideoPlayerApp());

class VideoPlayerApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Video Player Demo',
      home: VideoPlayerScreen(),
    );
  }
}

class VideoPlayerScreen extends StatefulWidget {
  VideoPlayerScreen({Key key}) : super(key: key);

  @override
  \_VideoPlayerScreenState createState() => \_VideoPlayerScreenState();
}

class \_VideoPlayerScreenState extends State<VideoPlayerScreen> {
  VideoPlayerController \_controller;
  Future<void> \_initializeVideoPlayerFuture;

  @override
  void initState() {
    \_controller = VideoPlayerController.network(
      'https://flutter.github.io/assets-for-api-docs/assets/videos/bee.mp4',
    );

    // Initielize the controller and store the Future for later use.
    \_initializeVideoPlayerFuture = \_controller.initialize();

    // Use the controller to loop the video.
    \_controller.setLooping(true);
    super.initState();
  }

  @override
  void dispose() {
    // Ensure disposing of the VideoPlayerController to free up resources.
    \_controller.dispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: Drawer(),
      backgroundColor: Colors.orangeAccent,
      appBar: AppBar(
        title: Text('Bee Video'),
        backgroundColor: Colors.black87,
      ),
      // Use a FutureBuilder to display a loading spinner while waiting for the
      // VideoPlayerController to finish initializing.
      body: Stack(
        children: <Widget>[
          Center(child:FutureBuilder(
            future: \_initializeVideoPlayerFuture,
            builder: (context, snapshot) {
              if (snapshot.connectionState == ConnectionState.done) {
                // If the VideoPlayerController has finished initialization, use
                // the data it provides to limit the aspect ratio of the video.
                return AspectRatio(
                  aspectRatio: \_controller.value.aspectRatio,
                  // Use the VideoPlayer widget to display the video.
                  child: VideoPlayer(\_controller),
                );
              } else {
                // If the VideoPlayerController is still initializing, show a
                // loading spinner.
                return Center(child: CircularProgressIndicator());
              }
            },
          )),
          Center(
              child:
              ButtonTheme(
                  height: 100.0,
                  minWidth: 200.0,
                  child: RaisedButton(
                    padding: EdgeInsets.all(60.0),
                    color: Colors.transparent,
                    textColor: Colors.white,
                    onPressed: () {
                      // Wrap the play or pause in a call to `setState`. This ensures the
                      // correct icon is shown.
                      setState(() {
                        // If the video is playing, pause it.
                        if (\_controller.value.isPlaying) {
                          \_controller.pause();
                        } else {
                          // If the video is paused, play it.
                          \_controller.play();
                        }
                      });
                    },
                    child: Icon(
                      \_controller.value.isPlaying ? Icons.pause : Icons.play\_arrow,
                      size: 120.0,
                    ),
                  ))
          )
        ],
      ),
    );
  }
}
```
This creates the application which looks like,

![Flutter Video Plugin](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Flutter Video Plugin](https://androidmonks.com/wp-content/uploads/2019/06/Screen-Shot-2019-06-22-at-3.47.42-PM-591x1024.png) **Flutter Video Plugin**![Flutter Video Plugin](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Flutter Video Plugin](https://androidmonks.com/wp-content/uploads/2019/06/Screen-Shot-2019-06-22-at-3.47.59-PM-616x1024.png) **Flutter Video Plugin**### Flutter UI – Shimmer Effect Plugin

The next plugin in the list is the Flutter UI effect plugin – **Shimmer Effect or the Lazy Loading effect**. The [shimmer effect](https://androidmonks.com/shimmer-effect-flutter/) is fairly straight forward. Make use of only one class in your Widget tree and the work is done. If you do not know how the shimmer effect actually works, check the below GIF to understand.

!["<yoastmark](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)!["<yoastmark](https://androidmonks.com/wp-content/uploads/2019/09/fb-animation-image2.gif)

To perform the same effect as above, we will jump into the Widget definition. Make use of the class,

**Shimmer** in your Widget tree! There is one option to do this like given below,


```
Shimmer.fromColors
```
Once this is done, we will have to fill out the properties to finalize the application.

### Shimmer.fromColors – Properties

The **Shimmer.fromColors**consist of the following properties.

* **baseColor –** Base Color of the Shimmer that gets shown on the Widget. This color is primary as the child widget will be of this color only.
* **highlightColor** – Highlight Color is the color that produces the shimmer like effect. This color keeps waving across the child widget and it creates the Shimmer like effect. To find more about this check out the example program in the next section.
* **child** – The Child holds whatever widget has to produce the ShimmerEffect. Could be a Text Widget or any complex structure and the ShimmerEffect is produced without any problem! Check out the next section to see more about this attribute and how to use it across complex Widgets

### Shimmer UI Effect App

The code below produces the ShimmerEffect for two important widgets, the Text Widget and the Column of [ListView Widget.](https://androidmonks.com/listview-flutter/) To know how the app looks do not forget to check the next section for the app output.


```
import 'dart:async';
import 'package:flutter/material.dart';
import 'package:shimmer/shimmer.dart';

void main() => runApp(ShimmerEffectApp());

class ShimmerEffectApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Sample ShimmerEffect Widget',
home: ShimmerWidget(),
);
}
}

class ShimmerWidget extends StatefulWidget {
ShimmerWidget({Key key}) : super(key: key);

@override
\_ShimmerWidgetState createState() => \_ShimmerWidgetState();
}

class \_ShimmerWidgetState extends State {

@override
void initState() {
super.initState();
}

@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(title: Text("Shimmer effect"),),
body: Container(
padding: EdgeInsets.all(25.0),
child:Center(
child: Shimmer.fromColors(
direction: ShimmerDirection.rtl,
period: Duration(seconds:5),
child: Column(
children: [0, 1, 2, 3]
.map((\_) => Padding(
padding: const EdgeInsets.only(bottom: 8.0),
child: Row(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Container(
width: 48.0,
height: 48.0,
color: Colors.white,
),
Padding(
padding:
const EdgeInsets.symmetric(horizontal: 8.0),
),
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Container(
width: double.infinity,
height: 8.0,
color: Colors.white,
),
Padding(
padding:
const EdgeInsets.symmetric(vertical: 2.0),
),
Container(
width: double.infinity,
height: 8.0,
color: Colors.white,
),
Padding(
padding:
const EdgeInsets.symmetric(vertical: 2.0),
),
Container(
width: 40.0,
height: 8.0,
color: Colors.white,
),
],
),
)
],
),
))
.toList(),
),
baseColor: Colors.grey[700],
highlightColor: Colors.grey[100]),
)
),
);
}
}

```
 

![shimmer_effect](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![shimmer_effect](https://androidmonks.com/wp-content/uploads/2019/09/shimmer_effect1.png) shimmer\_effect![Lazy Loading Effect](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Lazy Loading Effect](https://androidmonks.com/wp-content/uploads/2019/09/shimmer_effect2.png) **Lazy Loading Effect**### Flutter UI – Badges Plugin

The next plugin is a very useful Badge like UI effect plugin, particularly used to mark a **notification count, or ecommerce items count in the basket** etc. All these can be created with a simple plugin and the use of the [Flutter Badges Plugin](https://androidmonks.com/flutter-badges/).

To use the Flutter Badges plugin, make sure to add the following dependency in your **pubspec.yaml** file.


```
dependencies:
 **badges: ^1.1.0**
```
Once done, import the following line into your main.dart file.

import ‘package:badges/badges.dart’;

Alright, we are good to go. As given below, the Badges can be created with a Simple call to the **Badge class.**

### Badge Class Properties

The following are the available properties of the Badge class.

* **badgeContent –**The important attribute that takes in the actual value of the Badge. Could be a number, alphabet etc. Make sure to give it as small as possible!
* **badgeColor –**Can control the Color of the badge by simply adjusting the BadgeColor Colors property.
* **animationType –**The important attribute that lets 3 animations for the Badge.
	+ - **BadgeAnimationType.scale** – Scaling animation once the loading happens.
		- **BadgeAnimationType.fade –**Fade animation once the loading happens
		- **BadgeAnimationType.slide –**Slide animation once the loading happens
* **shape –**Can control the Shape of the Badge. Could be a Circle or Square
* **animationDuration –**Duration to which the Animation should happen. Takes in a Duration class as its value.

Once all of these attributes are controlled, you can create a simple app like given in the next section.

### Flutter Badge – Example Application

Add the following into your **main.dart** file and run the application. It generates the app that looks like below.


```
import 'dart:async';
import 'package:flutter/material.dart';
import 'package:badges/badges.dart';

void main() => runApp(BadgesApp());

class BadgesApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return new MaterialApp(
title: 'APP',
home: BadgesWidget(),
);
}
}

class BadgesWidget extends StatefulWidget {
BadgesWidget({Key key}) : super(key: key);

@override
\_BadgesWidgetState createState() => \_BadgesWidgetState();
}

class \_BadgesWidgetState extends State {

int value = 0;

@override
void initState() {
super.initState();
}

@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(title:Text("Sample Badges")),
body: Center(
child: Container(
padding: EdgeInsets.all(25.0),
child: Column(
children: [
Spacer(),
Badge(
child: RaisedButton(
color: Colors.blueGrey,
child: Text("Notifications", style: TextStyle(color: Colors.white),),
onPressed: (){
setState(() {
value = value + 1;
});
},),
badgeContent: Text('$value',style: TextStyle(color: Colors.white),),
badgeColor: Colors.red,
animationType: BadgeAnimationType.scale,
animationDuration: Duration(milliseconds: 500),
shape: BadgeShape.circle,
),
Spacer(),
Badge(
child: RaisedButton(
color: Colors.blueGrey,
child: Text("Messages", style: TextStyle(color: Colors.white),),
onPressed: (){

},),
badgeContent: Text("2",style: TextStyle(color: Colors.white),),
badgeColor: Colors.red,
animationType: BadgeAnimationType.scale,
animationDuration: Duration(seconds: 1),
shape: BadgeShape.circle,
),
Spacer(),
Badge(
child: RaisedButton(
color: Colors.blueGrey,
child: Text("Notifications", style: TextStyle(color: Colors.white),),
onPressed: (){
},),
badgeContent: Text("2",style: TextStyle(color: Colors.white),),
badgeColor: Colors.red,
animationType: BadgeAnimationType.scale,
animationDuration: Duration(seconds: 1),
shape: BadgeShape.circle,
),
Spacer(flex: 4,)
],
),
),
)
);
}
}
```
![Flutter Badges app](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Flutter Badges app](https://androidmonks.com/wp-content/uploads/2019/08/badges.png) **Flutter Badges app**### Flutter Google Maps Plugin

Google Maps in Flutter is a very easy process to do with the help of the google\_maps\_flutter plugin**.**

**Note: Google Maps Flutter is still in developer preview(It cannot be released to the app store yet). Make sure to wait for the stable release before releasing it.**

The main pre-requisite is to have a google cloud platform account. If you do not have one, create it here – [Google Cloud Platform](https://cloud.google.com/maps-platform/). It is also mandatory to create the Google Maps API key. If you do not know how to obtain the key, please read [Google Maps Integration in Flutter](https://androidmonks.com/google-maps-flutter/) article and proceed.

Once the Google Maps SDK is enabled with a Credential/API key, time to use it in our Flutter App. As a pre-requisite, fill out the following places with the key.

##### For Android

Go to the android>app>src>main>Androidmanifest.xml and make sure that the Manifest looks like below,


```
<manifest ...
 <application ...
 <meta-data android:name="com.google.android.geo.API\_KEY"
 android:value="YOUR KEY HERE"/>
```
**Where the YOUR KEY HERE is replaced with the API key we generated in Step 1**

##### For IOS

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

### All GoogleMaps Widget

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

### Creating GoogleMaps App

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

![Google Maps in Flutter](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Google Maps in Flutter](https://androidmonks.com/wp-content/uploads/2019/09/googlemap1.png) **Google Maps in Flutter**![Google Maps in Flutter](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Google Maps in Flutter](https://androidmonks.com/wp-content/uploads/2019/09/googlemap2.png) **Google Maps in Flutter**### 

### ImagePicker – Image Gallery Plugin

To begin with creating this ImagePicker plugin, **which lets you have an Image Gallery integrated easily in Flutter.**

To use the **[image\_picker](https://pub.dev/packages/image_picker)**plugin, add the following dependency in the pubspec.yaml file and proceed.


```
dependencies:
**image\_picker: ^0.6.1+4**
```
This will also require you to add an import statement in the main.dart(or whichever is the main file).


```
import 'package:image\_picker/image\_picker.dart';
```
Once these two are added, in case the application has to be used for IOS, make sure to add the following changes in **info.plist** file.

* **NSPhotoLibraryUsageDescription** – describe why your app needs permission for the photo library. This is called *Privacy – Photo Library Usage Description* in the visual editor.
* **NSCameraUsageDescription** – describe why your app needs access to the camera. This is called *Privacy – Camera Usage Description* in the visual editor.
* **NSMicrophoneUsageDescription** – describe why your app needs access to the microphone if you intend to record videos. This is called *Privacy – Microphone Usage Description* in the visual editor.

### Image Picker Widget – Basics

To make use of this ImagePicker widget, just call the class [**ImagePicker**](https://androidmonks.com/imagepicker-flutter/). There are two possibilities for this class.

* **Choose** **an** **Image or Choose a Video**
* **Choose one of the above from a Gallery or a Camera Source directly**

The above is possible through the method callbacks.

* **ImagePicker.pickImage()** with source as **ImageSource.gallery or ImageSource.camera**
* or **ImagePicker.pickVideo()**with the sources as mentioned above.

Both the calls above mentioned are async calls(Read more about FutureBuilder Widget and Asynchronous operations). Hence, it requires to **setState()** on the image/video that is selected.

The ImagePicker.<source call> returns a file location of the image/video. It is up to us to load the image using the Image.file() call.

All of this is pieced together in the below example code. To know more about it read it in the next section.

### ImagePicker Widget – Example Application

The below example app creates an [Image Picker button](https://androidmonks.com/imagepicker-flutter/) which lets you choose either an image from the gallery or directly from the Camera.

The next section contains the app images. Also, find the code explained below.


```
import 'dart:async';
import 'dart:io';
import 'package:flutter/material.dart';
import 'package:image\_picker/image\_picker.dart';

void main() => runApp(ImagePickerApp());

class ImagePickerApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Sample Imagepicker Widget',
home: ImagePickerWidget(),
);
}
}

class ImagePickerWidget extends StatefulWidget {
ImagePickerWidget({Key key}) : super(key: key);

@override
\_ImagePickerWidgetState createState() => \_ImagePickerWidgetState();
}

class \_ImagePickerWidgetState extends State {

File \_image;
@override
void initState() {
super.initState();
}

void open\_camera()
async {
var image = await ImagePicker.pickImage(source: ImageSource.camera);
setState(() {
\_image = image;
});

}
void open\_gallery()
async {
var image = await ImagePicker.pickImage(source: ImageSource.gallery);
setState(() {
\_image = image;
});
}
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(title: Text("Sample Imagepicker Widget"),
backgroundColor: Colors.black45,),
body: Center(
child: Container(
child: Column(
children: [
Container(
color: Colors.black12,
height: 300.0,
width: 900.0,
child: \_image == null ? Text("Still waiting!") : Image.file(\_image),),
FlatButton(
color: Colors.deepOrangeAccent,
child: Text("Open Camera", style: TextStyle(color: Colors.white),),
onPressed: (){
open\_camera();
},),
FlatButton(
color: Colors.limeAccent,

child:Text("Open Gallery", style: TextStyle(color: Colors.black),),
onPressed: (){
open\_gallery();
},
)
],
),
),
)

);

}
}
```
![Image Picker in Flutter](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Image Picker in Flutter](https://androidmonks.com/wp-content/uploads/2019/09/imagepicker1.png) Image Picker in Flutter![ImagePicker Widget](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![ImagePicker Widget](https://androidmonks.com/wp-content/uploads/2019/09/imagepicker2.png) ImagePicker Widget![ImagePicker Widget](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![ImagePicker Widget](https://androidmonks.com/wp-content/uploads/2019/09/imagepicker3.png) ImagePicker Widget### Flutter Plugins – Conclusion.

All these plugins are really important to help in creating a neater UI experience and ramp up faster with the Flutter App development.

[Tweet](https://twitter.com/intent/tweet?text=Flutter+Open+Source+Plugins+in+2019+%5BTop+5%5D&url=https%3A%2F%2Fandroidmonks.com%2Fflutter-open-source-plugins%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fflutter-open-source-plugins%2F)0 Shares Categories [Flutter](https://androidmonks.com/category/flutter/) [Leave a comment](https://androidmonks.com/flutter-open-source-plugins/#respond) Post navigation[ButtonBar Widget in Flutter – Don’t use Row Widget](https://androidmonks.com/buttonbar-widget-flutter/)[SelectableText Widget in Flutter | Copyable Text in Flutter](https://androidmonks.com/selectabletext-widget-flutter/)### Leave a Comment [Cancel reply](/flutter-open-source-plugins/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"2132","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "c14f5ebe6a";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "2132";var swpClickTracking = false; 