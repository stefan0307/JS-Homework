 function dogYearConversion (conversionForYears, humanYears){
    if (Number.isNaN(humanYears))
    {
     return `Invalid input`;
    } 
    
    if (conversionForYears === `h2d`)
     {
       return humanYears * 7;
     }else if (conversionForYears === `d2h` ) 
     {
        return humanYears / 7;
     } else {
      console.log(`Please enter a valid input`);
     }
}

 const conversionSelect = prompt(`Enter H2D or D2H:`).toLowerCase();
 const years = Number(prompt(`Enter years you want to convert:`));
 const results = dogYearConversion(conversionSelect, years);
 console.log(results);