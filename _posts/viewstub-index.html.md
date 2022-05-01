---
title: '# ViewStub in Android | AndroidMonks'
description: 'ViewStub is a lazy'
date: '2018-10-20'
modified_date: '2018-10-21'
image: '/assets/images/posts'
---
# ViewStub in Android | AndroidMonks

 [October 21, 2018October 20, 2018](https://androidmonks.com/viewstub/ "7:26 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 ViewStub in Android with Example](#ViewStub_in_Android_with_Example)
	+ [1.1 ViewStub – Basic Implementation](#ViewStub_8211_Basic_Implementation)
	+ [1.2 ViewStub – Learning the Public Methods](#ViewStub_8211_Learning_the_Public_Methods)
		- * + [1.2.0.0.1 getInflatedId()](#getInflatedId)
				+ [1.2.0.0.2 getLayoutInflater()](#getLayoutInflater)
				+ [1.2.0.0.3 getLayoutResource()](#getLayoutResource)
				+ [1.2.0.0.4 inflate()](#inflate)
				+ [1.2.0.0.5 setInflatedId(int inflatedId)](#setInflatedIdint_inflatedId)
				+ [1.2.0.0.6 setVisibility(int visibility)](#setVisibilityint_visibility)
	+ [1.3 Creating a ViewStub Example in Android Studio](#Creating_a_ViewStub_Example_in_Android_Studio)
## ViewStub in Android with Example

According to the Android Docs, “A [ViewStub](https://androidmonks.com/viewstub/) is an invisible, zero-sized View that can be used to lazily inflate layout resources at runtime”. This means that, it creates a dynamic creation of the View during the runtime of the app rather than Compile time creation (i.e). Consider the case of creating 10 ImageViews and loading 10 different images in a ScrollView. The time taken for the 10 Images to load even though it is in a ScrollView, somewhere outside, it takes up a lot of resource. Instead, if we go for a ViewStub which will load the ImageView only when the User scrolls down, and the View comes in focus of the User, this reduces the load time by a huge amount.

Performance improvement is the main reason to jump to a View Stub, but at the same time, helps in creating a better control over hierarchy of Views at Runtime.

When a [ViewStub](https://androidmonks.com/viewstub/) is made visible, or when `inflate()` is invoked, the layout resource is inflated. The View Stub then replaces itself in its parent with the inflated View or Views. Therefore, the ViewStub exists in the view hierarchy until `setVisibility(int)` or `inflate()` is invoked. The inflated View is added to the ViewStub’s parent with the ViewStub’s layout parameters. Similarly, you can define/override the inflate View’s id by using the ViewStub’s inflatedId property.

The above paragraph uses the word **inflate** and **deflate,**which are key functions of a View Stub. When you inflate a View, you create a View as the Application is running. The need for findViewById is not required here.

### ViewStub – Basic Implementation

Implementing a ViewStub is similar to implementing any other [View](https://androidmonks.com/android-ui-layout-concepts-knowledge/). We will be using the `ViewStub` tag.


```
<ViewStub
    android:layout\_width="wrap\_content"
    android:layout\_height="wrap\_content"
    android:layout="@layout/activity\_main"
    android:inflatedId="@+id/subView"
    android:id="@+id/stubId"/>
```
We suddenly have additional 3 more properties which we need to explain. What a View stub does is, it inflates a layout that we specify (If you know about Fragments, this is the same process that happens here). Once the layout is inflated, or fits the ViewStub at runtime, the View Stub is now removed from its parent. How will you access the removed View without a id attribute? You will use the inflateId attribute that will hold the View stub reference which inflated our layout (activity\_main in this example).

### ViewStub – Learning the Public Methods

Let us see what the ViewStub Public methods are. Some of the most commonly used important methods are

###### [getInflatedId](https://developer.android.com/reference/android/view/ViewStub.html#getInflatedId())()

Returns the inflateId post inflation of the required layout

###### [getLayoutInflater](https://developer.android.com/reference/android/view/ViewStub.html#getLayoutInflater())()

Returns the current layout inflater being used.

###### [getLayoutResource](https://developer.android.com/reference/android/view/ViewStub.html#getLayoutResource())()

Returns the layout resource that will be used by `[setVisibility(int)](https://developer.android.com/reference/android/view/ViewStub.html#setVisibility(int))` or `[inflate()](https://developer.android.com/reference/android/view/ViewStub.html#inflate())` to replace this StubbedView in its parent by another view.

###### [inflate](https://developer.android.com/reference/android/view/ViewStub.html#inflate())()

Inflate method is used to inflate the layout resource identified by `[getLayoutResource()](https://developer.android.com/reference/android/view/ViewStub.html#getLayoutResource())` and replace this StubbedView in its parent by the inflated layout resource.

###### [setInflatedId](https://developer.android.com/reference/android/view/ViewStub.html#setInflatedId(int))(int inflatedId)

Setter to set the value of the inflateId from the activity

###### [setVisibility](https://developer.android.com/reference/android/view/ViewStub.html#setVisibility(int))(int visibility)

When visibility is set to `[View.VISIBLE](https://developer.android.com/reference/android/view/View.html#VISIBLE)` or `[View.INVISIBLE](https://developer.android.com/reference/android/view/View.html#INVISIBLE)`, `[inflate()](https://developer.android.com/reference/android/view/ViewStub.html#inflate())` is invoked and this StubbedView is replaced in its parent by the inflated layout resource.

### Creating a ViewStub Example in Android Studio

Let us look at how a [ViewStub](https://androidmonks.com/viewstub/) is created in Android using [Android Studio IDE](https://androidmonks.com/android-studio/).

Create a simple **view\_stub.xml**


```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:orientation="vertical"
    >
<TextView
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:text="View Stub Text"
        android:textSize="40dp"
        android:textColor="@color/colorPrimaryDark"
        android:layout\_gravity="center"/>
<Button
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:text="Toggle View Stub"
        android:id="@+id/toggle\_view"
    android:layout\_gravity="center"/>

    <ViewStub
    android:layout\_width="wrap\_content"
    android:layout\_height="wrap\_content"
    android:visibility="gone"
    android:layout="@layout/sample\_view\_layout"
    android:inflatedId="@+id/subView"
    android:id="@+id/stubId"
    android:layout\_gravity="center"/>
</LinearLayout>
```
Here we are going to inflate the layout of the **sample\_view\_layout** file. We will create a sample\_view\_layout like below.


```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:orientation="vertical">
<ImageView
    android:layout\_width="wrap\_content"
    android:layout\_height="wrap\_content"
    android:id="@+id/image\_view"
    android:src="@drawable/monk"/>
    <TextView
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:id="@+id/text\_view"
        android:textSize="30dp"
        android:textColor="@color/colorAccent"
        android:text="Inflated Text"/>
</LinearLayout>
```
Time for our **Activity** to see how the ViewStub work according to our need. Name it **ViewStubActivity.java** like below.


```

import android.app.Activity;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.view.ViewStub;
import android.widget.Button;

public class ViewStubActivity extends Activity {
    ViewStub viewStub;
    Button toggleButton;
    Boolean Visibile = false;
    @Override
    protected  void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.view\_stub);
        viewStub = (ViewStub) findViewById(R.id.stubId);
        toggleButton = findViewById(R.id.toggle\_view);
        toggleButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if(Visibile) {
                    viewStub.setVisibility(View.GONE);
                    Visibile = false;
                }
                else
                {
                    viewStub.setVisibility(View.VISIBLE);
                    Visibile = true;
                }
            }
        });
    }
}
```
A simple setVisibility() call on the ViewStub shows the View. It can also be inflated using the **inflate()** public method.

Once done, this is how your final application looks like.

![ViewStub Toggle](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![ViewStub Toggle](https://androidmonks.com/wp-content/uploads/2018/10/toggleviewstub.gif) ViewStub Toggle 

Drop in any comments you have below.

***“Learn and be Curious”***

 

 

[Tweet](https://twitter.com/intent/tweet?text=ViewStub+in+Android++AndroidMonks&url=https%3A%2F%2Fandroidmonks.com%2Fviewstub%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fviewstub%2F)0 Shares Categories [Android](https://androidmonks.com/category/android/), [Android programming](https://androidmonks.com/category/android-programming/) [Leave a comment](https://androidmonks.com/viewstub/#respond) Post navigation[WebView in Android | AndroidMonks](https://androidmonks.com/webview/)[Chronometer in Android | AndroidMonks](https://androidmonks.com/chronometer/)### Leave a Comment [Cancel reply](/viewstub/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"542","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "c14f5ebe6a";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "542";var swpClickTracking = false; 