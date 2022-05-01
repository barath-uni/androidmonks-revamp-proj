---
title: '# ToolBar in Android | AndroidMonks'
description: 'ToolBar in Android part of Android 5.0 is a successor to Action Bar now called as AppBar. A ToolBar Application is created using Menu as ane example'
date: '2018-11-21'
modified_date: '2018-11-21'
image: '/assets/images/posts'
---
# ToolBar in Android | AndroidMonks

 [November 21, 2018November 21, 2018](https://androidmonks.com/toolbar-android/ "5:30 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 ToolBar in Android | AndroidMonks](#ToolBar_in_Android_AndroidMonks)
	+ [1.1 ToolBar Elements](#ToolBar_Elements)
	+ [1.2 ToolBar – Basic Implementation](#ToolBar_8211_Basic_Implementation)
	+ [1.3 ToolBar Layout – Attributes List](#ToolBar_Layout_8211_Attributes_List)
	+ [1.4 ToolBar – Public Methods](#ToolBar_8211_Public_Methods)
	+ [1.5 ToolBar Example Application – Android Studio](#ToolBar_Example_Application_8211_Android_Studio)
		- * [1.5.0.1 Adding a Notification Menu button(A 3 dotted menu on the side)](#Adding_a_Notification_Menu_buttonA_3_dotted_menu_on_the_side)
				+ [1.5.0.1.1 Step 1: Create your Layout](#Step_1_Create_your_Layout)
				+ [1.5.0.1.2 Step 2: Creating a Menu File](#Step_2_Creating_a_Menu_File)
				+ [1.5.0.1.3 Step 3 : Add items to your Menu](#Step_3_Add_items_to_your_Menu)
				+ [1.5.0.1.4 Step 4: Create ToolBar Activity](#Step_4_Create_ToolBar_Activity)
				+ [1.5.0.1.5 Step 5: Run the App in your AVD](#Step_5_Run_the_App_in_your_AVD)
## ToolBar in Android | AndroidMonks

The toolbar in Android was released as part of the API 21 release, and it contains a lot of flexible components within it. The more general idea of an Action Bar now called as App Bar (The bar at the top of an Application) can be replaced by this ToolBar. The advantage, however, is that ToolBars can be placed at any arbitrary position without respect to the View hierarchy in the layout.

According to the Docs, “A Toolbar is a generalization of for`action bars` use within application layouts. While an action bar is traditionally part of an opaque[`Activity's`](https://androidmonks.com/activities-in-android/) window decor controlled by the framework, a Toolbar may be placed at any arbitrary level of nesting within a view hierarchy. An application may choose to designate a Toolbar as the action bar for an Activity using the method`setActionBar()`“.

A sample Toolbar is given below,

![Sample Toolbar acting as a Action Bar](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Sample Toolbar acting as a Action Bar](https://androidmonks.com/wp-content/uploads/2018/11/Screen-Shot-2018-11-03-at-9.14.46-PM.png) Sample Toolbar acting as an Action Bar### ToolBar Elements

* ***A navigation button**.* This may be an Up arrow, navigation menu toggle, close, collapse, done or another glyph of the app’s choosing. This button should always be used to access other navigational destinations within the container of the Toolbar and its signified content or otherwise leave the current context signified by the Toolbar. The navigation button is vertically aligned within the Toolbar’s `minimum height`if set.
* ***A branded logo image.*** This may extend to the height of the bar and can be arbitrarily wide.
* ***A title and subtitle**.* The title should be a signpost for the Toolbar’s current position in the navigation hierarchy and the content contained there. The subtitle, if present should indicate any extended information about the current content. If an app uses a logo image it should strongly consider omitting a title and subtitle.
* ***One or more custom views**.* The application may add arbitrary child views to the Toolbar. They will appear at this position within the layout. If a child view’s`Toolbar.LayoutParams` indicates a `Gravity` value of`CENTER_HORIZONTAL` the view will attempt to center within the available space remaining in the Toolbar after all other elements have been measured.
* *An.`action menu`* The menu of actions will pin to the end of the Toolbar offering a few frequent, important or typical actions along with an optional overflow menu for additional actions. Action buttons are vertically aligned within the Toolbar’s `minimum height`if set.

### ToolBar – Basic Implementation

Make sure you are using the below line in your App Gradle


```
implementation 'com.android.support:design:28.0.0'
```
You can go on and implement a simple ToolBar with the below definition.


```
<?xml version="1.0" encoding="utf-8"?>
<android.support.v7.widget.Toolbar xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:id="@+id/toolbar"
    android:layout\_width="match\_parent"
    android:layout\_height="wrap\_content"
    android:background="@color/colorPrimary"
    android:theme="@style/ThemeOverlay.AppCompat.Dark">
</android.support.v7.widget.Toolbar>
```
The View just like any other view takes the default attribute **layout\_width** and **layout\_height**. On top of that, there are also some important attributes to be given as well. There is a list of attributes that the ToolBar layout specifically takes, they are

### ToolBar Layout – Attributes List

**`android:logo`** – ToolBar layout provides the property of adding a Logo on the App Bar. This takes a drawable value to set as a logo

`android:subtitle` – The Subtitle value can be given in navigationMode=”normal”.

`android:title` – The Title associated with the item.

`android:titleTextColor` – Applies a text color to the Title.

`android:popupTheme` – Reference to a theme that should be used to inflate popups shown by widgets in the toolbar.

`android:navigationIcon` – Icon drawable to use for the navigation button located at the start of the toolbar. The icon is generally to show a Menu that can be opened.

`android:collapseContentDescription` – Text to set as the content description for the collapse button

To view the entire list of all the attributes available for ToolBar layout you can check the post here.

### ToolBar – Public Methods

The list of important Public Methods of the Toolbar is,

[**getLogo**](https://developer.android.com/reference/android/widget/Toolbar.html#getLogo())**() –**Returns the logo, which is an object of the Drawable.

**[getLogoDescription](https://developer.android.com/reference/android/widget/Toolbar.html#getLogoDescription())() –**Returns the Description given to the Logo.

**[getTitle](https://developer.android.com/reference/android/widget/Toolbar.html#getTitle())()/[getSubtitle](https://developer.android.com/reference/android/widget/Toolbar.html#getSubtitle())() –**Returns the Title/Subtitle of the given Toolbar.

**[inflateMenu](https://developer.android.com/reference/android/widget/Toolbar.html#inflateMenu(int))(int resId) –**Inflate a menu resource into this toolbar.

**[onTouchEvent](https://developer.android.com/reference/android/widget/Toolbar.html#onTouchEvent(android.view.MotionEvent))([MotionEvent](https://developer.android.com/reference/android/view/MotionEvent.html) ev) –**This callback is useful to handle the Touch Motions Events.

**[setLogo](https://developer.android.com/reference/android/widget/Toolbar.html#setLogo(int))(int resId) –**Sets a Logo Drawable from the given Resource Id.

**[setTitle](https://developer.android.com/reference/android/widget/Toolbar.html#setTitle(java.lang.CharSequence))([CharSequence](https://developer.android.com/reference/java/lang/CharSequence.html) title)/[setTitle](https://developer.android.com/reference/android/widget/Toolbar.html#setTitle(int))(int resId) –**Setter to set the values of the Title/Subtitle to the given ToolBar

### ToolBar Example Application – Android Studio

Below is a short and clear example of creating a ToolBar using [Android Studio IDE](https://androidmonks.com/android-studio/).

##### Adding a Notification Menu button(A 3 dotted menu on the side)

Even before we start with the example, make sure you follow these linearly. The example portion is arranged in such a way to help you go through this without the haphazard creation of files here and there.

**Before you start: Make sure you have the below dependency in your gradle. Sync the project before you proceed.**


```
implementation 'com.android.support:design:28.0.0'
```
###### Step 1: Create your Layout

In this step, we will create a simple Layout. Nothing fancy, just the one tag below.


```
<?xml version="1.0" encoding="utf-8"?>
<android.support.v7.widget.Toolbar xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:id="@+id/toolbar"
    android:layout\_width="match\_parent"
    android:layout\_height="wrap\_content"
    android:background="@color/colorPrimary"
    android:theme="@style/ThemeOverlay.AppCompat.Dark"
    app:logo="@drawable/tick">

</android.support.v7.widget.Toolbar>
```
I am making use of some of the attributes mentioned above.

Here **app:logo**(Which is optional) is set to a drawable tick.png which is present in my **res>drawable** folder.

![Drawable Tick for toolbar logo](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Drawable Tick for toolbar logo](https://androidmonks.com/wp-content/uploads/2018/11/Screen-Shot-2018-11-21-at-8.52.15-PM.png) Drawable Tick for toolbar logo###### Step 2: Creating a Menu File

The objective of this example is to create a Menu. You can create a menu layout inside the **res>menu** folder like given below.

**Create a directory named menu**

![Create a directory named menu](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Create a directory named menu](https://androidmonks.com/wp-content/uploads/2018/11/Screen-Shot-2018-11-21-at-9.03.38-PM-1024x984.png) Create a directory named menu**Create a Menu Resource file inside this menu directory**

![Menu file inside menu directory](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Menu file inside menu directory](https://androidmonks.com/wp-content/uploads/2018/11/Screen-Shot-2018-11-21-at-9.04.04-PM-1024x772.png) Menu file inside menu directoryI already have one created called **navigation. We will be adding the menu items inside this file.**

###### Step 3 : Add items to your Menu

Fill out your Menu file with the required items. I am adding a total of 3 items inside like below.


```
<?xml version="1.0" encoding="utf-8"?>
<menu xmlns:android="http://schemas.android.com/apk/res/android">

    <item
        android:id="@+id/navigation\_home"
        android:title="@string/title\_home" />

    <item
        android:id="@+id/navigation\_dashboard"
        android:title="@string/title\_dashboard" />

    <item
        android:id="@+id/navigation\_notifications"
        android:title="@string/title\_notifications" />
</menu>
```
Upon completion of creating the Menu. Time to create our Activity.

###### Step 4: Create ToolBar Activity

The ToolBarActivity.class will be the Activity to hold our tool\_bar layout. Create a simple Activity and **setContentView** the **tool\_bar** layout like below.


```
public class ToolBarActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.tool\_bar);
        //getting the toolbar
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        toolbar.setTitle("AndroidMonks");
        setSupportActionBar(toolbar);

    }
}
```
In onCreate Activity, we will be putting our ToolBar in place of the ActionBar(One of the property of ToolBar is that, it can be placed anywhere on the layout, can also replace the ActionBar). The **setSupportActionBar** method is very important to make the ToolBar act as a ActionBar which will be responsible for holding the Menu.

We will extend this to add the Menu we created in Step 3. Add the following methods(These are menu inflation callbacks).


```
@Override
public boolean onCreateOptionsMenu(Menu menu) {
    MenuInflater menuInflater = getMenuInflater();
    menuInflater.inflate(R.menu.navigation, menu);
    return true;
}
@Override
public boolean onOptionsItemSelected(MenuItem item) {

    switch(item.getItemId()){
        case R.id.navigation\_home:
            Toast.makeText(this, "You clicked Home", Toast.LENGTH\_SHORT).show();
            break;

        case R.id.navigation\_dashboard:
            Toast.makeText(this, "You clicked Dashboard", Toast.LENGTH\_SHORT).show();
            break;

        case R.id.navigation\_notifications:
            Toast.makeText(this, "You clicked Notification", Toast.LENGTH\_SHORT).show();
            break;
    }
    return true;
}
```
In **onCreateOptionsMenu()**method, we make use of the MenuInflater class to inflate the Menu file we created in Step 3.

Once the inflated Menu is set, it by default places it in our ActionBar(Which is replaced by the ToolBar like we saw above).

We handle the Click of the Items of the Menu using the **onOptionsItemSelected()** (Callback to handle the items click callback).

Upon creating this, ToolBarActivity looks like below.


```

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.widget.Toast;

public class ToolBarActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.tool\_bar);
        //getting the toolbar
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        toolbar.setTitle("AndroidMonks");
        setSupportActionBar(toolbar);

    }
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater menuInflater = getMenuInflater();
        menuInflater.inflate(R.menu.navigation, menu);
        return true;
    }
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {

        switch(item.getItemId()){
            case R.id.navigation\_home:
                Toast.makeText(this, "You clicked Home", Toast.LENGTH\_SHORT).show();
                break;

            case R.id.navigation\_dashboard:
                Toast.makeText(this, "You clicked Dashboard", Toast.LENGTH\_SHORT).show();
                break;

            case R.id.navigation\_notifications:
                Toast.makeText(this, "You clicked Notification", Toast.LENGTH\_SHORT).show();
                break;
        }
        return true;
    }
}
```
###### Step 5: Run the App in your AVD

Upon running the Application in your AVD(Or a physical device) the below Application is created.

![Toolbar application](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Toolbar application](https://androidmonks.com/wp-content/uploads/2018/11/toolbar-588x1024.gif) Toolbar applicationThis is just scratching the top of the surface when it comes to creating a simple ToolBar application. Drop in any comments you have in the section below.

***“Learn and Be Curious”***

[Tweet](https://twitter.com/intent/tweet?text=ToolBar+in+Android++AndroidMonks&url=https%3A%2F%2Fandroidmonks.com%2Ftoolbar-android%2F)Pin3[Share1](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Ftoolbar-android%2F)4 Shares Categories [Android](https://androidmonks.com/category/android/) [Leave a comment](https://androidmonks.com/toolbar-android/#respond) Post navigation[Adsense Account Disabled | Invalid Activity](https://androidmonks.com/adsense-disabled/)[Top Android Studio ShortCut Commands | AndroidMonks](https://androidmonks.com/android-studio-shortcut/)### Leave a Comment [Cancel reply](/toolbar-android/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"642","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "cc5bc2851c";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "642";var swpClickTracking = false; 