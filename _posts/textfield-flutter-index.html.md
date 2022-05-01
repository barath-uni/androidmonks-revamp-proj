---
title: '# TextField in Flutter | Input Text Values | Androidmonks'
description: 'TextField in Flutter is used to get Text/Input values from the end User. The callbacks and other properties to get this data effectively is discussed.'
date: '2019-03-09'
modified_date: '2019-11-02'
image: '/assets/images/posts'
---
# TextField in Flutter | Input Text Values | Androidmonks

 [November 2, 2019March 9, 2019](https://androidmonks.com/textfield-flutter/ "1:40 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 TextField in Flutter | Input Text Values in Android Studio](#TextField_in_Flutter_Input_Text_Values_in_Android_Studio)
	+ [1.1 TextField in Flutter – Basics](#TextField_in_Flutter_8211_Basics)
	+ [1.2 TextField in Flutter – Understanding Callbacks](#TextField_in_Flutter_8211_Understanding_Callbacks)
	+ [1.3 TextField – Important Properties](#TextField_8211_Important_Properties)
		- * [1.3.0.1 autocorrect](#autocorrect)
			* [1.3.0.2 autofocus](#autofocus)
			* [1.3.0.3 counter](#counter)
			* [1.3.0.4 cursorColor](#cursorColor)
			* [1.3.0.5 decoration](#decoration)
			* [1.3.0.6 enabled](#enabled)
			* [1.3.0.7 maxLength](#maxLength)
			* [1.3.0.8 obscureText](#obscureText)
			* [1.3.0.9 keyboardType](#keyboardType)
			* [1.3.0.10 style](#style)
			* [1.3.0.11 textInputAction](#textInputAction)
		- [1.3.1 Important Callbacks include](#Important_Callbacks_include)
			* [1.3.1.1 onChanged](#onChanged)
			* [1.3.1.2 onSubmitted](#onSubmitted)
	+ [1.4 Conclusion](#Conclusion)
## TextField in Flutter | Input Text Values in Android Studio

Applications are not always about showing content to the user, it also requires getting content from them. [TextField in Flutter](https://androidmonks.com/textfield-flutter/) is an important widget as it helps the User enter Text Values. In Android, there is the use of EditText and the values can be entered through that. It can take in any type of Value(Date, Number etc) and the same is true with [TextField in Flutter](https://androidmonks.com/textfield-flutter/).

In this tutorial, we will see how to create a simple TextField Widget in Flutter and use it to get values from the user. We will also see another Widget called Forms that use the TextField extensively.

### TextField in Flutter – Basics

Using the [**TextField**](https://androidmonks.com/textfield-flutter/) widget is pretty straight forward. Call the **TextField**class and the Widget gets rendered on the App. There are however some important requirements to be looked after to make use of the TextField Widget completely. We will look at these requirements in detail below.

Sample TextField Widget,


```
Scaffold(
  appBar: AppBar(title: Text("AndroidMonks"),),
  body: Column(children: <Widget>[
    TextField()
  ],),
);
```
Simple Call of the TextField Constructor creates the required Input Field. This creates a simple Editable Text Field like,

![TextField](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![TextField](https://androidmonks.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-06-at-10.47.25-PM.png) **TextField**### TextField in Flutter – Understanding Callbacks

The text field calls the onChanged callback whenever the user changes the text in the field. If the user indicates that they are done typing in the field (e.g., by pressing a button on the soft keyboard), the text field calls the onSubmitted callback.

To control the text that is displayed in the text field, use the controller. For example, to set the initial value of the text field, use a controller that already contains some text. The controller can also control the selection and composing region (and to observe changes to the text, selection, and composing region).

By default, a text field has a decoration that draws a divider below the text field. You can use the [decoration](https://docs.flutter.io/flutter/material/TextField/decoration.html)property to control the decoration, for example by adding a label or an icon. If you set the decoration property to null, the decoration will be removed entirely, including the extra padding introduced by the decoration to save space for the labels.

This can be seen when the TextField is clicked from the above code example also.

### TextField – Important Properties

Some of the important Properties of the [TextField](https://androidmonks.com/textfield-flutter/) is listed below.

##### **autocorrect**

As the attribute name is self-explanatory, it auto corrects the text that is being entered by the User. Takes in a boolean value, and is set to **True** by default. To switch the autocorrect feature off, set the attribute to false like given below.


```
TextField(
  autocorrect: false,
)
```
##### **autofocus**

AutoFocus is another attribute which takes in a Boolean value. It lets the App automatically focus on this Field. If it is set to false, only when the user clicks on it will it be focused.

By default the value is true, and to turn it off set autofocus to false like given below,


```
TextField(
  autofocus: false,
)
```
##### **counter**

A very important part of the TextField widget is the use of the counter controller The Counter is important as it takes in a value of **TextEditingController class.**This is important because the controller can perform the adding a listener to it. This will enable the Stateful widget from changing or finding the value that the User is entering.

Even though there are ways to get the value that the user is going to enter, which we will be seeing in the below properties. This way is very conventional and is how the core is constructed.

To understand how the code works, you will have to create a simple **[Stateful Widget](https://androidmonks.com/first-flutter-app/) and make use of the [Scaffold widget](https://androidmonks.com/scaffold-flutter/) as the State widget for the App.**

This is how the app looks like

![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-08-at-10.19.02-PM.png)

This is how the final output in the console looks like,![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-08-at-10.19.06-PM.png)

##### **cursorColor**

Simple use of cursorColor is to update the color of the blinking cursor on the TextField when the user tries to enter a value.

The attribute takes in the value of the **Colors class** and can be set to any available colors. Check the below code to understand how the color is set.


```
TextField(
  cursorColor: Colors.pinkAccent,
)
```
![Setting CursorColor in TextField](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Setting CursorColor in TextField](https://androidmonks.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-08-at-10.22.12-PM.png) Setting CursorColor in TextField##### **decoration**

TextField decoration involves the use of additional Text Decoration like adding icons to the TextField. To achieve this, add the decoration attribute to the Widget. It takes in the value of the InputDecoration class.

Find a code sample below to add decoration to the TextField Class.


```
TextField(
  decoration: InputDecoration(icon: Icon(Icons.access\_alarms)),
)
```
![Adding Decoration to the TextField](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Adding Decoration to the TextField](https://androidmonks.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-08-at-10.31.17-PM.png) **Adding Decoration to the TextField**##### **enabled**

Lets the user know if the TextField is going to take in Values or not. Particularly useful when the user has to input a data but is restricted unless another action is performed.

Example scenario includes filling up a form unless the Name is filled properly, the email cannot be entered.

Enabled takes up a boolean value and can be changed dynamically. When the enabled attribute is set to false, a Grey field appears indicating that the TextField does not take value. Find the code example below.


```
TextField(
  decoration: InputDecoration(icon: Icon(Icons.access\_alarms)),
  enabled: false,
)
```
![Setting enabled to false](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Setting enabled to false](https://androidmonks.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-08-at-10.34.18-PM.png) **Setting enabled to false**##### **maxLength**

Just as the name suggests, this attribute controls the Max Characters allowed in the TextField. This attribute creates a simple character counter to the right bottom corner and shows the character count as the user types.

To see the maxLength attribute in action, find the code below,


```
TextField(
  decoration: InputDecoration(icon: Icon(Icons.access\_alarms)),
  maxLength: 5,
)
```
This lets the App look like,

![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-08-at-10.41.55-PM-1.png) **Adding a MaxLength attribute**##### **obscureText**

This attribute lets the user hide the text that is being edited. Eg, for passwords, the Text is replaced by bullets. This is possible by setting the obscureText attribute to true.

Sample code example,


```
TextField(
  decoration: InputDecoration(icon: Icon(Icons.access\_alarms)),
  obscureText: true,
)
```
![obscureText attribute](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![obscureText attribute](https://androidmonks.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-08-at-10.50.53-PM.png) **obscureText attribute**##### **keyboardType**

A TextField allows you to customize the **type of keyboard** that shows up when the TextField is brought into focus. We change the **keyboardType**property for this.

The types are:

1. **TextInputType.text**(Normal complete keyboard)
2. **TextInputType.number**(A numerical keyboard)
3. **TextInputType.emailAddress**(Normal keyboard with an “@”)
4. **TextInputType.datetime** (Numerical keyboard with a “/” and “:”)
5. **TextInputType.multiline**(Numerical keyboard with options to enabled signed and decimal mode)

To include the Keyboard type, below is a code sample.


```
TextField(
  decoration: InputDecoration(icon: Icon(Icons.access\_alarms)),
  keyboardType: TextInputType.datetime,
)
```
This sets the keyboard input like,

![KeyboardInputType](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![KeyboardInputType](https://androidmonks.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-09-at-10.20.20-AM.png) **KeyboardInputType**##### **style**

This attribute lets the style of the Text to be changed. It takes in the value of TextStyle class and can be modified accordingly.

The sample code to change the text that is being inserted in given below,


```
TextField(
  decoration: InputDecoration(icon: Icon(Icons.access\_alarms)),
  style: TextStyle(fontWeight: FontWeight.bold, color: Colors.purpleAccent),
)
```
![style attribute of the TextField](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![style attribute of the TextField](https://androidmonks.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-09-at-10.23.14-AM.png) **style attribute of the TextField**##### **textInputAction**

Changing textInputAction of the TextField lets you change **the action button of the keyboard** itself.

To understand what this attribute does, you can try the below code example,


```
TextField(
  decoration: InputDecoration(icon: Icon(Icons.access\_alarms)),
  textInputAction: TextInputAction.next,
)
```
This leads to the qwerty keyboard which will have the **next** button instead of the usual **Done** button.

![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://cdn-images-1.medium.com/max/1600/1*Lc7TmV5BlSAdE7a9PKeCYw.png)

#### 

**Note: There are some actions that will not work for Android. Read the docs clearly to understand what the allowed actions are.**

#### Important Callbacks include

##### **onChanged**

OnChanged is an important callback that gets fired whenever there is a Text that is being inputted by the user.

The onChanged will record each character that is being pressed in the Application. So, it is important to make use of this only during that scenario. If the requirement is to take the entire word that is entered, you can take a look at the callbacks present below.

Code example for the onChanged is present below,


```
TextField(
  decoration: InputDecoration(icon: Icon(Icons.access\_alarms)),
  onChanged: (text){
    print(text);
  }
```
![Using onchanged callback](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Using onchanged callback](https://androidmonks.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-09-at-6.10.05-PM.png) **Using onchanged callback**![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-09-at-6.09.56-PM.png)

##### **onSubmitted**


```
TextField(
  decoration: InputDecoration(icon: Icon(Icons.access\_alarms)),
  onSubmitted: (text){
    print(text);
  }
```
onSubmitted is used, only when the Done button is clicked, the text is being printed in the console. Or the callback fires only when the Submit button is clicked.


```
TextField(
  decoration: InputDecoration(icon: Icon(Icons.access\_alarms)),
  onSubmitted: (text){
    print(text);
  },
)
```
![onSubmitted usage in TextField](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![onSubmitted usage in TextField](https://androidmonks.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-09-at-6.19.57-PM.png) **onSubmitted usage in TextField**![Difference in console output when using the onSubmitted callback](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Difference in console output when using the onSubmitted callback](https://androidmonks.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-09-at-6.20.38-PM.png) **Difference in console output when using the onSubmitted callback**### Conclusion

TextField can also be used as part of the **Form Widget** which creates a quick material design form on the Flutter App. To understand more about this, you can take a look at creating Forms in Flutter blog post.

However, the core part of the TextField includes the 2 different callbacks and how they can be used to get the data from the user. Integration with Firebase creates a very robust system of Data manipulation.

Drop in any comments you have in the comments section below.

***“Happy Coding”***

[Tweet](https://twitter.com/intent/tweet?text=TextField+in+Flutter++Input+Text+Values++Androidmonks&url=https%3A%2F%2Fandroidmonks.com%2Ftextfield-flutter%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Ftextfield-flutter%2F)0 Shares Categories [Android](https://androidmonks.com/category/android/), [Flutter](https://androidmonks.com/category/flutter/) [Leave a comment](https://androidmonks.com/textfield-flutter/#respond) Post navigation[Alert Dialog in Flutter with Example | Androidmonks](https://androidmonks.com/alerts-dialog-flutter/)[ListTile Widget in Flutter | Androidmonks](https://androidmonks.com/listtile-widget-flutter/)### Leave a Comment [Cancel reply](/textfield-flutter/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"1552","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "8b02ddc074";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "1552";var swpClickTracking = false; 