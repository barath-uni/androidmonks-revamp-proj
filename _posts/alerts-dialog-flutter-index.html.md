---
title: '# Alert Dialog in Flutter with Example | Androidmonks'
description: 'Alert Dialogs create a Popup like box over all widgets. In this tutorial'
date: '2019-03-02'
modified_date: '2019-11-25'
image: '/assets/images/posts'
---
# Alert Dialog in Flutter with Example | Androidmonks

 [November 25, 2019March 2, 2019](https://androidmonks.com/alerts-dialog-flutter/ "12:00 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Alert Dialog in Flutter with Example in Android Studio](#Alert_Dialog_in_Flutter_with_Example_in_Android_Studio)
	+ [1.1 Alert Dialog Basics](#Alert_Dialog_Basics)
		- [1.1.1 Creating an AlertDialog](#Creating_an_AlertDialog)
* [2 AlertDialog Properties](#AlertDialog_Properties)
	+ - [2.0.1 Title](#Title)
		- [2.0.2 Actions](#Actions)
		- [2.0.3 Content](#Content)
		- [2.0.4 ContentPadding](#ContentPadding)
		- [2.0.5 Shape](#Shape)
* [3 AlertDialog Conclusion](#AlertDialog_Conclusion)
## Alert Dialog in Flutter with Example in Android Studio

[Alert Dialog](https://androidmonks.com/alerts-dialog-flutter/) is an important widget that provides a useful Pop-up Alert over all the Screens in the Application. This will create a good looking option of choosing from a Binary choice.

According to the Flutter Docs,

“An alert dialog informs the user about situations that require acknowledgment. An alert dialog has an optional title and an optional list of actions. The title is displayed above the content and the actions are displayed below the content.

If the content is too large to fit on the screen vertically, the dialog will display the title and the actions and let the content overflow, which is rarely desired. Consider using a scrolling widget for content, such as asSingleChildScrollView, to avoid overflow. (However, be aware that since AlertDialog tries to size itself using the intrinsic dimensions of its children, widgets such as ListView, GridView, and CustomScrollView, which use lazy viewports, will not work. If this is a problem, consider using Dialog directly.)”

### Alert Dialog Basics

The constructor used for creating the [AlertDialog](https://androidmonks.com/alerts-dialog-flutter/) is,


```
[AlertDialog](https://docs.flutter.io/flutter/material/AlertDialog/AlertDialog.html)({[Key](https://docs.flutter.io/flutter/foundation/Key-class.html) key, [Widget](https://docs.flutter.io/flutter/widgets/Widget-class.html) title, [EdgeInsetsGeometry](https://docs.flutter.io/flutter/painting/EdgeInsetsGeometry-class.html) titlePadding, [TextStyle](https://docs.flutter.io/flutter/painting/TextStyle-class.html) titleTextStyle, [Widget](https://docs.flutter.io/flutter/widgets/Widget-class.html) content, [EdgeInsetsGeometry](https://docs.flutter.io/flutter/painting/EdgeInsetsGeometry-class.html) contentPadding: const EdgeInsets.fromLTRB(24.0, 20.0, 24.0, 24.0), [TextStyle](https://docs.flutter.io/flutter/painting/TextStyle-class.html) contentTextStyle, [List](https://docs.flutter.io/flutter/dart-core/List-class.html)<[Widget](https://docs.flutter.io/flutter/widgets/Widget-class.html)> actions, [Color](https://docs.flutter.io/flutter/dart-ui/Color-class.html) backgroundColor, [double](https://docs.flutter.io/flutter/dart-core/double-class.html) elevation, [String](https://docs.flutter.io/flutter/dart-core/String-class.html) semanticLabel, [ShapeBorder](https://docs.flutter.io/flutter/painting/ShapeBorder-class.html) shape })
```
If this looks confusing, it doesn’t matter much. We will look at all the options that are used to create the AlertDialog and what they do to the Alert Box.

#### Creating an AlertDialog

Make use of the **AlertDialog widget** to create a simple AlertDialog. This will help in creating a base Widget that can be placed inside any parent Widget.

Sample AlertDialog looks like,


```
AlertDialog(title: Text("Sample Alert Dialog")
```
Make use of the [AlertDialog Widget](https://androidmonks.com/alerts-dialog-flutter/) and create the Alert Dialog/Pop-up like [widget](https://androidmonks.com/first-flutter-app/).

## AlertDialog Properties

Before we jump on to creating an AlertDialog and looking at the different properties, lets take a look at how the sample Flutter App is going to be structured.

The Application is going to look like,


```
import 'package:flutter/material.dart';

void main()
{
  runApp(MaterialApp(
    title: 'Androidmonks',
    home: FirstWidget(),
  ));
}
class FirstWidget extends StatelessWidget
{
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
        appBar: AppBar(title: Text("AndroidMonks"),),
        body: Column(children: <Widget>[
          AlertDialog(title: Text("Sample Alert Dialog"),)
        ],)
    );
  }

}
```
On creating this, we are good to go with looking at different Properties that are going to impact the AlertDialog in Flutter.

The important Properties of AlertDialog Widget are,

#### **Title**

The title, as the name suggests, occupies the top part of the AlertDialog. It gives the AlertDialog box a Title. Make sure to give it as short as possible to let the user know about its use very easily.


```
AlertDialog(title: Text("Sample Alert Dialog"),
```
This creates an App that looks like,

![Title property in AlertDialog](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Title property in AlertDialog](https://androidmonks.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-02-at-6.38.34-PM.png) **Title property in AlertDialog**#### Actions

Lets the use of different [Widgets](https://androidmonks.com/first-flutter-app/) to be present at the bottom of the AlertDialog. If there is a requirement to create a button to choose between a **Yes or No,**then is defined in the Actions section only.

A sample Code is given below,


```
import 'package:flutter/material.dart';

void main()
{
  runApp(MaterialApp(
    title: 'Androidmonks',
    home: FirstWidget(),
  ));
}
class FirstWidget extends StatelessWidget
{
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
        appBar: AppBar(title: Text("AndroidMonks"),),
        body: Column(children: <Widget>[
          AlertDialog(title: Text("Sample Alert Dialog"),
          actions: <Widget>[
            FlatButton(child: Text("No"),),
            FlatButton(child: Text("Yes"),)
          ],)
        ],)
    );
  }

}
```
Using this code, the final Alert Dialog box looks like,

![AlertDialog box with Action attribute](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![AlertDialog box with Action attribute](https://androidmonks.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-02-at-6.45.43-PM.png) **AlertDialog box with Action attribute**#### Content

Lets you define what the body of the AlertDialog should be. It is going to be a Text but can also hold any Layout widgets inside this.

Like pointed out in the start of this post, avoid using Grid/ListView Widgets since these work on lazy loading of content and creates a problem in different screen sizes.

If there is a requirement to show a lot of text, go for a ScrollView inside the Content and make sure to load the Text value accordingly.

Sample Code Example,


```
import 'package:flutter/material.dart';

void main()
{
  runApp(MaterialApp(
    title: 'Androidmonks',
    home: FirstWidget(),
  ));
}
class FirstWidget extends StatelessWidget
{
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
        appBar: AppBar(title: Text("AndroidMonks"),),
        body: Column(children: <Widget>[
          AlertDialog(title: Text("Sample Alert Dialog"),
          actions: <Widget>[
            FlatButton(child: Text("No"),),
            FlatButton(child: Text("Yes"),)],
          content: Text("This is the body of the alert Dialog"),
          )
        ],)
    );
  }
}
```
This creates an AlertDialog that looks like,

![Content attribute in AlertDialog](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Content attribute in AlertDialog](https://androidmonks.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-02-at-6.50.07-PM.png) **Content attribute in AlertDialog**#### ContentPadding

Lets the Flutter engine know how much padding is required for the Content inside the [AlertDialog](https://androidmonks.com/alerts-dialog-flutter/). Creating Padding will let the AlertDialog adjust accordingly. Takes in an Edgetsets class as its value. Sample code is given below,


```
AlertDialog(
  title: Text("Sample Alert Dialog"),
  actions: <Widget>[
  FlatButton(child: Text("No"),),
  FlatButton(child: Text("Yes"),)],
content: Text("This is the body of the alert Dialog"),
contentPadding: EdgeInsets.all(25.0),
)
```
![Creating a Content Padding Property](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Creating a Content Padding Property](https://androidmonks.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-02-at-6.56.13-PM.png) **Creating a Content Padding Property** 

#### Shape

An important attribute for AlertDialog class is the use of Shape attribute. It lets the shape of the AlertDialog be modified. In order to curve the edges or create a different shape for the AlertDialog box, the shape attribute can be used.

It takes in the ShapeBorder Widget as its value. There are different Border Widgets that are available in Flutter. An example includes BoxBorder, CircleBorder etc. For this example, we will use the CircleBorder and see how the AlertDialog turns out.


```
import 'package:flutter/material.dart';

void main()
{
  runApp(MaterialApp(
    title: 'Androidmonks',
    home: FirstWidget(),
  ));
}
class FirstWidget extends StatelessWidget
{
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
        appBar: AppBar(title: Text("AndroidMonks"),),
        body: Column(children: <Widget>[
            AlertDialog(
              title: Text("Alert Dialog",textAlign: TextAlign.center,),
            content: Text("This is the body of the alert Dialog",textAlign: TextAlign.center,),
            contentPadding: EdgeInsets.all(60.0),
              shape: CircleBorder(),
            )
        ],)
    );
  }

}
```
Some of the previously added elements are removed and the CircleBorder is applied, and the final App looks like below,

![Shape attribute in AlertDialog Flutter](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Shape attribute in AlertDialog Flutter](https://androidmonks.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-02-at-7.04.52-PM.png) **Shape attribute in AlertDialog Flutter**## 

## AlertDialog Conclusion

Once all the [Widgets](https://androidmonks.com/first-flutter-app/) are constructed, you can play around with giving it some action. In the example [AlertDialog](https://androidmonks.com/alerts-dialog-flutter/) below,

We log some value when the **Yes button is pressed**, and **remove the AlertDialog when the No button is pressed**.


```
import 'package:flutter/material.dart';

void main()
{
  runApp(MaterialApp(
    title: 'Androidmonks',
    home: MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text("Androidmonks"),),
        body: FirstWidget(),
      ),
    ),
  ));
}
class FirstWidget extends StatelessWidget
{
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return AlertDialog(
      title: Text("Sample Alert Dialog"),
      actions: <Widget>[
        FlatButton(child: Text("Dismiss"),
        onPressed: (){
          Navigator.pop(context);
        },
        ),
        FlatButton(child: Text("Continue"),
        onPressed: (){
          print("Continue with another page");
        },
        )
      ],
    );
  }

}
```
The final output looks like,

![Alertdialog Example in Flutter](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Alertdialog Example in Flutter](https://androidmonks.com/wp-content/uploads/2019/03/alertdialog.gif) **Alertdialog Example in Flutter**If there are any queries, drop them in the comment section below.

***“Learn and Be Curious”***

[Tweet](https://twitter.com/intent/tweet?text=Alert+Dialog+in+Flutter+with+Example++Androidmonks&url=https%3A%2F%2Fandroidmonks.com%2Falerts-dialog-flutter%2F)Pin5[Share1](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Falerts-dialog-flutter%2F)6 Shares Categories [Android](https://androidmonks.com/category/android/), [Flutter](https://androidmonks.com/category/flutter/) [Leave a comment](https://androidmonks.com/alerts-dialog-flutter/#respond) Post navigation[Routing and Navigation in Flutter](https://androidmonks.com/routing-navigation-flutter/)[TextField in Flutter | Input Text Values | Androidmonks](https://androidmonks.com/textfield-flutter/)### Leave a Comment [Cancel reply](/alerts-dialog-flutter/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"1505","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "cc5bc2851c";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "1505";var swpClickTracking = false; 