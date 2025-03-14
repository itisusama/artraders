
function handleFormSubmit(event) {

    window.location.href = 'invoice.html';

    // let itemsContainerClass = document.querySelector('.items-container');

    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    const booker = document.getElementById("booker").value;
    const shop = document.getElementById("shop").value;
    const phone = document.getElementById("phone").value;
    const rawDate = document.getElementById("date").value; // yyyy-mm-dd from input
    const dateParts = rawDate.split("-"); // Split the date
    const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
    
        // Items data
        const itemName1 = document.getElementById("item_name1").value
        const itemQuantity1 = document.getElementById("item_quantity1").value
        const itemPrice1 = document.getElementById("unit_price1").value

        // Items data
        const itemName2 = document.getElementById("item_name2").value
        const itemQuantity2 = document.getElementById("item_quantity2").value
        const itemPrice2 = document.getElementById("unit_price2").value

        // Items data
        const itemName3 = document.getElementById("item_name3").value
        const itemQuantity3 = document.getElementById("item_quantity3").value
        const itemPrice3 = document.getElementById("unit_price3").value

        // Items data for 4–7
const itemName4 = document.getElementById("item_name4").value;
const itemQuantity4 = document.getElementById("item_quantity4").value;
const itemPrice4 = document.getElementById("unit_price4").value;

const itemName5 = document.getElementById("item_name5").value;
const itemQuantity5 = document.getElementById("item_quantity5").value;
const itemPrice5 = document.getElementById("unit_price5").value;

const itemName6 = document.getElementById("item_name6").value;
const itemQuantity6 = document.getElementById("item_quantity6").value;
const itemPrice6 = document.getElementById("unit_price6").value;

const itemName7 = document.getElementById("item_name7").value;
const itemQuantity7 = document.getElementById("item_quantity7").value;
const itemPrice7 = document.getElementById("unit_price7").value;


// Store data in session storage
sessionStorage.setItem("booker", booker);
sessionStorage.setItem("shop", shop);
sessionStorage.setItem("phone", phone);
sessionStorage.setItem("date", formattedDate);

// Items
sessionStorage.setItem("item_name1", itemName1);
sessionStorage.setItem("item_name2", itemName2);
sessionStorage.setItem("item_name3", itemName3);

sessionStorage.setItem("item_quantity1", itemQuantity1);
sessionStorage.setItem("item_quantity2", itemQuantity2);
sessionStorage.setItem("item_quantity3", itemQuantity3);

sessionStorage.setItem("unit_price1", itemPrice1);
sessionStorage.setItem("unit_price2", itemPrice2);
sessionStorage.setItem("unit_price3", itemPrice3);

// Store items 4–7 data in session storage
sessionStorage.setItem("item_name4", itemName4);
sessionStorage.setItem("item_quantity4", itemQuantity4);
sessionStorage.setItem("unit_price4", itemPrice4);

sessionStorage.setItem("item_name5", itemName5);
sessionStorage.setItem("item_quantity5", itemQuantity5);
sessionStorage.setItem("unit_price5", itemPrice5);

sessionStorage.setItem("item_name6", itemName6);
sessionStorage.setItem("item_quantity6", itemQuantity6);
sessionStorage.setItem("unit_price6", itemPrice6);

sessionStorage.setItem("item_name7", itemName7);
sessionStorage.setItem("item_quantity7", itemQuantity7);
sessionStorage.setItem("unit_price7", itemPrice7);

window.location.href = "invoice.html";
      
}