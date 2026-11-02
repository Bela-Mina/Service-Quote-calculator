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
    const total = document.getElementById("sub-result")
    //let start from screen

    const screenCheck = document.getElementById("screen-replace");
    const screenQuantity = document.getElementById("screen-quantity");
    const screenPrice = document.getElementById("screen-value")

    
    const screenPriceValue = screenPrice.textContent
        .replace(",", "")
        .replace("ETB", "")
        .trim();
       const priceAll = Number(screenPriceValue);
    const screenQuantityValue = Number(screenQuantity.value);

    let screenTotal = 0;

    if(screenCheck.checked) {   
        
        screenTotal = priceAll * screenQuantityValue + " ETB";
    }
    total.textContent = screenTotal + " ETB"; 
    
        //
})
// we must create empty string because we need to store the value of price