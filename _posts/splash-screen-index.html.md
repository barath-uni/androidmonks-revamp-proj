---
title: '# Splash Screen – Create your own | Androidmonks'
description: 'Create your own Splash Screen in Android. We create a Simple but effective Splash Screen using a Handler. Splash Screen - Create your own | Androidmonks'
date: '2018-10-11'
modified_date: '2018-10-11'
image: '/assets/images/posts'
---
# Splash Screen – Create your own | Androidmonks

 [October 11, 2018October 11, 2018](https://androidmonks.com/splash-screen/ "5:38 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Splash Screen – Create your own in Android](#Splash_Screen_8211_Create_your_own_in_Android)
	+ [1.1 Splash Screen – How to create one](#Splash_Screen_8211_How_to_create_one)
	+ [1.2 Layout Implementation](#Layout_Implementation)
	+ [1.3 Creating Our SplashActivity](#Creating_Our_SplashActivity)
	+ [1.4 Creating the MainActivity](#Creating_the_MainActivity)
	+ [1.5 Final Product](#Final_Product)
## Splash Screen – Create your own in Android

[Splash screen](https://androidmonks.com/splash-screen) is the opening page that pops out with a bold and clear banner with the App name and logo. This screen creates a bold statement setting up the application for the user. It is important to know that, the splash screen is vital if there is a background service, that is going to load content. You do not want your user to wait for the content.

Splash screens have been around for a long time, but the current trend is to create an application and deliver content at lightning speeds, hence the need for Splash Screens are declining.

Creating a Splash screen is not a very difficult task, rather a design oriented task. You have to get your Design on point, and at the same time keep it simple.

Think of Splash screens as a Layout showing up on the screen for sometime (Usually its a 20-30 screen) before going into the main activity. There can also be scenarios where, a [service](https://androidmonks.com/service-android-tutorial/) loads content in the background (Which can send a intent on completion of the loading) and the next [activity](https://androidmonks.com/activities-in-android/) is launched after the content loads up.

Before you jump on to creating your Splash Screen, think about the situation you need the splash screen for, if it is going to be a very quick 5 second showing off of your brand, it can be a static splash screen every time the app loads (Can create a negative Customer experience also), instead if it is a resource heavy application, use the Splash Screen wisely, while you load the content in the background.

### Splash Screen – How to create one

This is going to be straight forward simple implementation of the screen. Create a Layout which is going to be your Spash Screen design.

We will create a SplashActivity that will hold your Layout for some seconds and then fire the next MainActivity.

Check the below Layout Implementation. I have created a sample layout with Background and a Static logo to create my Screen.

### Layout Implementation


```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    tools:context=".MainActivity"
    android:orientation="vertical"
    android:background="#008080"
    android:gravity="center">
    <ImageView
        android:layout\_width="100dp"
        android:layout\_height="100dp"
        android:background="@drawable/monk"
        android:layout\_gravity="center"/>

</LinearLayout>
```
I have put my monk.png in the res>drawable folder. Make sure your drawables are present based on different resolution in order to create uniform looking splash screen (Drawables changes based on the Image Resolution).

### Creating Our SplashActivity

Jumping straight to our SplashActivity, we will be creating this one with a handler that will fire the intent after a delay of 2.5 seconds or 2500 milli seconds. This is what we have done below.


```
package com.monks.android.newapplication;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;

public class SplashActivity extends AppCompatActivity {
    Handler handler;
    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity\_main);

        handler=new Handler();
        handler.postDelayed(new Runnable() {
            @Override
            public void run() {
                Intent intent=new Intent(SplashActivity.this,MainActivity.class);
                startActivity(intent);
                finish();
            }
        },2500);
    }
}
```
### Creating the MainActivity

Once the SplashActivity is developed, we will create our MainActivity that will be shown right after the SplashActivity (Oftenthe starting point of the Application). I have created a bare minimum simple MainActivity like below.


```
package com.monks.android.newapplication;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main\_acc);


    }
}
```
**main\_acc.xml**


```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent">
    <TextView
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:text="Sample Activity"/>
</LinearLayout>
```
### Final Product

Once done, it is time to stitch it all up and see the end product. Check out below for the Output.

!["<yoastmark](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)!["<yoastmark](https://androidmonks.com/wp-content/uploads/2018/10/splash-592x1024.gif)

Drop in any comments you have below.

***“Learn and Be Curious”***

[Tweet](https://twitter.com/intent/tweet?text=Splash+Screen+-+Create+your+own++Androidmonks&url=https%3A%2F%2Fandroidmonks.com%2Fsplash-screen%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fsplash-screen%2F)0 Shares Categories [Android](https://androidmonks.com/category/android/), [Android programming](https://androidmonks.com/category/android-programming/), [Uncategorized](https://androidmonks.com/category/uncategorized/) [Leave a comment](https://androidmonks.com/splash-screen/#respond) Post navigation[Android Studio – Knowing your IDE | AndroidMonks](https://androidmonks.com/android-studio/)[HorizontalScrollView in Android | AndroidMonks](https://androidmonks.com/horizontalscrollview/)### Leave a Comment [Cancel reply](/splash-screen/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"520","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "cc5bc2851c";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "520";var swpClickTracking = false; 