---
title: '# ProgressBar in Android – Implementation and Overview'
description: 'Progressbar in android implementation and overview - Tutorial in Android studio - ProgressBar in Android - Implementation and Overview'
date: '2018-09-04'
modified_date: '2018-09-04'
image: '/assets/images/posts'
---
# ProgressBar in Android – Implementation and Overview

 [September 4, 2018](https://androidmonks.com/progressbar-android-implementation/ "5:54 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 ProgressBar in Android – Android Studio](#ProgressBar_in_Android_8211_Android_Studio)
* [2 Indeterminate ProgressBar – XML definition](#Indeterminate_ProgressBar_8211_XML_definition)
* [3 Determinate ProgressBar – XML definition](#Determinate_ProgressBar_8211_XML_definition)
* [4 ProgressBar – Attributes](#ProgressBar_8211_Attributes)
* [5 ProgressBar – Activity Implementation](#ProgressBar_8211_Activity_Implementation)
	+ - * [5.0.0.1 Determinate Progress Bar example –](#Determinate_Progress_Bar_example_8211)
			* [5.0.0.2 ProgressBarActivity.java](#ProgressBarActivityjava)
			* [5.0.0.3 The resulting application is:](#The_resulting_application_is)
			* [5.0.0.4 Indeterminate ProgressBar Example](#Indeterminate_ProgressBar_Example)
* [6 Conclusion – Material Design Ideas](#Conclusion_8211_Material_Design_Ideas)
### ProgressBar in Android – Android Studio

ProgressBar is a integral part of every application. By using a ProgressBar you are letting the user know about how much time a process is going to take. This adds additional level of UI discipline to convey a progress to the user. We will see about how a ProgressBar can be implemented.

There are primarily to types of ProgressBars in Android. They are

* **Determinate ProgressBar –**When you know how long a process is going to take, we can set the values to this progress bar and let the user know about it.
* **Indeterminate ProgressBar –**If there is no information about how long a process might take, or a dynamic change in the progress time, we can use this progressbar to let the User know about it. It will just set a circle spinning continuously (Can be annoying sometimes though!!)

### Indeterminate ProgressBar – XML definition

We can create the indeterminate progress bar using the tag, <ProgressBar> like below


```
<ProgressBar
    android:layout\_height="wrap\_content"
    android:layout\_width="wrap\_content" />
```
The default attributes are layout\_height and layout\_width as always.

### Determinate ProgressBar – XML definition

The progressbar tag is the same, however we make use of another attribute to set the style like below.


```
style="@android:style/Widget.ProgressBar.Horizontal"
```
We can then make changes to it, by calling the method [setProgress(int)](https://developer.android.com/reference/android/widget/ProgressBar.html#setProgress(int)) or [incrementProgressBy(int)](https://developer.android.com/reference/android/widget/ProgressBar.html#incrementProgressBy(int)) to update the progress.

The complete definition is as below


```
<ProgressBar
    android:id="@+id/progress"
    style="@android:style/Widget.ProgressBar.Horizontal"
    android:layout\_width="wrap\_content"
    android:layout\_height="wrap\_content"
    android:progress="40"/>
```
The progress value set, will give a animated value like below

![ProgressBar - Determinate](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![ProgressBar - Determinate](https://androidmonks.com/wp-content/uploads/2018/09/Screen-Shot-2018-09-03-at-11.02.50-PM.png) ProgressBar – DeterminateThe style attribute is responsible for giving the shape and color fill to the bar.

### ProgressBar – Attributes

Some of the important attributes associated with Progress bars are:

* [`android:indeterminate`](https://developer.android.com/reference/android/widget/ProgressBar.html#attr_android:indeterminate) – This takes a boolean value, when set will enable the indeterminate behaviour of the progress bar.
* [`android:max`](https://developer.android.com/reference/android/widget/ProgressBar.html#attr_android:max) – This sets the maximum value for the progress bar. By default it is at 100, and any value set is calculated with 100 as the max. If changed, the animation changes based on the maximum value.
* [`android:progress`](https://developer.android.com/reference/android/widget/ProgressBar.html#attr_android:progress) – This determines the default progress value to the bar from 0 to max
* [`android:indeterminateBehavior`](https://developer.android.com/reference/android/widget/ProgressBar.html#attr_android:indeterminateBehavior) – This lets the progress bar know what the behaviour should be after it reaches the max value.
* [`android:indeterminateTintMode`](https://developer.android.com/reference/android/widget/ProgressBar.html#attr_android:indeterminateTintMode) – Applies a Tint mode to the indicator color of the circle looping. This can be changed through the activity also.
* `[android:progressBackgroundTint](https://developer.android.com/reference/android/widget/ProgressBar.html#attr_android:progressBackgroundTint)` – This gives the background color to the progress bar (The remaining portion when the progress is not shown)
* `[android:progressTint](https://developer.android.com/reference/android/widget/ProgressBar.html#attr_android:progressTint)` – This applies the color to the progress bar which shows the increments.
* [`android:min`](https://developer.android.com/reference/android/widget/ProgressBar.html#attr_android:min) – The minimum value of the progress bar. By default it is at 0.
* `[android:indeterminateDuration](https://developer.android.com/reference/android/widget/ProgressBar.html#attr_android:indeterminateDuration)` – This is kind of an ambiguous attribute. The indeterminate duration is set to timeout the spinning circle which is denoting the progress! But indeterminate progress bar’s mostly will not have this attribute set, since it lets the user know that they have to wait.

### ProgressBar – Activity Implementation

We will implement all the attributes and create a sample progress bar in Android Studio.

###### Determinate Progress Bar example –

**progress\_bar.xml**


```
<ProgressBar
    android:id="@+id/progress"
    style="@android:style/Widget.ProgressBar.Horizontal"
    android:layout\_width="wrap\_content"
    android:layout\_height="wrap\_content"
    android:progress="40"
    android:progressBackgroundTint="#888"
    android:progressTint="#9ff"/>
```
We can now set the progress at regular intervals using our activity like below.

###### ProgressBarActivity.java


```
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.ProgressBar;

public class ProgressBarActivity extends AppCompatActivity{
    ProgressBar pb;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.progress\_bar);
         pb = (ProgressBar) findViewById(R.id.progress);

        //Setting a initial progress of 0
        pb.setProgress(0);

        //Create a new thread to start updating the progress
        //WE do this inorder to not block the main thread
        Thread thread = new Thread(new Runnable(){
            @Override
            public void run() {
                for(int i =0;i<10;i++)
                {    //We will set the progress every 1 second
                    try {
                        Thread.sleep(1000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    pb.setProgress(10*i);

                }
            }
        });
        thread.start();
    }
}
```
In real projects, the progress may come from any server response, and we can update the value accordingly.

###### The resulting application is:

![Progressbar](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Progressbar](https://androidmonks.com/wp-content/uploads/2018/09/progress.gif) Progressbar – Determinate###### Indeterminate ProgressBar Example

**progress\_bar.xml**


```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:orientation="vertical"
    android:gravity="center">

    <ProgressBar
        android:id="@+id/progress"
        android:layout\_width="match\_parent"
        android:layout\_height="wrap\_content"
        android:indeterminateTint="#888"
        android:layout\_gravity="center"
        />
</LinearLayout>
```
On running this and generating the application i get

![Progressbar - Indeterminate](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Progressbar - Indeterminate](https://androidmonks.com/wp-content/uploads/2018/09/indeterminate.gif) Progressbar – Indeterminate### Conclusion – Material Design Ideas

You can make use of the Material design theme inspired from [here](https://github.com/caffeinalab/ti.material). You can implement custom progress bar’s with different shapes.

Keep in mind the following before deciding about the progress bar.

* Decide what the purpose of the progress bar is, will it be a determinate or a indeterminate bar
* Do not over use the indeterminate spinner progress bar. It can annoy the users
* Make sure you set the progress to the determinate bar wisely, user do not want to wait for extra seconds even after the bar has gotten full
* A simple wireframe diagram to know about the flow of activities can be really helpful
* Learn to create custom progress bar’s as it can separate you from the general themed ones.

Drop in any comments you have below. Check other related topic like rating bar [here.](https://androidmonks.com/ratingbar-android-implementation/)

***“Learn and Be Curious”***

[Tweet](https://twitter.com/intent/tweet?text=ProgressBar+in+Android+-+Implementation+and+Overview&url=https%3A%2F%2Fandroidmonks.com%2Fprogressbar-android-implementation%2F)Pin[Share1](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fprogressbar-android-implementation%2F)1 Shares Categories [Android](https://androidmonks.com/category/android/), [Android programming](https://androidmonks.com/category/android-programming/) [Leave a comment](https://androidmonks.com/progressbar-android-implementation/#respond) Post navigation[Is Android really Dying? What is Google thinking!!](https://androidmonks.com/is-android-really-dying-what-is-google-thinking/)[SeekBar in Android – Implementation and Overview](https://androidmonks.com/seekbar-android-implementation-overview/)### Leave a Comment [Cancel reply](/progressbar-android-implementation/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"393","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "cc5bc2851c";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "393";var swpClickTracking = false; 