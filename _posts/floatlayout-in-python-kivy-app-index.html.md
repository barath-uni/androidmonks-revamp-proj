---
title: '# FloatLayout in Python Kivy App'
description: 'FloatLayout in Kivy is a simple to use Layout Widget that allows any element placed inside it to Float. Position is controlled using coordinates.'
date: '2020-08-03'
modified_date: '2020-08-03'
image: '/assets/images/posts'
---
# FloatLayout in Python Kivy App

 [August 3, 2020](https://androidmonks.com/floatlayout-in-python-kivy-app/ "4:55 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")## FloatLayout in Python Kivy App

In Python Kivy, Creating FloatLayout is very easy. FloatLayout allows any element inside it to “FLOAT”! Meaning the Elements can be placed in any given location with just the use of ‘Coordinate’ System. You can also control the Elements Present inside the FloatLayout with respect to the ‘size\_hint’ and ‘pos\_hint’. Both these variables and its usages are explained as part of the example Application below.

### Creating a Simple FloatLayout in Python Kivy

The below Example is used to create a Layout which has the Parent inside it to be a Floating Structure. The Final Output is an easy to control Image that is placed at a **600,600** position. This is a Brute Coordinate meaning, the image is placed in such a way that the top-left of the image is placed at 600, 600 X, Y Coordinate.

### FloatLayout – Key Points to Know

* Elements inside the FloatLayouts can have overlapping coordinates. The Layout does not worry that there is already a widget present in the given coordinates. It places the widget on top of the other.
* FloatLayout elements ‘pos\_hint’ and ‘size\_hint’ are very handy and often used. They automatically position the widget based on the size of the screen. Automatically positioning the child Widget is done by the Kivy engine and the developer does not have to worry about the Screen sizes while working with FloatLayout


```
from kivy.app import App
from kivy.uix.button import *
from kivy.uix.gridlayout import GridLayout
from kivy.uix.image import AsyncImage
from kivy.core.window import Window
from kivy.uix.label import Label
from kivy.uix.floatlayout import FloatLayout


class MyLayout(GridLayout):

    def \_\_init\_\_(self, **kwargs):
        super().\_\_init\_\_(**kwargs)
        self.cols = 1

        self.add\_widget(AsyncImage(source="https://homepages.cae.wisc.edu/~ece533/images/airplane.png"))
        self.bottom\_layout = FloatLayout(size=(600, 600))
        self.ans\_1 = Button(text="Ans 1",
                   background\_color=(0.1, 0.5, 0.3, 1),
                   size\_hint=(0.2, 0.2),
                   pos\_hint={'x': 0.3, 'y': 0.5}
                   )
        self.ans\_1.bind(on\_press=self.ans\_correct\_callback)
        self.bottom\_layout.add\_widget(
            self.ans\_1
        )
        self.ans\_2 = Button(
            text="Ans 2",
            background\_color=(0.1, 0.5, 0.3, 1),
            size\_hint=(0.2, 0.2),
            pos\_hint={'x': 0.5, 'y': 0.5}

        )
        self.ans\_2.bind(on\_press=self.ans\_correct\_callback)
        self.bottom\_layout.add\_widget(self.ans\_2)
        self.add\_widget(self.bottom\_layout)

    def ans\_correct\_callback(self, instance):
        print(f"This button was called - {instance.text}")


class MyKivyApp(App):

    def build(self):
        Window.clearcolor = (1,1,1,1)
        return MyLayout()

    def on\_start(self):
        print("This method on start is fired!!!!!!!!")

    def on\_stop(self):
        print("This method is called after the app ends")


if \_\_name\_\_ == '\_\_main\_\_':
    MyKivyApp().run()

```
 

To know more about Float Layouts in Python Kivy, the Below Video explains the end to end usage in detailed fashion.

[Tweet](https://twitter.com/intent/tweet?text=FloatLayout+in+Python+Kivy+App&url=https%3A%2F%2Fandroidmonks.com%2Ffloatlayout-in-python-kivy-app%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Ffloatlayout-in-python-kivy-app%2F)0 Shares Categories [Uncategorized](https://androidmonks.com/category/uncategorized/) [Leave a comment](https://androidmonks.com/floatlayout-in-python-kivy-app/#respond) Post navigation[WebDriver Automation With Dart – Automating LinkedIn Post](https://androidmonks.com/dart-webdriver-automation-linkedin/)### Leave a Comment [Cancel reply](/floatlayout-in-python-kivy-app/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"2359","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "cc5bc2851c";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "2359";var swpClickTracking = false; 