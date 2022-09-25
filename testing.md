# **Hacker News Homework Project None React Testing Information?**

![Homepage displayed on multiple devices](./assets/images/am-i-responsive.png)

<hr>

## **Table of contents** ##

### **1. Automated Testing** ###

* 1.1 HTML Code Validating 
* 1.2 CSS Code Validating
* 1.3 JavaScript Testing

### **2. Manual Testing** ###

* 2.1 Manual testing desktop
* 2.2 Manual testing tablet
* 2.3 Manual testing mobile

### **3. Testing Issues Found** ###

<hr>

### **1. Automated Testing** ###

**1.1 HTML Code Validating**

All of the HTML files were tested on the [W3C HTML Markup Validation website](https://validator.w3.org/)
The HTML test came back showing document checking completed, no errors or warnings to show

**1.2 CSS Code Validating**

The main CSS files were tested on the [W3C CSS  Validation website](https://jigsaw.w3.org/css-validator/) 
The CSS test came back showing no errors in the CSS code

**1.3 JavaScript Code Validating**

The main JavaScript file was tested on the [JShint website](https://jshint.com/)
The JSHint test came back showing no errors in the JavaScript code.

I also tested the site in the console and there were no error or warning messages flagged. 
<hr>

### **2. Manual Testing** ###

**2.1 Manual testing desktop**

All desktop testing was carried out on Chrome, FireFox, Safari, Brave, Opera & Edge browsers. To save repetition in the testing.md file when an feature is tested and listed as functioning correctly then readers of this file can know that testing was passed on all browsers. 

<hr>

**2.3 Manual testing tablet**

All tablet testing was carried out on Chrome, FireFox, Brave, Opera & Edge browsers.

<hr>

**2.3 Manual testing mobile**

All mobile testing was carried out on Chrome, FireFox, Brave, Opera & Edge browsers.

<hr>

### **3. Testing Issues Found** ###

1. Order of items loaded<br/>
  
  When the user clicks on the read latest news button or the read top news button the api will load all of the stories in that category as is intended. However you will notice if you switch between latest and top news stories you will see that the order changes and doesn't stay the same. 

  **CAUSE**

  I have narrowed this down to this section of code: 

  `document.getElementById('output').innerHTML = ``;`

  This line of code is the first line of code in both functions `function getTopPosts()` and `function getLatestPosts()`. This functionality of this line of code is to clear out the inner HTML of the `output` div where each news card is generated before rendering the new latest and top news stories.
    
  Without this line of code if the user presses the `Read Latest News` button and then clicks the `Read Top News` button then the news feed generated first (`Read Latest News`) will not clear out and the feed will stay the same. This will also happen in reverse order if the user clicks the `Read Top News` button first and then clicks the `Read Latest News` button.

  I have tested commenting out these lines of code and running a `console.log(getNewPosts)` & `console.log(getTopPosts)`to view what is generated in the console and when this is done the feed is generated in the same order every single time you call the function. So i have found the source of the issue. 

  **SOLUTION**

  I have narrowed the issue down to these 2 lines of code (line 3 & line 35 in the app.js file) but at time of submission of this project i haven't resolved the issue as of yet. 