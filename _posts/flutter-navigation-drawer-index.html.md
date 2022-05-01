---
title: '# Flutter Navigation Drawer in 5 Minutes'
description: 'Navigation Drawer in Flutter helps in creating a very good and neat Slider on the UI. This article shows how to do it under 5 minutes.'
date: '2019-12-07'
modified_date: '2019-12-06'
image: '/assets/images/posts'
---
# Flutter Navigation Drawer in 5 Minutes

 [December 6, 2019December 7, 2019](https://androidmonks.com/flutter-navigation-drawer/ "12:00 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Flutter Navigation Drawer in 5 Minutes](#Flutter_Navigation_Drawer_in_5_Minutes)
	+ [1.1 How to create a Drawer in Flutter?](#How_to_create_a_Drawer_in_Flutter)
	+ [1.2 Navigation Drawer Basics](#Navigation_Drawer_Basics)
		- [1.2.1 Attributes and Helper Widgets](#Attributes_and_Helper_Widgets)
			* [1.2.1.1 DrawerHeader Widget](#DrawerHeader_Widget)
			* [1.2.1.2 ListTile Widget](#ListTileWidget)
	+ [1.3 Navigation Drawer Example Application](#Navigation_Drawer_Example_Application)
## Flutter Navigation Drawer in 5 Minutes

Navigation Drawer or the Menu SlideBar is a very useful UX/UI component to any application. To create a Navigation Drawer in the native Android/Kotlin would take a lot of boilerplate code to be written. In Flutter, all it is going to take is 5 minutes of your time!

**Navigation Drawer Provides quick menu options and other important information in any Application. These are persistent and will be available throughout the App. A great way to show details like UserName or Menu items etc. This article is going to share how to include that in your Flutter Application. A simple Widget is going to be introduced into the Scaffold Widget and Voila! Navigation Drawer is now live.**

### How to create a Drawer in Flutter?

Navigation Drawers in Flutter can be created using the **Drawer() widget.**The catch here is that there are very few Widgets that accept a Drawer widget. One important widget is the **[Scaffold widget in flutter](https://androidmonks.com/scaffold-flutter/).** This will by default provides an option to include navigation drawer through the **drawer**attribute. The following section will show what and how to use the Drawer widget in the Scaffold layout.

### Navigation Drawer Basics

Including the **Drawer() widget**in Scaffold’s *‘drawer’*is not going to do the trick. In fact, it will only create an empty slider. In order to fill up this slider with some data at least, we will have to see what are the attributes that the **Drawer**widget provides.

Sample usage of **Drawer widget**,


```
Scaffold(drawer: Drawer())
```
#### Attributes and Helper Widgets

Drawer Widget takes only 3 attributes to itself, they are

**child –**This attribute is the important attribute to show the Navigation Drawer to the user. It can take any widget as its value.  **Pass any widget to this attribute and it will automatically place it in the Drawer**. Some of the most used Widgets include [**ListView** **Widget**](https://androidmonks.com/listview-flutter/)**, [Image Widget](https://androidmonks.com/image-widget-flutter/), [Text Widget](https://androidmonks.com/richtext-flutter/)!**

**elevation** – Takes a double/float value, and denotes how much of Z-axis should be moved to provide a depth like an effect on it. **Mostly advisable to keep this to 0 or default since otherwise, it will be too difficult in terms of user experience.**

**semanticLabel –**Used primarily for accessibility purpose, takes in a String value.

Once these attributes are used, there is the question of what actually works with a Navigation Drawer widget. **The Navigation Drawer widget can also be partitioned with other helper Widgets like DrawerHeader, ListTile Widgets,** etc.

##### **DrawerHeader Widget**

The main purpose of the DrawerHeader widget is to actually be the Header for the Drawer Widget. It occupies the portion on the Top of the Slider and can be used to show lots of things.

Provides 2 important attributes, **child and decoration**. To know how we are using the DrawerHeader for the Navigation Sliding Drawer, check out the next section where the example application is run.

##### ListTile Widget

The ListTile widget provides a simple container that can be used to hold a **Title, SubTitle.**This is tweaked a bit for the Drawer purposes and can be easily used in Flutter’s Sliding Drawer. The next section contains the example application with ListTile widget involved.

To know more about how we can play around with ListTile widget, read the [ListView Widget in Flutter](https://androidmonks.com/listview-flutter/). The article contains important information on ListTiles

### Navigation Drawer Example Application

The below section will try to create a simple Application to show the use of the Drawer() widget in Flutter. It most importantly makes use of the [Scaffold Widget](https://androidmonks.com/scaffold-flutter/).


```
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  final appTitle = 'Androidmonks';

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: appTitle,
      home: MyHomePage(title: appTitle),
    );
  }
}

class MyHomePage extends StatelessWidget {
  final String title;

  MyHomePage({Key key, this.title}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.orangeAccent,
      appBar: AppBar(title: Text("Sample Drawer"),backgroundColor: Colors.black87,),
      body: Column(
        children: <Widget>[
          Card(child:Image.network("https://s.tmimgcdn.com/blog/wp-content/uploads/2016/04/1-1.jpg?x62314"),),
          Card(child:Image.network("https://s.tmimgcdn.com/blog/wp-content/uploads/2016/04/3-9-1.jpg?x62314"),),
        ],

      ),
      drawer: Drawer(
          child: ListView(
            padding: EdgeInsets.all(0),
            children: <Widget>[
              DrawerHeader(
                child: Column(
                  children: <Widget>[
                    Text("JOHN DOE", style: TextStyle(color: Colors.white, fontSize: 30),),
                    Image.network("https://www.w3schools.com/w3css/img\_avatar3.png", height: 100.0, width: 100.0,)
                  ],
                ),
                decoration: BoxDecoration(color: Colors.deepOrangeAccent),
              ),
              ListTile(
                title: Text("Sample Item 1", style: TextStyle(color: Colors.orangeAccent, fontSize: 16),),
                onTap: (){
                  
                    Navigator.pop(context);
                },
              ),
              ListTile(
                title: Text("Sample Item 2", style: TextStyle(color: Colors.orangeAccent, fontSize: 16),),
                onTap: (){
                  Navigator.pop(context);

                },
              )
            ],
          )
      ),
    );
  }
}
```
This will create an application that looks like,

![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2019/12/Screen-Shot-2019-06-18-at-8.22.53-PM-477x1024.png)

[Tweet](https://twitter.com/intent/tweet?text=Flutter+Navigation+Drawer+in+5+Minutes&url=https%3A%2F%2Fandroidmonks.com%2Fflutter-navigation-drawer%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fflutter-navigation-drawer%2F)0 Shares Categories [Flutter](https://androidmonks.com/category/flutter/) [Leave a comment](https://androidmonks.com/flutter-navigation-drawer/#respond) Post navigation[Flutter Basics in 1 Hour | Create your First App [Free]](https://androidmonks.com/flutter-basics-1-hour/)[Flutter and Rive – Creating Splash Screen](https://androidmonks.com/flutter-rive-splash-screen/)### Leave a Comment [Cancel reply](/flutter-navigation-drawer/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"1781","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "c005e5bc76";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "1781";var swpClickTracking = false; 