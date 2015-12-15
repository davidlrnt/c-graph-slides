var templates = document.getElementsByTagName('template');
var content = document.getElementById("content");
var count = 0;

function test(direction){
  if(count >= 0 && count <= templates.length) {
  var clone = document.importNode(templates[count].content, true);
  content.innerHTML = "";
  content.appendChild(clone);
    if (count < templates.length-1 && direction == "forward"){
      count++;
    } else if (count > 0 && direction == "backwards"){
      count--;
    }
  }
}

document.onkeydown = function(event) {
 if (!event)
      event = window.event;
 var code = event.keyCode;
 if (event.charCode && code == 0)
      code = event.charCode;
 switch(code) {
      case 37:
          test("backwards")
          break;
      case 39:
          test("forward");
          break;
 }
 event.preventDefault();
};