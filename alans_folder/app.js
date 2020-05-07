//using the fetch method to grab information right off of the website. 
const myFunction = () => {

    const appId = "496a5259"
    const apiKey = "3352b31776a846e2569ce37a24e79b30"

    //fetches the website that you are using the API from. 
    fetch(`https://api.edamam.com/api/nutrition-details?app_id=${appId}&app_key=${apiKey}`, {
        method: "GET"
    })
        .then(response => {
            console.log(response);
        })
        .then(res => {
                    
        })
        .catch(err => {
            console.log(err);
        });
}







