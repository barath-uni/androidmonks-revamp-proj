---
title: '# Getting Data from Internet in Flutter | Androidmonks'
description: 'Using HTTP Package to get Data from the Internet/remote server is discussed with example application in this tutorial post by androidmonks | Complete Guide'
date: '2019-04-07'
modified_date: '2019-06-20'
image: '/assets/images/posts'
---
# Getting Data from Internet in Flutter | Androidmonks

 [June 20, 2019April 7, 2019](https://androidmonks.com/data-from-internet-flutter/ "3:30 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Getting Data from the Internet in Flutter – Http Package](#Getting_Data_from_the_Internet_in_Flutter_8211_Http_Package)
* [2 Using HTTP package](#Using_HTTP_package)
* [3 Parse Data from HTTP.Response](#Parse_Data_from_HTTPResponse)
* [4 Convert the JSON response to the Custom Dart Object](#Convert_the_JSON_response_to_the_Custom_Dart_Object)
* [5 Stitching it all together](#Stitching_it_all_together)
	+ [5.1 Final Application](#Final_Application)
## Getting Data from the Internet in Flutter – Http Package

In this tutorial, we will look at how to make use of [HTTP Package in Flutter to get Data from the internet](https://androidmonks.com/data-from-internet-flutter/). There cannot be any real-time application without the use of Http and internet to communicate back and forth. Even though, the use of Firebase is much helpful and recommended, there might be use cases to call a server that has been set up already.

In order to do that, we will take a look at the HTTP package that Flutter is offering. The tutorial covers, all the basics as to how to create and use the Server to render and make use of JSON data in the Flutter application.

## 

## Using HTTP package

Before we jump on to making the connection with the HTTP server, we will import and [make use of the HTTP package](https://androidmonks.com/data-from-internet-flutter/) in Flutter. Go to the [**pubspec.yaml** and add the below dependency](https://androidmonks.com/scaffold-flutter/) inside the dependencies section


```
dependencies:
  flutter:
    sdk: flutter
  http: ^0.12.0+2
```
The **sdk** will already be present, add the **http**alone. Once done, time to import the HTTP package inside the **main.dart** file.

The main method required to make the Http request is the


```
http.get()
```
The method takes in a URL as its value and expects a JSON response in return. In order to make use of this effectively, the return value should be


```
Future<http.Response>
```
The main use of the **Future** is that and http.Response is that,

* [`Future`](https://api.flutter.dev/flutter/dart-async/Future-class.html) is a core Dart class for working with async operations. It is used to represent a potential value or error that will be available at some time in the future.
* The `http.Response` class contains the data received from a successful http call.

Once, this is introduced, we can look at how to parse the response that is received from the Server.

## Parse Data from HTTP.Response

There are two techniques as part of the JSON serialization that is available. In order to make better usage of the Data that is obtained as the Http response, we will look at the second way to create a Custom Dart object and parsing this data.

This is possible by introducing a simple Model in Flutter(Follows the same syntax as that of JAVA)


```
class Todos {
  final int user;
  final int id;
  final String title;
  final bool completed;

  Todos({this.title, this.completed, this.user, this.id});

  factory Todos.fromJson(Map<String, dynamic> json) {
    return Todos(
      user: json['userId'],
      id: json['id'],
      title: json['title'],
      completed: json['completed'],
    );
  }
}
```
There are 4 variables that are part of the UserId class. They are

* **user**
* **id**
* **title**
* **completed**

The main reason for creating this Class is explained below(We can go with any other custom class depending on what format the data is going to be received)

The important method is the use of the factory to convert the JSON response to the custom dart Object which is the **UserId object.**

Once, this is done, its a matter of constructing the rest of the App to receive data from the Internet.

## Convert the JSON response to the Custom Dart Object

The next part of the process is to convert the JSON response into the Custom Dart object that we require. This is possible by making use of the Future operator and using the **http.get()** method we saw initially.

Check out that portion below,


```
Future<Todos> getData() async {
  final response = await http.get("https://jsonplaceholder.typicode.com/todos/1");
  if (response.statusCode == 200)
    {
      return Todos.fromJson(json.decode(response.body));
    }

}
```
The **main reason for using the Todos class is that****we can make use of some of the available servers that provide test JSON responses. One of the servers that provide the Test JSON response is the jsonplaceholder website**.

You can check out various options that are available in the [jsonplaceholder](https://jsonplaceholder.typicode.com)  
 Once that is done, it is pretty straightforward to use the fromJson method and decoding the **response.body** and storing the value to the Todos class.

## Stitching it all together

Once all the parts are created, it is time to stitch it all together. We are using a lot of operators that denote that an action will be performed in **Future.**In Flutter, there is a Widget to do this exactly called the **FutureBuilder widget.**It takes in the Custom Dart class we created.

The FutureBuilder widget takes in two attributes primarily,

* **future –** What custom Object should we expect in the future.
* **builder –** Method takes in 2 parameters – **context, snapshot.** Snapshot will hold the future data as the custom dart object. It can be accessed by **snapshot.data.<VARIABLE\_NAME>**

Additionally FutureBuilder Widget returns a ProgressBarWidget which will fill the screen still the Custom Object is populated with Data. It can also return None if required.

Lets try to stitch it together and see how the final app structure is.


```
import 'dart:convert';
import 'dart:async';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

Future<Todos> getData() async {
  final response = await http.get("https://jsonplaceholder.typicode.com/todos/1");
  if (response.statusCode == 200)
    {
      return Todos.fromJson(json.decode(response.body));
    }
    else
      {
        throw Exception("Error occured");
      }

}
void main()
{
  runApp(MaterialApp(
    title:'Androidmonks',
    home: Scaffold(
      body: HttpWidget(todos: getData(),),

    ),
  ));
}

class Todos {
  final int user;
  final int id;
  final String title;
  final bool completed;

  Todos({this.title, this.completed, this.user, this.id});

  factory Todos.fromJson(Map<String, dynamic> json) {
    return Todos(
      user: json['userId'],
      id: json['id'],
      title: json['title'],
      completed: json['completed'],
    );
  }
}
class HttpWidget extends StatelessWidget
{
  final Future<Todos> todos;
  HttpWidget({Key key, this.todos}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(title:Text("Sample HTTP Call")),
      body: Center(
        child: FutureBuilder<Todos>(
          future: todos,
          builder: (context, snapshot){
            if(snapshot.hasData) {
              return Text(snapshot.data.title);
            }
            return CircularProgressIndicator();
          },
        ),
      ),
    );
  }

}
```
The application is done. Even though it looks complex enough, the application contains nothing more than simple Future callbacks of the http.get() and JSON parsing the data to the custom object we have.

We make use of the Scaffold Widget as the base widget to render the application UI.

The final application looks like below.

JSON Data from the Sample Server looks like

![JSON Data from Server](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![JSON Data from Server](https://androidmonks.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-06-at-8.59.52-PM.png) **JSON Data from Server**![Final HTTP package Flutter App](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Final HTTP package Flutter App](https://androidmonks.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-06-at-8.57.15-PM.png) **Final HTTP package Flutter App**### Final Application

![Final Application GIF](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Final Application GIF](https://androidmonks.com/wp-content/uploads/2019/04/ezgif.com-video-to-gif-1.gif) Final Application GIFDrop in Any Queries in the comment section below.

***“Happy Coding”***

[Tweet](https://twitter.com/intent/tweet?text=Getting+Data+from+Internet+in+Flutter++Androidmonks&url=https%3A%2F%2Fandroidmonks.com%2Fdata-from-internet-flutter%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fdata-from-internet-flutter%2F)0 Shares Categories [Flutter](https://androidmonks.com/category/flutter/), [Uncategorized](https://androidmonks.com/category/uncategorized/) [Leave a comment](https://androidmonks.com/data-from-internet-flutter/#respond) Post navigation[State Management in Flutter – Explained | Androidmonks](https://androidmonks.com/state-management-flutter/)[IconButton Widget in Flutter | Androidmonks](https://androidmonks.com/iconbutton-flutter/)### Leave a Comment [Cancel reply](/data-from-internet-flutter/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"1627","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "cc5bc2851c";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "1627";var swpClickTracking = false; 