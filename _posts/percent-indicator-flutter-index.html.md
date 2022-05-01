---
title: '# Percent Indicator Plugin in Flutter'
description: 'Percent Indicator Flutter Plugin eases the important UI/UX design by creating a simple Animation Controller to show the progress of the percentages'
date: '2019-09-02'
modified_date: '2019-09-02'
image: '/assets/images/posts'
---
# Percent Indicator Plugin in Flutter

 [September 2, 2019](https://androidmonks.com/percent-indicator-flutter/ "5:58 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Percent Indicator Plugin in Flutter](#Percent_Indicator_Plugin_in_Flutter)
	+ [1.1 Percent Indicator – Flutter Basics](#Percent_Indicator_8211_Flutter_Basics)
	+ [1.2 Percent\_Indicator – Attributes](#Percent_Indicator_8211_Attributes)
	+ [1.3 PercentIndicator App Example](#PercentIndicator_App_Example)
	+ [1.4 Awesome Flutter plugin – Conclusion](#Awesome_Flutter_plugin_8211_Conclusion)
## Percent Indicator Plugin in Flutter

As part of the Awesome Plugin series, this article discusses the Percent Indicator Plugin in Flutter.

We will see how to create a good looking percent indicator that creates easy and effective way to display percentages in Flutter. Percent Indicator can be created by simply making use of the Flutter plugin called the **percent\_indicator.**

This plugin has been created by [this](https://twitter.com/diegoveloper) developer. Do not forget to check them out and start the project.

We will start with how to use this plugin and what are the important use cases that are covered by this plugin. There are 2 important Indicators that this covers, primarily **LinearIndicator and CircularIndicator.**

### Percent Indicator – Flutter Basics

To begin with, start by making use of the Flutter’s percent\_indicator plugin


```
dependencies: 
 **percent\_indicator: ^2.1.1+1**
```
Import the following line into your **main.dart file or whichever file is your main file.**


```
import 'package:percent\_indicator/percent\_indicator.dart';
```
### Percent\_Indicator – Attributes

The current plugin supports two different Widgets. The **Linear and Circular Percent Indicator.**

Some of the important Percent Indicator attributes include,

* **progressColor –**Color of the Progress Bar that shows on the Percent Indicator Widget. Since the progress Color is going to be important in terms of UI/UX, make sure to use a bold color. Color can be defined through the **Colors**class.
* **percent –**Defines the percentage up to which the bar should be animated. **Takes a double value from 0 -> 1.**
* **radius –** Specific to the Circular Progress Widget only. This defines the size of the Circle.
* **center –**Center defines the widget it holds in the center of the Progress Bar. Can be used by both Linear and Circular Indicators.

The following section holds the example program to create the Linear and Circular Progress Indicators. Do not forget to read the last section for the explanation of the app example.

### PercentIndicator App Example

This section holds the example app to create the Percent Indicator with both Linear and Circular Widgets. We will use a Container Widget and a Column widget to hold them in a vertical way. See the following section for the example App images.


```

import 'dart:async';
import 'package:flutter/material.dart';
import 'package:percent\_indicator/percent\_indicator.dart';

void main() => runApp(PercentIndicatorApp());

class PercentIndicatorApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Sample ShimmerEffect Widget',
home: PercentIndicatorWidget(),
);
}
}

class PercentIndicatorWidget extends StatefulWidget {
PercentIndicatorWidget({Key key}) : super(key: key);

@override
\_PercentIndicatorWidgetState createState() => \_PercentIndicatorWidgetState();
}

class \_PercentIndicatorWidgetState extends State {

@override
void initState() {
super.initState();
}

@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(title: Text("Percentage Indicator"),),
body: Container(
padding: EdgeInsets.all(25.0),
child:Column(
children: [
CircularPercentIndicator(
progressColor: Colors.redAccent,
percent: 0.5,
animation: true,
radius: 250.0,
lineWidth: 15.0,
circularStrokeCap: CircularStrokeCap.round,
center: Text("Circle"),
),
LinearPercentIndicator(
width: 250.0,
lineHeight: 15.0,
progressColor: Colors.orangeAccent,
percent: 0.7,
center: Text("Circle"),
animation: true,
)
],
)
),
);
}
}

```
 

The application looks like

![Percent Indicator](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Percent Indicator](https://androidmonks.com/wp-content/uploads/2019/09/percentindicator.png) **Percent Indicator App**### Awesome Flutter plugin – Conclusion

We are looking at some really useful Plugins and do not forget to check all of them out. Some of the useful Flutter Plugins makes the boiler plater really easy and can help in easing the effort to create massive projects in short span of time.

Check out –

[Flutter Badges Plugin](https://androidmonks.com/flutter-badges/)

[Animated Text Kit](https://androidmonks.com/animated-text-kit-flutter/)

***“Learn and Be Curious”***

[Tweet](https://twitter.com/intent/tweet?text=Percent+Indicator+Plugin+in+Flutter&url=https%3A%2F%2Fandroidmonks.com%2Fpercent-indicator-flutter%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fpercent-indicator-flutter%2F)0 Shares Categories [Flutter](https://androidmonks.com/category/flutter/) [Leave a comment](https://androidmonks.com/percent-indicator-flutter/#respond) Post navigation[Animated Text Kit Flutter – Awesome Flutter Plugins](https://androidmonks.com/animated-text-kit-flutter/)[Google Maps in Flutter | Easy Integration](https://androidmonks.com/google-maps-flutter/)### Leave a Comment [Cancel reply](/percent-indicator-flutter/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"1941","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "bb51998ee8";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "1941";var swpClickTracking = false; 