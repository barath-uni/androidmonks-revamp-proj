---
title: '# Slider Widget in Flutter | Android Studio'
description: 'Slider Widget in Flutter helps in creating a beautiful Slider animated bar. This article discusses how to create a responsive Slider Widget with Example!'
date: '2019-06-04'
modified_date: '2019-06-20'
image: '/assets/images/posts'
---
# Slider Widget in Flutter | Android Studio

 [June 20, 2019June 4, 2019](https://androidmonks.com/slider-widget-flutter/ "3:30 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Slider Widget in Flutter | Complete Tutorial](#Slider_Widget_in_Flutter_Complete_Tutorial)
	+ [1.1 Slider Widget – Basics](#Slider_Widget_8211_Basics)
		- [1.1.1 Explanation](#Explanation)
	+ [1.2 Slider Widget – Attributes](#Slider_Widget_8211_Attributes)
		- * [1.2.0.1 value](#value)
			* [1.2.0.2 min](#min)
			* [1.2.0.3 max](#max)
			* [1.2.0.4 divisions](#divisions)
			* [1.2.0.5 activeColor](#activeColor)
			* [1.2.0.6 inactiveColor](#inactiveColor)
			* [1.2.0.7 onChanged(double)](#onChangeddouble)
	+ [1.3 Slider Widget – Conclusion](#Slider_Widget_8211_Conclusion)
## Slider Widget in Flutter | Complete Tutorial

[Slider Widget in Flutter](https://androidmonks.com/slider-widget-flutter/) is useful to create a slider like animation. The primary aim of the widget is to give the user an animated slider bar that can adjust a value on the UI. This will eventually be read as a double value and can be used to perform actions in the background.

[Slider Widget in Flutter](https://androidmonks.com/slider-widget-flutter/) plays an important part in the UI element creation. Simple, yet powerful Widget is used to create a very cleaner Sliders on the UI. The Slider Widget in Flutter can be created with a simple class called Slider. This can help in creating a sound up/down or even rating like sliders.

In this article, we will see what are the properties of a SliderWidget and how it can be used for performing UI actions in detail.

### Slider Widget – Basics

To create a Slider Widget, we will be making use of the **Slider** class. The class constructor looks like below.

[Slider](https://api.flutter.dev/flutter/material/Slider/Slider.html)({[Key](https://api.flutter.dev/flutter/foundation/Key-class.html) key, @required [double](https://api.flutter.dev/flutter/dart-core/double-class.html) value, @required [ValueChanged](https://api.flutter.dev/flutter/foundation/ValueChanged.html)<[double](https://api.flutter.dev/flutter/dart-core/double-class.html)> onChanged, [ValueChanged](https://api.flutter.dev/flutter/foundation/ValueChanged.html)<[double](https://api.flutter.dev/flutter/dart-core/double-class.html)> onChangeStart, [ValueChanged](https://api.flutter.dev/flutter/foundation/ValueChanged.html)<[double](https://api.flutter.dev/flutter/dart-core/double-class.html)> onChangeEnd, [double](https://api.flutter.dev/flutter/dart-core/double-class.html) min: 0.0, [double](https://api.flutter.dev/flutter/dart-core/double-class.html) max: 1.0, [int](https://api.flutter.dev/flutter/dart-core/int-class.html) divisions, [String](https://api.flutter.dev/flutter/dart-core/String-class.html) label, [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) activeColor, [Color](https://api.flutter.dev/flutter/dart-ui/Color-class.html) inactiveColor, [SemanticFormatterCallback](https://api.flutter.dev/flutter/material/SemanticFormatterCallback.html) semanticFormatterCallback })

The constructor looks costly with lot of attributes/values present. We will look at what they do and construct important Sliders with them.

**Note: Slider widget needs to have a widget which inherits mediaQuery.In other words, Widgets like MaterialApp along with [Scaffold Widget](https://androidmonks.com/scaffold-flutter/) has to be present for the Slider animation to work.**

The Slider widget by itself cannot return the value it is pointing, rather it will only move the slider and it is up to the developer to reset the state of the slider by calling the **setState()** method on it.

Before we jump into seeing the attributes that are part of the Slider Widget, let’s create a simple Template that will serve us in the following sections.

Even before we jump into the template, you will have to understand [what a simple Stateful Widget](https://androidmonks.com/first-flutter-app/) does. If you haven’t read the article on basics of flutter, check that out before jumping in here.

Below is the sample template which we will use,


```
import 'package:flutter/material.dart';

void main() {
  runApp(SliderWidget());
}
class SliderWidget extends StatefulWidget {
  @override
  \_SliderWidgetState createState() {
    return \_SliderWidgetState();
  }
}

class \_SliderWidgetState extends State {
  @override
  Widget build(BuildContext context)
  {
    return MaterialApp(
      title: 'Androidmonks',
      home: Scaffold(
        appBar: AppBar(title: Text("Sample Data Table"),),
        backgroundColor: Colors.redAccent,
        body: Center(
          child: Row(
            children: <Widget>[
              Icon(Icons.volume\_up),
              Expanded(
                child: Slider(

                ),)
            ],
          ),
        ),
      ),
    );
  }
}
```
#### Explanation

* The simple Stateful Widget is used in order to call the setState() method every time the value change is recorded.
* Like mentioned in the initial section, Slider cannot by itself change the sliding position when slid left or right. It has to be manually set every time using the setState() method.
* The above sample calls the Expanded widget and passes the Slider widget into it. This way the Slider occupies the remaining portion left on the row.

### Slider Widget – Attributes

With the template code ready, let us look at the important properties of the Slider Widget in detail.

##### **value**

Value is an important attribute of the Slider Widget. It gives the Slider Widget an initial position to keep its pointer. The value attribute takes only a double value. Make sure to give this value from a variable like shown below.


```
class \_SliderWidgetState extends State {
  double value = 5.0;
  @override
  Widget build(BuildContext context)
  {
    return MaterialApp(
      title: 'Androidmonks',
      home: Scaffold(
        appBar: AppBar(title: Text("Sample Data Table"),),
        backgroundColor: Colors.grey,
        body: Center(
          child: Row(
            children: <Widget>[
              Icon(Icons.volume\_up),
              Expanded(
                child: Slider(
                  value: value,
                  
                ),)
            ],
          ),
        ),
      ),
    );
  }
}
```
Since there is no min,max attribute specified, the app will crash at this point. We will look at those two attributes also and see what the final app looks like.

##### min

Minimum value of the slider widget. The value from which the bar should start with is defined. This takes in an integer value only since there cannot be floating value starting point. Once the min attribute is defined, it looks like.


```
class \_SliderWidgetState extends State {
  double value = 5.0;
  @override
  Widget build(BuildContext context)
  {
    return MaterialApp(
      title: 'Androidmonks',
      home: Scaffold(
        appBar: AppBar(title: Text("Sample Data Table"),),
        backgroundColor: Colors.grey,
        body: Center(
          child: Row(
            children: <Widget>[
              Icon(Icons.volume\_up),
              Expanded(
                child: Slider(
                  value: value,
                  min: 1,
                  
                ),)
            ],
          ),
        ),
      ),
    );
  }
}
```
Still, we are yet to specify the max value.

##### max

You should have guessed this by now. The max attribute defines the maximum value that the slider widget can take. Once it is defined, the class looks like below.


```
class \_SliderWidgetState extends State {
  double value = 5.0;
  @override
  Widget build(BuildContext context)
  {
    return MaterialApp(
      title: 'Androidmonks',
      home: Scaffold(
        appBar: AppBar(title: Text("Sample Data Table"),),
        backgroundColor: Colors.grey,
        body: Center(
          child: Row(
            children: <Widget>[
              Icon(Icons.volume\_up),
              Expanded(
                child: Slider(
                  value: value,
                  min: 1,
                  max: 10,

                ),)
            ],
          ),
        ),
      ),
    );
  }
}
```
This creates the app which looks like.

![Slider Widget in Flutter](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Slider Widget in Flutter](https://androidmonks.com/wp-content/uploads/2019/06/Screen-Shot-2019-06-03-at-10.01.55-PM.png) **Slider Widget in Flutter**##### divisions

Another self-explanatory attribute which defines the number of divisions from the min to the max value specified.

Check out the example shown below.


```
class \_SliderWidgetState extends State {
  double value = 5.0;
  @override
  Widget build(BuildContext context)
  {
    return MaterialApp(
      title: 'Androidmonks',
      home: Scaffold(
        backgroundColor: Colors.red,
        appBar: AppBar(title: Text("Sample Slider Widget"),),
        body: Center(
          child: Row(
            children: <Widget>[
              Icon(Icons.volume\_up),
              Expanded(
                child: Slider(
                  value: value,
                  min: 1,
                  max: 10,
                  divisions: 10,
                  onChanged: (value){

                  },
                ),)
            ],
          ),
        ),
      ),
    );
  }
}
```
This creates the app which looks like,

![Division attribute in flutter app](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Division attribute in flutter app](https://androidmonks.com/wp-content/uploads/2019/06/Screen-Shot-2019-06-03-at-10.04.03-PM.png) **Division attribute in flutter app**##### activeColor

ActiveColor attribute decides what color to have as the primary Color of the Slider Bar. Meaning whichever the user is going to perceive as the Slider Color. In the example code below, the difference is seen.


```
class \_SliderWidgetState extends State {
  double value = 5.0;
  @override
  Widget build(BuildContext context)
  {
    return MaterialApp(
      title: 'Androidmonks',
      home: Scaffold(
        backgroundColor: Colors.red,
        appBar: AppBar(title: Text("Sample Slider Widget"),),
        body: Center(
          child: Row(
            children: <Widget>[
              Icon(Icons.volume\_up),
              Expanded(
                child: Slider(
                  value: value,
                  min: 1,
                  max: 10,
                  divisions: 10,
                  activeColor: Colors.lightGreen,
                  onChanged: (value){

                  },
                ),)
            ],
          ),
        ),
      ),
    );
  }
}
```
![Active Color in Slider Widget](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Active Color in Slider Widget](https://androidmonks.com/wp-content/uploads/2019/06/Screen-Shot-2019-06-03-at-10.14.50-PM.png) **Active Color in SliderWidget**##### inactiveColor

Inactive Color denotes whichever color is present in the remaining portion of the Slider Bar. This color is usually light when compared to the Primary/active color. The example below explains the same.


```
class \_SliderWidgetState extends State {
  double value = 5.0;
  @override
  Widget build(BuildContext context)
  {
    return MaterialApp(
      title: 'Androidmonks',
      home: Scaffold(
        backgroundColor: Colors.red,
        appBar: AppBar(title: Text("Sample Slider Widget"),),
        body: Center(
          child: Row(
            children: <Widget>[
              Icon(Icons.volume\_up),
              Expanded(
                child: Slider(
                  value: value,
                  min: 1,
                  max: 10,
                  divisions: 10,
                  activeColor: Colors.lightGreen,
                  inactiveColor: Colors.white54,
                  onChanged: (value){

                  },
                ),)
            ],
          ),
        ),
      ),
    );
  }
}
```
![Inactive color in Slider Widget](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Inactive color in Slider Widget](https://androidmonks.com/wp-content/uploads/2019/06/Screen-Shot-2019-06-03-at-10.16.53-PM.png) **Inactive color in SliderWidget****label**

Label attribute lets you define what the user is clicking on while trying to move the Slider. The small popup should be kept as short as possible to let the user know why he is moving the slider. The below code helps you understand the same.


```
class \_SliderWidgetState extends State {
  double value = 5.0;
  @override
  Widget build(BuildContext context)
  {
    return MaterialApp(
      title: 'Androidmonks',
      home: Scaffold(
        backgroundColor: Colors.red,
        appBar: AppBar(title: Text("Sample Slider Widget"),),
        body: Center(
          child: Row(
            children: <Widget>[
              Icon(Icons.volume\_up),
              Expanded(
                child: Slider(
                  value: value,
                  min: 1,
                  max: 10,
                  divisions: 10,
                  activeColor: Colors.lightGreen,
                  inactiveColor: Colors.white54,
                  label: "Slide Volume",
                  onChanged: (value){

                  },
                ),)
            ],
          ),
        ),
      ),
    );
  }
}
```
![Label attribute in Slider Widget](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Label attribute in Slider Widget](https://androidmonks.com/wp-content/uploads/2019/06/Screen-Shot-2019-06-03-at-10.28.22-PM.png) **Label attribute in SliderWidget**##### onChanged(double)

This is a very important callback in terms of recording what values the user pushes the slider to. Like explained at the beginning of the article, the Slider Widget cannot by itself move the slider. The setState() method has to be called with the onChanged() callback’s value. The below code explains what the onChanged() callback does and how it can be made to create a responsive slider.

Note: The onChanged() takes a double value as its argument. Since Slider returns the double value denoting the position with respect to the minimum value and maximum value specified.


```
class \_SliderWidgetState extends State {
  double value = 5.0;
  @override
  Widget build(BuildContext context)
  {
    return MaterialApp(
      title: 'Androidmonks',
      home: Scaffold(
        backgroundColor: Colors.red,
        appBar: AppBar(title: Text("Sample Slider Widget"),),
        body: Center(
          child: Row(
            children: <Widget>[
              Icon(Icons.volume\_up),
              Expanded(
                child: Slider(
                  value: value,
                  min: 1,
                  max: 10,
                  divisions: 10,
                  activeColor: Colors.lightGreen,
                  inactiveColor: Colors.white54,
                  label: "Slide Volume",
                  onChanged: (\_value){
                    setState((){
                      value = \_value;
                    });
                    print(\_value);
                  },
                ),)
            ],
          ),
        ),
      ),
    );
  }
}
```
This code generates the slider bar which moves like,

![Slider Widget example with setState()](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Slider Widget example with setState()](https://androidmonks.com/wp-content/uploads/2019/06/ezgif.com-video-to-gif-1.gif) **Slider Widget example with setState()**### Slider Widget – Conclusion

This brings us to the end of this article. We saw what the Slider Widget can do and how it can be made responsive with respect to using setState() inside the onChanged() callback.

Drop in any comments below.

***“Learn and Be Curious”***

[Tweet](https://twitter.com/intent/tweet?text=Slider+Widget+in+Flutter++Android+Studio&url=https%3A%2F%2Fandroidmonks.com%2Fslider-widget-flutter%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fslider-widget-flutter%2F)0 Shares Categories [Android](https://androidmonks.com/category/android/), [Flutter](https://androidmonks.com/category/flutter/) [Leave a comment](https://androidmonks.com/slider-widget-flutter/#respond) Post navigation[Creating Image Effects with BackdropFilter in Flutter](https://androidmonks.com/backdropfilter-flutter/)[DataTable in Flutter | Creating Effective Tables](https://androidmonks.com/datatable-flutter/)### Leave a Comment [Cancel reply](/slider-widget-flutter/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"1743","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "5e9d84bb42";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "1743";var swpClickTracking = false; 