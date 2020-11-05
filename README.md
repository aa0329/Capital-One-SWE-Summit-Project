# Capital-One-SWE-Summit-Project

Website: https://aa0329.github.io/Capital-One-SWE-Summit-Project/

# Project Details
The internet is an unlimited source of information. This web application allows users to search through global news in order to locate news pertaining to three categories: Entertainment, sports, and technology. Detailed below are the tools used to create this app and also the features included in it. I've also included some challenges and accomplishments that I encountered throughout this project!

# Tools Used
* [News API](https://newsapi.org "Named link title")
  * Used as the data source to retrieve news headlines
* Bootstrap template
  * Used for frontend styling
* JavaScript, HTML, CSS

# Features

#### Keyword Search and Category Specification
Users can type in a keyword in the search bar to see the articles related to the keyword they entered. Since the app is limited to the 3 categories mentioned above, the website also includes a dropdown menu that allows users to pick the specific category of news they want to see for their keyword. These articles were compiled by passing in both the keyword and the category as a parameter to the API. (`https://newsapi.org/v2/everything q=${searchcombination}&apiKey=${apikey}`). Search combination included both the phrase and the category. This ensured that any news belonging to the 3 categories were filtered accordingly since the users were only given 3 options to choose from. 

#### Displaying Search Results
The compiled news sources based on the keyword and category is shown in a user-friendly format by having a card format for each of the sources and displaying them across the screen. The card provided pertinent information including the image associated with the article for a more visually appealing format, the headline, the author, a short description of the article, a link that opens the article in a new tab/window if the user wants to read more, and the publish date. The images fetched from the URLs were of various sizes so to make it more visually organized, all of the images were re-sized so that they all looked the same. 

# Challenges
* Initially, I was attempting to layout the website starting from scratch which lead to many errors and misformatting. Using a bootstrap template allowed me to get a foundation for my app and focus more on making the searches visually appealing. It allowed me to learn more about the tools that exist that can be integrated with front-end development.
* At first, I was unable to fetch the data using the API key given and it was only working with the localhost. To resolve this issue locally, I was able to research more about Visual Studio Code and the different extensions that I could download to run my code on a local browser. However, this issue was fixed once our accounts were upgraded.
* When I was first displaying the news results, I was appending everything to a single table. While this did work and did display all of the news sources correctly, it wasn't as visually appealing. A user would have to continuously scroll down to see all the sources. To combat this issue, I used cards instead where each news source would have its own card and each of these cards would be dispersed across the screen. This allowed me to separate the news sources more creatively and was a quick fix by appending the results to a new card each time instead of the same table each time. However, after doing this it made some of the cards start at the bottom of the column and finish at the top of the column. To avoid the user having to scroll up to finish reading about a news source, I added "col-12" to the div that held the cards. 

# Accomplishments 
* During a time like this, it can seem as if the news is talking about the same things over and over. This app allows users to look up other news sources with the category they want so that they are in charge of the news they see. This easy to use interface should bring about a meaningful experience for the users.
* When I first read the description for this project, I was unsure if I would be able to do it. I barely knew what an API was and had never made a large-scale application like this before. While it was daunting at first, all of the error messages I got and tweaks I had to made allowed me to learn so much more about front-end, and it made me realize that it's something I really enjoy doing. (One thing crossed off my computer science bucket list!)
