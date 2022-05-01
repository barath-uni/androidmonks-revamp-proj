---
title: '# ViewAnimator in Android | AndroidMonks'
description: 'ViewAnimator is a base class of FrameLayout. It is used mainly to provide in/out animation to a VIew. This tutorial explains in-depth usage of ViewAnimator'
date: '2018-10-24'
modified_date: '2018-10-24'
image: '/assets/images/posts'
---
# ViewAnimator in Android | AndroidMonks

 [October 24, 2018October 24, 2018](https://androidmonks.com/viewanimator/ "6:02 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 ViewAnimator in Android with Example](#ViewAnimator_in_Android_with_Example)
	+ [1.1 ViewAnimator – Basic Implementation](#ViewAnimator_8211_Basic_Implementation)
	+ [1.2 ViewAnimator – Public Methods](#ViewAnimator_8211_Public_Methods)
	+ [1.3 Creating a Application with ViewAnimator in Android Studio](#Creating_a_Application_with_ViewAnimator_in_Android_Studio)
## ViewAnimator in Android with Example

[ViewAnimator](https://androidmonks.com/viewanimator/) is a Base class of a [FrameLayout](https://androidmonks.com/framelayout-in-android-implementation-and-overview/), which defines the Animation on it when switching between views. ViewAnimator can be altered in order to change the in-Animation and out-Animation of the [FrameLayout](https://androidmonks.com/framelayout-in-android-implementation-and-overview/) or defining custom animation to the Views at hand.

We will see, how to create a simple but effective ViewAnimator in Android below.

### ViewAnimator – Basic Implementation

We will be using the `ViewAnimator` tag in our layout like below


```
<ViewAnimator
    android:layout\_width="wrap\_content"
    android:layout\_height="wrap\_content"
    android:id="@+id/view\_animator">
</ViewAnimator>
```
As always, this View takes the default attributes **layout\_width** and **layout\_height.**You can make use of the attributes of a View or a ViewGroup also. Check here for the list of all the attributes related to it.

Additionally there are some attributes specific to a [ViewAnimator](https://androidmonks.com/viewanimator/), they are as given below.

* **android:animateFirstView –**This specifies if the view should be animated or not when the view it is displayed for the first time
* **android:inAnimation –**Specifies the animation to use when the view is shown
* **android:outAnimation –**Specifies the animation to use when the view is hidden

These are the 3 attributes that are specific to View Animator.

### ViewAnimator – Public Methods

There are a list of most used public methods for View Animator. We will see a list of all the important methods below

* **getAnimateFirstView() –**Returns whether the current View should be animated the first time the ViewAnimator is displayed
* **getInAnimation() –**Returns the Animation set for current View when it enters the screen
* **getOutAnimation() –**Returns the Animation that is set for the current View when it exits the screen
* **setAnimateFirstView(boolean animate) –**Setter method to set the First view to either be animated or not animated
* **setInAnimation(Animation inAnimation) –**Setter method to give In-Animation to the Current View
* **setOutAnimation(Animation inAnimation)** – Setter method to give the Out-Animation to the Current View
* **showNext() –**Manually shows the next child element.
* **showPrevious() –**Manually shows the previous child element

These public methods are specific to the [ViewAnimator](https://androidmonks.com/viewanimator/) class and is used in our example below. There are other generic method calls with respect to a View, you can check them out here.

### Creating a Application with ViewAnimator in Android Studio

We will use the Android Studio IDE to create our next View Animator Application like below. It is important to note that, there are various use cases for a FrameLayout, but seldom do developers tap on to the powerful Base class, ViewAnimator. You can define custom animations also if needed. For now. we will try to define some standard Animations on to the View.

The aim is to create a 3 Child View [ViewAnimator](https://androidmonks.com/viewanimator/) with [TextView](https://androidmonks.com/textview-android-usage-implementation/), [Button](https://androidmonks.com/buttons-android-overview-implementation/), [ImageView](https://androidmonks.com/imageview-android-overview-implementation/) in it. The [Buttons](https://androidmonks.com/buttons-android-overview-implementation/) next and previous will perform the showNext() and showPrevious() operations on them. Check the layout implementation below

Create your layout named **view\_animator.xml**


```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:orientation="vertical"
    android:gravity="center">

    <ViewAnimator
        android:layout\_width="match\_parent"
        android:layout\_height="wrap\_content"
        android:id="@+id/view\_animator">
        <TextView
            android:layout\_width="match\_parent"
            android:layout\_height="match\_parent"
            android:text="First View"
            android:textSize="40dp"/>
        <ImageView
            android:layout\_width="match\_parent"
            android:layout\_height="match\_parent"
            android:src="@drawable/monk"/>
        <Button
            android:layout\_width="match\_parent"
            android:layout\_height="match\_parent"
            android:text="Button View"/>
    </ViewAnimator>
    <LinearLayout
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content">
        <Button
            android:layout\_width="wrap\_content"
            android:layout\_height="wrap\_content"
            android:text="Next"
            android:id="@+id/next"/>
        <Button
            android:layout\_width="wrap\_content"
            android:layout\_height="wrap\_content"
            android:text="Previous"
            android:id="@+id/prev"/>
    </LinearLayout>
</LinearLayout>
```
Once your layout is set, it is time for the Activity. Check the **ViewAnimatorActivity.java** we have created below.


```

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.Button;
import android.widget.ViewAnimator;

public class ViewAnimatorActivity extends AppCompatActivity{
    ViewAnimator viewAnimator;
    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.view\_animator);
        viewAnimator = findViewById(R.id.view\_animator);
        Button prev = findViewById(R.id.prev);
        Button next = findViewById(R.id.next);
        Animation inAnimation = AnimationUtils.loadAnimation(this, android.R.anim.fade\_in);
        Animation outAnimation = AnimationUtils.loadAnimation(this, android.R.anim.fade\_out);
        viewAnimator.setInAnimation(inAnimation);
        viewAnimator.setOutAnimation(outAnimation);
        next.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                viewAnimator.showNext();
            }
        });
        prev.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                viewAnimator.showPrevious();
            }
        });
    }
}
```
On the out set it is self explanatory, but we have to see how the animation is created. Here, we use the AnimationUtils class and load our Animation. AnimationUtils class contains lot of useful methods. You can check [here](https://developer.android.com/reference/android/view/animation/AnimationUtils) for the entire list of methods in that class

Once that is done, make sure you have made changes to your Manifest as usual. The resulting Application is like below.

![ViewAnimator usage](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![ViewAnimator usage](https://androidmonks.com/wp-content/uploads/2018/10/viewanimator.gif) ViewAnimator usageDrop in any comments you have below.

***“Learn and Be Curious”***

 

[Tweet](https://twitter.com/intent/tweet?text=ViewAnimator+in+Android++AndroidMonks&url=https%3A%2F%2Fandroidmonks.com%2Fviewanimator%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fviewanimator%2F)0 Shares Categories [Android](https://androidmonks.com/category/android/), [Android programming](https://androidmonks.com/category/android-programming/), [app android](https://androidmonks.com/category/app-android/) [Leave a comment](https://androidmonks.com/viewanimator/#respond) Post navigation[Chronometer in Android | AndroidMonks](https://androidmonks.com/chronometer/)[Singleton for FusedLocationProviderClient](https://androidmonks.com/fusedlocationproviderclient-singleton/)### Leave a Comment [Cancel reply](/viewanimator/?utm_source=rss&utm_medium=rss&utm_campaign=viewanimator#respond)

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
var socialWarfare = {"addons":[],"post\_id":"548","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "8a797f9cbb";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "548";var swpClickTracking = false; 