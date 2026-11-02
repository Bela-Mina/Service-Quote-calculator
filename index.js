const form = document.querySelector("#form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    //
     if(!form.checkValidity()) {
        form.reportValidity()
            return;
    }
    
    //userNAme
    const userName = document.getElementById("customer-name")
    
    ///
    const total = document.getElementById("sub-price")
    //let start from screen

    const screenCheck = document.getElementById("screen-replace");
    const screenQuantity = document.getElementById("screen-quantity");
    const screenPrice = document.getElementById("screen-value")

    
    const screenPriceValue = screenPrice.textContent
        .replace(",", "")
        .replace("ETB", "")
        .trim();
       const priceAll = Number(screenPriceValue);
    const screenQuantityValue = screenQuantity.value;

    let screenTotal = 0;

    if(screenCheck.checked) {   
        
        screenTotal = priceAll * Number(screenQuantityValue);
    }
    total.textContent = screenTotal + " ETB"; 
    // what is the mestake you use the wrong var name  in text
        // stil now you see error in console log in 36:23 line that about textContent = 
})
// we must create empty variable because we need to store the value of price