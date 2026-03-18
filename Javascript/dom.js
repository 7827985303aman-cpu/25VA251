function show(){
    let name = document.getElementById("myName").ariaValueMax;
    //document.getElementById("display").innerHTML= name;
    alert(name);
}

//dom
function changeColor(){
    document.getElementById('text').style.color='red';
}

// colorchange on mouseover
const myelement =  document.getElementById('text');

// add event listener for mouseover
myelement.addEventListener("mouseover",function(){
    myelement.style.color="blue";
})