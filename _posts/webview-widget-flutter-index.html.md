---
title: '# WebView Widget in Flutter | Embed Websites Easily'
description: 'Webview Widget in Flutter is a simple way to show any website in the Flutter App easily. This article discusses the use of the Widget with example.'
date: '2019-08-07'
modified_date: '2019-08-06'
image: '/assets/images/posts'
---
# WebView Widget in Flutter | Embed Websites Easily

 [August 6, 2019August 7, 2019](https://androidmonks.com/webview-widget-flutter/ "6:30 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 WebView Widget in Flutter](#WebView_Widget_in_Flutter)
	+ [1.1 WebView Widget App Basics](#WebView_Widget_App_Basics)
	+ [1.2 Using the WebViewScaffold Widget](#Using_the_WebViewScaffold_Widget)
		- * + [1.2.0.0.1 url](#url)
				+ [1.2.0.0.2 appBar](#appBar)
				+ [1.2.0.0.3 withZoom](#withZoom)
				+ [1.2.0.0.4 withLocalStorage](#withLocalStorage)
				+ [1.2.0.0.5 hidden](#hidden)
				+ [1.2.0.0.6 initialChild](#initialChild)
	+ [1.3 WebView Example Application](#WebView_Example_Application)
## WebView Widget in Flutter

[WebView Widget in Flutter](https://androidmonks.com/webview-widget-flutter/) is still under development mode(as on 26.07.2019). However, apart from minor pending bugs, it’s a really useful widget to create and show websites in the flutter app with ease.

In this article, we will talk about using the [WebView Widge](https://androidmonks.com/webview-widget-flutter/)t plugin in Flutter and creating simple Webviews. We will require the flutter webview plugin even before we begin. It is

**flutter\_webview\_plugin: ^0.3.5**

Use this inside the pubspec.yaml file under dependencies.

### WebView Widget App Basics

Even before we begin, we will take the base template(A simple Stateful Widget) so that it becomes easy to look at the rest of the WebView components.


```
import 'dart:async';
import 'package:flutter/material.dart';
void main() => runApp(WebViewApp());
class WebViewApp extends StatelessWidget {
@override Widget build(BuildContext context) {
return MaterialApp(title: 'Sample Webview Widget', home: WebViewWidget(), );
}
}
class WebViewWidget extends StatefulWidget {
WebViewWidget({
Key key
}): super(key: key);
@override \_WebViewWidgetState createState() => \_WebViewWidgetState();
}
class \_WebViewWidgetState extends State {
@override void initState() {
super.initState();
}
@override Widget build(BuildContext context) {
return Scaffold();
}
}

```
* To make use of the WebView Plugin, we will begin with adding it in the pubspec.yaml.
* Once done, import the following to your **main.dart** file.  
 **import ‘package:flutter\_webview\_plugin/flutter\_webview\_plugin.dart’;**

This will give access to the WebViewScaffold Widget(Custom Class name from the plugin. Very similar to the [Scaffold Widget in Flutter](https://androidmonks.com/scaffold-flutter/)). We will see more about it in the next section.

### Using the WebViewScaffold Widget

WebViewScaffold Widget is going to give access to the basic [WebView Widget](https://androidmonks.com/webview-widget-flutter/)(Native to Flutter) and on top of that provide a lot of additional controls like zoom, hide, etc. We will see all the available attributes below.

###### url

The most important attribute of the WebViewScaffold Widget. It takes in a string and will render the required website in the Flutter application. To access the Website, just pass the **URL** to this attribute like shown below.


```
WebviewScaffold(
url: "https://www.androidmonks.com",
)
```
###### appBar

The AppBar attribute is the similar to the [Scaffold Widget](https://androidmonks.com/scaffold-flutter/)‘s [Appbar](https://androidmonks.com/flutter-appbar/). It lets you create a simple Top Bar which can hold any title corresponding to the WebView.  Check out the example application in the next section for detailed use of [AppBar widget](https://androidmonks.com/flutter-appbar/) inside WebViewScaffold.

###### withZoom

This attribute takes in a Boolean value and lets you have a zoom in and out control. It creates a simple button at the bottom through which Zoom can be done easily. It is a very handy attribute. To know more about this attribute, check out the next section with the example app.

###### withLocalStorage

Takes in a Boolean value. It allows storing the website data to the local storage. Particularly useful if the widget is going to allow download feature.

###### hidden

This attribute lets you decide if the WebView should be hidden or not.

###### initialChild

InitialChild attribute is used as a placeholder till the WebView gets loaded. In the background, it uses a FutureBuilder widget and waits for the URL to load and the website to be shown. This attribute will let you define the placeholder until it gets done.

By default, the circular progress indicator widget is shown.

### WebView Example Application

The following code example creates the WebView Application using the webview\_flutter\_plugin.


```
import 'dart:async';
import 'package:flutter\_webview\_plugin/flutter\_webview\_plugin.dart';
import 'package:flutter/material.dart';

void main() => runApp(WebViewApp());
class WebViewApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Sample Webview Widget',
home: WebViewWidget(),
);
}
}

class WebViewWidget extends StatefulWidget {
WebViewWidget({
Key key
}): super(key: key);

@override
\_WebViewWidgetState createState() => \_WebViewWidgetState();
}

class \_WebViewWidgetState extends State {

@override
void initState() {
super.initState();
}

@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(title: Text("Sample WebView Widget"),
backgroundColor: Colors.black45, ),
body: Center(
child: Column(
children: [
Container(
child: FlatButton(
child: Text("Open my Blog"),
onPressed: () {
print("in");
Navigator.push(context,
MaterialPageRoute(builder: (context) => WebView()));
}
), )
],
),
)

);

}
}

class WebView extends StatefulWidget {
WebView({
Key key
}): super(key: key);

@override
\_WebViewState createState() => \_WebViewState();
}

class \_WebViewState extends State {

@override
void initState() {
super.initState();
}

@override
Widget build(BuildContext context) {
return WebviewScaffold(
url: "https://www.androidmonks.com",
appBar: AppBar(title: Text("Androidmonks"), ),
withZoom: true,
);
}
}
```
The application looks like below once run on the AVD.

![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2019/08/webviewfirst.png)

![WebView Widget Example Application](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![WebView Widget Example Application](https://androidmonks.com/wp-content/uploads/2019/08/webview2.png) **WebView Widget Example Application**[WebView Widget](https://androidmonks.com/webview-widget-flutter/) like mentioned at the start, still has few bugs pending and hence is not released as part of the production build. It has got an ETA of October 2019 for providing all the required fixes.

Drop in any comments below.

***“Learn and Be Curious”***

[Tweet](https://twitter.com/intent/tweet?text=WebView+Widget+in+Flutter++Embed+Websites+Easily&url=https%3A%2F%2Fandroidmonks.com%2Fwebview-widget-flutter%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fwebview-widget-flutter%2F)0 Shares Categories [Flutter](https://androidmonks.com/category/flutter/) [Leave a comment](https://androidmonks.com/webview-widget-flutter/#respond) Post navigation[ClipRect Widget in Flutter | Androidmonks](https://androidmonks.com/cliprect-widget-flutter/)[Flutter ClipPath Widget | UI Clippers in Flutter](https://androidmonks.com/flutter-clippath-widget/)### Leave a Comment [Cancel reply](/webview-widget-flutter/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"1916","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "5e9d84bb42";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "1916";var swpClickTracking = false; 