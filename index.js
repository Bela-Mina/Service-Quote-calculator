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

    // let work battery
    const batteryChange = document.getElementById("battery-replace");
    const batteryPrice = document.getElementById("battery-value");
    const batteryQuantity = document.getElementById("battery-qantity");
        /// let fix price to Number
    const batterypricesValue = batteryPrice.textContent
    .replace(",", "")
    .replace("ETB", "")
    .trim();

    const priceToNumber = Number(batterypricesValue);
    const batteryQunatityValue = batteryQuantity.value;

    let batteryT = 0
    if(batteryChange.checked) {
        batteryT = priceToNumber * Number(batteryQunatityValue);        
    }
    total.textContent = batteryT   + "ETB"
})
// we must create empty variable because we need to store the value of price
