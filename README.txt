# Overview

My name is Bryson Williams I have always loved computers and have been programming for a few years now.
I've already made other programs in various languages and have them 
posted to this github. As of now 9/17/22 I am aiming to become a Database admin or something else in that field.

I wrote a program in javascript to interface with the google firebase database. I took the various keys and Id's
given for the database and used the firebase imports to connect my webpage to the database giving it access to read, modify and delete it.


I like databases and am making one for another website I made but the data entry aspect of firebase was poor.
If you could set static fields for every new document you made in a collection then I couldn't figure out how.
With this program instead of retyping the name of each field and setting the data type you can just tab through
typing all the data much faster that if you were to use the built in firebase data entry.

https://youtu.be/jE6_LdSBU3M

# Cloud Database
Firebase is a google owned, non-relational cloud database.
It was designed to be easily programable so you can customize the program around it however you like.

{Describe the structure of the database that you created.}
The database consists of a single table or collection titled 'countries' with documents that get added to it.
The documents would share the name of the country they represent.
In each of the documents the data held is data about the country they represent.

# Development Environment

{Describe the tools that you used to develop the software}
I used my laptop and desktop to develop the code using Visual Studio code as my software
and used vsCode's built in live server to run and test the program.
The functionality of the code is the javascriptfile that is litening to the
basic html page for when buttons are clicked. A handful of libraries provided by google
for use with firebase were used to initialize the app get or delete documents etc.

# Useful Websites

* [the net ninja] https://www.youtube.com/watch?v=2yNyiW_41H8
* [the net ninja] https://www.youtube.com/watch?v=s1frrNxq4js&t=372s

# Future Work

* set up authorization requirements
* store the apikey and others securely with the webhost.
* Let the user determine the number of fields in the document being added