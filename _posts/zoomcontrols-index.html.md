---
title: '# ZoomControls in Android | AndroidMonks'
description: 'This tutorial is used to know about zoomcontrols in android. Learn how to create a Zoom In and Zoom out action. Android Monks'
date: '2018-10-17'
modified_date: '2018-10-17'
image: '/assets/images/posts'
---
# ZoomControls in Android | AndroidMonks

 [October 17, 2018October 17, 2018](https://androidmonks.com/zoomcontrols/ "12:11 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 ZoomControls in Android with Example](#ZoomControls_in_Android_with_Example)
	+ [1.1 ZoomControls – Basic Implementation](#ZoomControls_8211_Basic_Implementation)
	+ [1.2 ZoomControls – Public Methods](#ZoomControls_8211_Public_Methods)
	+ [1.3 ZoomControls – Activity Implementation](#ZoomControls_8211_Activity_Implementation)
		- * + [1.3.0.0.1 Final Application](#Final_Application)
## ZoomControls in Android with Example

How often have you seen the +- button that depicts the [ZoomControls](https://androidmonks.com/zoomcontrols/) action in Android Apps. These are a major part of creating a Book reader, or a e-shopping applications. The need for Zoom Controls was very high after the use of high quality images, because people wanted to zoom in and out Pictures. There is a very simple class that provides this feature in Android.

The `ZoomControls` class displays a simple set of controls used for zooming and provides callbacks to register for events.

We will see the implementation of this class in Android.

### ZoomControls – Basic Implementation

You will be making use of the class `ZoomControls` like below.


```
<ZoomControls
android:id="@+id/simpleZoomControl"
android:layout\_width="wrap\_content"
android:layout\_height="wrap\_content" />
```
This gives the control like,

![ZoomControls](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![ZoomControls](https://androidmonks.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-16-at-10.26.26-PM.png) ZoomControlsJust like all other [views](https://androidmonks.com/android-ui-layout-concepts-knowledge/), Zoom Controls has the default property **layout\_width** and **layout\_height.**Check out more about the general Attributes to a view [here](https://androidmonks.com/android-ui-layout-concepts-knowledge/).

### ZoomControls – Public Methods

* [onTouchEvent](https://developer.android.com/reference/android/widget/ZoomControls.html#onTouchEvent(android.view.MotionEvent))([MotionEvent](https://developer.android.com/reference/android/view/MotionEvent.html) event) – Implement this method when there is a need to handle touch events.  According to google docs, “If this method is used to detect click actions, it is recommended that the actions be performed by implementing and calling `[performClick()](https://developer.android.com/reference/android/view/View.html#performClick())`“. Here performClick() is a base class’ (View) public method. It has better callback mechanism when compared to onTouchEvent()
* [hasFocus](https://developer.android.com/reference/android/widget/ZoomControls.html#hasFocus())() – Returns true if this view has or contains focus
* [hide](https://developer.android.com/reference/android/widget/ZoomControls.html#hide())() – When there is a need to hide the zoom controls (Sometimes the user may create a continuous scroll/swipe motion. Handling those gestures and hiding zoom controls in that case provides better UI experience)
* [setIsZoomInEnabled](https://developer.android.com/reference/android/widget/ZoomControls.html#setIsZoomInEnabled(boolean))(boolean isEnabled) – Boolean Property, that returns True if Zoom in is enabled or not
* [setIsZoomOutEnabled](https://developer.android.com/reference/android/widget/ZoomControls.html#setIsZoomOutEnabled(boolean))(boolean isEnabled) – Boolean Property, that return True if Zoom out is enabled or not
* [setOnZoomInClickListener](https://developer.android.com/reference/android/widget/ZoomControls.html#setOnZoomInClickListener(android.view.View.OnClickListener))([View.OnClickListener](https://developer.android.com/reference/android/view/View.OnClickListener.html) listener) – This callback is fired when the + (Zoom in) is pressed. Handling the zoom in is upto the developer.
* [setOnZoomOutClickListener](https://developer.android.com/reference/android/widget/ZoomControls.html#setOnZoomOutClickListener(android.view.View.OnClickListener))([View.OnClickListener](https://developer.android.com/reference/android/view/View.OnClickListener.html) listener) – This callback is fired when the – (Zoom out) is pressed. Handling the zoom out is upto the developer.

### ZoomControls – Activity Implementation

To create the [Activity](https://androidmonks.com/activities-in-android/), we can make use of the [`ZoomControl`](https://androidmonks.com/zoomcontrols/) class as we saw in the first section.

The Call back can be used similar to a button press, however, the zoom action that we want is upto the developer. We will have to create the logic to zoom the item we want to apply the zoom controls on.

We will try to zoom in and out an image using the Zoom Controls like below.

Example **activity\_main.xml**


```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/container"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    tools:context=".MainActivity"
    android:orientation="vertical"
    android:gravity="center">

    <TextView
        android:id="@+id/message"
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:layout\_marginLeft="@dimen/activity\_horizontal\_margin"
        android:layout\_marginStart="@dimen/activity\_horizontal\_margin"
        android:layout\_marginTop="@dimen/activity\_vertical\_margin"
        android:text="Example Zoom Controls"
        app:layout\_constraintLeft\_toLeftOf="parent"
        app:layout\_constraintTop\_toTopOf="parent" />
    <ImageView
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:background="@drawable/monk"
        android:id="@+id/imageToControl"/>
    <ZoomControls
        android:layout\_width="match\_parent"
        android:layout\_height="match\_parent"
        android:id="@+id/zoomControls"/>

</LinearLayout>
```
**MainActivity.java**


```
package com.example.baradwav.samplemymanh;

import android.media.Image;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.support.v7.app.AppCompatActivity;
import android.view.MenuItem;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.ZoomControls;

public class MainActivity extends AppCompatActivity {

    ImageView imageToControl;
    ZoomControls zoomControls;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity\_main);
        imageToControl = findViewById(R.id.imageToControl);
        zoomControls = findViewById(R.id.zoomControls);
        zoomControls.setOnZoomInClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                float x = imageToControl.getScaleX();
                float y = imageToControl.getScaleY();
                // set increased value of scale x and y to perform zoom in functionality
                imageToControl.setScaleX((float) (x + 0.5));
                imageToControl.setScaleY((float) (y + 0.5));
            }
        });
        zoomControls.setOnZoomOutClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                float x = imageToControl.getScaleX();
                float y = imageToControl.getScaleY();
                // set decreased value of scale x and y to perform zoom out functionality
                imageToControl.setScaleX((float) (x - 0.5));
                imageToControl.setScaleY((float) (y - 0.5));
            }
        });
    }
}
```
###### Final Application

The resulting Application looks like this,

![ZoomControl Action](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![ZoomControl Action](https://androidmonks.com/wp-content/uploads/2018/10/zoomcontrolgif-188x300.gif) ZoomControl ActionDrop in any comments you have below.

***“Learn and Be Curious”***

 

 

[Tweet](https://twitter.com/intent/tweet?text=ZoomControls+in+Android++AndroidMonks&url=https%3A%2F%2Fandroidmonks.com%2Fzoomcontrols%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fzoomcontrols%2F)0 Shares Categories [Android](https://androidmonks.com/category/android/), [Android programming](https://androidmonks.com/category/android-programming/), [app android](https://androidmonks.com/category/app-android/), [Uncategorized](https://androidmonks.com/category/uncategorized/) [Leave a comment](https://androidmonks.com/zoomcontrols/#respond) Post navigation[TableLayout in Android with Example | AndroidMonks](https://androidmonks.com/tablelayout/)[CheckedTextView in Android | AndroidMonks](https://androidmonks.com/checkedtextview/)### Leave a Comment [Cancel reply](/zoomcontrols/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"537","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "c14f5ebe6a";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "537";var swpClickTracking = false; 