---
title: '# FittedBox Widget in Flutter with Example | Androidmonks'
description: 'Fittedbox is a simple to use widget. Primarily used as a Container wrapper to force the child to fit to its parent. Helpful in handling dynamic content.'
date: '2019-05-02'
modified_date: '2019-06-20'
image: '/assets/images/posts'
---
# FittedBox Widget in Flutter with Example | Androidmonks

 [June 20, 2019May 2, 2019](https://androidmonks.com/fittedbox-widget/ "5:05 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 FittedBox Widget in Flutter with Example](#FittedBox_Widget_in_Flutter_with_Example)
	+ [1.1 FittedBox Widget – Basics](#FittedBox_Widget_8211_Basics)
	+ [1.2 FittedBox – Before and After](#FittedBox_8211_Before_and_After)
	+ [1.3 FittedBox – Properties](#FittedBox_8211_Properties)
		- [1.3.1 Fit](#Fit)
		- [1.3.2 Alignment](#Alignment)
	+ [1.4 Conclusion](#Conclusion)
## FittedBox Widget in Flutter with Example

[FittedBox Widget](https://androidmonks.com/fittedbox-widget/) is a simple Widget to help in creating a quick and neater way to contain a child inside a parent. The main purpose of using the FittedBox is to make the App UI look neater for dynamic children with varying length. In this tutorial, we will look at this simple widget and also, in addition, see how it can be used.

### FittedBox Widget – Basics

To create a FittedBox widget, make use of the class **FittedBox.**


```
FittedBox(),
```
I have created a sample template which we are going to be using through this article.


```
import 'package:flutter/material.dart';
void main()
{
  runApp(MaterialApp(
    title: 'Androidmonks',
    home: Scaffold(
      appBar: AppBar(title: Text("Androidmonks"),),
      body: ListView(
            children: <Widget>[
              Row(
                children: <Widget>[
                  Container(
                    child: Image.network("https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"),
                  ),
                  Container(
                    child: Text("This is a sample text to understand FittedBox widget"),
                  )
                ],
              )
            ],
        ),
    ),
  ));
  
}
```
Like we have seen, the example application looks like below. The text is getting overflowed to the right and the app is not able to render it. Think of a situation where the data is going to come from a server. There will be very less control over what to render to the user and what not to render to the user. [FittedBox widget](https://androidmonks.com/fittedbox-widget/) makes sure that the final data is being properly rendered to the user irrespective of how the data is. The child is forced to fit inside the parent. We will see how the data can be Fit inside the Container in the rest of the sections below.

![Container without the FittedBox](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Container without the FittedBox](https://androidmonks.com/wp-content/uploads/2019/05/Screen-Shot-2019-05-01-at-10.59.45-PM-485x1024.png)  **Container without the Fitted box**### FittedBox – Before and After

From the example above, the App looks like it cannot handle the overflow of data. The Text widget we specified is nowhere in the picture. We will look at what happens when the FittedBox widget is added to the application.


```
import 'package:flutter/material.dart';
void main()
{
  runApp(MaterialApp(
    title: 'Androidmonks',
    home: Scaffold(
      appBar: AppBar(title: Text("Androidmonks"),),
      body: ListView(
            children: <Widget>[
              FittedBox(child: Row(
                children: <Widget>[
                  Container(
                    child: Image.network("https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"),
                  ),
                  Container(
                    child: Text("This is a sample text to understand FittedBox widget"),
                  )
                ],
              ),)
            ],
        ),
    ),
  ));
  
}
```
This is how the layout has been changed and the application looks like,

![After adding the FittedBox Widget](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![After adding the FittedBox Widget](https://androidmonks.com/wp-content/uploads/2019/05/Screen-Shot-2019-05-01-at-11.05.32-PM.png) **After adding the FittedBox Widget**### FittedBox – Properties

There are only 2 properties associated with the [FittedBox widget](https://androidmonks.com/fittedbox-widget/). Both of them along with their working is given below.

#### **Fit**

Fit attribute applies the BoxFit class on the Widget. It consists of lot of options including cover, fill etc. It is up to the developer to decide how the widgets/children should be arranged.

To understand better, find the example below,


```
import 'package:flutter/material.dart';
void main()
{
  runApp(MaterialApp(
    title: 'Androidmonks',
    home: Scaffold(
      appBar: AppBar(title: Text("Androidmonks"),),
      body: ListView(
            children: <Widget>[
              FittedBox(child: Row(
                children: <Widget>[
                  Container(
                    child: Image.network("https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"),
                  ),
                  Container(
                    child: Text("This is a widget"),
                  )
                ],
              ),
              fit: BoxFit.contain,
              )
            ],
        ),
    ),
  ));
  
}
```
The fit is a BoxFit contain which means that whatever image/text/widget that is going to be inside the FittedBox will be contained. It can be scaled down or scaled up to contain the image and text within that space.

The final app now looks like,

![Fit box with the BoxFit.contain](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Fit box with the BoxFit.contain](https://androidmonks.com/wp-content/uploads/2019/05/Screen-Shot-2019-05-01-at-11.27.10-PM.png) **Fit box with the BoxFit.contain**#### **Alignment**

This lets you adjust as to where the child should be positioned inside the FittedBox. Can be any of the following or combination of them. Center, top, bottom, left, right.

It is important to consider this also while deciding to position the Child widgets of the FittedBox.

You can find a simple example below.


```
import 'package:flutter/material.dart';
void main()
{
  runApp(MaterialApp(
    title: 'Androidmonks',
    home: Scaffold(
      appBar: AppBar(title: Text("Androidmonks"),),
      body: ListView(
            children: <Widget>[
              FittedBox(child: Row(
                children: <Widget>[
                  Container(

                    child: Image.network("https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"),
                  ),
                  Container(

                    child: Text("This is a widget to understand how the fittedbox works"),
                  )
                ],
              ),
                alignment: Alignment.centerLeft,
              )
            ],
        ),
    ),
  ));
  
}
```
For example, purpose, defined the alignment as centerLeft. You can play with the combinations to understand how the FittedBox widget actually works.

### Conclusion

FittedBox is primarily useful in handling dynamic data from the server. It makes sure that the UI looks consistent and does not provide any leakages and break the UI flow.

Make sure to experiment with the multiple values present before fixing on the final FittedBox property combination.

 

Drop in any comments you have in the section below.

***“Learn and Be Curious”***

[Tweet](https://twitter.com/intent/tweet?text=FittedBox+Widget+in+Flutter+with+Example++Androidmonks&url=https%3A%2F%2Fandroidmonks.com%2Ffittedbox-widget%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Ffittedbox-widget%2F)0 Shares Categories [Flutter](https://androidmonks.com/category/flutter/), [Uncategorized](https://androidmonks.com/category/uncategorized/) [Leave a comment](https://androidmonks.com/fittedbox-widget/#respond) Post navigation[PageView Widget in Flutter – Complete Tutorial](https://androidmonks.com/pageview-flutter/)[Creating Image Effects with BackdropFilter in Flutter](https://androidmonks.com/backdropfilter-flutter/)### Leave a Comment [Cancel reply](/fittedbox-widget/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"1674","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "cc5bc2851c";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "1674";var swpClickTracking = false; 