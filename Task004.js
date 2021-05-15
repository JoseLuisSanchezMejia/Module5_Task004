/*Dit is deel A: Gebruik .find
Schrijf een JavaScript functie die een bepaald item weet te vinden en terug geeft op basis van een bepaalde value.
Zoek het hele object van Spiderman, gebaseerd op de name "Spiderman".*/
const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}
];

//deel A solution version I
function findSpiderMan(superheroes){
let result = superheroes.find(function(item){
    return item.name==="Spiderman"
    })
    return result;
}

console.log(findSpiderMan(superheroes));

//deel A solution version II
const findSpiderMan2= function (superheroes){
   let search= superheroes.find((item) => {
        return item.name ==="Spiderman"}
    );
    return search;
};
console.log(findSpiderMan2(superheroes));

/*Dit is deel B
B In een array met integers. Zorg dat je een array returned met de integers verdubbeld. 
.forEach. Deze methode itereert over alle array elementen. Deze methode werkt blijkbaar alleen met console.log.
Dit is derhalve solution I:*/
const doubleArrayValues= (singleArray)=>{
singleArray.forEach((item)=>{
console.log (item*2)
})     
}
doubleArrayValues([1,2,3]);

//Deze methode werkt blijkbaar alleen met console.log, vandaar dat we in een tweede oplossing een return statement hebben gebruikt.
//Dit is solution II:
const doubleArrayValues2= (singleArray)=>{
let newVar= singleArray.forEach((item)=>{
console.log (item*2);
})
return newVar;     
};
doubleArrayValues2([1,2,3]);


/*Dit is deel C (.some)
Schrijf een JavaScript functie die checkt of er een nummer (integer) in de array aanwezig is dat groter is dan 10.
Deel C-solution 1:*/
const containsNumberBiggerThan1= function(numbers){
let check= numbers.some(function(number){
return number > 10
})
console.log(check);
};
//dit is hoe je het resultaat wegschrijft via je console.log...

containsNumberBiggerThan1([1, 4, 3, 6, 9, 7, 11]);
containsNumberBiggerThan1([1,2,1,2,1,2]);

//Deel C-solution 2
const containsNumberBiggerThan2= function (numbers){
   let check= numbers.some(function (value){
        return value > 10
    })
    return check;
};    
//dit is hoe je een functie runt en resultaat te zien krijgt op je nodejs
console.log(containsNumberBiggerThan2([1, 4, 3, 6, 9, 7, 11]));
console.log(containsNumberBiggerThan2([1,2,1,2,1,2]));

//Deel C-solution 3;
function containsNumberBiggerThan3 (numbers){
let result= numbers.some(function(item){
return item >10;
})
return result;
}
console.log(containsNumberBiggerThan3([1, 4, 3, 6, 9, 7, 11]));
console.log(containsNumberBiggerThan3([1,2,1,2,1,2]));
//Indien je resultaat op je node js te zien wilt krijgen dien je het te loggen!!Anders blijft het resultaat hangen en krijg je het niet te zien!

//Dit is deel D. In een array met strings. Schrijf een JavaScript functie die kijkt of er een bepaalde string: "Italy" in de array aanwezig is.
function isItalyInTheGreat7(arraytxt){
let result =arraytxt.includes("Italy");
return result;
}
console.log(isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']));

//de array methode includes, heeft geen functie blockstatement nodig! Geeft alleen een boolean result. 

//Dit is deel E:Gebruik .forEach. In een array met integers. Schrijf een JavaScript functie die elke integer tienvoudigt.
function tenfold(numbArray){
numbArray.forEach(function(item){ 
console.log (item*10)
});

}
console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));


//why do we get undefined?
/*dit is deel F. In een array met integers. 
Schrijf een JavaScript functie die checkt of alle waardes in de array onder de 100 zijn, en true or false retourneert*/

function isBelow100(numberArray){ 
    let result= numberArray.every(function (item){
        return item<100
    })
    return result
}
console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]));

/*deel G. In een array met integers. Gebruik de .reduce method.
Schrijf een JavaScript functie die alle waardes in de array bij elkaar optelt en het totaal van de som retourneert. 
deel G-solution 1*/

function bigSum(numArray){
    let result = numArray.reduce(function (sum, item)
    { return sum+item}, 0)
    return result;
}
console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]));
console.log(bigSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//deel G-solution 2
function bigSum2(numArray){
    let result = numArray.reduce(function(item, sum){
        return sum+item});
    return result;
}
console.log(bigSum2([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]));
console.log(bigSum2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
