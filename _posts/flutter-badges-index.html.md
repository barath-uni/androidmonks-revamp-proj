---
title: '# Flutter Badges Plugin | Alternative to Flutter Chip?'
description: 'Flutter Badges plugin is a super useful plugin to create good UI option over Flutter Chip. In this article we will see example app of how useful it is.'
date: '2019-08-18'
modified_date: '2019-08-18'
image: '/assets/images/posts'
---
# Flutter Badges Plugin | Alternative to Flutter Chip?

 [August 18, 2019August 18, 2019](https://androidmonks.com/flutter-badges/ "12:30 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Flutter Badges Plugin | Alternative to Flutter Chip?](#Flutter_Badges_Plugin_Alternative_to_Flutter_Chip)
	+ [1.1 Flutter Badges Basics](#Flutter_Badges_Basics)
	+ [1.2 Badge Class Properties](#Badge_Class_Properties)
	+ [1.3 Flutter Badge – Example Application](#Flutter_Badge_8211_Example_Application)
	+ [1.4 Conclusion](#Conclusion)
## Flutter Badges Plugin | Alternative to Flutter Chip?

[Flutter Badges is a plugin](https://androidmonks.com/flutter-badges/) that is aimed at giving simple and neater ways to show Badges in a Flutter App. If you are familiar with the Flutter Chip, you can think of this as an add-on version to that.

Even though it cannot do all the thing that a Flutter Chip can do, the [Flutter Badges plugin](https://androidmonks.com/flutter-badges/) is super useful and can create simple Badge like icons/Buttons, etc with just one Simple Class.

In this article on Flutter plugins, we will see how to create this [Badge Plugin](https://androidmonks.com/flutter-badges/) and use it in the Application.

The developer of this plugin is – https://github.com/yadaniyil/flutter\_badges

### Flutter Badges Basics

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
![Flutter Badges app](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Flutter Badges app](https://androidmonks.com/wp-content/uploads/2019/08/badges.png) **Flutter Badges app**### Conclusion

The main use of this article is to decide if the [Badges](https://androidmonks.com/flutter-badges/) can be an alternative to Flutter Chip. It is really important to create [Badges](https://androidmonks.com/flutter-badges/) were required rather than overusing it.

Flutter Chip can create good experience but at the same time be an overkill also. Make sure to drop comments in the section below to know more.

***“Learn and Be Curious”***

[Tweet](https://twitter.com/intent/tweet?text=Flutter+Badges+Plugin++Alternative+to+Flutter+Chip%3F&url=https%3A%2F%2Fandroidmonks.com%2Fflutter-badges%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fflutter-badges%2F)0 Shares Categories [Flutter](https://androidmonks.com/category/flutter/) [Leave a comment](https://androidmonks.com/flutter-badges/#respond) Post navigation[Flutter ClipPath Widget | UI Clippers in Flutter](https://androidmonks.com/flutter-clippath-widget/)[Animated Text Kit Flutter – Awesome Flutter Plugins](https://androidmonks.com/animated-text-kit-flutter/)### Leave a Comment [Cancel reply](/flutter-badges/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"1945","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "5e9d84bb42";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "1945";var swpClickTracking = false; 