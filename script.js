/* =========================================================
   RECRUITMENT INQUIRY FORM
   ========================================================= */

/*
   EASY-EDIT WHATSAPP NUMBER
   Country code ke saath, + sign ke bina.
*/
const WHATSAPP_NUMBER = "919930733935";


/* =========================================================
   FORM
   ========================================================= */

const recruitmentForm = document.getElementById("recruitmentForm");


recruitmentForm.addEventListener("submit", function (event) {

    event.preventDefault();


    /* Get form values */

    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const location =
        document.getElementById("location").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    /* =====================================================
       REQUIRED FIELDS
       ===================================================== */

    if (!name || !phone || !location || !subject) {

        alert(
            "Please fill in Name, Phone Number, Current Location and Subject."
        );

        return;
    }


    /* =====================================================
       WHATSAPP MESSAGE
       ===================================================== */

    const whatsappMessage =
        "Recruitment Inquiry Form\n\n" +
        "Name: " + name + "\n" +
        "Phone Number: " + phone + "\n" +
        "Current Location: " + location + "\n" +
        "Subject: " + subject +
        (message
            ? "\nMessage: " + message
            : "");


    /* =====================================================
       WHATSAPP URL
       ===================================================== */

    const whatsappURL =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(whatsappMessage);


    /* =====================================================
       OPEN WHATSAPP
       ===================================================== */

    window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
    );

});
