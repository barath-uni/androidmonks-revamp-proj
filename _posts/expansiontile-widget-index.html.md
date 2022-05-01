---
title: '# ExpansionTile Widget in Flutter – Awesome UI List'
description: 'ExpansionTile Widget in Flutter is an awesome widget and is a definite try for ListView type of applications. This article explains the same with examples.'
date: '2019-10-07'
modified_date: '2019-10-04'
image: '/assets/images/posts'
---
# ExpansionTile Widget in Flutter – Awesome UI List

 [October 4, 2019October 7, 2019](https://androidmonks.com/expansiontile-widget/ "6:00 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 ExpansionTile Widget in Flutter](#ExpansionTile_Widget_in_Flutter)
	+ [1.1 ExpansionTile Basics](#ExpansionTile_Basics)
	+ [1.2 ExpansionTile Widget – Example Code](#ExpansionTile_Widget_8211_Example_Code)
	+ [1.3 Conclusion](#Conclusion)
## ExpansionTile Widget in Flutter

[ExpansionTile Widget in Flutter](https://androidmonks.com/expansiontile-widget/) is a pretty simple yet useful widget. This widget lets you create an expanding Tile that can be used as part of the ListView. A lot of applications might require showing detailed information on the [Listview](https://androidmonks.com/listview-flutter/) but do not have the required space to do that. This Widget lets you create that easily.

In this article, we will see about creating this [ExpansionTile Widget](https://androidmonks.com/expansiontile-widget/) and create a faster and useful UI for our application. To begin with use the following template to quickly ramp up your application in under a minute. Open the emulator and make sure the code is building fine and we are ready to go.


```
import 'dart:async';

import 'package:flutter/material.dart';

void main() => runApp(DividerApp());

class DismissibleApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
 title: 'Sample ExpansionTile Widget',
 home: DismissibleWidget(),
    );
  }
}

class DismissibleWidget extends StatefulWidget {
  DividerWidget({Key key}) : super(key: key);

  @override
  \_DividerWidgetState createState() => \_DividerWidgetState();
}

class \_DismissibleWidgetState extends State<DismissibleWidget> {


  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold();
}
}
```
### ExpansionTile Basics

Before starting to look at the [ExpansionTile](https://flutter.dev/docs/catalog/samples/expansion-tile-sample) Widgets use case, we will look at some of the important properties of this Widget. Beginning with the most important,

* **title –**This property lets you choose the Title for the ExpansionTile Widget. The title will be the one item that will always be shown to the user. Only upon clicking this title the Widget will expand to reveal the contents.
* **children –** The property holds any number of widgets. It could be a card to a simple Text. This will be revealed only upon clicking on the Title of the ExpansionTile widget. Important to not clutter the entire children rather keep it simple. This way the UX is not affected
* **leading** – Lets you give any Icon/Text before the Title(To the left of the title). Similar to how the [ListTile](https://androidmonks.com/listtile-widget-flutter/) is used, this attribute does the same here also.
* **trailing –**Lets you give any Icon/Text after the Title(To the right of the title). Similar to how the [ListTile](https://androidmonks.com/listtile-widget-flutter/) is used, this attribute does the same with the trailing property of the ExpansionTile
* **backgroundColor**– Lets you provide the background color to the entire Expanded Tile. Note that, this is not the color of the entire Title, rather only the expanded Tile.

Once all these properties are included as part of the ExpansionTile widget, we are good to jump to the next section of this article. The following section holds a sample code for the app to show how the [ExpansionTile Widget in Flutter](https://androidmonks.com/expansiontile-widget/) works.

### ExpansionTile Widget – Example Code

Run the following source code to create the app as shown in the next section.


```
import 'dart:async';

import 'package:flutter/material.dart';

void main() => runApp(DismissibleApp());

class DismissibleApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Sample ExpansionTile Widget',
      home: ExpansionTileWidget(),
    );
  }
}

class ExpansionTileWidget extends StatefulWidget {
  ExpansionTileWidget({Key key}) : super(key: key);

  @override
  \_ExpansionTileWidgetState createState() => \_ExpansionTileWidgetState();
}

class \_ExpansionTileWidgetState extends State {


  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        drawer: Drawer(),
        appBar: AppBar(
          title: Text('Sample ExpansionTile Widget'),
          backgroundColor: Colors.black87,
        ),
        body: ExpansionTile(
            title: Text("Pieter's Pizza "),
            trailing: Icon(Icons.local\_pizza),
            backgroundColor: Colors.yellow,
            children: [
              Column(children: [
                Text("Pieter's Very own Pizza. Taste the richness",textAlign:TextAlign.center, style: TextStyle(fontStyle:FontStyle.italic,color: Colors.black87, fontSize: 20.0),),
                Image.network("https://cdn3.iconfinder.com/data/icons/food-4-5/128/178-512.png")
              ],)
            ],
        )

        );
  }
}

```
![ExpansionTile Widget](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![ExpansionTile Widget](https://androidmonks.com/wp-content/uploads/2019/10/Screen-Shot-2019-06-25-at-10.00.22-PM.png) ExpansionTile Widget![ExpansionTile Widget](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![ExpansionTile Widget](https://androidmonks.com/wp-content/uploads/2019/10/Screen-Shot-2019-06-25-at-10.00.28-PM.png) **ExpansionTile Widget**### Conclusion

[ExpansionTile Widget](https://androidmonks.com/expansiontile-widget/) is a very useful Widget and also one of my favorites to show in a ListView. Rather than a plain boring Lists, this will add better UX to the entire App flow. Make sure to try them out and let me know what you think in the comments section below.

***“Happy Coding”***

[Tweet](https://twitter.com/intent/tweet?text=ExpansionTile+Widget+in+Flutter+-+Awesome+UI+List&url=https%3A%2F%2Fandroidmonks.com%2Fexpansiontile-widget%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fexpansiontile-widget%2F)0 Shares Categories [Flutter](https://androidmonks.com/category/flutter/) [Leave a comment](https://androidmonks.com/expansiontile-widget/#respond) Post navigation[Flutter Change App name & Launcher Icon – 3 Easy Steps](https://androidmonks.com/flutter-change-app-name/)[ButtonBar Widget in Flutter – Don’t use Row Widget](https://androidmonks.com/buttonbar-widget-flutter/)### Leave a Comment [Cancel reply](/expansiontile-widget/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"1845","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "c14f5ebe6a";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "1845";var swpClickTracking = false; 