---
title: '# Adding Textview inside GridView using Adapters | Androidmonks'
description: 'This tutorial creates dynamic textviews inside a GridView. Use of Adapter class is created and implemented on the GridView - Android Monks'
date: '2018-10-04'
modified_date: '2018-10-04'
image: '/assets/images/posts'
---
# Adding Textview inside GridView using Adapters | Androidmonks

 [October 4, 2018](https://androidmonks.com/adding-textview-inside-gridview/ "7:52 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Adding Textview inside GridView using Adapters](#Adding_Textview_inside_GridView_using_Adapters)
	+ - * + [1.0.0.0.1 Create your layout.xml](#Create_your_layoutxml)
				+ [1.0.0.0.2 Creating our TextView.xml](#Creating_our_TextViewxml)
				+ [1.0.0.0.3 Time to create our Adapter](#Time_to_create_our_Adapter)
				+ [1.0.0.0.4 Creating our MainActivity.java](#Creating_our_MainActivityjava)
				+ [1.0.0.0.5 Job Done!](#Job_Done)
## Adding Textview inside GridView using Adapters

This is a quick implementation to show how you can use a [TextView](https://androidmonks.com/textview-android-usage-implementation/) inside a GridView. There always needn’t be a Button.

The objective here is to create a 2×2 Grid and add Textviews inside. Check the code below.

###### Create your layout.xml

You have to create your layout.xml by including the [GridView](https://androidmonks.com/adding-textview-inside-gridview/). Create a GridView with numColumns = 2. Check the code below.


```
<GridView
    android:layout\_marginTop="15dp"
    android:id="@+id/grid\_view"
    android:layout\_width="fill\_parent"
    android:layout\_height="fill\_parent"
    android:columnWidth="60dp"
    android:gravity="center"
    android:horizontalSpacing="5dp"
    android:numColumns="2"
    android:stretchMode="columnWidth"
    android:verticalSpacing="5dp" />
```
Wrap this around with a LinearLayout and your layout.xml will look like this.


```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:background="@drawable/gradiant"
    >
    <GridView
        android:layout\_marginTop="15dp"
        android:id="@+id/grid\_view"
        android:layout\_width="fill\_parent"
        android:layout\_height="fill\_parent"
        android:columnWidth="60dp"
        android:gravity="center"
        android:horizontalSpacing="5dp"
        android:numColumns="2"
        android:stretchMode="columnWidth"
        android:verticalSpacing="5dp" />
</LinearLayout>
```
###### Creating our TextView.xml


```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent">

    <TextView
        android:id="@+id/grid\_item\_label"
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:text="@+id/label"
        android:background="@drawable/ic\_launcher\_background"
        android:layout\_marginTop="5px"
        android:textSize="20dp"
        android:textColor="#fff"
        android:gravity="center"
        android:shadowRadius="45">
    </TextView>
</LinearLayout>
```
Here, our label is the id we have given it, so that it will be easy to pull the text from the textview, however, you also have to know, setting a value to the textview has to come from a list of values!

We will be achieving that by create a list of values and passing it to the Adapter we are going to create below.

###### Time to create our Adapter

This is where we will be creating our [adapter](https://androidmonks.com/recyclerview-adapter-cardview-implementation/), it is important to note that, you should know how adapters work. If you dont, check here. Once you have the [adapter](https://androidmonks.com/recyclerview-adapter-cardview-implementation/) to be created, note that we are going to extend the BaseAdapter class.

**textViewValues**is our List of values which we will be using to set the value inside the [TextView](https://androidmonks.com/button-shapes-drawable/).

Check the implementation below.


```

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import com.monks.android.justmultiply.R;

import java.util.List;

public class TextViewAdapter extends BaseAdapter {
    private Context context;
    private final List<Integer> textViewValues;

    public TextViewAdapter(Context context, List<Integer> textViewValues) {
        this.context = context;
        this.textViewValues = textViewValues;
    }

    public View getView(int position, View convertView, ViewGroup parent) {

        LayoutInflater inflater = (LayoutInflater) context
                .getSystemService(Context.LAYOUT\_INFLATER\_SERVICE);

        View gridView;

        if (convertView == null) {

            gridView = new View(context);

            // get layout from mobile.xml
            gridView = inflater.inflate(R.layout.textview\_gamebutton, null);

            // set value into textview
            TextView textView = (TextView) gridView
                    .findViewById(R.id.grid\_item\_label);
            textView.setText(String.valueOf(textViewValues.get(position)));
        } else {
            gridView = (View) convertView;
        }

        return gridView;
    }

    @Override
    public int getCount() {
        return textViewValues.size();
    }

    @Override
    public Object getItem(int position) {
        return null;
    }

    @Override
    public long getItemId(int position) {
        return 0;
    }

}
```
We additionally have a textview that we need to inflate. Use the [textview](https://androidmonks.com/button-shapes-drawable/) we created above with the name textview\_gamebutton (or whatever you want to, be sure to change it in the adapter also!).

###### Creating our MainActivity.java

So far so good. We additionally have to create a MainActivity.java that we will be using to stitch together our XML and Adapter.

MainActivity will be responsible for passing the Values we need to set inside the TextView that are now part of the GridView.

Check the below code for clearer understanding.


```
List<Integer> values;
GridView gridview;

protected void onCreate(Bundle savedInstanceState) {
super.onCreate(savedInstanceState);
setContentView(R.layout.game\_layout);
values = new ArrayList<>();
values.add(6);
values.add(7);
values.add(8);
values.add(4);
gridview = findViewById(R.id.grid\_view);
gridview.setAdapter(new TextViewAdapter(this,values));
}
```
###### Job Done!

Drop in any comments you have below. The grid view will now hold 2×2 elements in a box.

![Sample Output](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Sample Output](https://androidmonks.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-04-at-1.12.51-PM.png) Sample Output“Learn and Be Curious”

[Tweet](https://twitter.com/intent/tweet?text=Adding+Textview+inside+GridView+using+Adapters++Androidmonks&url=https%3A%2F%2Fandroidmonks.com%2Fadding-textview-inside-gridview%2F)Pin1[Share1](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fadding-textview-inside-gridview%2F)2 Shares Categories [Android](https://androidmonks.com/category/android/), [Android programming](https://androidmonks.com/category/android-programming/), [app android](https://androidmonks.com/category/app-android/) [Leave a comment](https://androidmonks.com/adding-textview-inside-gridview/#respond) Post navigation[Button Shapes – Shape Drawable | AndroidMonks](https://androidmonks.com/button-shapes-drawable/)[ImageSwitchers in Android Tutorial | AndroidMonks](https://androidmonks.com/imageswitchers-android/)### Leave a Comment [Cancel reply](/adding-textview-inside-gridview/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"501","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "cc5bc2851c";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "501";var swpClickTracking = false; 