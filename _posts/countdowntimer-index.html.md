---
title: '# Creating a CountDownTimer | AndroidMonks'
description: 'countdowntimer is a simple yet powerful way to create a Timer in Android. The callbacks are tick() start() cancel() finish(). Sample example app is present.'
date: '2018-11-04'
modified_date: '2018-11-04'
image: '/assets/images/posts'
---
# Creating a CountDownTimer | AndroidMonks

 [November 4, 2018](https://androidmonks.com/countdowntimer/ "5:21 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Creating a CountDownTimer | AndroidMonks](#Creating_a_CountDownTimer_AndroidMonks)
	+ [1.1 CountDownTimer – Basic Implementation](#CountDownTimer_8211_Basic_Implementation)
	+ [1.2 CountDownTimer – Public Methods](#CountDownTimer_8211_Public_Methods)
	+ [1.3 CountDownTimer example in Android Studio](#CountDownTimer_example_in_Android_Studio)
## Creating a CountDownTimer | AndroidMonks

[CountDownTimer](https://androidmonks.com/countdowntimer/) unlike a [Chronometer](https://androidmonks.com/chronometer/) is used for one purpose only, to count down the time! Count Down Timer is a simple to implement Class that you can plug into any Activity.

Count Down Timer in Android is used to set a countdown based on interval set by you and it will stop when the time has come in future.  You can use this Count Down Timer for creating any countdown for event.

### CountDownTimer – Basic Implementation

You can create a simple Count Down Timer by creating a Object for the Count Down Timer class. See the basic implement below.


```
new CountDownTimer(30000, 1000) {}.start()
```
The Count Down Timer constructor takes in 2 arguments **millisecInFuture**, **countDownInterval.**

There are 4 important public calls that you can use with a count down timer. See the list below.

### CountDownTimer – Public Methods

**1. onTick(long millisUntilFinished )**  
 Important method under Count Down Timer. The callback gets fired every time the clock ticks(milli second) until the final value. You can use that to set a TextView which will allow us to create a Timer like application.

**2. onFinish()**  
 It fires then the countdown timer finishes i.e time is up. User can add toast to show that time is up or can set text in [textView](https://androidmonks.com/textview-android-usage-implementation/).

**3. start()**  
 It simply starts the countdown timer.

**4. cancel()**  
 It cancels the countdown timer.

###  CountDownTimer example in Android Studio

We will use Android Studio to create a sample Application using the Count Down Timer.

We will see a simple **count\_down.xml**file below


```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:orientation="vertical"
    android:gravity="center">
    
    <TextView
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:text="Count Down Timer"/>
    <TextView
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:id="@+id/count\_down\_timer"
        android:textSize="35dp"
        android:textStyle="bold"
        />
</LinearLayout>
```
Create a **CountDownTimerClass.java** which will serve as our Activity,


```

import android.os.CountDownTimer;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.Button;
import android.widget.TextView;

public class CountDownTimerClass extends AppCompatActivity
{   int count = 1;
    TextView countDownTimer;
    Button startButton;
    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.count\_down);
        countDownTimer = findViewById(R.id.count\_down\_timer);
        new CountDownTimer(30000, 1000){
            public void onTick(long millisUntilFinished){
                countDownTimer.setText(String.valueOf(count));
                count++;
            }
            public  void onFinish(){
                countDownTimer.setText("FINISH!!");
            }
        }.start();
    }
}
```
Run this in your AVD, your resulting application is as below

!["<yoastmark](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)!["<yoastmark](https://androidmonks.com/wp-content/uploads/2018/11/countdowntimer.gif)

Drop in any comments you have below.

“Learn and Be Curious”

 

[Tweet](https://twitter.com/intent/tweet?text=Creating+a+CountDownTimer++AndroidMonks&url=https%3A%2F%2Fandroidmonks.com%2Fcountdowntimer%2F)Pin[Share1](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fcountdowntimer%2F)1 Shares Categories [Android](https://androidmonks.com/category/android/) [Leave a comment](https://androidmonks.com/countdowntimer/#respond) Post navigation[5 Alternatives to SlidingDrawer with example](https://androidmonks.com/slidingdrawer-alternatives/)[SwipeRefreshLayout in Android | AndroidMonks](https://androidmonks.com/swiperefreshlayout/)### Leave a Comment [Cancel reply](/countdowntimer/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"550","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "cc5bc2851c";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "550";var swpClickTracking = false; 