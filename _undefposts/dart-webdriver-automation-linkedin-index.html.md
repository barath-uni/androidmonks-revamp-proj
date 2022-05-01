---
title: '# WebDriver Automation With Dart – Automating LinkedIn Post'
description: 'This article is a example for showing how to automate a 'LinkedIn Post a Story' flow using the Dart webdriver automation using the Selenium Toolkit'
date: '2020-03-15'
modified_date: '2020-03-15'
image: ''
---
# WebDriver Automation With Dart – Automating LinkedIn Post

 [March 15, 2020](https://androidmonks.com/dart-webdriver-automation-linkedin/ "2:53 pm") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 WebDriver Automation With Dart – Automating LinkedIn Post](#WebDriver_Automation_With_Dart_8211_Automating_LinkedIn_Post)
	+ [1.1 Motivation for LinkedIn Automation Using Dart](#Motivation_for_LinkedIn_Automation_Using_Dart)
	+ [1.2 Setting up the Project](#Setting_up_the_Project)
	+ [1.3 WebDriver Package in Dart](#WebDriver_Package_in_Dart)
	+ [1.4 Building the LinkedIn Automation](#Building_the_LinkedIn_Automation)
	+ [1.5 LinkedIn Automation – Things to Remember](#LinkedIn_Automation_8211_Things_to_Remember)
## WebDriver Automation With Dart – Automating LinkedIn Post

This article is a fun project that happened to lead me to create a very nice automation script using Dart. The WebDriver is an open-source package that is available for Dart. This article lists all the required steps to automate the LinkedIn ‘Post’ flow.

### Motivation for LinkedIn Automation Using Dart

Before we jump in to the little side project, i need to explain what got me started to do this automation! The main reason being i make a lot of videos and the videos require ‘Social Sharing’. It gets really tedious to perform this repetitive task, and that’s why i made this script that will run as a standalone program performing the task for me.

### Setting up the Project

Setting up the project is fairly simple, create a simple package(I have it named as dart-automation). Create a project with 2 files

* **main.dart – This is where the dart code is going to live**
* **pubspec.yaml – This is where the dependency files are going to be provided.**

Once the project setup is done, you have to include your first dependency(And the only dependency), which is the


```
webdriver: ^2.1.1
```
The **pubspec.yaml** looks like this,


```
name: dart\_automation
dependencies:
    webdriver: ^2.1.1
```
![Package structure](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Package structure](https://androidmonks.com/wp-content/uploads/2020/03/Screenshot-2020-03-15-at-8.20.05-PM.png) Package structure![Code Sample](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Code Sample](https://androidmonks.com/wp-content/uploads/2020/03/Screenshot-2020-03-15-at-8.19.50-PM.png) Code Sample### WebDriver Package in Dart

What’s the purpose of the [WebDriver package](https://github.com/google/webdriver.dart)? Firstly, the package is a community maintained package, that is written over the ‘[Selenium](https://www.selenium.dev/)‘ toolkit. It’s sole purpose is to provide handles for both ChromeDriver and GeckoDriver to perform Web Automation Testing.

These are important for our project here because, the idea is to use this and create a simple automated flow of the ChromeDriver (LinkedIn.com) in this example and perform the ‘Post’ flow.

### Building the LinkedIn Automation

Time to dive deep and understand what the entire Automation Flow is going to look like,

* Open a instance of the ChromeDriver and ‘get’ the ‘www.linkedin.com’ URL
* Once it opens, use the ‘Element’ Locators to find the ‘username’ and ‘password’ fields
* Enter the values and login to the LinkedIn Account
* Find the element locator for ‘share a post’ field and start entering the value you want to post
* Find and click the element locator for ‘POST’

The code snippet given below is capable enough of doing this entire flow! **Replace the username and password with a valid one to test it out on your local desktop**


```
import 'dart:convert';
import 'dart:io';
import 'package:webdriver/sync\_io.dart';

var chromeDriverProcess;

var driver;

Future startChromeDriverProcess() async {
  print('startChromeDriverProcess: starting ChromeDriverProcess');
  chromeDriverProcess = await Process.start(
      'chromedriver', ['--port=4444', '--url-base=wd/hub', '--verbose'],
          );

  await for (String browserOut in const LineSplitter()
      .bind(utf8.decoder.bind(chromeDriverProcess.stdout))) {
    if (browserOut.contains('Starting ChromeDriver')) {
      print('startChromeDriverProcess: ChromeDriverProcess succesfully started');
      print(browserOut);
      break;
    }
  }
}

Future \_launchChrome() async {
  print('BrowserHandler.\_launchChrome: initializing ChromeDriver');

  
    driver = await createDriver(spec: WebDriverSpec.JsonWire); //this the point where the test gets stuck\_
    print('BrowserHandler.\_launchChrome: ChromeDriver initialized');
    // await driver.get('https://www.google.com');
    print('BrowserHandler.\_launchChrome: loaded');
    return driver;
  
}
\_openYoutube(driver) async{
driver.get('https://www.facebook.com');
sleep(Duration(seconds: 2));
// click the signin button and enter credentials
WebElement signin = driver.findElement(const By.cssSelector('paper-button[aria-label="Sign in"]'));
print(signin);
signin.click();

WebElement username = driver.findElement(const By.cssSelector('input[type="email"]'));
username.sendKeys("baradwaj.varadharajan@gmail.com");
WebElement next = driver.findElement(const By.id("identifierNext"));
print(next);
next.click();
sleep(Duration(seconds: 2));

WebElement password = driver.findElement(const By.cssSelector('input[type="password"]'));
password.sendKeys("**********");
WebElement next\_button = driver.findElement(const By.id("passwordNext"));
print(next\_button);
next\_button.click();

}

\_postOnFacebook(driver) async {
  print("Waitinf for facebook to load");
  await driver.get('https://www.facebook.com/androidsmonk');
  sleep(Duration(seconds: 2));
  // Click the input button and enter username and password
  WebElement username = await driver.findElement(const By.cssSelector('input[type="email"'));
  print(username);
  username.sendKeys("barathholmes@yahoo.com");
  
  WebElement password = await driver.findElement(const By.cssSelector('input[type="password'));
  password.sendKeys("********");

  WebElement login = driver.findElement(const By.cssSelector('input[aria-label="Log In"]'));
  login.click();

  WebElement writeAPost = driver.findElement(const By.cssSelector('text-area[aria-label="Write a post..."]'));
  writeAPost.sendKeys("This is a automated post");

}

\_postOnLinkedIn() async{
  driver.get('https://www.linkedin.com/');
  sleep(Duration(seconds: 2));
  WebElement username = driver.findElement(const By.cssSelector('input[aria-label="Type your email or phone number"'));
  print(username);
  username.sendKeys("baradwaj.varadharajan@gmail.com");

  WebElement password = driver.findElement(const By.cssSelector('input[aria-label="Type your LinkedIn password"]'));
  password.sendKeys("Barath123");

 driver.findElement(const By.cssSelector('button[aria-label="i18n\_sign-in"]')).click();
 
// compose Message
driver.findElement(const By.cssSelector('li-icon[type="compose-icon"]')).click();
WebElement post = driver.findElement(const By.className('mentions-texteditor\_\_content'));
post.sendKeys("TThis is going to be another automated post that works fine in the Hacking dart Part 2 video!");

driver.findElement(const By.cssSelector('button[data-control-name="share.post"]')).click();
}
void main() async {
  await startChromeDriverProcess();
  await \_launchChrome();
  await \_postOnLinkedIn();
  // await \_postOnFacebook(driver);
}
```
### LinkedIn Automation – Things to Remember

* The entire Automation flow is based on the assumption that, you have ‘ChromeDriver’ installed and are using the ‘WebDriver’ package as suggested in the above section
* There are additional methods for ‘Youtube’ and ‘Facebook’. These are really sporadic and are not going to work unless you have the ‘automation-flag’ turned off. More about this here.

In case you are interested to learn more about the ‘Automation with Dart’ story, find my video on the same below!

[Tweet](https://twitter.com/intent/tweet?text=WebDriver+Automation+With+Dart+-+Automating+LinkedIn+Post&url=https%3A%2F%2Fandroidmonks.com%2Fdart-webdriver-automation-linkedin%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fdart-webdriver-automation-linkedin%2F)0 Shares Categories [Uncategorized](https://androidmonks.com/category/uncategorized/) [Leave a comment](https://androidmonks.com/dart-webdriver-automation-linkedin/#respond) Post navigation[React Native – Create Image Element in 2 Minutes](https://androidmonks.com/react-native-image-element/)[FloatLayout in Python Kivy App](https://androidmonks.com/floatlayout-in-python-kivy-app/)### Leave a Comment [Cancel reply](/dart-webdriver-automation-linkedin/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"2344","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "d0f8c9f8a6";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "2344";var swpClickTracking = false; 