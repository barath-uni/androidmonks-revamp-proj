---
title: '# Flutter Appbar Widget | Custom AppBar in 2 Minutes'
description: 'Appbar in flutter is used to create a simple yet effective Topbars. In this tutorial'
date: '2019-02-15'
modified_date: '2019-11-05'
image: '/assets/images/posts'
---
# Flutter Appbar Widget | Custom AppBar in 2 Minutes

 [November 5, 2019February 15, 2019](https://androidmonks.com/flutter-appbar/ "10:00 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Flutter Appbar with Example in AndroidStudio](#Flutter_Appbar_with_Example_in_AndroidStudio)
	+ [1.1 AppBar in Flutter – Understanding the Basics](#AppBar_in_Flutter_8211_Understanding_the_Basics)
	+ [1.2 Creating an AppBar in Flutter](#Creating_an_AppBar_in_Flutter)
	+ [1.3 AppBar in Flutter – Properties](#AppBar_in_Flutter_8211_Properties)
		- [1.3.1 title](#title)
		- [1.3.2 actions](#actions)
		- [1.3.3 backgroundColor](#backgroundColor)
		- [1.3.4 elevation](#elevation)
		- [1.3.5 leading](#leading)
		- [1.3.6 bottom](#bottom)
		- [1.3.7 brightness](#brightness)
	+ [1.4 Sample AppBar example in AndroidStudio](#Sample_AppBar_example_in_AndroidStudio)
## Flutter Appbar with Example in AndroidStudio

Appbar is an integral part of any sound application. [Appbar in Flutter](https://androidmonks.com/flutter-appbar/) is very useful to create a good looking Topbar to the UI. The Appbar consists of a lot of useful and flexible properties to it. This helps in creating faster UI elements. Since everything in Flutter is a widget, this Appbar Widget is extremely useful inside the [Scaffold widget](https://androidmonks.com/scaffold-flutter/). Appbar can also be made use to hold a Menu like a drawer or even other helper icons on it.

The Appbar is often considered the Bussiness portion of the Application, this is because the Appbar draws the attention of the user almost immediately. In order to create good looking UI, it is important to have a good looking Appbar also.

In this tutorial, we will be seeing, how to create a simple Appbar along with all the properties and other attributes that the Appbar widget has. Also, a sample Application UI along with the sample Application is present in the last section.

### AppBar in Flutter – Understanding the Basics

An AppBar consists of a toolbar and other widgets, such as a TabBar and a FlexibleSpaceBar.

App bars are typically used in the Scaffold.appBar property, which places the app bar as a fixed-height widget at the top of the screen. The AppBar displays the toolbar widgets, leading, title, and actions, above the bottom (if any). The bottom is usually used for a TabBar. If a flexibleSpace widget is specified then it is stacked behind the toolbar and the bottom widget.

### Creating an AppBar in Flutter

As mentioned above, the AppBar is primarily a part of the [Scaffold](https://androidmonks.com/scaffold-flutter/) Widget, since it provides an easy gateway to create the AppBar. In order to create a simple AppBar, `AppBar` Class can be used. The general constructor looks like below,


```
AppBar(title: Text("Sample AppBar"),
```
The constructor of AppBar looks like,


```
AppBar({Key key, Widget leading, bool automaticallyImplyLeading: true, Widget title, List<Widget> actions, Widget flexibleSpace, PreferredSizeWidget bottom, double elevation: 4.0, Color backgroundColor, Brightness brightness, IconThemeData iconTheme, TextTheme textTheme, bool primary: true, bool centerTitle, double titleSpacing: NavigationToolbar.kMiddleSpacing, double toolbarOpacity: 1.0, double bottomOpacity: 1.0 })
```
There are a lot of properties that are part of the AppBar class. We will be seeing the important properties that help in creating the AppBar.

### AppBar in Flutter – Properties

The following properties are most used in Flutter and can be helpful in creating better-looking TopBar for your application.

#### title

The title takes in Text class as its value is the main reason for using the AppBar. The AppBar holds the name of the app itself. It could be the App name or the brand name that you want to place. Take any major application on the market today and the AppBar is always going to hold important Text in it. To make use of this title attribute, you can call the Text() constructor and pass a String. Example title looks like below,


```
import "package:flutter/material.dart";

void main()
{
  runApp(MaterialApp(
    title: "AndroidMonks",
    home: Scaffold(
      appBar: AppBar(
        title: Text("Androidmonks"),
      ),
    ),
  ));
}
```
On using this Title tag, the final Application looks like

![Title in Flutter AppBar](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Title in Flutter AppBar](https://androidmonks.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-14-at-10.43.34-PM.png) **Title in Flutter AppBar**#### actions

Actions attribute in AppBar is dedicated to place Icons/Text to the right of the AppBar’s Title. That is, the top right corner of the App is very important in terms of utility to the user. It is the place where, any User will want to find Utility related options.

Example Icons to place will be, Settings, Search Icon etc. To make use of that portion of the AppBar, the actions field is used. The actions field in AppBar takes in a list of widgets. It can take any widget, but most preferably the presence of Icons will improve the overall UI feel of the App.


```
import "package:flutter/material.dart";

void main()
{
  runApp(MaterialApp(
    title: "AndroidMonks",
    home: Scaffold(
      appBar: AppBar(
        title: Text("Androidmonks"),
        actions: <Widget>[
          Icon(Icons.comment),
          Icon(Icons.settings),
        ],
      ),
    ),
  ));
}
```
To create a sample actions pane, you can find the code below.

![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-14-at-10.49.51-PM.png)

#### backgroundColor

Another important attribute of the Appbar class is the backgroundColor attribute. It’s important to understand that, you can give any color to to it. It takes in the value of the **Colors** class and makes use of the static variable with the color name.

Sample code is given below,


```
import "package:flutter/material.dart";

void main()
{
  runApp(MaterialApp(
    title: "AndroidMonks",
    home: Scaffold(
      appBar: AppBar(
        title: Text("Androidmonks"),
        actions: <Widget>[
          Icon(Icons.comment),
          Icon(Icons.settings),
        ],
        backgroundColor: Colors.deepOrangeAccent,
      ),
    ),
  ));
}
```
The AppBar now looks like,

![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-14-at-11.45.01-PM.png) **AppBar BackgroundColor Property**#### elevation

Elevation creates a elevated effect on the AppBar by giving it a shadow. To make use of this property, you will have to provide a double value, The elevation happens on the Z axis of the AppBar and the code looks like,


```
import "package:flutter/material.dart";

void main()
{
  runApp(MaterialApp(
    title: "AndroidMonks",
    home: Scaffold(
      appBar: AppBar(
        title: Text("Androidmonks"),
        actions: <Widget>[
          Icon(Icons.comment),
          Icon(Icons.settings),
        ],
        backgroundColor: Colors.deepOrangeAccent,
        elevation: 50.0,
      ),
    ),
  ));
}
```
The final AppBar looks like,

![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-15-at-12.08.04-AM.png) **AppBar elevation property**#### leading

This is the property to let the AppBar hold a simple Widget just to the left of the AppBar title. Often, there will be a Menu Drawer like widget. In [scaffold](https://androidmonks.com/scaffold-flutter/), the **drawer**attribute will by default occupy this place only. In order to create something else to the left of the Title, create a widget for the leading attribute.

Sample code for leading looks like,


```
import "package:flutter/material.dart";

void main()
{
  runApp(MaterialApp(
    title: "AndroidMonks",
    home: Scaffold(
      appBar: AppBar(
        title: Text("Androidmonks"),
        actions: <Widget>[
          Icon(Icons.comment),
          Icon(Icons.settings),
        ],
        backgroundColor: Colors.deepOrangeAccent,
        elevation: 50.0,
        leading: Icon(Icons.menu),
      ),
    ),
  ));
}
```
The AppBar now looks like,

![Leading property in AppBar](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Leading property in AppBar](https://androidmonks.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-15-at-9.28.50-AM.png) **Leading property in AppBar**#### bottom

**bottom**property is another important property for creating useful AppBars. The main purpose is to **make use of the space below the title**. The AppBar’s bottom can be used to hold either a Title or even a simple yet effective Icon or for that matter any widget family.

The bottom attribute takes in the value of **PrefferedSize** **class as its value**. To create a simple PrefferedSize value, you will have to understand what that class denotes. It is going to create a specific widget for the given size only.

The prefferedSize class takes in 2 important attributes, **child and prefferedSize**. The prefferedSize is often the Size class value and the child is where the Widget to hold comes into picture.

A sample bottom attribute is used in the example code below,


```
import "package:flutter/material.dart";

void main()
{
  runApp(MaterialApp(
    title: "AndroidMonks",
    home: Scaffold(
      appBar: AppBar(
        title: Text("Androidmonks"),
        actions: <Widget>[
          Icon(Icons.comment),
          Icon(Icons.settings),
        ],
        backgroundColor: Colors.deepOrangeAccent,
        elevation: 50.0,
        leading: Icon(Icons.menu),
        bottom: PreferredSize(child: Icon(Icons.linear\_scale,size: 60.0,), preferredSize: Size.fromHeight(50.0)),
      ),
    ),
  ));
}
```
On creating this code, the AppBar looks like

![bottom attribute in Flutter AppBar](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![bottom attribute in Flutter AppBar](https://androidmonks.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-15-at-9.42.04-AM.png) **bottom attribute in Flutter AppBar**#### brightness

As the name suggests, it is going to take in the value of the brightness that the AppBar is going to be in. It is preferably set along with the backgroundColor attribute we saw above. If not, then the AppBar might look odd in terms of creating good looking UI.

Sample Light Brightness will look like,


```
import "package:flutter/material.dart";

void main()
{
  runApp(MaterialApp(
    title: "AndroidMonks",
    home: Scaffold(
      appBar: AppBar(
        title: Text("Androidmonks"),
        actions: <Widget>[
          Icon(Icons.comment),
          Icon(Icons.settings),
        ],
        backgroundColor: Colors.deepOrangeAccent,
        elevation: 50.0,
        leading: Icon(Icons.menu),
        brightness: Brightness.light,

      ),
    ),
  ));
}
```
![Brightness set to dark](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Brightness set to dark](https://androidmonks.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-15-at-9.47.13-AM.png) Brightness set to lightBrightness set to Dark will look like,


```
import "package:flutter/material.dart";

void main()
{
  runApp(MaterialApp(
    title: "AndroidMonks",
    home: Scaffold(
      appBar: AppBar(
        title: Text("Androidmonks"),
        actions: <Widget>[
          Icon(Icons.comment),
          Icon(Icons.settings),
        ],
        backgroundColor: Colors.deepOrangeAccent,
        elevation: 50.0,
        leading: Icon(Icons.menu),
        brightness: Brightness.dark,

      ),
    ),
  ));
}
```
![Sample Dark Brightness](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Sample Dark Brightness](https://androidmonks.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-15-at-9.47.37-AM.png) **Sample Dark Brightness**A minor change is observed in the top of the AppBar(Where the time/wifi/battery icons are present). This can also be changed by changing the theme of the entire application. The Brightness attribute plays a minimal role in controlling them anyway.

### Sample AppBar example in AndroidStudio

Making use of all the above properties, let us create a simple looking AppBar for the example purpose using the Android Studio IDE.

Taking the example from this place, the following code is created.


```
import 'package:flutter/material.dart';

class AppBarSample extends StatefulWidget {
  @override
  \_AppBarSampleState createState() => \_AppBarSampleState();
}

class \_AppBarSampleState extends State<AppBarSample>
    with SingleTickerProviderStateMixin {
  TabController \_tabController;

  @override
  void initState() {
    super.initState();
    \_tabController = TabController(vsync: this, length: choices.length);
  }

  @override
  void dispose() {
    \_tabController.dispose();
    super.dispose();
  }

  void \_nextPage(int delta) {
    final int newIndex = \_tabController.index + delta;
    if (newIndex < 0 || newIndex >= \_tabController.length) return;
    \_tabController.animateTo(newIndex);
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Android Monks'),
          leading: IconButton(
            tooltip: 'Previous choice',
            icon: const Icon(Icons.arrow\_back),
            onPressed: () {
              \_nextPage(-1);
            },
          ),
          actions: <Widget>[
            IconButton(
              icon: const Icon(Icons.arrow\_forward),
              tooltip: 'Next choice',
              onPressed: () {
                \_nextPage(1);
              },
            ),
          ],
          bottom: PreferredSize(
            preferredSize: const Size.fromHeight(48.0),
            child: Theme(
              data: Theme.of(context).copyWith(accentColor: Colors.white),
              child: Container(
                height: 48.0,
                alignment: Alignment.center,
                child: TabPageSelector(controller: \_tabController),
              ),
            ),
          ),
        ),
        body: TabBarView(
          controller: \_tabController,
          children: choices.map((Choice choice) {
            return Padding(
              padding: const EdgeInsets.all(16.0),
              child: ChoiceCard(choice: choice),
            );
          }).toList(),
        ),
      ),
    );
  }
}

class Choice {
  const Choice({this.title, this.icon});

  final String title;
  final IconData icon;
}

const List<Choice> choices = const <Choice>[
  const Choice(title: 'CAR', icon: Icons.directions\_car),
  const Choice(title: 'BICYCLE', icon: Icons.directions\_bike),
  const Choice(title: 'BOAT', icon: Icons.directions\_boat),
  const Choice(title: 'BUS', icon: Icons.directions\_bus),
  const Choice(title: 'TRAIN', icon: Icons.directions\_railway),
  const Choice(title: 'WALK', icon: Icons.directions\_walk),
];

class ChoiceCard extends StatelessWidget {
  const ChoiceCard({Key key, this.choice}) : super(key: key);

  final Choice choice;

  @override
  Widget build(BuildContext context) {
    final TextStyle textStyle = Theme.of(context).textTheme.display1;
    return Card(
      color: Colors.white,
      child: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Icon(choice.icon, size: 128.0, color: textStyle.color),
            Text(choice.title, style: textStyle),
          ],
        ),
      ),
    );
  }
}

void main() {
  runApp(AppBarSample());
}
```
This creates an application that looks like,

![AppBar example Application](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![AppBar example Application](https://androidmonks.com/wp-content/uploads/2019/02/ezgif.com-video-to-gif.gif) AppBar example Application**Please Note: The above code is taken from the sample Flutter Docs and enhanced to give an example of how the Flutter’s Appbar can be used and is not an original of Androidmonks.**

Drop in any comments below and post similar looking Appbar’s to enhance the Flutter Community.

***“Learn and Be Curious”***

[Tweet](https://twitter.com/intent/tweet?text=Flutter+Appbar+Widget++Custom+AppBar+in+2+Minutes&url=https%3A%2F%2Fandroidmonks.com%2Fflutter-appbar%2F)Pin[Share1](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fflutter-appbar%2F)1 Shares Categories [Flutter](https://androidmonks.com/category/flutter/) [2 Comments](https://androidmonks.com/flutter-appbar/#comments) Post navigation[Listview Flutter with Example | Androidmonks](https://androidmonks.com/listview-flutter/)[Image Widget Flutter | Androidmonks](https://androidmonks.com/image-widget-flutter/)###  2 thoughts on “Flutter Appbar Widget | Custom AppBar in 2 Minutes”

1. ![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://secure.gravatar.com/avatar/d375d1eef9de6b23e8437f74fad94593?s=50&r=g) houssam  [March 23, 2020 at 10:44 pm](https://androidmonks.com/flutter-appbar/#comment-1455) thank you very mush you very good in explain and tetching

 [Reply](#comment-1455)
	* ![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://secure.gravatar.com/avatar/28cd71423d7ab562d83ce23a64c6179f?s=50&r=g) Baradwaj Varadharajan  [March 28, 2020 at 7:26 am](https://androidmonks.com/flutter-appbar/#comment-1458) Cool that you liked the article
	
	 [Reply](#comment-1458)

