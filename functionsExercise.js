// 1.
function fozzieBear(){
    console.log("Wocka Wocka!")
}
fozzieBear();
// 2.
function beaker(speak){
    console.log(speak); console.log(speak);
    console.log(speak); console.log(speak);
}
beaker("Meep");
// 3.
function muppetShow(a, b){
    if (a == "Muppet" && b == "Show") console.log("It's time to play the music. It's time to light the lights.");
}
muppetShow("Muppet", "Show");
muppetShow("Not", "Correct");
// 4. 
function kermit(){
    return "Kermit The Frog";
}
console.log(kermit());
// 5.
function muppetShowSeasons(seasons){
    if (seasons == 5) return true;
    return false;
}
console.log(muppetShowSeasons(5) + " " + muppetShowSeasons(0));
// 6.
const manOrMuppet = function(){
    console.log("Am I a man or am I a Muppet?");
}
manOrMuppet();
// 7.
rainbowConnection = () => ("Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me")
// 8. Yes
// 9. No
// 10a.
const newMuppetMovies = ["The Muppets", "Muppets Most Wanted"]
// 10b.
const upperMovies = newMuppetMovies.map(a => a.toUpperCase());
console.log(upperMovies)

// BONUS
// 11a.
const oldMuppetMovies = [
    "The Muppet Movie",
    "The Muppets Take Manhattan",
    "The Great Muppet Caper",
    "The Muppet Christmas Carol",
    "Muppet Treasure Island",
    "Muppets From Space"
]
// 11b.
const twoMovies = oldMuppetMovies.filter(n => n.length == 22)
console.log(twoMovies);
// 12a.
const charactersOne = ["Statler", "Waldorf"];
// 12b.
const charactersTwo = ["The Swedish Chef", "Animal", "Rowlf"];
// 12c. 
randomMuppet = characters => {
    const random = Math.floor(Math.random() * characters.length);
    console.log(characters[random]);
  }
// 12d.
randomMuppet(charactersOne);
randomMuppet(charactersTwo);
// 13. Create an arrow function called caps with a parameter called string that accepts a string argument and RETURNS a new string value with every other letter capitalized starting with the first letter. For an extra bonus have the function set up so that it ignores spaces (For Example it would change "Hello World" to "HeLlO wOrLd" instead of "HeLlO WoRlD").
caps = string => {
    let cap = 0;
    let final = "";
    string = string.toLowerCase();
    for (i = 0; i < string.length; i++){
        if (string.slice(i, i + 1) !== " ") {
            if (cap % 2 !== 0) final += string.slice(i, i + 1).toUpperCase();
            else final += string.slice(i, i + 1);
            cap++;
        } else final += " ";
    }
    console.log(final);
}
caps("Hello World");