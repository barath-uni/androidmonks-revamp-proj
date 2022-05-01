---
title: '# ListView in Android – Implementation and Overview'
description: 'ListView in Android Tutorial - Implementation and OverView - ListView in Android - Implementation and Overview - Uncategorized'
date: '2018-08-13'
modified_date: '2018-10-20'
image: '/assets/images/posts'
---
# ListView in Android – Implementation and Overview

 [October 20, 2018August 13, 2018](https://androidmonks.com/listview-android-implementation-overview/ "9:09 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 ListView in Android – Implementation and Overview](#ListView_in_Android_8211_Implementation_and_Overview)
	+ - [1.0.1 Our sample Layout for the project](#Our_sample_Layout_for_the_project)
	+ [1.1 ListView – How do you insert Content?](#ListView_8211_How_do_you_insert_Content)
	+ [1.2 Implementing Adapters in Our Project](#Implementing_Adapters_in_Our_Project)
	+ [1.3 My Output screen](#My_Output_screen)
## ListView in Android – Implementation and Overview

ListView in android is used to display list of items grouped together. The items are scrollable and set using the adapter (We will see about it a bit later). Think of list of items you want to see in your android application like this.

![ListView Sample](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![ListView Sample](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-13-at-11.24.07-AM.png) ListView sampleYou are going to use the XML Tag ListView to initialise the list of items.

<ListView android:layout\_width=”wrap\_content” android:layout\_height=”wrap\_content”> </ListView>

#### Our sample Layout for the project

 

![Layout file for our app](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Layout file for our app](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-13-at-2.24.58-PM-1024x560.png) Layout file for our appThis will initialise a simple dummy ListView. But what do we do if we need to add content to it.

### ListView – How do you insert Content?

If you notice the image above, we see two textviews in that. What are they?

The Item and sub item text. So it is clear that, we can hold textviews inside a ListView. How do we achieve this?

You can do this by creating a layout which holds a textview inside it like below.

![Layout with TextView inside it](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Layout with TextView inside it](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-13-at-11.54.05-AM-1024x436.png) Layout with TextView inside it (list\_view.xml)The [textview](https://androidmonks.com/textview-android-usage-implementation/) to be present inside the listview is given. But how do you attach the two together.

 

We look at something called as [**adapters**](https://developer.android.com/reference/android/widget/Adapter). Adapters are a way to model the data we have to the way the list view will understand it. In other words, we can convert the list of data we have (Could be any data – values pulled from a [database/firebase](https://androidmonks.com/firebase-database-set-up/) or from a server while communicating) and set it to the ListView. The adapter will take care of creating multiple textviews dynamically and setting the text value to it. We can concentrate on modelling the data alone.

Android presents with

* `[ArrayAdapter](https://developer.android.com/reference/android/widget/ArrayAdapter.html)`
* `[CursorAdapter](https://developer.android.com/reference/android/widget/CursorAdapter.html)`
* `[SimpleCursorAdapter](https://developer.android.com/reference/android/widget/SimpleCursorAdapter.html)`

### Implementing Adapters in Our Project

We will be using the Array adapter for this tutorial. You can refer my other tutorials for clearer implementation of other types of adapters. All the adapters inherit the Base Adapter class. We can also inherit the class to create our custom adapter for our application.

Check the code snippet below for a implementation of Array adapter


```
ArrayAdapter adapter = new ArrayAdapter<String>(this,R.layout.list\_view,R.id.label1,stringArray);
```
* First Parameter – It is the context of the application (To know more about context check here)
* Second Parameter – The layout we have created for holding our TextView
* Third Parameter – The id of the TextView we need to populate
* Fourth Parameter – The Array of values we need to populate in the ListView (The adapter takes care of converting the Values to toString())

 

Once you have created the **Adapter**, we can set it to our ListView like below.


```
ListView listView = (ListView) findViewById(R.id.listBody); //ListView we have created in our main.xml
listView.setAdapter(adapter); // calling the public parameter setAdapter() to set the values


```
The entire code structure for creating the activity is given below


```
public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.layout);
        String[] stringArray = {"Value1","Value2","Value3"};

        ArrayAdapter adapter = new ArrayAdapter<String>(this,R.layout.list\_view,R.id.label1,stringArray);
        ListView listView = (ListView) findViewById(R.id.list\_item);
        listView.setAdapter(adapter);
}
}
```
### My Output screen

![Output Screen](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Output Screen](https://androidmonks.com/wp-content/uploads/2018/08/Screenshot_20180813-142246-576x1024.jpg) Output Screen 

Voila! We have created our List View successfully. Learn more about the list view’s in my upcoming tutorials.

There are lot of tricks involved to create the perfect list view and i will also be writing tutorials on Adapters as much as possible.

Drop in any comments about this tutorial below.

 

*“Learn and be Curious”.*

[Tweet](https://twitter.com/intent/tweet?text=ListView+in+Android+-+Implementation+and+Overview&url=https%3A%2F%2Fandroidmonks.com%2Flistview-android-implementation-overview%2F)Pin1[Share1](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Flistview-android-implementation-overview%2F)2 Shares Categories [Android programming](https://androidmonks.com/category/android-programming/), [Uncategorized](https://androidmonks.com/category/uncategorized/) [Leave a comment](https://androidmonks.com/listview-android-implementation-overview/#respond) Post navigation[CheckBox in Android – Implementation and Overview](https://androidmonks.com/checkbox-android-implementation-overview/)[CardView in Android Tutorial – Creation and Implementation](https://androidmonks.com/cardview-in-android-tutorial-creation-and-implementation/)### Leave a Comment [Cancel reply](/listview-android-implementation-overview/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"208","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "cc5bc2851c";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "208";var swpClickTracking = false; 