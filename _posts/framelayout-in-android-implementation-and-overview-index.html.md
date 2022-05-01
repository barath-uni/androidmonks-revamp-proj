---
title: '# FrameLayout in Android – Implementation and Overview'
description: 'FrameLayout In Android Tutorial - Implementation and Overview Android Monks FrameLayout in Android - Implementation and Overview Android programming'
date: '2018-08-18'
modified_date: '2018-08-19'
image: '/assets/images/posts'
---
# FrameLayout in Android – Implementation and Overview

 [August 19, 2018August 18, 2018](https://androidmonks.com/framelayout-in-android-implementation-and-overview/ "8:43 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 FrameLayout in Android – Implementation and Overview](#FrameLayout_in_Android_8211_Implementation_and_Overview)
	+ [1.1 Declaration:](#Declaration)
	+ [1.2 FrameLayout – Properties](#FrameLayout_8211_Properties)
	+ [1.3 FrameLayout – Implementation](#FrameLayout_8211_Implementation)
	+ [1.4 FrameLayout – Tips and Tricks](#FrameLayout_8211_Tips_and_Tricks)
## FrameLayout in Android – Implementation and Overview

FrameLayout is a simple and straight forward View that is used to hold a single child element inside it. It usually blocks a part  of the screen to display a single child [view](https://androidmonks.com/android-ui-layout-concepts-knowledge/). Android Docs, advise against using multiple child elements inside the Frame Layout because, it is not easy to control their positions for different screen sizes.

Sample Frame Layout Implementation

![Simple FrameLayout occupying the screen](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Simple FrameLayout occupying the screen](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-18-at-1.33.15-PM-277x300.png) Simple FrameLayout occupying the screenThe Frame Layout contains two views, a Image view and a Textview. The element that is placed last inside the Frame Layout comes at the top.

### **Declaration:**


```
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
android:layout\_width="match\_parent"
android:layout\_height="match\_parent"></FrameLayout>
```
 

### FrameLayout – Properties

The properties of Frame Layout are:

**android:id –**Gives a unique ID to the FrameLayout so that it can be accessed inside the activity if needed.

**android:foreground –**Allows to draw any **Drawable**over the content. Can take a color or any image also.

**android:foregroundGravity –**This allows gravity to be applied to the foreground drawable is present.

**android:measureAllChildren –**Boolean value, determines whether to measure all the children or those which are VISIBLE or INVISIBLE.

It is important to note that, the child views can be moved around using, only the

**android:layout\_gravity –**This can be CENTER, LEFT, RIGHT, TOP, BOTTOM.

### FrameLayout – Implementation

You will need to make use of the XML tag,


```
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
android:layout\_width="match\_parent"
android:layout\_height="match\_parent"
android:background="@color/colorAccent">
</FrameLayout>
```
![FrameLayout Blocks the entire screen](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![FrameLayout Blocks the entire screen](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-18-at-1.49.49-PM-207x300.png) FrameLayout Blocks the entire screenThere can be views inside it, to hold the child elements like below.


```
<?xml version="1.0" encoding="utf-8"?>

    <FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:background="@color/colorAccent">


    <ImageView
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:src="@drawable/qslogo"
        android:layout\_gravity="center"/>
    <TextView
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:text="Second View"
        android:textColor="#32f"
        android:textSize="25dp"
        android:layout\_gravity="center"
        />
    </FrameLayout>
```
This will hold the views like,

![Adding child elements in FrameLayout](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Adding child elements in FrameLayout](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-18-at-1.51.23-PM-222x300.png) Adding child elements in FrameLayout 

### FrameLayout – Tips and Tricks

There are a lot of things that Frame Layout can achieve. Check the image below.

![What is common among them](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![What is common among them](https://androidmonks.com/wp-content/uploads/2018/08/topeka-chrome-for-android-300x169.jpg) What is common among them?All the Layouts shown above are missing something. Can you guess what it is?

They are missing the App Title. By default, the App title is appended to the top, using a RelativeLayout, which we cannot edit (There are work arounds, but not worth the time and effort).

We make use of the Frame Layout for this very purpose, and take up some screen space to place our content inside it.

This is a simple UI we created for the project here (We created an android app under 3 hours!!)

![FrameLayout](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![FrameLayout](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-18-at-2.06.11-PM.png) FrameLayoutThe content we have used here, the [ImageView](https://androidmonks.com/imageview-android-overview-implementation/), the [EditText](https://androidmonks.com/edittext-android-implementation-usage/), the [Button](https://androidmonks.com/buttons-android-overview-implementation/) are inside a frame layout setup.

The title bar is removed and instead, we have our own [TextView](https://androidmonks.com/textview-android-usage-implementation/) as Login In. This gives a cleaner and neater design for Our Android App.

It is important to play some more with the Layout to understand its working. Drop in any comments you have in the comments below.

*“Learn and Be Curious”.*

 

[Tweet](https://twitter.com/intent/tweet?text=FrameLayout+in+Android+-+Implementation+and+Overview&url=https%3A%2F%2Fandroidmonks.com%2Fframelayout-in-android-implementation-and-overview%2F)Pin[Share1](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fframelayout-in-android-implementation-and-overview%2F)1 Shares Categories [Android](https://androidmonks.com/category/android/), [Android programming](https://androidmonks.com/category/android-programming/) [Leave a comment](https://androidmonks.com/framelayout-in-android-implementation-and-overview/#respond) Post navigation[RelativeLayout in Android – Overview and Implementation](https://androidmonks.com/relativelayout-android-overview-implementation/)[ScrollView in Android – Overview and Implementation](https://androidmonks.com/scrollview-android-tutorial-overview/)### Leave a Comment [Cancel reply](/framelayout-in-android-implementation-and-overview/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"259","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "5e9d84bb42";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "259";var swpClickTracking = false; 