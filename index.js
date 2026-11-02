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

    
    
    if(screenCheck.checked) {   
        total.textContent = priceAll * screenQuantityValue + " ETB";
    }
    const screenPriceValue = screenPrice.textContent
        .replace(",", "")
        .replace("ETB", "")
        .trim();
       const priceAll = Number(screenPriceValue);
        //
        const screenQuantityValue = screenQuantity.value;

})