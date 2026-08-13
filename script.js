window.onload = function () {

    const welcomeHeading = document.getElementById("welcomeMessage");

    if (welcomeHeading) {

        let visitorName = prompt("👋 Welcome to Abonyozz Manga Haven!\n\nPlease enter your name:");

        if (visitorName === "" || visitorName === null) {

            visitorName = "Anime Fan";

        }

        welcomeHeading.innerHTML =
            "Welcome to Abonyozz Manga Haven, " + visitorName + "!";

        const visitorMessage = document.getElementById("visitorMessage");

        if (visitorMessage) {

            visitorMessage.innerHTML =
                "We're happy to have you here. Explore our amazing anime merchandise and enjoy your shopping experience!";

        }

    }

};




function changeColor() {

    const heading = document.getElementById("mainHeading");

    if (heading.style.color === "crimson") {

        heading.style.color = "black";

    } else {

        heading.style.color = "crimson";

    }

}





function toggleTable() {

    const table = document.getElementById("bestSellerTable");

    if (table.style.display === "none") {

        table.style.display = "table";

    } else {

        table.style.display = "none";

    }

}





function showInfo() {

    const info = document.getElementById("extraInfo");

    if (info.style.display === "none") {

        info.style.display = "block";

    } else {

        info.style.display = "none";

    }

}





function changeProductHeadingColor() {

    const heading = document.getElementById("productHeading");

    if (heading.style.color === "darkblue") {

        heading.style.color = "black";

    } else {

        heading.style.color = "darkblue";

    }

}





function togglePriceTable() {

    const table = document.getElementById("priceTable");

    if (table.style.display === "none") {

        table.style.display = "table";

    } else {

        table.style.display = "none";

    }

}





function changeGalleryHeadingColor() {

    const heading = document.getElementById("galleryHeading");

    if (heading.style.color === "purple") {

        heading.style.color = "black";

    } else {

        heading.style.color = "purple";

    }

}





function toggleGalleryMessage() {

    const message = document.getElementById("galleryMessage");

    if (message.style.display === "none") {

        message.style.display = "block";

    } else {

        message.style.display = "none";

    }

}




function validateForm() {

    let fullname = document.getElementById("fullname").value.trim();

    let email = document.getElementById("email").value.trim();

    let password = document.getElementById("password").value.trim();

    let product = document.getElementById("product").value;

    if (fullname === "") {

        alert("Please enter your full name.");

        return false;

    }

    if (email === "") {

        alert("Please enter your email address.");

        return false;

    }

    if (password === "") {

        alert("Please create a password.");

        return false;

    }

    if (product === "") {

        alert("Please select a product.");

        return false;

    }

    alert("🎉 Thank you, " + fullname + "!\n\nYour order has been submitted successfully.\n\nWe appreciate your support for Abonyozz Manga Haven!");

    return true;

}