var person = prompt ("Hi, what's your name?");

function nubText(str) {
    var result = false;
    for (var i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
          result = true;
        }
    }

    return result;
}
function revString(str){
    return str.split('').reverse().join('');
  }
function simbToUpperCase(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
        if (i%2 == 0) {
          result += str[i].toUpperCase();
        }
        else {
          result += str[i].toLowerCase();
        }
    }
    return result;

}
function conclusionUserName (name) {
    if (!nubText(name)) {
      return  revString(name);
    }
      return  simbToUpperCase(name);
}
alert(conclusionUserName(person));
