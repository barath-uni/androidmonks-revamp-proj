---
title: '# ClipRect Widget in Flutter | Androidmonks'
description: 'ClipRect widget in Flutter is part of the Clippers family. These clip out a rectangle portion of their child. This article discusses the same with example.'
date: '2019-08-01'
modified_date: '2019-08-01'
image: '/assets/images/posts'
---
# ClipRect Widget in Flutter | Androidmonks

 [August 1, 2019August 1, 2019](https://androidmonks.com/cliprect-widget-flutter/ "4:00 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 ClipRect Widget in Flutter](#ClipRect_Widget_in_Flutter)
	+ [1.1 ClipRect Basics](#ClipRect_Basics)
		- * [1.1.0.1 child](#child)
			* [1.1.0.2 clipBehavior](#clipBehavior)
	+ [1.2 ClipRect Widget – Full Example](#ClipRect_Widget_8211_Full_Example)
	+ [1.3 ClipRect – Conclusion](#ClipRect_8211_Conclusion)
## ClipRect Widget in Flutter

[ClipRect Widget in Flutter](https://androidmonks.com/cliprect-widget-flutter/) is part of the Clippers family. The primary use case of clippers is that they can clip out any portion of the widget as specified. In that way, ClipRect is used to Clip a Rectangle portion of the Widget which is its child.

According to the Flutter Docs, “By default, [ClipRect](https://androidmonks.com/cliprect-widget-flutter/) prevents its child from painting outside its bounds, but the size and location of the clip rect can be customized using a custom clipper”.

We will see more about [ClipRect Widget in Flutter](https://androidmonks.com/cliprect-widget-flutter/) in this article. To know more about Clippers/ClipRect, you can watch the video below.

### ClipRect Basics

ClipRect is Commonly used with the following Widgets. The primary reason being, all of these Widget support painting outside their container. So ClipRect can act as a border and cut all these extra regions!

Some of the commonly used Widgets include. [Align](https://androidmonks.com/align-widget-flutter/), Center, OverflowBox, SizedOverflowBox, CustomPaint.

There are a few properties of ClipRect that are optional to create the actual ClipRect. These are common properties across all clippers so the actions won’t change.

##### child

The only important attribute of ClipRect. All Clippers take a child with which it creates the boundary. The ClipRect child can be any one of the above-mentioned Widgets. A sample example code is given below for reference.


```
ClipRect(
child:Align(
child:Image.network("src"),
)
)
```
This creates a Clipped Rectangle around the Image and acts as a boundary to it!

Another neat trick is to give the [Align widget](https://androidmonks.com/align-widget-flutter/) a width & height factor to zoom into the pic but at the same time cut the Rectangle border! This is shown below.


```
ClipRect(
child:Align(
child:Image.network("src"),
heightFactor:0.5,
widthFactor:0.5
)
)
```
Since Align Widget acts differently with varying Image Sizes(Read more about how the Align Widget works in the article), make sure to come up with a standard height, width factor to create a ClipRect with Align Widget as its child to maintain consistency.

##### clipBehavior

ClipBehavior in ClipRect is a common attribute across all Clippers in Flutter. The primary need is to define how the edges are when the Clip is happening.

For eg, the 3 behaviors that Clip has are Clip.hardEdge, Clip.antiAlias, Clip.antiAliasWithSaveLayer.

The need for these is to define how the edges look when the Clip happens. HardEdge creates a not so smooth Edge, while the antiAlias creates a smoother edge that HardEdge and antiAliasWithSaveLayer create the smoothest of edges. It also is recommended to go with the default HardEdge in order to not take time and memory to draw the Edges on the Canvas(The UI).

To know more about ClipBehaviors, [check out this space](https://api.flutter.dev/flutter/dart-ui/Clip-class.html).

### ClipRect Widget – Full Example

For this final section, we will create a simple ClipRect around a FlutterLogo to see how exactly the Clipping happens! The best recommendation is to play around with the [Align](https://androidmonks.com/align-widget-flutter/) & Container [Widget](https://androidmonks.com/first-flutter-app/) to get the better Clipping as you would expect.


```
import 'dart:async';

import 'package:flutter/material.dart';

void main() => runApp(AlignmentApp());

class AlignmentApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Sample Divider Widget',
home: AlignmentWidget(),
);
}
}

class AlignmentWidget extends StatefulWidget {
AlignmentWidget({Key key}) : super(key: key);

@override
\_AlignmentWidgetState createState() => \_AlignmentWidgetState();
}

class \_AlignmentWidgetState extends State {

@override
void initState() {
super.initState();
}

@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(title: Text("Sample ClipRect Widget"),),
body: Center(
child: ClipRect(
child: Container(
color:Colors.redAccent,
child: Align(
heightFactor: 0.5,
child: FlutterLogo(
size: 60,
),
),),),
),
);
}
}

```
This creates a Flutter App which looks like,

![ClipRect over a FlutterLogo](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![ClipRect over a FlutterLogo](https://androidmonks.com/wp-content/uploads/2019/08/Screen-Shot-2019-07-30-at-10.08.08-PM-609x1024.png) ClipRect over a FlutterLogo### ClipRect – Conclusion

The ClipRect widget can further be changed using the **clipper** attribute. The primary need being to create a custom action over the ClipRect. This, however, is seen as part of the Clipper widget(Base class for all Clippers). You can take a look at that article to understand how any shape can be created and used.

***“Learn and Be Curious”***

[Tweet](https://twitter.com/intent/tweet?text=ClipRect+Widget+in+Flutter++Androidmonks&url=https%3A%2F%2Fandroidmonks.com%2Fcliprect-widget-flutter%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fcliprect-widget-flutter%2F)0 Shares Categories [Flutter](https://androidmonks.com/category/flutter/) [Leave a comment](https://androidmonks.com/cliprect-widget-flutter/#respond) Post navigation[Spacer Widget in Flutter – Simplest Flutter Widget](https://androidmonks.com/spacer-widget-flutter/)[WebView Widget in Flutter | Embed Websites Easily](https://androidmonks.com/webview-widget-flutter/)### Leave a Comment [Cancel reply](/cliprect-widget-flutter/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"1880","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "5e9d84bb42";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "1880";var swpClickTracking = false; 