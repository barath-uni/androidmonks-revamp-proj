---
title: '#  Android UI Layout – Views & View Groups'
description: 'Android UI Layout Concepts To Know -Views & ViewGroups - Android Monks - Android UI Layout- Views & View Groups Uncategorized'
date: '2018-08-07'
modified_date: '2018-08-24'
image: '/assets/images/posts'
---
# Android UI Layout- Views & View Groups

 [August 24, 2018August 7, 2018](https://androidmonks.com/android-ui-layout-concepts-knowledge/ "9:00 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1  Android UI Layout – Views & View Groups](#Android_UI_Layout_8211_Views_View_Groups)
	+ - * + [1.0.0.0.1 Mostly Used Views](#Mostly_Used_Views)
				+ [1.0.0.0.2 Mostly Used ViewGroups](#Mostly_Used_ViewGroups)
		- [1.0.1 Usage of the View and ViewGroups](#Usage_of_the_View_and_ViewGroups)
#  Android UI Layout – Views & View Groups

Android’s layout is majorly made of Views which occupy the rectangular region of the UI Layout. Every region that occupies the UI is a object of View which is created from the View class. There are lots of Views that I will be covering over the next posts. We will majorly see how the View and View Groups occupy the UI Layout.

**Views**

Think of these as blocks that construct the User Interface. Every rectangular block that is visible to your eyes is created with a View. 12 Views are widely used in Android currently.

**View Groups**

Think of these as the invisible components that holds Views and ViewGroups alike. However, note that, View is the base class of ViewGroup. The ViewGroup, however is the base Class for Layouts (Confusing! Check the image below).

![Views and Viewgroups](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Views and Viewgroups](http://cdn.learncomputer.com/wp-content/uploads/2012/01/image0033.png) Viewgroup hold Views and Viewgroups.The following are the Views & ViewGroups mostly used in Android.

##### Mostly Used Views

**TextView** – To hold Texts (Label Holder – User cannot edit the text)

[**EditText**](https://androidmonks.com/edittext-android-implementation-usage/) – The user can modify or enter text

[**Button**](https://androidmonks.com/buttons-android-overview-implementation/) – A simple View to trigger some action

[**ImageView**](https://androidmonks.com/imageview-android-overview-implementation/) – View to hold images

[**ImageButton**](https://androidmonks.com/imageview-android-overview-implementation/) – Used to display a button with image.

[**CheckBox**](https://androidmonks.com/checkbox-android-implementation-overview/) – A simple two state button which can be either checked or unchecked. Think of these as a View to toggle Values.

[**RadioButton**](https://androidmonks.com/radiobutton-android-implementation/) – To perform Multiple selection for a particular event

[**RadioGroup**](https://androidmonks.com/radiobutton-android-implementation/) – RadioGroup is used to group RadioButtons together. This is because RadioButtons are mutually exclusive.

[**ListView**](https://androidmonks.com/listview-android-implementation-overview/) – This is primarily to print List of action items.

[**CardView**](https://androidmonks.com/cardview-in-android-tutorial-creation-and-implementation/) – Very powerful material design update that creates individual cards in the Android UI.

[**Spinner**](https://androidmonks.com/spinner-android-implementation-overview/) – Not the circle spinning that you have seen. These are more like drop down list which holds arrays of values for you to choose from.

[**AutoCompleteTextView**](https://androidmonks.com/autocompletetextview-android-tutorial/) – Like the name suggests, it provides autocomplete feature from the list of values you feed to it.

##### Mostly Used ViewGroups

View groups are base class for layouts (Think of these as invisible layers covering your views). Widely used Views are

[**LinearLayout**](https://androidmonks.com/linearlayout-android-implementation-overview/) – Basic, simple linear arrangement of Views inside it (Vertical or Horizontal)

[**RelativeLayout**](https://androidmonks.com/relativelayout-android-overview-implementation/) – Relative arrangement of the views (Specifying what is below what)

[**ConstraintLayout**](https://androidmonks.com/constraintlayout-android-implementation/) (Recent Material Design Update) – This is a very powerful Layout which allows you to resize the views inside it.

[**FrameLayout**](https://androidmonks.com/framelayout-in-android-implementation-and-overview/) – Blocks out an area to hold a single view inside it (Advisable to use only one child view inside it)

[**RecyclerView**](https://androidmonks.com/recyclerview-adapter-cardview-implementation/) – Think of these as a simple way to repeat a view (Dynamic loading of a user names can use Recycler View with TextView inside it)

[**ScrollView**](https://androidmonks.com/scrollview-android-tutorial-overview/) – You guessed it right. Anything inside this ViewGroup can be scrolled independently

**CoordinatorLayout** (Recent Update) – Think of these as a Update to hold multiple Views inside a FrameLayout. This is very useful for moving your elements with the CoordinatorLayout with just the XML only.

### Usage of the View and ViewGroups

It is primary to know how each and every View and ViewGroups work. The beginner can check out my post [here](https://androidmonks.com/top-blogs-with-exceptional-content-to-learn-android-programming/), to find all the useful materials to create a proper layout design.

Most widely used Views are TextView, Button, EditText, ImageView.

ViewGroups to hold these Views – LinearLayout, RecycleView, FrameLayout.

I will be explaining all the necessary Views and ViewGroups One by One from my next posts.

Read my post [here](https://androidmonks.com/top-blogs-with-exceptional-content-to-learn-android-programming/), which consists of list of all the materials to create a proper and professional Looking UI for your Android Application if you are already familiar with all the Views and ViewGroups.

 

*“Learn and be Curious”.*

 

[Tweet](https://twitter.com/intent/tweet?text=Android+UI+Layout-+Views+%26+View+Groups&url=https%3A%2F%2Fandroidmonks.com%2Fandroid-ui-layout-concepts-knowledge%2F)Pin1[Share1](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fandroid-ui-layout-concepts-knowledge%2F)2 Shares Categories [Android programming](https://androidmonks.com/category/android-programming/), [Uncategorized](https://androidmonks.com/category/uncategorized/) [Leave a comment](https://androidmonks.com/android-ui-layout-concepts-knowledge/#respond) Post navigation[Android Shared Preferences – Implementation & Design Patterns](https://androidmonks.com/android-shared-preferences-implementation-design-patterns/)[TextView in Android – Android Studio With Example](https://androidmonks.com/textview-android-usage-implementation/)### Leave a Comment [Cancel reply](/android-ui-layout-concepts-knowledge/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"163","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "5e9d84bb42";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "163";var swpClickTracking = false; 