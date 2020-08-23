# Six Thinking Hats
The Six Thinking Hats framework is a lateral thinking technique used to help empower people to solve their problems and make effective decisions. 

In the current environment there are people who are faced with challenges that they may be struggling with because they lack clarity. 
This framework has proven effective in all areas of life because it guides people to think about an issue from multiple different angles. 
Each hat is a metaphor for a different perspective which will support the to focus on a single thing at a time before bringing everything together. 
The Landing Page provides a brief overview video with a transcript at the bottom of the page and a call to action button that leads you to the guided session page. 
At the footer are social media links plus a disclaimer text that says this is educational only and doesn't cover advice relating to emergency services. 

## UX
Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:


======= TO DELETE
As a user type, I want to perform an action, so that I can achieve a goal.
This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. 
These files should themselves either be included as a pdf file in the project itself (in an separate directory), 
or just hosted elsewhere online and can be in any format that is viewable inside the browser.


### The Home page 


### The "Guided Session" page 
Ppens with another video about defining the specific problem with a text box to enter your problem. 
The logic requires a string between 10 to 100 characters in length.
Once the user submits their problem six hat images appear which are individual flip cards leading to a modal that guides the user though each Hat. 
Within each modeal there is an instruction video and a texarea to enable the user to input their notes (the logic assumes between 20 - 400 characters of input).
Once each hat is completed a tick will appear on the modal next to the close button at the bottom and each hat will have a tick when completed. 
Throughout this process there is a reset button which allows the user to reload the page and clear everything to start again. 
Once all six hats are completed a print report button will appear that generates a user friendly report. 
Once the report is generate a print button appears which allows the user to print the report from their browser. 
As the inputs are not saved there are warning popup messages asking for confirmation before navigating out of the session. 

### The "Contact" page 
There is a short bio of the creator of the Six Thinking Hats (Edward De Bono) plus an embedded video in which he explains the process in his own words.
Below the video are two buttons: 
- Speaker bookings which takes you to a page where you can book Edward De Bono for events and 
- General Inquiries (The plan is to create a form that emails me as the creator of the webpage, but also refers to the Useful links for the Official Six Thinking Hats organisations)

There is also an accordion which contains: 
- Testimonlias: For Edward De Bono
- General Inquiries: An explanation of the form that this is for the creator of the website. 
- Useful links: Links to Edward De Bono's organisations and related Six Hats groups. 

## Wireframes
Final wireframes outlined as below: 

### Home Page:


### Guided Session Page:


### Contact Page:




## Features
All features were defined and tracked on Trello: https://trello.com/b/RhaoyvZJ/milestone-project-2

### Existing Features
Feature 1 - allows users X to achieve Y, by having them fill out Z

Feature X - Navbar logo position is switched to the right of the screen and travels with the menu when expanded in mobile view. 
...
For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Not Implemented
You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.
If this section grows too long, you may want to split it off into a separate file and link to it from here.

Note: 
One quirk which I am aware of is that the final report layout looks different between the MS Edge browser, which prints exactly like the screena and the Google Chrome and Mobile browsers which applies responsive adjustment so the hats are not side by side in pairs, but on top of each other. 
As the report looks good in both formats I do not consider this a defect and decided not to invest too much time trying to resolve this. 
<INSERT EXAMPLE PICTURES >



## Technologies Used
In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. 
For each, provide its name, a link to its official site and a short sentence of why it was used.

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
- Responsive image checker 
- HTML validator 
- CSS validator
- JSHint 

### Manual testing 
1. Significant manual testing performed by myself across multiple devices (Laptop, iPad and iPhone 7) 
2. Sent the webpage to my selected friends (work colleagues and LinkedIn contacts) and family (wife and brother) to test on their devices and provide feedback
3. Posted my link via workflow on the Peer-Review SLACK group with the Code Institute for feedback (twice first at about 80% complete then a final review at 95% complete)
4. Had my content and design reviewed by certain select people amongst my LinkedIn contacts for any changes neede.
5. Tested all the links and features as I was coding to ensure that they worked as I was coding.
6. Played the videos in the modals, texted the textareas multiple times to identify and resolve any problems. 
7. Tested the print report on various devices. 
8. Testing the email form in the "Contact" page
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
- EmailJS confirmation alert did not initially work and needed to be fixed. 





## Deployment
The link to the deployed site: https://dantehealy.github.io/Thinking_Hats/index.html

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).
In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
Different values for environment variables (Heroku Config Vars)?
Different configuration files?
Separate git branch?
In addition, if it is not obvious, you should also describe how to run your code locally.




## Credits
### Acknowledgements
I couldn't have made this webpage without the help and support from my mentor and code institute colleagues. Though there are many of people who contributed to the project I would like to mention: 
- JoWings_alumna, gbenga_mentor, Readri205, Michaelstanden, michael_ci, SamL, Ed B and Sean MC for their technical advice and feedback on peer review and 
- My LinkedIn friend and professional tester Alejandra Huamán Ordóñez plus my friends and family for testing my web site and providing their critical feedback as general users. 


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
