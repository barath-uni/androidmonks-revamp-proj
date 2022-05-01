---
title: '# Chronometer in Android | AndroidMonks'
description: 'Chronometer is a useful Class to count down or count up a timer. Used to be exclusively for Count-up timers only but count down is also supported now.'
date: '2018-10-22'
modified_date: '2018-10-22'
image: '/assets/images/posts'
---
# Chronometer in Android | AndroidMonks

 [October 22, 2018](https://androidmonks.com/chronometer/ "3:48 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Chronometer in Android | AndroidMonks](#Chronometer_in_Android_AndroidMonks)
	+ [1.1 Chronometer – Basic Implementation](#Chronometer_8211_Basic_Implementation)
	+ [1.2 Chronometer – Public Methods](#Chronometer_8211_Public_Methods)
		- * + [1.2.0.0.1 isCountDown()](#isCountDown)
				+ [1.2.0.0.2 isTheFinalCountDown()](#isTheFinalCountDown)
				+ [1.2.0.0.3 setBase(long base)](#setBaselong_base)
				+ [1.2.0.0.4 setCountDown(boolean countDown)](#setCountDownboolean_countDown)
				+ [1.2.0.0.5 setFormat(String format)](#setFormatStringformat)
				+ [1.2.0.0.6 start()](#start)
				+ [1.2.0.0.7 stop()](#stop)
				+ [1.2.0.0.8 setOnChronometerTickListener(Chronometer.OnChronometerTickListener listener)](#setOnChronometerTickListenerChronometerOnChronometerTickListener_listener)
	+ [1.3 Creating a Chronometer in our Android Application](#Creating_a_Chronometer_in_our_Android_Application)
		- * + [1.3.0.0.1 Activity for Chronometer](#Activity_for_Chronometer)
## Chronometer in Android | AndroidMonks

[Chronometer](https://androidmonks.com/chronometer/) in Android is useful to implement a simple Timer. It is a subclass of TextView however holds a countdown or count up timer.

According to the Android Docs,

You can give it a start time in the `SystemClock.elapsedRealtime()` timebase, and it counts up from that, or if you don’t give it a base time, it will use the time at which you call `start()`.

The timer can also count downward towards the base time by setting `setCountDown(boolean)` to true.

By default it will display the current timer value in the form “MM:SS” or “H:MM:SS”, or you can use `setFormat(String)`to format the timer value into an arbitrary string.

From the above definition it is clear as what a [Chronometer](https://androidmonks.com/chronometer/) is capable of. We will see how the basic implementation can be done and the steps required to implement on in our Application.

### Chronometer – Basic Implementation

In order to create a Chrono-meter, we can make use of the Tag [`Chronometer`](https://androidmonks.com/chronometer/) like below.


```
<Chronometer
    android:id="@+id/simpleChronometer"
    android:layout\_width="wrap\_content"
    android:layout\_height="wrap\_content" />
```
Just like all the Views, the default attributes are **layout\_weight** and **layout\_height.**We can make use of all the attributes related to a View or a Viewgroup. Check here for list of attributes related to a View.

Additionally, there are two attributes that this View takes. They are

* `[android:countDown](https://developer.android.com/reference/android/widget/Chronometer.html#attr_android:countDown)` – This specifies whether the Timer is going to count down or count up.
* [`android:format`](https://developer.android.com/reference/android/widget/Chronometer.html#attr_android:format) – Format string: if specified, the Chronometer will display this string, with the first “%s” replaced by the current timer value in “MM:SS” or “H:MM:SS” form.

### Chronometer – Public Methods

We will take a look at some of the public methods used frequently with [Chronometer](https://androidmonks.com/chronometer/) Class below.

* ###### isCountDown()

returns a Boolean value, indicating if Chrono meter is counting down or not
* ###### isTheFinalCountDown()

Indicates if this is the final countdown
* ###### setBase(long base)

This is responsible for setting the time that the count-up timer is in reference to
* ###### setCountDown(boolean countDown)

Set this view to count down to the base instead of counting up from it
* ###### setFormat(String format)

Responsible for setting the format in string that the timer uses to display
* ###### start()

Starts the timer
* ###### stop()

Stops the timer
* ###### setOnChronometerTickListener(Chronometer.OnChronometerTickListener listener)

Very important listener, which will get fired whenever the timer ticks!

### Creating a Chronometer in our Android Application

Time to create our Chronometer application. We will be using the Android Studio IDE to create the app.

**A lot of changes have been made to the Chronometer after API 28, where in the count down feature has been added. It is important to set the base properly, other the count down will happen below zero, which is not what you want to see.**

In order to show how the count down and count up timer works, we will be creating both the timers in one activity. Choose a layout titled **chronometer\_layout.xml** like below.


```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:gravity="center"
    android:orientation="vertical">

    <TextView
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:text="Count Down"
        android:textSize="20dp" />

    <Chronometer
        android:id="@+id/count\_down"
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:countDown="true"
        android:textColor="#008800"
        android:textSize="40dp" />

    <TextView
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:text="Count Up"
        android:textSize="20dp" />

    <Chronometer
        android:id="@+id/count\_up"
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:textColor="#008800"
        android:textSize="40dp" />

    <Button
        android:id="@+id/start"
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:text="start"
        android:textSize="25dp" />

    <Button
        android:id="@+id/stop"
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:text="stop"
        android:textSize="25dp" />
</LinearLayout>
```
I have used 2 [**Buttons**](https://androidmonks.com/buttons-android-overview-implementation/), **start** and **stop** which will start both the timers at the same time. One counts down while the other counts up.

###### Activity for Chronometer


```

import android.os.Bundle;
import android.os.SystemClock;
import android.support.v7.app.AppCompatActivity;
import android.text.format.Time;
import android.view.View;
import android.widget.Button;
import android.widget.Chronometer;
import android.widget.Toast;

public class ChronometerActivity extends AppCompatActivity {
   Chronometer chronometer\_up;
   Chronometer chronometer\_down;
   Button start;
   Button stop;
    @Override
    protected void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        setContentView(R.layout.chronometer);
        chronometer\_down = findViewById(R.id.count\_down);
        chronometer\_up = findViewById(R.id.count\_up);
        chronometer\_up.setBase(SystemClock.elapsedRealtime());
        chronometer\_down.setBase(SystemClock.elapsedRealtime()+600000);
        start = findViewById(R.id.start);
        stop = findViewById(R.id.stop);
        start.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                chronometer\_down.start();
                chronometer\_up.start();
            }
        });
        stop.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                chronometer\_down.stop();
                chronometer\_up.stop();
                Toast.makeText(view.getContext(),"Up"+String.valueOf(chronometer\_up.getText())+"Down:"+
                String.valueOf(chronometer\_down.getText()),Toast.LENGTH\_SHORT).show();
            }
        });
    }
}
```
In this simple activity, we are setting the base for Both the Count-up and Count-down timer. Countdown timer starts 10 minutes (i.e) 60000 milli seconds in advance. Hence, those numbers.

The resulting Application looks like below.

![Chronometer Application](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Chronometer Application](https://androidmonks.com/wp-content/uploads/2018/10/updowncounter.gif) Chronometer ApplicationDrop in any comments you have below.

***“Learn and Be Curious”***

[Tweet](https://twitter.com/intent/tweet?text=Chronometer+in+Android++AndroidMonks&url=https%3A%2F%2Fandroidmonks.com%2Fchronometer%2F)Pin2[Share1](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fchronometer%2F)3 Shares Categories [Android](https://androidmonks.com/category/android/), [Android programming](https://androidmonks.com/category/android-programming/) [Leave a comment](https://androidmonks.com/chronometer/#respond) Post navigation[ViewStub in Android | AndroidMonks](https://androidmonks.com/viewstub/)[ViewAnimator in Android | AndroidMonks](https://androidmonks.com/viewanimator/)### Leave a Comment [Cancel reply](/chronometer/?utm_source=rss&utm_medium=rss&utm_campaign=chronometer#respond)

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
 © 2020 Android Monks • Powered by [GeneratePress](https://generatepress.com) This website uses cookies to improve your experience. We'll assume you're ok with this, but you can opt-out if you wish. Cookie settingsACCEPTPrivacy & Cookies Policy   Close #### Privacy Overview

This website uses cookies to improve your experience while you navigate through the website. Out of these cookies, the cookies that are categorized as necessary are stored on your browser as they are essential for the working of basic functionalities of the website. We also use third-party cookies that help us analyze and understand how you use this website. These cookies will be stored in your browser only with your consent. You also have the option to opt-out of these cookies. But opting out of some of these cookies may have an effect on your browsing experience.  Necessary  Necessary Always EnabledNecessary cookies are absolutely essential for the website to function properly. This category only includes cookies that ensures basic functionalities and security features of the website. These cookies do not store any personal information.

 Non-necessary  Non-necessaryAny cookies that may not be particularly necessary for the website to function and is used specifically to collect user personal data via analytics, ads, other embedded contents are termed as non-necessary cookies. It is mandatory to procure user consent prior to running these cookies on your website.

  /* <![CDATA[ */
var tocplus = {"visibility\_show":"show","visibility\_hide":"hide","width":"Auto"};
/* ]]> */  /* <![CDATA[ */
var socialWarfare = {"addons":[],"post\_id":"556","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "8a797f9cbb";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "556";var swpClickTracking = false; 