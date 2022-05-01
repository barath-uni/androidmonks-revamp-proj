---
title: '# Listview Flutter with Example | Androidmonks'
description: ''
date: '2019-02-09'
modified_date: '2019-06-20'
image: '/assets/images/posts'
---
# Listview Flutter with Example | Androidmonks

 [June 20, 2019February 9, 2019](https://androidmonks.com/listview-flutter/ "12:16 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Listview Flutter with Example](#Listview_Flutter_with_Example)
	+ [1.1 Constructing a ListView in Flutter](#Constructing_a_ListView_in_Flutter)
	+ [1.2 ListView Basics](#ListView_Basics)
	+ [1.3 ListView Properties](#ListView_Properties)
		- * [1.3.0.1 Children](#Children)
		- [1.3.1 Padding](#Padding)
		- [1.3.2 Primary](#Primary)
		- [1.3.3 ScrollDirection](#ScrollDirection)
		- [1.3.4 ShrinkWrap](#ShrinkWrap)
	+ [1.4 ListView in Flutter Example Application](#ListView_in_Flutter_Example_Application)
## Listview Flutter with Example

In this tutorial, we will be seeing about [Listview in Flutter](https://androidmonks.com/listview-flutter/). It is one of the important widget types that can be used anywhere. In order to reduce the overload of having various layouts performing the same task(In Android, there are a lot of layouts that perform the same task of arranging the elements inside it either vertically or horizontally), the ListView widget has been introduced.

The ListView in Flutter does just what is required, it arranges the elements inside it(Again widgets) in the order specific to the developer’s need. We will be making use of the ListView in this tutorial and see the different properties that are helpful in creating a good looking UI Layout for the Application.

### Constructing a ListView in Flutter

Taking the cue from the Flutter doc, it is clear that there are 4 ways to construct a ListView in Flutter. Since a ListView can also be used to create a scrollable list of elements also, we can create a simple Listview using the following ways.

1. The default constructor takes an explicit List<Widget> of children. This constructor is appropriate for list views with a small number of children because constructing the List requires doing work for every child that could possibly be displayed in the list view instead of just those children that are actually visible.
2. The ListView.builder constructor takes an IndexedWidgetBuilder, which builds the children on demand. This constructor is appropriate for list views with a large (or infinite) number of children because the builder is called only for those children that are actually visible.
3. The ListView.separated constructor takes two IndexedWidgetBuilders: `itemBuilder` builds child items on demand, and `separatorBuilder` similarly builds separator children which appear in between the child items. This constructor is appropriate for list views with a fixed number of children.
4. The ListView.custom constructor takes a SliverChildDelegate, which provides the ability to customize additional aspects of the child model. For example, a SliverChildDelegate can control the algorithm used to estimate the size of children that are not actually visible.

The above steps may seem foreign for now, but the important thing to note is that we will be making use of the ListView class to create a scrollable list of elements in our home page. The ListView also doubles up as a ScrollableView and does not require a specific additional setup to provide the scrolling effect.

All of this makes the ListView a good choice for creating a list of items for the application easily.

### ListView Basics

To create a [ListView in Flutter](https://androidmonks.com/listview-flutter/), we will be making use of the **ListView** class. There are a lot of ways to use ListView, for now, we will see how to basically create a ListView using the available constructor.


```
import 'package:flutter/material.dart';

void main()
{
  runApp(MaterialApp(
    title: 'AndroidMonks',
    home: Scaffold(body:
    ListView()),
  ));
}
```
In the above example, we have made use of the already available MaterialApp widget, and in its home child attribute, created the Scaffold widget. The body attribute inside the Scaffold holds the ListView(). Once the constructor is called, we can make use of various properties inside it. The main attribute is the children attribute which takes in a list of widgets as its value.

This will create a list of widgets(Could be anything, a Text/Images/Videos etc). It is that simple to create a List in Flutter

### ListView Properties

There are lot of properties of a ListView, we will see the important ones in this section and see how the layout behaves for each attribute.

##### **Children**

Holds a list of widgets as its value and arranges them in a list format. This attribute is the most important as the list values are held inside this. To create a list of Text inside ListView, we will be creating,


```
import 'package:flutter/material.dart';

void main()
{
  runApp(MaterialApp(
    title: 'AndroidMonks',
    home: Scaffold(body: ListView(children: <Widget>[
      Text("List View 1"),
      Text("List View 2"),
    ],),)
  ));
}
```
This sample Code will create the UI that looks like,

![ListView Text in Flutter](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![ListView Text in Flutter](https://androidmonks.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-07-at-9.48.48-PM.png) **ListView Text in Flutter**Even though the list doesn’t look refined yet, we will still continue looking at other properties.

#### Padding

Padding takes in the value of the EdgetInsets class. This can be particularly useful if you are trying to arrange one ListView with another. It arranges the entire ListView and gives it a padding property. To find what the padding does to the layout, find the example below.


```
import 'package:flutter/material.dart';

void main()
{
  runApp(MaterialApp(
    title: 'AndroidMonks',
    home: Scaffold(appBar: AppBar(title: Text("AndroidMonks"),),body: ListView(children: <Widget>[
      Text("List View 1"),
      Text("List View 2"),
    ],
    padding: EdgeInsets.all(25.0),
    ),)
  ));
}
```
I have for the better understanding purpose, also added Appbar to the Scaffold widget. The final UI looks like below.

![Adding Padding to the ListView](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Adding Padding to the ListView](https://androidmonks.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-07-at-9.58.58-PM.png) **Adding Padding to the ListView**#### Primary

This should be set, if this is the primary ListView with scrolling property associated with the Parent of this widget. That is if there are multiple listviews arranged across the UI. If this property is set to **true,**then only this ListView can be scrolled. If the primary is **false,** the ListView cannot be scrolled.


```
import 'package:flutter/material.dart';

void main()
{
  runApp(MaterialApp(
    title: 'AndroidMonks',
    home: Scaffold(appBar: AppBar(title: Text("AndroidMonks"),),body: ListView(children: <Widget>[
      Text("List View 1"),
      Text("List View 2"),
    ],
    padding: EdgeInsets.all(25.0),
    primary: true,
    ),
   )
  ));
}
```
On adding this, we will be able to scroll this listview only.

#### ScrollDirection

Another important property of the ListView class. This allows the elements inside the ListView to either be scrolled horizontally or Vertically. This property can be also used when there are multiple ListViews present and the direction of scroll has to be provided.

On setting the property to **Axis.horizontal**like below code,


```
import 'package:flutter/material.dart';

void main()
{
  runApp(MaterialApp(
    title: 'AndroidMonks',
    home: Scaffold(appBar: AppBar(title: Text("AndroidMonks"),),body: ListView(children: <Widget>[
      Text("List View 1"),
      Text("List View 2"),
    ],
    padding: EdgeInsets.all(25.0),
    scrollDirection: Axis.horizontal,
    ),
    )
  ));
}
```
The following change happens.

![Child values are arranged horizontally](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Child values are arranged horizontally](https://androidmonks.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-07-at-10.07.56-PM.png) **Child values are arranged horizontally**### 

#### ShrinkWrap

This specifies if the extent of the scroll view in the scrollDirection should be determined by the contents being viewed. That is, if the elements are restricted to 10 per window, the Scrolling shows only shows 10 elements at a time and the rest are scrolled out of view. To understand this clearly, see the example code below,


```
import 'package:flutter/material.dart';

void main()
{
  runApp(MaterialApp(
    title: 'AndroidMonks',
    home: Scaffold(appBar: AppBar(title: Text("AndroidMonks"),),body: Container(
      margin: EdgeInsets.all(90.0),
      decoration: BoxDecoration(border: Border.all(color: Colors.red)),
      child: ListView(children: <Widget>[
      Text("List View 1",style: new TextStyle(fontSize: 50.0),),
      Text("List View 1",style: new TextStyle(fontSize: 30.0),),
      Text("List View 1",style: new TextStyle(fontSize: 30.0),),
      Text("List View 1",style: new TextStyle(fontSize: 30.0),),
      Text("List View 1",style: new TextStyle(fontSize: 30.0),),
    ],
      scrollDirection: Axis.vertical,
      shrinkWrap: true,
    ),),
    )
  ));
}
```
With the above code, we will try to understand what the **shirnkwrap** does.

![It stores the ListView items with the space the ListView requires only](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![It stores the ListView items with the space the ListView requires only](https://androidmonks.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-07-at-10.24.13-PM.png) **It stores the ListView items with the space the ListView requires only**### ListView in Flutter Example Application

We have seen all the important properties of the[ListView in Flutter](https://androidmonks.com/listview-flutter/). 


```
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final title = 'Item List';

    return MaterialApp(
      title: title,
      home: Scaffold(
        appBar: AppBar(
          title: Text(title),
        ),
        body: ListView(
          children: <Widget>[
            ListTile(
              leading: Icon(Icons.map),
              title: Text('Map'),
            ),
            ListTile(
              leading: Icon(Icons.photo\_album),
              title: Text('Album'),
            ),
            ListTile(
              leading: Icon(Icons.phone),
              title: Text('Phone'),
            ),
          ],
        ),
      ),
    );
  }
}
```
The code creates a UI layout that looks like below.

### 

There are a lot of different ways to create this ListView, we will talk about them in the coming blog posts.

For now, keep practicing and be Curious.

***“Happy Coding”***

[Tweet](https://twitter.com/intent/tweet?text=Listview+Flutter+with+Example++Androidmonks&url=https%3A%2F%2Fandroidmonks.com%2Flistview-flutter%2F)Pin1[Share1](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Flistview-flutter%2F)2 Shares Categories [Android](https://androidmonks.com/category/android/), [Flutter](https://androidmonks.com/category/flutter/) [2 Comments](https://androidmonks.com/listview-flutter/#comments) Post navigation[Scaffold in Flutter with Example – Awesome Flutter Widget](https://androidmonks.com/scaffold-flutter/)[Flutter Appbar Widget | Custom AppBar in 2 Minutes](https://androidmonks.com/flutter-appbar/)###  2 thoughts on “Listview Flutter with Example | Androidmonks”

1. ![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://secure.gravatar.com/avatar/8472be770813523159cf7115d2b85a5d?s=50&r=g) Mohit  [March 25, 2020 at 8:06 pm](https://androidmonks.com/listview-flutter/#comment-1456) How to add listview.builder in Container. I have searched in every website, but i didn’t get the answer.

 [Reply](#comment-1456)
	* ![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://secure.gravatar.com/avatar/28cd71423d7ab562d83ce23a64c6179f?s=50&r=g) Baradwaj Varadharajan  [March 28, 2020 at 7:27 am](https://androidmonks.com/listview-flutter/#comment-1459) Its not complex, make use of the ‘child’ attribute of the container to add the ListView.Builder.
	
	If your question is related to something specific, kindly post the code, so that i can give you a solution
	
	 [Reply](#comment-1459)

