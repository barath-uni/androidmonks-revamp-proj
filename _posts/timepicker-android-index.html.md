---
title: '# TimePicker in Android – Implementation and Overview'
description: 'TimePicker in Android - Implementation and Overview - Tutorial in Android Studio TimePicker in Android - Implementation and Overview Android Monks'
date: '2018-09-07'
modified_date: '2018-09-07'
image: '/assets/images/posts'
---
# TimePicker in Android – Implementation and Overview

 [September 7, 2018September 7, 2018](https://androidmonks.com/timepicker-android/ "6:17 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 TimePicker in Android – Implementation and Overview](#TimePicker_in_Android_8211_Implementation_and_Overview)
	+ [1.1 TimePicker – Attributes](#TimePicker_8211_Attributes)
	+ [1.2 TimePicker – Activity Implementation](#TimePicker_8211_Activity_Implementation)
		- * + [1.2.0.0.1 time\_picker.xml](#time_pickerxml)
	+ [1.3 Conclusion – Material Design Ideas](#Conclusion_8211_Material_Design_Ideas)
## TimePicker in Android – Implementation and Overview

TimePicker provides a UI to select time. There are two modes that are available, one is through using the standard clock like interface and the other is the spinner type to choose in hours:minutes:seconds format.

![""</strong](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![""</strong](https://androidmonks.com/wp-content/uploads/2018/09/Screen-Shot-2018-09-07-at-10.23.54-PM-274x300.png) in our layout file.


```
<TimePicker
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"/>
```
Default attributes are **layout\_height** and **layout\_width**. Other important attributes are given below

### TimePicker – Attributes

1. **android:timePickerMode –**This takes two values, spinner/clock. The output screen is given above.
2. **android:id** – Provide a unique id for the time picker
3. **android:background** – Provide a background color
4. **android:padding**/**android:margin** – Provide padding and margin to the view

Play around with the properties, you can also set a custom theme to the Time picker as well.

### TimePicker – Activity Implementation

Some of the important public methods associated with the **TimePicker** class is given below.

1. **setCurrentHour(Integer) –**Sets a hour to the Time Picker
2. **getCurrentHour() –**Gets the time from the clock (Used with spinner in particular to get the value the user sets)
3. **setCurrentMinute(Integer) –**Self explanatory, Sets the Minute hand of the time picker
4. **getCurrentMinute() –**Self explanatory, gets the minute set by the user from the Time Picker
5. **setIs24HourView(Boolean) –**Sets the clock to 24 hour view

Another important listener to record the changes made to the picker is

**setOnTimeChangedListener(TimePicker.OnTimeChangedListener):**Fires whenever the time is changed through the Time Picker by the user.

Example to create a sample Time Picker and record its time, we will use a [TextView](https://androidmonks.com/textview-android-usage-implementation/) to update our changes.

###### **time\_picker.xml**


```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:orientation="vertical">
<TimePicker
    android:layout\_width="match\_parent"
    android:layout\_height="wrap\_content"
    android:timePickerMode="clock"
    android:id="@+id/time\_picker"
    />
    <TextView
        android:layout\_width="match\_parent"
        android:layout\_height="wrap\_content"
        android:id="@+id/text\_view\_time"
        android:textColor="@color/colorAccent"
        android:textSize="55sp"
        android:layout\_gravity="center"/>
</LinearLayout>
```
Create a sample Activity called **TimePickerActivity.java** like below:


```
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.ProgressBar;
import android.widget.SeekBar;
import android.widget.TextView;
import android.widget.TimePicker;

public class TimePickerActivity extends AppCompatActivity {
    TextView textView;
    TimePicker timePicker;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.time\_picker);
        textView = (TextView) findViewById(R.id.text\_view\_time);
        timePicker = (TimePicker) findViewById(R.id.time\_picker);
        timePicker.setOnTimeChangedListener(new TimePicker.OnTimeChangedListener() {
            @Override
            public void onTimeChanged(TimePicker view, int hourOfDay, int minute) {
                textView.setText(String.valueOf(hourOfDay)+":"+String.valueOf(minute));
            }
        });
    }
}
```
The resulting Application is:

!["<yoastmark](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)!["<yoastmark](https://androidmonks.com/wp-content/uploads/2018/09/Screen-Shot-2018-09-07-at-11.25.18-PM-300x288.png)

### Conclusion – Material Design Ideas

Take a look at [this](https://materialdoc.com/components/pickers/) Google Material Design Docs for some pretty cool inspiration.

Drop in any comments that you have.

***“Learn and Be Curious”***

[Tweet](https://twitter.com/intent/tweet?text=TimePicker+in+Android+-+Implementation+and+Overview&url=https%3A%2F%2Fandroidmonks.com%2Ftimepicker-android%2F)Pin[Share1](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Ftimepicker-android%2F)1 Shares Categories [Android](https://androidmonks.com/category/android/), [Android programming](https://androidmonks.com/category/android-programming/), [Uncategorized](https://androidmonks.com/category/uncategorized/) [Leave a comment](https://androidmonks.com/timepicker-android/#respond) Post navigation[SeekBar in Android – Implementation and Overview](https://androidmonks.com/seekbar-android-implementation-overview/)[DatePicker in Android – Implementation and Overview](https://androidmonks.com/datepicker-android/)### Leave a Comment [Cancel reply](/timepicker-android/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"410","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "d12ac1430a";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "410";var swpClickTracking = false; 