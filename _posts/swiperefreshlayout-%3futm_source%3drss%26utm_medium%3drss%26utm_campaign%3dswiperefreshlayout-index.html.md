---
title: '# SwipeRefreshLayout in Android | AndroidMonks'
description: 'SwipeRefreshLayout is used to create a powerful Layout to provide gesture based update of the given Layout. ListView update is present in this tutorial.'
date: '2018-11-05'
modified_date: '2018-11-06'
image: '/assets/images/posts'
---
# SwipeRefreshLayout in Android | AndroidMonks

 [November 6, 2018November 5, 2018](https://androidmonks.com/swiperefreshlayout/ "5:06 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 SwipeRefreshLayout in Android with Example](#SwipeRefreshLayout_in_Android_with_Example)
	+ [1.1 SwipeRefreshLayout – Basic Implementation](#SwipeRefreshLayout_8211_Basic_Implementation)
	+ [1.2 SwipeRefreshLayout – Public Methods](#SwipeRefreshLayout_8211_Public_Methods)
		- [1.2.1 SwipeRefreshLayout – Layout Implementation](#SwipeRefreshLayout_8211_Layout_Implementation)
	+ [1.3 SwipeRefreshLayout – Activity Implementation](#SwipeRefreshLayout_8211_Activity_Implementation)
## SwipeRefreshLayout in Android with Example

Android [SwipeRefreshLayout](https://androidmonks.com/swiperefreshlayout/) is a ViewGroup that can hold only one scrollable child. It can be either a [ScrollView](https://androidmonks.com/scrollview-android-tutorial-overview/), [ListView](https://androidmonks.com/listview-android-implementation-overview/) or [RecyclerView](https://androidmonks.com/recyclerview-adapter-cardview-implementation/). The basic need for a SwipeRefreshLayout is to allow the users to refresh the screen manually. According to the Docs,

“The SwipeRefreshLayout should be used whenever the user can refresh the contents of a view via a vertical swipe gesture. The activity that instantiates this view should add an OnRefreshListener to be notified whenever the swipe to refresh gesture is completed”

This ViewGroup is really helpful as there is no need to define a custom layout that will detect a swipe gesture and then provide a Swipe refresh action on it. We will see how the [SwipeRefreshLayout](https://androidmonks.com/swiperefreshlayout/) is used in Android with an example app below.

**Note**: **It is important to note that, the [SwipeRefreshLayout](https://androidmonks.com/swiperefreshlayout/) should act as the parent and it can hold only one direct child which will be performing the refresh action on it.**

An example use of a Swipe Refresh Layout is the infamous Facebook swipe to perform a feed update!!

### SwipeRefreshLayout – Basic Implementation


```
<android.support.v4.widget.SwipeRefreshLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/swipe\_container"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent">
</android.support.v4.widget.SwipeRefreshLayout>
```
Just like any other view, **layout\_width** and **layout\_height** are compulsory attributes, in this we have provided the SwipeRefresh layout as the parent element to the entire layout.

There are however, some important public methods that are part of the SwipeRefresh Layout like given below.

### SwipeRefreshLayout – Public Methods

**canChildScrollUp() –**Returns Boolean value, indicating if the given child can scroll up or not.

**getProgressCircleDiameter() –**Returns the Diameter of the Progress Circle which comes up when the swipe up gesture is done.

**isRefreshing() –**Boolean value, returns if the View is refreshing or not

**setColorSchemeResources(int... colorResIds) –**The method is used to set the color resources used in the progress animation from color resources.

**setColorSchemeColors(int... colors) –**Set the colors used in the progress animation.

setOnRefreshListener(SwipeRefreshLayout.OnRefreshListener ) – Most important listener, whenever the swipe gesture is done, this method gets fired, you can override the action to be performed in this method.

**setSize(int size) –**Responsible for setting the size of the progress bar, it can be either DEFAULT/LARGE

**startNestedScroll(int axes) –**Starts the nested scroll of the view in the given axis.

We will see a example Application with the above methods.

Be sure to use Android Studio IDE, the examples in this tutorial is implemented in the same.

#### SwipeRefreshLayout – Layout Implementation

First we create a simple swipe refresh layout as the viewgroup which will be holding the [ListView](https://androidmonks.com/listview-android-implementation-overview/) like below. I have named it as **swipe\_refresh\_layout.xml**


```
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    >
    <android.support.v4.widget.SwipeRefreshLayout
        android:id="@+id/swipeToRefresh"
        android:layout\_width="match\_parent"
        android:layout\_height="wrap\_content">
        <ListView
            android:id="@+id/listView"
            android:layout\_width="match\_parent"
            android:layout\_height="match\_parent"
            >
        </ListView>
    </android.support.v4.widget.SwipeRefreshLayout>
</RelativeLayout>
```
### SwipeRefreshLayout – Activity Implementation

Once the layout is created, time to look at our Activity. I have created a sample **SwipeRefreshLayoutClass.java.**This will act as our Activity.


```
import android.os.Bundle;
import android.support.v4.widget.SwipeRefreshLayout;
import android.support.v7.app.AppCompatActivity;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import java.util.ArrayList;
import java.util.Random;

public class SwipeRefreshLayoutClass extends AppCompatActivity {
    ArrayList arrayList = new ArrayList();
    SwipeRefreshLayout mSwipeRefreshLayout;
    ListView mListView;

    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.swipe\_refresh\_layout);
        mSwipeRefreshLayout = (SwipeRefreshLayout) findViewById(R.id.swipeToRefresh);
        mListView = (ListView) findViewById(R.id.listView);
        mSwipeRefreshLayout.setColorSchemeResources(R.color.colorAccent);
        arrayList.add("1");
        arrayList.add("2");
        arrayList.add("3");
        arrayList.add("4");
        arrayList.add("5");

        final ArrayAdapter adapter = new ArrayAdapter(this, android.R.layout.simple\_list\_item\_1, arrayList);
        mListView.setAdapter(adapter);

        mSwipeRefreshLayout.setOnRefreshListener(new SwipeRefreshLayout.OnRefreshListener() {
            @Override
            public void onRefresh() {
                int rand = new Random().nextInt(500)+1;
                arrayList.add(String.valueOf(rand));
                adapter.notifyDataSetChanged();
                mSwipeRefreshLayout.setRefreshing(false);
            }
        });
    }
}
```
We have used the [ArrayAdapter](https://androidmonks.com/recyclerview-adapter-cardview-implementation/) to fill our ListView with numbers from 1-5. After which, we randomise some numbers and add it to the ArrayAdapter. Once this is done, we call the notifyDataSetChanged() call back.

This way, our [ListView](https://androidmonks.com/listview-android-implementation-overview/) shows the updated list of values

The resulting Application is as below.

![SwipeRefreshLayout- Android App](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![SwipeRefreshLayout- Android App](https://androidmonks.com/wp-content/uploads/2018/11/swiperefreshlayout-594x1024.gif) SwipeRefreshLayout- Android AppDrop in any comments you have below.

***“Learn and Be Curious”***

[Tweet](https://twitter.com/intent/tweet?text=SwipeRefreshLayout+in+Android++AndroidMonks&url=https%3A%2F%2Fandroidmonks.com%2Fswiperefreshlayout%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fswiperefreshlayout%2F)0 Shares Categories [Android](https://androidmonks.com/category/android/), [Android programming](https://androidmonks.com/category/android-programming/), [app android](https://androidmonks.com/category/app-android/) [Leave a comment](https://androidmonks.com/swiperefreshlayout/#respond) Post navigation[Creating a CountDownTimer | AndroidMonks](https://androidmonks.com/countdowntimer/)[7 Best Java Books for Beginners | Androidmonks](https://androidmonks.com/7-java-books/)### Leave a Comment [Cancel reply](/swiperefreshlayout/?utm_source=rss&utm_medium=rss&utm_campaign=swiperefreshlayout#respond)

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
var socialWarfare = {"addons":[],"post\_id":"562","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "8a797f9cbb";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "562";var swpClickTracking = false; 