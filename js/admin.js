
function init(){
    console.log("Admin Page");
    // click events
    $('#btnRegister').click(register);
}

window.onload=init;

function register(){
    // get values from inputs
    let prodCode = document.getElementById('productCode').value;
    if(isNaN(prodCode)){
        alert('Product code must be a number');
    }
    let prodTitle = document.getElementById('title').value;
    let prodPrice = document.getElementById('price').value;
    let prodCat = document.getElementById('category').value;
    let prodImg = document.getElementById('image').value;
    // save them in variables
    // display the values on the console
    console.log(prodCode);
    console.log(prodTitle);
    console.log(prodPrice);
    console.log(prodCat);
    console.log(prodImg);

    document.getElementById('productCode').value = "";
    document.getElementById('title').value = "";
    document.getElementById('price').value = "";
    document.getElementById('category').value = "";
    document.getElementById('image').value = "";
}