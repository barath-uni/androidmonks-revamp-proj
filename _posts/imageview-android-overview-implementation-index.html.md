---
title: '# ImageView in Android – Overview and Implementation'
description: 'ImageViews in Android Tutorial - Implementation and Overview. Tips and tricks included - ImageView in Android - Overview and Implementation'
date: '2018-08-11'
modified_date: '2018-08-11'
image: '/assets/images/posts'
---
# ImageView in Android – Overview and Implementation

 [August 11, 2018](https://androidmonks.com/imageview-android-overview-implementation/ "9:01 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 ImageView in Android – Overview and Implementation](#ImageView_in_Android_8211_Overview_and_Implementation)
	+ [1.1 ImageView – Other Important Properties](#ImageView_8211_Other_Important_Properties)
	+ [1.2 Using ImageViews in your Activity](#Using_ImageViews_in_your_Activity)
	+ [1.3 Some Quick Tips and Tricks with ImageView](#Some_Quick_Tips_and_Tricks_with_ImageView)
## ImageView in Android – Overview and Implementation

ImageView is important as it provides a way to display visual content on our Android App. There can be no application(Maybe almost no Application!!) without providing some form of visual content and ImageView caters the need for us. The implementation is given below.

![ImageView in android](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![ImageView in android](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-11-at-11.40.21-AM.png) ImageView in Android 


```
<ImageView

    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent" />
```
The layout\_width and layout\_height tags are mandatory properties that needs to be set. Once the Image View is constructed we can use it to hold images for us.

 

### ImageView – Other Important Properties

The properties include

android:id – gives a unique id to the image view

android:src – loads the image from the given folder

android:background – sets a background color to the image (Maybe useful when you are working on setting a profile picture background color).

android:padding, android:margin – responsible for setting the padding and margin properties (These are common just like other views)

[`android:scaleType`](https://developer.android.com/reference/android/widget/ImageView.html#attr_android:scaleType) – This attribute is responsible for controlling how the image fits inside the image view. You have to note that, the image by default, goes to the center of the image view, and this becomes sometimes very difficult to control. Use this attribute to set the value so that you can move your image inside to your needs.

Properties of scaleType includes – **fitXY**, **center**, **centerCrop**, **fillStart**, **centerInside**, **fitEnd**, **fitCenter**, **fitStart**, **matrix**.

`[android:adjustViewBounds](https://developer.android.com/reference/android/widget/ImageView.html#attr_android:adjustViewBounds)` – Sometime, we might need the image to protect its aspect ratio. Set this to preserve the aspect ratio.

`[android:tint](https://developer.android.com/reference/android/widget/ImageView.html#attr_android:tint)` – Play around with this property, it can be really helpful to provide better looking images.

[`android:tintMode`](https://developer.android.com/reference/android/widget/ImageView.html#attr_android:tintMode) – Blending mode to apply the tint of the color to the image.

 

The images needs to be checked if they satisfy your idea. Play around with the properties until you arrive at the desired combination for your image.

Check the below image i used for creating the signup/signin activity [here](https://androidmonks.com/how-do-you-go-about-developing-an-android-app-the-easy-way/).

![SignUp image view](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![SignUp image view](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-11-at-12.01.37-PM.png) SignUp Image View 

This is not your normal Image setup like you find in other tutorials. Can you guess how i created it. What are the properties i used here.

 


```
<ImageView
    android:layout\_width="90dp"
    android:layout\_height="90dp"
    android:background="@drawable/logo"
    android:layout\_centerHorizontal="true"
    android:layout\_marginTop="80dp"
    />
```
These properties came only after some trial and error. Always note that you have to keep in mind, **about device rotation, device size when creating images and also placing them.**

### Using ImageViews in your Activity

Image Views can be accessed inside the activity just like any other view. You can use the below code to create an object for the view and set any type of listener to it.

`ImageView imageView = (ImageView) findViewById(R.id.logoid);`  
 You can set listeners to it using the `setOnClickListener()` like below


```
imageView.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {


        //Perform any action here

    }
});
```
ImageView class contains other public activities that can be used to set the properties to it. You can check [here](https://developer.android.com/reference/android/widget/ImageView) for more public function calls.

 

### Some Quick Tips and Tricks with ImageView

If you have ever wondered, how the image in an Instagram or Facebook looks better, you need to understand about **aspect ratio** and image properties associated with ImageViews.

Remember, the basic height and width of the image that facebook and instagram asks you to crop, nothing more nothing less. This is because, the aspect ratio plays an important role in adjusting your image to the ImageView properly. If the aspect ratio is more or less, the picture looks poorly placed.

It is also to be noted, that every image sets to one background color very well. Can you guess what it is.

You guessed it right, it is **White.** All your favourite applications stick to the white background for giving a good clean look to the ImageView.

The next thing is to place the **images and text properly**. If you have a TextView along with the image be careful to properly place the Text. Do not place it too close or too far from the image.

There is a need to learn about how the **tint and blend mode** can perform lot of things to your image. Check [this](https://www.viralandroid.com/2016/02/adding-ripple-effect-animation-on-android-image-view.html) tutorial for example, how the image is given a “Ripple effect” on click.

As far as images are concerned with android. It is always some careful planning and at the end of the day some trial and error. Check what suits the look and feel of your application and stick to it.

You can drop in comments about imageView here, check out my tutorial [here](https://androidmonks.com/how-do-you-go-about-developing-an-android-app-the-easy-way/), where i teach you to create an android application in less than 3 hours (Am really serious!!).

 

*“Learn and Be Curious”*

 

[Tweet](https://twitter.com/intent/tweet?text=ImageView+in+Android+-+Overview+and+Implementation&url=https%3A%2F%2Fandroidmonks.com%2Fimageview-android-overview-implementation%2F)Pin2[Share1](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fimageview-android-overview-implementation%2F)3 Shares Categories [Uncategorized](https://androidmonks.com/category/uncategorized/) [Leave a comment](https://androidmonks.com/imageview-android-overview-implementation/#respond) Post navigation[EditText in Android – OverView and Implementation](https://androidmonks.com/edittext-android-implementation-usage/)[CheckBox in Android – Implementation and Overview](https://androidmonks.com/checkbox-android-implementation-overview/)### Leave a Comment [Cancel reply](/imageview-android-overview-implementation/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"192","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "5e9d84bb42";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "192";var swpClickTracking = false; 