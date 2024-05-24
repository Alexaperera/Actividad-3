document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("eventForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const phone = form.phone.value.trim();
        
        if (name === "" || email === "") {
            alert("Please complete the required fields.");
            return;
        }
        
        alert(`Thank you for registering, ${name}! We look forward to seeing you at the event.`);
        form.reset();
    });
});
