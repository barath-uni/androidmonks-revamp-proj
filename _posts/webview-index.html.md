---
title: '# WebView in Android | AndroidMonks'
description: 'WebView creates a View to load Website into the Application. There are two ways'
date: '2018-10-20'
modified_date: '2018-10-20'
image: '/assets/images/posts'
---
# WebView in Android | AndroidMonks

 [October 20, 2018](https://androidmonks.com/webview/ "4:02 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1  WebView in Android with Example](#WebView_in_Android_with_Example)
	+ [1.1 WebView – Basic Implementation](#WebView_8211_Basic_Implementation)
	+ [1.2 WebView – Public Methods](#WebView_8211_Public_Methods)
		- * + [1.2.0.0.1 addJavascriptInterface(Object object, String name)](#addJavascriptInterfaceObjectobjectStringname)
				+ [1.2.0.0.2 autofill(SparseArray<AutofillValue> values)](#autofillSparseArrayltAutofillValuegt_values)
				+ [1.2.0.0.3 canGoBack()](#canGoBack)
				+ [1.2.0.0.4 canGoBackOrForward(int steps)](#canGoBackOrForwardint_steps)
				+ [1.2.0.0.5 canGoForward()](#canGoForward)
				+ [1.2.0.0.6 clearCache(boolean includeDiskFiles)](#clearCacheboolean_includeDiskFiles)
				+ [1.2.0.0.7 clearHistory()](#clearHistory)
				+ [1.2.0.0.8 destroy()](#destroy)
				+ [1.2.0.0.9 loadUrl(String url)](#loadUrlStringurl)
				+ [1.2.0.0.10 loadData(String data, String mimeType, String encoding)](#loadDataStringdataStringmimeTypeStringencoding)
	+ [1.3 WebView – Using Internet Permissions](#WebView_8211_Using_Internet_Permissions)
	+ [1.4 Create a Simple WebView Application loading a Static Content](#Create_a_Simple_WebView_Application_loading_a_Static_Content)
	+ [1.5 Creating a WebView to load a Sample URL](#Creating_a_WebView_to_load_a_Sample_URL)
##  WebView in Android with Example

In Android, [WebView](https://androidmonks.com/webview/) is used to show the WebSite inside your Android application. This seems pretty straightforward, but there are some important concepts to understand to create a good neater looking Web View. We will be depending on the Web View Tag and the Class to Load, show and change URL inside the App.

**However, it is important to understand right at the start that, creating a Website and using that inside a WebView to create an Application is a Bad practice, and looses customer interest.**

The [Web View](https://androidmonks.com/webview/) was primarily created to show only important disclaimer pages, privacy pages inside the View which needn’t hold a Activity and resource unnecessarily!

Check out the Definition and Implementation of the [WebView](https://androidmonks.com/webview/) below.

### WebView – Basic Implementation

In order to use the Web View in your application, you will need the WebView Tag like below.


```
<WebView
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:id="@+id/webView"/>
```
Just as any other view, layout\_height and layout\_width are the default views required. Once this is done, we can go ahead and look at additional properties related to of a Web View.

Web View inherits all the attributes of a [View and ViewGroup](https://androidmonks.com/android-ui-layout-concepts-knowledge/), to know about the attributes check here.

### WebView – Public Methods

This is a list of all the frequently used methods of a WebView.

###### addJavascriptInterface(Object object, String name)

Just as the name suggests, it allows addition of Java Object into the WebView.

###### autofill(SparseArray<AutofillValue> values)

Automatically fills the content of the Virtual Children within this View, which means that it allows auto fill of a Field just like it was done in a website.

###### canGoBack()

Implementing a Web View alone wont be required. Incase, the user presses the back button, this canGoBack() method checks if there is a back history, like we do with a Browser and loads the previous page from history, instead of making the Back button callback work in the Activity.

###### canGoBackOrForward(int steps)

This method is similar to that of the canGoBack() callback, gets whether the page can go back or forward the given number of steps.

###### canGoForward()

Gets whether this Web View has a forward history item.

###### clearCache(boolean includeDiskFiles)

This method clears the cache like we do in our web browser

###### clearHistory()

Tells this Web View to clear its internal back/forward list.

###### destroy()

Destroys the internal state of this WebView.

###### loadUrl(String url)

Important method that loads the given URL

###### loadData(String data, String mimeType, String encoding)

Loads the given data into this WebView using a ‘data’ scheme URL,

These are some frequently used methods in WebView class. Additionally, check out the list of entire callbacks for WebView.

### WebView – Using Internet Permissions

What’s more important is to let the application we are using to allow Internet! This is possible only by setting the allow-permission tag in Manifest like below.


```
<uses-permission android:name="android.permission.INTERNET"/>
```
Check out the Image below for clearer understanding

![Manifest Permission](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Manifest Permission](https://androidmonks.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-20-at-8.07.07-PM-1024x574.png) Manifest Permission### Create a Simple WebView Application loading a Static Content

In this application we will use the **loadData()** method and create a static content Web View in our application.

Creating the **layout\_webview.xml**


```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:orientation="vertical">
    <Button
        android:layout\_height="wrap\_content"
        android:layout\_width="wrap\_content"
        android:text="Load Data"
        android:layout\_gravity="center"
        android:id="@+id/loadData"/>
    <WebView
        android:layout\_width="fill\_parent"
        android:layout\_height="fill\_parent"
        android:id="@+id/webView"/>

</LinearLayout>
```
**WebViewActivity.java**


```

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.webkit.WebView;
import android.widget.Button;

public class WebViewActivity extends AppCompatActivity{
    WebView webView;
    Button button;
    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.webview\_layout);
        webView = findViewById(R.id.webView);
        button = findViewById(R.id.loadData);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String customHtml = "<html><body><h1>This is a great example</h1>" +
                        "<h1>Hello Monks!</h1><h2>Learn More content</h2><h3>Easily</h3>" +
                        "<p>Loaded a sample Static Content Site! Can also load a URL resource!</p>" +
                        "</body></html>";
                webView.loadData(customHtml, "text/html", "UTF-8");

            }
        });
    }
}
```
The resulting Application is

!["<yoastmark](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)!["<yoastmark](https://androidmonks.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-20-at-8.49.03-PM.png)

### Creating a WebView to load a Sample URL

This can be done using the loadUrl() method. However, it is important to note that, in order to open a hyperlink, within the Web View itself, we will need to override the class **WebViewClient.**This is done, in order to make sure, we have a interface for all the URL’s to be loaded.

The implementation is as given below.

We will re-use the same layout as above. Additionally, we will be creating a Interface name **WebViewLoaderClient**and using that to set to our Web View client object. This will fire each URL inside the [WebView](https://androidmonks.com/webview/) like we expect it to.

**WebViewActivity.java**


```

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Button;

public class WebViewActivity extends AppCompatActivity{
    WebView webView;
    Button button;
    String URL;
    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.webview\_layout);
        URL = "https://www.androidmonks.com";
        webView = findViewById(R.id.webView);
        button = findViewById(R.id.loadData);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
               webView.setWebViewClient(new WebViewLoaderClient());
               webView.getSettings().setLoadsImagesAutomatically(true);
               webView.getSettings().setJavaScriptEnabled(true);
               webView.setScrollBarStyle(View.SCROLLBARS\_INSIDE\_OVERLAY);
               webView.loadUrl(URL);

            }
        });
    }
private class WebViewLoaderClient extends WebViewClient{
    @Override
    public boolean shouldOverrideUrlLoading(WebView view, String url) {
        view.loadUrl(url);
        return true;
    }
}
}
```
This now creates a Web View application like below.

!["<yoastmark](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)!["<yoastmark](https://androidmonks.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-20-at-8.58.31-PM-201x300.png)

!["<yoastmark](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)!["<yoastmark](https://androidmonks.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-20-at-8.58.55-PM-201x300.png)

This is a helpful View, where we can play with lot of Web related changes and it will still reflect here. However, it cannot replace a Native Android Application at any point in time. It is highly reliant on the data connection of the user’s phone, hence, can load data very slowly.

Drop in any comments below.

***“Learn and Be Curious”***

 

 

### 

 

[Tweet](https://twitter.com/intent/tweet?text=WebView+in+Android++AndroidMonks&url=https%3A%2F%2Fandroidmonks.com%2Fwebview%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fwebview%2F)0 Shares Categories [Android](https://androidmonks.com/category/android/), [Android programming](https://androidmonks.com/category/android-programming/) [Leave a comment](https://androidmonks.com/webview/#respond) Post navigation[CheckedTextView in Android | AndroidMonks](https://androidmonks.com/checkedtextview/)[ViewStub in Android | AndroidMonks](https://androidmonks.com/viewstub/)### Leave a Comment [Cancel reply](/webview/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"544","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "c005e5bc76";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "544";var swpClickTracking = false; 