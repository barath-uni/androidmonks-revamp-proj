---
title: '# Imagepicker Widget in Flutter | Gallery Made easy'
description: 'ImagePicker Widget in Flutter provided by image\_picker plugin provides an easy way to access the gallery or camera source in this article contains example!'
date: '2019-09-16'
modified_date: '2019-09-16'
image: '/assets/images/posts'
---
# Imagepicker Widget in Flutter | Gallery Made easy

 [September 16, 2019](https://androidmonks.com/imagepicker-flutter/ "10:19 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Imagepicker Widget in Flutter – Gallery Made easy](#Imagepicker_Widget_in_Flutter_8211_Gallery_Made_easy) 
	+ [1.1 Image Picker Widget – Basics](#Image_Picker_Widget_8211_Basics)
	+ [1.2 ImagePicker Widget – Example Application](#ImagePicker_Widget_8211_Example_Application)
	+ [1.3 ImagePicker Widget – Conclusion](#ImagePicker_Widget_8211_Conclusion)
## Imagepicker Widget in Flutter – Gallery Made easy

[Imagepicker widget in Flutter](https://androidmonks.com/imagepicker-flutter/) makes the life so much easy by bridging Photo gallery in Flutter. In this article we will read more about using the ImagePicker Plugin/Widget to create a good gallery like app.

Even before we jump into that, we will be requiring the one important plugin – [**image\_picker**](https://pub.dev/packages/image_picker)


```
dependencies:
**image\_picker: ^0.6.1+4**
```
This will also require you to add an import statement in the main.dart(or whichever is the main file).


```
import 'package:image\_picker/image\_picker.dart';
```
Once these two are added, incase the application has to be used for IOS, make sure to add the following changes in **info.plist** file.

* **NSPhotoLibraryUsageDescription** – describe why your app needs permission for the photo library. This is called *Privacy – Photo Library Usage Description* in the visual editor.
* **NSCameraUsageDescription** – describe why your app needs access to the camera. This is called *Privacy – Camera Usage Description* in the visual editor.
* **NSMicrophoneUsageDescription** – describe why your app needs access to the microphone, if you intend to record videos. This is called *Privacy – Microphone Usage Description* in the visual editor.

### Image Picker Widget – Basics

To make use of this ImagePicker widget, just call the class [**ImagePicker**](https://androidmonks.com/imagepicker-flutter/). There are two possibilities from this class.

* **Choose** **an** **Image or Choose a Video**
* **Choose one of the above from a Gallery or a Camera Source directly**

The above are possible through the method callbacks.

* **ImagePicker.pickImage()** with source as **ImageSource.gallery or ImageSource.camera**
* or **ImagePicker.pickVideo()**with the sources as mentioned above.

Both the calls above mentioned are async calls(Read more about FutureBuilder Widget and Asynchronous operations). Hence, it requires to **setState()** on the image/video that is selected.

The ImagePicker.<source call> returns a file location of the image/video. It is upto us to load the Image using the Image.file() call.

All of this are pieced together in the below example code. To know more about it read it in the next section.

### ImagePicker Widget – Example Application

The below example app creates a [Image Picker button](https://androidmonks.com/imagepicker-flutter/) which lets you to choose either a Image from gallery or directly from the Camera.

The next section contains the app images. Also find code explanation below.


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
![Image Picker in Flutter](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Image Picker in Flutter](https://androidmonks.com/wp-content/uploads/2019/09/imagepicker1.png) Image Picker in Flutter![ImagePicker Widget](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![ImagePicker Widget](https://androidmonks.com/wp-content/uploads/2019/09/imagepicker2.png) ImagePicker Widget![ImagePicker Widget](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![ImagePicker Widget](https://androidmonks.com/wp-content/uploads/2019/09/imagepicker3.png) ImagePicker Widget### ImagePicker Widget – Conclusion

The [Image Picker Widget is a useful/handy plugin](https://androidmonks.com/imagepicker-flutter/) to create faster access to Gallery or Camera source directly. Eventhough the Widget itself cannot be customised, the already available Plugin supports both the IOS and Android alike without any additional changes! Its definitely a win-win situation!

If you require additional customisation, you might have to create the entire logic from scratch at this moment – Sad face 🙁

[Tweet](https://twitter.com/intent/tweet?text=Imagepicker+Widget+in+Flutter++Gallery+Made+easy&url=https%3A%2F%2Fandroidmonks.com%2Fimagepicker-flutter%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fimagepicker-flutter%2F)0 Shares Categories [Flutter](https://androidmonks.com/category/flutter/) [Leave a comment](https://androidmonks.com/imagepicker-flutter/#respond) Post navigation[Shimmer Effect in Flutter | List Loading Effect](https://androidmonks.com/shimmer-effect-flutter/)[Flutter Icons | Easiest Widget in Flutter](https://androidmonks.com/flutter-icons/)### Leave a Comment [Cancel reply](/imagepicker-flutter/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"1918","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "bb51998ee8";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "1918";var swpClickTracking = false; 