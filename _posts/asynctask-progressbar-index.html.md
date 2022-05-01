---
title: '# AsyncTask with Progressbar Example | AndroidMonks'
description: 'AsyncTask is used to update the UI thread without blocking it. In this tutorial we update the Progressbar in the background using a AsyncTask.'
date: '2018-10-28'
modified_date: '2018-10-28'
image: '/assets/images/posts'
---
# AsyncTask with Progressbar Example | AndroidMonks

 [October 28, 2018October 28, 2018](https://androidmonks.com/asynctask-progressbar/ "2:15 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")##  AsyncTask with Progressbar with Example

According to the Android Docs, “[AsyncTask](https://androidmonks.com/asynctask-progressbar/) enables proper and easy use of the UI thread. This class allows you to perform background operations and publish results on the UI thread without having to manipulate threads and/or handlers”.

Now that you know what a [AsyncTask](https://androidmonks.com/asynctask-progressbar/) is, we will use the Async Task to create a [Progressbar](https://androidmonks.com/progressbar-android-implementation/) updation example in Android.

This tutorial is not aimed to explain what a Async Task is, you can refer [here](https://developer.android.com/reference/android/os/AsyncTask) for complete basic implementation of a AsyncTask and the need for it.

### Creating the Layout

We are looking to create a ProgressBar and use that in our [AsyncTask](https://androidmonks.com/asynctask-progressbar/) to update. We will be making use of the 4 callback methods in a **AsyncTask** class.

Check below for a simple Progressbar being created.


```
<ProgressBar
    android:id="@+id/progressBar"
    style="@style/CustomProgressBarHorizontal"
    android:layout\_width="match\_parent"
    android:layout\_height="wrap\_content"
    android:progress="40"/>
```
I have created a custom progressbar style in my style.xml class like below.


```
<style name="CustomProgressBarHorizontal" parent="android:Widget.ProgressBar.Horizontal">
    <item name="android:minHeight">10dip</item>
    <item name="android:maxHeight">20dip</item>
```
This handles my height so that i don’t have a huge [ProgressBar](https://androidmonks.com/progressbar-android-implementation/) in my activity.

Now that we have created the Progressbar in the Layout, let’s create a simple Class to handle our Async Task operation.

### Creating a Activity with AsyncTask Class

Name the Activity as **MainActivity.java** like below.


```
public class AsyncTaskActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.async\_task);
    }
}
```
A very simple Activity holding our async\_task layout. It is time to create our [AsyncTask](https://androidmonks.com/asynctask-progressbar/) class inside our Activity.

It is pretty easy to create a Async Task, you make use of the **AsyncTask** class and create a private class like below.


```
class MyTask extends AsyncTask<Integer, Integer, String>
```
This auto suggests overriding the 4 callbacks we saw above. They are,

* doInBackground() – Operation to do (This is mostly where our action is done)
* onPostExecute() – Things to do after the doInBackground task ends
* onPreExecute() – Things to do before the doInBackground task
* onProgressUpdate() – Callback that updates the progress.

In order to get clearer understanding of what a params, progress, result fields are check [here](https://developer.android.com/reference/android/os/AsyncTask).

We will create the [Progressbar](https://androidmonks.com/progressbar-android-implementation/) object and use that to update the progress in the background. The entire AsyncTaskActivity.java looks like this below


```
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.widget.ProgressBar;

public class AsyncTaskActivity extends AppCompatActivity {
    ProgressBar progressBar;
    int count = 1;
    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.async\_task);
        progressBar = findViewById(R.id.progressBar);
        new MyTask().execute(10);
    }

    class MyTask extends AsyncTask<Integer, Integer, String> {
        @Override
        protected String doInBackground(Integer... params) {
            for (; count <= params[0]; count++) {
                try {
                    Thread.sleep(1);
                    publishProgress(count);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            return "Task Completed.";
        }
        @Override
        protected void onPostExecute(String result) {
            Log.d("Over","Over");

        }
        @Override
        protected void onPreExecute() {

            progressBar.setProgress(0);
        }
        @Override
        protected void onProgressUpdate(Integer... values) {
            Log.d("Progress", String.valueOf(values[0]));
            progressBar.setProgress(values[0]);
        }
    }
}
```
In the above Activity, we have created a new Object for MyTask and called execute with the params. This value is used to wait and update the Progressbar in the background.

We can perform any operation we need in the main thread while this background task is happening through the Async Task.

Here is a complete Layout implementation for the **async\_task.xml**


```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent">
    <ProgressBar
        android:id="@+id/progressBar"
        style="@style/CustomProgressBarHorizontal"
        android:layout\_width="match\_parent"
        android:layout\_height="wrap\_content"
        android:progress="40"/>
</LinearLayout>
```
Once done, your application looks like below.

!["<yoastmark](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)!["<yoastmark](https://androidmonks.com/wp-content/uploads/2018/10/asyncprogressbar-591x1024.gif)

This simple tutorial can be extended to perform any action with AsyncTask in mind.

Drop in any comments you have below.

***“Learn and be curious”***

[Tweet](https://twitter.com/intent/tweet?text=AsyncTask+with+Progressbar+Example++AndroidMonks&url=https%3A%2F%2Fandroidmonks.com%2Fasynctask-progressbar%2F)Pin[Share1](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fasynctask-progressbar%2F)1 Shares Categories [Android](https://androidmonks.com/category/android/), [Android programming](https://androidmonks.com/category/android-programming/), [app android](https://androidmonks.com/category/app-android/) [Leave a comment](https://androidmonks.com/asynctask-progressbar/#respond) Post navigation[Singleton for FusedLocationProviderClient](https://androidmonks.com/fusedlocationproviderclient-singleton/)[5 Alternatives to SlidingDrawer with example](https://androidmonks.com/slidingdrawer-alternatives/)### Leave a Comment [Cancel reply](/asynctask-progressbar/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"611","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "c14f5ebe6a";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "611";var swpClickTracking = false; 