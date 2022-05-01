---
title: '# DatePicker in Android – Implementation and Overview'
description: 'DatePicker in Android - Implementation and Overview - Tutorial in Android Studio Android Monks % DatePicker in Android - Implementation and Overview'
date: '2018-09-09'
modified_date: '2018-09-09'
image: '/assets/images/posts'
---
# DatePicker in Android – Implementation and Overview

 [September 9, 2018](https://androidmonks.com/datepicker-android/ "6:10 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 DatePicker in Android – Implementation and Overview](#DatePicker_in_Android_8211_Implementation_and_Overview)
	+ [1.1 DatePicker – XML implementation](#DatePicker_8211_XML_implementation)
	+ [1.2 DatePicker – Important Attributes](#DatePicker_8211_Important_Attributes)
	+ [1.3 DatePicker – Activity Implementation](#DatePicker_8211_Activity_Implementation)
		- [1.3.1 Important Public Methods](#Important_Public_Methods)
			* + [1.3.1.0.1 Sample Application:](#Sample_Application)
	+ [1.4 DatePicker – Material Design Ideas](#DatePicker_8211_Material_Design_Ideas)
## DatePicker in Android – Implementation and Overview

Continuation to the [TimePicker](https://androidmonks.com/timepicker-android/), DatePicker is used to provide a UI to get the dates from the user. It is pretty important and a stable View which is used frequently. There are two types of Date Picker present in Android, calendar view and spinner view like below.

![Spinner View DatePicker](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Spinner View DatePicker](https://androidmonks.com/wp-content/uploads/2018/09/Screen-Shot-2018-09-08-at-5.01.16-PM-300x215.png) Spinner View DatePicker![Calendar view Datepicker](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Calendar view Datepicker](https://androidmonks.com/wp-content/uploads/2018/09/Screen-Shot-2018-09-08-at-5.01.30-PM-278x300.png) Calendar view Datepicker### DatePicker – XML implementation

We will use the **`<DatePicker>`**tag inside the layout file like below.


```
<DatePicker
    android:layout\_width="match\_parent"
    android:layout\_height="wrap\_content"
    android:id="@+id/date\_picker"
    />
```
The default mode is the calendar view and we will see about the properties of the Date Picker to change mode between spinner and calendar.

### DatePicker – Important Attributes

There are few but important attributes to DatePicker.

* `[android:datePickerMode](https://developer.android.com/reference/android/widget/DatePicker.html#attr_android:datePickerMode)` – This specifies what type of Date Picker has to be shown, either a Calendar/Spinner view like shown in the picture above
* [`android:calendarTextColor`](https://developer.android.com/reference/android/widget/DatePicker.html#attr_android:calendarTextColor) – The text color of the calendar view shown.
* [`android:endYear`](https://developer.android.com/reference/android/widget/DatePicker.html#attr_android:endYear) – The last year that has to be shown in the Calendar View
* `[android:firstDayOfWeek](https://developer.android.com/reference/android/widget/DatePicker.html#attr_android:firstDayOfWeek)`– First day of the week according to the calendar
* [`android:maxDate`](https://developer.android.com/reference/android/widget/DatePicker.html#attr_android:maxDate)/[`android:minDate`](https://developer.android.com/reference/android/widget/DatePicker.html#attr_android:minDate) – The maximum and minimum date as shown in the calendar
* [`android:startYear`](https://developer.android.com/reference/android/widget/DatePicker.html#attr_android:startYear) – The first year in the calendar to be shown

You can check a list of all other attributes [here](https://developer.android.com/reference/android/widget/DatePicker)

### DatePicker – Activity Implementation

Let us create a simple Activity to implement our Date Picker.

Before going to that, there are several public methods that are used inside the class to manipulate the calendar view. They are given below

#### Important Public Methods

* **getDayOfMonth():**Retrieves the day of the month as set by the user in the Date Picker
* **getMonth():**Retrieves the month as set by the user from the Date Picker
* **getYear():**Retrieves the year as set by the user from the Date Picker
* **setSpinnersShown(boolean):** You can modify the Date Picker to be either spinner or calendar view from the activity

###### Sample Application:

For our sample application we will use, [Date Picker](https://androidmonks.com/datepicker-android/), [Textview](https://androidmonks.com/textview-android-usage-implementation/) and a [Button](https://androidmonks.com/buttons-android-overview-implementation/).

**date\_picker.xml**


```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:orientation="vertical">
<DatePicker
    android:layout\_width="match\_parent"
    android:layout\_height="wrap\_content"
    android:calendarTextColor="#444"
    android:startYear="2000"
    android:endYear="2019"
    android:id="@+id/date\_picker"
    />
    <Button
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:id="@+id/button\_date"
        android:text="submit"/>
    <TextView
        android:layout\_width="match\_parent"
        android:layout\_height="wrap\_content"
        android:id="@+id/text\_view\_time"
        android:textColor="@color/colorAccent"
        android:textSize="55sp"
        android:layout\_gravity="center"/>
</LinearLayout>
```
**DatePickerActivity.java**


```
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.ProgressBar;
import android.widget.SeekBar;
import android.widget.TextView;
import android.widget.TimePicker;

import java.util.Date;

public class DatePickerActivity extends AppCompatActivity {
    TextView textView;
    DatePicker datePicker;
    Button dateClicker;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.date\_picker);
        textView = (TextView) findViewById(R.id.text\_view\_time);
        datePicker = (DatePicker) findViewById(R.id.date\_picker);
        dateClicker = (Button) findViewById(R.id.button\_date);
        dateClicker.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                textView.setText(datePicker.getDayOfMonth()+":"+datePicker.getMonth()+":"+datePicker.getYear());
            }
        });
    }
}
```
**Resulting Application:**

![DatePicker Android](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![DatePicker Android](https://androidmonks.com/wp-content/uploads/2018/09/Screen-Shot-2018-09-09-at-11.32.26-AM.png) DatePicker Android 

### DatePicker – Material Design Ideas

You can check [here](https://materialdoc.com/components/pickers/) for some very cool material design ideas for you next project.

Dont stop experimenting, you can create your custom themed Date Picker as well.

Drop in any comments you have below.

***“Learn and be curious”***

Know about TimePicker [here](https://androidmonks.com/timepicker-android/).

[Tweet](https://twitter.com/intent/tweet?text=DatePicker+in+Android+-+Implementation+and+Overview&url=https%3A%2F%2Fandroidmonks.com%2Fdatepicker-android%2F)Pin1[Share1](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fdatepicker-android%2F)2 Shares Categories [Uncategorized](https://androidmonks.com/category/uncategorized/) [Leave a comment](https://androidmonks.com/datepicker-android/#respond) Post navigation[TimePicker in Android – Implementation and Overview](https://androidmonks.com/timepicker-android/)[Android 9 Pie – Machine Intelligence, The future?](https://androidmonks.com/android-9-pie/)### Leave a Comment [Cancel reply](/datepicker-android/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"417","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "5e9d84bb42";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "417";var swpClickTracking = false; 