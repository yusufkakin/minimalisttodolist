function newElement() {
  let li = document.createElement("li");
  let inputValue = document.querySelector("#formvalue").value;
  let textitem = document.createTextNode(inputValue);
  li.appendChild(textitem);
  document.querySelector("#listitems").appendChild(li);
  document.querySelector("#formvalue").value = "";
  
  for (i = 0; i < close.length; i++) {
    close[i].onclick = () => this.parentElement}
}

document.querySelector("#listitems").addEventListener("click",function(e) {
  let tgt = e.target;
  tgt.remove();
});