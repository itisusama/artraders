function handleFormSubmit(event) {
    event.preventDefault();

    // Get form values
    const shop = document.getElementById("shop").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;

    // Store in sessionStorage
    sessionStorage.setItem("shop", shop);
    sessionStorage.setItem("phone", phone);
    sessionStorage.setItem("date", date);

    for (let i = 1; i <= 7; i++) {
        sessionStorage.setItem(`item_name${i}`, document.getElementById(`item_name${i}`).value);
        sessionStorage.setItem(`item_quantity${i}`, document.getElementById(`item_quantity${i}`).value);
        sessionStorage.setItem(`unit_price${i}`, document.getElementById(`unit_price${i}`).value);
    }

    // Redirect to invoice page
    window.location.href = "invoice.html";
}
