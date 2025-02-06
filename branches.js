const menuData = [
    { "title": "home", "url": "/" },
    { "title": "producten", "url": "/producten/" },
    { "title": "over ons", "url": "/overons/" },
    { "title": "contact", "url": "/contact/" }
];

function createMenu(menuItems) {
    const ul = document.createElement("ul");

    menuItems.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        
        a.textContent = item.title;
        a.href = item.url;
        
        li.appendChild(a);
        ul.appendChild(li);
    });

    return ul;
}

// Voeg het menu toe aan de body (of een specifieke container)
document.body.appendChild(createMenu(menuData));
