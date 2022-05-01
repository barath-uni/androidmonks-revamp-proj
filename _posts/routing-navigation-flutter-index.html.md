---
title: '# Routing and Navigation in Flutter'
description: 'Routing and Navigation in Flutter is useful to travel between 2 or more screens. In this tutorial all the concepts are explained along with examples.'
date: '2019-02-27'
modified_date: '2019-06-20'
image: '/assets/images/posts'
---
# Routing and Navigation in Flutter

 [June 20, 2019February 27, 2019](https://androidmonks.com/routing-navigation-flutter/ "3:45 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Routing and Navigation in Flutter with Example](#Routing_and_Navigation_in_Flutter_with_Example)
	+ [1.1 Routing and Navigation – Basics](#Routing_and_Navigation_8211_Basics)
	+ [1.2 Routing to a widget and back](#Routing_to_a_widget_and_back)
		- [1.2.1 Using the simple push() on Navigator class](#Using_the_simple_push_on_Navigator_class)
		- [1.2.2 Using the Pop() on the SecondWidget](#Using_the_Pop_on_the_SecondWidget)
	+ [1.3 Creating Named Routed to Navigate between Widgets](#Creating_Named_Routed_to_Navigate_between_Widgets)
	+ [1.4 Send and Recieve Data across Screens](#Send_and_Recieve_Data_across_Screens)
		- [1.4.1 Send Values to another Screen](#Send_Values_to_another_Screen)
	+ [1.5 Receive Values from Second Screen](#Receive_Values_from_Second_Screen)
	+ [1.6 Animating Widgets across Screen using the Hero class](#Animating_Widgets_across_Screen_using_the_Hero_class)
	+ [1.7 Routing and Navigation in Flutter – Conclusion](#Routing_and_Navigation_in_Flutter_8211_Conclusion)
## Routing and Navigation in Flutter with Example

[Routing and Navigation](https://androidmonks.com/routing-navigation-flutter/) in Flutter is a very important concept. The idea of traversing from one Widget to another is important to create an action of switching between pages for the user. Since everything in Flutter is a Widget, the Navigation and Routing are also going to follow the same concept. The Routing is going to create a route to travel between one widget to another, passing data and information between them. This will create a better user experience showing a flow from one page to another on click of a button.

In order to understand Routing and Navigation, it is important to understand the basics of Flutter. Creating a Simple app using different widgets. In this tutorial, we will make use of both the Stateless and Stateful Widgets and also importantly create a Scaffold Widget a lot.

To learn more about the basics of widgets, you can take a look at the post on Understanding the basics of Flutter before jumping here.

### Routing and Navigation – Basics

There are a lot of different use cases while thinking about [Routing and Navigation](https://androidmonks.com/routing-navigation-flutter/) between Widgets in Flutter. The 4 topics that will be covered in this tutorial are,

1. Routing to a widget and back
2. Creating Named Routes, in case there are a lot of different widgets to go back and forth
3. Transferring data to and from widgets
4. Animating Widgets across Screen using the Hero class

Before starting with Routing and Navigation between Widgets, we will look at creating 2 simple example widgets which we will be using for the application.


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
      appBar: AppBar(title: Text("Page 1"),),
      body: Column(children: <Widget>[
        Image.network("https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"),
        RaisedButton(child: Text("Press Here"),)
      ],)
    );
  }

}
class SecondWidget extends StatelessWidget
{
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(title: Text("Page 2"),),
      body: Column(children: <Widget>[
        Image.network("https://www.w3schools.com/w3css/img\_lights.jpg"),
        RaisedButton(child: Text("Go Back"),)
      ],)
    );
  }
  
}
```
These two widgets are going to act as our template as we learn to create Routes and navigate between the two widgets.

### Routing to a widget and back

In Android, a route is equivalent to an Activity. In iOS, a route is equivalent to a ViewController. In Flutter, a route is just a widget.

How do you navigate to a new route? By using the.`Navigator` Navigator is again considered a Widget and only provides the necessary interface for the New Widget to come up and then go back, the old widget pops back up.

To understand how the Navigator works, we will look at the following sequence.

1. Create two routes
2. Navigate to the second route using Navigator.push()
3. Return to the first route using Navigator.pop()

We have already successfully created two Widgets, but what are routes here. Routes are nothing but the endpoint where we will be navigating to. In our case, the two widgets we have created are called routes.

The second step to consider is the use of Navigator.push(), the simple syntax of using Navigator class is given below.

From the docs,

“A widget that manages a set of child widgets with a stack discipline.

Many apps have a navigator near the top of their widget hierarchy in order to display their logical history using an [Overlay](https://docs.flutter.io/flutter/widgets/Overlay-class.html) with the most recently visited pages visually on top of the older pages. Using this pattern lets the navigator visually transition from one page to another by moving the widgets around in the overlay. Similarly, the navigator can be used to show a dialog by positioning the dialog widget above the current page.”  
 If this is not very understandable, just consider the Navigator as the class which can hold the Different routes that we want to show to the user. By simply putting the widget in the stack(Using the push action) we tell the Navigator to show that widget, and on popping that Widget(Using the pop action), we ask the Flutter to show the old widget back.

#### Using the simple push() on Navigator class


```
onPressed: () {
  Navigator.push(
    context,
    MaterialPageRoute(builder: (context) => SecondWidget()),
  );
}
```
The MaterialPageRoute is going to give that animation of transitioning from one route to another(That is from one page to another). Putting this into our code, our First widget looks like,


```
class FirstWidget extends StatelessWidget
{
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(title: Text("Page 1"),),
      body: Column(children: <Widget>[
        Image.network("https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"),
        RaisedButton(child: Text("Press Here"),
        onPressed: () {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => SecondWidget()),
          );
        },
        )
      ],)
    );
  }

}
```
#### Using the Pop() on the SecondWidget

We have successfully pushed the SecondWidget to be shown in the FirstWidget class’s raised button onPress method. The last step to do is, pop the old class back when the back button is pressed.

We will use the pop() method of the Navigator class, like below,


```
onPressed: () {
  Navigator.pop(context);
}
```
Using this will remove the SecondWidget’s context from the Navigator and the FirstWidget which is already present in the bottom of the Stack is shown to the User.

Inserting that in the SecondWidget’s class looks like,


```
class SecondWidget extends StatelessWidget
{
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(title: Text("Page 2"),),
      body: Column(children: <Widget>[
        Image.network("https://www.w3schools.com/w3css/img\_lights.jpg"),
        RaisedButton(child: Text("Go Back"),
            onPressed: () {
              Navigator.pop(context);
            }),
      ],)
    );
  }
  
}
```
The complete routing for the simple Routing and Navigation is done, and the final block of code looks like below,


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
      appBar: AppBar(title: Text("Page 1"),),
      body: Column(children: <Widget>[
        Image.network("https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"),
        RaisedButton(child: Text("Press Here"),
        onPressed: () {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => SecondWidget()),
          );
        },
        )
      ],)
    );
  }

}
class SecondWidget extends StatelessWidget
{
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(title: Text("Page 2"),),
      body: Column(children: <Widget>[
        Image.network("https://www.w3schools.com/w3css/img\_lights.jpg"),
        RaisedButton(child: Text("Go Back"),
            onPressed: () {
              Navigator.pop(context);
            }),
      ],)
    );
  }
  
}
```
On running the application, we get the following looking screen just as we expected.

![Basic Routing and Navigation in Flutter](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Basic Routing and Navigation in Flutter](https://androidmonks.com/wp-content/uploads/2019/02/basicrouting.gif) **Basic Routing and Navigation in Flutter**### Creating Named Routed to Navigate between Widgets

In order to perform navigation between widgets when there is a lot present, creating a push and pop along with creating context and marking the Class Name can become tiring and redundant to write.

Given each route a name and navigating to that name can easily cut down a lot of code that requires to be written. To make use of Named Routes, the use of **pushNamed**method of the Navigator class is used.

Let us understand how the Named Routes can be used in Flutter,

1. Create two screens
2. Define the routes
3. Navigate to the second screen using `Navigator.pushNamed`
4. Return to the first screen using `Navigator.pop`

We already have 2 Routes created. We however haven’t defined the routes to these two Screens. In order to define the routes to these screens, we will be using the MaterialApp widget that is inside the runApp() method and define our routes.

Check the code below to understand how the routes are defined,


```
runApp(MaterialApp(
  title: 'Androidmonks',
  routes: {
    '/':(context) => FirstWidget(),
    '/second': (context) => SecondWidget()
  },
  initialRoute: '/'
));
```
What have we done here? We have created two routes, ‘/’ and ‘/second’ and marked which are the Widgets that correspond to these routes.

**Note: If the initialRoute is specified, there is no use in specifying the home property inside MaterialApp. The Flutter engine will throw an error if done.**

The second step is marking the initialRoute which is our FirstWidget. This is to ensure that the Flutter engine should consider this as the bottom of the stack for any number of widgets that are going to be pushed and popped.

Its time to now, call the pushNamed() inside the FirstWidget and use the pop() inside the SecondWidget() like given below,


```
onPressed: () {
  Navigator.pushNamed(context, '/second');
}
```
For SecondWidget class,


```
onPressed: () {
  Navigator.pop(context);
})
```
The final Project looks like below,


```
import 'package:flutter/material.dart';

void main()
{
  runApp(MaterialApp(
    title: 'Androidmonks',
    initialRoute: '/',
    routes: {
      '/':(context) => FirstWidget(),
      '/second': (context) => SecondWidget()
    },

  ));
}
class FirstWidget extends StatelessWidget
{
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(title: Text("Page 1"),),
      body: Column(children: <Widget>[
        Image.network("https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"),
        RaisedButton(child: Text("Press Here"),
        onPressed: () {
          Navigator.pushNamed(context, '/second');
        },
        )
      ],)
    );
  }

}
class SecondWidget extends StatelessWidget
{
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(title: Text("Page 2"),),
      body: Column(children: <Widget>[
        Image.network("https://www.w3schools.com/w3css/img\_lights.jpg"),
        RaisedButton(child: Text("Go Back"),
            onPressed: () {
              Navigator.pop(context);
            }),
      ],)
    );
  }

}
```
Upon doing this, the app still performs the same way as we saw in the previous section. Thus the use of Named Routes is clearer in this example scenario.

### Send and Recieve Data across Screens

#### Send Values to another Screen

In order to send Values between the Screens, we can make use of the constructor inside the receiving Screen.

**Steps to perform**

1. Create two screen
2. Define the routes
3. Create a constructor to receive the value that is passed from the first screen
4. Store the value in a class variable
5. Print the value

To make it, even more, clearer a sample code example is given below,


```
import 'package:flutter/material.dart';

void main()
{
  runApp(MaterialApp(
    title: 'Androidmonks',
    home:FirstWidget() ,
  ));
}
class FirstWidget extends StatelessWidget
{
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(title: Text("Page 1"),),
      body: Column(children: <Widget>[
        Image.network("https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"),
        RaisedButton(child: Text("Press Here"),
        onPressed: () {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => SecondWidget(value:"Sample Value"))
          );
        },
        )
      ],)
    );
  }

}
class SecondWidget extends StatelessWidget
{
  String value;
  SecondWidget({Key key, @required this.value}):super(key:key);
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(title: Text("Page 2"),),
      body: Column(children: <Widget>[
        Image.network("https://www.w3schools.com/w3css/img\_lights.jpg"),
        Text("Value from First Widget is: "+this.value),
        RaisedButton(child: Text("Go Back"),
            onPressed: () {
              Navigator.pop(context);
            }),
      ],)
    );
  }
}
```
To understand what we have done here, we have created a simple Navigator class and called the SecondWidget. However, we have established a constructor for SecondWidget and given it a Key and Value. This way, the FirstWidget can pass any data it wants to the SecondWidget when pushing to the Navigator class.

This is how we will establish the passing of data to the other Screen in the app.

The FirstWidget stores a String value and sends it along with the Navigator, The constructor is called and the value, “Sample Value” is passed along with it. This way, the data is sent from one screen to another.

On running this app, we get the following screen,

![Sending data to second widget](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Sending data to second widget](https://androidmonks.com/wp-content/uploads/2019/02/senddata.gif) **Sending data to the second widget** 

### Receive Values from Second Screen

Once the data is sent to the Second Screen, there can be ways to return another value from the Second Widget. This is possible by making use of the await call on the Navigator.push() method in the First Widget from which we pass a data.

Once that is done, we can pop the Widget back to the First Screen by passing a value in it. To make it more clearer, here are the steps to follow.

1. Create two screen
2. Define the routes
3. Push the content and the Second Widget to the Navigator class
4. Wait for a response from the Second Widget using the **await** on the Navigator.push()
5. Pop the Widget from the Navigator by passing a value to the Pop() method
6. Print the Value on the first screen.

To make it clearer below is the code example,


```
import 'package:flutter/material.dart';

void main()
{
  runApp(MaterialApp(
    title: 'Androidmonks',
    home:FirstWidget() ,
  ));
}
class FirstWidget extends StatelessWidget
{ String result;
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(title: Text("Page 1"),),
      body: Builder(builder: (BuildContext context){

        return Column(children: <Widget>[
          Image.network("https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"),
          RaisedButton(child: Text("Press Here"),
              onPressed: (){
                displayValue(context);
              }
          ),
        ],);
      })

    );

  }
  displayValue(BuildContext context) async {
     this.result = await Navigator.push(
        context,
        MaterialPageRoute(builder: (context) => SecondWidget(value:"Sample Value"))
    );
     Scaffold.of(context)
       ..removeCurrentSnackBar()
       ..showSnackBar(SnackBar(content: Text("$result")));
  }

}
class SecondWidget extends StatelessWidget
{
  String value;
  SecondWidget({Key key, @required this.value}):super(key:key);
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(title: Text("Page 2"),),
      body: Column(children: <Widget>[
        Image.network("https://www.w3schools.com/w3css/img\_lights.jpg"),
        Text("Value from First Widget is: "+this.value),
        RaisedButton(child: Text("Go Back"),
            onPressed: () {
              Navigator.pop(context, "Sample Result Returned");
            }),
      ],)
    );
  }

}
```
The code example looks quite complex from what we have seen so far, including some additional helper Widgets like **Builder.**

We are making use of Builder method here because, there is a requirement to keep the Scaffold as the parent of the Widget where we will be showing a SnackBar. This will help while we have to display a snackbar over all the other widgets.

To get more information on this, take a look at this [helper wiki from the Flutter doc](https://docs.flutter.io/flutter/material/Scaffold/of.html).

Coming back to the code example, we have at hand. There are 2 important things that have been done over here. We are using an asynchronous method named the **displayValue()** which will wait for an async response from the Second Widget at hand.

Inside this method is the use of await call on the Navigator.push() method. The use of await is to denote that, there will be a response from the SecondWidget class and the First Widget has to wait for a response from Navigator.pop() method.

Jumping on to the Second Widget, we are performing a Navigator.pop() and along with the Context parameter, we additionally have passed a String value. This is going to act as the response back to the First Widget.

Once that is done, we have successfully established a To and Fro response between 2 Widgets/Screens in Flutter.

![Receving data in flutter](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Receving data in flutter](https://androidmonks.com/wp-content/uploads/2019/02/receivedata.gif) **Receiving data in flutter**### Animating Widgets across Screen using the Hero class

For the final section of the [Routing and Navigation](https://androidmonks.com/routing-navigation-flutter/) in Flutter, we will look at how to create an animated motion between two Screens. This animation allows the user to follow the flow from one screen to another.

To perform this flow between Widgets, we will be looking at this new Widget called **Hero** widget. Mark your component that requires the animated transition under Hero widget.

Following is a code example to do the same.


```
import 'package:flutter/material.dart';

void main()
{
  runApp(MaterialApp(
    title: 'Androidmonks',
    home:FirstWidget() ,
  ));
}
class FirstWidget extends StatelessWidget
{
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(title: Text("Page 1"),),
      body: Column(children: <Widget>[
        Hero(child: Image.network("https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"),
        tag: 'imageHero',),
        RaisedButton(child: Text("Press Here"),
        onPressed: (){
          Navigator.push(context,
          MaterialPageRoute(
              builder: (context) => SecondWidget(value: "Sample",)));
        }
        )
      ],)
    );

  }

}
class SecondWidget extends StatelessWidget
{
  String value;
  SecondWidget({Key key, @required this.value}):super(key:key);
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      body: Column(children: <Widget>[
        Hero(child: Image.network("https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"),
        tag: 'imageHero',),
        Text("Value from First Widget is: "+this.value),
        RaisedButton(child: Text("Go Back"),
            onPressed: () {
              Navigator.pop(context);
            }),
      ],)
    );
  }

}
```
If you notice clearly, the Appbar in the Second Widget has been removed and pasted the same image in both the Screen. On top of all of this, both the images are wrapped under a Widget named as the Hero widget. This is going to be responsible for creating the animated flow between the Two Screens. Check out the result below

![Animate flow between two Widgets](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Animate flow between two Widgets](https://androidmonks.com/wp-content/uploads/2019/02/animatehero.gif) **Animate flow between two Widgets**### Routing and Navigation in Flutter – Conclusion

This has been an extensive look into how to navigate between two Widgets using the concept of routes. Make sure to follow the Stack concepts of pushing and popping the Widgets properly. There can be scenarios where it might lead to leakage of information. Be sure to create simply named routes and use them to have better code readability.

Drop in any comments that you have in the comment section below.

***“Learn and Be Curious”***

[Tweet](https://twitter.com/intent/tweet?text=Routing+and+Navigation+in+Flutter&url=https%3A%2F%2Fandroidmonks.com%2Frouting-navigation-flutter%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Frouting-navigation-flutter%2F)0 Shares Categories [Android](https://androidmonks.com/category/android/), [Flutter](https://androidmonks.com/category/flutter/) [Leave a comment](https://androidmonks.com/routing-navigation-flutter/#respond) Post navigation[Image Widget Flutter | Androidmonks](https://androidmonks.com/image-widget-flutter/)[Alert Dialog in Flutter with Example | Androidmonks](https://androidmonks.com/alerts-dialog-flutter/)### Leave a Comment [Cancel reply](/routing-navigation-flutter/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"1499","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "cc5bc2851c";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "1499";var swpClickTracking = false; 