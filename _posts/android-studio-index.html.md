---
title: '# Android Studio – Knowing your IDE | AndroidMonks'
description: 'This tutorial shows a step by step setup procedure to getting started with Android Studio IDE the AndroidMonks way! Android Monks'
date: '2018-10-09'
modified_date: '2018-12-23'
image: '/assets/images/posts'
---
# Android Studio – Knowing your IDE | AndroidMonks

 [December 23, 2018October 9, 2018](https://androidmonks.com/android-studio/ "5:28 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Android Studio – Knowing your IDE](#Android_Studio_8211_Knowing_your_IDE)
* [2 Getting Started with your first Application](#Getting_Started_with_your_first_Application)
* [3 Setting Your Target Devices](#Setting_Your_Target_Devices)
* [4 Choosing a Activity](#Choosing_a_Activity)
* [5 Enter the Activity and Layout Name](#Enter_the_Activity_and_Layout_Name)
* [6 Creating Your Application](#Creating_Your_Application)
* [7 Creating You App and Running it](#Creating_You_App_and_Running_it)
### Android Studio – Knowing your IDE

Most widely used [Android development IDE is Android Studio](https://androidmonks.com/android-studio/). Google recommended IDE, which is based on [IntelliJ IDEA](https://www.jetbrains.com/idea/)

On top of IntelliJ’s powerful code editor and developer tools, Android Studio offers even more features that enhance your productivity when building Android apps. You will be amazed to see a lot of things in one place, and at the same time feel how easy it is to start off as a beginner as well.

[Android Studio](https://androidmonks.com/android-studio/) is Open Source, you aren’t going to pay for anything, and can get started from the get-go. All the tutorials in this website are designed and developed using Android Studio only. The community support for Android Studio is also extremely huge.

Some of the features as explained in the [Android Studio](https://androidmonks.com/android-studio/) Docs include,

* A flexible Gradle-based build system
* A fast and feature-rich emulator
* A unified environment where you can develop for all Android devices
* Instant Run to push changes to your running app without building a new APK
* Code templates and GitHub integration to help you build common app features and import sample code
* Extensive testing tools and frameworks
* Lint tools to catch the performance, usability, version compatibility, and other problems
* C++ and NDK support
* Built-in support for [Google Cloud Platform](https://cloud.google.com/tools/android-studio/docs/), making it easy to integrate Google Cloud Messaging and App Engine

You can see tutorials for all of this in various blog posts in this space.

### Getting Started with your first Application

Time to explore the IDE, go ahead, hit [this location](https://developer.android.com/studio/) and download your copy of the Android Studio IDE. IDE takes care of auto-installing all the mandatory dependencies, including SDK, ADB, and other important dependencies. There are other dependencies which may be required at various points in the application development cycle, and we can install them at that point.

For now, you can complete the installation procedure and Jump back in here.  
 Upon completion of the Android Studio Installation, you are taken to this page, where you will be creating your Android Project. I am using [Android Studio](https://androidmonks.com/android-studio/) on MAC, but it must be similar in all other OS’s as well.

![Start your Android Project](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Start your Android Project](https://androidmonks.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-09-at-10.09.04-PM-1024x761.png) Start your Android ProjectAs you see there are several Fields which you need to fill. This is most certainly confusing if you are a beginner. We will see what each of these fields mean below.

* **Application Name** – This specifies your application name, the one name which will be present when the app is installed, referred in the Android Play Store. You have to make sure the name of the Application is unique so that it attracts the user, this is the first level of letting the user know about your app
* **Company Domain** – This is where your application packages are going to be named with a prefix. This Company name will be used to bundle your application into a package. It is very important to make sure your application contains a unique company name, as this is the identifier the Google Play Store uses to locate your application, even if there are going to be 1000 applications with the same name (2048 for eg), each application is unique from the other because of a different company/package name associated with it.  
 I would recommend adding your company/your name in the reverse naming format followed by your app name to give it a unique name.
* **Project Location –**Specifies where your project files will be stored, by default it creates a folder with your application name in the user location
* **Package name –**This is auto-generated using your Company Domain and your Application name. Like we saw above, it has to be unique.

Include c++ support, needn’t be chosen, because we will not have anything to do with c++ in any of the mainstream applications.

Include Kotling support – [Kotlin](https://androidmonks.com/kotlin-android/) is a statically typed language, created by Jet Brains. You can see more about using Kotlin [here](https://androidmonks.com/kotlin-android/), but for this tutorial, we will not be choosing it.

Upon completion **Click Next.**

### Setting Your Target Devices

If you have seen the list in the drop down and got your jaw down! don’t worry too much, these are the list of API’s that Android still supports, thankfully 15 and up is a good number and also the support can be better.

You choose, which device you want to target, from Phone Tablet to Wear and TV, there are a lot of things you can choose from (Be aware of the changes in the screen size as it can affect the application feel).

 

![Setting Target device ](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Setting Target device ](https://androidmonks.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-09-at-10.22.47-PM-1024x761.png) Setting the Target deviceUpon Completion **Click Next**

### Choosing a Activity

This page seems pretty obvious, every application has to contain a landing [Activity](https://androidmonks.com/activities-in-android/). You can know more about Activities [here](https://androidmonks.com/activities-in-android/). Choose one from the list of Activities available and let the IDE take care of creating you a Skeleton.

![Choose Activity](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Choose Activity](https://androidmonks.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-09-at-10.31.47-PM-1024x763.png) Choose ActivityThe Different type of Auto-Generated Activities available are.

**Basic Activity** – A simple white layout with a Floating Button in the bottom right corner.

**Bottom Navigation Activity** – Creates a simple Bottom Navigation type Activity with Fragments code auto generated

**Empty Activity** – Just what you need, no additional fills, creates a simple blank activity.

**FullScreen Activity** – Creates an Activity with no AppBarLayout present.

**Google AdMob Ads Activity –**If you know about AdMob Ads, you will know what this activity will be used for. This creates a proper Activity to position your Ads appropriately.

**Login Activity –**Newly added option, that creates a Login Activity with basic UserName and Password fields.

Choose any Activity and **Click Next**

### Enter the Activity and Layout Name

Enter your activity and layout name to start creating the Skeleton for your project.

![Configure Activity](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Configure Activity](https://androidmonks.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-09-at-10.42.51-PM-1024x761.png) Configure Activity### Creating Your Application

![Project is getting created](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Project is getting created](https://androidmonks.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-09-at-10.44.20-PM.png) The project is getting created![Auto Created Application](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Auto Created Application](https://androidmonks.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-09-at-10.44.33-PM-1024x619.png) Auto Created Application### Creating You App and Running it

Once done, it is time to create a simple application and run it.

Read on about a [complete how to’s to get your Android Application up and Running.](https://androidmonks.com/activities-in-android/)

Do drop in any comments below if any regarding Setting Up Android Studio Project from scratch.

***“Learn and be curious”***

[Tweet](https://twitter.com/intent/tweet?text=Android+Studio+-+Knowing+your+IDE++AndroidMonks&url=https%3A%2F%2Fandroidmonks.com%2Fandroid-studio%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fandroid-studio%2F)0 Shares Categories [Android](https://androidmonks.com/category/android/), [Android programming](https://androidmonks.com/category/android-programming/), [Uncategorized](https://androidmonks.com/category/uncategorized/) [Leave a comment](https://androidmonks.com/android-studio/#respond) Post navigation[ImageSwitchers in Android Tutorial | AndroidMonks](https://androidmonks.com/imageswitchers-android/)[Splash Screen – Create your own | Androidmonks](https://androidmonks.com/splash-screen/)### Leave a Comment [Cancel reply](/android-studio/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"512","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "c14f5ebe6a";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "512";var swpClickTracking = false; 