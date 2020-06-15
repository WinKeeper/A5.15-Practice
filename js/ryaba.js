const dataURL = "https://api.jsonbin.io/b/5e905926172eb643896166e7";

function handleButton() {
  let data = {}
  $.getJSON(dataURL, 
    function(somedata){
      data = $(".j-text")
      data.html(somedata.text)
    }
  )
}
  
function replaceButton() {
  let data = {}
  let var1 = $(".j-var1").val();
  let var2 = $(".j-var2").val();
  let var3 = $(".j-var3").val();
  let var4 = $(".j-var4").val();
  let var5 = $(".j-var5").val();
  let var6 = $(".j-var6").val();
  let speach = $(".j-speach").val();
  let replacedText = {
    "text": [`Жили-были ${var1} да ${var2}.Была у них ${var3}.Снесла ${var3} ${var4}, не простое - золотое- ${var1} бил, бил - не разбил- ${var2} била, била - не разбила ${var5} бежала, ${var6} задела, ${var4} упало и разбилось.${var1} плачет, ${var2} плачет, а ${var3} кудахчет: ${speach}`]};
  data = $(".j-text");
  data.html(replacedText.text);
}
 
function init() {
  $(".j-btn-create").click(handleButton);
  $(".j-btn-replace").click(replaceButton);
}

$(document).ready(init);