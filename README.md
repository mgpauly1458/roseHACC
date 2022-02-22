# Alaka'i Trail Directory
A web application that allows state officials and the general public to monitor the foot-traffic density on any of Hawaii's hiking trails. This was our team's entry to the [Hawaii Annual Coding Challenge](https://hacc.hawaii.gov) (HACC) 2021, which got us invited to the finalist day where we presented the project to judges and an audience. Also, check out our [Devpost](https://devpost.com/software/rose-luiwyo).
|  |The Team|  |
|--|--------|--|
|<img src="https://user-images.githubusercontent.com/74911365/154952499-8de579a1-1ae2-45ea-b541-61a832515775.png" width="700">|<img src="https://user-images.githubusercontent.com/74911365/155088337-48d6e84c-b438-417f-b28c-85c78955bca5.jpg" width="700">|<img src="https://user-images.githubusercontent.com/74911365/154952551-95a0dd5d-8de4-4a0d-9539-fd2e8f1870d5.png" width="700">|

https://user-images.githubusercontent.com/74911365/155099216-c10141d7-d22f-43de-8fc4-139cb811a7c3.mp4




# Trail Catalog
Trails are displayed on cards and highlighted on the map using the Leaflet map API.
<br>
<img src="https://user-images.githubusercontent.com/74911365/155107754-a7cdbf5f-6df4-475d-b834-7be3556ff077.png">


Clicking on a trail's card reveals details about the hike like the route description, difficluty, total distance, and average time it takes someone to complete the hike.
<br>
<img src="https://user-images.githubusercontent.com/74911365/155107992-8b52982f-20f5-498c-ace7-3ea91b21742d.png">


# Safety & Etiquette
Hiking can be dangerous, especially for people who have not hiked on Hawaii's trails before. Our app has a page dedicated to explaining the Department of Land and Natural Resources' (DLNR) safety guidlines and best practices for hiking on their trails.
<br>
|Safety Guidelines| |
|-----------------|-|
|<img src="https://user-images.githubusercontent.com/74911365/155108663-3d514da6-0dd4-4b95-867d-ddd21a8ee8e3.png" width="700">|<img src="https://user-images.githubusercontent.com/74911365/155108746-1006a31c-0a1c-41e1-a6a2-983cfe423bbe.png" width="500">|

# Traffic Information
A user first picks the day and time they wish to hike which automatically updates the trail colors on the map based on an algorithm that combines predicted traffic data and reservation data stored in the app's database. This helps people spread out and not plan their hike on a trail that is predicted to have a busy day. 

According to the DLNR, spreading people out also has the side effect of encouraging better hiking behavior because people are more likely to misbehave when in large groups.

<img src="https://user-images.githubusercontent.com/74911365/154952750-4908496f-8f39-4671-bfb4-977458b7e3d3.png" width="700">

# Sign Up
Users have the option to create an account, which will unlock additional features like creating reservations and emergency contacts.
<br>
<img src="https://user-images.githubusercontent.com/74911365/155113519-014505a9-2f83-494c-89f7-714ab5776516.png" width="700">


# Reservations
Users with an account can make reservations. To make a reservation a user selects a hike and enters the time, date, and number of people they are taking with them. This data is stored and used to update the trail colors on the homepage, allowing future users to make more informed decisions about their hiking plans.
![image](https://user-images.githubusercontent.com/74911365/155114147-ccfbe904-3fef-4b0c-9464-e95d38e2f24d.png)

Users can view, update, and delete reservations on their profile page.
![image](https://user-images.githubusercontent.com/74911365/155114317-cdf866ae-61aa-4f71-95c9-853912ff108a.png)

# Safety Alerts

Users can create an emergency contact, which can be optionally added to a reservation. To create an emergency contact add your contact's name and phone number.
![image](https://user-images.githubusercontent.com/74911365/155114649-c67285ca-dee4-408d-9cd8-7f0477a925ff.png)

# Safety Text Messages

If an emergency contact is added to a reservationto, they will be automatically notified via text message 6 hours after your scheduled hike. This way they know to reach out to you to make sure everything went ok. If no positive contact is made, the text message also includes the location, date, time, and number of people to look for. This is essential information to have when reporting a lost hiker to authorities.


<img src="https://user-images.githubusercontent.com/74911365/155111739-20907f3e-9008-4747-b2bc-83d2c500fc28.png" >
<br>
<img src="https://user-images.githubusercontent.com/74911365/155111859-5f4120a0-a828-4615-a970-66d58db7e1d4.png" height="500">

Our reservation feature provides a solution to overburdened trails by aligning the interests of hikers and the state
Nobody enjoys hiking on busy trails. When reservations are made, our color indicators update and hikers are made aware of when other users plan to hike. Naturally, hikers will make reservations at less busy times reducing traffic without strict state enforcement.

<img src="https://user-images.githubusercontent.com/74911365/154952823-55d9297e-524f-4d8c-a0bf-1559e7f03c98.png" width="700">

# Donations
Through our donations page, Alaka’i offers users the ability to support their favorite hikes through the Stripe API.

<img src="https://user-images.githubusercontent.com/74911365/154952863-ef7583b6-e769-4fab-9071-2aa14566b8e9.png" width="700">



<img src="https://user-images.githubusercontent.com/74911365/154953129-4b599e8f-9ea6-44d5-8f37-70c3c03124dd.png" width="700">

# Mobile Friendly
Alakai has a responsive and mobile friendly design.

<img src="https://user-images.githubusercontent.com/74911365/154953181-089b0e7d-4422-486e-89d8-d2970a887086.png" width="700">

# Challenges And Accomplishments
The biggest challenge our team encountered was the management of large datasets across multiple local development platforms. Passing the necessary data to every corner of the project was difficult and clunky at first, but through a large-scale overhaul of our database and restructuring to use AJAX requests, we were able to clean up our code and easily access our database information. Another large accomplishment for the team was the sudden delve into web development. A majority of our team has little to no prior experience with web development, yet we were able to use this competition as an opportunity to jump in head first into new territory, which significantly accelerated our growth as programmers. We were able to learn more about web design, proper coding practices, and maximizing the use of version control systems.

# One-Minute Demo
https://www.youtube.com/embed/7zXx1ivkXIg
