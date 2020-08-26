![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/slide1.jpg)

# Six Thinking Hats

Link to site: https://dantehealy.github.io/Thinking_Hats/index.html


The Six Thinking Hats framework is a lateral thinking technique used to help empower people to solve their problems and make effective decisions. 

## Contents:
[01 UX](#ux)

[02 The Home page](#the-home-page)

[03 The Guided Session page](#the-guided-session-page)

[04 The Contact page](#the-contact-page) 

[05 Features](#features)

[05.1 Existing Features](#existing-features)

[05.1.1 Home Page - Features](#home-page)

[05.1.2 Guided session page - Features](#guided-session-page)

[05.1.3 Contact page - Features](#contact-page)

[05.2 Features Not Implemented](#features-not-implemented)

[06 Technologies Used](#technologies-used)

[06.1 Core Technologies](#core-technologies)

[06.2 Supplemental technologies](#supplemental-technologies)

[07 Testing](#testing)

[07.1 Testing methods and systems](#testing-methods-and-systems)

[07.1.1 Responsive image checker](#responsive-image-checker)

[07.1.2 HTML validator](#html-validator)

[07.1.3 CSS validator](#css-validator)

[07.1.4 JSHint](#jshint)

[07.1.5 Google Lighthouse](#google-lighthouse)

[07.1.6 Manual testing](#manual-testing)

[07.1.7 Defects identified during testing](#defects-identified-during-testing)

[08 Deployment](#deployment)

[09 Credits](#credits)

[09.1 Acknowledgements](#acknowledgements)

[10 Content](#content)

[10.1 Media](#media)

[10.2 References used](#references-used)


## UX
There are numerous people who are struggling with uncertainty due to new challenges brought about by the current Covid-impacted environment causing distress from lack of clarity. 
This framework has proven effective in all areas of life because it guides people to think holistically about their problems from multiple different angles when attempting to solve their problems. 
Most people tend to have one dominant way of thinking, but the Six Thinking Hats method encourages people to exercise multiple perspective when looking at a problem. 
Each hat is a metaphor for a different perspective which will support the to focus on a single thing at a time before bringing everything together. 

The user story envisaged is framed as follows: 
As a person struggling with uncertainty, I want to learn how to think effectively and apply this to solve any difficult problems I encounter. 
I want to enhance my quality of life by finding clarity through creating comprehensive solutions to enable decisions which I can confidently take action on. 
I want to be guided through an effective process, be able to record my ideas and get a report that gives me a record of my thought process at the end. 


## The Home page
The Landing Page provides a brief overview video at the top with an accordion at the bottom containing a visual cheat sheet and transcript.  
In between the video and the accordion there is a call to action button that leads you to the guided session page. 
At the bottom of all the pages there is a footer with some social media links plus a disclaimer text stating this site is educational only. 


### Wireframe
The Home page: 


![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/wireframe1.jpg)


## The Guided Session page
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


![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/wireframe2.jpg)


The pop up modal with instruction video and input textarea for each hat: 


![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/wireframe3.jpg)


The final report and the end of the guided session: 


![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/wireframe4.jpg)


## The Contact page
There is a short bio of the creator of the Six Thinking Hats (Edward De Bono) plus an embedded video in which he explains the process in his own words.
Below the video is an accordion with three sections: 
- Speaker bookings which takes you to a page where you can book Edward De Bono for events and testimonials for Edward De Bono
- General Inquiries email form which enables the user to contact me for information about the website or other non-booking related inquiries 
- Useful links: Links to Edward De Bono's organisations and related Six Hats groups. 

### Wireframe
The Contact page: 


![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/wireframe5.jpg)



## Features
All features were listed, organised and tracked on Trello: https://trello.com/b/RhaoyvZJ/milestone-project-2


![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/trello.jpg)



### Existing Features
The following are the features implemented by page: 

#### Home Page

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/index-html.jpg)

1.	Navbar - Allows the User fast and convenient navigation between the pages: 
    a.	Toggler with links to each page
    b.	A logo comprising of some text and a white hat

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


#### Guided session page

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/hats-html-1.jpg)

1.  There is a page load feature that guides the user to wait whilst certain elements are being hidden in the background using JavaScript to make the interactive experience more intuitive.
    To make sure that the user does't perform the process out of sequence the Question video and input section is the only elements presented initially.
    Then as the user goes through the process other elements are unhidden with the previous elements being hidden to focus the user on the process.     

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/hats-html-load.jpg)


2.	Navbar same as the home page, but with alerts

    a.	Toggler with links to each page, but the navigation away from this page comes up with an alert message warning that the information already entered will be lost and does the user still wish to proceed? 

    b.	A logo comprising of some text and a white hat 


![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/hats-html-nav-alert.jpg)


3.	Question section

    a.	Starts with a PowerPoint video that explains the importance of correctly framing the question before applying the six thinking hats

    b.	A text area with a submit button that uses JavaScript to validate that the input has more than 20 characters 

    c.	A submit button that then replace the textarea box with the entered question into fixed text and diplays the six thinking hat flip cards


4.	Six Thinking Hat flip cards 


![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/hats-html-2a.jpg)


    a.	On hover the flip cards reveal a button that opens up a modal which takes the user through a guided explanation of the purpose 
    and perspective of the hat and then allows the user to enter their thoughts into the box 


![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/hats-html-2b.jpg)


    b.	The textarea box uses JavaScript to validate that the answers aren’t too short or too long (character limits are set between 20 – 300) 

    c.	There are buttons for closing the modal and submitting the users’ answers for each hat with some more JavaScript logic that pauses the video when the modal 
    is closed to avoid multiple videos being played at the same time. 

    d.	There are two ticks once an answer is submitted – one within the modal and one outside the flip card to alert the user that an answer has been recognized 

    e.	Once all six cards are completed, a generate report button appears that replaces the six hat flip cards with a report that consolidates the inputs 
        - The report uses JavaScript to recognise any line breaks and spaces as entered by the user 


![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/hats-html-2c.jpg)


    f.	A print button appears after the report is generated. 

    g.	A reset button is available with an alert that warns the user they will lose any current work and requests confirmation that they want to proceed 

    h.	When the report is printed there is some CSS that hides the buttons at the bottom and the footer so only the report is printed. 


![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/hats-html-3.jpg)


5.	Footer is the same on all pages

    a.	Social media icons with links 

    b.	Disclaimer text 


#### Contact page

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/contact-html-1.jpg)


1.	Navbar 

    a.	Toggler with links to each page

    b.	A logo comprising of some text and a white hat

2.	Short Bio text for the creator of Six Thinking Hats

    a.	Background and credentials 

3.	Video of the creator discussing the Six Thinking Hats

    a.	The video is wrapped in a responsive container 

4.	Another accordion to tuck neatly the grouped elements for convenience and allow the user to focus on one thing at a time 

    a.	A speaker section with a button that takes the user to the official speaker booking page for Edward De Bono with testimonials 


![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/contact-html-2a.jpg)


    b.	An email form that validates the inputs and returns a confirmation alert message – this uses the EmailJS API to send an email to my designated email address with the heading listed so that I can confirm the source (Six Thinking Hats General Inquiries) 


![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/contact-html-2b.jpg)


    c.	Useful links section 

5.	Footer

    a.	Social media icons with links 

    b.	Disclaimer text 

In addition, I leveraged Bootstrap to ensure that all elements are responsive across multiple devices. 

There is also a custom 404 error message in case any broken links emerge. 


![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/test-404-html-screen.jpg)


There is also a favicon in all the tabs. 


![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/images/favicon.png)


#### Features Not Implemented
Any obvious spacing, design or layout issues were tracked and either fixed immediately or de-scoped after alternative solution was found and successfully deployed.

Note: 
Cancelled features are noted on the Trello project board which were part of my initial brainstorming and I judged to be either:

1. Impractical to incorporate into the project due to limited connection with the core purpose to educated the user in Six Thinking Hats or 
    - Experimented with having the background change color relevant to the color hat card on card flip hover in hats.html. I managed to achieve this, but I found it was too distracting so I removed it 
    - A Tableau data dashboard didn't make sense as I didn't really have a backend 
    - SEO Optimisation: I did some limited optimisation using the html tags (emphasising Six Hats)
    - Map API - would be too busy and just putting a map for the sake of it 


2. Not worth the effort versus the perceived benefit. 
    - Print to pdf API: explored a few alternatives, but there was a cost after the free cap limit so I avoided this solution 
    - Heroku deployment: not aiming for full deployment for this project yet until I build personal website to host this as part of my portfolio
    - JavaScript local storage: surplus to requirements and don't want to risk collecting personal data on people 
    - Subtitles for videos: Tried to do this, but the free tool required online hosting of my mp4's and the effort was very cumbersome, if this tool proves popular I could look into getting subtitles produced


## Technologies Used
In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. 
For each, provide its name, a link to its official site and a short sentence of why it was used

### Core Technologies
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


### Supplemental technologies
- [Balsamiq for wireframes](https://balsamiq.com/)
- [Fontawesome for the icons](https://fontawesome.com/)
- [Google fonts for the text styles](https://fonts.google.com/)
- [Favicon.io for my favicon image](https://favicon.io/)
- [MS PowerPoint - for my homemade videos, cheat sheet and hat cards](https://www.microsoft.com/en-gb/microsoft-365/p/powerpoint/cfq7ttc0k7c6?=&ef_id=CjwKCAjwkJj6BRA-EiwA0ZVPVhHn9z5zJe90QZFBtWDrSo-CmHz2O9J4mF15aED_iJ_TmCxDoKM3WxoCtHEQAvD_BwE%3aG%3as&OCID=AID2100139_SEM_CjwKCAjwkJj6BRA-EiwA0ZVPVhHn9z5zJe90QZFBtWDrSo-CmHz2O9J4mF15aED_iJ_TmCxDoKM3WxoCtHEQAvD_BwE%3aG%3as&lnkd=Google_O365SMB_App&gclid=CjwKCAjwkJj6BRA-EiwA0ZVPVhHn9z5zJe90QZFBtWDrSo-CmHz2O9J4mF15aED_iJ_TmCxDoKM3WxoCtHEQAvD_BwE&activetab=pivot%3aoverviewtab)
- [unsplash.com for my images](https://unsplash.com/)
- [youtube.com for the embedded video of Edward De Bono explaining his perspective on the Six Thinking Hats ](https://www.youtube.com/)


## Testing
The majority of the testing was manual and 

### Testing methods and systems

#### Responsive image checker
[Link](http://ami.responsivedesign.is/)

All passed: 

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/test-img-responsive.jpg)


#### HTML validator

##### 1. index.html
All passed: 

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/test-index-html-validator.jpg)


##### 2. hats.html
All passed: 

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/test-hats-html-validator.jpg)


##### 3. contact.html
All passed: 

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/test-contact-html-validator.jpg)


#### CSS validator
##### style.css
All passed: 

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/test-css-validator.jpg)



#### JSHint

##### main.js
There were some warnings based on use of Let and JQuery ($) and one unused variabel which was being called when loading or reloading hats.html so I was okay with this:  

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/test-main-js1-jshint.JPG)

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/test-main-js2-jshint.JPG)


##### email.js
Confrimed the javascript code was acceptable for jshint

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/test-email-js-jshint.JPG)


#### Google Lighthouse
A useful tool for checking the webpage's performance and making recommendations to improve. 

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/test-lighthouse.jpg)



#### Manual testing
1. Significant manual testing performed by myself across multiple devices (Laptop, iPad and iPhone 7) - to check that the layouts were responsive on all size devices 


[See attached pdf](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/manual-testing-checklist.pdf) 


2. Sent the webpage to my selected friends (work colleagues and LinkedIn contacts) and family (wife and brother) to test on their devices and provide feedback
3. Posted my link via workflow on the Peer-Review SLACK group with the Code Institute for feedback (twice first at about 80% complete then a final review at 95% complete)
4. Had my content and design reviewed by certain select people amongst my LinkedIn contacts for any changes needed
5. Tested all the links and features as I was coding to ensure that they worked as I was coding and reperformed the checks multiple times 
6. Played the videos in the modals, texted the textareas multiple times to identify and resolve any problems 
7. Confirmed that there were no console log errors in my JavaScript and JQuery code. 
8. Tested the print report on various devices 
9. Did multiple end to end walkthroughs of the guided session 
10. Testing the email form in the "Contact" page
- Try to submit the empty form and verify that an error message about the required fields appears
- Try to submit the form with an invalid email address and verify that a relevant error message appears
- Try to submit the form with all inputs valid and verify that a success message appears.
11. Create broken links to confirm custom 404 error message works

![Create broken link](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/test-404-html.jpg) 


#### Defects identified during testing
The following were the errors identified during the multiple testing sessions: 
- Multiple spacing and layout issues 
- Hat modal doesn't disappear on submit - I was advised by mentor that this is preferred as user might want to see the text acceptance. I have a tick next to the close button at the bottom to alert the user their input is accepted. 
- Reorder the hats to be consistent with the expected order as per the source material. 
- Add more punchy text explaining the purpose of the website on the landing page to entice the user to want to click on the session button.
- Needs a good overview document - - inserted a cheat sheet on the landing page which is also downloadable in pdf. 
- A footer issue was identified in Peer review which was resolved 
- Console log error in my logic when making the generate report button (applied simple boolean logic to avoid overcomplicating the built-in check)
- Modal videos could be played at once if you play and exit because there was no pause - inserted an additional function to resolve this. 
- Alejandra noted that the flashing hand icon on the landing page was too powerful and needed to be softened or completely removed - Removed. 
- Flip cards would benefit from some shading effects. 
- EmailJS confirmation alert did not initially work and the code needed to be resolved through a Gitpod refresh 


## Deployment
The link to the deployed site: (https://dantehealy.github.io/Thinking_Hats/index.html)

1. Established my own Github account by registering on https://github.com/ If you are reading this file you are already accessing my public profile which is https://github.com/DanteHealy
2. Install https://www.gitpod.io/ which is an Integrated Development Environment (IDE) that provides me an integrated ready to code environment which is very convenient. Note: I recommend to use the Google Chrome browser to do all your coding based on my experience with Microsoft Edge.
3. To set up the 'Thinking_Hats' repository I used the Code Institute template https://github.com/Code-Institute-Org/gitpod-full-template and click on the "Use this template" button.
4. I set up my repository name and description and click on the "Create repository from template" button.
5. With the necessary templates I can hit the "Gitpod" button on the top right hand corner to start coding.
6. After initial commits I accessed the repository and checked settings.
7. In the GitHub pages section I go to source and select Master branch.
8. This created a URL and advised me that my site is now published.
9. Further commits were reflected on to my site when pushed from Gitpod ('git commit origin master' in the command line interface).

Due to the current limitations of my knowledge I will keep this second milestone project hosted on GitHub. 


## Credits
### Acknowledgements
The quality of this website is testimony to the help and support from my mentor and code institute colleagues. Though there are many of people who contributed to the project I would like to mention: 
- Special thanks to gbenga_mentor, JoWings_alumna and Readri205 for their particular focused attention to my problem 
- Michaelstanden, michael_ci, SamL, Ed B and Sean MC for their technical advice and feedback on peer review and 
- My LinkedIn friend and professional tester Alejandra Huamán Ordóñez plus my family (wife, mum and siblings) and friends for testing my web site and providing their critical feedback as new general users. 


## Content
### Media
The photos used in this site were obtained from ...
- https://www.youtube.com/watch?v=D8JV3w4TOVw - Using PowerPoint to create custom videos for the web site. 
- https://unsplash.com/ - For royalty free images 

### References used
- https://www.amazon.co.uk/Six-Thinking-Hats-Edward-Bono & https://www.amazon.co.uk/Limitless-Techniques-Improve-Performance-Productivity/ - My initial inspirations for this project. 
- https://getbootstrap.com/docs/4.5/getting-started/introduction/ - Use of Bootstrap generally for responsive styling and layouts. 
- https://stackoverflow.com/questions/2125509/how-do-i-set-the-size-of-an-html-text-box - Styling the Text Box. 
- https://www.w3schools.com/howto/howto_css_flip_card.asp Use of a flip card to introduce each of the six thinking hats. 
- https://getbootstrap.com/docs/4.5/components/modal/ - Use of Bootstrap modal forms. 
- https://stackoverflow.com/questions/3961422/conditional-display-of-html-element-forms - Hiding certain HTML elements upon loading the exercise page. 
- https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show - Hiding and showing HTML elements upon a JavaScript event. 
- https://www.youtube.com/watch?v=10tXgw-0myA - background color change on hover of hat cards. 
- https://hookagency.com/website-color-schemes/ - https://www.colorcombos.com/color-schemes/137/ColorCombo137.html - background color schemes. 
- https://stackoverflow.com/questions/10462839/how-to-display-a-confirmation-dialog-when-clicking-an-a-link - Check if you need to exit the Guided Exercise page. 
- https://stackoverflow.com/questions/6457750/form-confirm-before-submit - Check to confirm before doing a full reset on the exercise page. 
- https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-accordion.php - Include accordion as per milestone 1 feedback for any overly verbose sections. ;-) 
- https://favicon.io/ - Favicon generator. 
- https://www.youtube.com/watch?v=kEf1xSwX5D8 - How to add favicon video. 
- https://speaking.com/speakers/edward-de-bono/ - References to Edward De Bono's services and Testimonials. 
- https://www.debono.com/ - More background. 
- https://www.w3schools.com/jsref/met_win_print.asp - Add a print report button and avoid refreshing the page by setting type="button" https://stackoverflow.com/questions/1878264/how-do-i-make-an-html-button-not-reload-the-page
- https://stackoverflow.com/questions/20364212/limit-print-area-to-a-div - Specify the print area to be displayed on the page. 
- https://debonoconsulting.com/training-courses/six-thinking-hats/six-thinking-hats-as-applied-in-six-sigma/ 
- http://reusableforms.com/d/p/bootstrap-popup-email-form - Bootstrap popup email form! 
- Use of the Code Institute Resume Course for my email form - Module "Sending Emails using EmailJS" 
- https://stackoverflow.com/questions/33477930/close-bootstrap-modal-on-form-submit - Dismiss modal on successful submit (for a more user friendly mobile experience) after peer review. 
- https://www.youtube.com/watch?v=gttmqvZ4kYc - Transition animation load for the hats.html guided session page. 
- https://www.geeksforgeeks.org/how-to-play-pause-video-using-jquery/#:~:text=The%20pause()%20method%20in,element%20to%20pause%20the%20video - Pause MP4 video on close to prevent multiple videos playing at the same time. 
- https://css-tricks.com/fluid-width-video/ - Video fluid width in css. 
- https://getbootstrap.com/docs/4.4/utilities/text/ - center text in flip card back vertically 
- https://www.w3.org/Style/Examples/007/center.en.html - center flip card horizontally
- https://www.w3schools.com/howto/howto_css_image_responsive.asp - Responsive image without Bootstrap for 404.html 
- https://github.com/11ty/eleventy/issues/466 - Thanks to Karina on the SLACK channel for sharing this tip for elegently handling broken links 

- Articles and websites for ideas and concepts relating to the Six Thinking Hats concept: 
    1. https://www.debonogroup.com/services/core-programs/six-thinking-hats/ - The DeBono Group, concept owners
    2. https://josephjguerra.github.io/six-thinking-hats/#learn - Another similar project found on GitHub
    3. https://fourminutebooks.com/six-thinking-hats-summary/ - Some great ideas for summarising the book 
    4. https://improvement.nhs.uk/resources/six-thinking-hats/ - Useful resource from the NHS website 
    5. https://readingraphics.com/book-summary-six-thinking-hats/ - Useful resources 
    6. https://github.com/Frozenaught/homechopped - Use this example as the inspiration for my Readme file. 
    7. https://hbr.org/2012/09/are-you-solving-the-right-problem - Defining the problem by HBR 
    8. https://transformationacademy.com/2019/10/thoughts-101-how-thoughts-create-emotions-and-stuff/ - Red Hat Thinking

Special dedication to 
- Edward De Bono and his book Six Thinking Hats https://www.amazon.co.uk/Six-Thinking-Hats-Edward-Bono/dp/0241257530/ref=sr_1_1?crid=1EEDOQZKPKSVG&dchild=1&keywords=six+thinking+hats&qid=1598200811&sprefix=six+thinking%2Caps%2C149&sr=8-1
- Jim Kwik for bringing the value of this concept to my attention through his thinking courses and book https://www.amazon.co.uk/Limitless-Techniques-Improve-Performance-Productivity/dp/1401958230/ref=sr_1_1?crid=3RJUP8CP6I5ET&dchild=1&keywords=limitless+jim+kwik&qid=1598200888&sprefix=limitless%2Caps%2C152&sr=8-1