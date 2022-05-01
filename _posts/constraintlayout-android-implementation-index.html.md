---
title: '# ConstraintLayout Android – Overview and Implementation'
description: 'ConstraintLayout in Android Complete Tutorial - Implementation and Explanation - ConstraintLayout Android - Overview and Implementation Android Monks'
date: '2018-08-20'
modified_date: '2018-08-20'
image: '/assets/images/posts'
---
# ConstraintLayout Android – Overview and Implementation

 [August 20, 2018August 20, 2018](https://androidmonks.com/constraintlayout-android-implementation/ "12:53 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 ConstraintLayout in Android – Overview and Implementation](#ConstraintLayout_in_Android_8211_Overview_and_Implementation)
* [2 ConstraintLayout – Complete Properties Overview](#ConstraintLayout_8211_Complete_Properties_Overview)
* [3 ConstraintLayout – Playing with the properties](#ConstraintLayout_8211_Playing_with_the_properties)
* [4 Resizing your Views](#Resizing_your_Views)
* [5 Align the Edge of the Views](#Align_the_Edge_of_the_Views)
* [6 Baseline Aligning of Views](#Baseline_Aligning_of_Views)
* [7 View Sizing](#View_Sizing)
	+ - [7.0.1 Adjusting Size](#Adjusting_Size)
		- [7.0.2 Wrap Content](#Wrap_Content)
		- [7.0.3 Size is Fixed](#Size_is_Fixed)
* [8 Bias in ConstraintLayout](#Bias_in_ConstraintLayout)
	+ [8.1 Vertical Bias](#Vertical_Bias)
	+ [8.2 Horizontal Bias](#Horizontal_Bias)
* [9 ConstraintLayout – Best Practices](#ConstraintLayout_8211_Best_Practices)
### ConstraintLayout in Android – Overview and Implementation

ConstraintLayout in short is [RelativeLayout](https://androidmonks.com/relativelayout-android-overview-implementation/) on Drugs!! This is a viewgroup and was released as part of the [v7 support library](https://developer.android.com/topic/libraries/support-library/setup) that came out last year. There is almost endless amount of flexibility that this Layout provides. We will take a look at all of them.

What does ConstraintLayout really do? How different is it from RelativeLayout?

First of all, ConstraintLayout is still in Beta mode. It is being developed and the perception among developer’s is that, it is done inorder to resemble the layout development in IOS. Also, the main reason is to improve performance when deep nesting is involved, as we can easily create constrained layouts instead of nesting a linear layout and a framelayout inside.

Coming on to the coding part of it. We will use, the following dependencies.

Add this in your **Project Gradle**


```
repositories {
    google()
}
```
Add this in your **App gradle**


```
dependencies {
    implementation 'com.android.support.constraint:constraint-layout:1.1.2'
}
```
**Sync your Application**

### ConstraintLayout – Complete Properties Overview

The following are the additional properties that have come up with ConstraintLayout:

* **layout\_constraintTop\_toTopOf**  —  Align the **top** of the desired view to the **top** of another.
* **layout\_constraintTop\_toBottomOf**—  Align the **top** of the desired view to the **bottom** of another.
* **layout\_constraintBottom\_toTopOf** — Align the **bottom** of the desired view to the **top** of another.
* **layout\_constraintBottom\_toBottomOf**  — Align the **bottom** of the desired view to the **bottom** of another.
* **layout\_constraintLeft\_toTopOf**   — Align the **left** of the desired view to the **top** of another.
* **layout\_constraintLeft\_toBottomOf**  — Align the **left** of the desired view to the **bottom** of another.
* **layout\_constraintLeft\_toLeftOf**  — Align the **left** of the desired view to the **left** of another.
* **layout\_constraintLeft\_toRightOf** — Align the **left** of the desired view to the **right** of another.
* **layout\_constraintRight\_toTopOf** — Align the **right** of the desired view to the **top** of another.
* **layout\_constraintRight\_toBottomOf** — Align the **right** of the desired view to the **bottom** of another.
* **layout\_constraintRight\_toLeftOf**  — Align the **right** of the desired view to the **left** of another.
* **layout\_constraintRight\_toRightOf**— Align the **right** of the desired view to the **right** of another.
* If desired, attributes supporting **start** and **end**are also available in place of **left** and **right** alignment.

### ConstraintLayout – Playing with the properties

We will be accessing the ConstraintLayout through the **Design Editor**and see the capabilities.

![This blue screen is our editor - ConstraintLayout](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![This blue screen is our editor - ConstraintLayout](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-20-at-9.08.37-AM.png) This blue screen is our editor – ConstraintLayoutOnce you have created declared the constraint layout and built it, add it in the XML, and start editing the design.

I have dropped a [TextView](https://androidmonks.com/textview-android-usage-implementation/), a [Button](https://androidmonks.com/buttons-android-overview-implementation/) and an ImageView to the ConstraintLayout.

Lets see the things we can achieve with Constraint Layout.

### Resizing your Views

It is very simple to resize your Views using the **resize cursor**.

![Resize the ImageView](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Resize the ImageView](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-20-at-9.16.27-AM.png) Resize the ImageView**It is important to note that, an error pops up on your editor like this**

![ConstraintLayout error](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![ConstraintLayout error](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-20-at-9.18.19-AM.png) ConstraintLayout errorThis error occurs, because this view is **not constrained.**Every view inside the ConstraintLayout needs to be given a proper **Vertical or Horizontal constraint.**

In our case, this can be manually added, or we can simply click the **Infer constraints button on our editor.**

![Infer Constraints](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Infer Constraints](https://androidmonks.com/wp-content/uploads/2018/08/Slice-1-1.png) Infer ConstraintsPressing this will automatically add code in your editor to infer the **Horizontal or Vertical Constraints** easily.

### Align the Edge of the Views

How easy will it be, if you can easily align the views with respect to another view. This creates a flatter hierarchy instead of deeper nesting of layouts!!

We can do this by, dragging the **anchor point to connect with another anchor point.**

![ConstraintLayout editor](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![ConstraintLayout editor](https://androidmonks.com/wp-content/uploads/2018/08/ezgif.com-video-to-gif.gif) ConstraintLayout editorIf you see clearly, as soon as the anchor point of the ImageView is clicked, it is highlighting all the anchor points of TextView . This will give you and idea of how the linking can take place!!

### Baseline Aligning of Views

Once you have seen how the Edge alignment happens, you can perform similar alignment with respect to the baseline of any view also. Baseline of a textview is the bottom line of the Text inside the textview. We will see how the baseline alignment is done.

![Baseline alignment in ConstraintLayout](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Baseline alignment in ConstraintLayout](https://androidmonks.com/wp-content/uploads/2018/08/ezgif.com-video-to-gif-copy2.gif) Baseline alignment in ConstraintLayout### View Sizing

We have looked at ways to align views with one another. Here we will see how to **adjust the view size for different content on different screen.**

Using the method in **Resize Your Views section** above **hardcodes** the values on your view. You can instead use the below method to dynamically resize based on the screen size.

Within the properties section of the layout editor, you’ll notice a section which states the actual size constraints for the selected view.

##### Adjusting Size

![Any Size - ConstraintLayout](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Any Size - ConstraintLayout](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-20-at-5.56.06-PM.png) Any Size – ConstraintLayoutThe lines inside the square mean that, the view will match the parent and resize accordingly. Fun way to denote that though!!

##### Wrap Content

![Wrap Content - Constraint Layout](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Wrap Content - Constraint Layout](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-20-at-5.56.33-PM.png) Wrap Content – Constraint LayoutThe arrows say that the content will be wrapped by the view. That is, the view will be as big as the content inside it only.

##### Size is Fixed

![Fixed Size - ConstraintLayout](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Fixed Size - ConstraintLayout](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-20-at-5.56.51-PM.png) Fixed Size – ConstraintLayoutThe lines state that the views height and width are of a fixed size, which is declared below.

### Bias in ConstraintLayout

You can set the bias to the View, by just adjusting the bar on the side. A Horizontal or a Vertical Bias can be added.

Bias is nothing but a **additional distance by which the view should move** in the vertical or horizontal axis with respect to another view.

#### Vertical Bias

![Adding Bias Value - Constraint Layout : Vertical](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Adding Bias Value - Constraint Layout : Vertical](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-20-at-6.03.03-PM.png) Adding Bias Value – Constraint Layout : VerticalSince my [ImageView](https://androidmonks.com/imageview-android-overview-implementation/) is vertically linked to the button and the ImageView above, i can make changes to the vertical Bias.

#### Horizontal Bias

If the elements are linked to each other on the sides, we can add horizontal bias like below.

![Horizontal Bias - Constraint Layout](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Horizontal Bias - Constraint Layout](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-20-at-6.06.50-PM.png) Horizontal Bias – Constraint Layout### ConstraintLayout – Best Practices

It is imperative to consider the performance improvement when you use constraint layout. There are situations when you wont find performance improvement with respect to a simple LinearLayout, however, the main use case of a constraint layout is to **flatten the heirarchy.**

This means, when there is a deep nesting ([Relativelayout](https://androidmonks.com/relativelayout-android-overview-implementation/), [framelayout](https://androidmonks.com/framelayout-in-android-implementation-and-overview/), [linearlayout](https://androidmonks.com/linearlayout-android-implementation-overview/) etc nested), we can flatten the heirarchy by simply using the constraint layout.

The performance improvement is clearly seen in that case. It is still in Beta mode, experiments conducted with it, so we can expect for some improvements and better usability in the coming months. Use this layout only when there is a absolute necessity. If you can manage with the other Layouts, go for it and consider this as a secondary option for now.

 

*“Learn and Be Curious”*

[Tweet](https://twitter.com/intent/tweet?text=ConstraintLayout+Android+-+Overview+and+Implementation&url=https%3A%2F%2Fandroidmonks.com%2Fconstraintlayout-android-implementation%2F)Pin[Share1](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fconstraintlayout-android-implementation%2F)1 Shares Categories [Android programming](https://androidmonks.com/category/android-programming/), [Uncategorized](https://androidmonks.com/category/uncategorized/) [Leave a comment](https://androidmonks.com/constraintlayout-android-implementation/#respond) Post navigation[ScrollView in Android – Overview and Implementation](https://androidmonks.com/scrollview-android-tutorial-overview/)[Spinner in Android – Implementation and Overview](https://androidmonks.com/spinner-android-implementation-overview/)### Leave a Comment [Cancel reply](/constraintlayout-android-implementation/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"280","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "cc5bc2851c";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "280";var swpClickTracking = false; 