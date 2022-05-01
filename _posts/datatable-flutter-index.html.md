---
title: '# DataTable in Flutter | Creating Effective Tables'
description: 'DataTable in flutter is a quick way to represent Data in Rows and Columns. This article explains all the properties with examples.'
date: '2019-06-15'
modified_date: '2019-11-02'
image: '/assets/images/posts'
---
# DataTable in Flutter | Creating Effective Tables

 [November 2, 2019June 15, 2019](https://androidmonks.com/datatable-flutter/ "5:30 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")Contents

* [1 DataTable in Flutter | Creating Effective Tables](#DataTable_in_Flutter_Creating_Effective_Tables)
	+ [1.1 DataTable Basics](#DataTable_Basics)
	+ [1.2 DataTable – Properties](#DataTable_8211_Properties)
		- * [1.2.0.1 columns](#columns)
			* [1.2.0.2 rows](#rows)
			* [1.2.0.3 sortColumnIndex](#sortColumnIndex)
			* [1.2.0.4 sortAscending](#sortAscending)
* [2 Putting it all together](#Putting_it_all_together)
## DataTable in Flutter | Creating Effective Tables

[DataTable is a Widget in Flutter](https://androidmonks.com/datatable-flutter/) which is primarily focused at creating simple yet effective ways to create tables in Flutter. The important part of creating Tables in Flutter is that there is not a simple way that the flutter engine recreates them when the data changes. To quote the exact statement from the flutter doc,

“Displaying data in a table is expensive because to lay out the table all the data must be measured twice, once to negotiate the dimensions to use for each column, and once to actually lay out the table given the results of the negotiation”.

This is the primary reason we can jump to a [PaginatedDataTable](https://github.com/flutter/flutter/blob/master/examples/flutter_gallery/lib/demo/material/data_table_demo.dart). However, we will look at the simple yet effective [DataTable widget](https://androidmonks.com/datatable-flutter/) and create a good Table with Columns and rows in this article.

Before we jump into the article, do read about [Stateful Widgets in the tutorial post on how to create Stateful and Stateless Widgets.](https://androidmonks.com/first-flutter-app/)

### DataTable Basics

DataTable is created using the Widget **DataTable** itself. This uses the following constructor,  
  `DataTable({Key key, @required List<DataColumn> columns, int sortColumnIndex, bool sortAscending: true, ValueSetter<bool> onSelectAll, @required List<DataRow> rows })` The Constructor does use a lot of properties which we will see in detail below. Even before we jump into learning about DataTable in flutter, we will create a simple template as always below.


```
import 'package:flutter/material.dart';

void main() {runApp(DataTableWidget());}

class DataTableWidget extends StatefulWidget {

  @override
  \_DataTableWidgetState createState() {
    return \_DataTableWidgetState();}}

    class \_DataTableWidgetState extends State {
    @override
    Widget build(BuildContext context){
      return MaterialApp(title: 'Androidmonks',
        home: Scaffold(
          appBar: AppBar(title: Text("Sample Data Table"),),

        backgroundColor: Colors.redAccent,
        ),
    );
  }
}
```
We have used a simple [Scaffold](https://androidmonks.com/scaffold-flutter/) as the parent widget before using the other widgets. Make sure to always have a Parent widget which inherits the MediaQuery widget.

To know more about Scaffold, see [Scaffold widgets in Flutter application.](https://androidmonks.com/scaffold-flutter/)

### DataTable – Properties

##### columns

First property under [DataTable](https://androidmonks.com/datatable-flutter/) is the column attribute. The important part of the column attribute is that it creates the vertical slots and defines the Column header for which the data has to be arranged.

In order to create a good DataTable widget, the column attribute is required, along with that, the Widget **DataColumn**is to be used.

DataColumn is a widget that comes under the DataTable Widget family. It contains simple properties including label(Which is the only attribute that is important for us in this article). The Label lets us define the column header for categorization of the Data.

To create columns in DataTable see the example below,


```
import 'package:flutter/material.dart';

void main() {runApp(DataTableWidget());}

class DataTableWidget extends StatefulWidget {

  @override
  \_DataTableWidgetState createState() {
    return \_DataTableWidgetState();}}

    class \_DataTableWidgetState extends State {
    @override
    Widget build(BuildContext context){
      return MaterialApp(title: 'Androidmonks',
        home: Scaffold(
          appBar: AppBar(title: Text("Sample Data Table"),),

        backgroundColor: Colors.redAccent,
        body: Center(child: DataTable(
          columns: [
            DataColumn(
              label: Text("Column1")),
            DataColumn(label: Text("Column2"))],
          rows: [],

        ),
        ),
      ),
    );
  }
}
```
Remember to give an empty row in order to let the engine know that the DataTable is actually constructed. If the row is not specified the app will not go past the Build stage.

Once done, the application looks like below,

![DataColumn in DataTable widget](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![DataColumn in DataTable widget](https://androidmonks.com/wp-content/uploads/2019/06/Screen-Shot-2019-06-15-at-10.26.26-AM.png) **DataColumn in DataTable widget**##### rows

Similar to the columns attribute, the row lets you actually define the Data that has to go into the Table. Each column can have any number of rows, but all columns should be filled. Meaning the cells cannot be empty incase there is no data to be filled. You need to make sure an empty value is stored in that position.

To start with the rows attribute, we will require a widget named,


```
DataRow
```
The DataRow widget holds the individual rows data. Eg, row1 is represented using a DataRow widget and Row2 with another DataRow widget.

Under each DataRow widget, there is a **cell**attribute which requires a DataCell Widget as its value. Meaning, the DataCell can hold one value of Data per Widget. If there are 2 columns then each DataRow should hold 2 DataCells.

In case there is a missing DataCell in each row, the application will not build!

If this part is a bit confusing, take a look at the following code to understand better.


```
import 'package:flutter/material.dart';

void main() {runApp(DataTableWidget());}

class DataTableWidget extends StatefulWidget {

  @override
  \_DataTableWidgetState createState() {
    return \_DataTableWidgetState();}}

    class \_DataTableWidgetState extends State {
    @override
    Widget build(BuildContext context){
      return MaterialApp(title: 'Androidmonks',
        home: Scaffold(
          appBar: AppBar(title: Text("Sample Data Table"),),

        backgroundColor: Colors.redAccent,
        body: Center(child: DataTable(
          columns: [
            DataColumn(
              label: Text("Column1")),
            DataColumn(label: Text("Column2"))],
          rows: [
            DataRow(cells: [
            DataCell(Text("1")),
          DataCell(Text("ZZZZ2")),]),
          DataRow(cells: [DataCell(Text("2")),
          DataCell(Text("asc-cell2"))
            ,]),],

        ),
        ),
      ),
    );
  }
}
```
Since we have specified that there will be 2 Rows, we have given 2 DataRow as value for the rows attribute.

The application now looks like,

![DataTable with Row attribute](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![DataTable with Row attribute](https://androidmonks.com/wp-content/uploads/2019/06/Screen-Shot-2019-06-15-at-10.37.07-AM.png) **DataTable with Row attribute** 

##### **sortColumnIndex**

SortColumnIndex is a simple attribute that takes in an **Integer**value. It lets the developer define which is the primary key( Meaning unique column) in the DataTable. **This is effectively used for sorting of the Rows in the Table directly,**which we will look at in the next section.

To define the sortColumnIndex, see the below example,


```
import 'package:flutter/material.dart';

void main() {runApp(DataTableWidget());}

class DataTableWidget extends StatefulWidget {

  @override
  \_DataTableWidgetState createState() {
    return \_DataTableWidgetState();}}

    class \_DataTableWidgetState extends State {
    @override
    Widget build(BuildContext context){
      return MaterialApp(title: 'Androidmonks',
        home: Scaffold(
          appBar: AppBar(title: Text("Sample Data Table"),),

        backgroundColor: Colors.redAccent,
        body: Center(child: DataTable(
          columns: [
            DataColumn(
              label: Text("Column1")),
            DataColumn(label: Text("Column2"))],
          rows: [
            DataRow(cells: [
            DataCell(Text("1")),
          DataCell(Text("ZZZZ2")),]),
          DataRow(cells: [DataCell(Text("2")),
          DataCell(Text("asc-cell2"))
            ,]),],
          sortColumnIndex: 0,
        ),
        ),
      ),
    );
  }
}
```
This lets the engine know that the First Column is going to be the Primary key for the entire Table.

##### sortAscending

Sort Ascending attribute change the Table values and sort it in the ascending order of the Column Index that was given in the above section. Meaning, the entire Data Table is rearranged with the Column Index as the primary key.

This will help the user categorize the data he wants to see.

See the example code below,


```
import 'package:flutter/material.dart';

void main() {runApp(DataTableWidget());}

class DataTableWidget extends StatefulWidget {

  @override
  \_DataTableWidgetState createState() {
    return \_DataTableWidgetState();}}

    class \_DataTableWidgetState extends State {
    @override
    Widget build(BuildContext context){
      return MaterialApp(title: 'Androidmonks',
        home: Scaffold(
          appBar: AppBar(title: Text("Sample Data Table"),),

        backgroundColor: Colors.redAccent,
        body: Center(child: DataTable(
          columns: [
            DataColumn(
              label: Text("Column1")),
            DataColumn(label: Text("Column2"))],
          rows: [
            DataRow(cells: [
            DataCell(Text("1")),
          DataCell(Text("ZZZZ2")),]),
          DataRow(cells: [DataCell(Text("2")),
          DataCell(Text("asc-cell2"))
            ,]),],
          sortColumnIndex: 0,
          sortAscending: true,
        ),
        ),
      ),
    );
  }
}
```
The application becomes,

![Column Index is defined and represented with an arrow](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Column Index is defined and represented with an arrow](https://androidmonks.com/wp-content/uploads/2019/06/Screen-Shot-2019-06-15-at-10.45.16-AM.png) **Column Index is defined and represented with an arrow**The **arrow** coming up in the first column defines what is to be considered as the column Index. This way the data can be changed by the end user.

## Putting it all together

Once the entire application is stitched together, it becomes easy to create a [better-looking DataTable with effective control over what is displayed](https://androidmonks.com/datatable-flutter/).

**Note: Use data table for smaller sets of values only, since it can become slow to load and refresh if a larger volume of data is given.**

Drop in any comments in the section below.

***“Learn and Be Curious”***

[Tweet](https://twitter.com/intent/tweet?text=DataTable+in+Flutter++Creating+Effective+Tables&url=https%3A%2F%2Fandroidmonks.com%2Fdatatable-flutter%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Fdatatable-flutter%2F)0 Shares Categories [Flutter](https://androidmonks.com/category/flutter/), [Uncategorized](https://androidmonks.com/category/uncategorized/) [Leave a comment](https://androidmonks.com/datatable-flutter/#respond) Post navigation[Slider Widget in Flutter | Android Studio](https://androidmonks.com/slider-widget-flutter/)[Swipe to Delete Widget in Flutter – Dismissible Widget](https://androidmonks.com/dismissible-widget-flutter/)### Leave a Comment [Cancel reply](/datatable-flutter/#respond)

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
var socialWarfare = {"addons":[],"post\_id":"1746","variables":{"emphasizeIcons":false,"powered\_by\_toggle":false,"affiliate\_link":"https:\/\/warfareplugins.com"},"floatBeforeContent":""};
/* ]]> */         var swp\_nonce = "5e9d84bb42";var swpFloatBeforeContent = false; var swp\_ajax\_url = "https://androidmonks.com/wp-admin/admin-ajax.php"; var swp\_post\_id = "1746";var swpClickTracking = false; 