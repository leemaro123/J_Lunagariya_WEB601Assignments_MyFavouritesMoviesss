Assignment 1

Created a new repository for your assignments, with the name using the following format:
J_Lunagariya_WEB601Assignments_MyFavouriteMoviesss

Added a readme file to your repository. Added my name to the readme file of your repository,
along with a brief description of the theme of my application
Created new Angular application. The name of this new angular application should use the
following format:
J_Lunagariya_MyFavouriteMoviess

Set the version of your application to 0.0.1 in the package.json.
Added the ability to run the following from the terminal in your project:
npm run-script generatecomponent to generated a component
npm run-script generatepipe to generated a pipe
npm run-script generatedirective to generated a directive

Added a folder inside of your app folder called helper-files
Added a file to the helper-files folder called content-interface.ts

Inside of this new file, defined an interface called Content with the following parameters:
id as a number
title as a string
description as a string
creator as a string
imgURL as an optional string
type as an optional string
tags as an optional array of strings

Created another file inside of the helper-files folder called content-list.ts that
contains a class named ContentList, with the following attributes and methods:

A private array of type Content
A constructor that initially sets the array to be empty
A getter function that returns your Content array
An add function that adds 1 Content item to the end of the array
A function that returns the number of items in the array
A function that takes an input of an index of the array and returns a reader-friendly html
output of a Content item's properties at that index (title, description, creator, imgURL
and type). Note that the imgURL should be used to generate an image tag. - Bonus
refers to this function

Generated a new component called Content-card

Displayed the contents of your ContentList in your Content-Card component's html,
utilizing the function I defined in the ContentList class.

Added your Content-Card component to the default app-component, so that it can be
displayed on the home page of my application.

If an index outside of the array's range is entered, return an html error
message from the function instead.

***********
***********
Assignment-2
************
************

Deleted the ContentList class implementation from the Content-card code, and
deleted the content-list.ts helper file.

Created a new component called Content-list
In my Content-list component, defined an array of 6 or more Content items's.
Using an ngFor directive in my Content-list's html file, displayed 5 Content-card's
by passing in the values from my Content array

Content-card's should be display the Content passed into it as follows:

Each Content-card tag has a 1 pixel border applied to it
The title should be in a header tag
The image, description, creator, type and tags are visible inside of the box. Styles and
positioning of these elements are your choice, so long as they're in the card. (Hint:
remember that your tags is an array)
Clicking on the image displays the Content's id and title in the console
Added any necessary padding, and margins as you see fit

The first content card displayed should have a black solid border of 2 pixels around it.

In my app-root component, remove my Content-card from the html and instead add
my Content-list to the html, so that it can be displayed on the home page of your
application. If i have not already done so I can delete all the extra html in the app-root
that was automatically added by the default angular application.

Do not displayed, or attempt to displayed, the type, image or tags on the
Content-card if their value is not set

***********
***********
Assignment-3
************
************

The package.json was changed to 0.0.3 and additional content was added to the array to ensure 
it had at least 7 content items. 

The content items were updated to use two different type values, and some with no type set.

A pipe was created and given a relevant name that accepts a single optional string parameter. 
This pipe is used to filter an array of Content, returning only the Content that has its type
equal to the string passed to the pipe. 

If no value is passed in, then the pipe returns a filtered array of Content that has no type set.

Alter the html that displayed your on your Content-List component so that it displayed
separate lists by type using your pipe.

Style the listed Content-Card's differently by using different font or background colours for
the card tag itself, based on their type. 

There should be a clear difference between the colour styling from one card with a certain type versus one with
another type.

On your Content-List component, add an input field at the very top of the page that users
may enter the title of a Content item. 

Next to the input field, add a button that, when clicked, it displayed a message about 
whether a Content item exists with that title or not. 

The message was displayed under this search, with red text when the title doesn't exist, and
green text when it does exist.

***********
***********
Assignment-4
************
************

Changed the version in my package.json to 0.0.4.

In my Content-Card, if the imgURL was not set, displayed a default image on the card
instead (use an image relevant to your theme), using either *ngIf or *ngSwitch. In my
Content-List component, added or edited some elements to your array of Content so I
had at least 1 item with no imgUrl set, to make sure this new functionality works correctly.

Created an attribute directive called Hover-Affect. Applied this attribute directive to my
type in your Content-Card, and use it to add an underline to the type when a user
hovers over the type, and remove the underline when they hovered away from the type.

Used the same directive to bold the individual tags when a user hovers over one, and
removed the bold when they hover away.

Made sure it operates on each individual tag and not just on all the tags at the same time.


***********
***********
Assignment-5
************
************

Used my completed assignment 4 as a base line.

Changed the version in my package.json to 0.0.5.
Add a component to your application called CreateContent and add this component to
the top of your ContentList.

In this new component, add an input field for all the necessary fields to make a piece of
content, including the ID, followed by a button. When the button is clicked, send the new
content item up from the CreateContent component to the ContentList using the
promise pattern. 

When the new piece of content was successfully sent from the
CreateContent component using that pattern, the resolved promise should invoke a
success function that will add a message to the console saying the addition is successful,
along with the title of the content, and the input fields in the CreateContent's html file
should be cleared of their current values. When the ContentList receives the new content
item, display the new item on the ContentList using my preexisting *ngFor's that still
have the pipes operating on them (hint: The easiest way to test this will be to add content
with a type that is already being filtered for by a pipe. And don't forget to clone!)

If the content fails to be added (you don't need to cause it to fail, just handle the situation when
the promise fails), the resulting rejected promise should display an error message, in bolded
red text, under the submit button stating that the content failed to be added. When the content
is successfully submitted after a failed attempt, the error message should also be cleared.

Used this promise setup to also do error checking for required fields
(based on the required properties of your Content interface). If a required field is not
submitted, reject the promise, do not try to emit the content, and display the an error
message, in red, saying the user must try to create the content again with the required fields
filled in.

Assignment-6

