![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/slide1.jpg)

# Six Thinking Hats
The Six Thinking Hats framework is a lateral thinking technique used to help empower people to solve their problems and make effective decisions. 

## UX
There are numerous people who are struggling with uncertainty due to new challenges brought about by the current Covid-impacted environment causing distress from lack of clarity. 
This framework has proven effective in all areas of life because it guides people to think holistically about their problems from multiple different angles when attempting to solve their problems. 
Most people tend to have one dominant way of thinking and the Six Thinking Hats encourages people to exercise multiple perspective when looking at a problem. 
Each hat is a metaphor for a different perspective which will support the to focus on a single thing at a time before bringing everything together. 

The user story I envisage is framed as follows: 
As a person struggling with uncertainty, I want to learn how to think effectively and apply this to difficult problems I encounter. 
This is so that I can enhance my quality of life by finding clarity through comprehensive solutions enabling confident decisions which I can take action on. 
I want to be guided through an effective process, be able to record my ideas and produce a report that gives me a record of my thoughts. 


## The Home page 
The Landing Page provides a brief overview video at the top with an accordion at the bottom containing a nice visual cheat sheet and transcript.  
In between the video and the accordion there is a call to action button that leads you to the guided session page. 

At the bottom of all the pages there is a footer with some social media links plus a disclaimer text stating this site is educational only. 

### Wireframe
The Home page: 


![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/wireframe1.jpg)


## The "Guided Session" page 
This page opens with another video about defining the specific problem with a text box to enter your problem. 
The logic requires a string between 10 to 100 characters in length.
Once the user submits their problem six hat images appear which are individual flip cards leading to a modal that guides the user though each Hat. 
Within each modeal there is an instruction video and a texarea to enable the user to input their notes (the logic assumes between 20 - 400 characters of input).
Once each hat is completed a tick will appear on the modal next to the close button at the bottom and each hat will have a tick when completed. 
Throughout this process there is a reset button which allows the user to reload the page and clear everything to start again. 
Once all six hats are completed a print report button will appear that generates a user friendly report. 
Once the report is generate a print button appears which allows the user to print the report from their browser. 
As the inputs are not saved there are warning popup messages asking for confirmation before navigating out of the session. 

### Wireframes
The Guided Session page: 


![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/wireframe2.jpg)


The pop up modal with instruction video and input textarea for each hat: 


![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/wireframe3.jpg)


The final report and the end of the guided session: 


![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/wireframe4.jpg)


## The "Contact" page 
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
<Insert example pictures>


#### Home page
1.	Navbar - Allows the User fast and convenient navigation between the pages: 
    a.	Toggler with links to each page
    b.	A logo comprising of some text and a white hat

2.	PowerPoint instruction video allows the user to get an immediate overview of the purpose of the Six Thinking Hats framework: 
    a.	Overview of the Six Thinking Hats framework

3.	Call to action encourages the users to start a problem solving exercise: 
    a.	Button to guided session page 
    b.	Flashing icon encouraging the user to start the session 

4.	Accordion which tucks away further information content neatly and icons indicating the drop down functionlity. Includes: 
    a.	A fast start cheat sheet as an infographic with a button to download the pdf 
    b.	A transcript of the overview video 

5.	Footer
    a.	Social media links 
    b.	Disclaimer text 


#### Guided session page 
1.  There is a page load feature that guides the user to wait whilst certain elements are being hidden in the background using JavaScript to make the interactive experience more intuitive.
    To make sure that the user does't perform the process out of sequence the Question video and input section is the only elements presented initially.
    Then as the user goes through the process other elements are unhidden with the previous elements being hidden to focus the user on the process.     

2.	Navbar same as the home page, but with alerts

    a.	Toggler with links to each page, but the navigation away from this page comes up with an alert message warning that the information already entered will be lost and does the user still wish to proceed? 

    b.	A logo comprising of some text and a white hat 

3.	Question section

    a.	Starts with a PowerPoint video that explains the importance of correctly framing the question before applying the six thinking hats

    b.	A text area with a submit button that uses JavaScript to validate that the input has more than 20 characters 

    c.	A submit button that then replace the textarea box with the entered question into fixed text and diplays the six thinking hat flip cards

4.	Six Thinking Hat flip cards 

    a.	On hover the flip cards reveal a button that opens up a modal which takes the user through a guided explanation of the purpose and perspective of the hat and then allows the user to enter their thoughts into the box 

    b.	The textarea box uses JavaScript to check that the answers aren’t too short or too long (character limits are set between 20 – 300) 

    c.	Flashing icon encouraging the user to start the session 

    d.	There are buttons for closing the modal and submitting the users’ answers for each hat with some more JavaScript logic that pauses the video when the modal is closed to avoid multiple videos being played at the same time. 

    e.	There are two ticks once an answer is submitted – one within the modal and one outside the flip card to alert the user that an answer has been recognized 

    f.	Once all six cards are completed, a generate report button appears that replaces the six hat flip cards with a report that consolidates the inputs 
        - The report uses JavaScript to recognise any line breaks and spaces as entered by the user 

    g.	A print button appears after the report is generated. 

    h.	A reset button is available with an alert that warns the user they will lose any current work and requests confirmation that they want to proceed 

    i.	When the report is printed there is some CSS that hides the buttons at the bottom and the footer so only the report is printed. 

5.	Footer is the same on all pages

    a.	Social media links 

    b.	Disclaimer text 

#### Contact page
1.	Navbar 

    a.	Toggler with links to each page

    b.	A logo comprising of some text and a white hat

2.	Short Bio text for the creator of Six Thinking Hats

    a.	Background and credentials 

3.	Video of the creator discussing the Six Thinking Hats

    a.	The video is wrapped in a responsive container 

4.	Another accordion to tuck neatly the grouped elements for convenience and allow the user to focus on one thing at a time 

    a.	A speaker section with a button that takes the user to the official speaker booking page for Edward De Bono with testimonials 

    b.	An email form that validates the inputs and returns a confirmation alert message – this uses the EmailJS API to send an email to my designated email address with the heading listed so that I can confirm the source (Six Thinking Hats General Inquiries) 

    c.	Useful links section 

5.	Footer

    a.	Social media links 

    b.	Disclaimer text 

In addition, I leveraged Bootstrap to ensure that all elements were responsive across multiple devices. 


#### Features Not Implemented
Any obvious spacing, design or layout issues were tracked and either fixed immediately or de-scoped after alternative solution was found and successfully deployed.

Note: 
One quirk which I am aware of is that the final report layout looks different between the MS Edge browser, which prints exactly like the screena and the Google Chrome and Mobile browsers which applies responsive adjustment so the hats are not side by side in pairs, but on top of each other. 
As the report looks good in both formats I do not consider this a defect and decided not to invest too much time trying to resolve this as there was no apparent user dis-satisfaction. 




Cancelled features on the Trello board were part of the initial brainstorming and I judged to be either:

- Impractical to incorporate into the project due to limited connection with the core purpose to educated the user in Six Thinking Hats or 

- Not worth the delays to completion versus the perceived benefit. 





## Technologies Used
In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. 
For each, provide its name, a link to its official site and a short sentence of why it was used

### Core Technologies: 
The project uses: 
- HTML for structure 
- CSS for styling 
- JavaScript for interactive front end functionality 
- Bootstrap for responsive images 
- JQuery to simplify DOM manipulation. 
- EmailJS API was used for sending emails via the contact form 
- GitHub for hosting 
- Git for version control and 
- Gitpod for the IDE. 

### Supplemental technologies: 
- Fontawesome for the icons 
- Google fonts for the text styles 
- Favicon.io for my favicon image
- MS PowerPoint - for my homemade videos, cheat sheet and hat cards 
- unsplash.com for my images 
- youtube.com for the embedded video of Edward De Bono explaining his take on the Six Thinking Hats 


## Testing
In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. 
Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, 
with the project providing an easy and straightforward way for the users to achieve their goals.
Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, 
link to the test file(s) and explain how to run them.
For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. 
A particularly useful form for describing your testing process is via scenarios, such as:

### Testing methods and systems: 

### Responsive image checker 
(http://ami.responsivedesign.is/)

All passed: 

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/test-img-responsive.jpg)


### HTML validator 

#### 1. index.html
All passed: 

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/test-index-html-validator.jpg)


#### 2. hats.html 
All passed: 

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/test-hats-html-validator.jpg)


#### 3. contact.html
All passed: 

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/test-contact-html-validator.jpg)


### CSS validator
#### style.css
All passed: 

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/test-css-validator.jpg)



### JSHint 

#### main.js
There were some warnings based on use of Let and JQuery ($) and one unused variabel which was being called when loading or reloading hats.html so I was okay with this:  

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/test-main-js1-jshint.JPG)

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/test-main-js2-jshint.JPG)


#### email.js
Confrimed the javascript code was acceptable for jshint

![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/test-email-js-jshint.JPG)


### Google Lighthouse
A useful tool for checking the webpage's performance and making recommendations to improve. 


![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/test-lighthouse.jpg)




### Manual testing 
1. Significant manual testing performed by myself across multiple devices (Laptop, iPad and iPhone 7) - to check that the layouts were responsive on all size devices 

See attached pdf ![alt text](https://github.com/DanteHealy/Thinking_Hats/blob/master/assets/documentation/test/manual-testing-checklist.pdf) 

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


### Defects identified during testing: 
- Errors and recommendations by Readri205
- Ed B recommendation for a good overview document - inserted a cheat sheet on the landing page which is downloadable in pdf.  
- The footer issue identified by SAML
- Console log error in my logic when making the generate report button (applied simple boolean logic to avoid overcomplicating the built-in check)
- Modal videos could be played at once if you play and exit because there was no pause - inserted an additional function to resolve this. 
- Alejandra noted that the flashing hand icon on the landing page was too powerful and needed to be softened or completely removed - softened. 
- Flip cards would benefit from some shading effects. 
- EmailJS confirmation alert did not initially work and the code needed to be resolved through a Gitpod refresh 


## Deployment
The link to the deployed site: https://dantehealy.github.io/Thinking_Hats/index.html

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
- JoWings_alumna, gbenga_mentor, Readri205, Michaelstanden, michael_ci, SamL, Ed B and Sean MC for their technical advice and feedback on peer review and 
- My LinkedIn friend and professional tester Alejandra Huamán Ordóñez plus my family (wife, mum and siblings) and friends for testing my web site and providing their critical feedback as new general users. 


## Content
### Media
The photos used in this site were obtained from ...
- https://www.youtube.com/watch?v=D8JV3w4TOVw - Using PowerPoint to create custom videos for the web site. 
- https://unsplash.com/ - For images 

### References used: 
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