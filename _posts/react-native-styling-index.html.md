---
title: '# React Native Styling in 2 Minutes'
description: 'Styling in react native app is super simple. This article discusses the best ways and tips to create awesome styling in your react native app in 2 minutes.'
date: '2020-01-09'
modified_date: '2020-01-09'
image: '/assets/images/posts'
---
# React Native Styling in 2 Minutes

 [January 9, 2020](https://androidmonks.com/react-native-styling/ "3:15 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 React Native Styling in 2 Minutes](#React_Native_Styling_in_2_Minutes)
	+ [1.1 Basics of Styling](#Basics_of_Styling)
		- [1.1.1 Forming the Style Key, Value](#Forming_the_Style_Key_Value)
	+ [1.2 Styling Mistakes to Avoid](#Styling_Mistakes_to_Avoid)
	+ [1.3 React Native Inline Styling](#React_Native_Inline_Styling)
	+ [1.4 React Native StyleSheet Basics](#React_Native_StyleSheet_Basics)
	+ [1.5 Example Styling Application](#Example_Styling_Application)
## React Native Styling in 2 Minutes

React Native is an extremely powerful framework to build fast UI for Mobile Apps. Styling in React Native is very simple and can be done in 2 methods.

**Styling in React Native is really simple, either choose an inline styling option, passing the key and value directly to the ‘style’ property or choose StyleSheet and create cleaner styles for your Application. If the app size is bigger, it is advisable to choose the StyleSheet option to maintain and re-use the code easily. Styling can be done very easily with this simple guide.**

The article below takes into the assumption that, *You understand the basic syntax associated with creating, defining and understanding React’s Components, Props, and States!*

### Basics of Styling

One of the most important basics to remember when styling the React Native application is to choose between inline styling and using the StyleSheet component to do your work.

* Inline styling lets you define the style for the element on that Element’s ‘style’ props itself.
* StyleSheet creates an access to create multiple states for the StyleSheet and use it on the element.

If you are confused as to which one to choose, remember to **assess the size of the application, if the size is small then inline is probably going to be easy. The size of the application end up usually bigger than expected, in that case, choose the StyleSheet option mentioned in the next section.**

#### Forming the Style Key, Value

React Native is a framework that has been obtained from the React JS. You can find a lot of similarities to the Web programming constructs here(Javascript is obviously was invented for the web!). Similarly to create a simple Style property, remember to take the **key, value**pair from the web styling.

For example, your Style could be to set a font size of the Text to 20PX. **The CSS way of doing it** is to assign, **font-size: 20.** In **React Native**, the property is represented by **fontSize:20**

All the style that is possible in CSS can be used in ReactNative as well. **Note: There can be properties that do not follow the same syntax as mentioned above. We will see more about that in the coming up sections.**

### Styling Mistakes to Avoid

One of the most common styling mistakes that React Native beginners do is that, they try to go through the CSS approach of having one file for all styles and flood it with different styles. This is great for web development because it has been considered the standard.

React Native, however, does not care how the styling is placed at. Every Component is built reactively, and styles are applied on the Run time. The best practice here is to make sure the styles are modular, and only the common styles are globally present. This makes it easy to debug and maintain. In case a component is removed from the code base, the style associated with it also removed and no problem of having dead code lying in the code base.

![Common Styling Mistakes](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Common Styling Mistakes](https://androidmonks.com/wp-content/uploads/2020/01/Screenshot-from-2020-01-08-07-19-13.png) **Common Styling Mistakes**### React Native Inline Styling

To give inline styling to React Native elements, follow the syntax below. Assuming you are trying to color a simple Text Element, you can do,


```
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App: () => React$Node = () => {
return (
<Text style={{color:'red'}}>This is my first React Native Styling Tutorial!</Text>
);
};

export default App;
```
This produces a ‘Red’ Color text on the UI. **Note: You can add any number of style to the element, TEXT in this example, by separating it with ‘,’ inside the ‘{}’**

However, there are few places where Inline styling has to be avoided as discusses in the next section.

### React Native StyleSheet Basics

![Styling Basics](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Styling Basics](https://androidmonks.com/wp-content/uploads/2020/01/Screenshot-from-2020-01-08-07-19-37.png) **StyleSheet Basics**### 

Using a StyleSheet has got a lot of advantages, From the [React Native Docs](https://facebook.github.io/react-native/) itself,

***Performance of Stylesheet over inline styling***

* > *Making a stylesheet from a style object makes it possible to refer to it by ID instead of creating a new style object every time.*
> 
>
* > *It also allows to send the style only once through the bridge. All subsequent uses are going to refer an id (not implemented yet).*
> 
>

As given, the performance is a concern when inline styling is concerned. You can choose inline styling in places where there are fewer elements to style and using a StyleSheet is a bigger process. Other than that, always use StyleSheets. It makes your code cleaner and maintainable. **Another tip is to create a stylesheet per component and use one stylesheet for the entire app only to share the style across components. This makes it easy to change and maintain the different styles associated with components.**

Using StyleSheet is really simple in ReactNative. All you have to do is, import the **StyleSheet** class from the **react-native** component and you can start creating the objects easily. For example,


```
import React from 'react'; 
import {StyleSheet, Text, View} from 'react-native'; 
const style = StyleSheet.create({});
```
This is enough to create a style object which can then be used inside the element.

### Example Styling Application


```
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App: () => React$Node = () => {
return (
<Text style={style.textStyle}>This is my first React Native Styling Tutorial!</Text>
);
};

const style = StyleSheet.create({
textStyle:{
color: 'red',
fontWeight: 'bold',
fontSize: 34,
textAlign: 'center'
}
});

export default App;
```
 

![React Native Text Styling](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![React Native Text Styling](https://androidmonks.com/wp-content/uploads/2020/01/Screenshot-from-2020-01-08-07-18-50.png) **React Native Text Styling**There are a lot of different ways to style your ReactNative elements. See the following elements and components that create beautiful elements on the UI.

[Tweet](https://twitter.com/intent/tweet?text=React+Native+Styling+in+2+Minutes&url=https%3A%2F%2Fandroidmonks.com%2Freact-native-styling%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Freact-native-styling%2F)0 Shares Categories [React Native](https://androidmonks.com/category/react-native/) [Leave a comment](https://androidmonks.com/react-native-styling/#respond) Post navigation[Flutter and Rive – Creating Animated Buttons](https://androidmonks.com/flutter-rive-animated-buttons/)[React Native Lists in 2 minutes](https://androidmonks.com/react-native-lists/)### Leave a Comment [Cancel reply](/react-native-styling/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"2265","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "d0f8c9f8a6";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "2265";var swpClickTracking = false; 