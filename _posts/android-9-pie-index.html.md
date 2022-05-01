---
title: '# Android 9 Pie – Machine Intelligence, The future?'
description: 'Android 9 Pie release has got various improvements.This article talks about the futuristic updates in the latest Android release. Is it really the future?'
date: '2018-09-09'
modified_date: '2018-09-09'
image: '/assets/images/posts'
---
# Android 9 Pie – Machine Intelligence, The future?

 [September 9, 2018](https://androidmonks.com/android-9-pie/ "9:04 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Android 9 Pie Release – A peek into the future?](#Android_9_Pie_Release_8211_A_peek_into_the_future)
	+ [1.1 Machine Intelligence – what is that?](#Machine_Intelligence_8211_what_is_that)
	+ [1.2 Indoor positioning with Wi-Fi RTT](#Indoor_positioning_with_Wi-Fi_RTT)
	+ [1.3 Neural Networks API 1.1](#Neural_Networks_API_11)
	+ [1.4 Enhanced messaging experience](#Enhanced_messaging_experience)
	+ [1.5 Multi-camera support and camera updates](#Multi-camera_support_and_camera_updates)
	+ [1.6 Other additional Feature in the Pie release](#Other_additional_Feature_in_the_Pie_release)
	+ [1.7 Conclusion](#Conclusion)
## Android 9 Pie Release – A peek into the future?

After spending more than a week analysing what the latest release from Android 9 [Pie](https://androidmonks.com/android-9-pie/) has got, i am pretty much convinced that, we are stepping into the future of mobile technology. Mobile smartphone technology has grown to a point and has halted for the past 2-3 years. Revolution in Mobile applications have stopped and the ideas are running out, because there has always been a bottle neck of what Android can do. But the latest release from Android is providing us with the next set of super cool features that provides a very small window into what might be the future of Machine Intelligence and Artificial Learning.

### Machine Intelligence – what is that?

You might have read this a lot,  but still there is no clear picture of what Artificial Intelligence or Machine Intelligence mean. It merely means that the system (Our smartphone) can think on its own to solve our everyday problems. We do not need to code every possible scenarios to be handled, the machine learns from its mistakes and covers those scenarios. In short, machines are becoming Humans!

However scary that might be, Artificial and Machine Intelligence are at their very nascent stages and there is a long way to go. The latest Pie release from Android provides us with those capabilities.

Let us see what are some interesting features that Android 9 Pie has got in store for the developers.

### Indoor positioning with Wi-Fi RTT

In the outset, this seems like some new network upgrade, well yea it is, partly!! It is more of a update on the software side to leverage what is now becoming popular the IEEE 802.11mc Wi-Fi protocol.

The document says, we can provide a very fine grained location with accuracy upto 1 meter! That is like saying we can pin point the location of where you are by precisely saying which room and near what object you are. That is what this indoor positioning feature does.

It provides a very high accuracy positioning, and using this feature we can perform actions like, “Switch on the bulb”, which the smartphone understands must be near the person and switches on the nearest bulb.

This is where the Machine learning algorithms are applied and provides the next momentum towards creating very precise location based results for the user.

### Neural Networks API 1.1

What’s next is a API to improve the on device machine learning capabilities. The information regarding this is very scattered, except that it is built on top of the API 1 from the Android 8.1 release.

What does it do?

The API is capable of running computationally intensive operations for machine learning on mobile devices. Lets take an example to see what it really means.

Say you are trying to perform image comparison, the device does not try to compare the image every single time, instead makes use of the training models that are already set by the developers. It infers the result from them and applies the results.

There are various categories through which the Neural Network API works

* **Latency**:  This can be critical for video applications that process successive frames coming from a camera. You dont have to send a request over the network and wait for a response.
* **Availability**: The application runs even when outside of network coverage.
* **Speed**: New hardware specific to neural networks processing provide significantly faster computation than with general-use CPU alone.
* **Privacy**: The data does not leave the device.
* **Cost**: No server farm is needed when all the computations are performed on the device.

The document also says that the developer has to keep in mind of the trade offs, which are primarily **Battery Usage**which can be higher and also **Application Size**which might end up being bigger.

### Enhanced messaging experience

Even though not particularly aimed at creating the Machine Intelligence for user response, the Notification features have seen a vast change in the Android 9 Pie release.

* **Simplified support for conversation participants**: The [`Person`](https://developer.android.com/reference/android/app/Person.html) class is used to identify people involved in a conversation, including their avatars and URIs. The `Person`class also supports the Builder design pattern.
* **Support for images**: Android 9 now displays images in Messaging Notifications on phones. Thats super awesome, you needn’t worry about opening the application to see the image. This is a very neat addition to the Android set of features.
* **Save replies as drafts**: Your app can retrieve message sent by the system when a user inadvertently closes a messaging notification.  
 Just like a mail, where the drafts are saved when the user closes the application or browser, the message is stored, which the developer can use and pre-populate the message to be sent by the user.
* **Identify if a conversation is a group conversation**: You can use [`setGroupConversation()`](https://developer.android.com/reference/android/app/Notification.MessagingStyle.html#setGroupConversation(boolean)) to purposefully identify a conversation as a group or non-group conversation.
* **Set the semantic action for an intent**: The Pie release has a method which allows you to give semantic meaning to an action, such as “mark as read,” “delete,” “reply,” and so on.
* **SmartReply**: Android 9 Pie supports the same suggested replies available in your messaging app. Use setChoices() method to provide an array of standard responses to the user.

### Multi-camera support and camera updates

Long awaited update in Android 9 Pie is the release of multi-camera support. This provides a fused api (Like the fusedLocationApi that came out in Android 7), which enables seamless zoom, bokeh, and stereo vision.

Other improvements in camera include additional Session parameters that help to reduce delays during initial capture, and surface sharing that lets camera clients handle various use cases without the need to stop and start camera streaming.

### Other additional Feature in the Pie release

You can take a look at some other additional enhancements and feature list [here](https://developer.android.com/about/versions/pie/android-9.0#notifications), even though there is a significant changes and improvement in almost all the areas, the promising features have been listed in this article.

 

### Conclusion

 

 

![Image result for android 9 pie battery gif](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Image result for android 9 pie battery gif](http://timetravellerwiki.com/wp-content/uploads/2018/08/adaptive-battery.gif) Source:Time traveller wikiThis image has been making the rounds after the Android 9 [Pie](https://androidmonks.com/android-9-pie/) release. It is really pictorial of what the release has to offer.

There is a huge improvement in the way the battery optimisation has been carried out, and brightness control is carried out. These look promising as to improve the software dependency over the battery life.

 

The release definitely is opening doors into the future, but why is everyone suddenly saying Android is dying?

Is it really dying? Take a look at [this](https://androidmonks.com/is-android-really-dying-what-is-google-thinking/) post for answers!

Drop in any comments you have below.

***“Learn and be Curious”***

[Tweet](https://twitter.com/intent/tweet?text=Android+9+Pie+-+Machine+Intelligence%2C+The+future%3F&url=https%3A%2F%2Fandroidmonks.com%2Fandroid-9-pie%2F)Pin[Share1](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fandroid-9-pie%2F)1 Shares Categories [Android](https://androidmonks.com/category/android/), [Android programming](https://androidmonks.com/category/android-programming/) [Leave a comment](https://androidmonks.com/android-9-pie/#respond) Post navigation[DatePicker in Android – Implementation and Overview](https://androidmonks.com/datepicker-android/)[Android Fragments Tutorial – Android Programming](https://androidmonks.com/android-fragments/)### Leave a Comment [Cancel reply](/android-9-pie/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"425","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "d12ac1430a";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "425";var swpClickTracking = false; 