---
title: '# Service in Android – Android Tutorial'
description: 'This is a Android Tutorial to implement Service in Android. Background/Foreground/Bounded Service example present. Service in Android - Android Tutorial'
date: '2018-09-19'
modified_date: '2018-10-20'
image: '/assets/images/posts'
---
# Service in Android – Android Tutorial

 [October 20, 2018September 19, 2018](https://androidmonks.com/service-android-tutorial/ "6:00 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Service in Android – Tutorial in Android Studio](#Service_in_Android_8211_Tutorial_in_Android_Studio)
	+ - * [1.0.0.1 Foreground](#Foreground)
			* [1.0.0.2 Background](#Background)
			* [1.0.0.3 Bound](#Bound)
* [2 Creating a Simple Service](#Creating_a_Simple_Service)
	+ - * + [2.0.0.0.1 Basics of Service Class](#Basics_of_Service_Class)
				+ [2.0.0.0.2 onStartCommand()](#onStartCommand)
				+ [2.0.0.0.3 onBind()](#onBind)
				+ [2.0.0.0.4 onCreate()](#onCreate)
				+ [2.0.0.0.5 onDestroy()](#onDestroy)
				+ [2.0.0.0.6 Example Class to create a simple Background Service](#Example_Class_to_create_a_simple_Background_Service)
				+ [2.0.0.0.7 The final Output](#The_final_Output)
	+ [2.1 Conclusion](#Conclusion)
## Service in Android – Tutorial in Android Studio

As important as an Activity is for android, [Service](https://androidmonks.com/service-android-tutorial/) is really important to provide the ability to handle lot of activities like, performing background tasks (Like playing songs, interacting with a  server) and foreground tasks as well.

It does not have any UI and acts without any hooks to control it. We will see about its flow and how to create one below.

The term **Bind**is often used, as you can create 3 types of Services. They are,

##### Foreground

A foreground service performs some operation that is noticeable to the user. For example, an audio app would use a foreground to play an audio track. We will definitely have to attach a notification if the Foreground service is created. This will let the user know that the application is still doing some task even after switching the phone off, or exiting the application. (There are lot of restrictions to a background service like we will see below.)

##### Background

A background service performs an operation that isn’t directly noticed by the user. For example, if an app uses a service to compact its storage, that would usually be a backgroundService. It is to be noted that, a BackgroundService cannot run, if the user at some point exits the application. There are also restrictions on it being killed by the OS if there is a higher priority thread that has to be run.

##### Bound

A service is *bound* when an application component binds to it by calling `[bindService()](https://developer.android.com/reference/android/content/Context.html#bindService(android.content.Intent,%20android.content.ServiceConnection,%20int))`. A bound service offers a client-server interface that allows components to interact with the service, send requests, receive results, and even do so across processes with interprocess communication (IPC). A bound service runs only as long as another application component is bound to it. This is useful, if you are performing an activity with respect to an activity. Bound services have their own set of advantages and disadvantages.

## Creating a Simple Service

We will look at creating a background service in this section. We will need to leverage two methods **startService() and stopService().** This starts and stops services as an when needed by the activity.

The background services start running endlessly until the OS kills it or the **stopService()** method is called. There is another way the service can kill itself, by using the stopSelf() method.

###### Basics of Service Class

We will have to know about usage of the class `Service`. This class is the **base class** for creating any Service.We will be overriding some important methods like below.

###### onStartCommand()

The system invokes this method by calling `startService()` when another component (such as an activity) requests that the service be started.

###### onBind()

The system invokes this method by calling `bindService()` when another component wants to bind with the service (such as to perform RPC). In your implementation of this method, you must provide an interface that clients use to communicate with the service by returning an `IBinder`. We will see about it in the below sections.

###### onCreate()

The system invokes this method to perform one-time setup procedures when the service is initially created (before it calls either `onStartCommand()` or `onBind()`). If the service is already running, this method is not called.

###### onDestroy()

The system invokes this method when the service is no longer used and is being destroyed. This will clean up all the resources created during onCreate()

###### Example Class to create a simple Background Service

We will be needing 2 Classes and one Layout file like below. We will be using a [TextView](https://androidmonks.com/textview-android-usage-implementation/) and a [Button](https://androidmonks.com/buttons-android-overview-implementation/)

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
        android:text="Start Service"/>
    <Button
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:layout\_gravity="center"
        android:id="@+id/stop\_Service"
        android:text="Stop Service"/>

</LinearLayout>
```
**ServiceActivity.java** – This is the class that performs the Services call.


```
import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.Button;

public class ServiceActivity extends Activity{
    Button startService;
    Button stopService;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main\_layout);
        startService = (Button) findViewById(R.id.start);
        stopService = (Button) findViewById(R.id.stop\_Service);

        startService.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startService(new Intent(v.getContext(),SampleService.class));

            }
        });
        stopService.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                stopService(new Intent(v.getContext(),SampleService.class));
            }
        });
    }

}
```
**SampleService.java** – This is our serviceclass to provide the backgroundService.


```
import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
import android.support.annotation.Nullable;
import android.widget.Toast;

public class SampleService extends Service{
    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }
    @Override
    public void onCreate() {
        Toast.makeText(this, "Service Created", Toast.LENGTH\_LONG).show();

    }
    @Override
    public void onStart(Intent intent, int startid) {
        Toast.makeText(this, "Service Started", Toast.LENGTH\_LONG).show();

    }
    @Override
    public void onDestroy() {
        Toast.makeText(this, "Service Stopped", Toast.LENGTH\_LONG).show();
    }
}


```
Once the classes are added, **do not forget to add the <Service> to your Manifest.xml** like below.


```
<service
    android:name=".SampleService"
    android:enabled="true" />
```
###### The final Output

!["<yoastmark](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)!["<yoastmark](https://androidmonks.com/wp-content/uploads/2018/09/asdservice.gif)

 

This is a basic implementation of a backgroundService. Drop in any comments below.

### Conclusion

It is quite imperative how effective the need for a background and a ForegroundService can be. It is also to be noted that, there are some difficulties in understanding how a service is run and created. This is because of a very mucky abstraction layer built below the Android Systems. However, Services are very important to the operation of a Native application.

For more information regarding Foreground/Bounded services. Check [here](https://androidmonks.com/).

***“Learn and Be Curious”***

[Tweet](https://twitter.com/intent/tweet?text=Service+in+Android+-+Android+Tutorial&url=https%3A%2F%2Fandroidmonks.com%2Fservice-android-tutorial%2F)Pin[Share1](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fservice-android-tutorial%2F)1 Shares Categories [Android](https://androidmonks.com/category/android/), [Android programming](https://androidmonks.com/category/android-programming/), [Uncategorized](https://androidmonks.com/category/uncategorized/) [Leave a comment](https://androidmonks.com/service-android-tutorial/#respond) Post navigation[Kotlin on Android – Overview and Introduction Tutorial](https://androidmonks.com/kotlin-android/)[Foreground Service in Android [Update 2020]](https://androidmonks.com/foreground-service-in-android/)### Leave a Comment [Cancel reply](/service-android-tutorial/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"444","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "5e9d84bb42";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "444";var swpClickTracking = false; 