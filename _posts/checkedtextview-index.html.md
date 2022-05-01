---
title: '# CheckedTextView in Android | AndroidMonks'
description: 'CheckedTextView is inherited from TextView and is primarily used in places where ListView does not allow CHOICE\_MODE\_NONE. Android Monks'
date: '2018-10-18'
modified_date: '2018-10-18'
image: '/assets/images/posts'
---
# CheckedTextView in Android | AndroidMonks

 [October 18, 2018](https://androidmonks.com/checkedtextview/ "3:05 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 CheckedTextView in Android with Example](#CheckedTextView_in_Android_with_Example)
	+ [1.1 CheckedTextView – Basics](#CheckedTextView_8211_Basics)
	+ [1.2 CheckedTextView – Layout Parameters](#CheckedTextView_8211_Layout_Parameters)
	+ [1.3 CheckedTextView – Public Methods Overview](#CheckedTextView_8211_Public_Methods_Overview)
	+ [1.4 CheckedTextView – Example Application](#CheckedTextView_8211_Example_Application)
## CheckedTextView in Android with Example

[CheckedTextView](https://androidmonks.com/checkedtextview/) is used in order to provide Checkable interface support to [TextView](https://androidmonks.com/textview-android-usage-implementation/). According to the Google Docs, “This is useful when used in a `[ListView](https://developer.android.com/reference/android/widget/ListView.html)` where the `[setChoiceMode](https://developer.android.com/reference/android/widget/AbsListView.html#setChoiceMode(int))` has been set to something other than`CHOICE_MODE_NONE`.”

This means that, we can make use of the [CheckedTextView](https://androidmonks.com/checkedtextview/) inside a ListView without any Choice Mode set. [TextView](https://androidmonks.com/textview-android-usage-implementation/) with Choice Mode option creates a effective user experience by showing Checked Images (We will see what i mean by images below).

### CheckedTextView – Basics

The CheckedTextView can be created using the [CheckedTextView](https://androidmonks.com/checkedtextview/) Tag like below. However, it is important to note that, android:checkMark attribute has to be set in order to make it as a CheckedTextView, it will work like a normal [TextView](https://androidmonks.com/textview-android-usage-implementation/) otherwise.

Check the below basic implementation of Checked TextView.


```
<CheckedTextView
    android:id="@+id/simpleCheckedTextView"
    android:layout\_width="fill\_parent"
    android:layout\_height="wrap\_content" />
```
Just like any other View, the default Parameters are layout\_width and layout\_height. It is important to note that, there is another important attribute which is the **android:checkMark** attribute, which takes a drawable as its value.

We will see what are the other attributes related to Checked TextView and public methods associated with it.

### CheckedTextView – Layout Parameters

Some of the important Layout parameters are,

* `[android:checkMark](https://developer.android.com/reference/android/widget/CheckedTextView.html#attr_android:checkMark)` – This allows a drawable to be used as the check mark. Can be any image/drawable.
* `[android:checkMarkTint](https://developer.android.com/reference/android/widget/CheckedTextView.html#attr_android:checkMarkTint)` – Tint to apply to the CheckMark.
* `[android:checkMarkTintMode](https://developer.android.com/reference/android/widget/CheckedTextView.html#attr_android:checkMarkTintMode)` – Allows to blend a tint with the CheckMark used.
* [`android:checked`](https://developer.android.com/reference/android/widget/CheckedTextView.html#attr_android:checked) – Indicates the initial checked state of the [View](https://androidmonks.com/android-ui-layout-concepts-knowledge/).

These are the specific attributes with respect to the Checked TextView. Additionally, you can make use of the attributes which is normally used along with a View. Read more about it here.

### CheckedTextView – Public Methods Overview

* **[getCheckMarkDrawable](https://developer.android.com/reference/android/widget/CheckedTextView.html#getCheckMarkDrawable())()** – Returns the drawable used by the View.
* **[getCheckMarkTintList](https://developer.android.com/reference/android/widget/CheckedTextView.html#getCheckMarkTintList())() –**Returns the Tint applied to the View, if any.
* **[getCheckMarkTintMode](https://developer.android.com/reference/android/widget/CheckedTextView.html#getCheckMarkTintMode())() –**Returns the Mode used with the Tint applied to the View, if any
* **[isChecked](https://developer.android.com/reference/android/widget/CheckedTextView.html#isChecked())()** – Boolean value, tells if the View is Checked or Not
* **[setCheckMarkDrawable](https://developer.android.com/reference/android/widget/CheckedTextView.html#setCheckMarkDrawable(android.graphics.drawable.Drawable))([Drawable](https://developer.android.com/reference/android/graphics/drawable/Drawable.html) d)**–  From the name it is evident that, this is a setter method, used to set the Drawable to the View.
* **[setCheckMarkDrawable](https://developer.android.com/reference/android/widget/CheckedTextView.html#setCheckMarkDrawable(int))(int resId) –**Sets the check Mark drawable with specific resource ID if present.
* **[setCheckMarkTintList](https://developer.android.com/reference/android/widget/CheckedTextView.html#setCheckMarkTintList(android.content.res.ColorStateList))([ColorStateList](https://developer.android.com/reference/android/content/res/ColorStateList.html) tint)**– Applies a Tint to the check mark if specified.
* **[setCheckMarkTintMode](https://developer.android.com/reference/android/widget/CheckedTextView.html#setCheckMarkTintMode(android.graphics.PorterDuff.Mode))([PorterDuff.Mode](https://developer.android.com/reference/android/graphics/PorterDuff.Mode.html)** tintMode) – Used to apply the tint mode to the View is specified.
* **[setChecked](https://developer.android.com/reference/android/widget/CheckedTextView.html#setChecked(boolean))(boolean checked)**– Allows the Checked TextView to be either Checked or not
* **[toggle](https://developer.android.com/reference/android/widget/CheckedTextView.html#toggle())()**– Useful method, allows to reverse the state of the CheckedTextView.

### CheckedTextView – Example Application

We have seen, all the properties related to the Checked TextView. Let us jump into creating a example Application below.

First we create a simple Layout, with a Checked TextView. On toggling this textView, we create a callback mechanism to capture the respective action.

checked\_textview.xml


```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent">

    <CheckedTextView
        android:id="@+id/simpleCheckedTextView"
        android:layout\_width="fill\_parent"
        android:layout\_height="wrap\_content"
        android:checked="true"
        android:gravity="center"
        android:checkMark="@drawable/tick"
        android:checkMarkTint="@color/colorPrimary"
        android:checkMarkTintMode="add"
        android:text="Simple Checked TextView" />
</LinearLayout>
```
Time for creating our Activity. This is going to be a simple process, as we will need a callback to capture the onClick and react to it.

We make use of the onClickListener() on the [View](https://androidmonks.com/android-ui-layout-concepts-knowledge/) ([CheckedTextView](https://androidmonks.com/checkedtextview/)) like below.

Creating the CheckedTextViewClass like below.


```
package com.example.baradwav.samplemy;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.CheckedTextView;
import android.view.View;
import android.widget.Toast;

public class CheckedTextViewClass extends AppCompatActivity {
    CheckedTextView checkedTextView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.checked\_textview);

        checkedTextView = findViewById(R.id.checkedTextview);
        // Capture on click and toggle the checked TextView
        checkedTextView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                checkedTextView.toggle();
                if(checkedTextView.isChecked())
                {
                    Toast.makeText(view.getContext(),"TextView is Checked",Toast.LENGTH\_SHORT).show();
                    checkedTextView.setCheckMarkDrawable(R.drawable.tick);
                }
                else{
                    Toast.makeText(view.getContext(),"TextView is not Checked",Toast.LENGTH\_SHORT).show();
                    checkedTextView.setCheckMarkDrawable(null);

                }
            }
        });
    }
    }
```
Once you are done with creating the Activity, its time to check our application. We end up with a application like below.

![CheckedTextView  final Output Screen](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![CheckedTextView  final Output Screen](https://androidmonks.com/wp-content/uploads/2018/10/checkedtextview-595x1024.gif) CheckedTextView final Output ScreenDrop in any comments you have below.

***“Learn and Be Curious”***

[Tweet](https://twitter.com/intent/tweet?text=CheckedTextView+in+Android++AndroidMonks&url=https%3A%2F%2Fandroidmonks.com%2Fcheckedtextview%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fcheckedtextview%2F)0 Shares Categories [Android](https://androidmonks.com/category/android/), [Android programming](https://androidmonks.com/category/android-programming/), [Uncategorized](https://androidmonks.com/category/uncategorized/) [Leave a comment](https://androidmonks.com/checkedtextview/#respond) Post navigation[ZoomControls in Android | AndroidMonks](https://androidmonks.com/zoomcontrols/)[WebView in Android | AndroidMonks](https://androidmonks.com/webview/)### Leave a Comment [Cancel reply](/checkedtextview/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"523","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "c14f5ebe6a";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "523";var swpClickTracking = false; 