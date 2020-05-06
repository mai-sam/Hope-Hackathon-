// Hope Hackathon!

const request = require("request");
const express = require('express');
const edamam = require('edamam-api')
const app = express()
const bodyParser = require('body-parser')
const appId = "496a5259"
const apiKey = "3352b31776a846e2569ce37a24e79b30"

const { NutritionAnalysisClient } = require('edamam-api');
 
(async() => {
    const client = new NutritionAnalysisClient({
        appId: appId,
        appKey: apiKey,
    });
    const results = await client.getNutritionData({ query: '1 Chicken' });
    console.log(results.calories);
})();

//ejs is a template engine (renders a template turns it into HTML,CSS,and javascript while filling in variables.)
// app.set('view engine', 'ejs')

//turning the information from the url and parsing to a json object.
//middleware function that gets run on every client request.
app.use(bodyParser.urlencoded({ extended: true }));

//allows us to use static folders for holding compliled css and pictures
app.use(express.static('public'));

// sends the response off. render the index.js file.
app.get('/', function (req, res) {
    res.render('index');
})

app.post('/', (req, res) => {
    let url = `"https://api.edamam.com/api/nutrition-details?app_id=${appId}&app_key=${apiKey}"`;
    const body = req.body
});


//server port
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`This server is running on ${port}`)
});


