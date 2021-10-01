# TESODEV Frontend Challenge

A fully responsive search engine application.

Tech stack:
React
node
SASS


In this project user reaches first landing page by this link: https://tesodev-search-app.herokuapp.com/<br/>

* User needs to fill input field to search by name/surname/company/date/country/city. <br/>
* After clicking search button, it sends request to node API which turns default dataJSON to REST API.<br/>
* Then engine will show first 3 results.<br/>
To see more user should click "Show more" button.<br/>

Show more button directs user to searchresults page, which contains all results.<br/>
* User has options to sort data by name/year ascending and descending.
* Every page shows 6 data. User can change page by pagination options. <br/>
* If data count lower than 7 then there will be no pagination options.<br/>
* Pagination options start by current page's number. <br/>
* If there are more pages than 6 then pagination options will show current page number and next 2 page number then three dots and then last three pagination options.  Exp: [2, 3, 4,  . . ., 16, 17, 18]<br/><br/>
* If user reaches last 6 page a new pagination option will be apper as "F" which paginates to first page.<br/>




