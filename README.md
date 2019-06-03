# GeekHub courses
## Course JavaScript
## Years 2018-2019
## Location: Cherkasy/Ukraine

### Tasks:
**Home Work 1** 

Study the array methods pop, push, concat, indexOf, join, forEach, filter, find, map, slice, splice, shift, unshift.Create a page and connect a script to it. In this script demonstrate all this methods. Results must be shown in console.

**Home Work 2** 

Create an object that looks like array. Implement methods: push, pop, join, filter, find, map, sort, toString and getter length.
      
Advanced task:
Implement a constructor that looks like a “new Array(....)”. You can pass any number of elements to it, and they will became an elements of newly created array.

**Home Work 3**  
a. Implement to all numbers method sum() which receives other number and returns the sum of this two numbers. Example x.sum(y) === x + y
        
b. Clone repository https://github.com/GrinOleksandr/geekhub_JS_example . In each task inscribe a body of function(do not touch declaration). All tests need to be passed.

**Home Work 3,4,5**

Mockup. Make a responsive page due to design. Design is in 200% scale.
https://www.dropbox.com/sh/1kutgxhxjzeb3fp/AAB0UPGk0wbgEHr0pPFfXJr1a?dl=0

**Home Work 4**

Given an array of numbers that represent the height of the rocks: [2,1,5,0,3,4,7,2,3,1,0]
(for example, this array is given, but there can be any, your algorithm should solve all cases)
Calculate the amount of water (number of blue cells) collected in the pits after the rain.
It is necessary to use as much as possible methods of an array, but not usual chains.
For example, in this example, the correct answer is: 10
https://docs.google.com/spreadsheets/d/1ew5KhvXAhaB-CxWpYDd_OBYz4yKnaW9k25aCGP0gDG4/edit?fbclid=IwAR0PLU1Kh2ia2UtbL3OgtOZWwq3zC7l6ACd-q2x8s9a7ergk63Kes3R5R6w#gid=0
 
**Home Work 5**
 
 Create application “todo list” with ability to add and to delete elements. In each element besides text also display the time of its creation. Add “reverse” button to implement ability to arrange list in reverse order. 
 
**Home Work 6**
 
 Create an object with properties: name, health, strength, strength, happiness. The object should be created through the constructor. In the prototype of the object there should be methods for interaction with the character. (Feed, Play, Walk, Sleep, Treat, <and more, think of something:)>)
 Every 3 seconds the character will have to decrease the scores (help methods described here https://learn.javascript.ru/settimeout-setinterval). Correspondingly, calling methods can increase these rates. For example: tamagochi play () - increases happiness by +5, and reduces the force by -10 units and the saturation by -5 units ... Think of your own rules for the character.
 Information about the status of the character is taken directly to the page, after each state update, you can display emoticons that will characterize the tango mood.
 In the case of a character's death, predict a sad message and stop other changes.
 
 Starred task
 Create an army of tamagochi))
 Possible interface:
 Create Tasmogochi Button
 For each animal, "feed the tamagochi", "play", "put in bed," etc.
 
 **Home Work 7**
 
 Improve your TodoList.
 Add the ability to edit, delete list items, and the ability to mark items as done.
 Save the changes to LocalStorage so that after updating the page everything is loaded in the same format as before the update (you will need setItem and getItem methods)
 
  **Home Work 8**
  
  Implement the fifth game
  
  You can use jQuery and its plugins for Drag & Drop. Try to play the game with the mouse and the keyboard (sticks).
  In the event of a victory, show the user a welcome message.
  
  If you get up to speed with the first task, try creating your own jQuery slider (based on the unnumbered list (selector ul), within each element - a picture and text. You can change the elements by timer, use css animations, jQuery animations))
  
 **Home Work 9**
 
 Implement your lazy image loading option:
 - The page contains a lot of (10-20) pictures that we do not download at first (usually instead of src images use data-src)
 On the page's scroll, when the image falls into the visible area of the browser window, it must boot and display (we use tracking of the position of the window, elements ...)
 
 
**Home Work 10**

a. Create a page with a field for entering the city name (variants - coordinates, addresses, etc.)
   When entered - send a request to https://openweathermap.org/api and display the current weather in the given location.
   (The service is free, but after registration it is necessary to wait a bit for activating the key).
b. Free API Catalog: https://market.mashape.com/explore?sort=developers. Select any two of them
   and implement interaction with them (sending-receiving and processing of data). One is implemented using the XMLHttpRequest object,
   another by the jQuery.ajax method.

**Home Work 11**

Rewrite Todolist using MVC. Must be: Drag & drop, storage in localstorage,
reverse button to sort list in reverse order.

**Home Work 12**

1. Make the "My GitHub Profile" page (additional task - place it on github pages);
with brief information about you (we get the data from the link using the fetch method - GitHub is a good API, for example, https://developer.github.com/v3/repos/branches/#list-branches - an example
  get a list of brushes).
2. Be sure to have the My GitHub Repositories section in it.
3. A click on the repository discloses additional information about the date of the last committee in the master)
Do not forget to inform the user during ajax queries that the request is ongoing (using a loader, for example.)

**Home Work 13**

Split your TodoList MVC into modules. Collect using webpack.

**Home Work 14**

1. Tasks to choose:
a) Write an infinite random number generator based on the iterators.
b) Write a function for searching for .. of an object with several levels of nesting.

2. Copy the code https://gist.github.com/kikill95/14e5bf101c1b77babc8b431c8e498d9d.
Instead of the line "// TODO implement" write the function body to make the code work without errors, and the chain  of "then" could be continued.
Only in one place insert the code, the other does not touch.

**Home Work 15**

Implement the application: "Calorie Calculator".
Minimal functional:
Page Adding dishes / products (name, caloric content)
Page View all products
Daily menu page: field for entering the maximum caloric content of the daily ration and adding to the menu / removing products from the list. If the total number of calories exceeds the limit, display the corresponding message.
Use MongoDB as a data store.(you must install MongoDB locally)

**Home Work 16**

Non-practical task

**Home Work 17**


Create a personal website with the following pages:
1. Hello / home - information about you
2. Resume - Your resume (it is still useful for you to find a job))
3. Skills - information about your skills and incredible super powers
Optional:
4. Contact me - the form after which you send an email with the text (and a copy of the email given in the form, for which you can apply the Mailgun service)
You can search for design examples yourself, or find something here for inspiration:
https://www.mockplus.com/blog/post/personal-website-design-examples
https://www.themuse.com/advice/the-35-best-personal-websites-weve-ever-seen

Technology stack: React + ReactRouter, Express, Heroku.

(my result preview: https://grinoleksandr.herokuapp.com/ ) 

**Home Work 18**

Screw ServiceWorkers to your portfolio on gitpages (caching, offline viewing). 

Code: "https://github.com/GrinOleksandr/GeekHub_JS/tree/master/HomeWork12(Fetch%2CMyGitHub)"
Preview: "https://grinoleksandr.github.io/GeekHub_JS/HomeWork12(Fetch,MyGitHub)"

### Grin Oleksandr 2019.