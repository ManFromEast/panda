HTML conventions:

HTML file name conventions:

1.People read the URLs and links for clues as to what the page is going to be. If your filename is clear, then you'll give your readers more confidence in your site.

2.Using words separated by hyphens can have some help in SEO because search engines read the URLs as well.

3.CamelCase, while popular with branding experts, can be very hard to read. Also, you run the risk of having a case sensitive file system not recognize that "filename.htm" and "fileName.htm" are the same file.
4.It's tempting to name files based on dates or other arbitrary methods, but editing the files later can be very difficult. If you were looking for a file about file names, which do you think would have the information, the one called "aa072700a.htm" or the one called "files-and-filenames.htm"?

5.Good file names for Web pages are easy to read and understand. They can be used by readers to understand your site and by yourself to remember what a page is about. Good file names are easy to remember and make sense within the entire hierarchy of the site.

6.Start the file name with a letter
6.1While this isn't absolutely required, some programming languages give numbers special notice, and so a file starting with a number might not be treated as a file.

8.Use all lowercase
8.1This is also not an absolute requirement, but it is a good plan for maintaining your website. While many personal computer operating systems are case insensitive, most Web server operating systems are case sensitive. This means that your Windows machine might see "Filename.htm" as the same as "filename.htm" - but your Web server would see that as two different files. This is a very common reason why images don't display on beginner websites.

9.Keep your filenames short
9.1While the total URL length is something like 2000 characters, it's a good idea to keep the whole thing as short as you can without sacrificing readability. I recommend creating filenames that are no more than four or five words in length - or around 30 to 50 characters.

HTML conventions:
1.Always declare the document type as the first line in your document:
sample:
<!DOCTYPE html> or <!doctype html>

2.Use Lower Case Element Names
HTML5 allows mixing uppercase and lowercase letters in element names.
We recommend using lowercase element names because:
Mixing uppercase and lowercase names is bad
Developers normally use lowercase names (as in XHTML)
Lowercase look cleaner
Lowercase are easier to write
good sample:
<section> 
  <p>This is a paragraph.</p>
</section>
bad sample:
<Section> 
  <p>This is a paragraph.</p>
</SECTION>

3.Close All HTML Elements
In HTML5, you don't have to close all elements (for example the <p> element).
We recommend closing all HTML elements.
good sample:
<section>
  <p>This is a paragraph.</p>
  <p>This is a paragraph.</p>
</section>
bad sample:
<section>
  <p>This is a paragraph.
  <p>This is a paragraph.
</section>

4.Close Empty HTML Elements
In HTML5, it is optional to close empty elements.
good sample:
<meta charset="utf-8" />
allowed
<meta charset="utf-8">
5.Use Lower Case Attribute Names
HTML5 allows mixing uppercase and lowercase letters in attribute names.
We recommend using lowercase attribute names because:
Mixing uppercase and lowercase names is bad
Developers normally use lowercase names (as in XHTML)
Lowercase look cleaner
Lowercase are easier to write
good sample:
<div class="menu">
bad sample:
<div CLASS="menu">

6.HTML5 allows attribute values without quotes.

We recommend quoting attribute values because:
Mixing uppercase and lowercase values is bad
Quoted values are easier to read
You MUST use quotes if the value contains spaces
good sample:
<table class="striped">
bad sample:
<table class=striped>

7.Image Attributes
Always add the "alt" attribute to images. This attribute is important when the image for some reason cannot be displayed. Also, always define image width and height. It reduces flickering because the browser can reserve space for the image before loading.
good sample:
<img src="html5.gif" alt="HTML5" style="width:128px;height:128px">
bad sample:
<img src="html5.gif">

8.Spaces and Equal Signs
HTML5 allows spaces around equal signs. But space-less is easier to read, and groups entities better together.
good sample:
<link rel="stylesheet" href="styles.css">
bad sample:
<link rel = "stylesheet" href = "styles.css">

9.Avoid Long Code Lines
When using an HTML editor, it is inconvenient to scroll right and left to read the HTML code.
Try to avoid code lines longer than 80 characters.

10.Blank Lines and Indentation
Do not add blank lines without a reason.
For readability, add blank lines to separate large or logical code blocks.
For readability, add two spaces of indentation. Do not use the tab key.
Do not use unnecessary blank lines and indentation. It is not necessary to indent every element:

11.We do not recommend omitting the <html> and <body> tags.
The <html> element is the document root. It is the recommended place for specifying the page language:
good sample:<!DOCTYPE html>
<html lang="en-US">
Declaring a language is important for accessibility applications (screen readers) and search engines.
Omitting <html> or <body> can crash DOM and XML software.
Omitting <body> can produce errors in older browsers (IE9).

12.In the HTML5 standard, the <head> tag can also be omitted.
By default, browsers will add all elements before <body>, to a default <head> element.
You can reduce the complexity of HTML, by omitting the <head> tag:

We do not recommend omitting the <head> tag.
Omitting tags is unfamiliar to web developers. It needs time to be established as a guideline.

Meta Data
The <title> element is required in HTML5. Make the title as meaningful as possible:
<title>HTML5 Syntax and Coding Style</title>
To ensure proper interpretation, and correct search engine indexing, both the language and the character encoding should be defined as early as possible in a document:
sample:
<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="UTF-8">
  <title>HTML5 Syntax and Coding Style</title>
</head>
13.
HTML Comments
Short comments should be written on one line, like this:
<!-- This is a comment -->
Comments that spans more than one line, should be written like this:
<!-- 
  This is a long comment example. This is a long comment example.
  This is a long comment example. This is a long comment example.
-->
Long comments are easier to observe if they are indented two spaces.

14.Style Sheets
Use simple syntax for linking to style sheets (the type attribute is not necessary):

<link rel="stylesheet" href="styles.css">
Short rules can be written compressed, on one line, like this:

p.intro {font-family: Verdana; font-size: 16em;}
Long rules should be written over multiple lines:

body {
  background-color: lightgrey;
  font-family: "Arial Black", Helvetica, sans-serif;
  font-size: 16em;
  color: black;
}
Place the opening bracket on the same line as the selector
Use one space before the opening bracket
Use two spaces of indentation
Use semicolon after each property-value pair, including the last
Only use quotes around values if the value contains spaces
Place the closing bracket on a new line, without leading spaces
Avoid lines over 80 characters

15.Accessing HTML Elements with JavaScript
A consequence of using "untidy" HTML styles, might result in JavaScript errors.
These two JavaScript statements will produce different results:
Example
var obj = getElementById("Demo")
var obj = getElementById("demo")
Try it Yourself »
Visit the JavaScript Style Guide.

Use Lower Case File Names
Some web servers (Apache, Unix) are case sensitive about file names: "london.jpg" cannot be accessed as "London.jpg".
Other web servers (Microsoft, IIS) are not case sensitive: "london.jpg" can be accessed as "London.jpg" or "london.jpg".
If you use a mix of upper and lower case, you have to be extremely consistent.
If you move from a case insensitive to a case sensitive server, even small errors will break your web!
To avoid these problems, always use lower case file names.

16.Technical Differences
When a URL does not specify a filename (like http://www.w3schools.com/css/), the server returns a default filename. Common default filenames are index.html, index.htm, default.html, and default.htm.
If yor server is configured only with "index.html" as default filename, your file must be named "index.html", not "index.htm."
However, servers can be configured with more than one default filename, and normally you can set up as many default filenames as needed.
Anyway, the full extension for HTML files is .html, and there's no reason it should not be used.

