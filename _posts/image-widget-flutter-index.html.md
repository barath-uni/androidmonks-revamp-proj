---
title: '# Image Widget Flutter | Androidmonks'
description: 'Image Widget in flutter is a simple and powerful widget. A complete tutorial to create Images using Flutter is explained with examples for every property.'
date: '2019-02-24'
modified_date: '2019-06-20'
image: '/assets/images/posts'
---
# Image Widget Flutter | Androidmonks

 [June 20, 2019February 24, 2019](https://androidmonks.com/image-widget-flutter/ "10:38 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 Image Widget Flutter with Example in Android Studio](#Image_Widget_Flutter_with_Example_in_Android_Studio)
	+ [1.1 Image Flutter Basics](#Image_Flutter_Basics)
	+ [1.2 Setting Up the Project Structure](#Setting_Up_the_Project_Structure)
		- [1.2.1 Step1: Create a folder named assets and place it in the project like below](#Step1_Create_a_folder_named_assets_and_place_it_in_the_project_like_below)
		- [1.2.2 Step2: Locate the pubspec.yaml file in the directory](#Step2_Locate_the_pubspecyamlfile_in_the_directory)
		- [1.2.3 Step3: Creating an assets section inside the pubspec.yaml](#Step3_Creating_an_assets_section_inside_the_pubspecyaml)
	+ [1.3 Using Image() Constructor in Flutter](#Using_Image_Constructor_in_Flutter)
	+ [1.4 Using Image.asset in Flutter](#Using_Imageasset_in_Flutter)
	+ [1.5 Using Image.network widget in Flutter](#Using_Imagenetwork_widget_in_Flutter)
	+ [1.6 Using Image.memory in Flutter](#Using_Imagememory_in_Flutter)
	+ [1.7 Understanding Image Widget’s Properties](#Understanding_Image_Widget8217s_Properties)
		- * [1.7.0.1 fit](#fit)
			* [1.7.0.2 height](#height)
			* [1.7.0.3 width](#width)
			* [1.7.0.4 repeat](#repeat)
			* [1.7.0.5 matchTextDirection](#matchTextDirection)
			* [1.7.0.6 color](#color)
			* [1.7.0.7 colorBlendMode](#colorBlendMode)
	+ [1.8 Image Widget in Flutter – Conclusion](#Image_Widget_in_Flutter_8211_Conclusion)
## Image Widget Flutter with Example in Android Studio

An image is a very important visual medium for any application. Creating an [Image Widget](https://androidmonks.com/image-widget-flutter/) in Flutter is a simple process compared to other App development languages. It is similar to the Android way of holding the assets at a location and utilizing these in the Application. There are several use cases that are targeted by the Image Widget which offers a lot of constructors to create the Image in Flutter.

In this post, we will target all the important ways of creating an Image in Flutter and also look at the properties of the Image Widget.

### Image Flutter Basics

There are 5 different ways of putting an image into the Flutter App. Each method solves a different problem. There are ways to get an image over the network, or from a local folder etc. These constructors are particularly useful in solving their individual use cases only. The 5 different ways of including the Image in Flutter are

* **new Image**, for obtaining an image from an ImageProvider.
* **new Image.asset**, for obtaining an image from an AssetBundle using a key.
* **new Image.network**, for obtaining an image from a URL.
* **new Image.file**, for obtaining an image from a File.
* **new Image.memory**, for obtaining an image from a Uint8List.

We will discuss each method in detail and also look at various properties that are part of the Image Class in Flutter.

### Setting Up the Project Structure

Before we jump into understanding how to create Images in Flutter, there has to be a complete understanding of how to arrange the images locally into the project.  
 Setting up the project structure usually requires creating a separate folder to hold our assets(Mostly Images, Fonts, Icons etc) and making changes into an important file called the **pubspec.yaml**

The **pubspec.yaml**is an important file that is used to create a directory or one point of reference to the entire Flutter project.

The pubspec will hold a lot of important values inside it, we will look at creating a assets section inside this file.

#### Step1: Create a folder named assets and place it in the project like below

Inside your flutter project create a folder named assets and place the image inside it like shown below.

It is important to name the assets folder properly, that will help in creating one place which can hold all the assets.

![Creating a assets folder](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Creating a assets folder](https://androidmonks.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-23-at-12.50.37-PM.png) **Creating a assets folder**### 

#### Step2: Locate the pubspec.yaml file in the directory

The pubspec.yaml file will be usually present at the bottom of the project structure and can be located easily like shown below.

![pubspec.yaml](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![pubspec.yaml](https://androidmonks.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-23-at-12.50.13-PM.png) **pubspec.yaml**### 

#### Step3: Creating an assets section inside the pubspec.yaml

Inside the pubspec.yaml file assets section inside **flutter section**. The syntax to create the assets section is


```
assets:
   - assets/images.png
```
The below image explains that clearly,

![Creating asset section inside pubspec.yaml](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Creating asset section inside pubspec.yaml](https://androidmonks.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-23-at-12.50.25-PM.png) **Creating asset section inside pubspec.yaml**### Using Image() Constructor in Flutter

The first constructor we are looking at is the Image() constructor which takes in the ImageProvider as its value to get the Image.

The ImageProvider is a component that renders images used in apps. It generates the portrait image at the bottom of the action bar and the thumbnails for the thumbnail view. Extending on the same concent, ImageProvider in Flutter has very less information on it. We will try to dig a bit deeper and understand what the ImageProvider is used in Flutter with an Example.

Before all of that, we will have to create a simple base app where the Image can be placed at. The below code creates a simple holder for the image to go in and also for us to understand the use of the 5 different ways of inserting an Image in Flutter.

Before jumping on to the constructor implementation make sure the structure is created as shown in the previous section. The assets folder should hold the image. We will be making use of that image through this tutorial.

To create a simple Image() constructor implementation, the code looks like below,


```
import 'package:flutter/material.dart';

void main()
{
  runApp(MaterialApp(
    title: "Androidmonks",
    home: Scaffold(
      appBar: AppBar(
        title: Text("AndroidMonks"),),
        body: Center(child: Image(),
    ),
  ));
}
```
As you can see, we have made use of the Scaffold Widget inside our MaterialApp. The body holds a Center widget and the child is going to be the Image() constructor. The Image() constructor has the following implementation


```
Image({Key key, @required ImageProvider image, String semanticLabel, bool excludeFromSemantics: false, double width, double height, Color color, BlendMode colorBlendMode, BoxFit fit, AlignmentGeometry alignment: Alignment.center, ImageRepeat repeat: ImageRepeat.noRepeat, Rect centerSlice, bool matchTextDirection: false, bool gaplessPlayback: false, FilterQuality filterQuality: FilterQuality.low })

```
It is not mandatory to know how the constructor implemented, the important thing to note here is that there is the use of **ImageProvider** class which is a required parameter.

There isn’t a lot of information about this way of implementing the Image, however, using the ImageProvider requires nothing but a requirement to point to where the Image is going to come from.

That is, ImageProvider can be a pointer to an Asset or could point to a Network location where the image can be brought from, or could also be a pointer to the local storage etc.

In order to make it, even more, clearer, the complete implementation of using the ImageProvider attribute inside the Image() constructor is given below.


```
import 'package:flutter/material.dart';

void main()
{
  runApp(MaterialApp(
    title: "Androidmonks",
    home: Scaffold(
      appBar: AppBar(
        title: Text("AndroidMonks"),),
        body: Center(child: Image(image: AssetImage("assets/images.png"), width: 45.0, height: 45.0,),),
    ),
  ));
}
```
This simple Image() constructor takes in a image attribute which has to be a ImageProvider class. The AssetImage class is a pointer to the ImageProvider for pulling the images from the assets of the project. That is, the images.png asset can be pulled form the assets folder we created in the previous section. Once that is done, the Image can be placed inside the Flutter App. **Note: Make sure to give a width and height value to the Image class inoder to make it even more accurate while showing the image in the App.**

The above code creates a App that looks like below,

![Using Image Constructor](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Using Image Constructor](https://androidmonks.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-23-at-3.00.45-PM.png) **Using Image Constructor**### Using Image.asset in Flutter

The next implementation technique is going to be the **Image.asset class**in Flutter. Just like we saw above, we will make use of the base structure and modify the body alone to place a Image.

The Image.asset is a shortcut implementation for loading images from the assets folder inside the Flutter project. That is, if there are a lot of images which are also assets, we can make use of the Image.asset class directly to load the Images.

Instead of calling a ImageProvider inside the Image() constructor, Image.asset will load the images only from the Asset location that is specified.

A sample code implementation is given,


```
import 'package:flutter/material.dart';

void main()
{
  runApp(MaterialApp(
    title: "Androidmonks",
    home: Scaffold(
      appBar: AppBar(
        title: Text("AndroidMonks"),),
      body: Center(child: Image.asset('assets/images.png'),),
    ),
  ));
}
```
Can you find the difference?

Thats great, we have reduced calling the AssetImage() class inside the child, instead just passed where the image is located.

**Note: Always make sure, the image location is updated in the pubspec.yaml file also**

Once that is done, you can find the output of this like below,

![Using the Image.Asset class in Flutter](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Using the Image.Asset class in Flutter](https://androidmonks.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-23-at-3.07.50-PM.png) **Using the Image.Asset class in Flutter**### Using Image.network widget in Flutter

You guessed it right, just as the name suggest, we can make use of images over the network using this Shorthand of [Image Widget](https://androidmonks.com/image-widget-flutter/).

The Image.network takes in the child value which is going to the URL from which the image has to be loaded from.

Just a pretty straight forward way to load network from the WWW. The problem however is that, the error handling is going to be a costly affair. Since, the image might be found or might not be present in the given URL, it is required to handle that scenario additionally.

There are various other classes to do that, in order to load images over the Network like the CachedNetworkImage class. The downside however is that, the implementation requires some additional lines of error handling along with it.

The simple Image.network class can be implemented as given below,


```
import 'package:flutter/material.dart';

void main()
{
  runApp(MaterialApp(
    title: "Androidmonks",
    home: Scaffold(
      appBar: AppBar(
        title: Text("AndroidMonks"),),
      body: Center(child: Image.network('https://androidmonks.com/wp-content/uploads/2018/12/cropped-Only-Beauteous-3-150x150.png'),),
    ),
  ));
}
```
Once the implementation is done, the App looks like this,

![Image.network class implementation in Flutter](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Image.network class implementation in Flutter](https://androidmonks.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-23-at-3.07.50-PM.png) **Image.network class implementation in Flutter**### Using Image.memory in Flutter

This class is particularly useful when you have a encoded string in your DB, or the image is converted into bytes and you have to now decode it and show it in the Flutter App.

The particular use case of this can be showing real time data of a video recorder, or live streaming between two devices etc.

Inorder to show an example of creating a base64 encoded string to be used in the Image.memory class, the following code has been created.


```
import 'dart:typed\_data';
import 'dart:convert';

import 'package:flutter/material.dart';

void main()
{
  String images = "iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAPc0lEQVR42uycW2wUVRjHp12oLVRIBQJVwNaAQEGgLS3C0tp7u30QL4AaLw9SfPLyYIw+qPFJfDByNTE+GJQYLRRERBGCtyAqlxokFAyxoWi1KSCXXiyw6372nNovc+nYTWe2nrP8H/7Z/5yZ/Xpm5t/vd2bLYkSolvoVjrKnSNQ2Hh3c83v98rJuSCkPxSZDBEJcuLA5HFG7Dw3uuUZIvNc3HyH5qowPkzhnPl94F29EzBePTAcpkHqei3I+RJFoCN7dc8di8bZn1Xr1Sipinhu8qzf6uoN1DWEfi10hnzzWNLrLMK2VPMj3kAGFmnuBwsHwozW6fBYvUqXgXb2hWpcCChNDQCFQGCcUOnGmEOLUecphT4rMQ3FvqNI6tVMU/r+84fjzhW8fbIY8+4iSXki2fXg3DxQChUChalIMPap5oBAoVA+FhmFACaTU1GTz9v+GQiUuBhS3YPmMQgTrupUtWGqgcObM0VT3xBRIY+XmjhkuFIacr+wtwRIT83vBrNCCnb35OiScf/qZLPM99VLT+rfCMO+I6ebag2U9zseny7BSvrb/tzLhvC1Ynmoa/QOm1xhbniNYlvd697ytlE/kf0HKwfIZhW7Yc+5zR6Ff6FHmWzlWrxqW/fSOYHmpCRQChUChEh4oBAqBQqAQKAQKgUIlsAUUAoXaeKAQKAQKgUJ9PFAIFAKFQKE+HigECoFCoFAfDxQChUAhUKiPBwqBQqAQKNTHxxeFLB5zwULcUagMIsw+QrydcN4WLA81ffleIQdLja++Q0OUM1iessHIsSmsQLDCUTW9Kv+5ma/eGSwvNYFCoBAohIBCoFBHDxQChUAhpI+AQqAQKAQK9fFAIQQUAoX6eKAQKAQKIX0EFAKFQCFQqI8HCiGgECjUxwOFQCFQCOkjoBAoBAqBQn08UAgBhUChPh4oBAqBQkgfAYVAIVAIFOrjgUIIKAQK9fFAIVAIFEL6CCgECoFCoFAfDxRCQCFQqI8HCoFCPVAY/lcu3m2fM1jWbufdK6xIAnpbsLzUlMGypc4FTVGLd0ch7w959Z7V0V1Nu/cU0K7PFrBa28p8QDS3/Zj99wcXW+ZxuDFoPkYJbwuWp5qG2BCGXy2+1mVcyh4s2zGx+y0NebR1Wx5xOzWLhu6v/R2iix1Vlnl+uCXXQ02+JpafseKBTEpJSaJ5828UwRXjDnX1VNO9903keSy9Z6IYV0oDBGuoYhS6t/nYUTgk5LWdLZc3JT09QGday3xH4ZVwjT1YXuo55tfcUmKp/86mua7nvGz5JHOwzMco4W3B8lBTARSu35DDNTZsnO0LClkuwfIThZ1/VdPESSmy9ogRSXTkx6AbJuzBUgJ/CYlCgZHChWO5RkHhWL9QyJ6D5T8KWb/+XkbbPsqjppPFLmjgYAGFw4HCxqNL6NHHbuEaSUkGNf1cbDnmVHMJHTwcZDW3lNKlziq5KK9vyKWTp+4SYbTM/5fTJfJG79y1gP5oL3cEq+1shaXm0WNFMoDf7L+TGrbnUfv5Cq51NRKi4yeK6dPdBfTxJ/l04IfF1NldLefXfaVGLMLNtcSajs/zz0uVtGdfIdVvzRWhAwqHC4Vr1s6ilt9KKS0tmeu8+NK0/mN4DVZROZ73P/zIzfT8C7fR4mCG3B41KkDvbp7H81+zLodGpwcoEDDorbfn0Kb35tqDJW/+y69M47Gs7DRa/doM2vjm7N56yTR//hgRHrnmK68YJ9eAO3bm0+d7C2TdadNH0f4Di2QYjzUVWep/+fVCOZefjhdRdnaaHLt/2SQ5npOTDhTGGYXyo4BXV88Q3vS0JG+a6AQWDN29lPfT9N794gnrg/pcHptzRzr1XK2hE73dLjW1L6Tjx48UP0PWCgSSHChcu57XdiI4MijBJTKsIuiyS+Uv6MN0RsYIOnehks5frKRx40bKsczMG2Rnu3C5yh4sifglfbWktu/Il+eyfAVQGHcU7t1XKCT95vfncZ3kZIO++Gqh+edZgvXgQ5liTNwsHpswIUViZ53pQSArK43fL7qQ7anQEqyMm0bKMKysmyIW4KJLCYwKNMv9kyenSvxe7qqiKVNTzbUGDNbpM6Wik/LYt98tkufz+MrJQGG8UfjkU7eKQInPrwSyxA3lWqvMtWzBqlsl9lmCJbqI7CbPPpfNY7fPGM3vtwcrwsHiEMqxnms11NpWLjvi62/M4v1Te8PU0VUtOqA4lscFPgcK1qHGIIdS6NCRoPgtFsECCuOJwr41znRqP1fBEhfa+KedM4utqorCcDSUIrMMRcZAVWgpQ4ECbe1EGcukPok4AD4IPmCAIIg+ECMQRHBgHkUIQUGjQQIREREEIaAUKBELtSgKNiIqiRIfiMf97TYr55zeGyNpk33a9bBy1133nH3PvefP+fda+1+7aqx27RoCFKHCELCIxwbW7G4S62GBZb8PYMWjQpljhbO/V5f9J7DMMSmxgAWQArGTXwuwlAprkwo3b+nDpNcflzmTAOA9KWSGgUUsFrCYuEssObmxnC/JQWwqBFjEArZ7b4Z83rlzI2jQ2EhAJnGWZmIAi8w1AOYvj2crFdY2FfIds+d04zUQ/+X6MK9VqwQZb/yDSf+XCgErE3GZd0FpjAstxaZCARaxgAGk1NSmlWMlVc7hfjOWZHxiPVKacEzcyftgX31u1+4M+3tHFbVVKqx5KqRYWeR9dmiwLSlc+Xlo4JhLl4d4w0e0kfESEu7wTp3OYc4TKDc8MqG9uZnDvfUbe0uMrO302Rw7zoKF3b1EkxmSBEw3f9SKlT29lNQmcuyKVWlkc4FyQ6fOjXjKMMcKZKNkmRkZLez8b/eeDO+TA4MscPv3b07WaGtcJaFyw/Z30wG0nWfd0z7RxnJy7/aWvZ7qTXlKnlj8VkDvBAVGngq5cSeqCooXywv8x3CjiAfsq+Ic73xpfrX4lYqh3slTwRjjMg7g4mZTlDx4KNO7WVmGCBdZeQ2fDyDC/wXXbK7jAbJEwMWSDWPK7+Eaw2ORQfJ5hSnE8rT6cNcAr+LasGqF2e8vD1EqjKJsphbMGdpSKrxNX8xzzP9ntBO0pVRYBxWkrmVzSoVKhU77SoVKhUqFLlMhZQuyPLHiHDI9pcIoUuGRY1lIUPxGoTFwDHLf8DHfXSqocUpjiWb7jnQKqJitff14tVCpMIpU+NffI/0VaAxRXuCY5+Ymc5P9a3Jon2qF2j4/nOkXGgIspcKoUqFZgKZ5Qs6d/mxXOYZqNhXzJk3kc+/N5T1riw5jAUupMIpUiL/QCPyKfE+tPn2ayTXY5Zb594WBVUsZXhhYSoWRpUJeAdZrb6TKuSgBmEPxGYu4O3b2CwMrQEnQYvkPlcsyx09k08vHwi+fsdxCc0PAeAqifT98NMtKhm+iUI1PhdIH6BsDJaqsd5aW5aNYQNBnx6645taaX72lQoDForFfdfDOjnT72ao1adz8uFTIGiESYlQGKDNnzuqKLAZdOfp4u063Zl2vwLVt3dbXmzSlo5fQ8A6+kwVgaXqIR4WoJbaY82bM7AogbQb5hzln8pROLDSzHmkVFo9O7IBawxk6q/dUSD9ecvJdcv7UaV3sMYsW92BxNiYV0rGDHIZYXl4rrpfOGjlu7LgkYujXJYbRu0g8La2pxNCExaVC4mbcTW/15gklv2vJ0hSvdZsEuoDksV98JseAu5szdFbvqRB/0uSOcn5Pc9P/NGB7ZUlKLGBxXkAhSgMGsZJv8iSWmHin9+2F/GrA4ukCoAcOFI0UnT4xqZDOHKQ1LVs2QN8VoOCHHra6MNuwMWpUW6QwdBnRguYElSkVGmDhQ1E+/RXyEqQpMYHF8YWFrSVGxwsxbqrvOmjQCANLWvdNQ6zEAGmYCrEnJ3UUip74WAeOEZv2TBfiAWvRooG3bXu6M3RW76kQv6y8ICAbRhB37fqwuFSYX9DKDyxi1YF1IDawblUHVkwq3LBJBIS0jTHfk991oSxfegN9RisYczsn6EypsOp9enozGaNXr6bE4lEhsmSJma5iYnROSwzlaOnF/DjAKgoDK15WSDOsn3Il49y3f5DNOne+348ObrTw0odoslon6EypsMqf5Zs3PT21M/F4VIgiVDTto8e0JUYHjF/uCwhukwoFWDRJ4EszK8tQHPv4Ex2QUAd08WSFHTom4jtBZ/WWCqkPzX/pfl5tfO/HAwOZGtdwvjTPa+wDFtkYi8N8tnJ1Gk8IdOq2wWFtZWmBiTk3HWBRC/NfG2uPZHfo1yU2w2RyjLnfUKcfWNTHuLbBmS0lPmZskn1SjRufRFkDLT7XAv1ByWxd5Ayd1VsqrFqEpsAohUjeY7SxU4j8aE9GnEVoxrEFSatpf3trX+ZEbNQhdPWrGSN8LhP6c+fzqsUPH8kMxwA6AK0WB0zMtyjOAkaabAFUWXn0KbDOUKErshlVkNYhKlQFqbt+pKlQFaTumlKhUqFSoVJhdPzIUuENk56TweEfOpLJUojNAk+dySEbI07rPFsbWX/V6jQWmeV8dnFBdUCdiWwQyQrxs+dyKUnQtk9dij3VyQ6FwpYuS2XPLbJJth5i7dDGFy9J4frolKaMgeKBIig+51LFR26DxMeOvXffQNSuZIZOUJdSYZUBCqQm+Nwg6k3cWCrZGwygiCNDXr6yp/UnTGjPNpDyvQCKG03BkxKCXwW6YFF3Sgq2KeKFF+8lLrZuQ29vo1EqUEZ4eUF3QExBk70U2NTDli2uVgzl+miL53vseZtNOeHo8Szv2IlsgEWdDdmOE7SlVCh+EFgsOLMvA9/J02aeAQM+u8AAAo4BLM/PS5ZxQ8AKqEDRcyF14WlSBUyxOXOT2SsCYNkN1T41T6+jx7LY/I36lAXWRSPJ+elqoQDrlifAYnzEfSyas0mJE7SlVBjad3Td+l4oL1F/sicWak6oy7zPhhateO8LY+Y8aFMoEjtTkuv9fmMEAOXpJHGkMtAXm4UAYsbwZXO8x2eBW1q9UJ4i3is+m0O1HQrm+qyY73RJroxD0Xb12jS7M8xBA7APdg1QKnSNCjUrdNuPLBVqVui2H1kq1AKp26ZUqFSoVKhUGB1fqVCpUKlQqTA6vlKhUqFSoVJhdEypUKmwblOh6QgW69evORemFmHLym7pv6duUKFa9M2AyT0qVIu+GWC5QYWu/CFqNQYsN7LCkK9ZoVqNUGHY16xQ/RqhwrCvBVL1lQqVCpUKnTNX6MZlX6lQqVCp0AlfqVCpUKlQqVCpsI75SoVKhUqFrpgrdOOyr1SoVKhU6ISvVKhUqFSoVKhUWMf8fwEzNocMQX1jEgAAAABJRU5ErkJggg==";
  Uint8List bytes = base64.decode(images);
  runApp(MaterialApp(

    title: "Androidmonks",
    home: Scaffold(
      appBar: AppBar(
        title: Text("AndroidMonks"),),
      body: Center(child: Image.memory(bytes),),
    ),
  ));
}
```
If you notice the code clearly, there are several new components that are added.

1. Creating a String with hardcoded values of a base64 encoded image. I have taken the sample of the androidmonks logo only and used this website to encode it and give it in the base64 format.
2. Once that is done, the Uint8List class holds the decoded value of the images String.
3. The Image.memory class takes in the attribute which is going to be the Uint8List class only.
4. Passing the bytes as the value to the Image.memory creates the image in the App.

Once the steps are done, the application looks like below,

![Image.memory in Flutter](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Image.memory in Flutter](https://androidmonks.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-23-at-3.07.50-PM.png) **Image.memory in Flutter**### Understanding Image Widget’s Properties

The different Image constructors are understood, we will now look at what are the different properties that the [Image Widge](https://androidmonks.com/image-widget-flutter/)t holds.

##### fit

Fit property lets the developer decide how to inscribe the image into the space that is allocated. It takes in the value of BoxFit class and can be used with any of the Image types.

Sample code to insert the image with a fit property is given below,


```
import 'dart:typed\_data';
import 'dart:convert';

import 'package:flutter/material.dart';

void main()
{String images = "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";
Uint8List bytes = base64.decode(images);
  runApp(MaterialApp(

    title: "Androidmonks",
    home: Scaffold(
      appBar: AppBar(
        title: Text("AndroidMonks"),),
      body:Image.memory(
          bytes,
        fit: BoxFit.fitWidth,
      ),
    ),
  ));
}
```
The BoxFit can either take **fitwidth, fitheight, fill, contain and cover**. This will help in arranging the image as required in the space that is provided.

##### height

As the name suggests, it lets the developer decide the height of the Image that is going to be present. It takes in only double type as its value. Specifying the height will extend the Image or shrink accordingly in the vertical axis.

Sample code to specify the height is given,


```
Image.memory(
    bytes,
  fit: BoxFit.fitWidth,
  height: 200.0,
)
```
##### width

Similarly the width can also be controlled using this property. The width takes in the double type as its value only. Changing the width changes the image dimension in the horizontal axis only.


```
Image.memory(
    bytes,
  fit: BoxFit.fitWidth,
  height: 200.0,
  width: 180.0,
)
```
##### repeat

This attribute lets the free space not covered by the image to be covered. It either lets the image gets repeated until the empty space is covered or not.

To let the repeat property be used,


```
import 'dart:typed\_data';
import 'dart:convert';

import 'package:flutter/material.dart';

void main()
{String images = "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";
Uint8List bytes = base64.decode(images);
  runApp(MaterialApp(

    title: "Androidmonks",
    home: Scaffold(
      appBar: AppBar(
        title: Text("AndroidMonks"),),
      body:Container(height:900.0,child: Image.memory(
        bytes,
        repeat: ImageRepeat.repeat,
      ),),
    ),
  ));
}
```
This creates an image that repeats which looks like,

![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://androidmonks.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-23-at-5.54.41-PM.png)

##### matchTextDirection

Lets the Flutter engine know if the image should be painted in the direction of the Text or not. If it is from left to right then the image matches that direction.

Takes in only boolean value. To set that, you can use the attribute matchTextDirection,


```
Image.memory(
  bytes,
  matchTextDirection: true,
)
```
##### color

Paints the image with the color given. This is better used along with the colorBlendMode attribute given below. To see how to paint the image with the given color, check the color below,


```
Image.memory(
  bytes,
  color: Colors.red,
  )
```
This gives,

![Color property of Image](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Color property of Image](https://androidmonks.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-23-at-6.02.55-PM.png) **Color property of Image**##### colorBlendMode

Color blend mode lets the developer decide what to do with the Color property that is present over the image. There are a lot of blend modes like **multiply, overlay, colorBurn, clear and so on.**The blend mode acts as a way to mix both the image and color over that image.

As an example, I have used the overlay of the colorBlendMode with red color on the image,


```
Image.memory(
  bytes,
  color: Colors.red,
  colorBlendMode: BlendMode.,
  )
```
The final app looks like,

![Overlay colorblendmode ](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Overlay colorblendmode ](https://androidmonks.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-23-at-6.06.12-PM.png) **Overlay colorblendmode** 

Can you find the silent overlay of Red color over the image? It has occupied all the white shades and let the blank and yellow alone. This effect can be done by the colorBlendMode attribute.

### Image Widget in Flutter – Conclusion

Upon creating the Image using all these properties it is time to play around and create that one good looking UI with the I[mage Widget](https://androidmonks.com/image-widget-flutter/). Make sure to also check out the video tutorial for a better and clearer walkthrough of implementing the Image Widget in Flutter.

***“Learn and Be Curious”***

[Tweet](https://twitter.com/intent/tweet?text=Image+Widget+Flutter++Androidmonks&url=https%3A%2F%2Fandroidmonks.com%2Fimage-widget-flutter%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fimage-widget-flutter%2F)0 Shares Categories [Android](https://androidmonks.com/category/android/), [Flutter](https://androidmonks.com/category/flutter/) [Leave a comment](https://androidmonks.com/image-widget-flutter/#respond) Post navigation[Flutter Appbar Widget | Custom AppBar in 2 Minutes](https://androidmonks.com/flutter-appbar/)[Routing and Navigation in Flutter](https://androidmonks.com/routing-navigation-flutter/)### Leave a Comment [Cancel reply](/image-widget-flutter/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"1480","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "cc5bc2851c";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "1480";var swpClickTracking = false; 