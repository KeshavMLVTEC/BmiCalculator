## This is Project 2 Srouce code

## HTML
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">
        <h1>BMI Calculator</h1>
        <form>
            <p><label>Height in CM : </label><input type="text" id="height" "Height.."></p>
            <p><label>Weight in KG : </label><input type="text" id="weight" placeholder="Weight.."></p>
            <button>Calculate</button>
            <div id="results"></div>
        </form>
        <div id="weight-guide">
        <h3 class="center">BMI Weight Guide</h3>
        <p class="center">Under Weight : Less then 18.6</p>
        <p class="center">Normal Range : 18.6 to 24.9</p>
        <p class="center">OverWeight : Greater then 24.9</p>
        </div> 
    </div>
</body>
<script src="script.js"></script>

</html>
```
## CSS

```

body{
    margin: 150px auto;
}
.container{
    width: 60%;
    margin: auto;
    background-color: #212121;
    color: white;
    font-family: monospace;
    padding: 40px;
    font-size:1.2rem;
}
h1{
    text-align: center;
}
form{
    display: flex;
    justify-content: center;
    justify-items:center;
    align-items: center;

}
form input{
    width: 40%;

}
button{
    padding: 4px;
}
.center{
    display: flex;
    justify-content: center;
    justify-items: center;
}
#results{
    margin-left: 10px;
}
```
## SCRIPT
```
const form=document.querySelector('form')

// yeh form hai or form post ya get type se submit hota hai  
// so values hume kahi bhejni toh nhy hai ihsliye default action ko rok lenge

form.addEventListener('submit',(event)=>{
    event.preventDefault(); // submit nhy krna kahi pr ishliye
    // we need two value height and weight
    const height = parseInt(document.querySelector('#height').value) // take value in parse it into int    
    const weight = parseInt(document.querySelector('#weight').value)    
    const results = document.querySelector('#results')   
    // condition to cheak height and weight are right or not.
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML=`Please give a valid height ${height}`;
    } else if(weight==="" || weight < 0 || isNaN(weight)){
        results.innerHTML=`Please give a valid weight ${weight}`;
    }else{
        // formula for calculating BMI.. (body mass index)..
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        // show the result
        if(bmi < 18.6){
            results.innerHTML= `<span>${bmi} Under Weight</span>`
        }else if(bmi >18.6 && bmi < 24.9){
            results.innerHTML= `<span>${bmi} is in Nomral range</span>`
        } else if(bmi>24.9){
            results.innerHTML= `<span>${bmi} Over Weight</span>`
        }
        
    }
})

```