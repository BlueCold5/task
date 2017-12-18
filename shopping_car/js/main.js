function add_item(btn) {
  var tr = btn.parentNode.parentNode;
  var name = tr.getElementsByTagName("input")[0].value;
  var price = tr.getElementsByTagName("input")[1].value;
  var number = tr.getElementsByTagName("input")[2].value;
  var newtr = document.createElement("tr");
  newtr.innerHTML = '<td>'+name+'</td>'+
                            '<td>'+price+'</td>'
                            +'<td><button type="button" name="minus" onclick="decrease_item(this)">'+'-'+'</button>'+number+
                            '<button type="button" name="add" onclick="increase_item(this);">'+'+'+'</button>'+'</td>'
                            +'<td><button type="button" name="delete" onclick="delete_item(this);">'+'删除商品'+'</button>'+'</td>';
  var tbody = document.getElementById("tableBody");
  tbody.appendChild(newtr);
  number_item();
  price_item();
}
function delete_item(btn) {
  var tr = btn.parentNode.parentNode;
  var tbody = document.getElementById("tableBody");
  tbody.removeChild(tr);
  number_item();
  price_item();
}
function increase_item(btn) {
  var td = btn.parentNode;
  var number = td.childNodes[1];
  number.nodeValue++;
  price_item();
}
function decrease_item(btn) {
  var td = btn.parentNode;
  var number = td.childNodes[1];
  if(number.nodeValue<2){
    alert("Error");
  }
  else{
    number.nodeValue--;
  }
  price_item();
}
function number_item(){
  var tbody=document.getElementById("tableBody");
  var tr=tbody.getElementsByTagName("tr");
  var num = document.getElementById("itemNum");
  num.innerHTML =tr.length;
}
function price_item(){
  var tbody=document.getElementById("tableBody");
  var tr=tbody.getElementsByTagName("tr");
  var i=0,number,price,sum=0;
  for(i=0;i<tr.length;i++){
    price=tr[i].childNodes[1].innerHTML;
    number=tr[i].childNodes[2].childNodes[1].nodeValue;
    sum=sum+price*number;
  }
  var total=document.getElementById("itemPrice");
  total.innerHTML=sum;
}
