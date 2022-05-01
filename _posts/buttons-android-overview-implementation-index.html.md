---
title: '# Buttons in Android – OverView and Implementation'
description: 'Android Buttons Implementation and Advanced Tips and Tricks Uncategorized - Buttons in Android - OverView and Implementation Android Monks'
date: '2018-08-09'
modified_date: '2018-08-10'
image: '/assets/images/posts'
---
# Buttons in Android – OverView and Implementation

 [August 10, 2018August 9, 2018](https://androidmonks.com/buttons-android-overview-implementation/ "9:31 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Buttons in Android – Implementation and Advanced Tips and Tricks](#Buttons_in_Android_8211_Implementation_and_Advanced_Tips_and_Tricks)
* [2 Creating a Image Button](#Creating_a_Image_Button)
* [3 Using Listeners for Buttons](#Using_Listeners_for_Buttons)
* [4 Buttons – Playing around and Creating that perfect One](#Buttons_8211_Playing_around_and_Creating_that_perfect_One)
## Buttons in Android – Implementation and Advanced Tips and Tricks

Android Buttons is an important View which is created using the Button Class. The XML implementation for Button is given below.

![Buttons in Android Implementation](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Buttons in Android Implementation](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-08-at-8.22.37-PM.png) Button XML implementationThe Button XML tag needs two mandatory properties, they are

`android:layout_width` & `android:layout_height`

There are various types of Buttons like Radio ,Toggle, Compound Buttons. We will see about it in the future posts.

 

## Creating a Image Button

It is pretty simple to create a Image button.The XML tag ImageButton is responsible for creating it. It has the same properties as that of a Button.

![ImageButton XML Implementation](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![ImageButton XML Implementation](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-08-at-8.32.55-PM.png) ImageButton in androidThe android:src property is set to include the icon to be present in the Button.

You can also include text into the Button and Image at the same time using the property.

android:drawableLeft (Load the icon/image) and android:src (With the text value for the button).


```
<Button
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:text="Value"
    android:drawableLeft="@drawable/bag"/>

```
 

## Using Listeners for Buttons

Button listeners are very useful to capture the button press or any activities on the button (Double press is also available as a listner). It is to be noted that, the button click action can also be specified in the XML itself, but it is not recommended. Implementation for onClickListener is like below.


```
signupback.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {

            //Do some action here

    }
});

```
Note that, onClickListener has a function called onClick which has to be overridden to create your action.

The onClick function is fired every time the button is clicked and the respective action is performed.

Another way to implement the onClick is like below. (Calling the method in XML document).


```
<Button
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:text="Value"
    android:onClick="methodname"
    android:drawableLeft="@drawable/bag"/>
```
This method is however not advised because of the lack of control in the Activity. XML calls are difficult to track in case of a complex project.

 

## Buttons – Playing around and Creating that perfect One

If you have read my post here, there is a need to make sure your UI is appealing to the end User. It is mandatory to create the properly designed button. I will discuss about the importance of some of the properties and how to use them to create a good looking button for your project.

Some of the important button properties that we will be needing to create the button is  
 `android:gravity="center"//Gravity is important to align the text inside the button`  
 `android:textColor="#fff" //Text Color is important inorder to improve the visual appeal`  
 Additionally

android:padding

android:margin

android:background

android:height

android:width

If you want to know how to put all of this together, check out my tutorial [here](https://androidmonks.com/how-do-you-go-about-developing-an-android-app-the-easy-way/). You can create a Android Application in less than 3 hours!!.

The above properties are important inorder to improve the visual appeal of the buttons you create.

Check this Material Design Google [document](https://developer.android.com/guide/topics/ui/look-and-feel/) for more information.

*“Learn and Be Curious”*

[Tweet](https://twitter.com/intent/tweet?text=Buttons+in+Android+-+OverView+and+Implementation&url=https%3A%2F%2Fandroidmonks.com%2Fbuttons-android-overview-implementation%2F)Pin2[Share3](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fbuttons-android-overview-implementation%2F)5 Shares Categories [Android programming](https://androidmonks.com/category/android-programming/), [Uncategorized](https://androidmonks.com/category/uncategorized/) [Leave a comment](https://androidmonks.com/buttons-android-overview-implementation/#respond) Post navigation[TextView in Android – Android Studio With Example](https://androidmonks.com/textview-android-usage-implementation/)[EditText in Android – OverView and Implementation](https://androidmonks.com/edittext-android-implementation-usage/)### Leave a Comment [Cancel reply](/buttons-android-overview-implementation/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"179","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "5e9d84bb42";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "179";var swpClickTracking = false; 