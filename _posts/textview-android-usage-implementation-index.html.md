---
title: '# Textview in Android – Implementation'
description: 'TextView is a important View in Android. It helps to hold a Text value and is a must-have for any ApplicationAndroid Monks'
date: '2018-08-08'
modified_date: '2018-12-09'
image: '/assets/images/posts'
---
# Textview in Android – Implementation

Textview in Android is a very vital and mostly used View. It is used to hold a text value (just like the name suggests). The need for a Label or a marker with a value that the user does not change is implemented using TextView. The base class for TextView is the View. TextView forms the basis of all views which will be holding a Text(Could be number/password/special characters included). You can either make use of a TextView with the help of a Layout file or optionally can also use it through the Activity class you create. This tutorial helps you to understand what the TextView is and how to create one using [Android Studio](https://androidmonks.com/android-studio/).

### TextView – Declaration

It is defined in the Android XML layout file. If you are new to Android, check out my post on creating an [Android UI layout using Android Studio](https://androidmonks.com/android-ui-layout/) to know how the UI layout is created. Once that is done, you can include this [TextView](https://androidmonks.com/textview-android…e-implementation/) inside your Layout file.

##### Create your UI Layout

![TextView Android](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![TextView Android](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-12-09-at-9.57.41-AM-1024x565.png) TextView UI Layout Android##### Create a TextView

![Implemenation in XML](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Implemenation in XML](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-08-at-2.35.22-PM.png) Implementation in XML
```
<TextView
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent" />
```
As soon as you type <text into the [Android Studio](https://androidmonks.com/android-studio/), the default options pop up. The **layout\_width** and **layout\_height** are to be compulsorily specified in order to let the system know what is the size that the TextView is going to hold.

The following are the values for the **layout\_width** and **layout\_height**

* match\_parent – Specifies that it will match the Parent’s dimension (Parent here is the ViewGroup or Layout that is holding this View)
* wrap\_content – Content specified inside the TextView will be wrapped. That is, the dimensions are restricted to the size of the Text inside the Text only.
* dimensions – You can even specify a fixed dimension to the TextView.

However, it is important to note that, the height and width of the layout\_ is not the dimension of the actual Text itself. It is merely telling how much space the Textbox (The rectangular box that we saw here) holds.

### Other important Properties of TextView

You have declared a TextView. But where is the actual text value? It is specified using the property **android:text**.

The value inside the **android**:text can be either a hardcoded value(Not Recommended) or the value from the **String.xml** (Recommended) resource file.

If you want to learn more about the String.xml file, check [here](https://developer.android.com/guide/topics/resources/string-resource). However, it is merely a file to hold all the string values, in order to aid in some advanced concepts like localization (Translation to other languages). It gives a one-stop place to modify your string values.

List of all Properties

**android:id**

This attribute gives a unique ID for the TextView which can be used throughout the lifetime of the Application. You can specify an **id**like below.


```
<TextView
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent" 
    android:id="@+id/text\_view"/>
```
**android:text**

Enter your Text Value in this section. There are two approaches, insert using a Hardcoded Value or have the value in the String.xml and use that here. The second approach is the most recommended.


```
<TextView
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:text="ANDROIDMONKS"
    />
```
![Androidmonks Text](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Androidmonks Text](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-12-09-at-11.37.35-AM.png) Androidmonks TextUsing a **String.xml** to store the value


```
<TextView
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:text="@string/sampleTextView"
    />
```
My String.xml looks like


```
<resources>
    <string name="app\_name">NewApplication</string>
    <string name="sampleTextView">Sample TextView</string>
</resources>
```
![Sample TextView](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Sample TextView](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-12-09-at-11.40.10-AM.png) Sample TextView**android:fontFamily**

Assigns the font family to the Text. It is done either through a string or a font resource.


```
<TextView
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:text="ANDROIDMONKS"
    android:fontFamily="sans-serif"/>
```
**For Sans Serif**

![Sans Serif TextVIew](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Sans Serif TextVIew](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-12-09-at-11.31.17-AM.png) Sans Serif TextView**For Casual**


```
<TextView
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:text="ANDROIDMONKS"
    android:fontFamily="casual"/>
```
![Casual Font Family](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Casual Font Family](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-12-09-at-11.32.49-AM.png) Casual Font Family**android:gravity**

Specifies the way to align a text if the text is less than the view (Think of this as floating the text value inside the [TextView](https://androidmonks.com/textview-android…e-implementation/)) Do not confuse this with android:layout\_gravity which serves a different purpose.


```
<TextView
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:text="ANDROIDMONKS"
    android:gravity="center"
    />
```
If you note here, the TextView as a layout is matching its parent. That is, it is matching the entire screen width & height. So setting the text gravity to center moves it to the center of the screen like below.

![Textview Gravity](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Textview Gravity](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-12-09-at-11.44.30-AM-666x1024.png) Textview GravityIf you set it to **right**

![Gravity is right](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Gravity is right](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-12-09-at-11.45.28-AM.png) Gravity is rightIf the gravity is **center\_horizontal**

![Center Horizontal](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Center Horizontal](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-12-09-at-11.46.22-AM.png) Center Horizontal**android:textSize**

Assigns the given size to the text.


```
<TextView
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:height="@android:dimen/thumbnail\_width"
    android:text="ANDROIDMONKS"
    android:textSize="30sp"/>
```
![TextSize for TextView](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![TextSize for TextView](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-12-09-at-11.55.03-AM.png) TextSize for TextView**android:textStyle**

Assigns style (normal, bold, italic, bold|italic) for the text.

**Italic**


```
<TextView
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:height="@android:dimen/thumbnail\_width"
    android:text="ANDROIDMONKS"
    android:textStyle="italic"/>
```
![Italic TextStyle](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Italic TextStyle](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-12-09-at-11.58.00-AM.png) Italic TextStyle**Italic | Bold**


```
<TextView
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:height="@android:dimen/thumbnail\_width"
    android:text="ANDROIDMONKS"
    android:textStyle="bold|italic"/>
```
![TextStyle Bold and Italic](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![TextStyle Bold and Italic](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-12-09-at-11.59.07-AM.png) TextStyle Bold and Italic**android:textColor**

Assigns a color to the Text.


```
<TextView
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:height="@android:dimen/thumbnail\_width"
    android:text="ANDROIDMONKS"
    android:textColor="#e00"/>
```
![Android Text Color](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Android Text Color](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-12-09-at-12.03.59-PM.png) Android Text Color**android:background**

Another important attribute of TextView(Or most of the View in general) is the background attribute. It helps you to set any type of drawable. Color/Background Image etc.


```
<TextView
    android:layout\_width="wrap\_content"
    android:layout\_height="wrap\_content"
    android:text="ANDROIDMONKS"
    android:background="#ee1"/>
```
![Background Color](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Background Color](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-12-09-at-12.15.42-PM.png) Background Color### Using TextViews in your Activity

Once you are done with creating your Text in XML. There is a need to access that in your Activity. This is simple with a call using the TextView Class in your Activity. Instantiate and use the TextView like below.

`TextView textView = findViewById("R.id.text_view");//ID you specified in the XML`  
 Here, the findViewById is responsible for searching all the ID’s that have been mapped to the R (resource) file of your project. Once the ID is found, it is used by the class like above. Make sure that the Activity has set the specific XML as its contentView and you are using the TextView from it! (If the View is in one XML file and the Activity is using a different XML for its contentView then the call will result in a runtime exception).

You can access all the attributes that we saw above in the Layout file using a Public Method. The list of public methods of a TextView can be found [here](https://developer.android.com/reference/android/widget/TextView#public-methods).

For an example, below is the method calls implementing the attributes we saw above.

Most used methods are

To set a **BackgroundColor** from the Activity


```
textView = (TextView) findViewById(R.id.text\_view);
textView.setBackgroundColor(Color.RED);
```
To set a **Text** from the Activity


```
textView = (TextView) findViewById(R.id.text\_view);
textView.setText("ANDROIDMONKS");
```
If you want to **Retrieve Text** from the Activity


```
textView = (TextView) findViewById(R.id.text\_view);
String value = textView.getText().toString();
```
Setting **Gravity**to Text


```
textView = (TextView) findViewById(R.id.text\_view);
textView.setGravity(25);
```
Setting **Typeface** to Text


```
textView = (TextView) findViewById(R.id.text\_view);
textView.setTypeface(Typeface.defaultFromStyle(Typeface.BOLD\_ITALIC));
```
### TextView Example App

I have created a simple sample application to change the background color using a [Button](https://androidmonks.com/buttons-android-overview-implementation/) Click. Check out the code resource below.

Create a [Layout File](https://androidmonks.com/android-ui-layout/) named **textview\_layout.xml**


```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:orientation="vertical"
    android:gravity="center">

    <TextView
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:text="ANDROIDMONKS"
        android:id="@+id/text\_view"
        android:textColor="#1e1"/>
    <Button
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:text="Change Color"
        android:id="@+id/button\_view"/>

</LinearLayout>
```
Create an [Activity File](https://androidmonks.com/android-ui-layout/) like below


```
package com.monks.android.newapplication;
import android.graphics.Color;
import android.graphics.Typeface;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.HorizontalScrollView;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    private TextView textView;
    private Button buttonView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.textview\_layout);
        textView = (TextView) findViewById(R.id.text\_view);
        textView.setTypeface(Typeface.defaultFromStyle(Typeface.BOLD\_ITALIC));
        textView.setGravity(25);
        textView.setText("ANDROIDMONKS");
        buttonView = (Button) findViewById(R.id.button\_view);
        buttonView.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                textView.setBackgroundColor(Color.RED);
            }
        });
    }


}
```
The Example TextView App looks like this.

![TextView Sample](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![TextView Sample](https://androidmonks.com/wp-content/uploads/2018/08/textviewsample-594x1024.gif) TextView Sample### Creating the Proper TextView for your Application(Bonus Content)

![TextView ](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![TextView ](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-08-at-1.22.37-PM-190x300.png) Find the TextView hereThis is a sample SignUp activity that I created for the post on [developing an android app in 3 hours](https://androidmonks.com/how-do-you-go-about-developing-an-android-app-the-easy-way/), can you identify the TextView in this. If you have, can you guess how it is created and also its properties.

 

![TextView Identified](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![TextView Identified](https://androidmonks.com/wp-content/uploads/2018/08/Slice-1.png) That is the TextView 

These are the properties with which it was created.


```
<TextView
    android:fontFamily = "Lato-Regular"
    android:layout\_width="wrap\_content"
    android:layout\_height="wrap\_content"
    android:text="SIGN UP"
    android:textSize="22dp"
    android:textColor="#ADCCE2"
    android:layout\_marginLeft="16dp"
    android:layout\_gravity="center"
    android:gravity="center"
    />
```
What I have done here is to include some important properties that I had mentioned above along with the font that I need.

There is another way to create your own Font like above. Check this post about [creating custom Fonts](https://androidmonks.com/how-do-you-go-about-developing-an-android-app-the-easy-way/) for your project to know more about them.

You can implement the TextView in your project and let me know if there are any queries in the comments below.

*“Learn and be Curious”*

[Tweet](https://twitter.com/intent/tweet?text=TextView+in+Android+-+Android+Studio+With+Example&url=https%3A%2F%2Fandroidmonks.com%2Ftextview-android-usage-implementation%2F)Pin2[Share1](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Ftextview-android-usage-implementation%2F)3 Shares Categories [Android](https://androidmonks.com/category/android/), [Android programming](https://androidmonks.com/category/android-programming/) [Leave a comment](https://androidmonks.com/textview-android-usage-implementation/#respond) Post navigation[Android UI Layout- Views & View Groups](https://androidmonks.com/android-ui-layout-concepts-knowledge/)[Buttons in Android – OverView and Implementation](https://androidmonks.com/buttons-android-overview-implementation/)### Leave a Comment [Cancel reply](/textview-android-usage-implementation/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"167","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "5e9d84bb42";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "167";var swpClickTracking = false; 