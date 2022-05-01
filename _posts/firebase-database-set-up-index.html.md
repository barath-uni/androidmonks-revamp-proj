---
title: '# Firebase Realtime Database – Setting up'
description: 'Firebase Realtime Database setup for Android - The easy approach (Under 10 minutes)Android Monks - Firebase Realtime Database - Setting up'
date: '2018-08-05'
modified_date: '2018-08-05'
image: '/assets/images/posts'
---
# Firebase Realtime Database – Setting up

 [August 5, 2018August 5, 2018](https://androidmonks.com/firebase-database-set-up/ "8:42 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Database setup using firebase for Android](#Database_setup_using_firebase_for_Android)
	+ [1.1 Setting up your Firebase App](#Setting_up_your_Firebase_App)
	+ [1.2 Step 1: Make sure, you have the Google-services.json file in your app folder](#Step_1_Make_sure_you_have_the_Google-servicesjson_file_in_your_app_folder)
	+ [1.3 Step 2 : Knowing about the rules for our realtime database](#Step_2_Knowing_about_the_rules_for_our_realtime_database)
	+ [1.4 Step 2: Time to perform our database actions](#Step_2_Time_to_perform_our_database_actions)
	+ [1.5 Step 3 : Knowing about listeners for our database – Reading values](#Step_3_Knowing_about_listeners_for_our_database_8211_Reading_values)
	+ [1.6 Usage :](#Usage)
## Database setup using firebase for Android

Every android application has the need to create a back end server support which we saw here, and a database support that we are going to see. There is nothing other than the Google’s own Firebase that we are considering here to create a simple but effective server/database support for our Android application. Follow the steps below to get started quickly.

 

### Setting up your Firebase App

Am sure, you would have gone through the setup [here](https://androidmonks.com/firebase-authentication-setup/), which gives you a step by step approach on how to setup your very own, free firebase app that you can use to integrate with the Android Application. The biggest advantage about firebase is, you can store upto 100,000 users and upto 10GB of user data (which is huggeeeee!!) considering that you are a freelancer or a indie developer and you are just beginning to create medium scale applications. Do not worry though, the pricing is very reasonable, if you are looking to scale your project up. The hassle of creating a new Database construct or even a server hosted to communicate with your web application is completely not there. Everything is already done for you, all you have to do is, include the SDK into your build and you are good to go.

Let’s see, how you can create your database with firebase and successfully store the data in it.

 

### Step 1: Make sure, you have the Google-services.json file in your app folder

If you looked at the [link](https://androidmonks.com/firebase-authentication-setup/), that i have put in the last section, you can see step by step procedure to setup your Firebase app and create your very own google-services.json file which is responsible for communicating with your web app hosted in firebase. Now, if you dont know what am talking about, take a look here and prepare your app for it (Its going to take you less than 5 minutes).

Once done, we are good to go. Let’s primarily start with the dependency that you have to include in your gradle.

implementation ‘com.google.firebase:firebase-database:16.0.1’Once you have added this in your gradle and build is successful, it is time to make the connection and add records to our database.  
 

### Step 2 : Knowing about the rules for our realtime database

There are certain locks or control system to store your data in firebase. These are called “rules”. The admin has to specify these read and write rules inorder to prevent any other application from reading and writing to your database.

For our application, we will have the read and write rules as true (Since, if you have to lock them to your application, we have to create a specific SHA-1 key and bind the application to it) . I will create a separate post with locking features and how to’s for easier understanding when you prepare your app for release.

 

![Realtime database in console](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Realtime database in console](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-05-at-11.56.59-AM-e1533450716826-1024x585.png)

Enter the console and go to Develop > Database and scroll down to find the realtime database setting as above.

![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-05-at-12.07.50-PM-1024x580.png)

We have created the database in **test mode**as shown. It is now easy to insert delete and update from here on easily.

### Step 2: Time to perform our database actions

We have created the database, and you are taken to a empty database schema. What NOW!!

This is where, it starts getting interesting. What are the 3 basic actions you perform to a database.

Yes Insert, Update and delete! These are simple to implement when you have firebase. I strongly recommend using firebase in almost all the applications as it reduces the production time. It is powerful enough to hold huge volume of data and do not worry it has got killer security features with it.

Coming on to the Actions we want to perform. Let us start with inserting a record. You know it is just one line to insert a record (Am serious it is just one line!!)

Create a databasereference instance like below

`DatabaseReference mDatabase;`

`mDatabase = FirebaseDatabase().getInstance().getReference();`

From here on, you can perform insertion by using.

 

`mDatabase.child("parentnode").child(''subnodes").setValue("Your value");`

or

`mDatabase.child("parentnode").child("subnode").push().setValue("Your value");`  
 We have two lines above to insert the data. What is the difference though. In a JSON setup where the data is not stored in a relational pattern rather as nodes and subnodes. **The use of push() creates a unique push key to insert newer records.**

**If the push is not used, the value of subnode is overwritten every time we change it.**

This is very very useful to store and retrieve user specific data (like user profile data or even a database about an item)

### Step 3 : Knowing about listeners for our database – Reading values

Once you have successfully written to the database, it is time to know how to read the content.

This is possible through the concept of Listeners. What do we do, when there is a change in the value of the node! We wait for the value to change and read it as soon as it changes. This is same with the firebase readers. There are three major ways to read the content and they are `addValueEventListener(),``addListenerForSingleValueEvent(), addChildEventListener()`

The primary purpose of addValueEventListener() and addChildEventListener() is to wait on the specific node for any event change (Eventvalue listener will wait for value change on that node and the childeventlistener waits for the change in value of the child of the node). The use of addListenerForSingleValueEvent() is to read the entire value only once and not wait for any change.

### Usage :


```
ref.addChildEventListener(new ChildEventListener() {
  @Override
  public void onChildAdded(DataSnapshot dataSnapshot, String prevChildKey) {}

  @Override
  public void onChildChanged(DataSnapshot dataSnapshot, String prevChildKey) {
    Post changedPost = dataSnapshot.getValue(Post.class);
    System.out.println("The updated post title is: " + changedPost.title);
  }

  @Override
  public void onChildRemoved(DataSnapshot dataSnapshot) {}

  @Override
  public void onChildMoved(DataSnapshot dataSnapshot, String prevChildKey) {}

  @Override
  public void onCancelled(DatabaseError databaseError) {}
});


```
You can refer [here](https://firebase.google.com/docs/database/android/read-and-write) to know more about the listeners. I don’t want to create duplicate content with how the listeners work.

The major purpose of using the listeners is to create a Asynchronous callback mechanism, that is not wait for the content to load when there is a data change happening. Whenever the data change occurs, update the fields with it.

This is a very good mechanism, but there are some situations where you might need a synchronous data to be read! Say, reading a key from one table and using that key to read a user information from another table. This is a relational database approach and this can be a blocker if you are reading things asynchronously. In order to overcome this, be ready to change the way you store data.

Even though, Firebase Database is exceptionally fast, there are situations when making too much of synchronous reads in a asynchronous mechanism can slow the overall user experience. Be sure to alter the way you store content so that, it is rendered easily.

 

You can drop in comments if there are any places you are stuck at.  Check my 3 part [post](https://androidmonks.com/how-do-you-go-about-developing-an-android-app-the-easy-way/) where you can create your own Android App under 3 hours! (Am really serious!!)

*“Learn and be Curious”.*


```
 
```
[Tweet](https://twitter.com/intent/tweet?text=Firebase+Realtime+Database+-+Setting+up&url=https%3A%2F%2Fandroidmonks.com%2Ffirebase-database-set-up%2F)Pin1[Share1](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Ffirebase-database-set-up%2F)2 Shares Categories [Uncategorized](https://androidmonks.com/category/uncategorized/) [Leave a comment](https://androidmonks.com/firebase-database-set-up/#respond) Post navigation[Firebase Authentication with Android – Setup](https://androidmonks.com/firebase-authentication-setup/)[Android Shared Preferences – Implementation & Design Patterns](https://androidmonks.com/android-shared-preferences-implementation-design-patterns/)### Leave a Comment [Cancel reply](/firebase-database-set-up/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"114","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "cc5bc2851c";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "114";var swpClickTracking = false; 