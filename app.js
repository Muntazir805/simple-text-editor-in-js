var textarea = document.getElementById("textarea");

var textColor = document.getElementById("textColor");

var backgroundColor = document.getElementById("backgroundColor");

var characters = document.getElementById("characters");

var words = document.getElementById("words");

var defaultSize = 16;


// Main function
function SetOp(event) {

    if (event == "bold") {

        textarea.style.fontWeight = "bold";

    }

    else if (event == "italic") {

        textarea.style.fontStyle = "italic";

    }

    else if (event == "underline") {

        textarea.style.textDecoration = "underline";

    }

    else if (event == "increase") {

        defaultSize = defaultSize + 1;

        textarea.style.fontSize = defaultSize + "px";

    }

    else if (event == "decrease") {

        if (defaultSize > 8) {

            defaultSize = defaultSize - 1;

            textarea.style.fontSize = defaultSize + "px";

        }

    }

    else if (event == "left") {

        textarea.style.textAlign = "left";

    }

    else if (event == "center") {

        textarea.style.textAlign = "center";

    }

    else if (event == "right") {

        textarea.style.textAlign = "right";

    }

    else if (event == "color") {

        textarea.style.color = textColor.value;

    }

    else if (event == "background") {

        textarea.style.backgroundColor = backgroundColor.value;

    }

    else if (event == "copy") {

        textarea.select();

        navigator.clipboard.writeText(textarea.value);

        alert("Text copied!");

    }

    else if (event == "clear") {

        textarea.value = "";

        updateCount();

    }

    else if (event == "undo") {

        document.execCommand("undo");

    }

    else if (event == "redo") {

        document.execCommand("redo");

    }
}


// Character and word count
textarea.addEventListener("input", updateCount);


function updateCount() {

    var text = textarea.value;

    characters.innerText = text.length;

    var trimmedText = text.trim();

    if (trimmedText == "") {

        words.innerText = 0;

    }

    else {

        words.innerText = trimmedText.split(/\s+/).length;

    }
}