let express = require('express')

let app = express()

let data = require('./food.json')

  


//get request path to food.json
app.get('/food', (req, res) => {

    if(!data){
        res.status(404).send(`Couldn't find food`)
    }

    res.send(data)

})
//get the items in the food object
app.get('/food/:item', (req, res) => {

    const sData = data.food.find(function(food){
      

        return parseInt(req.params.item) === food.item
    })

    if(!sData){
        res.status(404).send(`Couldn't find the food item`)
    }

    res.send(sData)

})






const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})