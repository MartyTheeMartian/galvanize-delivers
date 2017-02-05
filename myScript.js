var tbody = document.getElementById('body');

var bCount = 0;
var burger = document.getElementById('burger');
burger.addEventListener("click", function() {
  bCount++;
});

var pCount = 0;
var pizza = document.getElementById('pizza');
pizza.addEventListener("click", function() {
  pCount++;
});

var rCount = 0;
var ribs = document.getElementById('ribs');
ribs.addEventListener("click", function() {
  rCount++;
});

var iCount = 0;
var iceCream = document.getElementById('iceCream');
iceCream.addEventListener("click", function() {
  iCount++;
});

var bCon = true;
var pCon = true;
var rCon = true;
var iCon = true;

var sub = document.getElementById('sub');
var tax = document.getElementById('tax');
var total = document.getElementById('total');


var food = document.getElementById('food');
food.addEventListener("click", function(event) {

  if(bCount === 1 && bCon === true) {
    let tr = document.createElement('tr');
    tbody.appendChild(tr);
    let td1 = document.createElement('td');
    td1.innerText = "Royale w/ Cheese";
    tr.appendChild(td1);
    let td2 = document.createElement('td');
    td2.style.textAlign = "center";
    td2.id = "bNum";
    td2.innerText = bCount;
    tr.appendChild(td2);
    let td3 = document.createElement('td');
    td3.innerText = "$8.99";
    tr.appendChild(td3);
    bCon = false;
  }
  else if (bCount > 1) {
    var td2 = document.getElementById('bNum');
    td2.innerText = bCount;
  }

  if(pCount === 1 && pCon == true) {
    let tr = document.createElement('tr');
    tbody.appendChild(tr);
    let td1 = document.createElement('td');
    td1.innerText = "Arugula Pie";
    tr.appendChild(td1);
    let td2 = document.createElement('td');
    td2.style.textAlign = "center";
    td2.id = "pNum";
    td2.innerText = pCount;
    tr.appendChild(td2);
    let td3 = document.createElement('td');
    td3.innerText = "$11.99";
    tr.appendChild(td3);
    pCon = false;
  }
  else if (pCount > 1) {
    var td2 = document.getElementById('pNum');
    td2.innerText = pCount;
  }

  if(rCount === 1 && rCon === true) {
    let tr = document.createElement('tr');
    tbody.appendChild(tr);
    let td1 = document.createElement('td');
    td1.innerText = "Smoked Swine";
    tr.appendChild(td1);
    let td2 = document.createElement('td');
    td2.style.textAlign = "center";
    td2.id = "rNum";
    td2.innerText = rCount;
    tr.appendChild(td2);
    let td3 = document.createElement('td');
    td3.innerText = "$14.99";
    tr.appendChild(td3);
    rCon = false;
  }
  else if (rCount > 1) {
    var td2 = document.getElementById('rNum');
    td2.innerText = rCount;
  }

  if(iCount === 1 && iCon === true) {
    let tr = document.createElement('tr');
    tbody.appendChild(tr);
    let td1 = document.createElement('td');
    td1.innerText = "Ice Cream Biscuit";
    tr.appendChild(td1);
    let td2 = document.createElement('td');
    td2.style.textAlign = "center";
    td2.id = "iNum";
    td2.innerText = iCount;
    tr.appendChild(td2);
    let td3 = document.createElement('td');
    td3.innerText = "$7.99";
    tr.appendChild(td3);
    iCon = false;
  }
  else if (iCount > 1) {
    var td2 = document.getElementById('iNum');
    td2.innerText = iCount;
  }

  var subTotal = (bCount * 8.99) + (pCount * 11.99) + (rCount * 14.99) + (iCount * 7.99);


  sub.innerText = "$" + subTotal.toFixed(2);

  var taxS = subTotal * 0.0875;
  tax.innerText = "$" + taxS.toFixed(2);

  var totalS = subTotal + taxS;
  total.innerText = "$" + totalS.toFixed(2);

});

// Reset Order
var reset = document.getElementById("reset");
reset.addEventListener("click", function() {
  bCount = 0;
  pCount = 0;
  rCount = 0;
  iCount = 0;
  bCon = true;
  rCon = true;
  pCon = true;
  iCon = true;

  var body = document.getElementById("body");
  while(body.firstChild) {
    body.removeChild(body.firstChild);
  }

  sub.innerText = "";
  tax.innerText = "";
  total.innerText = "";

});

// Place Order
var place = document.getElementById('form');
place.addEventListener("submit", function() {
  var orderCount = bCount + pCount + rCount + iCount;
  if(orderCount === 0) {
    alert("Ya' gotta buy somethin' bruh");
  }
  else {
    alert("Your order was sucessfully submitted. Thank You!");
  }
});
