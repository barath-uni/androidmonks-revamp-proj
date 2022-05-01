---
title: '# Spacer Widget in Flutter – Simplest Flutter Widget'
description: 'Spacer widget is the simplest widget in Flutter. Its purpose is to create empty spaces between containers. This article discusses the sample with examples.'
date: '2019-07-30'
modified_date: '2019-07-31'
image: '/assets/images/posts'
---
# Spacer Widget in Flutter – Simplest Flutter Widget

 [July 31, 2019July 30, 2019](https://androidmonks.com/spacer-widget-flutter/ "12:00 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Spacer Widget in Flutter – Simplest Flutter Widget](#Spacer_Widget_in_Flutter_8211_Simplest_Flutter_Widget)
	+ [1.1 Spacer Widget – Basics](#Spacer_Widget_8211_Basics)
		- [1.1.1 flex](#flex)
	+ [1.2 Spacer – Example App](#Spacer_8211_Example_App)
	+ [1.3 Conclusion](#Conclusion)
## Spacer Widget in Flutter – Simplest Flutter Widget

[Spacer Widget in Flutter](https://androidmonks.com/spacer-widget-flutter/) helps in creating empty spacer that can be used to tune the spacing between the Widgets by giving it a flex attribute!

Probably the simplest of [all the Widgets in Flutter](https://androidmonks.com/first-flutter-app/). Does not contain **more than 1 attribute** and has a very simple use case as well.

If you want to create a simple Spacer between Containers and not worry about how the container spaces will change when it scales to a bigger screen or smaller screen Spacer widget does it for you.

It can automatically calculate the available space between the widgets and uses the flex as the percentage of space between them. In this tutorial, we will see how the Spacer widget is created and can be used in the Flutter application.

But as always, use the below template to carry forward this tutorial.


```
import 'dart:async';

import 'package:flutter/material.dart';

void main() => runApp(SpacerApp());

class SpacerApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Sample Spacer Widget',
      home: SpacerWidget(),
    );
  }
}

class SpacerWidget extends StatefulWidget {
  SpacerWidget({Key key}) : super(key: key);

  @override
  \_SpacerWidgetState createState() => \_SpacerWidgetState();
}

class \_SpacerWidgetState extends State<SpacerWidget> {
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
### Spacer Widget – Basics

To begin with, use the [`Spacer`class](https://androidmonks.com/spacer-widget-flutter/) to start creating empty spacers in your application. What Spacer does is at the base creates only **empty white space between the widgets mentioned!**

This is different from a [Divider Widget](https://androidmonks.com/divider-widget-flutter/) as the divider widget can control the color size and lot more! Spacer’s sole purpose is to create empty white space between the mentioned Widgets! Could be a container widget, card widget, etc.

The Spacer contains only one attribute as mentioned below.

#### flex

The flex attribute is used in order to specify the amount of white space needed. It takes in an Int as its value and can be used as given below.


```
Spacer(
flex: 2)
```
The default value for Spacer’s [flex attribute](https://api.flutter.dev/flutter/widgets/Spacer/flex.html) is 1. It can directly be called and Space will be created.

**Note: Spacer widget is used primarily in Row Widget & Column Widget.**

### Spacer – Example App

The below code shows how the Spacer widget can be used to create the required empty space needed between 2 containers.

On running the application, you can find the difference between the flex:1 and flex:2 visibly. This way of organizing the empty space is the primary use of the Spacer().


```
import 'dart:async';

import 'package:flutter/material.dart';

void main() => runApp(SpacerApp());

class SpacerApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Sample Spacer Widget',
      home: SpacerWidget(),
    );
  }
}

class SpacerWidget extends StatefulWidget {
  SpacerWidget({Key key}) : super(key: key);

  @override
  \_SpacerWidgetState createState() => \_SpacerWidgetState();
}

class \_SpacerWidgetState extends State<SpacerWidget> {
  @override
  void initState() {
    super.initState();
  }
  @override
  Widget build(BuildContext context) {

    return Scaffold(
      drawer: Drawer(),
      appBar: AppBar(
        title: Text('Sample Spacer Widget'),
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
                decoration: BoxDecoration(color: Colors.blue),
                child: Center(child:Text("Sample Widget 1")),
              ),
            ),
            Spacer(),
            Card(
              child: Container(
                height: 200,
                width: 900,
                decoration: BoxDecoration(color: Colors.red),
                child: Center(child:Text("Sample Widget 2")),
              ),
            ),
            Spacer(flex: 2,),
            Card(
              child: Container(
                height: 200,
                width: 900,
                decoration: BoxDecoration(color: Colors.orange),
                child: Center(child:Text("Sample Widget 3")),
              ),
            ),
            ],
        ),
      )
    );
  }
}



```
 

This generates an app that looks like,

![Spacer WIdget in Flutter](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Spacer WIdget in Flutter](https://androidmonks.com/wp-content/uploads/2019/07/Screen-Shot-2019-07-04-at-9.25.21-PM-505x1024.png) **Spacer Widget in Flutter**### Conclusion

It is important to understand the difference between the Divider and [Spacer](https://androidmonks.com/spacer-widget-flutter/) in Flutter. You can also read about [Divider Widget in Flutter](https://androidmonks.com/divider-widget-flutter/) article for better understanding of what is the key difference between these two widgets.

***“Learn and Be Curious”***

[Tweet](https://twitter.com/intent/tweet?text=Spacer+Widget+in+Flutter+-+Simplest+Flutter+Widget&url=https%3A%2F%2Fandroidmonks.com%2Fspacer-widget-flutter%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fspacer-widget-flutter%2F)0 Shares Categories [Flutter](https://androidmonks.com/category/flutter/) [Leave a comment](https://androidmonks.com/spacer-widget-flutter/#respond) Post navigation[Align Widget in Flutter](https://androidmonks.com/align-widget-flutter/)[ClipRect Widget in Flutter | Androidmonks](https://androidmonks.com/cliprect-widget-flutter/)### Leave a Comment [Cancel reply](/spacer-widget-flutter/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"1891","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "cc5bc2851c";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "1891";var swpClickTracking = false; 