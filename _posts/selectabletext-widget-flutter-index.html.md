---
title: '# SelectableText Widget in Flutter | Copyable Text in Flutter'
description: 'SelectableText Widget in Flutter provides the capability to Select/Copy a Text on the UI. Coming Flutter 1.9 release'
date: '2019-11-04'
modified_date: '2019-11-03'
image: '/assets/images/posts'
---
# SelectableText Widget in Flutter | Copyable Text in Flutter

 [November 3, 2019November 4, 2019](https://androidmonks.com/selectabletext-widget-flutter/ "5:00 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 SelectableText Widget in Flutter](#SelectableText_Widget_in_Flutter)
	+ [1.1 SelectableText Basics](#SelectableText_Basics)
	+ [1.2 SelectableText Widget – Properties](#SelectableText_Widget_8211_Properties)
	+ [1.3 SelectableText Widget – Example Application](#SelectableText_Widget_8211_Example_Application)
	+ [1.4 Conclusion](#Conclusion)
## SelectableText Widget in Flutter

[SelectableText Widget in Flutter](https://androidmonks.com/selectabletext-widget-flutter/) lets the user Select/Copy the text on the UI. The normal [**Text Widget in Flutter**](https://androidmonks.com/first-flutter-app/) will not allow a copy/select feature(By double-tapping on the text, we can either select/copy the text). To solve this problem, the Flutter 1.9 release came out with the [SelectableText Widget.](https://androidmonks.com/selectabletext-widget-flutter/)

In this article, we will take a look at how to create this SelectableText in Flutter and how useful and easy it is.

### SelectableText Basics

In order to use the SelectableText, choose the **SelectableText** class. This provides a lot of attributes that can be used to alter the properties of the SelectableText.


```
SelectableText('Hello')
```
**Additionally, there is also another important constructor, selectableText.rich()** which provides the ability to create RichText with Selectable property in Flutter.

### SelectableText Widget – Properties

* [autofocus](https://api.flutter.dev/flutter/material/SelectableText/autofocus.html)  – Whether this text field should focus itself on if nothing else is already focused.
* [data](https://api.flutter.dev/flutter/material/SelectableText/data.html) – Important attribute where the data to be shown as part of the SelectableText has to be shown.
* [maxLines](https://api.flutter.dev/flutter/material/SelectableText/maxLines.html) – The maximum number of lines for the text to span, wrapping if necessary.
* [onTap](https://api.flutter.dev/flutter/material/SelectableText/onTap.html) – Important callback function that gets fired whenever someone taps on the Text of the SelectableText. By default, the tapping opens the **select all/copy**option. If you want to perform other activities, make sure to override it here.
* [style](https://api.flutter.dev/flutter/material/SelectableText/style.html) – If you wish to change the TextStyle of the SelectableText, use this attribute with a TextStyle class and change the property.
* [textAlign](https://api.flutter.dev/flutter/material/SelectableText/textAlign.html) – This attribute takes the TextAlign class and can control how the text is aligned. Change this if you want to make it Left/Center/Right aligned.
* [textSpan](https://api.flutter.dev/flutter/material/SelectableText/textSpan.html) – TextSpan is used as part of the **SelectableText.rich()** widget. This lets you choose the TextSpan which can hold multiple texts on the [SelectableText widget](https://androidmonks.com/selectabletext-widget-flutter/).

 

In the next section, we will look at the Example application created using the [SelectableText widget](https://androidmonks.com/selectabletext-widget-flutter/) and the SelectableText.rich widget.

### SelectableText Widget – Example Application

Below are the two different uses of the SelectableText class and the resulting output.

**SelectableText RichText**


```
import 'package:flutter/material.dart';

void main() => runApp(

    SelectableTextApp()
);

class SelectableTextApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Selectable Text App',
      home: Scaffold(
        appBar: AppBar(title: Text("Sample SelectableText App"),),
        body: SelectableText.rich(
          TextSpan(
            text: 'Hello',
                style: TextStyle(fontSize: 40.0),
                children: <TextSpan>[
                  TextSpan(text: ' Coder', style: TextStyle(color: Colors.red)),
                  TextSpan(text: ' Monk', style: TextStyle(color: Colors.red)),

                ]
          )
        ),
      ),
    );
  }

}
```
![Selectable Text Basic](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Selectable Text Basic](https://androidmonks.com/wp-content/uploads/2019/11/selectabletext.png) **SelectableText RichText**SelectableText Basic


```
import 'package:flutter/material.dart';

void main() => runApp(

    SelectableTextApp()
);

class SelectableTextApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Selectable Text App',
      home: Scaffold(
        appBar: AppBar(title: Text("Sample SelectableText App"),),
        body: SelectableText("Sample Text", style: TextStyle(fontSize: 40.0),),
      ),
    );
  }

}
```
![SelectableText Basic](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![SelectableText Basic](https://androidmonks.com/wp-content/uploads/2019/11/selectabletextbasics.png) **SelectableText Basic**### Conclusion

Flutter 1.9 release came out with a lot of other functionality improvements, which keeps the SDK updated. Make sure to replace your normal Text with the [SelectableText](https://androidmonks.com/selectabletext-widget-flutter/) because you never know what the user might require from your application!

***“Happy Coding”***

[Tweet](https://twitter.com/intent/tweet?text=SelectableText+Widget+in+Flutter++Copyable+Text+in+Flutter&url=https%3A%2F%2Fandroidmonks.com%2Fselectabletext-widget-flutter%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fselectabletext-widget-flutter%2F)0 Shares Categories [Flutter](https://androidmonks.com/category/flutter/) [1 Comment](https://androidmonks.com/selectabletext-widget-flutter/#comments) Post navigation[Flutter Open Source Plugins in 2019 [Top 5]](https://androidmonks.com/flutter-open-source-plugins/)[Flutter AnimatedSwitcher Widget | 3 minute Flutter Animation](https://androidmonks.com/flutter-animatedswitcher-widget/)###  1 thought on “SelectableText Widget in Flutter | Copyable Text in Flutter”

1. ![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://secure.gravatar.com/avatar/afbdd1bf5db46bdcafec55ca29c384c2?s=50&r=g) Henry  [March 5, 2020 at 3:51 pm](https://androidmonks.com/selectabletext-widget-flutter/#comment-1450) Thanks for this guide.  
 But then, i have this app, and it displays post from wordpress website. How can i make the post contents copy able in the flutter app and also be able to long press and save the posts images to the device..?

 [Reply](#comment-1450)

