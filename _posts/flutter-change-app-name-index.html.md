---
title: '# Flutter Change App name & Launcher Icon – 3 Easy Steps'
description: 'Change Flutter App name & Launcher Icon is illustrated in this article. With just these 3 simple steps you are good to go in under 10 minutes.'
date: '2019-10-02'
modified_date: '2019-10-02'
image: '/assets/images/posts'
---
# Flutter Change App name & Launcher Icon – 3 Easy Steps

 [October 2, 2019](https://androidmonks.com/flutter-change-app-name/ "8:39 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Flutter Change App name & Launcher Icon – 3 Easy Steps](#Flutter_Change_App_name_Launcher_Icon_8211_3_Easy_Steps)
	+ [1.1 Flutter Change App Name](#Flutter_Change_App_Name)
		- [1.1.1 Create the App](#Create_the_App)
		- [1.1.2 Input Project Name and Build the Flutter Project](#Input_Project_Name_and_Build_the_Flutter_Project)
		- [1.1.3 Change App Name for Android](#Change_App_Name_for_Android)
		- [1.1.4 Change App Name for IOS](#Change_App_Name_for_IOS)
	+ [1.2 Flutter Change App Icon](#Flutter_Change_App_Icon)
		- [1.2.1 Create the Icon](#Create_the_Icon)
		- [1.2.2 Change App Icon in Android](#Change_App_Icon_in_Android)
		- [1.2.3 Changing App Icon For IOS](#Changing_App_Icon_For_IOS)
	+ [1.3 App Icon Generator](#App_Icon_Generator)
	+ [1.4 Flutter Change App Icon & Name – Conclusion](#Flutter_Change_App_Icon_Name_8211_Conclusion)
## Flutter Change App name & Launcher Icon – 3 Easy Steps

In this article, we will look at [**3 simple ways to change the Flutter App name & Launcher Icon**](https://androidmonks.com/flutter-change-app-name/) for Android & IOS devices easily. Make sure to read the whole article to understand how the entire process works.

Since Flutter is a one code base for both Android and IOS, we will be looking at creating the changes for both the environments. Starting with the Flutter Change App name below.

### Flutter Change App Name

In order to change the Flutter’s App Name, make sure to create the app name right when the project is created. The following are the steps to do it.

#### Create the App

Creating the app is pretty straight forward, for a detailed explanation on it, take a look at the [Flutter App for Beginners – Creating your First Flutter App](https://androidmonks.com/first-flutter-app/) article. However, the following images illustrate how to do it in simple ways.

#### **Input Project Name and Build the Flutter Project**

1. **Create the App Project through the Builder**

![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2019/10/Screen-Shot-2019-10-02-at-12.50.29-PM.png)

2. Name the **PROJECT NAME** as to what your **App Name should also be.**This reflects your App Name. In this example, I have named it as sample\_flutter\_app. We will see how it creates the App in the next section.

![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2019/10/Screen-Shot-2019-10-02-at-12.51.19-PM.png)

**3. Finish the flow by building the App.**

![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2019/10/Screen-Shot-2019-10-02-at-12.55.56-PM.png)

**4. Flutter Project is creating**

![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2019/10/Screen-Shot-2019-10-02-at-12.56.10-PM.png)

**5. Sample App Code is built here**

![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2019/10/Screen-Shot-2019-10-02-at-12.56.46-PM.png)

6. Project Structure looks like this.

![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2019/10/Screen-Shot-2019-10-02-at-12.56.56-PM.png)

7. App Name is reflected under **Android>src>main>Androidmanifest.xml**

The **label** name in the Android manifest is responsible for giving the App Name for Android Application. This app name is the same name as the **project name we gave in Step 2. You can control the App name thus directly when trying to create the project.**

![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2019/10/Screen-Shot-2019-10-02-at-1.03.36-PM.png)

In case the App name is not created while building the project. Do not worry, we still have ways to change the App Name

#### Change App Name for Android

Changing the Android app name is as simple as modifying the **Androidmanifest.xml label.**

Make sure that the Androidmanifest.xml is selected. It is as simple as choosing the file from the project folder. The below-highlighted file is to be selected.

![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2019/10/Screen-Shot-2019-10-02-at-1.12.15-PM.png)

The Androidmanifest.xml can now be modified. Choose the


```
<application
    android:name="io.flutter.app.FlutterApplication"
    android:label="sample\_flutter\_app"
    android:icon="@mipmap/ic\_launcher">
    <activity
        android:name=".MainActivity"
```
This portion represents the actual Android file naming system. Important information like Launcher Icon and App name can be controlled here. Modify the **android:label** to change the App Name only.

**NOTE: android:name represents the id(To more about what this id does, watch about Releasing app in the app store). This id is unique for all the apps that are present in the android app store and we will not be looking at this in this article.**

#### Change App Name for IOS

Modifying the IOS name is as simple as we did for Android.

1. Navigate to the **IOS>Runner>info.plist like highlighted below.**

![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2019/10/Screen-Shot-2019-10-02-at-1.17.00-PM.png)

2. Find the **CFBundleName** <key>. This denotes the Key that holds the app name. The app name now can be changed by modifying the <String> </String> below that.

Once done, make sure to build the application(Run it in the IOS Simulator) to see the change effected.

### Flutter Change App Icon

Just as similar as it is to change the App name, it is easy to change the App icon as well. The below sections illustrate the same.

**NOTE: Additional tips as to how to create the App Icon is added towards the end. Check it out to faster the process of adding App Icons.**

#### Create the Icon

Creating the Icon should not be a problem. You can use any free tools available to do the same. **Make sure that the icon is of 500 x 500**size to make it easily changeable across App sizes.

#### Change App Icon in Android

Android requires multiple sizes of Icons(This is to effectively show the icons in all devices of varying sizes). There is a super easy tool to do this for us. See the last section to know more about it.

Once the different Icon sizes are obtained, find the **Android>app>src>main>res folder**as shown below.

![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2019/10/Screen-Shot-2019-10-02-at-1.27.50-PM.png)

Open the **folders starting with mipmap**. This folder holds the launcher icon for that size under the name **ic\_launcher.png**

Place your Icon in all the folders and make sure to change the name of it **ic\_launcher.png** like shown below.

![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2019/10/Screen-Shot-2019-10-02-at-1.31.03-PM.png)

Once all the icons are replaced, Build and Run the App on the Android Emulator to see the Icon Change.

#### Changing App Icon For IOS

Changing the IOS App Icon is also pretty straight forward as the above section. To begin with, navigate to the **IOS>Runner>Assets.xcassets>AppIcon.appiconset folder.** It looks like the structure shown below.

![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2019/10/Screen-Shot-2019-10-02-at-1.52.24-PM.png)

The next step is to replace all the icons(Depending on their sizes) as shown in the **file name.**

**Icon-App-20×20@1x.png** **represents a 20×20 png file.**It is a really tedious process to go in and change all the Icons by hand and also modify the icons to varying sizes. To ease the process, take a look at the following section.

### App Icon Generator

We will see about a **free tool called the [AppIconMaker](https://appiconmaker.co/)** which will ease the process by a huge level. Just drag and drop a 500×500 icon or a 1024×1024 png file and the online tool generates these files with varying sizes easily.

Sample Sizes for IOS and Android are shown below. Just Drag and Drop the icon in the uploader section and the icons are generated easily.

![AppIcon for IOS](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![AppIcon for IOS](https://androidmonks.com/wp-content/uploads/2019/10/Screen-Shot-2019-10-02-at-1.58.13-PM.png) AppIcon for IOS![AppIcon for Android](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![AppIcon for Android](https://androidmonks.com/wp-content/uploads/2019/10/Screen-Shot-2019-10-02-at-1.58.20-PM.png) AppIcon for Android### Flutter Change App Icon & Name – Conclusion

The article detailed all the workings of creating and changing the App name and the App Icon is super easy steps. The easiest of steps is to let the IDE generate the name for you and place it in places (The first section of the article illustrated how to go with the Initial flow for creating the project and the Project name corresponded to the App name). That being the easier of the other two ways, App Icon, on the other hand, has to be modified by the steps illustrated above only.

There could be a single way to build both the App Icons for IOS and Android but nothing yet so far. Make sure to check them all out and drop any comments in the comment section below.

***“Happy Coding”***

 

[Tweet](https://twitter.com/intent/tweet?text=Flutter+Change+App+name+%26+Launcher+Icon+-+3+Easy+Steps&url=https%3A%2F%2Fandroidmonks.com%2Fflutter-change-app-name%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fflutter-change-app-name%2F)0 Shares Categories [Flutter](https://androidmonks.com/category/flutter/) [Leave a comment](https://androidmonks.com/flutter-change-app-name/#respond) Post navigation[Flutter Icons | Easiest Widget in Flutter](https://androidmonks.com/flutter-icons/)[ExpansionTile Widget in Flutter – Awesome UI List](https://androidmonks.com/expansiontile-widget/)### Leave a Comment [Cancel reply](/flutter-change-app-name/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"2077","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "c14f5ebe6a";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "2077";var swpClickTracking = false; 