const Polindrome = str => {
    str = str.toLowerCase();
    console.log(str === str.split('').reverse().join(''))
}
Polindrome("Kayak");
Polindrome("Home");
Polindrome("eye");
Polindrome("racecar");