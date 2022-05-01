---
title: '# RelativeLayout in Android – Overview and Implementation'
description: 'RelativeLayout in Android Tutorial- Implementation and Overview RelativeLayout in Android - Overview and Implementation Android Monks Uncategorized'
date: '2018-08-17'
modified_date: '2018-08-17'
image: '/assets/images/posts'
---
# RelativeLayout in Android – Overview and Implementation

 [August 17, 2018](https://androidmonks.com/relativelayout-android-overview-implementation/ "10:33 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 RelativeLayout in Android – Overview and Implementation](#RelativeLayout_in_Android_8211_Overview_and_Implementation)
	+ [1.1 RelativeLayout – Overview](#RelativeLayout_8211_Overview)
	+ [1.2 RelativeLayout -Frequently used Properties](#RelativeLayout_-Frequently_used_Properties)
	+ [1.3 RelativeLayout – Implementation](#RelativeLayout_8211_Implementation)
## RelativeLayout in Android – Overview and Implementation

RelativeLayout is a frequently used layout in Android. Just like [LinearLayout](https://androidmonks.com/linearlayout-android-implementation-overview/), we will be able to align the child elements but this time, it can be relative to each other. The Views & ViewGroups [here](https://androidmonks.com/android-ui-layout-concepts-knowledge/) talks about how the Viewgroup is responsible for holding the views.

**Elements arrangement in Relative Layout:**

!["<yoastmark](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)!["<yoastmark](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-17-at-8.57.01-AM-210x300.png)

We will see about how to implement the Relative Layout in Android.

### RelativeLayout – Overview

!["<yoastmark](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)!["<yoastmark](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-17-at-8.59.36-AM-1024x106.png)


```
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent">
</RelativeLayout>
```
By default, the two properties that has to be set are `android:layout_height` & `android:layout_width.`

These properties are default for any view or viewgroup.

### RelativeLayout -Frequently used Properties

Relative layout is primarily used when you need to structure elements without any regard to horizontal or vertical stacking (One below the other). You can position the child views with respect to the parent or with respect to each other (Using ID’s).

General Properties include:

[`android:gravity`](https://developer.android.com/reference/android/widget/RelativeLayout.html#attr_android:gravity) – To set the gravity of the elements inside the RelativeLayout

[`android:ignoreGravity`](https://developer.android.com/reference/android/widget/RelativeLayout.html#attr_android:ignoreGravity) – Tells that the elements under RelativeLayout will not be affected by gravity.

**`android:id`** – General property to set Id for the RelativeLayout

**`android:margin/android:padding`** – You can move the entire layout but not the elements inside with this property.

The properties used by the elements under RelativeLayout are:

`[android:layout\_alignParentTop](https://developer.android.com/reference/android/widget/RelativeLayout.LayoutParams.html#attr_android:layout_alignParentTop)` – Boolean Value, when set to “True”

`[android:layout\_centerVertical](https://developer.android.com/reference/android/widget/RelativeLayout.LayoutParams.html#attr_android:layout_centerVertical)` – This is also a boolean property, when set will center align the child views vertically with its parents.

[`android:layout_below`](https://developer.android.com/reference/android/widget/RelativeLayout.LayoutParams.html#attr_android:layout_below) – This will set the view with respect to another View (Takes the ID of another view as its value). Sets the view below another view.

[`android:layout_toRightOf`](https://developer.android.com/reference/android/widget/RelativeLayout.LayoutParams.html#attr_android:layout_toRightOf) – This will set the view to the RightOf another View (Takes the ID as its value)

### RelativeLayout – Implementation

The relative layout is a bit tricky to implement because, you will have to carefully align the elements relative to each other. See this implementation below


```
<?xml version="1.0" encoding="utf-8"?>

<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent">


    <TextView
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:text="First View"/>
    <TextView
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:text="Second View"/>
</RelativeLayout>

```
This will result in an overlap of textviews.

!["<yoastmark](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)!["<yoastmark](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-17-at-9.06.33-AM-300x182.png)

The reason is, we have not positioned the child views relatively.We will set the properties and see the result.


```
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
android:layout\_width="match\_parent"
android:layout\_height="match\_parent">


<TextView
    android:layout\_width="wrap\_content"
    android:layout\_height="wrap\_content"
    android:text="First View"
    android:layout\_centerVertical="true"/>
<TextView
    android:layout\_width="wrap\_content"
    android:layout\_height="wrap\_content"
    android:text="Second View"
    />
</RelativeLayout>
```
Notice, that i have set the First [Textview](https://androidmonks.com/textview-android-usage-implementation/) to center\_vertical. The result is

![Textview center vertically aligned](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Textview center vertically aligned](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-17-at-3.50.49-PM-295x300.png) Textview center vertically alignedNotice how FirstView is Center – Vertically aligned and Second TextView is still aligned at the top.

You can align the elements based on the respective id’s like below.


```
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
android:layout\_width="match\_parent"
android:layout\_height="match\_parent">


<TextView
    android:layout\_width="wrap\_content"
    android:layout\_height="wrap\_content"
    android:text="First View"
    android:id="@+id/first"/>
<TextView
    android:layout\_width="wrap\_content"
    android:layout\_height="wrap\_content"
    android:text="Second View"
    android:layout\_below="@id/first"
    />
</RelativeLayout>
```
See how the elements are stacked now.

![Relative layout arrangement - One below the other](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Relative layout arrangement - One below the other](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-17-at-3.53.23-PM-300x199.png) Relative layout arrangement – One below the otherSimilarly, we can play around with the other properties to sucessfully create a relative representation of views.

Drop in any comments regarding Relative Layout, and check my [view & viewgroups](https://androidmonks.com/android-ui-layout-concepts-knowledge/) to know more about the layouts available in android.

*“Learn and Be Curious”*

[Tweet](https://twitter.com/intent/tweet?text=RelativeLayout+in+Android+-+Overview+and+Implementation&url=https%3A%2F%2Fandroidmonks.com%2Frelativelayout-android-overview-implementation%2F)Pin[Share1](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Frelativelayout-android-overview-implementation%2F)1 Shares Categories [Android programming](https://androidmonks.com/category/android-programming/), [Uncategorized](https://androidmonks.com/category/uncategorized/) [Leave a comment](https://androidmonks.com/relativelayout-android-overview-implementation/#respond) Post navigation[LinearLayout in Android – Implementation and Overview](https://androidmonks.com/linearlayout-android-implementation-overview/)[FrameLayout in Android – Implementation and Overview](https://androidmonks.com/framelayout-in-android-implementation-and-overview/)### Leave a Comment [Cancel reply](/relativelayout-android-overview-implementation/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"249","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "c14f5ebe6a";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "249";var swpClickTracking = false; 