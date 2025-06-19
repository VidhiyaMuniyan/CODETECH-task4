let items = [];

function adItem() {
  let val = document.getElementById("inp").value;
  if (val != "") {
    items.push(val);
    document.getElementById("inp").value = "";
    render();
  }
}

function render() {
  let t = "";
  for (let i = 0; i < items.length; i++) {
    t += "<li>" + items[i] + "<button onclick='remov(" + i + ")'>X</button></li>";
  }
  document.getElementById("list").innerHTML = t;
}

function remov(i) {
  items.splice(i, 1);
  render();
}
