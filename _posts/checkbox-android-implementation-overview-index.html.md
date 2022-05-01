---
title: '# CheckBox in Android – Implementation and Overview'
description: 'CheckBox in Android Tutorial - Implementation and Overview - CheckBox in Android - Implementation and Overview - Android Monks'
date: '2018-08-12'
modified_date: '2018-08-12'
image: '/assets/images/posts'
---
# CheckBox in Android – Implementation and Overview

 [August 12, 2018](https://androidmonks.com/checkbox-android-implementation-overview/ "10:06 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 CheckBox in Android – Implementation and Overview](#CheckBox_in_Android_8211_Implementation_and_Overview)
	+ [1.1 CheckBox – Other important properties](#CheckBox_8211_Other_important_properties)
	+ [1.2 CheckBox in Activity](#CheckBox_in_Activity)
	+ [1.3 Tips to create the perfect Check Box](#Tips_to_create_the_perfect_Check_Box)
## CheckBox in Android – Implementation and Overview

CheckBox is a important but but not very much used view in Android. You can allow the user to select one or multiple options using the checkbox and perform the respective action for it. Below is the implementation

![Checkbox in android](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Checkbox in android](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-12-at-11.51.05-AM-1024x161.png) Check Box in android
```
<CheckBox
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent" />

```
 

Just like any other view, layout\_width and layout\_height are default properties of checkbox.

 

### CheckBox – Other important properties

android:id – this is very important as there is a need to recognise which check box is selected by the user

android:text – Gives a label to the check box (Typically arrange it in a vertical layout to make it look clearer)

android:onClick – Can call a public method through this to perform action

android:checked – Gives a default value to the checkbox

android:background – This is to give a drawable for background

![CheckBox in Android](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![CheckBox in Android](https://androidmonks.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-12-at-12.02.57-PM.png) Sample CheckBox in AndroidThis is a simple check box that i created for this tutorial. Can you guess what property i used here!!

 


```
<CheckBox
    android:layout\_width="match\_parent"
    android:layout\_height="wrap\_content"
    android:text="sample1"
    android:id="@+id/samplecheck1" />

<CheckBox
    android:layout\_width="match\_parent"
    android:layout\_height="wrap\_content"
    android:text="sample2"
    android:checked="true"
    android:id="@+id/samplecheck2"/>
```
The above two checkbox with one difference only, android:checked is set for Check box 2. It is important to know what properties you are using to create a neat check box.

 

### CheckBox in Activity

Once you have created a check box, you need to set individual listeners to it. Since, multiple check box can be chosen by the user, we need to handle that situation. Sample listener to handle this situation is given below.


```
CheckBox checkBox1 = (CheckBox) findViewById(R.id.samplecheck1);
CheckBox checkBox2 = (CheckBox) findViewById(R.id.samplecheck2);
checkBox1.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View view) {
        onCheckboxClicked(View view)
    }
});
checkBox2.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View view) {
        onCheckboxClicked(View view)
    }
});
```

```
public void onCheckboxClicked(View view) {
    // Is the view now checked?
    boolean checked = ((CheckBox) view).isChecked();

    // Check which checkbox was clicked
    switch(view.getId()) {
        case R.id.samplecheck1:
            if (checked)
                //perform some action
           
            break;
        case R.id.samplecheck2:
            if (checked)
                // perform action            
            break;
        
    }
}
```
 

### Tips to create the perfect Check Box

It is always important to know about the best practices for creating a checkbox. Check [this](https://materialdoc.com/components/selection-controls/) material design project by google, where some neat and cleaner looking check boxes are created.

* It is important to keep in mind that, the **text associated with the checkbox is clearly present**.
* Do not model the check box with a crude design in mind. Always model first.
* Plan the content for the check boxes before hand and then think about placing them **vertically (Horizontal placement should be avoided as much as possible)**
* Make sure the **text values** of each boxes are almost of the **same length** (Not too short not too long).

 

Learn to incorporate this into your design. Be sure to first create a wireframe design and then model the application based on that.

I have created a tutorial [here](https://androidmonks.com/list-of-things-you-need-to-design-a-professional-android-app/) with list of things you will need to create a professional looking application. Take a look at it.

 

*“Learn be Curious”.*

[Tweet](https://twitter.com/intent/tweet?text=CheckBox+in+Android+-+Implementation+and+Overview&url=https%3A%2F%2Fandroidmonks.com%2Fcheckbox-android-implementation-overview%2F)Pin[Share1](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fcheckbox-android-implementation-overview%2F)1 Shares Categories [Uncategorized](https://androidmonks.com/category/uncategorized/) [Leave a comment](https://androidmonks.com/checkbox-android-implementation-overview/#respond) Post navigation[ImageView in Android – Overview and Implementation](https://androidmonks.com/imageview-android-overview-implementation/)[ListView in Android – Implementation and Overview](https://androidmonks.com/listview-android-implementation-overview/)### Leave a Comment [Cancel reply](/checkbox-android-implementation-overview/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"199","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "ddfaf41e4e";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "199";var swpClickTracking = false; document.addEventListener("DOMContentLoaded", function() { var swpButtonsExist = document.getElementsByClassName( "swp\_social\_panel" ).length > 0; if (swpButtonsExist) { swp\_admin\_ajax = "https://androidmonks.com/wp-admin/admin-ajax.php"; swp\_post\_id=199; swp\_post\_url= "https://androidmonks.com/checkbox-android-implementation-overview/"; swp\_post\_recovery\_url = ""; socialWarfare.fetchFacebookShares(); } }); 