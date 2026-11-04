const form = document.querySelector("#form");
const screenQuantity = document.getElementById("screen-quantity");
const batteryQuantity = document.getElementById("battery-quantity");
const softwareQuantity = document.getElementById("software-quantity");


form.addEventListener("submit", function(event) {
    event.preventDefault();
    //
     if(!form.checkValidity()) {
        form.reportValidity()
            return;
    }
    
    ///
    const total = document.getElementById("sub-price")
    const eachTotal =document.getElementById("each-total")
    //let start from screen

    const screenCheck = document.getElementById("screen-replace");
    const screenPrice = document.getElementById("screen-value")
    //
    // let work battery
    const batteryChange = document.getElementById("battery-replace");
    const batteryPrice = document.getElementById("battery-value");
    //
    // let move softwarePart
    //
    const softwareFix = document.getElementById("software-repair");
    const softwarePrice = document.getElementById("software-price");

    
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
    if(screenCheck.checked  && screenQuantityValue === "") {
       screenQuantity.setCustomValidity("Please select a quantity for screen replacement.")

        screenQuantity.reportValidity();
        return;

    } 
    // battery vaildiation
     if(batteryChange.checked && batteryQunatityValue === "") {
        batteryQuantity.setCustomValidity("Please select a quantity for battery replacement.")

        batteryQuantity.reportValidity();
        return;
     }
    // software validation
    if(softwareFix.checked && softwareQunatityAll === "") {
        softwareQuantity.setCustomValidity("Please select a quantity for software repair.")
        softwareQuantity.reportValidity();
        return;
    }
    ////
    

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

screenQuantity.addEventListener("change", function() {
        screenQuantity.setCustomValidity("");
});

// some error i see
// 1, the vaidation is working but it ask me mandatory to select quantity even if did not select the servise and check  so you should use 






// 3. Your project completion roadmap
// Let's finish this without jumping into React or adding unnecessary features.
// TechFix development checklist
// 1. Service calculations
//    Completed
   
//    Screen, battery, software and subtotal.
// 2. Conditional validation
//    Basic logic done
   
//    Validate quantities only when their services are selected.
// 3. Fix custom validity errors
   
//    Clear errors when customers correct their quantities.
// 4. Service selection validation
   
//    Prevent empty quotations.
// 5. Discount calculation
   
//    Implement a realistic discount rule.
// 6. Estimated total
   
//    Calculate subtotal minus discount.
// 7. Quotation generation
   
//    Display customer information and repair breakdown.
// 8. Testing and debugging
   
//    Test invalid inputs, combinations, and edge cases.
// 9. CSS and responsive design
   
//    Finish the interface after the JavaScript works.