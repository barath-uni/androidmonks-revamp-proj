---
title: '# RecyclerView & Adapter – CardView Implementation'
description: 'RecyclerView Adapter for CardView implementation - LayoutManager - Android Monks Uncategorized RecyclerView & Adapter - CardView Implementation'
date: '2018-08-15'
modified_date: '2018-10-20'
image: '/assets/images/posts'
---
# RecyclerView & Adapter – CardView Implementation

 [October 20, 2018August 15, 2018](https://androidmonks.com/recyclerview-adapter-cardview-implementation/ "11:29 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 RecyclerView Adapter for CardView Implementation](#RecyclerView_Adapter_for_CardView_Implementation)
	+ [1.1 RecyclerView – Implementation](#RecyclerView_8211_Implementation)
	+ [1.2 RecyclerView – Creating the Layout we want to Recycle (CardView)](#RecyclerView_8211_Creating_the_Layout_we_want_to_Recycle_CardView)
	+ [1.3 RecyclerView – Implementing the Adapter](#RecyclerView_8211_Implementing_the_Adapter)
	+ [1.4 Creating a Model Class to finally hold our User Values](#Creating_a_Model_Class_to_finally_hold_our_User_Values)
		- [1.4.1 Time to create our Adapter Class. Before you do that, we will see about overriding three functions of RecyclerView.Adapter.](#Time_to_create_our_Adapter_Class_Before_you_do_that_we_will_see_about_overriding_three_functions_of_RecyclerViewAdapter)
	+ [1.5  Step 1 – Override the OnCreateViewHolder](#Step_1_8211_Override_the_OnCreateViewHolder)
	+ [1.6 Step 2 – Overriding the OnBindViewHolder method](#Step_2_8211_Overriding_the_OnBindViewHolder_method)
	+ [1.7 Step 3 – Overriding the OnAttachedToRecyclerView method](#Step_3_8211_Overriding_the_OnAttachedToRecyclerView_method)
	+ [1.8 Step 4 – Putting it all together for Adapter](#Step_4_8211_Putting_it_all_together_for_Adapter)
	+ [1.9 Final Step – Finalising Our Activity](#Final_Step_8211_Finalising_Our_Activity)
## RecyclerView Adapter for CardView Implementation

RecyclerView according to google is “A flexible view for providing a limited window into a large data set”. This means that, we can recycle a view (We can make a repetitive implementation of view without actually creating them) based on the data we have.

RecyclerView along with the concept of adapter is used to set the dynamic content for any type of views we need (ListView, CardView etc, we will see about CardViews in this tutorial) to create a scrolling list of items. It can be used to set large data sets easily. Adapters adapt the data to our needs to set the views inside the CardView.

In this tutorial we will see how [CardViews](https://androidmonks.com/cardview-in-android-tutorial-creation-and-implementation/) use the RecyclerView adapter to set dynamic content into it.

CardView is a very neat feature that came out in  [v7 Support Libraries.](https://developer.android.com/tools/support-library/features.html#v7) If you have read my post here, you will know how to create a Card View. We will look at how the RecyclerView adapter can be used with our Cardview.

### RecyclerView – Implementation

Basic RecyclerView implementation is as below

Import the dependency into our App Gradle


```
dependencies {
compile "com.android.support:recyclerview-v7:23.0.1"
}
```
**Sync the application.**

Lets set our first RecyclerView implementation


```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:orientation="vertical">

    <TextView
        android:layout\_width="wrap\_content"
        android:layout\_height="wrap\_content"
        android:text="Sample Recycler View"
        />

    **<android.support.v7.widget.RecyclerView**
 **android:id="@+id/recyclerView"**
 **android:layout\_width="match\_parent"**
 **android:layout\_height="match\_parent" />** 


</LinearLayout>
```
The RecyclerView has to be present **inside a layout** (Recommended) like above.

### RecyclerView – Creating the Layout we want to Recycle (CardView)

Once you have your recycleview set, we need to create the layout we want to recycle. Lets see what we will need.

1. We will need a cardview that we need to repeat
2. We will use 2 [TextViews](https://androidmonks.com/textview-android-usage-implementation/) inside the CardView.
3. TextViews will be for Name and Role

Create CardView like below in a separate layout file.

![CardVIew textfields](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![CardVIew textfields](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-15-at-2.29.06-PM-1024x459.png) CardView textfields, name this as **list\_view.xml**
```
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    android:orientation="vertical">

    <android.support.v7.widget.CardView
        android:layout\_width="match\_parent"
        android:layout\_height="wrap\_content">

        <TextView
            android:layout\_width="match\_parent"
            android:layout\_height="match\_parent"
            android:text="Monk says HI!!"
            android:id="@+id/cardViewText1"
            android:textSize="20sp" />
        <TextView
            android:layout\_width="wrap\_content"
            android:layout\_height="wrap\_content"
            android:text="Two Pack"
            android:id="@+id/cardViewText2"/>
    </android.support.v7.widget.CardView>

</RelativeLayout>
```
### RecyclerView – Implementing the Adapter

Once you have created the two Layouts needed for this tutorial, time to create our first Adapter.

Adapter is a simple binder, which will adapt the data you give into the respect layout which you need to place the data in. In simpler terms, we have a cardview and two textviews inside it. We are going to feed a list of data into the adapter for the two text views and the adapter will take care of handling the setting of text part.

Check the code below for creating a adapter

**Go ahead create a class called RVAdapter like below**


```
public class RVAdapter extends RecyclerView.Adapter<RVAdapter.UserViewHolder>

```
Here we have extended the **RecyclerView.Adapter** of *UserViewHolder* type. That is, *UserViewHolder* is our custom made [ViewHolder](https://developer.android.com/reference/android/support/v7/widget/RecyclerView.ViewHolder) that is going to combine our TextView to the data based on the position.

I have created a simple class below to implement the UserViewHolder (Our ViewHolder Class)


```
public static class UserViewHolder extends RecyclerView.ViewHolder{
   
    TextView personName;
    TextView personRole;
    public UserViewHolder(View itemView) {
        super(itemView);

            personName = (TextView) itemView.findViewById(R.id.cardViewText1); //Name Textview inside the Cardview
            personRole = (TextView) itemView.findViewById(R.id.cardViewText2);//Role Textview inside the Cardview
    }

}


```
### Creating a Model Class to finally hold our User Values

We are going to create a placeholder class which is also called as a Model. Create a Model called UserValues.


```
public class UserValues {
    String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    UserValues(String name,String role)
    {
        this.name = name;
        this.role = role;
    }
    String role;

}
```
This is enough to be as a placeholder for our Name and Role values. This will be used for repetitive creation of Name and Role using lesser function calls.

#### Time to create our Adapter Class. Before you do that, we will see about overriding three functions of RecyclerView.Adapter.

###  Step 1 – Override the OnCreateViewHolder

This is the method that is going to **inflate the layout and set the viewholder to our custom viewholder**

Confusing?

Ok, first of all, the simple layout which is holding our CardView has to recycled(This is our objective). The system however has to know which layout has to be recycled, and thus we are going to inflate it. That is, we are in need of expanding the layout file inside a RecyclerView which we have created in our MainLayout file.

This is done with the below code.


```
@Override
    public UserViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
    View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.list\_view,parent,false); //First argument is the name of our layout file
    UserViewHolder uv = new UserViewHolder(view);

    return uv;
}
```
### Step 2 – Overriding the OnBindViewHolder method

This is where we are actually pointing the data we created to the position where it has to be placed. Check the below code.


```
@Override
public void onBindViewHolder(UserViewHolder holder, int position) {
    holder.personRole.setText(userValuesList.get(position).getRole()); //Setting the role
    holder.personName.setText(userValuesList.get(position).getName()); //Setting the name

}


```
### Step 3 – Overriding the OnAttachedToRecyclerView method

This method is called by the RecyclerView when it starts observing the Adapter.


```
@Override
public void onAttachedToRecyclerView(RecyclerView recyclerView)
{
    super.onAttachedToRecyclerView(recyclerView);
}
```
We can perform other actions here also if needed, however, we will call the super implementation for now.

### Step 4 – Putting it all together for Adapter

We will put all the methods and classes we have created so far to create our adapter like below.


```
public class RVAdapter extends RecyclerView.Adapter<RVAdapter.UserViewHolder>{
    List<UserValues> userValuesList;
    @Override
        public UserViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.list\_view,parent,false);
        UserViewHolder uv = new UserViewHolder(view);
        return uv;
    }

    @Override
    public void onBindViewHolder(UserViewHolder holder, int position) {
        final UserValues user = userValuesList.get(position);
        holder.personRole.setText(userValuesList.get(position).getRole());
        holder.personName.setText(userValuesList.get(position).getName());

    }
    @Override
    public void onAttachedToRecyclerView(RecyclerView recyclerView)
    {
        super.onAttachedToRecyclerView(recyclerView);
    }
    @Override
    public int getItemCount() {
        return userValuesList.size();
    }

    public static class UserViewHolder extends RecyclerView.ViewHolder{
        TextView personName;
        TextView personRole;
        
        public UserViewHolder(View itemView) {
            super(itemView);

                personName = (TextView) itemView.findViewById(R.id.cardViewText1);
                personRole = (TextView) itemView.findViewById(R.id.cardViewText2);
        }

    }

    RVAdapter(List<UserValues> userValuesList)
    {
        this.userValuesList = userValuesList;
    }
}

```
We are on our way to put all of this together into one Activity.

### Final Step – Finalising Our Activity


```
public class MainActivity extends AppCompatActivity {

    LinearLayout get;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.layout\_file);
        List<UserValues> userValues = new ArrayList<>();
        userValues.add(new UserValues("Name","Role"));
        userValues.add(new UserValues("Name2","Role2"));

        RecyclerView rv = (RecyclerView) findViewById(R.id.recyclerView);

        LinearLayoutManager lm = new LinearLayoutManager(this);
        rv.setLayoutManager(lm);
        RVAdapter adapter = new RVAdapter(userValues);
        rv.setAdapter(adapter);
}
}

```
**LayoutManager** is a new concept which we will see below.

According to Android Docs “A LayoutManager is responsible for measuring and positioning item views within a RecyclerView as well as determining the policy for when to recycle item views that are no longer visible to the user”.

Therefore the LayoutManager has to be set, only then the items inside the RecyclerView will be positioned properly.

There are 3 LayoutManagers available.

* `LinearLayoutManager`
* `GridLayoutManager`
* `StaggeredGridLayoutManager`

All the three have their respective properties. We will be using **LinearLayoutManager** for our tutorial.

1. Create a ReyclerView class and set the View we created in the first part of the tutorial (id-recyclerView)
2. Now create a LayoutManager for our RecyclerView
3. Initialise the Values needed for our Application
4. Invoke the adapter with these values
5. Set the Adapter to the RecyclerView

Once all of this is done, **Build and Run your application.**

I have added some properties to the CardView and this is My final Output Screen.

![RecyclerView - Final Output](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![RecyclerView - Final Output](https://androidmonks.com/wp-content/uploads/2018/08/nameeee-576x1024.jpg) Final Output 

Start thinking about material design ideas, check [here](https://androidmonks.com/top-blogs-with-exceptional-content-to-learn-android-programming/) for list of websites with awesome content for you to start rolling right now. Keep working on understanding the concepts clearly before you implement complex combinations.

*“Learn and Be Curious”*

[Tweet](https://twitter.com/intent/tweet?text=RecyclerView+%26+Adapter+-+CardView+Implementation&url=https%3A%2F%2Fandroidmonks.com%2Frecyclerview-adapter-cardview-implementation%2F)Pin[Share1](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Frecyclerview-adapter-cardview-implementation%2F)1 Shares Categories [Android programming](https://androidmonks.com/category/android-programming/), [Uncategorized](https://androidmonks.com/category/uncategorized/) [Leave a comment](https://androidmonks.com/recyclerview-adapter-cardview-implementation/#respond) Post navigation[CardView in Android Tutorial – Creation and Implementation](https://androidmonks.com/cardview-in-android-tutorial-creation-and-implementation/)[LinearLayout in Android – Implementation and Overview](https://androidmonks.com/linearlayout-android-implementation-overview/)### Leave a Comment [Cancel reply](/recyclerview-adapter-cardview-implementation/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"227","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "cc5bc2851c";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "227";var swpClickTracking = false; 