const pic = document.getElementById("season");
const textInvoer = document.getElementById("textJaar");

var nummer = 1;
var jaren = 0;

const txP = document.createElement("p");

function changeSeason(){
    if(nummer == 1){
        pic.src = 'zomer.jpg';
        nummer++;
    }else if(nummer == 2){
        pic.src = 'herfst.jpg';
        nummer++;
    }else if(nummer == 3){
        pic.src = 'winter.jpg';
        nummer++;
    }else{
        pic.src = 'lente.jpg';
        nummer = 1;
        jaren++;
    }
    if (jaren<1){
        return;
    }else if(jaren<2){
        txP.innerHTML = `Er is ${jaren} jaar voorbij.`;
    }else{

    txP.innerHTML = `Er zijn ${jaren} jaren voorbij.`;
    }
    textInvoer.appendChild(txP);
}