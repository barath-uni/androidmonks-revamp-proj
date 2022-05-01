---
title: '# Activities in Android – Tutorial | AndroidMonks'
description: 'This tutorial provides a brief description on how and what activities are'
date: '2018-09-29'
modified_date: '2018-09-29'
image: '/assets/images/posts'
---
# Activities in Android – Tutorial | AndroidMonks

 [September 29, 2018September 29, 2018](https://androidmonks.com/activities-in-android/ "5:43 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Activity in Android – Tutorial | AndroidStudio](#Activity_in_Android_8211_Tutorial_AndroidStudio)
	+ [1.1 Basics of Activities](#Basics_of_Activities)
	+ [1.2 Activities and Layout – What are they?](#Activities_and_Layout_8211_What_are_they)
		- * + [1.2.0.0.1 Layout](#Layout)
				+ [1.2.0.0.2 Activity](#Activity)
				+ [1.2.0.0.3 Manifest](#Manifest)
	+ [1.3 Activity Lifecycle](#Activity_Lifecycle)
		- * + [1.3.0.0.1 onCreate()](#onCreate)
				+ [1.3.0.0.2 onStart()](#onStart)
				+ [1.3.0.0.3 onResume()](#onResume)
				+ [1.3.0.0.4 onPause()](#onPause)
				+ [1.3.0.0.5 onStop()](#onStop)
				+ [1.3.0.0.6 onRestart()](#onRestart)
				+ [1.3.0.0.7 onDestroy()](#onDestroy)
	+ [1.4 Where to from here?](#Where_to_from_here)
## Activity in Android – Tutorial | AndroidStudio

The [activity](https://androidmonks.com/activities-in-android/) class is a very important part of a Android Application. The paradigm shift in the world of smartphone applications begins here!!How exciting is it to know, from your whatsapp to facebook application, nothing can ever happen without the Activities.

Think of activities as the starting block, your Android OS looks for. The application begins from a activity, goes through a lot of stages and ends once the application closes. We will see, how an activity is created, ways to implement it and create a simple application with it.

### Basics of Activities

Activities are the starting point for any application, you open a application, the OS shoots one and the appication opens it. Activities are responsible for holding a UI along with it as well. This provides us a clearer idea of what constitutes as an activity.

In the concept of Android Programming, there are some very important blocks that need to be known, understanding Activites and Layout is one of them.

The three important things to know when creating an application is, defining your Layout, creating your activity and understanding a Manifest. We will see how all of these are tied together and bundles to create a application.

### Activities and Layout – What are they?

Coming on to the UI aspect that we aim to create, we will have to know what a Layout is. Android is not entirely Java alone, it also contains some XML aspect to it which constitutes the UI for us (Even though you can create a application without a XML also!). Below, we will see how the Layout and Activities are Created and Connected.

###### Layout

Ever wondered how texts are created in the android application. Know what is responsible for creating them? A brief definition of a Layout will be, anything that holds a UI to it will come under layout and can be created using a XML.

You will have to know about [Views and ViewGroups](https://androidmonks.com/android-ui-layout-concepts-knowledge/) and know the difference between them. Below is a very simple Layout you can include in your application.


```
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    >
    <TextView
    android:layout\_width="match\_parent"
    android:layout\_height="wrap\_content"
    android:text="Activity"/>
</RelativeLayout>
```
This creates the Layout file under the layout>activity\_main.xml like below.

![Layout file](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Layout file](https://androidmonks.com/wp-content/uploads/2018/09/Screen-Shot-2018-09-29-at-10.30.33-PM-287x300.png) Layout fileThis Layout now links with our activity to create our first application.

###### Activity

Great job so far creating our layout. How do you create activities and what is its use? Brief definition for that will be, anything that provides a action on the static layout we created above, it comes under activity. Activities are the component that will be holding a UI with it. From the creation till the destruction of the Android Application, it will be responsible for holding this UI.

You can create a simple Activity by going to the app>java>your\_package(main) like below.

![Creating a Activity](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Creating a Activity](https://androidmonks.com/wp-content/uploads/2018/09/Screen-Shot-2018-09-29-at-10.36.27-PM-300x259.png) Creating a ActivityI have named my activity as **MainActivity** and the package is **com.monks.android.justmultiply**. The empty class looks like below.

![ MainActivity class](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![ MainActivity class](https://androidmonks.com/wp-content/uploads/2018/09/Screen-Shot-2018-09-29-at-10.38.15-PM-1024x281.png) MainActivity classWhat do you see above. If you have guessed it right, you get a +1. Yes, we have linked our Layout to the Activity using the **setContentView()** method. Inititally, this might seem overwhelming with all the other callbacks and confusing syntax, but try to understand what they do. It will make your life easier.

###### Manifest

The third piece in our puzzle is to know about a Manifest. What does it do? Brief definition – You want to create an activity that the user is going to see? Include it in the Manifest (For now, lets stick to manifest there are other things as well which you have to include). Manifest is the first file that a OS searches for. This file solely holds all the important details that a OS has to know about in order to launch the Application. If you have included a Activity in it, it means the user is required to see it.

With this in mind, check the below file. Manifest is found in app>manifests

![Manifest in Android](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Manifest in Android](https://androidmonks.com/wp-content/uploads/2018/09/Screen-Shot-2018-09-29-at-10.48.38-PM-1024x320.png) Manifest in AndroidThis file is auto-generated, and contains whatever has to be seen by the user. There are various tags which hold lot of different things, but for now lets play along with this auto generated Manifest. This will be enough to create our application.

### Activity Lifecycle

The important part to know when it comes to the Activities are about how its Lifecycle (Start to End) looks like.

![Activity Lifecycle](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Activity Lifecycle](https://www.tutorialspoint.com/android/images/activity.jpg) Activity LifecycleThis image has got lot of things in it and we will try to understand what each and every step means. The main callbacks included in an activity lifecycle is its onCreate() and onStop() callbacks. Think about callbacks as stages in the Activity.

The above diagram contains primarily 6 callbacks out of which we will have to override only the onCreate() callback to create our simple application like we saw above.

See below for a detailed definition to each lifecycle stage.

###### onCreate()

You must implement this callback, which fires when the system creates your activity. Your implementation should initialize the essential components of your activity: For example, your app should create views and bind data to lists here. Most importantly, this is where you must call `[setContentView()](https://developer.android.com/reference/android/app/Activity.html#setContentView(android.view.View))` to define the layout for the activity’s user interface.

When `[onCreate()](https://developer.android.com/reference/android/app/Activity.html#onCreate(android.os.Bundle))` finishes, the next callback is always `[onStart()](https://developer.android.com/reference/android/app/Activity.html#onStart())`.

###### onStart()

As `[onCreate()](https://developer.android.com/reference/android/app/Activity.html#onCreate(android.os.Bundle))` exits, the activity enters the Started state, and the activity becomes visible to the user. This callback contains what amounts to the activity’s final preparations for coming to the foreground and becoming interactive.

###### onResume()

The system invokes this callback just before the activity starts interacting with the user. At this point, the activity is at the top of the activity stack, and captures all user input. Most of an app’s core functionality is implemented in the `[onResume()](https://developer.android.com/reference/android/app/Activity.html#onResume())` method.

The `[onPause()](https://developer.android.com/reference/android/app/Activity.html#onPause())` callback always follows `[onResume()](https://developer.android.com/reference/android/app/Activity.html#onResume())`.

###### onPause()

The system calls `[onPause()](https://developer.android.com/reference/android/app/Activity.html#onPause())` when the activity loses focus and enters a Paused state. This state occurs when, for example, the user taps the Back or Recents button. When the system calls `[onPause()](https://developer.android.com/reference/android/app/Activity.html#onPause())` for your activity, it technically means your activity is still partially visible, but most often is an indication that the user is leaving the activity, and the activity will soon enter the Stopped or Resumed state.

An activity in the Paused state may continue to update the UI if the user is expecting the UI to update. Examples of such an activity include one showing a navigation map screen or a media player playing. Even if such activities lose focus, the user expects their UI to continue updating.

You should **not** use `[onPause()](https://developer.android.com/reference/android/app/Activity.html#onPause())` to save application or user data, make network calls, or execute database transactions.

###### onStop()

The system calls `[onStop()](https://developer.android.com/reference/android/app/Activity.html#onStop())` when the activity is no longer visible to the user. This may happen because the activity is being destroyed, a new activity is starting, or an existing activity is entering a Resumed state and is covering the stopped activity. In all of these cases, the stopped activity is no longer visible at all.

The next callback that the system calls is either `[onRestart()](https://developer.android.com/reference/android/app/Activity.html#onRestart())`, if the activity is coming back to interact with the user, or by `[onDestroy()](https://developer.android.com/reference/android/app/Activity.html#onDestroy())` if this activity is completely terminating.

###### onRestart()

The system invokes this callback when an activity in the Stopped state is about to restart. `[onRestart()](https://developer.android.com/reference/android/app/Activity.html#onRestart())` restores the state of the activity from the time that it was stopped.

This callback is always followed by `[onStart()](https://developer.android.com/reference/android/app/Activity.html#onStart())`.

###### onDestroy()

The system invokes this callback before an activity is destroyed.

This callback is the final one that the activity receives. `[onDestroy()](https://developer.android.com/reference/android/app/Activity.html#onDestroy())` is usually implemented to ensure that all of an activity’s resources are released when the activity, or the process containing it, is destroyed.

### Where to from here?

The first two sections creates a complete overview for you to understand how the application works with and without the help of an entity called as the Acitivity. You can check out the sections here, to get started on creating your application from scratch.

Drop in any comments you have below.

***“Learn and Be Curious”***

[Tweet](https://twitter.com/intent/tweet?text=Activities+in+Android+-+Tutorial++AndroidMonks&url=https%3A%2F%2Fandroidmonks.com%2Factivities-in-android%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Factivities-in-android%2F)0 Shares Categories [Android](https://androidmonks.com/category/android/), [Android programming](https://androidmonks.com/category/android-programming/), [Uncategorized](https://androidmonks.com/category/uncategorized/) [Leave a comment](https://androidmonks.com/activities-in-android/#respond) Post navigation[Android Notifications – Tutorial | AndroidMonks](https://androidmonks.com/android-notifications/)[Button Shapes – Shape Drawable | AndroidMonks](https://androidmonks.com/button-shapes-drawable/)### Leave a Comment [Cancel reply](/activities-in-android/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"478","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "5e9d84bb42";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "478";var swpClickTracking = false; 