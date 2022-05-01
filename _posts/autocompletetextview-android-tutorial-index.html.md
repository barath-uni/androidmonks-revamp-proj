---
title: '# AutocompleteTextview in Android – Complete Tutorial'
description: 'AutocompleteTextview in Android - Implementation and Overview - Tutorial Android Monks AutocompleteTextview in Android - Complete Tutorial'
date: '2018-08-23'
modified_date: '2018-08-30'
image: '/assets/images/posts'
---
# AutocompleteTextview in Android – Complete Tutorial

 [August 30, 2018August 23, 2018](https://androidmonks.com/autocompletetextview-android-tutorial/ "5:08 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")## AutocompleteTextview in Android – Implementation and Overview

AutocompleteTextview in short, helps the user complete the text when entered into a [EditText](https://androidmonks.com/edittext-android-implementation-usage/). If you have read my [TextView](https://androidmonks.com/textview-android-usage-implementation/) or [ListView](https://androidmonks.com/listview-android-implementation-overview/), you can guess how we are going to do this.

We will need to declare AutocompleteTextview with a simple `AutocompleteTextview` XML tag.


```
<AutoCompleteTextView
    android:layout\_width="wrap\_content"
    android:layout\_height="wrap\_content"
    android:text="Text Here"/>
```
### AutocompleteTextview Properties

 

**android:dropDownHeight –**Specifies the height of the dropdown.

**android:dropDownAnchor –**View to anchor the auto-complete dropdown to.

**android:completionHint –** The hint displayed in the drop down menu. Make sure you have this set, inorder to provide better understanding that the view is actually a drop down view

**android:completionThreshold –**Tthe number of characters that the user must type before completion suggestions are displayed in a drop down menu. Threshold is important when you are serving data from the database

Think of lots of data you have to show in the drop down. The threshold can help you categorise the data a bit faster. Play around with this property to balance the UI experience and the speed with which the data is rendered.

**android:popupBackground –** This sets the background. Can be color or a image. Be careful when you set this property, sometimes simple is better!!

**android:dropDownSelector –**This is the selector in a drop down list.

### AutocompleteTextview Implementation

Implement the XML document like below.


```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent">
    <AutoCompleteTextView
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:text="Text Here"
        android:id="@+id/autocomplete\_textview"
        android:completionThreshold="3"
        android:completionHint="Complete Text"/>
</LinearLayout>
```
**AutocompleteActivity.java**


```
package wolfsoft.ozzon;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.ArrayAdapter;
import android.widget.AutoCompleteTextView;

public class AutocompleteActivity extends AppCompatActivity {
    AutoCompleteTextView autoCompleteTextView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.autocomplete\_textview);
        String[] stringOfArray = { "autocomplete,text1", "Beta complete","Lines of code",
                "Lint based framework", "automatic"};
        autoCompleteTextView = (AutoCompleteTextView) findViewById(R.id.autocomplete\_textview);
        ArrayAdapter<String> adapter = new ArrayAdapter<String>
                (this,android.R.layout.select\_dialog\_item, stringOfArray);
        autoCompleteTextView.setAdapter(adapter);
    }
}


```
The final screen looks like this:

![AutocompleteTextview](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![AutocompleteTextview](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-23-at-10.34.15-PM.png) AutocompleteTextviewYou can take a look [here](https://androidmonks.com/category/app-development/) to learn about firebase and pulling data from there.

It is very useful when you have lot of data that you want to create a autocompletetextview. Learn to play around with the data controllers and also various [adapters](https://androidmonks.com/listview-android-implementation-overview/) to learn how you can interpret the data.

Check [here](https://materialdoc.com/components/autocomplete/) for additional tips for material design inspiration.

*“Learn and Be Curious”*

 

[Tweet](https://twitter.com/intent/tweet?text=AutocompleteTextview+in+Android+-+Complete+Tutorial&url=https%3A%2F%2Fandroidmonks.com%2Fautocompletetextview-android-tutorial%2F)Pin1[Share1](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fautocompletetextview-android-tutorial%2F)2 Shares Categories [Android](https://androidmonks.com/category/android/), [Android programming](https://androidmonks.com/category/android-programming/), [app android](https://androidmonks.com/category/app-android/), [Uncategorized](https://androidmonks.com/category/uncategorized/) [Leave a comment](https://androidmonks.com/autocompletetextview-android-tutorial/#respond) Post navigation[RadioButton in Android – Implementation and Overview](https://androidmonks.com/radiobutton-android-implementation/)[AlertDialog in Android- What is it?](https://androidmonks.com/alertdialog-implementation-tutorial/)### Leave a Comment [Cancel reply](/autocompletetextview-android-tutorial/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"315","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "cc5bc2851c";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "315";var swpClickTracking = false; 