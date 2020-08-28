![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/slide1.jpg)

# Six Thinking Hats

[Link to the deployed site](https://dantehealy.github.io/Thinking_Hats/index.html)

The Six Thinking Hats framework is a lateral thinking technique used to help empower people to solve their problems and make effective decisions. 


## Contents
- [**1 UX**](#1-ux)

    - [**1.1 Site Owner Goals**](#1.1-site-owner-goals)

    - [**1.2 User Goals**](#1.2-user-goals)

    - [**1.3 Design Process**](#1.3-design-process)

- [**2 The Home page**](#2-the-home-page)

- [**3 The Guided Session page**](#3-the-guided-session-page)

- [**4 The Contact page**](#4-the-contact-page) 

- [**5 Features**](#5-features)

    - [**5.1 Existing Features**](#5.1-existing-features)

        - [**5.1.1 Home Page - Features**](#5.1.1-home-page)

        - [**5.1.2 Guided session page - Features**](#5.1.2-guided-session-page)

        - [**5.1.3 Contact page - Features**](#5.1.3-contact-page)

    - [**5.2 Features Not Implemented**](#5.2-features-not-implemented)

- [**6 Technologies Used**](#6-technologies-used)

    - [**6.1 Core Technologies**](#6.1-core-technologies)

    - [**6.2 Supplemental technologies**](#6.2-supplemental-technologies)

- [**7 Testing**](#7-testing)

    - [**7.1 Testing methods and systems**](#7.1-testing-methods-and-systems)

        - [**7.1.1 Responsive image checker**](#7.1.1-responsive-image-checker)

        - [**7.1.2 HTML validator**](#7.1.2-html-validator)

        - [**7.1.3 CSS validator**](#7.1.3-css-validator)

        - [**7.1.4 JSHint**](#7.1.4-jshint)

        - [**7.1.5 Google Lighthouse**](#7.1.5-google-lighthouse)

        - [**7.1.6 Manual testing**](#manual-testing)

        - [**7.1.7 Defects identified during testing**](#defects-identified-during-testing)

- [**8 Deployment**](#deployment)

- [**9 Credits**](#credits)

    - [**9.1 Acknowledgements**](#acknowledgements)

- [**10 Content**](#content)

    - [**10.1 Media**](#media)

    - [**10.2 References used**](#references-used)

## 1 UX
There are numerous people who are struggling with uncertainty due to new challenges. Brought about in part by the current Covid-impacted environment and causing distress from lack of clarity. 
This framework has proven to be effective in all areas of life because it guides people to think holistically about their problems from multiple different angles when attempting to solve their problems. 
Most people tend to have one dominant way of thinking, but the Six Thinking Hats method encourages people to exercise multiple views when looking at a problem. 
Each hat is a metaphor for a different perspective which will support the to focus on a single thing at a time before bringing everything together. 
All the videos which guide the user are as brief whilst being comprehensive as possible and are between 1-3 minutes in duration. 

### 1.1 Site owner goals
The purpose of this project was to provide an interactive online training experience which guides the user to complete the process in the correct order. 
The intention of the videos is to provide the user with clear instructions guiding them through the process whilst they record their thoughts. 

### 1.2 User Goals
#### The user story envisaged is as follows: 
As a person struggling with uncertainty, I want to learn how to think effectively and apply this to solve any difficult problems I encounter 
- I want to enhance my quality of life by finding clarity through creating comprehensive solutions to enable decisions which I can confidently take action on 
- I want to be guided through an effective process, be able to record my ideas 
- I want to be able to access a quick start guide in order to understand the process quickly 
- I want to get a report at the end that gives me a record of my thoughts and conclusions at the end of the session

### 1.3 Design Process

#### Font
When looking at fonts I decided on Lato sans-serif. 
It is considered to be a transparent colour, but also emits warmth and friendliness whilst also providing structure and seriousness which I wanted to convey with this website. 

#### Colour scheme 
I selected purple in my colour scheme that was separate from the six hats which could convey royalty, nobility, luxury, power and ambition. 
It is also associated spirituality, the sacred, higher self, passion, third eye, fulfillment, and vitality. Purple helps align oneself with the whole of the universe. 
By contrast grey is a cool and neutral colour providing balancing contrast to purple. 
White is also used representing clarity and new beginnings. 

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/wireframes/color-scheme.jpg)


## 2 The Home page
The Landing Page provides a brief overview video at the top with an accordion at the bottom containing a visual cheat sheet and transcript.  
In between the video and the accordion there is a call to action button that leads you to the guided session page. 
At the bottom of all the pages there is a footer with some social media links plus a disclaimer text stating this site is educational only. 

### Wireframe
The Home page: 

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/wireframes/wireframe1.jpg)

## 3 The Guided Session page
This page opens with another video about defining the specific problem with a text box to enter your problem. 
The logic in the problem textarea requires a string between 20 to 100 characters in length.
Once the user submits their problem six flip cards appear representing the six hats leading to a modal that guides the user though the process for each hat. 
Within each modal there is an instruction video and a texarea to enable the user to input their notes (the logic assumes between 20 - 400 characters of input).
Once each hat is completed a tick will appear on the modal next to the close button at the bottom of the modal and each flip card will have a tick when completed. 
Throughout this process there is a reset button which allows the user to reload the page and clear everything to start again. 
Once all six hats are completed a generate report button will appear that generates a user friendly report. 
Once the report is generated a print button appears which allows the user to print the report from their browser. 
As the inputs are not saved there are validation and warning popup messages asking for confirmation before navigating out of the session. 

### Wireframes
The Guided Session page: 

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/wireframes/wireframe2.jpg)

The pop up modal with instruction video and input textarea for each hat: 

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/wireframes/wireframe3.jpg)

The final report and the end of the guided session: 

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/wireframes/wireframe4.jpg)

## 4 The Contact page
There is a short bio of the creator of the Six Thinking Hats (Edward De Bono) plus an embedded video in which he explains the process in his own words.
Below the video is an accordion with three sections: 
- Speaker bookings which takes you to a page where you can book Edward De Bono for events and testimonials for Edward De Bono
- General Inquiries email form which enables the user to contact me for information about the website or other non-booking related inquiries 
- Useful links: Links to Edward De Bono's organisations and related Six Hats groups. 

### Wireframe
The Contact page: 

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/wireframes/wireframe5.jpg)

[Back to table of contents](#contents)

## 5 Features
All features were listed, organised and tracked on [Trello](https://trello.com/b/RhaoyvZJ/milestone-project-2)

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/wireframes/trello.jpg)

### 5.1 Existing Features
The following are the features implemented by page: 

#### 5.1.1 Home Page

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/test/index-html.jpg)

1.	Navbar - Allows the User fast and convenient navigation between the pages: 
    a.	Responsive toggler with links to each page
    b.	A logo comprising of some text and a white hat, when in mobile mode the icon moves with the menu (this is a deliberate design feature)

2.	PowerPoint instruction video allows the user to get an immediate overview of the purpose of the Six Thinking Hats framework: 
    a.	Overview of the Six Thinking Hats framework

3.	Call to action encourages the users to start a problem solving exercise: 
    a.	Button to guided session page     

4.	Accordion which tucks away further information content neatly and icons indicating the drop down functionlity. Includes: 
    a.	A fast start cheat sheet as an infographic with a button to download the pdf 
    b.	A transcript of the overview video 

5.	Footer
    a.	Social media icon with links 
    b.	Disclaimer text 

[Back to table of contents](#contents)

#### 5.1.2 Guided session page

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/test/hats-html-1.jpg)

1.  There is a page load feature that guides the user to wait whilst certain elements are being hidden in the background using JavaScript to make the interactive experience more intuitive.
    To make sure that the user does't perform the process out of sequence the Question video and input section is the only elements presented initially.
    Then as the user goes through the process other elements are unhidden with the previous elements being hidden to focus the user on the process.     

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/test/hats-html-load.jpg)

2.	Navbar same as the home page, but with alerts

a.	Responsive toggler with links to each page, but the navigation away from this page comes up with an alert message warning that the information already entered will be lost and does the user still wish to proceed? 

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/test/hats-html-nav-alert.jpg)

b.	A logo comprising of some text and a white hat, when in mobile mode the icon moves with the menu (this is a deliberate design feature)

3.	Question section

a.	Starts with a PowerPoint video that explains the importance of correctly framing the question before applying the six thinking hats

b.	A text area with a submit button that uses JavaScript to validate that the input has more than 20 characters 

c.	A submit button that then replace the textarea box with the entered question into fixed text and diplays the six thinking hat flip cards

4.	Six Thinking Hat flip cards 

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/test/hats-html-2a.jpg)

a.	On hover the flip cards reveal a button that opens up a modal which takes the user through a guided explanation of the purpose 
    and perspective of the hat and then allows the user to enter their thoughts into the box 

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/test/hats-html-2b.jpg)

b.	The textarea box uses JavaScript to validate that the answers aren’t too short or too long (character limits are set between 20 – 300) 

c.	There are buttons for closing the modal and submitting the users’ answers for each hat with some more JavaScript logic that pauses the video when the modal 
    is closed to avoid multiple videos being played at the same time. 

d.	There are two ticks once an answer is submitted – one within the modal and one outside the flip card to alert the user that an answer has been recognized 

e.	Once all six cards are completed, a generate report button appears that replaces the six hat flip cards with a report that consolidates the inputs 
    - The report uses JavaScript to recognise any line breaks and spaces as entered by the user 

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/test/hats-html-2c.jpg)

f.	A print button appears after the report is generated. 

g.	A reset button is available with an alert that warns the user they will lose any current work and requests confirmation that they want to proceed 

h.	When the report is printed there is some CSS that hides the buttons at the bottom and the footer so only the report is printed. 

[Example post-session report](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/test/example-report.pdf)

5.	Footer is the same on all pages

a.	Social media icons with links 

b.	Disclaimer text 

[Back to table of contents](#contents)

#### 5.1.3 Contact page

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/test/contact-html-1.jpg)

1.	Navbar 

a.	Responsive toggler with links to each page

b.	A logo comprising of some text and a white hat, when in mobile mode the icon moves with the menu (this is a deliberate design feature)

2.	Short Bio text for the creator of Six Thinking Hats

a.	Background and credentials 

3.	Video of the creator discussing the Six Thinking Hats

a.	The video is wrapped in a responsive container 

4.	Another accordion to tuck neatly the grouped elements for convenience and allow the user to focus on one thing at a time 

a.	A speaker section with a button that takes the user to the official speaker booking page for Edward De Bono with testimonials 

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/test/contact-html-2a.jpg)

b.	An email form that validates the inputs and returns a confirmation alert message – this uses the EmailJS API to send an email to my designated email address with the heading listed so that I can confirm the source (Six Thinking Hats General Inquiries) 

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/test/contact-html-2b.jpg)

c.	Useful links section 

5.	Footer

a.	Social media icons with links 

b.	Disclaimer text 

In addition, I leveraged Bootstrap to ensure that all elements are responsive across multiple devices. 

There is also a custom 404 error message in case any broken links emerge. 

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/test/test-404-html-screen.jpg)

There is also a favicon in all the tabs. 

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/images/favicon.png)

[Back to table of contents](#contents)

#### 5.2 Features Not Implemented
Any obvious spacing, design or layout issues were tracked and fixed immediately. 
Excessively complex requirements not implemented were de-scoped only after alternative solution was found and successfully deployed.

Note: 
Cancelled features are noted on the Trello project board which were part of my initial brainstorming and I judged to be either:

1. Impractical to incorporate into the project due to limited connection with the core purpose to educated the user in Six Thinking Hats or 
    - Experimented with having the background change color relevant to the color hat card on card flip hover in hats.html. I managed to achieve this, but I found it was too distracting so I removed it 
    - A Tableau data dashboard didn't make sense as I didn't really have a backend     
    - Map API - would be too busy and just putting a map for the sake of it 

2. Not worth the effort versus the perceived benefit. 
    - Print to pdf API: explored a few alternatives, but there was a cost after the free cap limit so I avoided this solution 
    - Heroku deployment: not aiming for full deployment for this project yet until I build personal website to host this as part of my portfolio
    - JavaScript local storage: surplus to requirements and don't want to risk collecting personal data on people 
    - Subtitles for videos: Tried to do this, but the free tool required online hosting of my mp4's and the effort was very cumbersome, if this tool proves popular I could look into getting subtitles produced

[Back to table of contents](#contents)

## 6 Technologies Used

### 6.1 Core Technologies
The project uses: 
- [HTML5 for structure](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [CSS for styling](https://www.w3.org/Style/CSS/Overview.en.html)
- [JavaScript for interactive front end functionality](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Bootstrap for responsive images](https://getbootstrap.com/)
- [JQuery to simplify DOM manipulation](https://jquery.com/)
- [EmailJS API was used for sending emails via the contact form](https://www.emailjs.com/)
- [GitHub for hosting](https://github.com/)
- [Git for version control](https://git-scm.com/)
- [Gitpod for the IDE](https://community.gitpod.io/)

### 6.2 Supplemental tools
- [Balsamiq for my wireframes](https://balsamiq.com/)
- [Fontawesome for the icons](https://fontawesome.com/)
- [Google fonts for the text styles](https://fonts.google.com/)
- [Favicon.io for my favicon image](https://favicon.io/)

[Back to table of contents](#contents)

## 7 Testing
The majority of the testing was manual combined with the appropriate online validation tools outlined below to ensure that my code met the required standards. 

### 7.1 Testing methods and systems

#### 7.1.1 Responsive design checker
[am I responsive](http://ami.responsivedesign.is/)

All passed: 

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/test/test-img-responsive.jpg)

[Back to table of contents](#contents)

#### 7.1.2 HTML validator

##### 1. index.html
All passed: 

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/test/test-index-html-validator.jpg)

##### 2. hats.html
All passed: 

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/test/test-hats-html-validator.jpg)

##### 3. contact.html
All passed: 

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/test/test-contact-html-validator.jpg)

[Back to table of contents](#contents)

#### 7.1.3 CSS validator
##### style.css
All passed: 

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/test/test-css-validator.jpg)

[Back to table of contents](#contents)

#### 7.1.4 JSHint

##### main.js
All passed. There were some warnings based on use of Let and JQuery ($) and one unused variable which was being called when loading or reloading hats.html i.e. is actually being used, so I was okay with this:  

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/test/test-main-js1-jshint.jpg)

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/test/test-main-js2-jshint.jpg)

##### email.js
Confirmed the javascript code was acceptable for jshint

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/test/test-email-js-jshint.jpg)

[Back to table of contents](#contents)

#### 7.1.5 Google Lighthouse
All passed. A useful tool for checking the webpage's performance and making recommendations to improve. 

##### index.html
![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/test/test-lighthouse-index.jpg)

##### hats.html
![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/test/test-lighthouse-hats.jpg)

##### contact.html
![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/test/test-lighthouse-contact.jpg)

The overall performance is acceptable.  

[Back to table of contents](#contents)

#### 7.1.6 Manual testing
All pased or issues identified were fixed/resolved prior to launch. 

1. Significant manual testing performed by myself across multiple devices (Laptop, iPad and iPhone 7) - to check that the layouts were responsive on all size devices 
[See attached pdf](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/test/manual-testing-checklist.pdf) 

2. Sent the webpage to my selected friends (work colleagues and LinkedIn contacts) and family (wife and brother) to test on their devices and provide feedback
3. Posted my link via workflow on the Peer-Review SLACK group with the Code Institute for feedback (twice first at about 80% complete then a final review at 95% complete)
4. Had my content and design reviewed by certain select people amongst my LinkedIn contacts for any changes needed
5. Tested all the links and features as I was coding to ensure that they worked as I was coding and reperformed the checks multiple times 
6. Played the videos in the modals, texted the textareas multiple times to identify and resolve any problems 
7. Confirmed that there were no console log errors in my JavaScript and JQuery code. 
8. Tested the print report on various devices 
[See example post-session report](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/test/example-report.pdf)

9. Did multiple end to end walkthroughs of the guided session 
10. Testing the email form in the "Contact" page
- Try to submit the empty form and verify that an error message about the required fields appears
- Try to submit the form with an invalid email address and verify that a relevant error message appears
- Try to submit the form with all inputs valid and verify that a success message appears.
- Ensure that email alerts user once message is sent. 

[Link to pdf confirming email contact form works](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/test/emailjs-test.pdf) 

Confirm email alert works

![Confirm email alert works](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/test/test-email-alert.jpg) 

11. Create broken links to confirm custom 404 error message works

![Create broken link](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/test/test-404-html.jpg) 

12. The website was personally reviewed on multiple devices for functionality (laptop, tablet and mobile) as a final check before submission. 

13. Submit my code for peer review (a few times). On the final review I requested detailed feedback. 



[Back to table of contents](#contents)

#### 7.1.7 Defects identified during testing
The following were the errors identified during the multiple testing sessions: 
- Multiple spacing and layout issues - done
- Hat modal doesn't disappear on submit - I was advised by mentor that this is preferred as user might want to see the text acceptance. 
    I have a tick next to the close button at the bottom to alert the user their input is accepted - resolved
- Reorder the hats to be consistent with the expected order as per the source material - done
- Add more punchy text explaining the purpose of the website on the landing page to entice the user to want to click on the session button - done
- Needs a good overview document - - inserted a cheat sheet on the landing page which is also downloadable in pdf - done
- A footer issue was identified in Peer review which was resolved - done
- Console log error in my logic when making the generate report button (applied simple boolean logic to avoid overcomplicating the built-in check) - fixed
- Modal videos could be played at once if you play and exit because there was no pause - inserted an additional function to resolve this - fixed
- Alejandra noted that the flashing hand icon on the landing page was too powerful and needed to be softened or completely removed - done, removed 
- Flip cards would benefit from some shading effects - done
- EmailJS confirmation alert did not initially work and the code needed to be resolved through a Gitpod refresh - fixed
- Add a favicon - done. 
- If the report spans more than a single page the page break may break up a particular hat section. This defect is now fixed (see below):
[Example post-session report avoiding page breaks inside each hat section](https://github.com/DanteHealy/Thinking_Hats/blob/master/reference/test/example-report-fix-page-breaks.pdf)
- Late bug where the first question video on the guided session still plays if not completed before the problem is submitted. 

[Back to table of contents](#contents)

## 8 Deployment
[Link to the deployed site](https://dantehealy.github.io/Thinking_Hats/index.html)
I used GitHub pages to deploy this website. The steps required to do this are as follows: 

1. Established my own Github account by registering on https://github.com/ 
2. I selected this repository "DanteHealy / Thinking_Hats"
3. I click on the 'settings' tab in the top right hand corner of the repository
4. Scroll down to the GitHub Pages section
5. In the GitHub pages section I go to source and select Master branch.
6. This created a URL and advised me that my site is now published. 

Until I have developed my own personal website where I can link to my portfolio I will continue to host this page on GitHub.  

[Back to table of contents](#contents)

## 9 Credits
### 9.1 Acknowledgements
The quality of this website is testimony to the help and support from my mentor and code institute colleagues. 
Though there are many of people who contributed to the project I would like to mention: 
- Special thanks to gbenga_mentor, JoWings_alumna, [Readri205](https://github.com/Readri205) for their particular focused attention and superb guidance when helping me to develop my website.  
- [Neringa](https://github.com/neringabickmore), [Michaelstanden](https://github.com/Michaelstanden), michael_ci, [SamL](https://github.com/samlaubscher), Ed B and Sean MC for their technical inputs and feedback on peer review and 
- My LinkedIn friend and professional tester Alejandra Huamán Ordóñez 
- Edward De Bono and Jim Kwik for the source material and inspiration 
- Finally many thanks to my family (wife, mum and siblings) and friends for testing my web site and providing their critical feedback as new general users. 

[Back to table of contents](#contents)

## 10 Content
### 10.1 Media
The photos used in this site were obtained from:
- [MS PowerPoint - for my homemade videos, cheat sheet and hat cards](https://www.microsoft.com/en-gb/microsoft-365/p/powerpoint/cfq7ttc0k7c6?=&ef_id=CjwKCAjwkJj6BRA-EiwA0ZVPVhHn9z5zJe90QZFBtWDrSo-CmHz2O9J4mF15aED_iJ_TmCxDoKM3WxoCtHEQAvD_BwE%3aG%3as&OCID=AID2100139_SEM_CjwKCAjwkJj6BRA-EiwA0ZVPVhHn9z5zJe90QZFBtWDrSo-CmHz2O9J4mF15aED_iJ_TmCxDoKM3WxoCtHEQAvD_BwE%3aG%3as&lnkd=Google_O365SMB_App&gclid=CjwKCAjwkJj6BRA-EiwA0ZVPVhHn9z5zJe90QZFBtWDrSo-CmHz2O9J4mF15aED_iJ_TmCxDoKM3WxoCtHEQAvD_BwE&activetab=pivot%3aoverviewtab)
- [unsplash.com for my royalty free images](https://unsplash.com/)
- [youtube.com for the embedded video of Edward De Bono explaining his perspective on the Six Thinking Hats ](https://www.youtube.com/)

### 10.2 References used
- [My initial inspiration for this project](https://www.amazon.co.uk/Six-Thinking-Hats-Edward-Bono) 
    [further reference](https://www.amazon.co.uk/Limitless-Techniques-Improve-Performance-Productivity/)
- [Use of Bootstrap generally for responsive styling and layouts](https://getbootstrap.com/docs/4.5/getting-started/introduction/)
- [Styling the Text Box](https://stackoverflow.com/questions/2125509/how-do-i-set-the-size-of-an-html-text-box)
- [Use of a flip card to introduce each of the six thinking hats](https://www.w3schools.com/howto/howto_css_flip_card.asp)
- [Use of Bootstrap modal forms](https://getbootstrap.com/docs/4.5/components/modal/)
- [Hiding certain HTML elements upon loading the exercise page.](https://stackoverflow.com/questions/3961422/conditional-display-of-html-element-forms)
- [Hiding and showing HTML elements upon a JavaScript event](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show)
- [Background color change on hover of hat cards](https://www.youtube.com/watch?v=10tXgw-0myA)
- [Color schemes](https://hookagency.com/website-color-schemes/) 
    [Additional color references](https://www.colorcombos.com/color-schemes/137/ColorCombo137.html)  
- [Check if you need to exit the Guided Exercise page](https://stackoverflow.com/questions/10462839/how-to-display-a-confirmation-dialog-when-clicking-an-a-link)  
- [Check to confirm before doing a full reset on the exercise page](https://stackoverflow.com/questions/6457750/form-confirm-before-submit)  
- [Include accordion as per milestone 1 feedback for any overly verbose sections](https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-accordion.php)
- [Favicon generator](https://favicon.io/)
- [How to add favicon video](https://www.youtube.com/watch?v=kEf1xSwX5D8)  
- [References to Edward De Bono's services and Testimonials](https://speaking.com/speakers/edward-de-bono/)  
- [More background](https://www.debono.com/)
- [Add a print report button and avoid refreshing the page by setting type="button"](https://www.w3schools.com/jsref/met_win_print.asp) 
    [More guidance](https://stackoverflow.com/questions/1878264/how-do-i-make-an-html-button-not-reload-the-page)
- [Specify the print area to be displayed on the page](https://stackoverflow.com/questions/20364212/limit-print-area-to-a-div)  
- [Content ideas](https://debonoconsulting.com/training-courses/six-thinking-hats/six-thinking-hats-as-applied-in-six-sigma/)
- [Bootstrap popup email form!](http://reusableforms.com/d/p/bootstrap-popup-email-form) 
- Use of the Code Institute Resume Course for my email form - Module "Sending Emails using EmailJS" 
- [Dismiss modal on successful submit (for a more user friendly mobile experience) after peer review.](https://stackoverflow.com/questions/33477930/close-bootstrap-modal-on-form-submit) 
- [Transition animation load for the hats.html guided session page](https://www.youtube.com/watch?v=gttmqvZ4kYc)
- [Pause MP4 video on close to prevent multiple videos playing at the same time](https://www.geeksforgeeks.org/how-to-play-pause-video-using-jquery/#:~:text=The%20pause()%20method%20in,element%20to%20pause%20the%20video)  
- [Video fluid width in css](https://css-tricks.com/fluid-width-video/)
- [Centre text in flip card back vertically](https://getbootstrap.com/docs/4.4/utilities/text/)  
- [Center flip card horizontally](https://www.w3.org/Style/Examples/007/center.en.html)
- [Responsive image without Bootstrap for 404.html](https://www.w3schools.com/howto/howto_css_image_responsive.asp) 
- [Thanks to Karina on the SLACK channel for sharing this tip for elegently handling broken links](https://github.com/11ty/eleventy/issues/466)  
- [Insert meta tag description for better SEO](https://www.youtube.com/watch?v=o3Gfsc6kihk)  
- [Fix page breaks](https://www.w3schools.com/cssref/pr_print_pagebi.asp) 

- Articles and websites for ideas and concepts relating to the Six Thinking Hats concept: 
    1. [The DeBono Group, concept owners](https://www.debonogroup.com/services/core-programs/six-thinking-hats/)
    2. [Another similar project found on GitHub](https://josephjguerra.github.io/six-thinking-hats/#learn)
    3. [Some great ideas for summarising the book](https://fourminutebooks.com/six-thinking-hats-summary/)
    4. [Useful resource from the NHS website](https://improvement.nhs.uk/resources/six-thinking-hats/)
    5. [Useful resources](https://readingraphics.com/book-summary-six-thinking-hats/)
    6. [Use this example as the inspiration for my Readme file](https://github.com/Frozenaught/homechopped)
    7. [Defining the problem by HBR](https://hbr.org/2012/09/are-you-solving-the-right-problem)
    8. [Red Hat Thinking](https://transformationacademy.com/2019/10/thoughts-101-how-thoughts-create-emotions-and-stuff/ )

Special dedication to 
- [Edward De Bono and his book Six Thinking Hats](https://www.amazon.co.uk/Six-Thinking-Hats-Edward-Bono/dp/0241257530/ref=sr_1_1?crid=1EEDOQZKPKSVG&dchild=1&keywords=six+thinking+hats&qid=1598200811&sprefix=six+thinking%2Caps%2C149&sr=8-1) 
- [Jim Kwik for bringing the value of this concept to my attention through his thinking courses and book](https://www.amazon.co.uk/Limitless-Techniques-Improve-Performance-Productivity/dp/1401958230/ref=sr_1_1?crid=3RJUP8CP6I5ET&dchild=1&keywords=limitless+jim+kwik&qid=1598200888&sprefix=limitless%2Caps%2C152&sr=8-1)

[Back to table of contents](#contents)