let menuItem={
    "id":"googleit",
    "title":"google it",
    "contexts":["selection"]
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId=="googleit" && clickData.selectionText)
    {
        let googleUrl="https://www.google.com/search?q=" + encodeURI(clickData.selectionText);
        let createData={
            "url":googleUrl,
            "type":"popup",
            "top":5,
            "left":5,
            "width":screen.availWidth/2,
            "height":screen.availHeight/2
        };

        chrome.windows.create(createData,function(){});
    }
})
