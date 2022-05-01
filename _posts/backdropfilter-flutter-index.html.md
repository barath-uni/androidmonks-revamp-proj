---
title: '# Creating Image Effects with BackdropFilter in Flutter'
description: 'BackdropFilter is useful to create good Image Filters on stacked Images. This is a very simple and small Filler Widget which can be useful for UI/UX.'
date: '2019-05-12'
modified_date: '2019-11-02'
image: '/assets/images/posts'
---
# Creating Image Effects with BackdropFilter in Flutter

 [November 2, 2019May 12, 2019](https://androidmonks.com/backdropfilter-flutter/ "3:30 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Creating Image Effects with BackdropFilter](#Creating_Image_Effects_with_BackdropFilter)
	+ [1.1 BackdropFilter – Widget Basics](#BackdropFilter_8211_Widget_Basics)
	+ [1.2 BackdropFilter – Attributes](#BackdropFilter_8211_Attributes)
	+ [1.3 Creating a Blur Image using Backdrop Filter Widget](#Creating_a_Blur_Image_using_Backdrop_Filter_Widget)
	+ [1.4 Other Image Manipulations](#Other_Image_Manipulations)
## Creating Image Effects with BackdropFilter

In this article, we will look at some good Image Effects that is possible on [Flutter using BackdropFilter](https://androidmonks.com/backdropfilter-flutter/). The Widget as such is really straightforward, provides a Child attribute and a Filter attribute. Playing with this Filter attribute creates really good effects native to Flutter and doesn’t require importing Edited Pictures(Even though it might seem easy).

We will look at what the Widget is, and understand the two attributes related to it. Then, take a look at all the effects that are possible through this Widget in Flutter.

### BackdropFilter – Widget Basics

To make use of the BackdropFilter, use the Class given below,


```
BackdropFilter()
```
The important part of using the BackdropFilter is that the Child should be stacked below this Widget. The filter is applied like it is applied to a Container and it creates the Image Effects that is required.

### BackdropFilter – Attributes

The 2 important attributes of the [BackdropFilter](https://androidmonks.com/backdropfilter-flutter/) Includes

* **child –**As the name suggests, it can be a Container or any constraints that need to be applied to the BackdropFilter Widget. This cannot be an [Image Widget](https://androidmonks.com/image-widget-flutter/) as it cannot apply Filters to itself.
```
child: Container(
  decoration: BoxDecoration(
    color: Colors.grey.shade100.withOpacity(0.2),
  )
```
Like the above snippet. The child can take in any Container or Box Widgets to provide that overlay effect on the elements below it.
* **filter –**Filter applies the Required ImageFilter class. It can either be Matrix/Blur and it applies these Filters to the Widgets below it.
```
filter: ImageFilter.blur(sigmaX: 5, sigmaY: 6),
```
The filter attribute can take only the ImageFilter class as its value. This value can be either a blur or a Matrix. We will look at examples for these two scenarios below.

We can see how this can work for 3 different scenarios as given in the below example.

### Creating a Blur Image using Backdrop Filter Widget

1. Create a simple Stack Widget
2. Stack the Image at the first(Bottom of the Stack).
3. Create the BackdropFilter as the next children
4. Apply the ImageFilter.blur value to the class
5. Include Box decoration if required for the Child.

Going through the above steps, we have the following code that is created. We use [the Image.Network](https://androidmonks.com/image-widget-flutter/) as it is easy to get an image from the internet easily [using the ImageWidget in Flutter](https://androidmonks.com/image-widget-flutter/).  
 The example program below [uses the Scaffold widget](https://androidmonks.com/scaffold-flutter/) and includes the Container widget to create a good cleaner UI. Additionally, Stack Widget helps in aligning the Images on the UI.


```
import 'dart:ui';

import 'package:flutter/material.dart';

void main()
{
  runApp(MaterialApp(
    title: 'Androidmonks',
    home: Scaffold(
      appBar: AppBar(title: Text("Backdrop Filter"),),
      body: Stack(
        children: <Widget>[
          ConstrainedBox(
            child: Image.network("https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"),
            constraints: BoxConstraints.expand(),
          ),
          Container(
            child: BackdropFilter(
              filter: ImageFilter.blur(sigmaX: 5, sigmaY: 6),
              child: Container(
                decoration: BoxDecoration(
                  color: Colors.grey.shade100.withOpacity(0.2),
                )
              ),
            ),
          ),
        ],
      ),

    ),
  ));
}
```
This creates a Flutter App, which looks like,

![BackdropFilter with Image.Blur](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![BackdropFilter with Image.Blur](https://androidmonks.com/wp-content/uploads/2019/05/Screen-Shot-2019-05-12-at-12.45.04-PM.png) **BackdropFilter with Image.Blur**We can additionally do spot blurring of the Images also, by modifying the Container values.

### Other Image Manipulations

Current Flutter/Dart package includes the use of Matrix4 class. Current documentation is not clear to Implement the ImageFilter.matrix().

I will keep this article alive to make sure that this feature can also be included as part of this tutorial.

Stacking Images can create better Visual effects as such, and for now, [Transform widget](https://docs.flutter.io/flutter/widgets/Transform-class.html) can be used.

If there are any suggestions/comments, drop them below.

***“Learn and Be Curious”***

[Tweet](https://twitter.com/intent/tweet?text=Creating+Image+Effects+with+BackdropFilter+in+Flutter&url=https%3A%2F%2Fandroidmonks.com%2Fbackdropfilter-flutter%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fbackdropfilter-flutter%2F)0 Shares Categories [Flutter](https://androidmonks.com/category/flutter/), [Uncategorized](https://androidmonks.com/category/uncategorized/) [Leave a comment](https://androidmonks.com/backdropfilter-flutter/#respond) Post navigation[FittedBox Widget in Flutter with Example | Androidmonks](https://androidmonks.com/fittedbox-widget/)[Slider Widget in Flutter | Android Studio](https://androidmonks.com/slider-widget-flutter/)### Leave a Comment [Cancel reply](/backdropfilter-flutter/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"1676","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "cc5bc2851c";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "1676";var swpClickTracking = false; 