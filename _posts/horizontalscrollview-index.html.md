---
title: '# HorizontalScrollView in Android | AndroidMonks'
description: 'This tutorial is used to explain about HorizontalScrollView and ways to implement it with an Example in Android Studio. %'
date: '2018-10-13'
modified_date: '2018-10-13'
image: '/assets/images/posts'
---
# HorizontalScrollView in Android | AndroidMonks

 [October 13, 2018](https://androidmonks.com/horizontalscrollview/ "12:37 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 HorizontalScrollView in Android with Example](#HorizontalScrollView_in_Android_with_Example)
	+ [1.1 HorizontalScrollView – XML Implementation](#HorizontalScrollView_8211_XML_Implementation)
	+ [1.2 HorizontalScrollView – Creating Scrollable Views](#HorizontalScrollView_8211_Creating_Scrollable_Views)
	+ [1.3 HorizontalScrollView – Activity implementation](#HorizontalScrollView_8211_Activity_implementation)
	+ [1.4 Activity implementation](#Activity_implementation)
	+ [1.5 Resulting Application](#Resulting_Application)
## HorizontalScrollView in Android with Example

HorizontalScrollView provides with a Class to create a View that allows scrolling an item in the horizontal manner only. This View is a replacement to the deprecated Gallery class, and can be effectively used to show pictures or any drawable for that matter. Creating aHorizontalScrollView is simple and performs the same process as that of a [ScrollView](https://androidmonks.com/scrollview-android-tutorial-overview/)(Vertical Scrolling only)

In this tutorial we will see how to create a simple Image [HorizontalScrollView](https://androidmonks.com/horizontalscrollview/) with the help of a [Adapter](https://androidmonks.com/recyclerview-adapter-cardview-implementation/). Adapters are a very effective way to Store any values in a Recurring or a repeating Views. Know more about adapters [here](https://androidmonks.com/recyclerview-adapter-cardview-implementation/).

Once, you are done with knowing what a adapter is, we can continue with the tutorial.

### HorizontalScrollView – XML Implementation

Creating a Horizontal ScrollView is simple, it follows the same procedure as to create a ScrollView. Use the XML tag,  
 `HorizontalScrollView`  
 I have a sample Implementation below.


```
<HorizontalScrollView
    android:layout\_width="wrap\_content"
    android:layout\_height="wrap\_content"/>
```
### HorizontalScrollView – Creating Scrollable Views

It is important to note that, just like we did for a ScrollView, we need to have a child View, which will in turn hold, multiple siblings. This has to be the norm for creating any number of Scrollable Views. See the sample Below for clearer understanding.


```
<HorizontalScrollView
    android:layout\_width="wrap\_content"
    android:layout\_height="wrap\_content">
<LinearLayout
    android:layout\_width="wrap\_content"
    android:layout\_height="wrap\_content">
    <ImageView
        android:layout\_width="40dp"
        android:layout\_height="40dp"
        android:background="@drawable/monk"/>
    <ImageView
        android:layout\_width="40dp"
        android:layout\_height="40dp"
        android:background="@drawable/monk"/>
    <ImageView
        android:layout\_width="40dp"
        android:layout\_height="40dp"
        android:background="@drawable/monk"/>
    <ImageView
        android:layout\_width="40dp"
        android:layout\_height="40dp"
        android:background="@drawable/monk"/>
    <ImageView
        android:layout\_width="40dp"
        android:layout\_height="40dp"
        android:background="@drawable/monk"/>
    <ImageView
        android:layout\_width="40dp"
        android:layout\_height="40dp"
        android:background="@drawable/monk"/>
    <ImageView
        android:layout\_width="40dp"
        android:layout\_height="40dp"
        android:background="@drawable/monk"/>
    <ImageView
        android:layout\_width="40dp"
        android:layout\_height="40dp"
        android:background="@drawable/monk"/>
</LinearLayout>
</HorizontalScrollView>
```
The **HorizontalScrollView, by itself cannot hold multiple Views, it has to have only one direct child (which is the LinearLayout in this example) and the child can hold any number of views it wants for a Scrolling Effect.**

Upon completion, we can be sure to put the Horizontal ScrollView inside a [LinearLayout](https://androidmonks.com/linearlayout-android-implementation-overview/) if you want to, and it is done.

Check the Complete XML implementation for [HorizontalScrollView](https://androidmonks.com/horizontalscrollview/) Implementation.


```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:gravity="center"
    android:orientation="vertical"
    >

    <HorizontalScrollView
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:id="@+id/horizontalView"
        android:layout\_gravity="center">

        <LinearLayout
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content">
        <ImageView
            android:layout\_width="80dp"
            android:layout\_height="80dp"
            android:background="@drawable/monk"/>
        <ImageView
            android:layout\_width="80dp"
            android:layout\_height="80dp"
            android:background="@drawable/monk"/>
        <ImageView
            android:layout\_width="80dp"
            android:layout\_height="80dp"
            android:background="@drawable/monk"/>
        <ImageView
            android:layout\_width="80dp"
            android:layout\_height="80dp"
            android:background="@drawable/monk"/>
        <ImageView
            android:layout\_width="80dp"
            android:layout\_height="80dp"
            android:background="@drawable/monk"/>
        <ImageView
            android:layout\_width="80dp"
            android:layout\_height="80dp"
            android:background="@drawable/monk"/>
        <ImageView
            android:layout\_width="80dp"
            android:layout\_height="80dp"
            android:background="@drawable/monk"/>
        <ImageView
            android:layout\_width="80dp"
            android:layout\_height="80dp"
            android:background="@drawable/monk"/>
        <ImageView
            android:layout\_width="80dp"
            android:layout\_height="80dp"
            android:background="@drawable/monk"/>
        <ImageView
            android:layout\_width="80dp"
            android:layout\_height="80dp"
            android:background="@drawable/monk"/>

        <ImageView
            android:layout\_width="80dp"
            android:layout\_height="80dp"
            android:background="@drawable/monk"/>
        <ImageView
            android:layout\_width="80dp"
            android:layout\_height="80dp"
            android:background="@drawable/monk"/>
        <ImageView
            android:layout\_width="80dp"
            android:layout\_height="80dp"
            android:background="@drawable/monk"/>
        <ImageView
            android:layout\_width="80dp"
            android:layout\_height="80dp"
            android:background="@drawable/monk"/>
        <ImageView
            android:layout\_width="80dp"
            android:layout\_height="80dp"
            android:background="@drawable/monk"/>
    </LinearLayout>
    </HorizontalScrollView>
</LinearLayout>
```
### HorizontalScrollView – Activity implementation

Some of the used Public Methods are.

* [addView](https://developer.android.com/reference/android/widget/HorizontalScrollView.html#addView(android.view.View,%20int))([View](https://developer.android.com/reference/android/view/View.html) child, int index) -Adds a child view. If no layout parameters are already set on the child, the default parameters for this ViewGroup are set on the child
* [computeScroll](https://developer.android.com/reference/android/widget/HorizontalScrollView.html#computeScroll())() – Called by a parent to request that a child update its values for mScrollX and mScrollY if necessary. This will typically be done if the child is animating a scroll using a `[Scroller](https://developer.android.com/reference/android/widget/Scroller.html)` object.
* **[arrowScroll](https://developer.android.com/reference/android/widget/HorizontalScrollView.html#arrowScroll(int))(int direction) –**Specifies the direction in which the ScrollView has to slide, in response to a button that has left or right arrow marked in it.
* [fling](https://developer.android.com/reference/android/widget/HorizontalScrollView.html#fling(int))(int velocityX) – Fling is the motion/gesture that depicts a fast scroll of items. You can specify the velocityX that will fling the items in the X axis (Horizontal)
* [smoothScrollTo](https://developer.android.com/reference/android/widget/HorizontalScrollView.html#smoothScrollTo(int,%20int))(int x, int y) – Provides a smooth scroll instead of a immediate scroll. Can be considered as the opposite to fling action. On performing the fling gesture, it will still move smooth instead of a hurried running of items on the horizontal axis.

Upon knowing all this, you can add these public methods as and when needed. To check the complete list of method calls, you can check here.

### Activity implementation


```
package com.monks.android.newapplication;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.HorizontalScrollView;

public class MainActivity extends AppCompatActivity {
    HorizontalScrollView horizontalScrollView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.horizontal\_scrollview);
        horizontalScrollView = findViewById(R.id.horizontalView);
        //Setting Fling Action on it for example purpose
        horizontalScrollView.fling(2);

    }
}
```
### Resulting Application

![Horizontal ScrollView](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Horizontal ScrollView](https://androidmonks.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-13-at-12.34.25-PM-252x300.png) Horizontal ScrollView![Fling Action](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Fling Action](https://androidmonks.com/wp-content/uploads/2018/10/horizontal.gif) Fling ActionDrop in any comments below.

***“Learn and Be Curious”***

 

[Tweet](https://twitter.com/intent/tweet?text=HorizontalScrollView+in+Android++AndroidMonks&url=https%3A%2F%2Fandroidmonks.com%2Fhorizontalscrollview%2F)Pin[Share1](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fhorizontalscrollview%2F)1 Shares Categories [Android](https://androidmonks.com/category/android/), [Android programming](https://androidmonks.com/category/android-programming/), [Uncategorized](https://androidmonks.com/category/uncategorized/) [Leave a comment](https://androidmonks.com/horizontalscrollview/#respond) Post navigation[Splash Screen – Create your own | Androidmonks](https://androidmonks.com/splash-screen/)[TableLayout in Android with Example | AndroidMonks](https://androidmonks.com/tablelayout/)### Leave a Comment [Cancel reply](/horizontalscrollview/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"524","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "cc5bc2851c";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "524";var swpClickTracking = false; 