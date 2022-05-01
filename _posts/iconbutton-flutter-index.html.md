---
title: '# IconButton Widget in Flutter | Androidmonks'
description: 'IconButton Widget is a simple Widget which does the work of a Button but holds only Icons in it. All the available attribute is discussed in this tutorial.'
date: '2019-04-10'
modified_date: '2019-06-20'
image: '/assets/images/posts'
---
# IconButton Widget in Flutter | Androidmonks

 [June 20, 2019April 10, 2019](https://androidmonks.com/iconbutton-flutter/ "3:45 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 IconButton Widget in Flutter | Androidmonks](#IconButton_Widget_in_Flutter_Androidmonks)
	+ [1.1 IconButton – Basics](#IconButton_8211_Basics)
	+ [1.2 IconButton Widget – Properties](#IconButton_Widget_8211_Properties)
		- [1.2.1 icon](#icon)
		- [1.2.2 color](#color)
		- [1.2.3 disabledColor](#disabledColor)
		- [1.2.4 highlightColor](#highlightColor)
		- [1.2.5 onPressed](#onPressed)
		- [1.2.6 Padding](#Padding)
		- [1.2.7 toolTip](#toolTip)
		- [1.2.8 splashColor](#splashColor)
		- [1.2.9 alignment](#alignment)
	+ [1.3 IconButton Widget – Wrapup](#IconButton_Widget_8211_Wrapup)
## IconButton Widget in Flutter | Androidmonks

[IconButton](https://androidmonks.com/iconbutton-flutter/) is a pretty useful widget in Flutter. An IconButton is a picture printed on a Material Widget. The main need for an Icon Button is to give it a material design feel. It creates nothing more than a Button with Icon in it. It, however, calls the Ink() widget to give it a splash feel.

In this tutorial, we will look at all the properties of the [IconButton Widget](https://androidmonks.com/iconbutton-flutter/) in Flutter and understand where to use the IconButton Widget.

### IconButton – Basics

In order to make use of the IconButton widget in the flutter App. Use the below widget definition.


```
IconButton()
```
As a sample template to create the Flutter, below is the complete code of the **main.dart** file


```
import 'package:flutter/material.dart';

void main()
{
  runApp(MaterialApp(
    title:'Androidmonks',
    home: Scaffold(
      body: Scaffold(appBar: AppBar(
        title: Text("Androidmonks"),),
        body: IconButton(),
      ),
    ),
  ));
}


```
### IconButton Widget – Properties

#### **icon**

The important attribute of the widget is the icon attribute. The attribute takes in the value of an Icon() which can store the icons. The primary attribute of the Widget is to create an [IconButton](https://androidmonks.com/iconbutton-flutter/) to let the user click on it.

You can define the icon attribute using the code given below,


```
IconButton(
  icon: Icon(Icons.settings),
)
```
This creates the app which looks like,

![Using icon attribute in IconButton widget](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Using icon attribute in IconButton widget](https://androidmonks.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-07-at-10.48.42-AM.png) **Using icon attribute in IconButton widget**#### **color**

Color attribute lets the developer control the color of the IconButton.It takes the **Colors class** as its value.


```
IconButton(
  icon: Icon(Icons.settings),
  color: Colors.cyan,
)
```
This makes the IconButton look like,

![IconButton color attribute](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![IconButton color attribute](https://androidmonks.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-07-at-10.52.29-AM.png) **IconButton color attribute**#### **disabledColor**

The problem with the color attribute is that, unless the **onPressed()** callback present, it is in the disabled state only. It becomes important to create a disabled color also. Using the attribute disabledColor which takes in a Color class, you can do the following,


```
IconButton(
  icon: Icon(Icons.create\_new\_folder),
  color: Colors.cyan,
  disabledColor: Colors.pinkAccent,
)
```
Unless the onPressed() is used, the color will remain as pink.

![IconButton disbaledColor attribute](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![IconButton disbaledColor attribute](https://androidmonks.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-07-at-10.59.03-AM.png) **IconButton disbaledColor attribute**#### **highlightColor**

HighlightColor represents the secondary color of the Button when it is pressed. The highlightColor represents what the IconButton color is apart from the color attribute.


```
IconButton(
  icon: Icon(Icons.create\_new\_folder),
  color: Colors.cyan,
  highlightColor: Colors.lightGreen,
  onPressed: (){},
)
```
![HighlightColor in IconButton](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![HighlightColor in IconButton](https://androidmonks.com/wp-content/uploads/2019/04/ezgif.com-video-to-gif-1-copy.gif) **HighlightColor in IconButton** 

#### **onPressed**

Callback that gets fired whenever the user clicks on the IconButton. You can perform any event inside the onPressed method. Check the example code below.


```
IconButton(
  icon: Icon(Icons.create\_new\_folder),
  color: Colors.cyan,
  highlightColor: Colors.lightGreen,
  onPressed: (){
    print("IconButton is clicked");
  },
)
```
Creates the Callback like,

![onPressed callback in IconButton](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![onPressed callback in IconButton](https://androidmonks.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-07-at-11.07.08-AM.png) **onPressed callback in IconButton**#### **Padding**

Padding allows some amount of space to be given to the Icon with respect to the boundaries of the IconButton. You can provide an EdgeInsetGeometry class as its value.


```
IconButton(
  icon: Icon(Icons.create\_new\_folder),
  color: Colors.cyan,
  highlightColor: Colors.lightGreen,
  padding: EdgeInsets.all(40.0),
)
```
![Padding attribute in IconButton](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Padding attribute in IconButton](https://androidmonks.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-07-at-11.49.04-AM.png) Padding attribute in IconButton#### **toolTip**

ToolTip attribute lets you create a simple Text to come up on the UI when you hover over the IconButton. You can create a ToolTip like below,


```
IconButton(
    icon: Icon(Icons.create\_new\_folder),
    color: Colors.cyan,
    highlightColor: Colors.lightGreen,
    padding: EdgeInsets.all(40.0),
    tooltip: "Sample Folder",
    onPressed: (){},
  ),
)
```
It directly takes in a String Value as its parameter. The application looks like,

![ToolTip option in IconButton](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![ToolTip option in IconButton](https://androidmonks.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-07-at-11.52.21-AM.png) **ToolTip option in IconButton**#### **splashColor**

The splash overlay has a center point that matches the hit point of the user touch event. The splash overlay will expand to fill the button area if the touch is held for long enough time. If the splash color has transparency then the highlight and button color will show through.

To give a splash Color make use of the same Color class as given below.

![SplashEffect in IconButton](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![SplashEffect in IconButton](https://androidmonks.com/wp-content/uploads/2019/04/ezgif.com-video-to-gif-1-copy-2.gif) **SplashEffect in IconButton**#### **alignment**

Aligns the Icon inside the Boundary. It takes in the **Alignment class** as its value. The value should be a combination of Top, Bottom, Left, Right, Center.

Check the code below for better understanding,


```
IconButton(
  icon: Icon(Icons.create\_new\_folder),
  color: Colors.cyan,
  alignment: Alignment.topLeft,
)
```
![TopLeft alignment](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![TopLeft alignment](https://androidmonks.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-07-at-12.12.17-PM.png) **TopLeft alignment** 

If BottomRight is used,


```
IconButton(
  icon: Icon(Icons.create\_new\_folder),
  color: Colors.cyan,
  alignment: Alignment.bottomRight,
),
```
![BottomRight Alignment](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![BottomRight Alignment](https://androidmonks.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-07-at-12.12.05-PM.png) **BottomRight Alignment** 

### IconButton Widget – Wrapup

Once all the [IconButton](https://androidmonks.com/iconbutton-flutter/) attributes are understood, its time to play around with it and create the material design IconButton.

IconButton is primarily used inside a ListView a ParentWidget to create better dynamics to the Application.

Drop in any comments you have in the comment section below.

***“Happy Coding”***

[Tweet](https://twitter.com/intent/tweet?text=IconButton+Widget+in+Flutter++Androidmonks&url=https%3A%2F%2Fandroidmonks.com%2Ficonbutton-flutter%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Ficonbutton-flutter%2F)0 Shares Categories [Android](https://androidmonks.com/category/android/), [Flutter](https://androidmonks.com/category/flutter/) [Leave a comment](https://androidmonks.com/iconbutton-flutter/#respond) Post navigation[Getting Data from Internet in Flutter | Androidmonks](https://androidmonks.com/data-from-internet-flutter/)[SliverAppBar in Flutter with Example | Androidmonks](https://androidmonks.com/sliverappbar-flutter/)### Leave a Comment [Cancel reply](/iconbutton-flutter/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"1503","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "cc5bc2851c";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "1503";var swpClickTracking = false; 