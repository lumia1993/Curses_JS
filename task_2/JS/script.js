function goGoogle() {
  window.open("https://www.google.com");
}
function addimage(){
	document.write("<img src='img/more.png' alt='Море'> ");
}
function inobject() {
  var inobject = {
    name: 'Artyom',
    lastname: 'Kartavnyov',
    age: '24',
    height: '180',
    eye_color: 'blue'
  }

  console.log(inobject);
  
  var div = document.createElement('div');
    var humanObj = '';

    for (var key in inobject) {
        humanObj += key + ': ' + inobject[key] + '<br>'
      }

      div.innerHTML = humanObj;
      document.body.appendChild(div);
  }
