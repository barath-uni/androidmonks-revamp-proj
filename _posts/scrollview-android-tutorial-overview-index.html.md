---
title: '# ScrollView in Android – Overview and Implementation'
description: 'ScrollView in Android Tutorial- Implementation and Overview ScrollView in Android - Overview and Implementation Android Monks Android'
date: '2018-08-19'
modified_date: '2018-08-19'
image: '/assets/images/posts'
---
# ScrollView in Android – Overview and Implementation

 [August 19, 2018](https://androidmonks.com/scrollview-android-tutorial-overview/ "9:58 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 ScrollView in Android – Overview and Implementation](#ScrollView_in_Android_8211_Overview_and_Implementation)
* [2 ScrollView – Declaration](#ScrollView_8211_Declaration)
* [3 ScrollView – Frequently Used Properties](#ScrollView_8211_Frequently_Used_Properties)
* [4 ScrollView – Vertical Implementation](#ScrollView_8211_Vertical_Implementation)
* [5 ScrollView – Horizontal Implementation](#ScrollView_8211_Horizontal_Implementation)
* [6 ScrollView – Points to Remember](#ScrollView_8211_Points_to_Remember)
### ScrollView in Android – Overview and Implementation

ScrollView is another frequently used [view](https://androidmonks.com/android-ui-layout-concepts-knowledge/), which gives the ability to scroll through a list of items in the fixed part of the screen. The Scroll View may have one or more child elements placed within it. It is used mainly with a [Listview](https://androidmonks.com/listview-android-implementation-overview/) in order to facilitate long list of items. Check the image below for clearer understanding.

![ScrollView](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![ScrollView](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-19-at-11.44.10-AM.png) ScrollView in Android 

### ScrollView – Declaration

It is important to note that, Scroll view usage should be restricted to **long list of items** only. Scrolling through the Facebook feeds contains never ending amount of feeds, this creates a better user experience. However, implementing a ScrollView in a simple Login/Signup page does not provide a cleaner UI.

Choose the place to implement the Scroll View properly. The declaration is as below.


```
<ScrollView
    android:layout\_width="wrap\_content"
    android:layout\_height="wrap\_content"></ScrollView>
```
This View implementation takes two properties **layout\_width** & **layout\_height** as default properties.

 

### ScrollView – Frequently Used Properties

The following properties are used frequently in Scroll View

**android:id –**This is to give a unique identification to the Scroll View that is created

**android:layout\_gravity –**Aligns the Scroll view with respect to its parent.

**android:background –**Allows a drawable value to this, can also assign a background color.

**android:fillViewport –**This is a boolean property which tells if the content inside the scroll view should scale to fill the layout or not.

We can play around with other properties of the views and create our custom Scroll view as well.

### ScrollView – Vertical Implementation

Just like any other view, we can implement a Vertical scrolling, by holding the elements inside a scroll view with a LinearLayout like below. Scroll View is not capable of holding elements, it is merely suggests that the elements inside needs to be scrolled.

Our example XML:


```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent">
    <ScrollView
    android:layout\_width="wrap\_content"
    android:layout\_height="wrap\_content"
        android:background="@color/colorAccent">
        <LinearLayout
            android:layout\_width="wrap\_content"
            android:layout\_height="wrap\_content"
            android:orientation="vertical">
        <TextView
            android:layout\_width="wrap\_content"
            android:layout\_height="wrap\_content"
            android:text="Text"/>
        <TextView
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:text="Text"/>
        <TextView
            android:layout\_width="wrap\_content"
            android:layout\_height="wrap\_content"
            android:text="Text"/>
        </LinearLayout>
    </ScrollView>

</LinearLayout>
```
This creates a simple scroll view like below

![ScrollView Vertical Simple Implementation](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![ScrollView Vertical Simple Implementation](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-19-at-3.06.47-PM.png) ScrollView Vertical Simple ImplementationOnce you are done with longer lists, we can see the **scrolling effect** of the [TextView](https://androidmonks.com/textview-android-usage-implementation/) easily.

### ScrollView – Horizontal Implementation

There can be cases where you might have to create a horizontal ScrollView, we make use of the XML tag, `HorizontalScrollView.`


```
<HorizontalScrollView
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent">

    
</HorizontalScrollView>
```
Once you are done with implementing the horizontal scroll view, it is pretty much the same process, except we will use a **LinearLayout** with a **Horizontal Orientation.**


```
<HorizontalScrollView
    android:layout\_width="match\_parent"
    android:layout\_height="wrap\_content"
    android:background="@color/colorPrimaryDark"
    >

    <LinearLayout
        android:layout\_width="match\_parent"
        android:layout\_height="wrap\_content"
        android:orientation="horizontal">
        <TextView
            android:layout\_width="wrap\_content"
            android:layout\_height="wrap\_content"
            android:textColor="#fff"
            android:layout\_gravity="center"
            android:text="Text1" />

        <TextView
            android:layout\_width="wrap\_content"
            android:layout\_height="wrap\_content"
            android:textColor="#fff"
            android:layout\_gravity="center"
            android:text="Text2" />
        <TextView
            android:layout\_width="wrap\_content"
            android:layout\_height="wrap\_content"
            android:textColor="#fff"
            android:layout\_gravity="center"
            android:text="Text3" />
    </LinearLayout>
</HorizontalScrollView>
```
This will create a simple Horizontal Scrolling, and can be used to move cards horizontally.

### ScrollView – Points to Remember

* Always implement the scroll view only when there is a absolute need to allow the user to scroll through a **long list** of data because a user does not like to scroll to find one element.
* Choose horizontal or Vertical Scrolling wisely, before hand as this can result in a cleaner UI for the user
* Do not, put both the Horizontal and Vertical scrolling into each other. This creates a very shabby movement and disrupts the User focus.
* It is advisable to create a [wireframe](https://androidmonks.com/developing-android-app-easy-way/) before you implement the scroll views.
* Make sure that there is enough screen space for the viewer to see the other elements when they are scrolling (3-4 elements minimum should be shown, anything less than that, it feels very shabby for space).

Drop in any comments regarding the Scroll View below!

*“Learn and Be Curious”.*

[Tweet](https://twitter.com/intent/tweet?text=ScrollView+in+Android+-+Overview+and+Implementation&url=https%3A%2F%2Fandroidmonks.com%2Fscrollview-android-tutorial-overview%2F)Pin1[Share1](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fscrollview-android-tutorial-overview%2F)2 Shares Categories [Android](https://androidmonks.com/category/android/), [Android programming](https://androidmonks.com/category/android-programming/), [Uncategorized](https://androidmonks.com/category/uncategorized/) [Leave a comment](https://androidmonks.com/scrollview-android-tutorial-overview/#respond) Post navigation[FrameLayout in Android – Implementation and Overview](https://androidmonks.com/framelayout-in-android-implementation-and-overview/)[ConstraintLayout Android – Overview and Implementation](https://androidmonks.com/constraintlayout-android-implementation/)### Leave a Comment [Cancel reply](/scrollview-android-tutorial-overview/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"273","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "cc5bc2851c";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "273";var swpClickTracking = false; 