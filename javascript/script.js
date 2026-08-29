/* =========================================================
   RECRUITMENT INQUIRY FORM
   ========================================================= */

/*
   EDIT THIS ONE VALUE if the WhatsApp number changes in future.
   Country code is included without the + sign.
*/
const WHATSAPP_NUMBER = "919930733935";

const recruitmentForm = document.getElementById("recruitmentForm");

recruitmentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const location = document.getElementById("location").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    /*
       Required fields:
       Name, Phone Number, Current Location and Subject.
       Message is optional so the candidate can submit without
       writing an additional message.
    */
    if (!name || !phone || !location || !subject) {
        alert("Please fill in Name, Phone Number, Current Location and Subject.");
        return;
    }

    /*
       This is the single WhatsApp destination.
       All entered form information is placed into one WhatsApp message.
    */
    const whatsappMessage =
        "Recruitment Inquiry Form" + "\n\n" +
        "Name: " + name + "\n" +
        "Phone Number: " + phone + "\n" +
        "Current Location: " + location + "\n" +
        "Subject: " + subject +
        (message ? "\nMessage: " + message : "");

    const whatsappURL =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(whatsappMessage);

    /*
       WhatsApp's wa.me link opens the chat with the prepared message.
       The candidate then presses WhatsApp's own Send button.
    */
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
});

