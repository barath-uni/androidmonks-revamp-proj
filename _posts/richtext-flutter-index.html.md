---
title: '# RichText Widget in Flutter | Span Text Easily'
description: 'RichText widget in Flutter is a great way to add visual representation and emphasize to the user. Spanning texts is now very easy and simple with RichText.'
date: '2019-11-24'
modified_date: '2019-11-24'
image: '/assets/images/posts'
---
# RichText Widget in Flutter | Span Text Easily

 [November 24, 2019November 24, 2019](https://androidmonks.com/richtext-flutter/ "3:00 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 RichText Widget in Flutter | Span Text Easily](#RichText_Widget_in_Flutter_Span_Text_Easily)
	+ [1.1 RichText Widget – Basics](#RichText_Widget_8211_Basics)
	+ [1.2 RichText – Properties](#RichText_8211_Properties)
		- [1.2.1 TextSpan Properties](#TextSpan_Properties)
	+ [1.3 RichText – Example Application](#RichText_8211_Example_Application)
	+ [1.4 RichText – Conclusion](#RichText_8211_Conclusion)
## RichText Widget in Flutter | Span Text Easily

[RichText Widget is very useful in Flutter](https://androidmonks.com/richtext-flutter/). It lets the developer create a simple yet effective way of creating texts on the UI with multiple Styles to it. A very similar practice in Website and Mobile apps is to either Style a specific word in a paragraph or a sentence. In Flutter, there is no option to do this unless multiple Text Widgets are used. However, **RichText widget comes into the picture here and lets you perform multiple Text Styles without having to switch many widgets.**

The example in the following sections explains how to use the RichText widget easily.

### RichText Widget – Basics

Use RichText with the class [**RichText**](https://androidmonks.com/richtext-flutter/) itself. Another important Widget that has to be used as part of the RichText widget is the TextSpan widget. This is going to provide the ability to add a **text and a style specific to that text.**

The following section explains the available Properties of the RichText Widget.

### RichText – Properties

There are a few important properties that are available for [RichText](https://androidmonks.com/richtext-flutter/).

* **text –**This attribute takes the TextSpan as its value. TextSpan will provide options to provide a text followed by the style to be applied to that text.

#### TextSpan Properties

TextSpan class, on the other hand, has multiple properties that are very useful.

* **text** – This is the string that has to be shown on the UI.
* **style –**Takes a TextStyle as its value. Make sure to include all the required style that has to be applied here. Some of the available styles include fonts, color, size, and weight.
* **children –**The children attribute takes in an array of TextSpan class. This is where the multiple choice of changing the text styles will be used.

Note: The usual styling procedure is to keep the text attribute of the TextSpan class with whatever is required to be shown to the user followed by the children which will, in turn, take the styled text. This way, there is not going to be multiple Text/RichText widget flooding the UI tree.

### RichText – Example Application

The code below explains how the Spanning of elements can be done easily. It is very important to keep the UI tree as minimal as possible instead of adding multiple, unnecessary Text Widgets.


```
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'RichText Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        appBar: AppBar(title: Text("Sample RichText App"),),
        body: RichText(
          text: TextSpan(
            text: "Hello",
            style: TextStyle(fontSize: 30.0, color: Colors.black),
            children: <TextSpan>[
              TextSpan(text: " Coder ", style: TextStyle(color: Colors.blue)),
              TextSpan(text: " Monk! ", style: TextStyle(color: Colors.black, fontWeight: FontWeight.bold))
            ]
          ),
        ),
      )
    );
  }
}
```
![RichText Example App](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![RichText Example App](https://androidmonks.com/wp-content/uploads/2019/11/richtextscreenshot.png) **RichText Example App**### RichText – Conclusion

As mentioned in the above section, it is advisable to make use of the [RichText](https://androidmonks.com/richtext-flutter/) in place of a Text Widget completely. However, make sure to not overuse this widget since it is costly to rebuild on the screen. Spanning texts is a great visual reminder to emphasize something to the user, however, overdoing will only take a negative hit.

[Tweet](https://twitter.com/intent/tweet?text=RichText+Widget+in+Flutter++Span+Text+Easily&url=https%3A%2F%2Fandroidmonks.com%2Frichtext-flutter%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Frichtext-flutter%2F)0 Shares Categories [Flutter](https://androidmonks.com/category/flutter/) [Leave a comment](https://androidmonks.com/richtext-flutter/#respond) Post navigation[Flutter AnimatedSwitcher Widget | 3 minute Flutter Animation](https://androidmonks.com/flutter-animatedswitcher-widget/)[Flutter Basics in 1 Hour | Create your First App [Free]](https://androidmonks.com/flutter-basics-1-hour/)### Leave a Comment [Cancel reply](/richtext-flutter/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"2141","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "c005e5bc76";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "2141";var swpClickTracking = false; 