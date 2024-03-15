/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: 
      Date:   

      Filename: project03-01.js
*/

const menuItems  = document.getElementsByClassName('menuItem');
console.log(menuItems)

for( let i in menuItems){
      try{
            menuItems[i].addEventListener('change',calcTotal)
      }catch{
            break;
      }
}

function calcTotal(e){
      let orderTotal = 0;
      for (i in menuItems) {
            if(menuItems[i].checked){
                  orderTotal += Number(menuItems[i].value)
            }
      }
      document.getElementById('billTotal').innerHTML =formatCurrency(orderTotal)
}

 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }