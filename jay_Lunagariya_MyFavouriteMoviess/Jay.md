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
