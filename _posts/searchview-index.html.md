---
title: '# Android SearchView Tutorial in Android Studio'
description: 'Android SearchView is used to create a Search interface for the user. This tutorial contains all the attributes and methods with example.in Android Studio.'
date: '2018-12-17'
modified_date: '2019-11-02'
image: '/assets/images/posts'
---
# Android SearchView Tutorial in Android Studio

 [November 2, 2019December 17, 2018](https://androidmonks.com/searchview/ "6:33 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Android SearchView Tutorial in Android Studio](#Android_SearchView_Tutorial_in_Android_Studio)
	+ [1.1 Android SearchView Basics](#Android_SearchView_Basics)
	+ [1.2 SearchView – XML Attributes](#SearchView_8211_XML_Attributes)
	+ [1.3 SearchView Methods in Android](#SearchView_Methods_in_Android)
	+ [1.4 SearchView example using ListView in Android Studio](#SearchView_example_using_ListView_in_Android_Studio)
		- * + [1.4.0.0.1 STEP 1](#STEP_1)
				+ [1.4.0.0.2 STEP 2](#STEP_2)
				+ [1.4.0.0.3 STEP 3](#STEP_3)
				+ [1.4.0.0.4 STEP 4](#STEP_4)
				+ [1.4.0.0.5 Step 5](#Step_5)
				+ [1.4.0.0.6 STEP 6](#STEP_6)
				+ [1.4.0.0.7 STEP 7](#STEP_7)
## Android SearchView Tutorial in Android Studio

[SearchView](https://androidmonks.com/searchview/) in Android is a very sought after View. You cannot find any website nowadays, without a search bar. The same applies to an application also. There are a lot of ways to auto-populate a search query on entering a key phrase into the SearchView. In this tutorial, we will see a detailed tutorial with an example of creating a ListView to serve the answers for our Search.

### Android SearchView Basics

You can define a [SearchView](https://androidmonks.com/searchview/) in Android XML using the <SearchView> Tag or SearchView Class in your Activity. An XML implementation of the SearchView is given below.


```
<SearchView
    android:layout\_width="wrap\_content"
    android:layout\_height="wrap\_content"
    android:id="@+id/search\_view">

</SearchView>
```
This creates a Search View with a Search Icon like below.

![SearchView ICON](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![SearchView ICON](https://androidmonks.com/wp-content/uploads/2018/12/Screen-Shot-2018-12-16-at-10.24.50-PM.png) SearchView ICONA Search View takes in a lot of other attributes to it. See below for the list of all the available attributes.

### SearchView – XML Attributes

The list of all the attributes **unique** to SearchView is given below.

* **android:queryHint** This attribute takes in a Text/String as its value. It lets you set an optional query hint string to be displayed in the empty query field. This means that, instead of a simple icon being present, it lets you show a hint or text for the user to understand. Find the below example to illustrate the same.
```
<SearchView
    android:layout\_width="wrap\_content"
    android:layout\_height="wrap\_content"
    android:id="@+id/search\_view"
    android:queryHint="Search here">
```

![SearchView QueryHint](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![SearchView QueryHint](https://androidmonks.com/wp-content/uploads/2018/12/Screen-Shot-2018-12-16-at-10.37.31-PM-686x1024.png)

 

**android:queryBackground –** This lets you set a Background Color to the Query Hint that you specified above. See the below example.


```
<SearchView
    android:layout\_width="wrap\_content"
    android:layout\_height="wrap\_content"
    android:id="@+id/search\_view"
    android:queryHint="Search here"
    android:queryBackground="@android:color/holo\_purple">
```
![SearchView QueryBackground](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![SearchView QueryBackground](https://androidmonks.com/wp-content/uploads/2018/12/Screen-Shot-2018-12-16-at-10.41.39-PM-201x300.png)

* **android:iconifiedByDefault –** This is the default state of the Search View. If it is true, it will show an icon and expand when clicked. If it is false, it will be in an expanded position all the time. See the example below.


```
<SearchView
    android:layout\_width="wrap\_content"
    android:layout\_height="wrap\_content"
    android:id="@+id/search\_view"
    android:queryHint="Search here"
    android:iconifiedByDefault="false">
```
![iconifiedByDefault](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![iconifiedByDefault](https://androidmonks.com/wp-content/uploads/2018/12/Screen-Shot-2018-12-16-at-11.02.45-PM-261x300.png) Notice how the X Mark is not present when the iconifiedByDefault is set to false* **android:inputType –**  
 This lets you choose what type of input is going to be entered into the Search View. This is very useful if you want to restrict the search query to one particular type. See the example below,
```
<SearchView
    android:layout\_width="wrap\_content"
    android:layout\_height="wrap\_content"
    android:id="@+id/search\_view"
    android:queryHint="Search here"
    android:inputType="number">
```
!["<yoastmark](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)!["<yoastmark](https://androidmonks.com/wp-content/uploads/2018/12/Screen-Shot-2018-12-16-at-11.10.46-PM-200x300.png)
* **android:maxWidth –** This specifies the maximum width of the SearchView. This is an optional parameter and can be specified if there are going to be dynamic views created. To protect the Integrity of the UI it is advised to specify the max width to which the Search View can scale to. See the example code below,
```
<SearchView
    android:layout\_width="wrap\_content"
    android:layout\_height="wrap\_content"
    android:id="@+id/search\_view"
    android:queryHint="Search here"
    android:inputType="number"
    android:maxWidth="25sp">
```

### SearchView Methods in Android

This section consists of all the important Method calls required by the [SearchView](https://androidmonks.com/searchview/). You will probably be using some in the example program given below.

* **getInputType() –**  
 This method helps you to return the input type that the query text field holds. You can use this method on the object of a SearchView Class like below.
```
SearchView searchView = findViewById(R.id.search\_view);
Integer inputType = searchView.getInputType();
```
* **setInputType() –**  
 This method is a setter to make the query text field to be of a certain type. There are various types that you can give, **Date, Time, Text, Number etc.**
```
SearchView searchView = findViewById(R.id.search\_view);
searchView.setInputType(InputType.TYPE\_CLASS\_TEXT);
```
Make use of the **InputType** class to set the Constant to the setInputType method. There are a lot of constants that are available for Day, Date, Time, Number, Text etc.
* **getQuery() –**  
 This method is used to retrieve the text query that the user has input on the query field. You will be using this to make a search in your database and setting the result back. See the example call below
```
SearchView searchView = findViewById(R.id.search\_view);
CharSequence query = searchView.getQuery();
```
* **setQuery(CharSequence, Boolean) –**  
 This is a setter method, which will help us to set the query ourselves. This may not be used very often since the user is responsible for entering the query most of the time. It takes an additional parameter, which is a boolean variable which denotes if the query should be submitted or just entered and wait for the user to submit. An example call is given below,
```
SearchView searchView = findViewById(R.id.search\_view);
CharSequence query = "Sample";
searchView.setQuery(query,true);
```
* **getQueryHint() –**  
 This is a getter to retrieve the query hint we specified in our XML layout. See the example usage below,
```
SearchView searchView = findViewById(R.id.search\_view);
CharSequence query = searchView.getQueryHint();
```
* **setQueryHint() –**  
 This is a setter method to specify which query hint is to be given to the [Search View](https://androidmonks.com/searchview/). You can see the example implementation below,
```
SearchView searchView = findViewById(R.id.search\_view);
CharSequence query = "Sample";
searchView.setQueryHint(query);
```
* **isIconfiedByDefault() –**  
 This method returns a boolean value informing if the [Search View](https://androidmonks.com/searchview/) class is iconified (Shows icon in idle state and expands into a search view when clicked) or not. The example implementation is given below,
```
SearchView searchView = findViewById(R.id.search\_view);
Boolean isIconfied = searchView.isIconfiedByDefault();
```
* **setIconifiedByDefault(Boolean) –**  
 This method is used to set if the [Search View](https://androidmonks.com/searchview/) should be iconified or not. By default it is true, so you can make use of this method to set it to false. Example Implementation is,
```
SearchView searchView = findViewById(R.id.search\_view);
searchView.setIconifiedByDefault(false);
```
* **setOnQueryTextFocusChangeListener(View.OnFocusChangeListenerlistener) –**  
 This is a listener that will wait for the user to click on the focus area. The onFocusChange callback is fired as soon as the user does that, and we can specify our actions inside that. You can change or manipulate a data value present inside that as needed. Example skelton code for the listener is given below,
```
SearchView searchView = findViewById(R.id.search\_view);
searchView.setOnQueryTextFocusChangeListener(new View.OnFocusChangeListener(){

    @Override
    public void onFocusChange(View view, boolean b) {
    // Do your magic here
    }
    
});
```
* **setOnQueryTextListener(SearchView.OnQueryTextListenerlistener) –**  
 This listener is helpful when you have to record user actions on the query field. It retrieves the text on the query field in the onQueryTextChange callback and the onQueryTextSubmit callback gets the final query that the user submits. **Note that we are using the SearchView.OnQueryTextListener** and not **View.OnQueryTextListener.**This is because the SearchView class holds the OnQueryTextListener and it is specific to that only. See the example skeleton code below,
```
SearchView searchView = findViewById(R.id.search\_view);
searchView.setOnQueryTextListener(new SearchView.OnQueryTextListener(){

    @Override
    public boolean onQueryTextSubmit(String s) {
        return false;
    }

    @Override
    public boolean onQueryTextChange(String s) {
        return false;
    }
});
```
* **setOnSuggestionListener(SearchView.OnSuggestionListener) –**  
 This listener fires whenever the user clicks or selects the Suggestions that are going to populate on the [SearchView](https://androidmonks.com/searchview/) bar. You can make sure to perform some action on clicking it( Like opening a new activity or changing the data field etc). An example skeleton code is given below.


```
SearchView searchView = findViewById(R.id.search\_view);
searchView.setOnSuggestionListener(new SearchView.OnSuggestionListener(){

    @Override
    public boolean onSuggestionSelect(int i) {
        return false;
    }

    @Override
    public boolean onSuggestionClick(int i) {
        return false;
    }
})
```

 

### SearchView example using ListView in Android Studio

The Goal of this Example is to **Create a ListView and populate the search results in that list view. We will achieve this by making use of our custom Adapter.**

###### STEP 1

Create a Sample Android Project using Android Studio. Now create an XML name **search\_view.xml**and an Activity name**MainActivity.java**.

###### STEP 2

Open the **search\_view.xml**and create a sample layout file like below.


```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:orientation="vertical">


    <SearchView
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:id="@+id/search\_view"
        android:queryHint="Search here"
        android:inputType="text">

    </SearchView>
    <ListView
        android:id="@+id/list\_view"
        android:layout\_width="fill\_parent"
        android:layout\_height="wrap\_content"
     />
</LinearLayout>
```
###### STEP 3

Open the **MainActivity.java** class and instantiate it as an Activity (extend Activity and override the OnCreate()). Once done, you can create the following code.


```
package com.monks.android.newapplication;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.ListView;
import android.widget.SearchView;
import android.widget.TextView;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    // Declare Variables
    ListView list;
    AdapterClass adapter;
    SearchView editsearch;
    String[] searchQueries;
    ArrayList<SearchQuery> arraylist = new ArrayList<SearchQuery>();

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.search\_view);
        searchQueries = new String[]{"TextView", "ListView", "SearchView",
                "RatingBar", "ToolBar", "Button", "EditText", "ToggleButton",
                "ImageView","SlidingDrawer","Android"};

        list = (ListView) findViewById(R.id.list\_view);
        for (String searchQuery:searchQueries) {
            SearchQuery searchQuery1 = new SearchQuery(searchQuery);
            // Binds all strings into an array
            arraylist.add(searchQuery1);
        }
        adapter = new AdapterClass(this, arraylist);
        list.setAdapter(adapter);
        editsearch = (SearchView) findViewById(R.id.search\_view);
        editsearch.setOnQueryTextListener(new SearchView.OnQueryTextListener() {
            @Override
            public boolean onQueryTextSubmit(String query) {
                return false;
            }
            @Override
            public boolean onQueryTextChange(String newText) {
                String text = newText;
                adapter.filter(text);
                return false;
            }
        });
    }
}
```
###### STEP 4

Before we jump into anything more, we will be required to create a simple Modal that will be the placeholder for our SearchQuery. We will name it **SearchQuery.java** as such. See the implementation of the Modal below.


```
package com.monks.android.newapplication;

public class SearchQuery {

    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }

    private String query;
public SearchQuery(String query)
{
    this.query = query;
}
}
```
###### Step 5

Before our Final Adapter, we will also be in need of a layout file that will come inside the ListView layout file. We can create a simple layout holding a TextView. See the **list\_items.xml** layout file below.


```
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent">
    <TextView
        android:id="@+id/name"
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:textSize="25sp"
        />
</RelativeLayout>
```
###### **STEP 6**

Now, it is time to create the AdapterClass to help in loading our ListView with the data required. Also, note that additionally, we are performing **filter()**operation inside the AdapterClass. This will help in creating a filtered output back to our ListView. See the implementation below


```
package com.monks.android.newapplication;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

public class AdapterClass extends BaseAdapter {


    Context mContext;
    LayoutInflater inflater;
    private List<SearchQuery> searchQueries = null;
    private ArrayList<SearchQuery> arraylist;

    public AdapterClass(Context context, List<SearchQuery> searchQueries) {
        mContext = context;
        this.searchQueries = searchQueries;
        inflater = LayoutInflater.from(mContext);
        this.arraylist = new ArrayList<SearchQuery>();
        this.arraylist.addAll(searchQueries);
    }

    public class ViewHolder {
        TextView name;
    }

    @Override
    public int getCount() {
        return searchQueries.size();
    }

    @Override
    public SearchQuery getItem(int position) {
        return searchQueries.get(position);
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    public View getView(final int position, View view, ViewGroup parent) {
        final ViewHolder holder;
        if (view == null) {
            holder = new ViewHolder();
            view = inflater.inflate(R.layout.list\_items, null);
            // Locate the TextViews in listview\_item.xml
            holder.name = (TextView) view.findViewById(R.id.name);
            view.setTag(holder);
        } else {
            holder = (ViewHolder) view.getTag();
        }
        // Set the results into TextViews
        holder.name.setText(searchQueries.get(position).getQuery());
        return view;
    }

    // Filter Class
    public void filter(String charText) {
        charText = charText.toLowerCase(Locale.getDefault());
        searchQueries.clear();
        if (charText.length() == 0) {
            searchQueries.addAll(arraylist);
        } else {
            for (SearchQuery wp : arraylist) {
                if (wp.getQuery().toLowerCase(Locale.getDefault()).contains(charText)) {
                    searchQueries.add(wp);
                }
            }
        }
        notifyDataSetChanged();
    }

}
```
###### STEP 7

Time to run the application and see what the SearchView does in Android.

## 

 

[Tweet](https://twitter.com/intent/tweet?text=Android+SearchView+Tutorial+in+Android+Studio&url=https%3A%2F%2Fandroidmonks.com%2Fsearchview%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fsearchview%2F)0 Shares Categories [Uncategorized](https://androidmonks.com/category/uncategorized/) [Leave a comment](https://androidmonks.com/searchview/#respond) Post navigation[Android UI Layout with Android Studio | AndroidMonks](https://androidmonks.com/android-ui-layout/)[Android RecyclerView Drag and Drop – Android Studio](https://androidmonks.com/android-recyclerview-drag-drop/)### Leave a Comment [Cancel reply](/searchview/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"1286","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "5e9d84bb42";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "1286";var swpClickTracking = false; 