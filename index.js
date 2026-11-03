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
    const eachTotal =document.getElementById("each-total")
    //let start from screen

    const screenCheck = document.getElementById("screen-replace");
    const screenQuantity = document.getElementById("screen-quantity");
    const screenPrice = document.getElementById("screen-value")
    //
    // let work battery
    const batteryChange = document.getElementById("battery-replace");
    const batteryPrice = document.getElementById("battery-value");
    const batteryQuantity = document.getElementById("battery-quantity");
    //
    // let move softwarePart
    //
    const softwareFix = document.getElementById("software-repair");
    const softwarePrice = document.getElementById("software-price");
    const softwareQuantity = document.getElementById("software-quantity");

    
    ///
    const screenPriceValue = screenPrice.textContent
        .replace(",", "")
        .replace("ETB", "")
        .trim();
    const priceAll = Number(screenPriceValue);
    const screenQuantityValue = screenQuantity.value;
//
    const batterypricesValue = batteryPrice.textContent
        .replace(",", "")
        .replace("ETB", "")
        .trim();
    const priceToNumber = Number(batterypricesValue);
    const batteryQunatityValue = batteryQuantity.value;
    
    ///
    const softwarePriceValue = softwarePrice.textContent
        .replace(",", "")
        .replace("ETB", "")
        .trim();
        //
        const softwarePriceValueAll = Number(softwarePriceValue)
        const softwareQunatityAll = softwareQuantity.value;

    ////
    let screenTotal = 0;
    let batteryT = 0;
    let softwareTotal = 0

    // validation
    if(screenCheck.checked && screenQuantityValue === "") {
       screenQuantityValue.setCustomValidity("Please select a quantity for screen replacement.")
    } 
        screenQuantityValue.reportValidity();
    //  if(!screenCheck.checked && screenQuantityValue === "") {

    // } else {

    // }
    //
    // if(batteryChange.checked && batteryQunatityValue === "") {

    // }else {

    // }
    //
    if(screenCheck.checked) {           
        screenTotal = priceAll * Number(screenQuantityValue);
    }
    ////battery
    if(batteryChange.checked) {
        batteryT = priceToNumber * Number(batteryQunatityValue);        
    }
    //let change the price to Number
    if(softwareFix.checked) {
        softwareTotal = softwarePriceValueAll * Number(softwareQunatityAll)
    }

    total.textContent = screenTotal + batteryT + softwareTotal + "ETB";
    //
    eachTotal.textContent = `screen Price ${screenTotal}ETB  Battery Price${batteryT}ETB  Software Price${softwareTotal} ETB`
        // total.textContent = softwareTotal + "ETB";

        // fix some thing about totalwe must fix total by use ne total
})
// we must create empty variable because we need to store the value of price

/// fix some part
// 1, you fix validation system
// 2, you must use if statement example if screen is checked but quantity is empty reject