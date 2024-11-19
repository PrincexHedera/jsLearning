const hummus = function (factor) {
    const ingridient = function(amount, unit, name){
        let ingriedientAmount =  amount * factor;
        if (ingriedientAmount > 1 ){
            unit += "s";
        }
        console.log(`${amount}, ${unit}, ${name}`);
    }
    ingridient(1, "can", "chickpeas");
    ingridient(0.5, "cup", "tahini");
    ingridient(0.25, "cup", "lemonjuice");
    ingridient(1, "clove", "garlic");
    ingridient(2, "tablespoon", "oliveoil");
    ingridient(0.5, "teaspoon", "cumin");
 
}

hummus(5);