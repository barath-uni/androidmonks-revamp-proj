---
title: '# TableLayout in Android with Example | AndroidMonks'
description: 'This tutorial explains the creation and implementation of TableLayout view in Android with example. TableLayout in Android with Example | AndroidMonks'
date: '2018-10-13'
modified_date: '2018-10-13'
image: '/assets/images/posts'
---
# TableLayout in Android with Example | AndroidMonks

 [October 13, 2018October 13, 2018](https://androidmonks.com/tablelayout/ "3:01 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 TableLayout in Android with Example | AndroidMonks](#TableLayout_in_Android_with_Example_AndroidMonks)
	+ [1.1 TableLayout – Implementation](#TableLayout_8211_Implementation)
	+ [1.2 TableLayout – XML Implementation](#TableLayout_8211_XML_Implementation)
	+ [1.3 Shrinkable and Stretchable](#Shrinkable_and_Stretchable)
		- * + [1.3.0.0.1 android:collapseColumns :](#androidcollapseColumns)
				+ [1.3.0.0.2 android:shrinkColumns:](#androidshrinkColumns)
				+ [1.3.0.0.3 android:stretchColumns:](#androidstretchColumns)
	+ [1.4 TableLayout – Activity Implementation](#TableLayout_8211_Activity_Implementation)
		- * [1.4.0.1 Finished Application](#Finished_Application)
## TableLayout in Android with Example | AndroidMonks

TableLayout is used to represent Table like View alignment in Android. There are various ways in which you can achieve a table like representation. however TableLayout makes it easy to create one.

A [TableLayout](https://androidmonks.com/tablelayout/) consists of a number of [`TableRow`](https://androidmonks.com/tablelayout/) objects, each defining a row (actually, you can have other children, which will be explained below). TableLayout containers do not display border lines for their rows, columns, or cells. Each row has zero or more cells; each cell can hold one [`View`object](https://androidmonks.com/android-ui-layout-concepts-knowledge/). The table has as many columns as the row with the most cells. A table can leave cells empty. Cells can span columns, as they can in HTML.

![Image result for tablelayout](data:image/png;base64,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)TableLayout Example### TableLayout – Implementation

Creating a Table Layout in XML requires a simple TableLayout tag being used as below.


```
<TableLayout
    android:layout\_width="wrap\_content"
    android:layout\_height="wrap\_content">
    
</TableLayout>
```
The TableRow tag inside the Table Layout specifies each row it will be holding. Check the below implementation.


```
<TableLayout
    android:layout\_width="wrap\_content"
    android:layout\_height="wrap\_content">
    <TableRow android:id="@+id/row1">
    </TableRow>
</TableLayout>
```
The Row will now hold any number of Views inside it. Can be a [TextView](https://androidmonks.com/textview-android-usage-implementation/), [Button](https://androidmonks.com/buttons-android-overview-implementation/), [Image](https://androidmonks.com/imageview-android-overview-implementation/) etc,

Remember that, **the children of a [TableLayout](https://androidmonks.com/tablelayout/) cannot specify the `layout_width` attribute. Width is always `MATCH_PARENT`. However, the `layout_height` attribute can be defined by a child.**

The width of a column is defined by the row with the widest cell in that column.

### TableLayout – XML Implementation

Once your basic implementation is done, we can jump into creating our first proper Table with multiple rows and columns like below.


```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent">
<TableLayout
    android:layout\_width="match\_parent"
    android:layout\_height="wrap\_content">
    <TableRow android:id="@+id/row1">
        <TextView
            android:id="@+id/simpleTextView"
            android:layout\_width="wrap\_content"
            android:layout\_height="wrap\_content"
            android:background="#b0b0b0"
            android:padding="18dip"
            android:text="Column 1"
            android:textColor="#000"
            android:textSize="12dp" />

        <TextView
            android:id="@+id/simpleTextView2"
            android:width="200dp"
            android:layout\_height="wrap\_content"
            android:background="#008800"
            android:padding="18dip"
            android:text="Column 2"
            android:textColor="#000"
            android:textSize="14dp" />
    </TableRow>
    <TableRow android:id="@+id/row2">
        <TextView

            android:id="@+id/simpleTextView3"
            android:layout\_width="wrap\_content"
            android:layout\_height="wrap\_content"
            android:background="#b0b0b0"
            android:padding="18dip"
            android:text="Column 1"
            android:textColor="#000"
            android:textSize="12dp" />

        <TextView
            android:id="@+id/simpleTextView4"
            android:width="100dp"
            android:layout\_height="wrap\_content"
            android:background="#990000"
            android:padding="18dip"
            android:text="Column 2"
            android:textColor="#000"
            android:textSize="14dp" />
    </TableRow>

</TableLayout>
</LinearLayout>
```
This creates a Layout like this,

![TableLayout](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![TableLayout](https://androidmonks.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-13-at-6.49.56-PM.png) TableLayoutCan you guess why, the row 1 and row 2 look the same even though we have given the layout\_width for 2nd row to be equal to 100dp. The answer is because, **the width of a column is defined by the row with the widest cell in that column.**

### Shrinkable and Stretchable

Want to create rows with different width values, instead of columns of same width. You can do that using the concept of Shrinkable and Strechable where in, a TableLayout can specify certain columns as shrinkable or stretchable by calling `[setColumnShrinkable()](https://developer.android.com/reference/android/widget/TableLayout.html#setColumnShrinkable(int,%20boolean))` or `[setColumnStretchable()](https://developer.android.com/reference/android/widget/TableLayout.html#setColumnStretchable(int,%20boolean))`. If marked as shrinkable, the column width can be shrunk to fit the table into its parent object. If marked as stretchable, it can expand in width to fit any extra space. The total width of the table is defined by its parent container. It is important to remember that a column can be both shrinkable and stretchable. In such a situation, the column will change its size to always use up the available space, but never more. Finally, you can hide a column by calling `[setColumnCollapsed()](https://developer.android.com/reference/android/widget/TableLayout.html#setColumnCollapsed(int,%20boolean))`.

You can either implement this through the XML implementation, or through Activity Class methods. The attributes are

###### android:collapseColumns :

You can choose to set this value in the TableLayout, which will collapse the Column based on the number specified. Check out the example below.


```
<TableLayout
    android:layout\_width="match\_parent"
    android:layout\_height="wrap\_content"
    android:collapseColumns="0">
    <TableRow android:id="@+id/row1">
        <TextView

            android:id="@+id/simpleTextView"
            android:layout\_width="wrap\_content"
            android:layout\_height="wrap\_content"
            android:background="#b0b0b0"
            android:padding="18dip"
            android:text="Column 1"
            android:textColor="#000"
            android:textSize="12dp" />

        <TextView
            android:id="@+id/simpleTextView2"
            android:width="200dp"
            android:layout\_height="wrap\_content"
            android:background="#008800"
            android:padding="18dip"
            android:text="Column 2"
            android:textColor="#000"
            android:textSize="14dp" />
    </TableRow>
    <TableRow android:id="@+id/row2">
        <TextView

            android:id="@+id/simpleTextView3"
            android:layout\_width="wrap\_content"
            android:layout\_height="wrap\_content"
            android:background="#b0b0b0"
            android:padding="18dip"
            android:text="Column 1"
            android:textColor="#000"
            android:textSize="12dp" />

        <TextView
            android:id="@+id/simpleTextView4"
            android:width="300dp"
            android:layout\_height="wrap\_content"
            android:background="#990000"
            android:padding="18dip"
            android:text="Column 2"
            android:textColor="#000"
            android:textSize="14dp" />
    </TableRow>

</TableLayout>
```
Upon Collapsing the Column 1 (index starts from 0), we end up with,

![Collapsed Column 1](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Collapsed Column 1](https://androidmonks.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-13-at-6.58.53-PM.png) Collapsed Column 1###### android:shrinkColumns:

The zero-based index of the columns to shrink. The column indices must be separated by a comma: 1, 2, 5. Illegal and duplicate indices are ignored.

Shrink and Stretch can be used at the same time, depending on the Size of the View, the Table Column may expand or shrink,

Check the code below for **shrinkColumns.**

![ShrinkColumns](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![ShrinkColumns](https://androidmonks.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-13-at-7.00.56-PM.png) ShrinkColumns###### android:stretchColumns:

Stretch Column can be used to stretch the Column numbers to fit the rest of the space available. Check out the code below, to implement a stretchable Column.


```
<TableLayout
    android:layout\_width="match\_parent"
    android:layout\_height="wrap\_content"
    android:stretchColumns="0"
    >
    <TableRow android:id="@+id/row1">
        <TextView
            android:id="@+id/simpleTextView"
            android:layout\_width="wrap\_content"
            android:layout\_height="wrap\_content"
            android:background="#b0b0b0"
            android:padding="18dip"
            android:text="Column 1"
            android:textColor="#000"
            android:textSize="12dp" />
        <TextView
            android:id="@+id/simpleTextView2"
            android:layout\_width="wrap\_content"
            android:layout\_height="wrap\_content"
            android:background="#008800"
            android:padding="18dip"
            android:text="Column 2"
            android:textColor="#000"
            android:textSize="14dp" />
    </TableRow>
    <TableRow android:id="@+id/row2">
        <TextView
            android:id="@+id/simpleTextView3"
            android:layout\_width="wrap\_content"
            android:layout\_height="wrap\_content"
            android:background="#b0b0b0"
            android:padding="18dip"
            android:text="Column 1"
            android:textColor="#000"
            android:textSize="12dp" />
        <TextView
            android:id="@+id/simpleTextView4"
            android:layout\_width="150dp"
            android:layout\_height="wrap\_content"
            android:background="#990000"
            android:padding="18dip"
            android:text="Column 2"
            android:textColor="#000"
            android:textSize="14dp" />
    </TableRow>
</TableLayout>
```
We get the following result.

![Stretchable Columns](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Stretchable Columns](https://androidmonks.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-13-at-7.06.19-PM.png) Stretchable Columns### TableLayout – Activity Implementation

There are various public methods, apart from the XML attributes which we can use. They are given below.

* [addView](https://developer.android.com/reference/android/widget/TableLayout.html#addView(android.view.View,%20int))([View](https://developer.android.com/reference/android/view/View.html) child, int index) – Adds a child view. If no layout parameters are already set on the child, the default parameters for this ViewGroup are set on the child.
* [isColumnCollapsed](https://developer.android.com/reference/android/widget/TableLayout.html#isColumnCollapsed(int))(int columnIndex) – Returns the collapsed state of the specified column
* [isColumnShrinkable](https://developer.android.com/reference/android/widget/TableLayout.html#isColumnShrinkable(int))(int columnIndex) – Returns whether the specified column is shrinkable or not.
* [isColumnStretchable](https://developer.android.com/reference/android/widget/TableLayout.html#isColumnStretchable(int))(int columnIndex) – Returns whether the specified column is stretchable or not.
* [setColumnCollapsed](https://developer.android.com/reference/android/widget/TableLayout.html#setColumnCollapsed(int,%20boolean))(int columnIndex, boolean isCollapsed) – Collapses or restores a given column. When collapsed, a column does not appear on screen and the extra space is reclaimed by the other columns. A column is collapsed/restored only when it belongs to a `TableRow`.
* [setColumnShrinkable](https://developer.android.com/reference/android/widget/TableLayout.html#setColumnShrinkable(int,%20boolean))(int columnIndex, boolean isShrinkable) – Makes the given column shrinkable or not. When a row is too wide, the table can reclaim extra space from shrinkable columns.
* [setColumnStretchable](https://developer.android.com/reference/android/widget/TableLayout.html#setColumnStretchable(int,%20boolean))(int columnIndex, boolean isStretchable) – Makes the given column stretchable or not. When stretchable, a column takes up as much as available space as possible in its row.
* [setStretchAllColumns](https://developer.android.com/reference/android/widget/TableLayout.html#setStretchAllColumns(boolean))(boolean stretchAllColumns) – Method to setAllColumns as either Stretchable or not.

These are some of the publicly available methods which we will be making use of frequently.

The layout can now be easily set to our Activity and launched, which will give us the required Table Layout Activity implementation.


```
package com.monks.android.newapplication;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.HorizontalScrollView;

public class MainActivity extends AppCompatActivity {
    HorizontalScrollView horizontalScrollView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.table\_layout);


    }
}
```
This creates the following Application,

##### Finished Application

![Finished TableLayout](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Finished TableLayout](https://androidmonks.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-13-at-7.13.11-PM-244x300.png) Finished TableLayoutYou can drop in any comments below. Do not forget to checkout [GridView](https://androidmonks.com/adding-textview-inside-gridview/) implementation, [ConstraintLayout](https://androidmonks.com/constraintlayout-android-implementation/) implementation for creating similar yet powerful Table like Layouts.

***“Learn and Be Curious”***

 

[Tweet](https://twitter.com/intent/tweet?text=TableLayout+in+Android+with+Example++AndroidMonks&url=https%3A%2F%2Fandroidmonks.com%2Ftablelayout%2F)Pin[Share1](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Ftablelayout%2F)1 Shares Categories [Android](https://androidmonks.com/category/android/), [Android programming](https://androidmonks.com/category/android-programming/), [app android](https://androidmonks.com/category/app-android/) [Leave a comment](https://androidmonks.com/tablelayout/#respond) Post navigation[HorizontalScrollView in Android | AndroidMonks](https://androidmonks.com/horizontalscrollview/)[ZoomControls in Android | AndroidMonks](https://androidmonks.com/zoomcontrols/)### Leave a Comment [Cancel reply](/tablelayout/?utm_source=rss&utm_medium=rss&utm_campaign=tablelayout#respond)

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
 © 2020 Android Monks • Powered by [GeneratePress](https://generatepress.com) This website uses cookies to improve your experience. We'll assume you're ok with this, but you can opt-out if you wish. Cookie settingsACCEPTPrivacy & Cookies Policy   Close #### Privacy Overview

This website uses cookies to improve your experience while you navigate through the website. Out of these cookies, the cookies that are categorized as necessary are stored on your browser as they are essential for the working of basic functionalities of the website. We also use third-party cookies that help us analyze and understand how you use this website. These cookies will be stored in your browser only with your consent. You also have the option to opt-out of these cookies. But opting out of some of these cookies may have an effect on your browsing experience.  Necessary  Necessary Always EnabledNecessary cookies are absolutely essential for the website to function properly. This category only includes cookies that ensures basic functionalities and security features of the website. These cookies do not store any personal information.

 Non-necessary  Non-necessaryAny cookies that may not be particularly necessary for the website to function and is used specifically to collect user personal data via analytics, ads, other embedded contents are termed as non-necessary cookies. It is mandatory to procure user consent prior to running these cookies on your website.

  /* <![CDATA[ */
var tocplus = {"visibility\_show":"show","visibility\_hide":"hide","width":"Auto"};
/* ]]> */  /* <![CDATA[ */
var socialWarfare = {"addons":[],"post\_id":"529","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "8a797f9cbb";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "529";var swpClickTracking = false; 