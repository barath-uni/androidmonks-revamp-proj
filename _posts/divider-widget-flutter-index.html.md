---
title: '# Divider Widget in Flutter'
description: 'Divider widget in Flutter helps in organising blocks of content on the Flutter App by providing a Divider between them. Color'
date: '2019-07-26'
modified_date: '2019-07-28'
image: '/assets/images/posts'
---
# Divider Widget in Flutter

 [July 28, 2019July 26, 2019](https://androidmonks.com/divider-widget-flutter/ "6:00 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Divider Widget in Flutter](#Divider_Widget_in_Flutter)
	+ [1.1 Divider Widget – Basics](#Divider_Widget_8211_Basics)
		- * [1.1.0.1 color](#color)
			* [1.1.0.2 height](#height)
			* [1.1.0.3 indent](#indent)
			* [1.1.0.4 endIntent](#endIntent)
	+ [1.2 Divider – Example Flutter Application](#Divider_8211_Example_Flutter_Application)
	+ [1.3 Conclusion](#Conclusion)
## Divider Widget in Flutter

**Divider Widget** is a simple Widget in Flutter that can help in separating two Containers Widget, Card Widget, etc. In this tutorial, we will see how easy this Divider Class is and how it can be used in the Flutter application.

Divider widget, in particular, creates a simple White space showing a partition between two Container widget. The Visual representation can help in making it appealing to understand that there are two different contents on the page. According to the Flutter Docs, “A one device pixel thick horizontal line, with padding on either side”

Following sections show how the Divider Class can be used in the Flutter application.

As always let’s create a simple template to use throughout the application.


```
import 'dart:async';

import 'package:flutter/material.dart';

void main() => runApp(DividerApp());

class DividerApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
 title: 'Sample Divider Widget',
 home: DividerWidget(),
    );
  }
}

class DividerWidget extends StatefulWidget {
  DividerWidget({Key key}) : super(key: key);

  @override
  \_DividerWidgetState createState() => \_DividerWidgetState();
}

class \_DividerWidgetState extends State<DividerWidget> {


  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold();
}
}
```
### Divider Widget – Basics

To create a simple Divider Class, call the class [`Divider`](https://androidmonks.com/divider-widget-flutter/). There are 4 attributes of [Divider class](https://androidmonks.com/divider-widget-flutter/) as given below.

##### color

Takes in a Color class. Sets the color for the [Divider](https://api.flutter.dev/flutter/material/Divider-class.html). By default, it is set to a White color. To set the color for the [Divider Class](https://androidmonks.com/divider-widget-flutter/), follow the below sample code.


```
Divider(
color: Colors.black87
)
```
##### height

This attribute lets you define how big the [Divider](https://androidmonks.com/divider-widget-flutter/) should be. The Height attribute determines the amount of space between the two widgets that this divider Class separates. It takes in a double value, like given below in the sample code.


```
Divider(
height: 10.0
)
```
##### indent

This attribute lets you define the indent/space to be given on the left side of the [Divider](https://androidmonks.com/divider-widget-flutter/). It determines the space in terms of double value as given in the sample code.


```
Divider(
indent: 5.0
)
```
##### endIntent

This attribute lets you define the indent/space to the right of the Divider Class. It determines the space in terms of double value as given in the below code.


```
Divider( 
endIndent: 5.0 
)
```
### Divider – Example Flutter Application

To create a simple divider with an example application. Check out the app below.


```
**import** **'dart:async'**;
**import** **'package:flutter/material.dart'**;
**void** main() => runApp(DividerApp());
**class** DividerApp **extends** StatelessWidget {
  @override
  Widget build(BuildContext context) {
    **return** MaterialApp(
      title: **'Sample Divider Widget'**,
      home: DividerWidget(),
    );
  }
}
**class** DividerWidget **extends** StatefulWidget {
  DividerWidget({Key key}) : **super**(key: key);
  @override
  \_DividerWidgetState createState() => \_DividerWidgetState();
}
**class** \_DividerWidgetState **extends** State<DividerWidget> {
  @override
  **void** initState() {
    **super**.initState();
  }
  @override
  Widget build(BuildContext context) {
    **return** Scaffold(
      drawer: Drawer(),
      appBar: AppBar(
        title: Text(**'Sample Divider'**),
        backgroundColor: Colors.black87,
        leading: BackButton(color: Colors.white,),
      ),
      body: Center(
        child: Column(
          children: <Widget>[
              Card(
                child: Container(
                  height: 200,
                  width: 900,
                  child: Center(child:Text(**"Sample 1"**, style: TextStyle(color: Colors.white),),),
                  decoration: BoxDecoration(
                    color: Colors.red
                  ),
                ),
              ),
              Divider(
                height: 10.0,
                indent: 5.0,
                color: Colors.black87,
              ),
              Card(
                child: Container(
                  height: 200,
                  width: 900,
                  child: Center(child:Text(**"Sample 2"**, style: TextStyle(color: Colors.white),),),
                  decoration: BoxDecoration(
                      color: Colors.blue
                  ),
                ),
              )
          ],
        ),
      )
    );
  }
}
```
This creates the app which looks like,

![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2019/07/screen_2x-473x1024.png) **Divider Widget Example App**### Conclusion

There is a difference between the **Divider widget** and the Spacer Widget in Flutter. It is always easy to understand that Divider widget can help in organizing a block of Content, while the spacer widget helps in spacing the content inside that block!

***“Learn and Be Curious”***

[Tweet](https://twitter.com/intent/tweet?text=Divider+Widget+in+Flutter&url=https%3A%2F%2Fandroidmonks.com%2Fdivider-widget-flutter%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fdivider-widget-flutter%2F)0 Shares Categories [Flutter](https://androidmonks.com/category/flutter/) [Leave a comment](https://androidmonks.com/divider-widget-flutter/#respond) Post navigation[Flutter Video Player | video\_player Example](https://androidmonks.com/flutter-video-player/)[Align Widget in Flutter](https://androidmonks.com/align-widget-flutter/)### Leave a Comment [Cancel reply](/divider-widget-flutter/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"1851","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "5e9d84bb42";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "1851";var swpClickTracking = false; 