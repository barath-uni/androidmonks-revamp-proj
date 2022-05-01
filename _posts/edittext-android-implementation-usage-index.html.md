---
title: '# EditText in Android – OverView and Implementation'
description: 'EditText in Android - Overview and Implementation - Android Monks EditText in Android - OverView and Implementation Uncategorized'
date: '2018-08-10'
modified_date: '2018-08-10'
image: '/assets/images/posts'
---
# EditText in Android – OverView and Implementation

 [August 10, 2018](https://androidmonks.com/edittext-android-implementation-usage/ "8:56 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1   EditText in Android – Implementation and Advanced Tips & Tricks](#_EditText_in_Android_8211_Implementation_and_Advanced_Tips_Tricks)
	+ [1.1 EditText Properties](#EditText_Properties)
	+ [1.2 Accessing EditText in the Activity](#Accessing_EditText_in_the_Activity)
	+ [1.3 Custom EditText – Advanced Tips and Tricks](#Custom_EditText_8211_Advanced_Tips_and_Tricks)
##   EditText in Android – Implementation and Advanced Tips & Tricks

EditText is a View and is used to provide editable text by the user. This is used mainly in forms and other places where user has to input values from their side. Edit Text is derived from TextView and is powerful. It creates a place for interaction between the system and the User. The properties of EditText are given below.

Creating a EditText in XML

![EditText in XML](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![EditText in XML](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-10-at-8.55.12-AM.png) Edit Text in XMLCode Snippet:


```
<EditText
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent" />


```
### EditText Properties

The important properties that are needed to implement the View is given below.

android:text – Where the text inside the TextBox is specified

android:background – Provides a background color/image/shape (Possible to provide shapes through style property)

android:drawableRight – Important inorder to provide any icons inside the field (Improves the UI feel of the App)

android:id – Gives a unique id to the view with which it can be referenced

android:visibility – Provides visibility to the text (‘gone’, ‘visible’,’invisible’).

There are several more properties associated with EditText (properties like margin, gravity, layout\_gravity are default for any views and applicable for Edit Text also).

Check [this](https://developer.android.com/reference/android/widget/EditText) page for all the related properties.

 

### Accessing EditText in the Activity

In order to access the EditText in the Activity we call the findViewById and pass the id to map it to the signIn variable like below.


```
EditText signIn = (EditText) findViewById(R.id.signin);
```
The variable signIn can then be used to set any properties. Check [here](https://developer.android.com/reference/android/widget/EditText), for list of all the public functions that are available.

I have set the visibility to invisible using the code below.


```
signIn.setVisibility(View.INVISIBLE);

```
Consider the activity i have created below. Can you spot the Edit Text here.

![Spot the Edit Text](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Spot the Edit Text](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-10-at-11.20.32-AM-582x1024.png) Spot the Edit Text view 

!["<yoastmark](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)!["<yoastmark](https://androidmonks.com/wp-content/uploads/2018/08/Slice-2.png)

Can you guess how i created it. What are the properties i used?


```
<EditText 
android:id="@+id/username"
android:layout\_width="match\_parent"
android:layout\_height="wrap\_content"
android:layout\_marginLeft="22dp"
android:layout\_marginRight="35dp"
android:layout\_marginTop="20dp"
android:background="#0000"
android:drawableRight="@drawable/user"
android:hint="Username"
android:inputType="text"
android:padding="16dp"
android:textColor="#ADCCE2"
android:textColorHint="#ADCCE2"
android:textSize="16dp" />
```
The above properties are important to understand so that we can improve on the overall aesthetics of the Application.

You can check out my post [here](https://androidmonks.com/list-of-things-you-need-to-design-a-professional-android-app/), i have listed tools to use to create a professional looking application. I modelled this activity based on that.

### Custom EditText – Advanced Tips and Tricks

There are ways to create a custom Edit Text based on the fonts that you need using the code below. Our class inherits the EditText and overrides some of its methods to create the Custom View like we need.


```
package customfonts;

import android.content.Context;
import android.graphics.Typeface;
import android.util.AttributeSet;
import android.widget.EditText;


public class MyEditText extends EditText {

    public MyEditText(Context context, AttributeSet attrs, int defStyle) {
        super(context, attrs, defStyle);
        init();
    }

    public MyEditText(Context context, AttributeSet attrs) {
        super(context, attrs);
        init();
    }

    public MyEditText(Context context) {
        super(context);
        init();
    }

    private void init() {
        if (!isInEditMode()) {
            Typeface tf = Typeface.createFromAsset(getContext().getAssets(), "fonts/Lato-Regular.ttf");
            setTypeface(tf);
        }
    }

}

```
Include this in your project to create the custom view. You can replace the fonts/Lato-Regular using the font of your choice. Once, the custom view is created, XML becomes.


```
<!-- Using customfont tag here-->

<customfonts.MyEditText
android:id="@+id/username"
android:layout\_width="match\_parent"
android:layout\_height="wrap\_content"
android:layout\_marginLeft="22dp"
android:layout\_marginRight="35dp"
android:layout\_marginTop="20dp"
android:background="#0000"
android:drawableRight="@drawable/user"
android:hint="Username"
android:inputType="text"
android:padding="16dp"
android:textColor="#ADCCE2"
android:textColorHint="#ADCCE2"
android:textSize="16dp" />


```
Learn to place the views and make sure you have a proper wireframe design before you create a layout. Check the post [here](https://androidmonks.com/how-do-you-go-about-developing-an-android-app-the-easy-way/), to know how i created an application in less than 3 hours(Am really serious!!!).

*“Learn and be Curious”.*

[Tweet](https://twitter.com/intent/tweet?text=EditText+in+Android+-+OverView+and+Implementation&url=https%3A%2F%2Fandroidmonks.com%2Fedittext-android-implementation-usage%2F)Pin1[Share2](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fedittext-android-implementation-usage%2F)3 Shares Categories [Android programming](https://androidmonks.com/category/android-programming/), [Uncategorized](https://androidmonks.com/category/uncategorized/) [Leave a comment](https://androidmonks.com/edittext-android-implementation-usage/#respond) Post navigation[Buttons in Android – OverView and Implementation](https://androidmonks.com/buttons-android-overview-implementation/)[ImageView in Android – Overview and Implementation](https://androidmonks.com/imageview-android-overview-implementation/)### Leave a Comment [Cancel reply](/edittext-android-implementation-usage/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"185","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "c14f5ebe6a";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "185";var swpClickTracking = false; 