---
title: '# State Management in Flutter | Everything you need to know'
description: 'State Management in Flutter involves learning how to transfer data from one widget to another. Flutter's declarative way to manage state is explained.'
date: '2019-03-31'
modified_date: '2019-06-20'
image: ''
---
# State Management in Flutter – Explained | Androidmonks

 [June 20, 2019March 31, 2019](https://androidmonks.com/state-management-flutter/ "12:30 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 State Management in Flutter | Everything you need to know](#State_Management_in_Flutter_Everything_you_need_to_know)
	+ [1.1 State Management – Declarative Style – Overview](#State_Management_8211_Declarative_Style_8211_Overview)
	+ [1.2 Two important States – Ephemeral and App State](#Two_important_States_8211_Ephemeral_and_App_State)
		- * [1.2.0.1 Understand Ephemeral State](#Understand_Ephemeral_State)
			* [1.2.0.2 Understand App State](#Understand_App_State)
	+ [1.3 Creating App State Management](#Creating_App_State_Management)
	+ [1.4 Model in Flutter](#Model_in_Flutter)
	+ [1.5 Before You Begin – ScopedModel in Flutter](#Before_You_Begin_8211_ScopedModel_in_Flutter)
	+ [1.6 ScopedModel in Flutter](#ScopedModel_in_Flutter)
	+ [1.7 ScopedModelDescendant](#ScopedModelDescendant)
		- [1.7.1 ScopedModel.of](#ScopedModelof)
	+ [1.8 Other Available Options to perform State Management](#Other_Available_Options_to_perform_State_Management)
		- * [1.8.0.1 Redux](#Redux)
			* [1.8.0.2 BLoC / Rx](#BLoC_Rx)
			* [1.8.0.3 MobX](#MobX)
# State Management in Flutter | Everything you need to know

[State Management](https://androidmonks.com/state-management-flutter/) in Flutter is looking at a problem from a different angle. With the rise in Declarative style of programming, Flutter has also adapted that to its framework. State Management involves Declarative approach to passing data between Screens(Widgets).

In this tutorial, we will look at all the important Concepts to successfully pass data between screens. Even though Navigation & Routing are used to communicate between any 2 Screens(Widgets), Flutter State Management is similar to shared preferences in Android. The data can be shared across multiple Screens/Widgets alike.

## State Management – Declarative Style – Overview

Before beginning to understand [State Management](https://androidmonks.com/state-management-flutter/) better, you must understand that the Flutter and Dart are different from the conventional programming languages. This has been iterated right from the beginning. The whole concept of writing a Declarative style of code is to reduce the burden on the developer.

State Management in Flutter is very evident in this case. It completely modifies the approach of looking at building UI.


> In flutter, it is ok to rebuild an entire UI from Scratch.
> 
> 

From the Flutter Docs, you get the following ![A mathematical formula of UI = f(state). 'UI' is the layout on the screen. 'f' is your build methods. 'state' is the application state.](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![A mathematical formula of UI = f(state). 'UI' is the layout on the screen. 'f' is your build methods. 'state' is the application state.](https://flutter.dev/assets/development/data-and-backend/state-mgmt/ui-equals-function-of-state-54b01b000694caf9da439bd3f774ef22b00e92a62d3b2ade4f2e95c8555b8ca7.png)

What this means is that you can build a UI from the application state. However, the entire UI is created and it is ok to do so.

Take the example of clicking a simple Button and changing a text. This action triggers a complete redrawing of the UI based on the new state of just one widget. This means that the entire Tree(Everything in Flutter is a widget and these widgets are arranged in a Tree structure). The tree is reconstructed, and it is ok to do so. This type of programming requires a different approach to managing the State. Because every time you make a change, the states get refreshed.

We will be looking at important states and the ways in which the App can be constructed and states maintained based on it.

## Two important States – Ephemeral and App State

There are a lot of states that you might have to manage, like fonts, assets, color, values, etc. In the case of Flutter, you need to understand that, you don’t even manage some state (like textures). The framework handles those for you. So a more useful definition of the state is “whatever data you need in order to rebuild your UI at any moment in time”.

**The state that you do manage yourself can be separated into two conceptual types: ephemeral state and app state.**

#### Understand Ephemeral State

Starting with the explanation from the Flutter doc, “Ephemeral state (sometimes called *UI state* or *local state*) is the state you can neatly contain in a single widget”.

If you are not understanding what this really means, just think of these as local variables in an application. As simple as it sounds, this is exactly what the Ephemeral state is. The user needn’t worry about accessing this value from any other widget.

Drawing the same example as given in the doc,


```
import 'package:flutter/material.dart';

void main()
{
  runApp(MaterialApp(
    title: 'Androidmonks',
    home:SampleWidget() ,
  ));
}

class SampleWidget extends StatefulWidget {
  @override
  \_SampleWidgetState createState() => \_SampleWidgetState();
}

class \_SampleWidgetState extends State<SampleWidget> {
  int \_index = 0;

  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(
      currentIndex: \_index,
      onTap: (newIndex) {
        setState(() {
          \_index = newIndex;
        });
      },
    );
  }
}
```
Here, it is pretty clear that only the SampleWidget is going to make use of the Variable \_index. No other widget will require using this \_index value whatsoever.

**This type of state can be mostly managed using a Stateful Widget itself. These states are called as the Ephemeral States**

#### Understand App State

App state just like you might have guessed requires interchangeable or accessible across Widgets. The same \_index variable if accessed by another Widget is called as an App State.

The primary use of the App state is,

* User preferences
* Login info
* Notifications in a social networking app
* The shopping cart in an e-commerce app
* Read/unread state of articles in a news app

These are some examples. to make it even clearer to you. Continuing on, we will be looking at techniques or methods to do these interchangeable states across widgets.

The [State Management](https://androidmonks.com/state-management-flutter/) in Flutter does not have a clear cut rule to make use of either the Ephemeral State or the App state. It is quite flexible and can be interchangeably used also. There are a lot of applications that use only the App state to create the entire application and vice-versa.

## Creating App State Management

To understand how the state can be better managed, we will have to go through an Example that explains how to really access a State.

As we discussed above, the States gets refreshed and everything is constructed from scratch. The App does not contain any value to itself as soon as it gets refreshed. In order to understand this better, consider the example below.

![Sample Widget structure](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Sample Widget structure](https://androidmonks.com/wp-content/uploads/2019/03/Untitled-Diagram.png) **Sample Widget structure** 

It is evident that, if you want to change the state of Widget B1, you cannot hold the state information on it. (If you remember the App state example). There is one way you can change the state of the Widget B1 externally, it is by holding it above that Widget. That is Widget B will hold the state of Widget B1 and it can change the state externally.

This is what the Flutter recommends, push the state to the top of the Widget Tree and change it. There is a simple example code below to make it clearer.

**From Widget B**


```
// GOOD
void myTapHandler(BuildContext context) {
  var Model = WidgetB!Model(context);
 Model.add(item);
}
```

```
// GOOD
Widget build(BuildContext context) {
  var Model = WidgetB1Model(context);
  return Widget(    
   );
}
```
What the above code example means is that we are giving the entire UI one path, which is through the Constructor callback to re-create the entire UI. This will ensure that you can control how the Widget changes when recreated from the above.

This is a good practice of storing the state above the Widget and recreating when required. **What happens, when the user clicks on one item that is way too below, say for example Widget B3 and Widget C should be recreated**. This is not exactly feasible since a lot of Widgets are interlinked. It will create a lot of Spaghetti code if multiple Widget creates each other here and there.

Thus, Flutter introduces the concept of **scoped\_model. There is the concept of widgets to do this also(InheritedWidget etc), but scoped\_model is different.**Looking at an approach to store and access states across the Widget tree without depending on any other Widget.

To understand it clearly, you will have to understand 3 different Models in Flutter.

* Model
* ScopedModel
* ScopedModelDescendant

We will see what each model does, and how to create and use it in our Flutter Application.

## Model in Flutter

To start with **Model in Flutter**, **it is similar to the concept of Model in Java.** Like any other OOP’s language, the Model acts as a good interface to what data is going to be used and provides the interface to access the same across Widgets.

But it does not stop there, Model in flutter goes a step further and provides the Interface to change a Widget UI with the state that it holds. To understand it clearly, check the example below.


```
class SampleModel extends Model {
  /// Internal, private state of Some List of items.
  final List<Item> \_items = [];

  /// An unmodifiable view of the items in the that cannot be changed.
  UnmodifiableListView<Item> get items => UnmodifiableListView(\_items);

  /// The current length of all the items in the List.
  int get length => \_items.length;

  /// Adds [item] to list. This is the only way to modify the list from outside.
  void add(Item item) {
 \_items.add(item);
    // This call tells [Model] that it should rebuild the widgets that
    // depend on it.
 notifyListeners();
  }
}
```
I have taken the example given in the doc, made it a bit more generic. We will try to understand what each part here does. Firstly, you can pick out the SampleModel class which extends the Model class.

Initially, the Model class gives the interface to do a lot of things. You can hold the current list of items(for our example). The current state of the length of this list. And additionally lets you create a UnmodifiableListView(More on that later, but for now just understand that it is a simple stream of listview data that is stored).

Most importantly, it lets you create any method callback which in turn calls the notifyListeners() method. This provides the only way to make changes to the Widget from outside. The add() lets you add the item that is passed to the List and notifyListeners reflects the change on the list. Models as such do not provide a lot of functionality unless it is used with ScopedModel and ScopedModelDescendant.

Check both the Classes below.

## Before You Begin – ScopedModel in Flutter

Before starting with understanding scoped\_model in Flutter. Do not forget to make modifications to the pubspec.yaml. We have seen a lot about it in the Initial Tutorial post on, [How to start programming in Flutter](https://androidmonks.com/first-flutter-app/)!. Add the following in the pubspec.yaml file just as mentioned below.


```
dependencies:
  flutter:
    sdk: flutter

  scoped\_model: ^1.0.0
```
Make sure, that the scoped\_model is under dependencies and not under flutter(Be aware of the indentation).

Once done, it is time to add the following in your **main****.dart** file.

**import ‘package:scoped\_model/scoped\_model.dart’;**

Time to start learning about the ScopedModel in Flutter

## ScopedModel in Flutter

According to the docs, “**ScopedModel** is the widget that provides an **instance of to Model its descendants**“.

ScopedModel takes in 2 parameters(Can also take in nested parameters). They are

* model
* child

The model attribute is going to hold the Model that we created for changing one widget.

The child is going to denote, which is the parent Class where this state has to be maintained.

Like we saw in the above sections, it is clear where it should be placed. Above the widget which requires a Change from an external Widget. Let’s say, for example, Widget B1 has to change the Widget C. Since. we do not have to place it above than necessary, we can look at placing it just above the widget C. This happens to be the base Widget itself.

Therefore, we will name the Child to be our Example App or from the tree the Widget A.

So, we can place the ScopedModel on top of it like given below,


```
void main() {
  final sampleModel = Model();

 runApp(
    ScopedModel<WidgetC>(
 model: sampleModel,
 child: WidgetA(),
    ),
  );
}
```
Note that we’re creating`ScopedModel<WidgetC>`. The **scoped\_model** package relies on types to find the right model, and the part`<WidgetC>` makes it clear what type we’re providing here.

In order to provide a nested model, you can do so by giving the following code.


```
ScopedModel<SomeOtherModel>(
  model: myOtherModel,
  child: ScopedModel<WidgetC>(
    model: sampleModel,
    child: WidgetA(),
  ),
)

```
## ScopedModelDescendant

Now that `WidgetC` is provided to widgets in our app through the `ScopedModel<WidgetC>` declaration at the top, we can start using it.

This is done through the `ScopedModelDescendant` widget.

**ScopedModelDescendant** **Widget** takes in a **List of Widget** for which change has to be made and provides a **builder** attribute.

Builder attribute takes in 3 parameters. The **context, child, modelName**(In this example, the sampleModel variable).

Check the example below.


```
return ScopedModelDescendant<CartModel>(
 builder: (context, child, sampleModel) {
    return Text("Total length: ${sampleModel.length}");
  },
);
```
Builder is a function that is called whenever the model changes. (In other words, when you call `notifyListeners()` in your model, all the builder methods of all the corresponding `ScopedModelDescendant` widgets are called.) All we need to do is just follow the flow and create our ScopedModelDescendant as given below.


```
return ScopedModelDescendant<WidgetC>(
 builder: (context, child, cart) => Stack(
 children: [
          // Build the expensive widget here. 
 child: SomeExpensiveWidget(),
          Text("Total price: ${cart.totalPrice}"),
        ],
      ),
  
);
```
Also, note that,

“It is best practice to put your ScopedModelDescendant widgets as deep in the tree as possible. You don’t want to rebuild large portions of the UI just because some detail somewhere changed”.

Another important thing to note is that,


> Try to minimise the rebuilding of huge trees from bottom up. Instead rebuild only the portions that are required
> 
> 

By the above line, we mean that. Try to rebuild the UI as minimal as possible. If eveytime you refresh the UI from the Top of the Tree, it is going to be very costly. Instead, use the ScopedModelDescendant wherever required, and use the child attribute to restrict the Non-UI refreshable widget part as it is.

Check out the Below Code comparison, as given in the Flutter DOC.


```
// DON'T DO THIS
return ScopedModelDescendant<WidgetC>(
 builder: (context, child, scopedModel) {
    return HumongousWidget(
      // ...
 child: AnotherMonstrousWidget(
        // ...
 child: Text('Total length: ${scopedModel.length}'),
      ),
    );
  },
);
```
Instead:


```
// DO THIS
return HumongousWidget(
  // ...
 child: AnotherMonstrousWidget(
    // ...
 child: ScopedModelDescendant<WidgetC>(
 builder: (context, child, scopedModel) {
        return Text('Total price: ${scopedModel.totalPrice}');
      },
    ),
  ),
);
```
### ScopedModel.of

Great Job!! Learning the 3 important **scoped\_model** properties. There is another part of ScopedModel which is the need to just access values, without the need for refreshing the UI entirely.

Example, we might require the length attribute of the **Model**which we built above. In that case, the use of ScopedModel.of is important as we can take the construction of data forward.

We could use `ScopedModelDescendant<WidgetC>` for this, but that would be wasteful. We’d be asking the framework to rebuild a widget that doesn’t need to be rebuilt.

For this use case, we can use **ScopedModel.of**.


```
ScopedModel.of<Widget>(context).add(item);
```
Using the above line in a build method will not cause this widget to rebuild when **notifyListeners** is called.

This tiny use of ScopedModel.of can be useful in a lot of situations.

## Other Available Options to perform State Management

If you are from any other React/Declarative background, the Flutter might not look like its offering much with the state\_models(Infact, state\_model are very much enough to build any complex application. The trick is to keep the states as simple as possible and keep building on the tree). There are a lot of external packages that is supported inside Flutter.

Some of them are given below.

* #### [Redux](https://pub.dartlang.org/packages/flutter_redux)
* #### [BLoC / Rx](https://felangel.github.io/bloc)
* #### [MobX](https://mobx.pub/getting-started)

 

*Note: All examples shown above are derived and modifed from the base example that is present in the Flutter DOC. There seemed to be no other better example to explain the situation without breaking the core concept. Hence, sticking with the examples and explaining the concept in detail.*

Drop in any comments you might have in the comment section below.

***“Happy Coding”***

[Tweet](https://twitter.com/intent/tweet?text=State+Management+in+Flutter+-+Explained++Androidmonks&url=https%3A%2F%2Fandroidmonks.com%2Fstate-management-flutter%2F)Pin1[Share1](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fstate-management-flutter%2F)2 Shares Categories [Android](https://androidmonks.com/category/android/), [Flutter](https://androidmonks.com/category/flutter/) [Leave a comment](https://androidmonks.com/state-management-flutter/#respond) Post navigation[ListTile Widget in Flutter | Androidmonks](https://androidmonks.com/listtile-widget-flutter/)[Getting Data from Internet in Flutter | Androidmonks](https://androidmonks.com/data-from-internet-flutter/)### Leave a Comment [Cancel reply](/state-management-flutter/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"1598","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "cc5bc2851c";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "1598";var swpClickTracking = false; 