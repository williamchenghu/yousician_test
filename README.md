#About project
A list of songs get from mock server through REST API with following features:

* song list
* change the song rating
* pagination
* filtering by level
* song search

This project has been covered with unit test and e2e test

#File structure
-src
--\_test
---mocks
-----components
------SingSongCardCmp.test.js
------widgets
-------LevelChartCmp.test.js
-------PaginationCmp.test.js
-----containers
-------SongListContainer.test.js
-----App.test.js

--components
---SingSongCardCmp.js
---widgets
----LevelChartCmp.js
----PaginationCmp.js
--containers
---SongListContainer.js
--App.js
-index.js

#Lauguage and library

* Lanuage: Javascript
* Library: Reactjs
* Unit test: Jest, Enzyme
* Mocking backend: dyson mock server
* Version Control: git, github

#How to run?

* go to project folder in terminal and run `npm install`
* run project with comment `npm start`
* open the browser `localhost:3000` check the web page

#How to run the unit test?

* go to project folder in terminal and run `npm run test`
