---
title: '# How to get User Input in React Native – TextInput'
description: 'Getting User Input in the Form of Text in React Native is super easy by using the TextInput Element. This article discusses all the info with an example app'
date: '2020-01-17'
modified_date: '2020-01-17'
image: '/assets/images/posts'
---
# How to get User Input in React Native – TextInput

 [January 17, 2020](https://androidmonks.com/react-native-textinput/ "3:39 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 How to get User Input in React Native | 2 minute Tutorial](#How_to_get_User_Input_in_React_Native_2_minute_Tutorial)
	+ [1.1 Importing the TextInput Element](#Importing_the_TextInput_Element)
	+ [1.2 TextInput – Basics](#TextInput_8211_Basics)
	+ [1.3 Properties of TextInput Element](#Properties_of_TextInput_Element)
	+ [1.4 TextInput Example Application](#TextInput_Example_Application)
	+ [1.5 TextInput Styling](#TextInput_Styling)
	+ [1.6 Conclusion](#Conclusion)
## How to get User Input in React Native | 2 minute Tutorial

In React Native, getting the user data is really easy by making use of the InputText element. TextInput comes with the ‘react-native’ package and can be directly imported into your app.js and created.

**TextInput can be used to get the user input by providing an Input Box on the UI. The primary attribute of TextInput is the ‘value’ which takes the initial value of the Input Box and the onChangeText to obtain the change in text/the user input text every keystroke. It can then be stored inside a variable and used throughout the application.**

In this article, we will make use of the React16.8 standard Hooks and try to store the user input value into a variable every-time the value changes. Read on to see how this is done.

### Importing the TextInput Element

Importing TextInput is possible as it resides as part of the ‘react-native’ class. Directly call,


```
import {TextInput} from 'react-native';
```
We are good to proceed with the TextInput element by including that inside the **<View>**

### **TextInput – Basics**

If you want to get the example application, it is at the end of this article, however, before you get there make sure you understand what Hooks really do.

There are two ways to get the user input by making use of the TextInput element.

* Store the user input inside a State Variable
* Store the user input by subscribing to a React Hook

We are following the Hook method because it is really easy. If you are not familiar with the concept of Hooks, take a look at this video before proceeding further.

### Properties of TextInput Element

In React Native, you can call the TextInput element and provide 3 different properties.

* **onChangeText – The most important property where the data gets stored. Every user keystroke is continuously fired inside this callback.**
* **value –** This is to show the user a data inside the Input Box. Usually, whatever is coming out of the onChangeText is given bak to the value.
* **onSubmitEditing** – This callback gets fired when the user hits the enter button after entering the data in the Input Box
* **onFocus –**When the user clicks on the Input Box, or in other words brings the Input Box into focus, this callback gets fired.

The below picture summaries all the required concepts to use the Text Input element in React Native

![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2020/01/Screenshot-from-2020-01-12-16-59-32.png)

### TextInput Example Application

To create a simple Text Input in your React Native application, check the code below.


```
import React, { Component } from 'react';
import {Text, TextInput, View} from 'react-native';

export default function App()
{
const [value, onChangeText] = React.useState("Default Value")
return(
<View>
<Text>Input your value</Text>
<TextInput style={{borderWidth:2, borderColor:'black'}}
onChangeText={text=>onChangeText(text)}
value={value}>
<Text>The value entered by the user is {value}<Text>
</View>
);
}
```
![Sample TextInput](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Sample TextInput](https://androidmonks.com/wp-content/uploads/2020/01/Screenshot-from-2020-01-12-16-57-03.png) Sample TextInput### TextInput Styling

Styling the Text Input is not complex. If you are new around [Styling in React Native](https://androidmonks.com/react-native-styling/), read that article before proceeding. The primary style attribute that makes a difference with Text Input is the **border, borderWidth, borderColor**. Because, the Input Box is always going to be surrounded by an invisible border, but it is upto the developer to create the Border and make it look neat to the User.

After just adding some style and giving the Text also some Color, you get

![Sample TextInput](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Sample TextInput](https://androidmonks.com/wp-content/uploads/2020/01/Screenshot-from-2020-01-12-16-59-01.png) **Sample TextInput with Style**### Conclusion

TextInput element is really simple to use and effect to get **input from the user in react native**. Let me know if you have any cool styling options for your ReactNative Text Input!

[Tweet](https://twitter.com/intent/tweet?text=How+to+get+User+Input+in+React+Native+-+TextInput&url=https%3A%2F%2Fandroidmonks.com%2Freact-native-textinput%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Freact-native-textinput%2F)0 Shares Categories [React Native](https://androidmonks.com/category/react-native/) [Leave a comment](https://androidmonks.com/react-native-textinput/#respond) Post navigation[React Native Lists in 2 minutes](https://androidmonks.com/react-native-lists/)[React Native – Create Image Element in 2 Minutes](https://androidmonks.com/react-native-image-element/)### Leave a Comment [Cancel reply](/react-native-textinput/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"2269","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "5e9d84bb42";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "2269";var swpClickTracking = false; 