![Homepage displayed on multiple devices](./assets/images/am-i-responsive.png)

# **Hacker News Homework Project?**

## **Introduction**

This is a homework project i was given. The project was to build a React application using the Hacker News API where users can come to the site and get the latest news. As i am still a beginner with React this is the none react version of the project.

## **Table of contents** 

### **1. User Experience (UX)**
  * 1.1 Target audience
  * 1.2 Visitor goals
  * 1.3 Business goals
  * 1.4 User stories
  * 1.5 Design choices
  * 1.6 Wire frames

### **2. Features**
  * 2.1 Navbar
  * 2.2 Action Buttons

### **3. Technologies/Languages Used**
  * 3.1 VSCode
  * 3.2 HTML5
  * 3.3 CSS
  * 3.4 JavaScript
  * 3.5 Bootstrap
  * 3.6 Google fonts 
  * 3.7 Balsamiq
  * 3.8 favicon.io

### **4. Testing**
  * 4.1 See [testing.md](testing.md) document 

### **5. Deployment**

  * 5.1 Deployment 
  * 5.2 Cloning 
  * 5.3 Cloning Desktop

### **6. Credits**
  * 6.1 Code

### **7. Contact**
  * 7.1 LinkedIn
  * 7.2 Skype
  * 7.3 My portfolio page

### **8. Disclaimer**

  * 8.1 Disclaimer on project 

<hr>

<details>
<summary><strong>1. User Experience (UX)</strong></summary>
<br/>

#### **1.1 Target Audience**

Anyone who wishes to use the site to read the latest news on the Hacker News API. 

#### **1.2 Visitor goals** 

I want to be able to come to the site and easily read the latest news.

#### **1.3 Business goals**

No business or monetary goals, this was a homework project i was given to complete. 

#### **1.4 User Stories**

As a visitor to the company website i expect/want/need
 

#### **1.5 Design choices** 

A very simple SPA (Single Page Application) powered by the Hacker News API. Design choices are as follows: 

#### **FONTS**

I decided i would use the Google fonts [Open Sans](https://fonts.google.com/specimen/Open+Sans?preview.text=Whose%20paying%20the%20bill&preview.text_type=custom). Open Sans is a humanist sans serif typeface designed by Steve Matteson. Open Sans was designed with an upright stress, open forms and a neutral, yet friendly appearance. It was optimized for print, web, and mobile interfaces, and has excellent legibility characteristics in its letterforms.

![Image of how the font will look](./assets/images/open-sans-font.png)

#### **ICONS**

Any icons that were used were taken from the Font Awesome website.  

#### **COLORS**

The color palette for the project can be found below.<br>

![Image of the color pallet used for the project](./assets/images/colour-scheme.png)

#### **1.6 Wire Frames** 

The wireframes for the project can be seen below. There is a wireframe for desktop, tablet and mobile.

#### **DESKTOP**
![Desktop Wireframe](./assets/images/homepage-desktop-unloaded.png)<br/>
![Desktop Wireframe](./assets/images/homepage-desktop-loaded.png)<br/>

#### **TABLET**
![Tablet Wireframe](./assets/images/homepage-tablet-unloaded.png)<br/>
![Tablet Wireframe](./assets/images/homepage-tablet-opened.png)<br/>

#### **MOBILE**
![Mobile Wireframe](./assets/images/homepage-mobile-unloaded.png)<br/>
![Mobile Wireframe](./assets/images/homepage-mobile-opened.png)<br/>

</details>

<hr>

<details>
<summary><strong>2. Features</strong></summary>
<br/>

#### **2.1 Navbar** 

The navbar is a simple Bootstrap navbar that is responsive and will change depending on the screen size. As this is an SPA there was no need to add extra pages as links in the Navbar.

#### **2.2 Action Buttons**

![Image of action buttons](./assets/images/action-buttons.png)

There are 3x action buttons for the user to interact with. 

1. Read Latest News 
When the user clicks on this button it will call the function `getNewPosts()` This will activate the api feed and generate all of the latest news stories for the user to scroll through and interact with

2. Read Top News
When the user clicks on this button it will call the function `getTopPosts()` This will activate the api feed and generate all of the top news stories for the user to scroll through and interact with

3. Reset All News
When the user clicks on this button it will call the function `clearNews()` This will reset the page and delete all of the news posts that were previously generated and showing. 

</details>

<hr>

<details>
<summary><strong>3. Technologies/Languages Used</strong></summary>
<br/>

3.1 [VSCode](https://code.visualstudio.com/) - Is the IDE i used for coding this project<br>
3.2 [HTML5](https://developer.mozilla.org/en-US/docs/Learn/HTML) - This is the markup language i used for this project.<br>
3.3 [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) - I used CSS to help alter and adjust the presentation of the website to create a pleasant user experience.<br>
3.4 [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - JavaScript was used to do the mathematics to give the user the full breakdown<br>
3.5 [Bootstrap](https://getbootstrap.com/) - Bootstrap 5 is the version i used for the development of this project.<br>
3.6 [Google fonts](https://fonts.google.com/) - I used the font Open Sans from Google Fonts for this project<br>
3.7 [Balsamiq](https://balsamiq.com/)- I used Balsamiq for the production of the wireframes<br>
3.8 [favicon.io](https://favicon.io/) - Favicon.io is the free favicon generator i used for this project
</details>

<hr>

<details>
<summary><strong>4. Testing</strong></summary>
<br>

* Testing information can be found in the [testing.md](testing.md) file
</details>
<hr>

<details>
<summary><strong>5. Deployment</strong></summary>
<br>

#### **5.1 Deployment**  

To deploy the site on Github i undertook the following steps:

1. Navigated to my profile page on Github
2. Selected this project from the repositories ([Link Here](https://github.com/smcgdub/hacker-news-homework-project-none-react))
3. Clicked on settings
4. Click on pages which is on the left which is in the code and automation section
5. Click where is says source and in the dropdown menu select master 
6. Click on the next dropdown menu to the right select /(root)
7. Click save

You will then receive a confirmation saying the page has been published and also be provided with the link where people can view your site. The link to view the live site can be found by clicking [Here](https://smcgdub.github.io/hacker-news-homework-project-none-react/)

#### **5.2 Cloning**

You can clone the projects repository to your local computer by following the steps below:

Cloning a repository using the command line

1. On github navigate to the project repository. ([Link Here](https://github.com/smcgdub/hacker-news-homework-project-none-react))
2. Click on the tab that says code 
3. From the menu select HTTPS
4. Click on the copy button to the right of the HTTPS url
5. Open the terminal in your IDE
6. Change the current working directory to the location where you want the cloned directory.
7. In terminal type `git clone` and then paste the URL you copied earlier 
8. Press Enter to create your local clone.

#### **5.3 Cloning Desktop**
You can also clone the project using Github Desktop. To do this you can do the following: 

1. On github navigate to the project repository. ([Link Here](https://github.com/smcgdub/hacker-news-homework-project-none-react))
2. Click on the tab that says code 
3. Click on Download ZIP
4. Unzip the repository after it downloads to your machine and then drag the unzipped files into your IDE.

</details>

<hr>

<details>
<summary><strong>6. Credits</strong></summary> 
<br>

#### **6.1 Code** 

* The flicker effect on page load code was compiled using the [Angry Tools](https://angrytools.com/css/animation/) CSS animation website 

</details>
<hr>

<details>
<summary><strong>7. Contact</strong></summary>
<br>

Feel free to contact me on any of the following channels:<br>

* 7.1 [LinkedIn](https://www.linkedin.com/in/stephenmcgovern01/)<br>
* 7.2 [Skype](https://join.skype.com/invite/ndruMu7qVuKZ)
* 7.3 [My portfolio page](https://stephens-portfolio.com/)
</details>

<hr>

<details>
<summary><strong>8. Disclaimer</strong></summary>
<br>

* 8.1 There is no monetization generated from this site. It is purely for educational purposes undertaken as part of a homework project.
</details>

<hr>