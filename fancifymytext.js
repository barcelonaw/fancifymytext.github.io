var textarea = document.getElementById("textarea");
function makeBig() {
  textarea.style.fontSize = "24pt";
}
document
  .getElementsByName("fancify")[0]
  .addEventListener("change", function () {
    textarea.style.fontWeight = "bold";
    textarea.style.color = "blue";
    textarea.style.textDecoration = "underline";
    alert("Get Fancified");
  });

document
  .getElementsByName("fancify")[1]
  .addEventListener("change", function () {
    textarea.style.fontWeight = "normal";
    textarea.style.color = "black";
    textarea.style.textDecoration = "none";
    alert("Fancified removed");
  });

function makeMoo() {
  textarea.style.textTransform = "uppercase";
  let str = textarea.value.split(".");
  let str2 = str.join("-Moo");
  textarea.value = str2;
}
