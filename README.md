# Tab Functionality

A simple tabbed interface built with HTML, CSS, and JavaScript. It lets users switch between multiple content panels while highlighting the active tab and showing different types of content, including text and an image.

## Features

- Four interactive tabs: Tab1, Tab2, Tab3, and Tab4
- Dynamic switching between tab content panels
- Active tab styling with a clean modern layout
- Lightweight project with no framework or build setup required
- Includes an image-based panel for visual content

## Project Structure

```text
tabFunctionality/
├── index.html
├── style.css
├── script.js
├── Images/
│   └── Spider.jpeg
├── README.md
└── .gitignore (if present)
```

## How to Run

1. Open the project folder in your browser.
2. Double-click `index.html` or serve the project with a local static server.
3. Click on the tabs to switch the visible content.

Example using a simple local server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Files Overview

- `index.html` – page structure and tab buttons/content panels
- `style.css` – page styling and active tab appearance
- `script.js` – JavaScript logic to switch tabs when clicked
- `Images/Spider.jpeg` – image used in the third tab

## Customization

To change the tab labels or content:

- Edit the button text and panel content in `index.html`
- Update the tab classes and `data-tab` values if needed
- Adjust visual styling in `style.css`

## License

This project is provided for educational and demonstration purposes.
