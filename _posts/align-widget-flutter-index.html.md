---
title: '# Align Widget in Flutter'
description: 'Align Widget in Flutter is simple to use and easy to create. This article shows with an example how to use all the properties of Align Widget in detail.'
date: '2019-07-28'
modified_date: '2019-07-29'
image: '/assets/images/posts'
---
# Align Widget in Flutter

 [July 29, 2019July 28, 2019](https://androidmonks.com/align-widget-flutter/ "4:00 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Align Widget in Flutter](#Align_Widget_in_Flutter)
	+ [1.1 Align Widget – Basics](#Align_Widget_Basics)
		- [1.1.1 alignment](#alignment)
		- [1.1.2 child](#child)
		- [1.1.3 heightFactor](#heightFactor)
		- [1.1.4 widthFactor](#widthFactor)
	+ [1.2 Align Widget – Example](#Align_Widget_8211_Example)
	+ [1.3 Conclusion](#Conclusion)
## Align Widget in Flutter

[Align Widget](https://androidmonks.com/align-widget-flutter/) in Flutter introduces an easy way to create and implement alignments of a Widget over another. The Align Widget in itself acts as a container and holds a widget. It contains different properties that help it to define how the child Widget should be aligned over its parent.

In this tutorial, we will see how to create a simple and effective [Align Widget](https://androidmonks.com/align-widget-flutter/) and use it across the application.

As always, use the below template to create the basic structure quickly.


```
import 'dart:async';

import 'package:flutter/material.dart';

void main() => runApp(DividerApp());

class AlignmentApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Sample Alignment Widget',
      home: AlignmentWidget(),
    );
  }
}

class AlignmentWidget extends StatefulWidget {
  AlignmentWidget({Key key}) : super(key: key);

  @override
  \_AlignmentWidgetState createState() => \_AlignmentWidgetState();
}

class \_AlignmentWidgetState extends State<AlignmentWidget> {


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
### Align Widget – Basics

To start with the Align Widget in Flutter. Use the `Align` Class in Flutter. There are 3 important attributes that the Align uses. They are,

#### alignment

The alignment attribute makes use of the Alignment Class and defines where the child widget should be placed at. This way, the logic behind the alignment is to create a simple coordinate system that can overlap the center of the Child widget of the [Align](https://androidmonks.com/align-widget-flutter/) with the position specified in the alignment!

Sample alignment attribute is,


```
Align(
 alignment: Alignment.bottomRight
)
```
To understand this better, check out the example app in the next section.

#### child

The Child widget just as any other property can take in any Widget as its child. Like mentioned in the previous section, the Align Class by itself acts as a simple placeholder that adjusts its child based on the alignment position. Sample example is given in the below code,


```
Align(
 alignment: Alignment.bottomRight,
child:FlutterLogo
)
```
#### heightFactor

As given in the doc, “If non-null, sets its height to the child’s height multiplied by this factor”.This way the alignment can be given a consistency across the height. It takes in a double value and it can be used as given below.


```
Align(
alignment: Alignment.bottomRight,
child:FlutterLogo,
heightFactor: 0.5
)
```
#### widthFactor

Similar to how the heightFactor works, the widget can also be manipulated. Takes in a double value and can be used as below,


```
Align(
alignment: Alignment.bottomRight,
child:FlutterLogo,
widthFactor: 0.5
)
```
### Align Widget – Example

The below code is used as an example to show how the [Align](https://androidmonks.com/align-widget-flutter/) Class can be used across the Flutter App.

A lot of different positions and values are given to illustrate the same.


```
import 'dart:async';

import 'package:flutter/material.dart';

void main() => runApp(AlignmentApp());

class AlignmentApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Sample Divider Widget',
home: AlignmentWidget(),
);
}
}

class AlignmentWidget extends StatefulWidget {
AlignmentWidget({Key key}) : super(key: key);

@override
\_AlignmentWidgetState createState() => \_AlignmentWidgetState();
}

class \_AlignmentWidgetState extends State {

@override
void initState() {
super.initState();
}

@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text("Sample Align App"),
),
body: Center(child:
Column(
children: [
Container(
color: Colors.yellowAccent,
height: 150.0,
width:150.0,
child: Align(
alignment: Alignment.bottomRight,
child: FlutterLogo(
size: 60.0,
),
),
),
Container(
color: Colors.greenAccent,
height: 150.0,
width:150.0,
child: Align(
alignment: Alignment.bottomCenter,
child: FlutterLogo(
size: 60.0,
),
),
),
Container(
color: Colors.redAccent,
height: 150.0,
width:150.0,
child: Align(
alignment: Alignment.topCenter,
child: FlutterLogo(
size: 60.0,
),
),
),
]
),),
);
}
}

```
 

This creates an app which looks like the following.

!["<yoastmark](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)!["<yoastmark](https://androidmonks.com/wp-content/uploads/2019/07/screebgrabalign.png)

### Conclusion

[Align class](https://api.flutter.dev/flutter/widgets/Align-class.html) is very simple in terms of how it can be used across the Flutter App without too much work. It also pivots the Flutter App in changing the alignment of the child! Make sure to use the code example to best use.

***“Learn and be Curious”***

[Tweet](https://twitter.com/intent/tweet?text=Align+Widget+in+Flutter&url=https%3A%2F%2Fandroidmonks.com%2Falign-widget-flutter%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Falign-widget-flutter%2F)0 Shares Categories [Flutter](https://androidmonks.com/category/flutter/) [Leave a comment](https://androidmonks.com/align-widget-flutter/#respond) Post navigation[Divider Widget in Flutter](https://androidmonks.com/divider-widget-flutter/)[Spacer Widget in Flutter – Simplest Flutter Widget](https://androidmonks.com/spacer-widget-flutter/)### Leave a Comment [Cancel reply](/align-widget-flutter/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"1871","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "cc5bc2851c";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "1871";var swpClickTracking = false; 