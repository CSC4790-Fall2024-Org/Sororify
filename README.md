Sororify Prototype Report <br/>
Amitha Soundararajan, Maya McFadden, Moriah Owens, Shay McDowell, Julia Foy <br/>

**Summary** <br/>
Our prototype proposal states that “A working product prototype would, at the very least, fulfill the needs of these two user stories,” these user stories being that we would match PNMs with similar members and match members with similar PNMs. It is doubtless that this has been achieved. Our prototype successfully matches bump groups to their most similar PNMs. We also output the percentages of similarity that each PNM has to the bump group. We have tested these percentages by hand to ensure their accuracy. These percentages come from our algorithm, which takes in data from PNMs and members. This data is: their major(s), location (hometown, home county, and home state), involvement on campus, and interests. We have successfully assigned PNM numbers and bump groups. We have also resolved the risk that PNMs with earlier alphabetical names would get better matches by assigning the best matches (highest percentages) first, then working down the list. Thus, PNMs at the end of the list have an equal chance of a good match. 

**Creation** <br/>
The prototype was created with a variety of different tools. The front end itself was created using React, which created starter code that was edited by our front-end team.  We also used Canva to create our logo, which appears on the React website. The website also hosts surveys that were created using SurveyJS. The algorithm was manually coded in Python on Visual Studio Code by our backend team.

**Instructions** <br/>
To run our prototype, two react commands should be run in the terminal. After cloning the Panhel-Alg repository, navigate to the panhel-survey folder and run npm install, followed by npm start. After these two commands, the localhost:3000 site will open with our front end web page. No additional software has to be installed to use our algorithm. Here is the link to the GitHub repository for our project: Panhel-Alg Repo. The directions below describe how to use the algorithm with data collected from SurveyJS, but for simplicity we have already populated the PNM_json_data and member_json_data variables in the jsonConvertor.py, so to run the algorithm and see results, only the file sororifyAlg.py in the back-end-folder has to be run:

Next, the sample run data that we have generated from filling out our SurveyJS surveys for both members and PNMs is located in the folder titled back-end-folder. The Members.JSON and PNM.JSON files contain this data. Select all of the data in the PNM.JSON file and paste it into the PNM_json_data variable in the file jsonConvertor.py, which is also in the back-end-folder. Do the same for data in the Members.JSON data, pasting it into the member_json_data variable. Be careful to leave the three single quote marks at the start and end of each variable’s data. For example, the start of the content for the PNM_json_data should look like this: 
PNM_json_data = '''{"ResultCount":21,"Data":[{"First Name":"Moriah","Last Name":"Owens","State":"California",
And so on for the rest of the data entries. 

**Testing** <br/>
The prototype was tested manually at multiple steps of the development process. The first test was run after the completion of the function that calculates the percent matches for each PNM for each bump group. We used a small sample of data and did the calculations described by the algorithm by hand. We then compared these results to the output of the algorithm. The calculations done by hand were done twice to ensure no mistakes were made on our end. The results of this test revealed that many of the percentages outputted by the algorithm were accurate, but a few were slightly off. These inconsistencies, due to case-sensitivity and user-entered errors, were resolved before moving forward with writing the rest of the algorithm. The next test was run on the function that matched the PNMs to their highest scoring bump group. The accuracy of this function was of the utmost importance to us as it directly relates back to the purpose of our prototype. A similar process as before was conducted where we used a small sample of data and did the matching by hand based on what was described in the algorithm for the matching function. We then compared these results to the output of the algorithm. This test revealed an important bug (mentioned below) in our algorithm and once that was resolved we redid the calculations by hand to address the edits made to the algorithm and compared those results to the new output. Once this test passed, we began testing specific case scenarios, for example, we inputted a member and a PNM that would result in the highest percentage match possible and ensured both the score calculated matched the highest percentage match possible based on our algorithm, which was found to be 33%, and that the PNM was put into the bump group with that specific member. 

**Bugs / Obstacles** <br/>
One of the largest obstacles we encountered was how to match the PNMs and members. This was an issue we thought about through the design process and into coding the prototype. Our team decided that we would match the highest percents first, therefore creating the best case scenarios for both PNMs and members. Additionally, one of the bugs we encountered regarded case-sensitivity. The majority of our survey questions are a drop down menu, with the exception of users entering their hometown, as it would be too much to code for now to make this a dropdown. However, as we tested, we discovered that, for example, “Villanova” and “Villanova “ (with a space at the end) would not create a match. Because of this, we had to manually go through and remove instances of case difference or extra spaces. Looking to extend this project during our Senior Projects course, we hope to be able to address this in a more long term sense for users. The last bug we encountered was an issue where certain PNMs were being skipped and not getting matched to a bump group. This issue was due to it referencing a bump group number, and not an index. We were able to fix this bug quickly and continue on. 

**Output - Demo** <br/>

https://youtu.be/nlEMmksDOic

**django notes**

https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Authentication

atlas:
https://cloud.mongodb.com/v2#/org/66e84cd1b5a3f42d1fc1598a/projects

upgrade pip
Django==4.2.16
pymongo==3.12.3
djongo==1.3.6
pytz==2024.2

Path to run migrate commands and runserver:
/Users/ShayMcDowell/Desktop/Fall24/senior-proj/Sororify/TestDjango

commands (do these everytime u make changes):
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver

activate venv:
cd to folder above env folder, run:
source env/bin/activate

then go back into path mentioned above to runsever, or run in a separate terminal

superadmin address: http://127.0.0.1:8000/admin


julia addition:

cd survey-backend
npm start

open new terminal

cd panhel-survey
npm start