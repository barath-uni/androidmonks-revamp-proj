---
title: '# Flutter AnimatedSwitcher Widget | 3 minute Flutter Animation'
description: 'Flutter AnimatedSwitcher Widget provides a simple mechanism to create widget to widget transition. Takes is 3 minutes to make your first Flutter Animation'
date: '2019-11-11'
modified_date: '2019-11-11'
image: '/assets/images/posts'
---
# Flutter AnimatedSwitcher Widget | 3 minute Flutter Animation

 [November 11, 2019](https://androidmonks.com/flutter-animatedswitcher-widget/ "3:24 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Flutter AnimatedSwitcher Widget](#Flutter_AnimatedSwitcher_Widget)
	+ [1.1 AnimatedSwitcher – Basics](#AnimatedSwitcher_8211_Basics)
	+ [1.2 AnimatedSwitcher Properties](#AnimatedSwitcher_Properties)
	+ [1.3 Flutter AnimatedSwitcher Widget – Example App](#Flutter_AnimatedSwitcher_Widget_8211_Example_App)
	+ [1.4 Conclusion](#Conclusion)
## Flutter AnimatedSwitcher Widget

[Flutter AnimatedSwitcher widget](https://androidmonks.com/flutter-animatedswitcher-widget/) gives an interface to perform Transition between one widget to another. The animation can be easily controlled through this widget and is very easy to set up also.

This widget by default does a **FadeTransition** between a new widget and the widget previously set on the AnimatedSwitcher as a child. If they are swapped fast enough, then no animation appears, thus it’s important to use the duration parameter to control this animation on the widget(More of this below)

Also, note that, if the Widget’s new child and the old child, have the same key even though there are the difference is properties, the animation won’t work. This is because the framework identifies a new Widget is generated only through the key attribute. To force the transition to occur, set a Key on each child widget that you wish to be considered unique (typically a ValueKey on the widget data that distinguishes this child from the others).

In the upcoming sections, we will look at the AnimatedSwitcher Widget and all the related properties. Make sure to understand the different properties and the basics of using the Animated Switcher widget to effectively use it.

![AnimatedSwitcher Widget](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![AnimatedSwitcher Widget](https://androidmonks.com/wp-content/uploads/2019/11/GOOGLE-MAPS-PLUGIN-2.png) **AnimatedSwitcher Widget**### AnimatedSwitcher – Basics

In order to create an inbound/outbound animation on the widget, use the following class.


```
AnimatedSwitcher()
```
The most important property of this class is the duration property. We will see more about that in the next section.

**Note: Remember to give a unique key to the child property of the AnimatedSwitcher always.**

### AnimatedSwitcher Properties

There are several properties that are tagged with the AnimatedSwitcher class. The important properties are listed below,

**child** – The current child widget to display. If there was a previous child, then that child will be faded out using the switchOutCurve, while the new child is faded in with the switchInCurve.

duration – The duration of the transition from the old child value to the new one. Use the Duration class to give its value effectively.

reverseDuration – The duration of the transition from the new child value to the old one. Make sure to give it a Duration class as its value.

switchInCurve – The animation curve to use when transitioning in a new child. It takes in a Curve class as its value.

switchOutCurve – The animation curve to use when transitioning a previous child out. Takes in a Curve class as its value.

[transitionBuilder](https://api.flutter.dev/flutter/widgets/AnimatedSwitcher/transitionBuilder.html) – This is a simple property that lets us decide the actual transition animation that has to be applied to the child(From the old child to the new child). In order to effectively use this property, we must consider it as a function that wraps a new child with an animation that transitions the child in when the animation runs in the forward direction and out when the animation runs in the reverse direction. Note that, this is only called when a new child is set (not for each build), or when a new transitionBuilder is set. If a new transitionBuilder is set, then the transition is rebuilt for the current child and all previous children using the new transitionBuilder. The function must not return null.

In the next section, we will see a detailed example application containing the use of this Animated switcher widget. Make sure to run this on your [Android Studio IDE](https://androidmonks.com/android-studio/) and determine the Animation to yourself.

 

### Flutter AnimatedSwitcher Widget – Example App


```
import 'package:flutter/material.dart';

void main() => runApp(

    MaterialApp(
      title: 'Animated Switcher App',
      home: AnimatedSwitcherApp(),
    )
);

class AnimatedSwitcherApp extends StatefulWidget {

  @override
  \_AnimatedSwitcherAppState createState() => \_AnimatedSwitcherAppState();
}

class \_AnimatedSwitcherAppState extends State<AnimatedSwitcherApp> {
  int count = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Animated Switcher"),),
      body: Column(
        children: <Widget>[
          AnimatedSwitcher(
            transitionBuilder: (Widget child, Animation<double> animation){
              return ScaleTransition(child: child, scale: animation,);
            },
            child: Text(
                '$count',
                 key: ValueKey<int>(count),
                 style: TextStyle(fontSize: 40.0, fontWeight: FontWeight.bold),
            ),
            duration: const Duration(milliseconds: 500),
          ),
          FlatButton(child: Text("Click here", style: TextStyle(fontSize: 50.0),),
          onPressed: (){
            setState(() {
              count += 1;
            });
          },
          )
        ],
      ),
    );
  }
}
```
**Example Application looks like,**

![AnimatedSwitcher Widget Example](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![AnimatedSwitcher Widget Example](https://androidmonks.com/wp-content/uploads/2019/11/animatedswitcher.png) **AnimatedSwitcher Widget Example**### Conclusion

The [AnimatedSwitcher widget](https://androidmonks.com/flutter-animatedswitcher-widget/) can be effectively used to perform simple transition animation between widgets easily. However, be aware of the fact that it does become a costly operation if lot of various transitions are involved. Hence, use it effectively and not overkill the animations. Apart from the UX appeal of the Flutter App, it also has performance issues(Too many transitions slow down the app).

[Tweet](https://twitter.com/intent/tweet?text=Flutter+AnimatedSwitcher+Widget++3+minute+Flutter+Animation&url=https%3A%2F%2Fandroidmonks.com%2Fflutter-animatedswitcher-widget%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fflutter-animatedswitcher-widget%2F)0 Shares Categories [Flutter](https://androidmonks.com/category/flutter/) [Leave a comment](https://androidmonks.com/flutter-animatedswitcher-widget/#respond) Post navigation[SelectableText Widget in Flutter | Copyable Text in Flutter](https://androidmonks.com/selectabletext-widget-flutter/)[RichText Widget in Flutter | Span Text Easily](https://androidmonks.com/richtext-flutter/)### Leave a Comment [Cancel reply](/flutter-animatedswitcher-widget/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"2182","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "c14f5ebe6a";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "2182";var swpClickTracking = false; 