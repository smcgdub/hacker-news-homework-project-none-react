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

* All of the HTML files were tested on the [W3C HTML Markup Validation website](https://validator.w3.org/)
* The HTML test came back showing document checking completed, no errors or warnings to show

![HTML Testing Results]()

**1.2 CSS Code Validating**

* The main CSS files were tested on the [W3C CSS  Validation website](https://jigsaw.w3.org/css-validator/) 
* The CSS test came back showing no errors in the CSS code

![CSS Testing Results]()

**1.3 JavaScript Code Validating**

* The main JavaScript file was tested on the [JShint website](https://jshint.com/)
* The JSHint test came back showing no errors in the JavaScript code.

<hr>

### **2. Manual Testing** ###

**2.1 Manual testing desktop**

All desktop testing was carried out on Chrome, FireFox, Safari, Brave, Opera & Edge browsers. To save repetition in the testing.md file when an feature is tested and listed as functioning correctly then readers of this file can know that testing was passed on all browsers. 

1. The page is loading as normal on all browsers. 
2. The input field is functioning as normal on all browsers 
3. The action buttons (Add names to draw & Reset the machine) are functioning as normal on all browsers 
4. The footer and the links within it are all working as normal on all browsers 

<hr>

**2.3 Manual testing tablet**

All tablet testing was carried out on Chrome, FireFox, Brave, Opera & Edge browsers.

<hr>

**2.3 Manual testing mobile**

All mobile testing was carried out on Chrome, FireFox, Brave, Opera & Edge browsers.

1. The one point i noted was when browsing on the brave Brave browser on a mobile device the input field and the add names to draw buttons should have a white background, but on this browser on a  mobile device they are showing with a background color of black. None of the functionality is effected and the site is working as intended, it is just an aesthetic bug that needs to be worked out

<hr>

### **3. Testing Issues Found** ###

1. Order of items loaded<br/>
  
  When the user clicks on the read latest news button or the read top news button the api will load all of the stories in that category as is intended. However you will notice if you switch between latest and top news stories you will see that the order changes and doesn't stay the same. 

  **CAUSE**

  I have narrowed this down to this section of code: 

      document.getElementById('output').innerHTML += `
        <div class="card mb-3">
          <h5 id="post-title" class="card-header data-title mb-1">${story.title}</h5>
          <div class="card-body">
            <p class="off-white-text mb-0">${story.type} by: ${story.by}</p>
            <p class="off-white-text mb-0">posted: ${humanDateFormat}</p>
            <p class="off-white-text mb-0">link to article:<a class="post-url" href="${story.url}" target="_blank"> Click here</a></p>
            </div>
        </div>
        `;

  The problem is that the api is loading the stories in order but some stories are being created and loaded ahead of other ones.

  **SOLUTION**

  I would assume that if there was a delay between the inner HTML elements being created that this would give the browser enough time to create and load a story before the next story in the api feed is created and loaded onto the page.