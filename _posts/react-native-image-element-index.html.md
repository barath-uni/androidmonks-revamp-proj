---
title: '# React Native – Create Image Element in 2 Minutes'
description: 'React Native Image Element is useful to show either a File Image'
date: '2020-01-27'
modified_date: '2020-01-27'
image: '/assets/images/posts'
---
# React Native – Create Image Element in 2 Minutes

 [January 27, 2020](https://androidmonks.com/react-native-image-element/ "5:25 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 React Native – Create Image Element in 2 Minutes](#React_Native_8211_Create_Image_Element_in_2_Minutes)
	+ [1.1 React Native Image Element – Basics](#React_Native_Image_Element_8211_Basics)
	+ [1.2 Network Image in React Native App](#Network_Image_in_React_Native_App)
	+ [1.3 Image String in React Native App](#Image_String_in_React_Native_App)
	+ [1.4 File Image in React Native App](#File_Image_in_React_Native_App)
	+ [1.5 React Native Image Element – Points to Remember](#React_Native_Image_Element_8211_Points_to_Remember)
	+ [1.6 Conclusion](#Conclusion)
## React Native – Create Image Element in 2 Minutes

Images are really easy to include in your React Native app. In this article, we will see about including 3 different sources of image,

* Image from a Network, usually accessibile through an URL
* b64 Image string, in other words images stored in a DB
* Image from a File Location. Usually stored inside the project or some file location

All these can be easily included into your application using the Image object available as part of the ‘react-native’ Component. To know more about that, read on the rest of this article.

Before we begin, if you are new to React Native, take a look at the [basics of React Native and other React Native articles](https://androidmonks.com/category/react-native/) to ramp you up faster.

### 

### React Native Image Element – Basics

To start this tutorial, the first thing you have to learn about is the use of the **Image**element in your React Native Component. Images can be of any type as mentioned above. React Native handles these types of image with the help of the most important attribute **source.**

The source of the image could be either of the three

* Network Image – Directly provide the URL through the **uri inside source**
* Local Image/File Image – Provide the File location using the **require()**call inside the source attribute of the Image
* Database or B64 image – **uri is still used. But mark the image with the ‘data:’ tag to denote a b64 encoded string**

For all the above methods, the React Component is going to Look like,


```
import React, { Component } from 'react';
import {StyleSheet,Text, Image ,TouchableOpacity, View} from 'react-native';
export default function App()
{
return(
<View>
<Image style={{height:150, width:150}}
source={{uri:'NETWORK LOCATION TO THE IMAGE'}}
</Image>
</View>
);
}

```
With the above template Component, we will construct some useful examples below to make use of the Network Image, File Image and even the b64 image.

### Network Image in React Native App

The easier of the image is to load any image from a network location. There are multiple use for this,

* Network images do not take a lot of space inside the project.
* Bulkier Apps are mainly because of uncompressed images.
* With faster data connection and unlimited amount of internet access, loading from a network location is the optimal solution

In order to load an Image into the React Native application, replace the **provide the network location of an image inside the ‘uri;’ of the source attribute.** The example below illustrates the same.


```
import React, { Component } from 'react';
import {StyleSheet,Text, Image ,TouchableOpacity, View} from 'react-native'; 
export default function App() 
{ 
return(
<View> 
<Image style={{height:150, width:150}} 
source={{uri:'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
</Image>
</View>
 ); 
}

```
![Network Image in a React Native App](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Network Image in a React Native App](https://androidmonks.com/wp-content/uploads/2020/01/Screenshot-from-2020-01-13-08-09-01.png) **Network Image in a React Native App**### Image String in React Native App

The next is to show a Image encoded String or the b64 String which can be usually saved as part of the Database. **Note:It is recommended to save images of small size or lower DPI in the database. Encoding an image usually creates String upto 2000 characters or more.** In the below example you can create a React Native Application which fetches a sample Encoded string and loads it in the App


```
import React, { Component } from 'react';
import {StyleSheet,Text, Image ,TouchableOpacity, View} from 'react-native';
export default function App()
{
const [value, onChangeText] = React.useState("Default Value")
return(
<View>
<Image style={{height:150, width:150}}
source={{uri:'data:image/png;base64,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'}}>

</Image>
</View>
);
}

```
### 

The above example creates an Application that looks like,

![Database Image/String Image in React Native ](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Database Image/String Image in React Native ](https://androidmonks.com/wp-content/uploads/2020/01/Screenshot-from-2020-01-13-08-09-15.png) **Database Image/String Image in React Native**### File Image in React Native App

Next up is loading a File Image into your React Native App. The reason for loading a File Image is usually because it comes bundled as part of the project. It could be a simple Icon to a massive background wallpaper. **Note: Try to avoid loading a File Image as part of the Project itself. It takes a lot of space and makes the app bulkier.** Times when the File Image has to be shown to the user, **make use of the require() call**inside the **‘uri:’**

Code to show a File Image in the React Native App

 


```
import React, { Component } from 'react';
import {StyleSheet,Text, Image ,TouchableOpacity, View} from 'react-native';
export default function App()
{
const [value, onChangeText] = React.useState("Default Value")
return(
<View>
<Image style={{height:150, width:150}}
source={{uri:'require(/assets/file.png'}}>
</Image>
</View>
);
}

```
### 

Note that the **file is placed inside a folder called assets and is named file.png.** This will load the file on to the App like below,

![React Native File Image Example ](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![React Native File Image Example ](https://androidmonks.com/wp-content/uploads/2020/01/Screenshot-from-2020-01-13-08-08-46.png) **React Native File Image Example**### React Native Image Element – Points to Remember

One of the important points to remember as part of the React Native Image Element is that,

* Remember to give a **height and width for your Network or Data images. [Styling](https://androidmonks.com/react-native-styling/) is important with Image.**This is mandatory as the React Native Image element is not capable of recognising the size of the Image that gets loaded. Instead it is up to the developer to mark the height and width properly.
* Use the ‘resizeMode’ attribute inside the image to make sure auto resizing happens when the app is scaled.
* Keep your Image size smaller. This helps in loading it faster.

After writing down all the important steps to follow, i realised that there are some common **React Native mistakes**that developers do while loading the image in particular.

Check out the image Below for your reference.

![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2020/01/Screenshot-from-2020-01-13-08-09-35.png)

### Conclusion

Images are super useful for any application. React Native in particular handles different stream of images using a single Element itself. This makes it super easy to write and scale your application faster.

Drop your comments below!

[Tweet](https://twitter.com/intent/tweet?text=React+Native+-+Create+Image+Element+in+2+Minutes&url=https%3A%2F%2Fandroidmonks.com%2Freact-native-image-element%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Freact-native-image-element%2F)0 Shares Categories [React Native](https://androidmonks.com/category/react-native/) [Leave a comment](https://androidmonks.com/react-native-image-element/#respond) Post navigation[How to get User Input in React Native – TextInput](https://androidmonks.com/react-native-textinput/)[WebDriver Automation With Dart – Automating LinkedIn Post](https://androidmonks.com/dart-webdriver-automation-linkedin/)### Leave a Comment [Cancel reply](/react-native-image-element/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"2299","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "d0f8c9f8a6";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "2299";var swpClickTracking = false; 