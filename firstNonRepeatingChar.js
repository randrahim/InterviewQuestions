function notRepeatingChar(str) {
    console.log(str);
    for (let i=0; i<=str.length; i++) {
      if(str.indexOf(str.charAt(i)) === str.lastIndexOf(str.charAt(i))){
          console.log("The first unrepeated char is:" + ' ' + str.charAt(i));
          break;
      } 
    }
  }
  notRepeatingChar("aabccd"); //b
  notRepeatingChar("abbbca"); //c