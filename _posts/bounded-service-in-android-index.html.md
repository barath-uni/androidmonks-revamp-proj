---
title: '# Bounded Service Android With Example | AndroidMonks'
description: 'This tutorial explains the entire concepts surrounding the Bounded Service in Android using the Binder Class. Android Monks'
date: '2018-09-23'
modified_date: '2018-09-28'
image: '/assets/images/posts'
---
# Bounded Service Android With Example | AndroidMonks

 [September 28, 2018September 23, 2018](https://androidmonks.com/bounded-service-in-android/ "7:55 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Bounded Service in Android – Complete Tutorial](#Bounded_Service_in_Android_8211_Complete_Tutorial)
	+ [1.1 Basics of a Bounded Service](#Basics_of_a_Bounded_Service)
	+ [1.2 What is the IBinder class we are using?](#What_is_the_IBinder_class_we_are_using)
	+ [1.3 Various Ways to create our Connection between the Activity and the Service](#Various_Ways_to_create_our_Connection_between_the_Activity_and_the_Service)
	+ [1.4 Example Program to Create our Bounded Service](#Example_Program_to_Create_our_Bounded_Service)
		- * + [1.4.0.0.1 BoundedService.java](#BoundedServicejava)
				+ [1.4.0.0.2 Explanation](#Explanation)
	+ [1.5 Final Application](#Final_Application)
	+ [1.6 Conclusion](#Conclusion)
## Bounded Service in Android – Complete Tutorial

If you are looking for a [Service](https://androidmonks.com/service-android-tutorial/) that can stick for the lifetime of a Activity and destroyed once the Activity is destroyed, bounded service is your answer. Service in Android mainly consists of [Background](https://androidmonks.com/service-android-tutorial/), [Foreground](https://androidmonks.com/foreground-service-in-android/) and [Bounded Service](https://androidmonks.com/bounded-service-in-android/).

In this tutorial we will see about Bounded Service and how to create and use them in our application.

### Basics of a Bounded Service

The important thing to note here is that, creating any type of [Service](https://androidmonks.com/service-android-tutorial/) will need to use the `Service` Class. The bounded service means that we will be binding the Activity with the Service and this service will stay till the lifetime of the activity.

To provide binding for a service, you must implement the `[onBind()](https://developer.android.com/reference/android/app/Service.html#onBind(android.content.Intent))` callback method. This method returns an `[IBinder](https://developer.android.com/reference/android/os/IBinder.html)` object that defines the programming interface that clients can use to interact with the service.

We will see in detail about the Class creation and callback methods below. Follow the steps closely, we will create a very simple bounded service in no time!

Just like we saw about background service and Foreground Service, we can also start a Service and then bind our activity to it! This can be done by first calling the StartService() and then calling the bindService() method. **It is however important to know that, if startService() is called, the service will start and bindService() will simply bind the Activity to the Service, once done, even after calling the unbindService() the Service will still be running unless stopService() is called!!**

If you have gotten this point precisely we will jump on to learn some extra steps about creating our **Binder Class.**

Before doing that, lets create our BoundedService class like below. It has the same implementation as the Background and Foreground Service, except we have another method to override, the onBind() method!!


```
public class BoundedService extends Service {
    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }
}
```
### What is the IBinder class we are using?

A client binds to a service by calling `bindService()`. When it does, it must provide an implementation of `ServiceConnection`(Which is another class implementation we will see below), which monitors the connection with the service. The return value of `bindService()` indicates whether the requested service exists and whether the client is permitted access to it. The Android system, creates the connection between the Service and the Activity using the ServiceConnection object! The`onServiceConnected()` method includes an `[IBinder](https://developer.android.com/reference/android/os/IBinder.html)` argument, which the client then uses to communicate with the bound service.

### Various Ways to create our Connection between the Activity and the Service

There are 3 preferred ways to create a connection between the Service and Activity, they are listed below.

* **[Extending the Binder class](https://developer.android.com/guide/components/bound-services#Binder) –**Simple as it sounds, this is the most preferred way, you can create a simple Binder Class (Local class) connect the Activity with the IBinder Interface and pass the ServiceConnection object. If all of these words seem confusing to you, check the below image!

![Related image](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Related image](https://i.ytimg.com/vi/lweCcCJ5JZw/maxresdefault.jpg) A Simple Binding Happening!Now how is the IBinder coming into picture here! The IBinder acts as the interface that is the language the Service can understand. If the activity wants to ask for a question (In the above example for a random number), it sends the connection details through the IBinder interface which the service understands! You must have understood the connection by now.

* [Using a Messenger](https://developer.android.com/guide/components/bound-services#Messenger) – Say you want the Service to work across different processes (Say a Service running remotely), we have to make use of the Inter Process Communication (Know more about it here). We can make use of Messenger in that case.
* [Using AIDL](https://developer.android.com/guide/components/aidl.html) – It solves the same purpose as that of a Messenger except when we need to handle multi threaded requests( In terms of functionality both the Messenger and AIDL are the same)

### Example Program to Create our Bounded Service

It is time to create our [Bounded Service example](https://androidmonks.com/bounded-service-in-android/). We will be seeing about extending the Binder Class below and how to effectively use that to create our Bounded Service.

I will be creating a **Simple service to send Random Numbers whenever the Activity requests for it**!

**main\_layout.xml**


```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:orientation="vertical">
    <TextView
        android:id="@+id/text\_service"
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:layout\_gravity="center"
        android:text="Service Example"
        android:layout\_marginTop="10dp" />
    <Button
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:layout\_gravity="center"
        android:id="@+id/start"
        android:text="Request NUmber"/>

    <TextView
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:textSize="30dp"
        android:layout\_gravity="center"
        android:id="@+id/serviceText"
        android:text="Center Text"/>
</LinearLayout>
```
**ServiceActivity.java**


```
import android.app.Activity;
import android.app.Service;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.os.Bundle;
import android.os.IBinder;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import org.w3c.dom.Text;

public class ServiceActivity extends Activity{
    BoundedService mBoundService;
    Boolean mServiceBound = false;
    Button startService;
    TextView serviceText;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main\_layout);
        startService = (Button) findViewById(R.id.start);
        serviceText = (TextView) findViewById(R.id.serviceText);

        startService.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int randomNuber = mBoundService.genRandomNumber();
                serviceText.setText(String.valueOf(randomNuber));
            }
        });

    }
    @Override
    protected void onStart() {

        startService(new Intent(this, BoundedService.class));
        Intent intent = new Intent(this,BoundedService.class);
        bindService(intent,mServiceConnection, Context.BIND\_AUTO\_CREATE);
        super.onStart();
    }
    @Override
    protected void onStop() {
        unbindService(mServiceConnection);
        stopService(new Intent(this,BoundedService.class));
        super.onStop();
    }
    private ServiceConnection mServiceConnection = new ServiceConnection() {

        @Override
        public void onServiceDisconnected(ComponentName name) {
            mServiceBound = false;
        }

        @Override
        public void onServiceConnected(ComponentName name, IBinder service) {
            BoundedService.LocalBoundedService myBinder = (BoundedService.LocalBoundedService) service;
            mBoundService = myBinder.getService();
            mServiceBound = true;
        }
    };
}
```
###### BoundedService.java


```
import android.app.Service;
import android.content.Intent;
import android.os.Binder;
import android.os.IBinder;
import android.support.annotation.Nullable;

import java.util.Random;

public class BoundedService extends Service {
    private IBinder mBinder =  new LocalBoundedService();
    Random randomNumber = new Random();
    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return mBinder;
    }
    @Override
    public boolean onUnbind(Intent intent) {

        return true;
    }
    public int genRandomNumber()
    {
        return randomNumber.nextInt(10000);
    }

    public class LocalBoundedService extends Binder {
        BoundedService getService() {
            return BoundedService.this;
        }
    }
}
```
**Once you have implemented the above, do not forget to add the service in the manifest like below.**


```
<service
    android:name=".ForegroundService"
    android:enabled="true" />
<service android:name=".BoundedService" />
```
###### Explanation

If you have been following me from the start, we saw what an IBinder class is, what a ServiceConnection is and most importantly how we will be sending and receiving data from Activity to Service.

From the above example in **BoundedService.java** class, we have created a LocalBoundedService class and extended the Binder class, this is going to act as the Interface we need to connect to the Service!

Inside the Class we have a getter() to return the Object of the BoundedService class.

Now jump back to the **ServiceActivity.java** class, we additionally have a private Class called the ServiceConnection which has the object mServiceConnection. This is going to provide us with a connection to the BoundedService class. How are we doing it? You guessed it right using the Interface we created in the above step! This interface will provide the mBoundeService with the class details of BoundedService class (This class holds the method we need to call, the genRandomNumber()).

Once the connection is through, our job is to merely use the mBounderService object to call the genRandomNumber() method. This will provide the value till the service is unbounded(We are unBinding it only in the onDestroy() method).

### Final Application

After implementing all the steps, our final application looks like this!

![Bounded Service Final Application](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Bounded Service Final Application](https://androidmonks.com/wp-content/uploads/2018/09/ezgif.com-video-to-gif.gif) Bounded Service Final Application### Conclusion

The [Bounded Service](https://androidmonks.com/bounded-service-in-android/) concept may seem overwhelming when compared to the [Background](https://androidmonks.com/service-android-tutorial/) and [Foreground](https://androidmonks.com/foreground-service-in-android/) Services but is one of the most important concepts in the whole of Android Programming.

Drop in any comments you have below.

***“Learn and Be Curious”***

 

[Tweet](https://twitter.com/intent/tweet?text=Bounded+Service+Android+With+Example++AndroidMonks&url=https%3A%2F%2Fandroidmonks.com%2Fbounded-service-in-android%2F)Pin[Share1](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fbounded-service-in-android%2F)1 Shares Categories [Android](https://androidmonks.com/category/android/), [Android programming](https://androidmonks.com/category/android-programming/), [Uncategorized](https://androidmonks.com/category/uncategorized/) [Leave a comment](https://androidmonks.com/bounded-service-in-android/#respond) Post navigation[Foreground Service in Android [Update 2020]](https://androidmonks.com/foreground-service-in-android/)[Android Notifications – Tutorial | AndroidMonks](https://androidmonks.com/android-notifications/)### Leave a Comment [Cancel reply](/bounded-service-in-android/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"457","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "d12ac1430a";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "457";var swpClickTracking = false; 