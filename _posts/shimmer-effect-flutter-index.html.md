---
title: '# Shimmer Effect in Flutter | List Loading Effect'
description: 'Shimmer Effect Flutter produces a nice animated effect similar to the famous IOS Unlock Screen effect. This article discusses the same with Flutter & more.'
date: '2019-09-09'
modified_date: '2019-09-09'
image: '/assets/images/posts'
---
# Shimmer Effect in Flutter | List Loading Effect

 [September 9, 2019September 9, 2019](https://androidmonks.com/shimmer-effect-flutter/ "6:00 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Shimmer Effect in Flutter – Awesome Flutter Plugins](#Shimmer_Effect_in_Flutter_8211_Awesome_Flutter_Plugins)
	+ [1.1 Shimmer – Basics](#Shimmer_8211_Basics)
	+ [1.2 Shimmer.fromColors – Properties](#ShimmerfromColors_8211_Properties)
	+ [1.3 Shimmer – Example App](#Shimmer_8211_Example_App)
	+ [1.4 Shimmer Effect – Conclusion](#Shimmer_Effect_8211_Conclusion)
## Shimmer Effect in Flutter – Awesome Flutter Plugins

[Shimmer Effect](https://androidmonks.com/shimmer-effect-flutter/) is a very famous Text effect introduced as part of the IOS environment. In this article, we will look at how to bring that to the Flutter Application.

To begin with, we will make use of this Awesome Flutter Plugin – [**Shimmer 1.0.0**](https://pub.dev/packages/shimmer)

Add the following to the dependency –


```
dependencies: 
 **shimmer: ^1.0.0**
```
Once done, time to import the following line into the main.dart file.


```
import 'package:shimmer/shimmer.dart';
```
### Shimmer – Basics

The [shimmer effect](https://androidmonks.com/shimmer-effect-flutter/) is fairly straight forward. Make use of only one class in your Widget tree and the work is done. If you do not know how the shimmer effect actually works, check the below GIF to understand.

!["<yoastmark](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)!["<yoastmark](https://androidmonks.com/wp-content/uploads/2019/09/fb-animation-image2.gif)

To perform the same effect as above, we will jump into the Widget definition. Make use of the class,

**shimmer** in your Widget tree! There is one option to do this like given below,


```
Shimmer.fromColors
```
Once this is done, we will have to fill out the properties to finalize the application.

### Shimmer.fromColors – Properties

The **Shimmer.fromColors**consist of the following properties.

* **baseColor –** Base Color of the Shimmer that gets shown on the Widget. This color is primary as the child widget will be of this color only.
* **highlightColor** – Highlight Color is the color that produces the shimmer like effect. This color keeps waving across the child widget and it creates the Shimmer like effect. To find more about this check out the example program in the next section.
* **child** – The Child holds whatever widget has to produce the ShimmerEffect. Could be a Text Widget or any complex structure and the ShimmerEffect is produced without any problem! Check out the next section to see more about this attribute and how to use it across complex Widgets

### Shimmer – Example App

The code below produces the ShimmerEffect for two important widgets, the Text Widget and the Column of [ListView Widget.](https://androidmonks.com/listview-flutter/) To know how the app looks do not forget to check the next section for the app output.


```
import 'dart:async';
import 'package:flutter/material.dart';
import 'package:shimmer/shimmer.dart';

void main() => runApp(ShimmerEffectApp());

class ShimmerEffectApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Sample ShimmerEffect Widget',
home: ShimmerWidget(),
);
}
}

class ShimmerWidget extends StatefulWidget {
ShimmerWidget({Key key}) : super(key: key);

@override
\_ShimmerWidgetState createState() => \_ShimmerWidgetState();
}

class \_ShimmerWidgetState extends State {

@override
void initState() {
super.initState();
}

@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(title: Text("Shimmer effect"),),
body: Container(
padding: EdgeInsets.all(25.0),
child:Center(
child: Shimmer.fromColors(
direction: ShimmerDirection.rtl,
period: Duration(seconds:5),
child: Column(
children: [0, 1, 2, 3]
.map((\_) => Padding(
padding: const EdgeInsets.only(bottom: 8.0),
child: Row(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Container(
width: 48.0,
height: 48.0,
color: Colors.white,
),
Padding(
padding:
const EdgeInsets.symmetric(horizontal: 8.0),
),
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Container(
width: double.infinity,
height: 8.0,
color: Colors.white,
),
Padding(
padding:
const EdgeInsets.symmetric(vertical: 2.0),
),
Container(
width: double.infinity,
height: 8.0,
color: Colors.white,
),
Padding(
padding:
const EdgeInsets.symmetric(vertical: 2.0),
),
Container(
width: 40.0,
height: 8.0,
color: Colors.white,
),
],
),
)
],
),
))
.toList(),
),
baseColor: Colors.grey[700],
highlightColor: Colors.grey[100]),
)
),
);
}
}

```
 

![shimmer_effect](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![shimmer_effect](https://androidmonks.com/wp-content/uploads/2019/09/shimmer_effect1.png) shimmer\_effect!["<yoastmark](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)!["<yoastmark](https://androidmonks.com/wp-content/uploads/2019/09/shimmer_effect2.png)

### Shimmer Effect – Conclusion

The above two screens are examples only and a lot more can be performed by merely changing the child Widget alone. Drop any comments in the section below!

***“Learn and Be Curious”***

[Tweet](https://twitter.com/intent/tweet?text=Shimmer+Effect+in+Flutter++List+Loading+Effect&url=https%3A%2F%2Fandroidmonks.com%2Fshimmer-effect-flutter%2F)Pin[Share1](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fshimmer-effect-flutter%2F)1 Shares Categories [Flutter](https://androidmonks.com/category/flutter/) [Leave a comment](https://androidmonks.com/shimmer-effect-flutter/#respond) Post navigation[Google Maps in Flutter | Easy Integration](https://androidmonks.com/google-maps-flutter/)[Imagepicker Widget in Flutter | Gallery Made easy](https://androidmonks.com/imagepicker-flutter/)### Leave a Comment [Cancel reply](/shimmer-effect-flutter/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"1939","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "bb51998ee8";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "1939";var swpClickTracking = false; 