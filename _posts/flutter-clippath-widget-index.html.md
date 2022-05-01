---
title: '# Flutter ClipPath Widget | UI Clippers in Flutter'
description: 'ClipPath Widget in flutter is a subset of the Flutter Clippers. In this article'
date: '2019-08-11'
modified_date: '2019-08-10'
image: '/assets/images/posts'
---
# Flutter ClipPath Widget | UI Clippers in Flutter

 [August 10, 2019August 11, 2019](https://androidmonks.com/flutter-clippath-widget/ "12:33 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Flutter ClipPath Widget | UI Clippers in Flutter](#Flutter_ClipPath_Widget_UI_Clippers_in_Flutter) 
	+ [1.1 ClipPath Basics](#ClipPath_Basics)
	+ [1.2 CustomClipper Widget in ClipPath](#CustomClipper_Widget_in_ClipPath)
	+ [1.3 ClipPath – Properties](#ClipPath_8211_Properties)
	+ [1.4 ClipPath Example Application](#ClipPath_Example_Application)
	+ [1.5 ClipPath Conclusion](#ClipPath_Conclusion)
## Flutter ClipPath Widget | UI Clippers in Flutter

[Flutter ClipPath widget](https://androidmonks.com/flutter-clippath-widget/) is another part of the UI Clipper widget. [ClipPath](https://androidmonks.com/flutter-clippath-widget/) adds on to Flutter ClipRect & Flutter ClipOval and defines a specific path to clip on the UI.

This is done through the CustomClipper class that is defined as part of the clipper attribute. You can find how to create this custom clipper in the following sections.

### ClipPath Basics

To begin with, we will create a simple Stateful Widget(See the final section for the complete example application). Once that is done, use the Class **[ClipPath](https://androidmonks.com/flutter-clippath-widget/)**to define the widget.


```
ClipPath()
```
ClipPath widget is a subset of the CustomClipper class and can take in any shape and the UI is clipped accordingly. Just like the [ClipRect and ClipOval Widgets](https://androidmonks.com/cliprect-widget-flutter/), it is clear as to what the respective widgets will do(One clip the UI in Rectangle shape and the other in Oval shape). The ClipPath however, needs a specific path to be defined.

In the coming up section, we can see about how to define this CustomClipper class and use it as part of the [ClipPath widget](https://androidmonks.com/flutter-clippath-widget/).

### CustomClipper Widget in ClipPath

The primary use of this CustomClipper Class is to define what **Path that has to be clipped.** Doing so is really easy. Just extend or inherit the **CustomClipper** class and override its **getClip() & shouldReclip() methods.**A sample class is as given below.


```
class LinePathClass extends CustomClipper {
@override
Path getClip(Size size) {}

@override
bool getClip(Size size) {}

}

```
The getClip() method takes in the Path as its return type. It’s important to define the **Path** widget in this method. A sample Path class is as given below.


```
var path = new Path();
path.lineTo(x, y);
return path;
```
In the code snippet above, each path.lineTo() creates a line from the **point X to point Y.**This way, the lines can be generated and linked with each other to form the Path. Once that is done, return the Path to create the custom clipped Path.

### ClipPath – Properties

The 2 important properties of the ClipPath widget includes the

* **Clipper: Defines the CustomClipper class. It takes in the custom class which defines the path.** Normal call to the custom clipper path is its value. A sample code is given as part of the ClipPath App example in the next section.
* **child: The actual child which gets clipped!** It is better to make use widgets like **Center, [Align Widget](https://androidmonks.com/align-widget-flutter/)** to create a better Clip UI effect. To see how the ClipPath UI works, take a look at the sample App in the next section.

### ClipPath Example Application

The below code creates a simple Login like a page with UI ClipPath defined. Check out the code and the example app generated below.


```
import 'dart:async';

import 'package:flutter/material.dart';

void main() => runApp(ClipPathApp());

class ClipPathApp extends StatelessWidget {
 @override
 Widget build(BuildContext context) {
  return MaterialApp(
   title: 'Sample Divider Widget',
   home: ClipPathWidget(),
  );
 }
}

class ClipPathWidget extends StatefulWidget {
 ClipPathWidget({
  Key key
 }): super(key: key);

 @override
 \_ClipPathWidgetState createState() => \_ClipPathWidgetState();
}

class \_ClipPathWidgetState extends State {

 @override
 void initState() {
  super.initState();
 }

 @override
 Widget build(BuildContext context) {
  return Scaffold(
   appBar: AppBar(title: Text("Sample ClipPath Widget"), backgroundColor: Colors.black45, ),
   body: Center(
    child: Stack(
     children: [
      ClipPath(
       clipper: LinePathClass(),
       child: Container(
        color: Colors.red,
       ),

      ),
      Container(
       child: Column(
        children: [
         Image.network("https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782\_960\_720.png", width: 100.0, height: 100.0, ),
         Text("John Doe", style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold), )
        ],
       ),
      )

     ],
    ),
   )
  );
 }
}

class LinePathClass extends CustomClipper {
 @override
 Path getClip(Size size) {
  // TODO: implement getClip
  var path = new Path();
  path.lineTo(0, 300);
  path.lineTo(325, 0);
  path.lineTo(size.width - 300, size.height - 500);
  return path;
 }

 @override
 bool shouldReclip(CustomClipper oldClipper) {
  // TODO: implement shouldReclip
  return false;
 }

}
```
 

![ClipPath Widget example](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![ClipPath Widget example](https://androidmonks.com/wp-content/uploads/2019/08/clippath.png) **ClipPath Widget example**### ClipPath Conclusion

Effective use of the [ClipPath Widget](https://androidmonks.com/flutter-clippath-widget/) is helpful in creating awesome UI. There are different paths other that lines that can be used. It is important to play with all these values and try to generate the perfect ClipPath!

Drop-in any comments in the section below.

***“Learn and be curious”***

[Tweet](https://twitter.com/intent/tweet?text=Flutter+ClipPath+Widget++UI+Clippers+in+Flutter&url=https%3A%2F%2Fandroidmonks.com%2Fflutter-clippath-widget%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fflutter-clippath-widget%2F)0 Shares Categories [Flutter](https://androidmonks.com/category/flutter/) [Leave a comment](https://androidmonks.com/flutter-clippath-widget/#respond) Post navigation[WebView Widget in Flutter | Embed Websites Easily](https://androidmonks.com/webview-widget-flutter/)[Flutter Badges Plugin | Alternative to Flutter Chip?](https://androidmonks.com/flutter-badges/)### Leave a Comment [Cancel reply](/flutter-clippath-widget/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"1882","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "5e9d84bb42";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "1882";var swpClickTracking = false; 