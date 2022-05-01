---
title: '# 5 Alternatives to SlidingDrawer with example'
description: 'SlidingDrawer have been deprecated from API 17. List of 5 SlidingDrawer with complete example and sample app is given in this tutorial. Check them out.'
date: '2018-11-03'
modified_date: '2018-11-03'
image: '/assets/images/posts'
---
# 5 Alternatives to SlidingDrawer with example

 [November 3, 2018](https://androidmonks.com/slidingdrawer-alternatives/ "5:42 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 5 Alternatives to SlidingDrawer with example](#5_Alternatives_to_SlidingDrawer_with_example)
	+ [1.1 Sliding Content Drawer](#Sliding_Content_Drawer)
		- * [1.1.0.1 Creating a Sliding Drawer – Basic Steps](#Creating_a_Sliding_Drawer_8211_Basic_Steps)
		- [1.1.1 SlidingRootNav](#SlidingRootNav)
			* + [1.1.1.0.1 SlidingRootNav – Basic Implementation](#SlidingRootNav_8211_Basic_Implementation)
		- [1.1.2 IWAHalfModalPresenter](#IWAHalfModalPresenter)
			* [1.1.2.1 IWAHalfModalPresenter – Basic Implementation](#IWAHalfModalPresenter_8211_Basic_Implementation)
				+ [1.1.2.1.1 Creating the Layout](#Creating_the_Layout)
		- [1.1.3 Custom Navigation Drawer](#Custom_Navigation_Drawer)
			* [1.1.3.1 Custom Navigation Drawer – Implementation](#Custom_Navigation_Drawer_8211_Implementation)
				+ [1.1.3.1.1 Creating the Layout](#Creating_the_Layout-2)
				+ [1.1.3.1.2 Creating the Activity](#Creating_the_Activity)
	+ [1.2 AndroidSlidingUpPanel – Umano](#AndroidSlidingUpPanel_8211_Umano)
		- * + [1.2.0.0.1 SlidingUpPanel – Basic Implementation](#SlidingUpPanel_8211_Basic_Implementation)
## 5 Alternatives to SlidingDrawer with example

SlidingDrawers have always been attractive, containing cool animation and provides better UI experience to the user. However, the SlidingDrawer library has been deprecated in API 17. In this tutorial we look at [5 super cool open source Sliding Drawers](https://androidmonks.com/slidingdrawer-alternatives/) that are very easy to implement. Use them in your next project!

All the below samples are created using [Android Studio IDE](https://androidmonks.com/android-studio/). If you aren’t familiar with the environment take a look at the tutorial before jumping here.

### Sliding Content Drawer

![Demo](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Demo](https://github.com/Whhoesj/sliding-content-drawer/raw/master/demo.gif?raw=true) Sliding Content DrawerThis is a pretty looking SlidingDrawer with some x/y scaling effect on the Menu Bar. The contributor is [Wouter Habets](https://github.com/Whhoesj). Link to the Git repository is [here](https://github.com/Whhoesj/sliding-content-drawer).

Jumping on to the Know How. This is a fairly simple to implement Slider. Sample Tutorial version below.

##### Creating a Sliding Drawer – Basic Steps

Start off by defining the dependencies like below.


```
compile 'com.wouterhabets:slidingcontentdrawer:1.0'
```
Once this is done, we create the XML layout like we need. I will take a leaf from the Git repository and try to implement a similar looking layout.

**content\_drawer.xml**


```
<?xml version="1.0" encoding="utf-8"?>
<com.wouterhabets.slidingcontentdrawer.widget.SlidingDrawerLayout
    android:id="@+id/drawer\_layout"
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:background="?attr/colorPrimaryDark"
    android:fitsSystemWindows="true">

    <ImageView
        android:layout\_width="match\_parent"
        android:layout\_height="match\_parent"
        android:scaleType="centerCrop"
        android:src="@drawable/ic\_launcher\_background"/>

    <FrameLayout
        android:layout\_width="match\_parent"
        android:layout\_height="match\_parent"
        android:tag="menu">

        <include layout="@layout/drawer\_menu"/>

    </FrameLayout>

    <android.support.design.widget.CoordinatorLayout
        android:layout\_width="match\_parent"
        android:layout\_height="match\_parent"
        android:background="?android:colorBackground"
        android:elevation="6dp"
        android:fitsSystemWindows="true"
        android:tag="content">

        <View
            android:layout\_width="match\_parent"
            android:layout\_height="10dp"
            android:background="@android:color/holo\_green\_light"/>

        <android.support.design.widget.AppBarLayout
            android:layout\_width="match\_parent"
            android:layout\_height="wrap\_content"
            android:theme="@style/AppTheme">

            <android.support.v7.widget.Toolbar
                android:id="@+id/toolbar"
                android:layout\_width="match\_parent"
                android:layout\_height="?attr/actionBarSize"
                android:background="?attr/colorPrimary"
                app:popupTheme="@style/AppTheme"/>

        </android.support.design.widget.AppBarLayout>

        <RelativeLayout
            android:layout\_width="match\_parent"
            android:layout\_height="match\_parent"
            android:paddingBottom="@dimen/activity\_vertical\_margin"
            android:paddingLeft="@dimen/activity\_horizontal\_margin"
            android:paddingRight="@dimen/activity\_horizontal\_margin"
            android:paddingTop="@dimen/activity\_vertical\_margin"
            app:layout\_behavior="@string/appbar\_scrolling\_view\_behavior">

            <TextView
                android:layout\_width="match\_parent"
                android:layout\_height="match\_parent"
                android:gravity="center"
                android:text="Sample Center Text"
                android:textSize="25dp"/>
        </RelativeLayout>

    </android.support.design.widget.CoordinatorLayout>

</com.wouterhabets.slidingcontentdrawer.widget.SlidingDrawerLayout>
```
Like you can see, i am using the custom designed `com.wouterhabets.slidingcontentdrawer.widget.SlidingDrawerLayout` SlidingDrawer as the root tag.

According to the docs, it is important to create a ToolBar and pass it as a parameter while initialising the SlidingDrawer. The example additionally also includes our **drawer\_menu.xml**which will be like below.


```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout\_width="match\_parent"
    android:layout\_height="wrap\_content"
    android:layout\_gravity="start|center\_vertical"
    android:orientation="vertical"
    android:paddingLeft="16dp">

    <TextView
        android:layout\_width="match\_parent"
        android:layout\_height="42dp"
        android:layout\_gravity="start|center\_vertical"
        android:text="First Menu"
        android:textColor="@android:color/white"/>

    <TextView
        android:layout\_width="match\_parent"
        android:layout\_height="42dp"
        android:layout\_gravity="start|center\_vertical"
        android:text="Second Menu"
        android:textColor="@android:color/white"/>

    <TextView
        android:layout\_width="match\_parent"
        android:layout\_height="42dp"
        android:layout\_gravity="start|center\_vertical"
        android:text="Third Menu"
        android:textColor="@android:color/white"/>

    <TextView
        android:layout\_width="match\_parent"
        android:layout\_height="42dp"
        android:layout\_gravity="start|center\_vertical"
        android:text="Fourth Menu"
        android:textColor="@android:color/white"/>

    <TextView
        android:layout\_width="match\_parent"
        android:layout\_height="42dp"
        android:layout\_gravity="start|center\_vertical"
        android:text="Fifth Menu"
        android:textColor="@android:color/white"/>
</LinearLayout>
```
Once the drawer\_menu.xml is created. It is a matter of creating our sample [activity](https://androidmonks.com/activities-in-android/). Be sure to sync the dependencies before trying all this.

**ContentSlider.java**


```
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;

import com.wouterhabets.slidingcontentdrawer.widget.SlidingDrawerLayout;
import com.wouterhabets.slidingcontentdrawer.widget.SlidingDrawerToggle;

public class ContentSlider extends AppCompatActivity{
    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.content\_slider);
        SlidingDrawerLayout drawer = (SlidingDrawerLayout) findViewById(R.id.drawer\_layout);
        SlidingDrawerToggle toggle = new SlidingDrawerToggle(
                this, drawer, null, R.string.fab\_transformation\_scrim\_behavior, R.string.fab\_transformation\_sheet\_behavior);
        drawer.setDrawerListener(toggle);
        toggle.syncState();
    }
}
```
The SlidingDrawer Layout will be holding the Custom Tag we saw in the first layout file. The SlidingDrawerToggle will specify which element can toggle the menu layout.

The method parameter includes **context, drawer Object, Toolbar Object (Some element in the toolbar), OpenDrawerContent Desc, CloseDrawerContent Desc**

The first two parameters are important, the rest can be set to NULL if needed!

Once this is done, the output looks like this.

![ContentSlider ](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![ContentSlider ](https://androidmonks.com/wp-content/uploads/2018/10/contentslider1.gif) ContentSlider#### SlidingRootNav

![ContentSlider 2](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![ContentSlider 2](https://github.com/yarolegovich/SlidingRootNav/raw/master/art/sample.gif) ContentSlider 2This one is probably lot of content loaded into one Library. Probably the simplest to implement of the ones in the list (Given the complexity of creating it from the scratch). This one is created by [yarolegovich](https://github.com/yarolegovich). You can see the implementation details below,

###### SlidingRootNav – Basic Implementation

Be sure to add this in your App Gradle.


```
compile 'com.yarolegovich:sliding-root-nav:1.1.0'
```
**Note:The minimum SDK should be 16 for this library to work. Make sure you set the minSdkVersion to 16 in your app Gradle.**

I have taken the leaf out of the Git Sample and created a very brute and simple implementation of the Sliding Root Nav. Take a look at the below code.

From the docs its clear that there is a need for 2 XML layouts. **sliding\_layout.xml**is as below.


```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/activity\_main"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:background="@android:color/white"
    android:orientation="vertical">

    <android.support.design.widget.AppBarLayout
        android:layout\_width="match\_parent"
        android:layout\_height="wrap\_content">

        <android.support.v7.widget.Toolbar
            android:id="@+id/toolbar"
            android:layout\_width="match\_parent"
            android:layout\_height="wrap\_content"
            android:background="@color/colorPrimary" />
    </android.support.design.widget.AppBarLayout>

    <FrameLayout
        android:id="@+id/container"
        android:layout\_width="match\_parent"
        android:layout\_height="0dp"
        android:layout\_weight="1" />
</LinearLayout>
```
This is taken out from the Git sample code only. We follow this up with creating a **drawer\_menu.xml**which will hold the menu bar for our Application.

**drawer\_menu.xml**


```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:background="#008821"
    android:orientation="vertical">

    <Space
        android:layout\_width="wrap\_content"
        android:layout\_height="90dp" />

    <TextView
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:paddingLeft="24dp"
        android:paddingRight="24dp"
        android:paddingStart="24dp"
        android:text="Some Text 0"
        android:textSize="12sp" />

    <LinearLayout
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:baselineAligned="false"
        android:orientation="horizontal"
        android:paddingLeft="24dp"
        android:paddingRight="24dp">

        <TextView
            android:layout\_width="wrap\_content"
            android:layout\_height="wrap\_content"
            android:layout\_marginTop="6dp"
            android:text="Some Text1" />

        <TextView
            android:layout\_width="wrap\_content"
            android:layout\_height="wrap\_content"
            android:text="Main Text"
            android:textStyle="bold"
            android:textSize="34sp" />

    </LinearLayout>

    <Space
        android:layout\_width="wrap\_content"
        android:layout\_height="56dp" />

    <android.support.v7.widget.RecyclerView
        android:id="@+id/list"
        android:layout\_width="240dp"
        android:layout\_height="wrap\_content" />

    <Space
        android:layout\_width="wrap\_content"
        android:layout\_height="40dp" />

</LinearLayout>
```
From the Git example, all we have to do is stitch the two layouts together using the **SlidingRootNavBuilder** object.

Add this in your activity like i have below.


```
new SlidingRootNavBuilder(this)
  .withMenuLayout(R.layout.menu\_left\_drawer)
  .inject();
```
On top of this there are some additional properties/callbacks specified in the Git Example and i am implementing them like you can see. Here i have named it **ContentSlider.java.**


```
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.Toolbar;
import com.yarolegovich.slidingrootnav.SlidingRootNavBuilder;

public class ContentSlider extends AppCompatActivity{

    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.sliding\_layout);
         new SlidingRootNavBuilder(this)
                .withMenuOpened(false)
                .withContentClickableWhenMenuOpened(false)
                .withSavedState(savedInstanceState)
                .withMenuLayout(R.layout.drawer\_menu)
                .inject();
    }
}
```
Upon completion of the [Activity](https://androidmonks.com/activities-in-android/), time to run it and check how the Application turns out to be.

![ContentSlider 2](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![ContentSlider 2](https://androidmonks.com/wp-content/uploads/2018/11/contentslider2.gif) ContentSlider 2That seems to be a pretty cool way of animating the Content Slider, I am literally in love with how simple the implementation is. Don’t forget to bookmark the Git repository!!

#### IWAHalfModalPresenter

![Content Slider 3](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Content Slider 3](https://github.com/in-and-win/IWAHalfModalPresenter/raw/master/halfmodaldemo.gif) Content Slider 3Not the regular Content Slider, but this serves as a pretty useful Half Page slider from a small button. This animation creates a smooth flow into the content we want to present. Check out [this](https://github.com/in-and-win/IWAHalfModalPresenter) Git Repo for the HalfModelPresenter.

##### IWAHalfModalPresenter – Basic Implementation

Add this dependency in your App Gradle


```
dependencies {
    implementation 'com.inandwin.halfmodalpresenter:halfmodalpresenter:0.0.4'
}
```
Be sure to Sync the Project inorder to make sure the implementation is reflected

###### Creating the Layout

Creating the Layout for HalfModalPresenter is straight forward. The layout contains 3 Views, **HalfModalview** which is the Parent that holds two more ViewGroups **HalfModalTriggerView**, **HalfModalExpandedView**. **HalfModalTriggerView** holds the button/text/any view that is going to trigger the **HalfModalExpanded** View that holds our expanded Content.

Check the Layout below for clearer understanding.


```
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/activity\_main"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    >

    <com.inandwin.halfmodalpresenter.HalfModalView
        android:id="@+id/halfModal"
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        app:backgroundButtonExpanded="@color/other"
        app:backgroundButtonTrigger="@color/other"
        app:positionFromTop="0.8">
        <com.inandwin.halfmodalpresenter.HalfModalTriggerView
            android:layout\_width="wrap\_content"
            android:layout\_height="wrap\_content"
            android:paddingLeft="24dp"
            android:paddingRight="16dp"
            tools:ignore="RtlHardcoded">
            <TextView
                android:layout\_width="wrap\_content"
                android:layout\_height="50dp"
                android:gravity="center\_vertical"
                android:text="Filter By"
                android:textColor="@android:color/black"
                android:textSize="18sp"/>
        </com.inandwin.halfmodalpresenter.HalfModalTriggerView>
        <com.inandwin.halfmodalpresenter.HalfModalExpandedView
            android:layout\_width="wrap\_content"
            android:layout\_height="wrap\_content"
            android:background="@color/other"
            android:gravity="center\_horizontal"
            android:orientation="vertical">

            <TextView
                android:layout\_width="wrap\_content"
                android:layout\_height="wrap\_content"
                android:layout\_marginTop="32dp"
                android:text="Filter By"
                android:textColor="@android:color/white"
                android:textSize="20sp" />

            <LinearLayout
                android:id="@+id/llFilterWalkin"
                android:layout\_width="wrap\_content"
                android:layout\_height="wrap\_content"
                android:layout\_marginTop="4dp"
                android:orientation="horizontal"
                android:paddingBottom="4dp"
                android:paddingEnd="4dp"
                android:paddingStart="4dp"
                android:paddingTop="4dp">

                <TextView
                    android:id="@+id/tvFilterWalkin"
                    android:layout\_width="wrap\_content"
                    android:layout\_height="wrap\_content"
                    android:fontFamily="sans-serif-light"
                    android:text="Open on saturday"
                    android:textAppearance="?android:attr/textAppearanceSmall"
                    android:textColor="#ffffee"
                    android:textStyle="bold" />
            </LinearLayout>

        </com.inandwin.halfmodalpresenter.HalfModalExpandedView>
    </com.inandwin.halfmodalpresenter.HalfModalView>
</RelativeLayout>
```
The  **backgroundButtonExpanded**property and **backgroundButtonTrigger**accepts only **color** values. I have created


```
<color name="other">#6E2A3A</color>
```
as the value in the **colors.xml file under res>values>colors.xml.**

Once that is done, time for our [activity](https://androidmonks.com/activities-in-android/) named **ContentSlider.java.**


```
import android.os.Bundle;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;
import com.inandwin.halfmodalpresenter.HalfModalView;

public class ContentSlider extends AppCompatActivity{
HalfModalView hfm;
    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.half\_modal);
        hfm = (HalfModalView) findViewById(R.id.halfModal);
        hfm.setBackgroundButtonTrigger(ContextCompat.getDrawable(this, R.color.other));
        hfm.setBackgroundButtonExpanded(ContextCompat.getDrawable(this, R.color.other));
    }
}
```
Our application looks like this as the result.

![Content Slider](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Content Slider](https://androidmonks.com/wp-content/uploads/2018/11/halfmodal.gif) Content Slider#### Custom Navigation Drawer

For the fourth Library that is available as open source, we have the flowing drawer. A sample Gif by the creator is below.

![Sliding Drawer 4](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Sliding Drawer 4](https://camo.githubusercontent.com/4ffe1e8c9e8d073b2e7ff55cffd5725918577387/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f69643d3166726b4232673346474c4342444e3669634c47414a394e4d5f6b346d68436344) Sliding Drawer 4The  Custom Navigation Drawer is created by [Shrikanth Ravi](https://github.com/shrikanth7698). You can find the code repo [here](https://github.com/shrikanth7698/Custom-Navigation-Drawer).

To create a similar looking Content Slider, we jump on to its implementation.

##### Custom Navigation Drawer – Implementation

Make sure you Gradle has the following Dependencies added,

**Project Gradle**


```
allprojects {
 	repositories {
 		...
 		maven { url 'https://jitpack.io' }
 	}
 }
```
**App Gradle**


```
implementation 'com.github.shrikanth7698:Custom-Navigation-Drawer:v0.0.1'
```
**Note: The minimum SDK for this library is 21, Make sure to change the minSdkVersion in your App Gradle.**

Sync the Project to make sure your dependencies are compiled. Once done, we look at layout creation.

###### Creating the Layout

A simple Looking layout is packed with lot of features. However, we will also need to create [Fragments](https://androidmonks.com/android-fragments/) for every menu option we will be creating. I have created one Main Layout and one Sample Fragment layout for this tutorial purpose. You can create any number of Fragments and use it in the Menu.

**custom\_navigation\_drawer.xml**


```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent">

    <com.shrikanthravi.customnavigationdrawer2.widget.SNavigationDrawer
        android:layout\_width="match\_parent"
        android:layout\_height="match\_parent"
        android:id="@+id/navigationDrawer">
        <FrameLayout
            android:id="@+id/frameLayout"
            android:layout\_width="match\_parent"
            android:layout\_height="match\_parent"/>

    </com.shrikanthravi.customnavigationdrawer2.widget.SNavigationDrawer>
</LinearLayout>
```
**sample\_fragment.xml**


```
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:background="#ff6767"
    >
    <TextView
        android:layout\_width="match\_parent"
        android:layout\_height="match\_parent"
        android:layout\_gravity="center"
        android:gravity="center"
        android:textSize="20sp"
        android:textColor="@android:color/white"
        android:textStyle="bold"
        android:text="Sample Fragment" />
    
</FrameLayout>
```
###### Creating the Activity

Time to stitch it all together in our [Activity](https://androidmonks.com/activities-in-android/) **CustomNavigationDrawer.java**


```

import android.support.v4.app.Fragment;
import android.os.Bundle;
import android.support.v4.app.FragmentManager;
import android.support.v7.app.AppCompatActivity;
import com.shrikanthravi.customnavigationdrawer2.data.MenuItem;
import com.shrikanthravi.customnavigationdrawer2.widget.SNavigationDrawer;
import java.util.ArrayList;
import java.util.List;

public class CustomNavigationDrawer extends AppCompatActivity {
    SNavigationDrawer sNavigationDrawer;
    Class fragmentClass;
    public static Fragment fragment;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.custom\_navigation\_drawer);
        sNavigationDrawer = findViewById(R.id.navigationDrawer);

        //Creating a list of menu Items

        List<MenuItem> menuItems = new ArrayList<>();

        //Use the MenuItem given by this library and not the default one.
        //First parameter is the title of the menu item and then the second parameter is the image which will be the background of the menu item.

        menuItems.add(new MenuItem("Sample 1",R.drawable.news\_bg));
        menuItems.add(new MenuItem("Sample 2",R.drawable.feed\_bg));
        menuItems.add(new MenuItem("Sample 3",R.drawable.message\_bg));
        menuItems.add(new MenuItem("Sample 4",R.drawable.music\_bg));

        //then add them to navigation drawer

        sNavigationDrawer.setMenuItemList(menuItems);
        fragmentClass =  SampleFragment.class;
        try {
            fragment = (Fragment) fragmentClass.newInstance();
        } catch (Exception e) {
            e.printStackTrace();
        }
        if (fragment != null) {
            FragmentManager fragmentManager = getSupportFragmentManager();
            fragmentManager.beginTransaction().setCustomAnimations(android.R.animator.fade\_in, android.R.animator.fade\_out).replace(R.id.frameLayout, fragment).commit();
        }

        //Listener to handle the menu item click. It returns the position of the menu item clicked. Based on that you can switch between the fragments.

        sNavigationDrawer.setOnMenuItemClickListener(new SNavigationDrawer.OnMenuItemClickListener() {
            @Override
            public void onMenuItemClicked(int position) {
                System.out.println("Position " + position);

                switch (position) {
                    case 0: {
                        fragmentClass = SampleFragment.class;
                        break;
                    }
                    case 1: {
                        fragmentClass = SampleFragment.class;
                        break;
                    }
                    case 2: {
                        fragmentClass = SampleFragment.class;
                        break;
                    }
                    case 3: {
                        fragmentClass = SampleFragment.class;
                        break;
                    }

                }

                //Listener for drawer events such as opening and closing.
                sNavigationDrawer.setDrawerListener(new SNavigationDrawer.DrawerListener() {

                    @Override
                    public void onDrawerOpened() {

                    }

                    @Override
                    public void onDrawerOpening() {

                    }

                    @Override
                    public void onDrawerClosing() {
                        System.out.println("Drawer closed");

                        try {
                            fragment = (Fragment) fragmentClass.newInstance();
                        } catch (Exception e) {
                            e.printStackTrace();
                        }

                        if (fragment != null) {
                            FragmentManager fragmentManager = getSupportFragmentManager();
                            fragmentManager.beginTransaction().setCustomAnimations(android.R.animator.fade\_in, android.R.animator.fade\_out).replace(R.id.frameLayout, fragment).commit();

                        }
                    }

                    @Override
                    public void onDrawerClosed() {

                    }

                    @Override
                    public void onDrawerStateChanged(int newState) {
                        System.out.println("State " + newState);
                    }
                });

            }
        });
    }
}
```
**SampleFragment.java** looks like below.


```

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

public class SampleFragment extends Fragment {
    public SampleFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.sample\_fragment, container, false);
    }
}
```
Done with the implementation, lets run the application and see how it turns out to be.

![SlidingDrawer 4](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![SlidingDrawer 4](https://androidmonks.com/wp-content/uploads/2018/11/customnavigation.gif) SlidingDrawer 4 

### **AndroidSlidingUpPanel – Umano**

Umano’s SlidingUpPanel is really cool but comes with some good amount of implementation constraint. You can check the Git repo here. The example that follows is a stripped down version of that Library.

![Example Umano Sliding Up Panel](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Example Umano Sliding Up Panel](https://camo.githubusercontent.com/834cfd81ce764457db69dc023e1bd0adf0a8d00d/68747470733a2f2f7261772e6769746875622e636f6d2f756d616e6f2f416e64726f6964536c6964696e67557050616e656c44656d6f2f6d61737465722f736c6964696e67757070616e656c2e706e67) Example Umano Sliding Up PanelThis seems to be pretty exciting to create. So i have saved this one for the last. We will see how the layout arrangement is and how the activity arrangement is.

###### SlidingUpPanel – Basic Implementation

We start of by adding the following dependency in your Project Gradle and App Gradle.

**Project Gradle**


```
dependencies {
    repositories {
        mavenCentral()
    }
```
**App Gradle**


```
implementation 'com.sothree.slidinguppanel:library:3.4.0'
```
Once this is done, we look at how the [ViewGroup](https://androidmonks.com/android-ui-layout-concepts-knowledge/) creation looks like.

The SlidingUpPanelLayout is the Root element and all the element inside it are wrapped to act as a sliding up panel.

**umano\_layout.xml**


```
<com.sothree.slidinguppanel.SlidingUpPanelLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    xmlns:sothree="http://schemas.android.com/apk/res-auto"
    android:id="@+id/sliding\_layout"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:gravity="bottom"
    sothree:umanoPanelHeight="68dp"
    sothree:umanoShadowHeight="4dp"
    sothree:umanoParallaxOffset="100dp"
    sothree:umanoDragView="@+id/dragView"
    sothree:umanoOverlay="true"
    sothree:umanoScrollableView="@+id/list">

    <!-- MAIN CONTENT -->
    <FrameLayout
        android:layout\_width="match\_parent"
        android:layout\_height="match\_parent"
        android:orientation="vertical">
        <android.support.v7.widget.Toolbar
            xmlns:sothree="http://schemas.android.com/apk/res-auto"
            xmlns:android="http://schemas.android.com/apk/res/android"
            android:id="@+id/main\_toolbar"
            android:layout\_height="?attr/actionBarSize"
            android:background="?attr/colorPrimary"
            sothree:theme="@style/ActionBar"
            android:layout\_width="match\_parent"/>
        <TextView
            android:id="@+id/main"
            android:layout\_width="match\_parent"
            android:layout\_height="match\_parent"
            android:layout\_marginTop="?attr/actionBarSize"
            android:gravity="center"
            android:text="Main Content"
            android:clickable="true"
            android:focusable="false"
            android:focusableInTouchMode="true"
            android:textSize="16sp" />
    </FrameLayout>

    <!-- SLIDING LAYOUT -->
    <LinearLayout
        android:layout\_width="match\_parent"
        android:layout\_height="match\_parent"
        android:background="#ffffff"
        android:orientation="vertical"
        android:clickable="true"
        android:focusable="false"
        android:id="@+id/dragView">

        <LinearLayout
            android:layout\_width="match\_parent"
            android:layout\_height="68dp"
            android:orientation="horizontal">

            <TextView
                android:id="@+id/name"
                android:layout\_width="0dp"
                android:layout\_height="match\_parent"
                android:layout\_weight="1"
                android:textSize="14sp"
                android:gravity="center\_vertical"
                android:paddingLeft="10dp"/>

            <Button
                android:id="@+id/follow"
                android:layout\_width="wrap\_content"
                android:layout\_height="match\_parent"
                android:textSize="14sp"
                android:gravity="center\_vertical|right"
                android:paddingRight="10dp"
                android:paddingLeft="10dp"/>

        </LinearLayout>

        <ListView
            android:id="@+id/list"
            android:layout\_width="match\_parent"
            android:layout\_height="0dp"
            android:layout\_weight="1">
        </ListView>

    </LinearLayout>
</com.sothree.slidinguppanel.SlidingUpPanelLayout>
```
Creating this is the first part, we additionally will also have to set up the **styles.xml**with the following value.


```
<style name="AppTheme">
    <item name="android:windowActionBarOverlay">true</item>
</style>
```
My **styles.xml** looks like below.


```
<resources>
    
    <style name="AppBaseTheme" parent="Theme.AppCompat.Light.NoActionBar">
        <item name="colorPrimary">#ffff9431</item>
        <item name="colorPrimaryDark">#ffD56600</item>
        
    </style>

    <!-- Application theme. -->
    <style name="AppTheme" parent="AppBaseTheme">
        <!-- All customizations that are NOT specific to a particular API-level can go here. -->
    </style>

    <style name="ActionBar" parent="ThemeOverlay.AppCompat.ActionBar">
        <item name="android:displayOptions">homeAsUp</item>
    </style>
</resources>
```
Once that is done, we additionally will have to create the **res>menu>demo.xml** file with our two Menu strings in the application. Check the below example file.


```
<menu xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:sothree="http://schemas.android.com/apk/res-auto">

    <item
        android:id="@+id/action\_toggle"
        android:orderInCategory="100"
        sothree:showAsAction="never"
        android:title="@string/action\_hide"/>

    <item
        android:id="@+id/action\_anchor"
        android:orderInCategory="200"
        sothree:showAsAction="never"
        android:title="@string/action\_anchor\_enable"/>

</menu>
```
From all the above it is clear that i will have to provide the **strings.xml** file.


```
<resources>
    <string name="app\_name">Sample My Manh</string>
    <string name="title\_home">Home</string>
    <string name="title\_dashboard">Dashboard</string>
    <string name="title\_notifications">Notifications</string>
    <string name="action\_settings">Settings</string>
    <string name="action\_hide">Hide Panel</string>
    <string name="action\_show">Show Panel</string>
    <string name="action\_anchor\_enable">Enable Anchor Point</string>
    <string name="action\_anchor\_disable">Disable Anchor Point</string>

</resources>
```
Creating [activity](https://androidmonks.com/activities-in-android/) is going to be a bit of a challenge. We will have to define callbacks for all the action that is going to be performed.

Example activity named **ContentSlider.java**


```
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.text.Html;
import android.text.method.LinkMovementMethod;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;
import com.sothree.slidinguppanel.SlidingUpPanelLayout;
import java.util.Arrays;
import java.util.List;

public class ContentSlider extends AppCompatActivity{
    private static final String TAG = "ContentSlider";
    private SlidingUpPanelLayout mLayout;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.umano\_layout);
        setSupportActionBar((Toolbar) findViewById(R.id.main\_toolbar));
        ListView lv = (ListView) findViewById(R.id.list);
        lv.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                Toast.makeText(ContentSlider.this, "onItemClick", Toast.LENGTH\_SHORT).show();
            }
        });

        List<String> your\_array\_list = Arrays.asList(
                "This",
                "Is",
                "An",
                "Example",
                "ListView",
                "That",
                "You",
                "Can",
                "Scroll",
                ".",
                "It",
                "Shows",
                "How",
                "Any",
                "Scrollable",
                "View",
                "Can",
                "Be",
                "Included",
                "As",
                "A",
                "Child",
                "Of",
                "SlidingUpPanelLayout"
        );

        // This is the array adapter, it takes the context of the activity as a
        // first parameter, the type of list view as a second parameter and your
        // array as a third parameter.
        ArrayAdapter<String> arrayAdapter = new ArrayAdapter<String>(
                this,
                android.R.layout.simple\_list\_item\_1,
                your\_array\_list );

        lv.setAdapter(arrayAdapter);

        mLayout = (SlidingUpPanelLayout) findViewById(R.id.sliding\_layout);
        mLayout.addPanelSlideListener(new SlidingUpPanelLayout.PanelSlideListener() {
            @Override
            public void onPanelSlide(View panel, float slideOffset) {
                Log.i(TAG, "onPanelSlide, offset " + slideOffset);
            }

            @Override
            public void onPanelStateChanged(View panel, SlidingUpPanelLayout.PanelState previousState, SlidingUpPanelLayout.PanelState newState) {
                Log.i(TAG, "onPanelStateChanged " + newState);
            }
        });
        mLayout.setFadeOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                mLayout.setPanelState(SlidingUpPanelLayout.PanelState.COLLAPSED);
            }
        });

    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.demo, menu);
        MenuItem item = menu.findItem(R.id.action\_toggle);
        if (mLayout != null) {
            if (mLayout.getPanelState() == SlidingUpPanelLayout.PanelState.HIDDEN) {
                item.setTitle(R.string.action\_show);
            } else {
                item.setTitle(R.string.action\_hide);
            }
        }
        return true;
    }

    @Override
    public boolean onPrepareOptionsMenu(Menu menu) {
        return super.onPrepareOptionsMenu(menu);
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()){
            case R.id.action\_toggle: {
                if (mLayout != null) {
                    if (mLayout.getPanelState() != SlidingUpPanelLayout.PanelState.HIDDEN) {
                        mLayout.setPanelState(SlidingUpPanelLayout.PanelState.HIDDEN);
                        item.setTitle(R.string.action\_show);
                    } else {
                        mLayout.setPanelState(SlidingUpPanelLayout.PanelState.COLLAPSED);
                        item.setTitle(R.string.action\_hide);
                    }
                }
                return true;
            }
            case R.id.action\_anchor: {
                if (mLayout != null) {
                    if (mLayout.getAnchorPoint() == 1.0f) {
                        mLayout.setAnchorPoint(0.7f);
                        mLayout.setPanelState(SlidingUpPanelLayout.PanelState.ANCHORED);
                        item.setTitle(R.string.action\_anchor\_disable);
                    } else {
                        mLayout.setAnchorPoint(1.0f);
                        mLayout.setPanelState(SlidingUpPanelLayout.PanelState.COLLAPSED);
                        item.setTitle(R.string.action\_anchor\_enable);
                    }
                }
                return true;
            }
        }
        return super.onOptionsItemSelected(item);
    }

    @Override
    public void onBackPressed() {
        if (mLayout != null &&
                (mLayout.getPanelState() == SlidingUpPanelLayout.PanelState.EXPANDED || mLayout.getPanelState() == SlidingUpPanelLayout.PanelState.ANCHORED)) {
            mLayout.setPanelState(SlidingUpPanelLayout.PanelState.COLLAPSED);
        } else {
            super.onBackPressed();
        }
    }
}
```
I took the example from the Git repo as such and made some modifications here and there to get this stripped down version of the SlidingUpPanel.

The resulting Application is like below.

 

![Content Slider 5](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Content Slider 5](https://androidmonks.com/wp-content/uploads/2018/11/slidinguppanel.gif) Content Slider 5 

Great set of Libraries for free, check out all of them and bookmark for future reference. Drop in any comments you have below.

***“Learn and Be Curious”***

[Tweet](https://twitter.com/intent/tweet?text=5+Alternatives+to+SlidingDrawer+with+example&url=https%3A%2F%2Fandroidmonks.com%2Fslidingdrawer-alternatives%2F)Pin9[Share1](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fslidingdrawer-alternatives%2F)10 Shares Categories [Android](https://androidmonks.com/category/android/), [app android](https://androidmonks.com/category/app-android/) [Leave a comment](https://androidmonks.com/slidingdrawer-alternatives/#respond) Post navigation[AsyncTask with Progressbar Example | AndroidMonks](https://androidmonks.com/asynctask-progressbar/)[Creating a CountDownTimer | AndroidMonks](https://androidmonks.com/countdowntimer/)### Leave a Comment [Cancel reply](/slidingdrawer-alternatives/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"546","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "cc5bc2851c";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "546";var swpClickTracking = false; 