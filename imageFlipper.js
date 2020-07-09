browser.menus.create({
    id: "reset",
    title: "Reset",
    contexts: ["image"],
});

browser.menus.create({
    id: "neg90deg",
    title: "Left",
    contexts: ["image"],
});

browser.menus.create({
    id: "90deg",
    title: "Right",
    contexts: ["image"],
});

browser.menus.create({
    id: "180deg",
    title: "Flip",
    contexts: ["image"],
});


const rotate = (tabId, info, deg) => {
    browser.tabs.executeScript(tabId, {
        code: "browser.menus.getTargetElement(" + info.targetElementId +").style.transform='rotate("+deg+"deg)'",
    });
}

browser.menus.onClicked.addListener((info, tab) => {
    switch (info.menuItemId) {
        case "reset":
            rotate(tab.id, info, 0);
            break;
        case "90deg":
            rotate(tab.id, info, 90);
            break;
        case "neg90deg":
            rotate(tab.id, info, 270);
            break;
        case "180deg":
            rotate(tab.id, info, 180);
            break;
    }
});
