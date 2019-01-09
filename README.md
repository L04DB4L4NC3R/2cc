# REST API session

<br />

### Steps to run

<br/>

* Make sure to have [postman](https://www.getpostman.com/downloads/) and [node.js](https://nodejs.org/en/download/) installed

* Create a new file app.js just as defined here

* Open terminal/powershell where the file is

* Run the following commands

<br/>

```
npm i express body-parser
node app
```

<br/>

* Press <b> ctrl + c </b> to exit

* Go to postman and select POST from the dropdown menu on the left

* Enter the URL as <b> localhost:3000 </b> on the space to the right of the dropdown menu

* Select <b> body </b> from below and select <b> raw </b>

* From the dropdown menu that reads "Text" select <b> JSON (application/json) </b>

* Send any message in JSON by writing JSON and pressing the send button

* Example JSON

<br/>

```json
{
    "message":"Hello world"
}
```