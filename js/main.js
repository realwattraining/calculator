function createButton(j, n) {
  var f = document.createDocumentFragment();
  var br = document.createElement("br");
  for (i = j; i <= n; i++) {
    var b = document.createElement("input");
    b.type = "button";
    b.value = i;
    b.className = "row1";
    b.onclick = function() {
      var result = document.getElementById("result");
      result.value += this.value;
    };
    f.appendChild(b);
  }
  document.body.appendChild(f);
  document.body.appendChild(br);
}

function button(tag, type, val, cls, id, event) {
  var f = document.createDocumentFragment();
  var clear = document.createElement(tag);
  clear.type = type;
  clear.value = val;
  clear.id = id;
  clear.className = cls;
  clear.onclick = event;
  f.appendChild(clear);
  document.body.appendChild(f);
}

function clearResult() {
  var result = document.getElementById("result");
  result.value = "";
}

function zeroResult() {
  var result = document.getElementById("result");
  result.value += "0";
}

function sum() {
  var result1 = document.getElementById("result");
  var result2 = document.getElementById("result");
  return result1 + result2;
}

window.onload = function() {
  this.createButton(1, 3);
  this.createButton(4, 6);
  this.createButton(7, 9);
  this.button("input", "button", "C", "row1", "clear", this.clearResult);

  this.button("input", "button", 0, "row1", "zero", this.zeroResult);
  this.button("input", "button", ".", "row1", "clear", this.clearResult);
  var br = document.createElement("br");
  document.body.appendChild(br);
  this.button("input", "button", "+", "row1", "clear", this.sum);
  this.button("input", "button", "-", "row1", "clear", this.clearResult);
  this.button("input", "button", "x", "row1", "clear", this.clearResult);
  document.body.appendChild(br);
  this.button("input", "button", "/", "row1", "clear", this.clearResult);
  document.body.appendChild(br);
  this.button("input", "button", "=", "row1", "clear", this.clearResult);
};
