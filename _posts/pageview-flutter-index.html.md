---
title: '# PageView Widget in Flutter – Complete Tutorial'
description: 'PageView Widget in Flutter is important for the visualisation and organization of Items on Screen. The article discusses the required properties in depth.'
date: '2019-04-18'
modified_date: '2019-11-02'
image: '/assets/images/posts'
---
# PageView Widget in Flutter – Complete Tutorial

 [November 2, 2019April 18, 2019](https://androidmonks.com/pageview-flutter/ "3:30 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 PageView Widget in Flutter – Everything you need to know](#PageView_Widget_in_Flutter_8211_Everything_you_need_to_know)
	+ [1.1 PageView Widget – Basics](#PageView_Widget_8211_Basics)
	+ [1.2 PageView constructor()](#PageView_constructor)
	+ [1.3 PageView.Builder Method](#PageViewBuilder_Method)
	+ [1.4 PageView.Custom](#PageViewCustom)
* [2 PageView – Properties](#PageView_8211_Properties)
	+ - [2.0.1 scrollDirection](#scrollDirection)
		- [2.0.2 pageSnapping](#pageSnapping)
		- [2.0.3 physics](#physics)
		- [2.0.4 onPageChanged](#onPageChanged)
		- [2.0.5 controller](#controller)
	+ [2.1 PageView in Flutter – Conclusion](#PageView_in_Flutter_8211_Conclusion)
## PageView Widget in Flutter – Everything you need to know

[PageView Widget in Flutter](https://androidmonks.com/pageview-flutter/) is actually a scrollable list but rather works as a page. If you know about carousels(More like [image](https://androidmonks.com/image-widget-flutter/) sscrolling on a screen), the PageView gives the same control over that. You can create Pages and define what direction they need to be scrolled in.

Extremely useful Widget which makes the life of a developer easy. There are a lot of properties and callbacks that are part of the PageView Widget. The PageView, however, forces the child to stick to viewport as specified. In this tutorial, we will look at all the important properties that are required and helpful in order to create PageViews in Flutter.

### PageView Widget – Basics

There are 3 different ways to create PageView in Flutter. They are,

* Using the PageView Constructor directly(Useful for creating simple PageViews which are mostly Static)
* Using the PageView.Builder – Helpful in creating Dynamic pageviews(100 scrollable PageViews to be constructed)
* PageView.Custom – Helpful in creating custom scroll actions/animations to it.

We will look at all these ways in detail below. If you have read the post on [ListView Widget in Flutter](https://androidmonks.com/listview-flutter/), you might have the understanding as to what each type of Building can do. We will be looking at them anyway in this post.

### PageView constructor()

To start off with, we will look at the first way to create [PageView in Flutter](https://androidmonks.com/pageview-flutter/). The PageView constructor directly calls the Widget and lets you define the Pages one by one. The constructor call can be done through,


```
import 'package:flutter/material.dart';

void main()
{
  runApp(MaterialApp(
    title:"Androidmonks",
    home: Scaffold(
      body: PageView(),
    ),
  ));
}
```
There are a lot of important attributes that can be used with the PageView constructor. Take a look at them in the next section.

### PageView.Builder Method

Like mentioned above, Builder is particularly used when there are a lot of pages to be constructed. The use of PageView constructor for 100 pages is not feasible. The Builder method is similar to the ListView method where the page count is taken into consideration and the engine takes care of constructing them for you. Take a look at how the Builder method is used,


```
import 'package:flutter/material.dart';

void main()
{
  runApp(MaterialApp(
    title:"Androidmonks",
    home: Scaffold(
      body: PageView.builder(
          itemBuilder: (context, position)
          {

          },
          itemCount: 10,
      ),
    ),
  ));
}
```
Like written above, the **itemBuilder** attribute holds the space to create the actual page. The **itemCount**, on the other hand, is used to create the pages given number of times. **If the itemCount is empty, infinite pages are constructed.**

All the attributes of the PageView() constructor are applicable for this method. The next section discusses these properties.

### PageView.Custom

The main use of [PageView.Custom](https://androidmonks.com/pageview-flutter/)(Like discussed in the ListView.Custom) is to give the PageView an additional option to make use of the [Sliver widgets](https://androidmonks.com/sliverappbar-flutter/) and create custom animation/movements to the widget. The Slivers like discussed in the [SliverAppBar Widget in Flutter post](https://androidmonks.com/sliverappbar-flutter/), is useful to create animation movements/Widget with just simple Delegates attached to it. These are possible through the PageView.Custom method. Take a look at how that is used,


```
import 'package:flutter/material.dart';

void main()
{
  runApp(MaterialApp(
    title:"Androidmonks",
    home: Scaffold(
        body: PageView.custom(
            childrenDelegate: SliverChildListDelegate([
              ListTile()
            ])),
    ),
  ));
}
```
In this example, the childrenDelegate is a required attribute. It takes any type of the Sliver widget. The slivers are nothing but additionally animated widgets performing the same function other than that. You can know more about slivers [here](https://flutter.dev/docs/development/ui/advanced/slivers).

The attributes of PageView() constructor are applicable for this method also. To know about the properties check the next section.

## PageView – Properties

Now that we have looked at all the ways to create a PageView, time to see what the PageView attributes do to the Widget.

#### scrollDirection

This attribute lets you decide which side the Pages should be scrolled. The **Axis**class can decide if the direction is either Vertical or Horizontal. Take a look at the example below,


```
import 'package:flutter/material.dart';

void main()
{
  runApp(MaterialApp(
    title:"Androidmonks",
    home: Scaffold(
      body: PageView(
        children: <Widget>[
          Container(
            child: Center(child:Text("Page 1")),
            color: Colors.red,
          ),
          Container(
            child: Center(child:Text("Page 2")),
            color: Colors.blueAccent,
          )
        ],
        scrollDirection: Axis.vertical,
      ),
    ),
  ));
}
```
The scrollDirection is kept as vertical and the App looks like below,

![ScrollDirection in PageView set to vertical.](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![ScrollDirection in PageView set to vertical.](https://androidmonks.com/wp-content/uploads/2019/04/scrollvertical.gif) **ScrollDirection in PageView set to vertical.**The direction can also be set to Axis.horizontal to see the scroll in the horizontal axis.

#### pageSnapping

This attribute lets the Page Snap into view instead of a smooth scroll. The attribute takes in a boolean value and can be used as given below. By default it is set to **true,**if set to False, instead of snapping to the viewport, it is up to the user to perform the swipe/scroll completely to see the other page.

Using the same example as above and setting the pageSnapping to take a look at the code below.


```
import 'package:flutter/material.dart';

void main()
{
  runApp(MaterialApp(
    title:"Androidmonks",
    home: Scaffold(
      body: PageView(
        children: <Widget>[
          Container(
            child: Center(child:Text("Page 1")),
            color: Colors.red,
          ),
          Container(
            child: Center(child:Text("Page 2")),
            color: Colors.blueAccent,
          )
        ],
        pageSnapping: false,
      ),
    ),
  ));
}
```
This creates the app which looks like,

![Using PageSnap attribute in PageView](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Using PageSnap attribute in PageView](https://androidmonks.com/wp-content/uploads/2019/04/scrollsnao.gif) **Using PageSnap attribute in PageView**#### physics

Lets the user perform Scroll but with different animation that Flutter Supports. It takes in value of the ScrollPhysics and can be used in the following way.

To understand the difference in the ScrollPhysics, you must understand that, when the user does a fast scroll on the list of pages, the final animation when the max page size is reached is defined by the ScrollPhysics. To see that animation, we will create more than 2 pages and set it to Vertical Scroll. There are a lot of ScrollPhysics that are available, 2 different physics and how they change is given below.

Using BouncingScrollPhysics in the code below we get,


```
import 'package:flutter/material.dart';

void main()
{
  runApp(MaterialApp(
    title:"Androidmonks",
    home: Scaffold(
      body: PageView(
        children: <Widget>[
          Container(
            child: Center(child:Text("Page 1")),
            color: Colors.red,
          ),
          Container(
            child: Center(child:Text("Page 2")),
            color: Colors.blueAccent,
          ),
          Container(
            child: Center(child:Text("Page 3")),
            color: Colors.redAccent,
          ),
          Container(
            child: Center(child:Text("Page 4")),
            color: Colors.blueAccent,
          )
        ],
        pageSnapping: false,
        scrollDirection: Axis.vertical,
        physics: BouncingScrollPhysics(),
      ),
    ),
  ));
}
```
This creates the app which looks like,

![Scrolling when BouncingScrollPhysics is used](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Scrolling when BouncingScrollPhysics is used](https://androidmonks.com/wp-content/uploads/2019/04/scrollbounce.gif) **Scrolling when BouncingScrollPhysics is used**As you can see, the scroll effect when the First page/Last page is reached gives a bounce effect to denote the end of the pages. This is defined by the **BouncingScrollPhysics.**

Taking the same example and changing the scrollphysics to **ClampingScrollPhysics**gives the app which looks like,

![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2019/04/clampscroll.gif) **ScrollPhysics set to ClampScroll**#### onPageChanged

This callback is fired whenever the Page is changed. That is whenever the scroll happens, the page number is fired and can be used for further processing.


```
import 'package:flutter/material.dart';

void main()
{
  runApp(MaterialApp(
    title:"Androidmonks",
    home: Scaffold(
      body: PageView(
        children: <Widget>[
          Container(
            child: Center(child:Text("Page 1")),
            color: Colors.red,
          ),
          Container(
            child: Center(child:Text("Page 2")),
            color: Colors.blueAccent,
          ),
          Container(
            child: Center(child:Text("Page 3")),
            color: Colors.redAccent,
          ),
          Container(
            child: Center(child:Text("Page 4")),
            color: Colors.blueAccent,
          )
        ],
        onPageChanged: (num){
          print("Current page number is "+num.toString());
        },
        physics: ClampingScrollPhysics(),
      ),
    ),
  ));
}
```
This creates the below output,

![onPageChanged callback in PageView](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![onPageChanged callback in PageView](https://androidmonks.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-14-at-8.05.31-PM.png) **onPageChanged callback in PageView** 

#### controller

The controller attribute controls the entire PageView Widget. It lets you define and control the Pages from outside with just the PageController() object assigned to the PageView.

I have written a very simple(Rather stupid) code, which actually helps you skip a Page(Whevener you try to swipe to the second page, it pushes it to the 3rd page).

Check the code below and the output also


```
import 'package:flutter/material.dart';

void main()
{ PageController controller = PageController();
  runApp(MaterialApp(
    title:"Androidmonks",
    home: Scaffold(
      body: PageView(
        children: <Widget>[
          Container(
            child: Center(child:Text("Page 1")),
            color: Colors.red,
          ),
          Container(
            child: Center(child:Text("Page 2")),
            color: Colors.blueAccent,
          ),
          Container(
            child: Center(child:Text("Page 3")),
            color: Colors.redAccent,
          ),
          Container(
            child: Center(child:Text("Page 4")),
            color: Colors.blueAccent,
          )
        ],
        controller: controller,
        onPageChanged: (num){
          controller.jumpToPage(2);
          print("Change:"+controller.position.toString());
        },
        physics: ClampingScrollPhysics(),
      ),
    ),
  ));
}
```
![Using Page Controller in PageView widget](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Using Page Controller in PageView widget](https://androidmonks.com/wp-content/uploads/2019/04/pagecontroller.gif) **Using Page Controller in PageView widget**#### 

If you note the console output, the Position object is getting printed. It has a lot of data as to every bit of information about the Page which the user is seeing.

It can also be controlled from outside the PageView’s scope and that provides dynamic control over the pageviews.

### PageView in Flutter – Conclusion

PageView in Flutter is a very important widget in terms of organization and better visualization to the entire [Flutter App you are going to build](https://androidmonks.com/first-flutter-app/).

Also, know more about [ListView Widget in Flutter](https://androidmonks.com/listview-flutter/) to better understand how the different dynamics of the PageView Widget is created.

That’s it for the article, drop in any comments you have about the PageView widget in the Comment section below.

***“Happy Coding”***

[Tweet](https://twitter.com/intent/tweet?text=PageView+Widget+in+Flutter+-+Complete+Tutorial&url=https%3A%2F%2Fandroidmonks.com%2Fpageview-flutter%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fpageview-flutter%2F)0 Shares Categories [Flutter](https://androidmonks.com/category/flutter/), [Uncategorized](https://androidmonks.com/category/uncategorized/) [1 Comment](https://androidmonks.com/pageview-flutter/#comments) Post navigation[SliverAppBar in Flutter with Example | Androidmonks](https://androidmonks.com/sliverappbar-flutter/)[FittedBox Widget in Flutter with Example | Androidmonks](https://androidmonks.com/fittedbox-widget/)###  1 thought on “PageView Widget in Flutter – Complete Tutorial”

1. ![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://secure.gravatar.com/avatar/16f05d5829da701c8dc706ba757d67e3?s=50&r=g) Abdulmumin Isah  [July 21, 2020 at 6:05 am](https://androidmonks.com/pageview-flutter/#comment-1517) Nice one  
 Please I am a beginner in flutter app development and I am developing a story app with different chapters and chapters has lengthy paragraphs that is beyond the screen of the pageview and I don’t want to use vertical scrollvidget to contain everything on the same page but I want the rest of the paragraph to continue from the next page, how do I achieve this? Your feedback will be helpful. Thank you in advance

 [Reply](#comment-1517)

