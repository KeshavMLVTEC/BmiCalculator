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