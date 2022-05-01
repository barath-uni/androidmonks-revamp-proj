---
title: '# Animated Text Kit Flutter – Awesome Flutter Plugins'
description: 'In this article check out the super awesome flutter plugin Animated Text Kit to create native flutter animations. Code example along with output is given.'
date: '2019-08-20'
modified_date: '2019-08-20'
image: '/assets/images/posts'
---
# Animated Text Kit Flutter – Awesome Flutter Plugins

 [August 20, 2019August 20, 2019](https://androidmonks.com/animated-text-kit-flutter/ "5:15 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Flutter Animated Text – Simple Text Animations](#Flutter_Animated_Text_8211_Simple_Text_Animations)
	+ [1.1 Animated Text Kit – Basics of the Plugin](#Animated_Text_Kit_8211_Basics_of_the_Plugin)
		- * [1.1.0.1 Rotate](#Rotate)
			* [1.1.0.2 Fade](#Fade)
			* [1.1.0.3 Scale](#Scale)
	+ [1.2 Typer](#Typer)
		- * [1.2.0.1 TypeWriter](#TypeWriter)
	+ [1.3 Animated TextKit – Available attributes](#Animated_TextKit_8211_Available_attributes)
	+ [1.4 Animated Text Kit – Sample App](#Animated_Text_Kit_8211_Sample_App)
	+ [1.5 Animated TextKit – Conclusion](#Animated_TextKit_8211_Conclusion)
## Flutter Animated Text – Simple Text Animations

This article is about using the [Flutter Animated Text Kit plugin](https://androidmonks.com/animated-text-kit-flutter/) that can be used to create the Text Animations in Flutter. It is not required to create complex animations, however, can be easily done through a simple Flutter Animated Text plugin.

This plugin is done by [this developer](https://github.com/aagarwal1012/Animated-Text-Kit). Do not forget to check him out and start his repo!

### Animated Text Kit – Basics of the Plugin

To start this [Animated Text Kit Plugin](https://androidmonks.com/animated-text-kit-flutter/), make sure to begin by importing this dependency in your pubspec.yaml file.


```
  animated\_text\_kit: ^1.3.1

```
Next would be to import this following file in your main.dart file


```
import 'package:animated\_text\_kit/animated\_text\_kit.dart';
```
Time to get the hands dirty! There are lot of different animations that can be done. The classes that give these animations are.

##### Rotate

To perform the text rotation, make use of the **RotateAnimatedTextKit.**Sample code is present as part of the App in the next section.


```
RotateAnimatedTextKit(
      onTap: () {
        print("Tap Event");
      },
      text: ["AWESOME", "OPTIMISTIC", "DIFFERENT"],
      textStyle: TextStyle(fontSize: 40.0, fontFamily: "Horizon"),
      textAlign: TextAlign.start,
      alignment: AlignmentDirectional.topStart // or Alignment.topLeft
    )
```
##### Fade

Possible through the **FadeAnimatedTextKit.**Sample code is present as part of the App example in the next section.


```
FadeAnimatedTextKit(
    onTap: () {
        print("Tap Event");
      },
    text: [
      "do IT!",
      "do it RIGHT!!",
      "do it RIGHT NOW!!!"
    ],
    textStyle: TextStyle(
        fontSize: 32.0, 
        fontWeight: FontWeight.bold
    ),
    textAlign: TextAlign.start,
    alignment: AlignmentDirectional.topStart // or Alignment.topLeft
  )
```
##### Scale

Possible through the **ScaleAnimatedTextKit class.**


```
ScaleAnimatedTextKit(
    onTap: () {
        print("Tap Event");
      },
    text: [
      "Think",
      "Build",
      "Ship"
      ],
    textStyle: TextStyle(
        fontSize: 70.0,
        fontFamily: "Canterbury"
    ),
    textAlign: TextAlign.start,
    alignment: AlignmentDirectional.topStart // or Alignment.topLeft
  )
```
### Typer

This is possible through the **TyperAnimatedTextKit class.**


```
TyperAnimatedTextKit(
    onTap: () {
        print("Tap Event");
      },
    text: [
      "It is not enough to do your best,",
      "you must know what to do,",
      "and then do your best",
      "- W.Edwards Deming",
    ],
    textStyle: TextStyle(
        fontSize: 30.0,
        fontFamily: "Bobbers"
    ),
    textAlign: TextAlign.start,
    alignment: AlignmentDirectional.topStart // or Alignment.topLeft
  )
```
##### TypeWriter

To create the TypeWriter effect which is possible through the **TypewriterAnimatedTextKit class.**


```
TypewriterAnimatedTextKit(
    onTap: () {
        print("Tap Event");
      },
    text: [
      "Discipline is the best tool",
      "Design first, then code",
      "Do not patch bugs out, rewrite them",
      "Do not test bugs out, design them out",
    ],
    textStyle: TextStyle(
        fontSize: 30.0,
        fontFamily: "Agne"
    ),
    textAlign: TextAlign.start,
    alignment: AlignmentDirectional.topStart // or Alignment.topLeft

```
### Animated TextKit – Available attributes

In this section we will see all the available attributes that are part of this plugin.

* **text –**Holds a list of string to actually animate as part of the individual effect.
* **alignment –**Takes in a AlignmentDirectional class and can hold either **topStart, topLeft etc**
* **textStyle  –**Text Style is used to style the Text of the Widget that appears on the screen.
* **onTap**  – Callback to provide with a action whenever these texts are tapped.

### Animated Text Kit – Sample App

This section contains the example app to create all the AnimatedTextKit classes/widgets. Its important to understand that, these are direct class calls and are really simple to use.

Do not forget to check the final section for better understanding of how these AnimatedTextKit works.


```
import 'dart:async';
import 'package:flutter/material.dart';
import 'package:animated\_text\_kit/animated\_text\_kit.dart';

void main() => runApp(AnimatedTextApp());

class AnimatedTextApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return new MaterialApp(
title: 'APP',
home: AnimatedTextWidget(),
);
}
}

class AnimatedTextWidget extends StatefulWidget {
AnimatedTextWidget({Key key}) : super(key: key);

@override
\_AnimatedTextWidgetState createState() => \_AnimatedTextWidgetState();
}

class \_AnimatedTextWidgetState extends State {

@override
void initState() {
super.initState();
}

@override
Widget build(BuildContext context) {
return Scaffold
(
appBar: AppBar(title: Text("Animated Text"),),
backgroundColor: Colors.blue[400],
body: Container(
child: Column(
children: [
Row(
children: [
Spacer(),
Text("Learn", style: TextStyle(fontSize:30.0),),
Spacer(),
RotateAnimatedTextKit(
text: ["Android", "Flutter", "IOS"],
textStyle: TextStyle(fontSize: 30.0, fontStyle: FontStyle.italic, color: Colors.yellow),
),
Spacer(flex: 2,)
],
),
Spacer(),
FadeAnimatedTextKit(
text: ["Web", "Web is", "Web is King"],
textStyle: TextStyle(fontSize:30.0, fontStyle:FontStyle.normal, color:Colors.yellow)
),
Spacer(),
ScaleAnimatedTextKit(
text: ["God", "Speed"],
textStyle: TextStyle(fontSize:30.0, fontStyle:FontStyle.normal, color:Colors.yellow)
),
Spacer(),
TyperAnimatedTextKit(
text: ["Betty bought some butter"],
textStyle: TextStyle(fontSize:30.0, fontStyle:FontStyle.normal, color:Colors.yellow)
),
Spacer(),
TypewriterAnimatedTextKit(
text: ["But the butter was so bitter"],
textStyle: TextStyle(fontSize:30.0, fontStyle:FontStyle.normal, color:Colors.yellow)
),
Spacer()

],
),
)
);
}
}
```
### 

![Animated Text Kit app](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Animated Text Kit app](https://androidmonks.com/wp-content/uploads/2019/08/screengrab.png) **Animated Text**![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2019/08/Screenshot-from-2019-08-17-14-11-06.png) ![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2019/08/trans1.png) ![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2019/08/trans2.png) ![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2019/08/trans4.png) ![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2019/08/trans5.png)

### Animated TextKit – Conclusion

[Animated TextKit](https://androidmonks.com/animated-text-kit-flutter/) is a super useful plugin to perform Flutter specific animations. Like mentioned at the start of this article, do not forget to check the developer out and start the repo!

***“Learn and Be Curious”***

 

[Tweet](https://twitter.com/intent/tweet?text=Animated+Text+Kit+Flutter+-+Awesome+Flutter+Plugins&url=https%3A%2F%2Fandroidmonks.com%2Fanimated-text-kit-flutter%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fanimated-text-kit-flutter%2F)0 Shares Categories [Flutter](https://androidmonks.com/category/flutter/) [Leave a comment](https://androidmonks.com/animated-text-kit-flutter/#respond) Post navigation[Flutter Badges Plugin | Alternative to Flutter Chip?](https://androidmonks.com/flutter-badges/)[Percent Indicator Plugin in Flutter](https://androidmonks.com/percent-indicator-flutter/)### Leave a Comment [Cancel reply](/animated-text-kit-flutter/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"1943","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "5e9d84bb42";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "1943";var swpClickTracking = false; 