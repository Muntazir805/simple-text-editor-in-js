# Simple JavaScript Text Editor

A simple and responsive **Text Editor** built using **HTML, CSS, and JavaScript**.

This project was created to practice basic JavaScript concepts such as DOM manipulation, functions, conditions, events, variables, and browser APIs.

## Features

* Bold text
* Italic text
* Underline text
* Increase font size
* Decrease font size
* Change text color
* Change background color
* Left text alignment
* Center text alignment
* Right text alignment
* Copy text
* Clear text
* Undo
* Redo
* Character counter
* Word counter
* Responsive design for mobile, tablet, and desktop

## Technologies Used

* HTML5
* CSS3
* JavaScript

## Project Structure

```text
text-editor/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How It Works

The editor uses a `<textarea>` for entering and editing text.

JavaScript controls the editor through a single `SetOp()` function.

For example:

```javascript
function SetOp(event) {

    if (event == "bold") {
        textarea.style.fontWeight = "bold";
    }

    else if (event == "italic") {
        textarea.style.fontStyle = "italic";
    }

}
```

Different button clicks send different values to the function:

```html
<button onclick="SetOp('bold')">Bold</button>

<button onclick="SetOp('italic')">Italic</button>
```

The function then applies the required operation to the textarea.

## Text Size

The font size is controlled using a JavaScript variable:

```javascript
var defaultSize = 16;
```

When the user clicks the increase button:

```javascript
defaultSize = defaultSize + 1;

textarea.style.fontSize = defaultSize + "px";
```

The decrease button reduces the size while preventing it from becoming too small.

## Color Controls

The project uses HTML color inputs:

```html
<input type="color" id="textColor">
```

JavaScript gets the selected color using:

```javascript
textColor.value
```

and applies it to the textarea:

```javascript
textarea.style.color = textColor.value;
```

The same approach is used for the background color.

## Copy Feature

The Copy button selects the textarea content and copies it to the clipboard:

```javascript
textarea.select();

navigator.clipboard.writeText(textarea.value);
```

## Word and Character Counter

The editor automatically counts characters and words whenever the user types.

The `input` event is used:

```javascript
textarea.addEventListener("input", updateCount);
```

Characters are counted using:

```javascript
text.length
```

Words are counted by separating the text using whitespace:

```javascript
trimmedText.split(/\s+/).length
```

## Responsive Design

The editor is designed to work on:

* Desktop
* Laptop
* Tablet
* Mobile devices

CSS media queries are used to adjust the toolbar, buttons, textarea, and layout for smaller screens.

## Learning Concepts Practiced

This project helped practice:

* Variables
* Functions
* `if...else if`
* DOM selection
* `getElementById()`
* `.value`
* `.innerText`
* `.style`
* Event listeners
* `input` events
* String methods
* `split()`
* `trim()`
* Regular expressions
* Browser Clipboard API
* Basic responsive CSS

## How to Run

1. Download or clone the project.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Start typing and use the toolbar to edit the text.

## Future Improvements

Possible improvements for a future version:

* Font family selection
* Font size dropdown
* Dark/light mode
* Download text as a `.txt` file
* Save text using `localStorage`
* Load saved documents
* Reset formatting button
* Character limit
* More text alignment options
* Keyboard shortcuts

## Author

**Muntazir Hussain**

Learning and building projects with **HTML, CSS, and JavaScript** as part of my journey toward becoming a **MERN Stack Developer**.
