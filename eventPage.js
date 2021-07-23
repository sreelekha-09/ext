let menuItem={
    "id":"wikit",
    "title":"search wiki",
    "contexts":["selection"]
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId=="wikit" && clickData.selectionText)
    {
        let wikiUrl="https://www.google.com/search?q=" + encodeURI(clickData.selectionText);
        let createData={
            "url":wikiUrl,
            "type":"popup",
            "top":5,
            "left":5,
            "width":screen.availWidth/2,
            "height":screen.availHeight/2
        };

        chrome.windows.create(createData,function(){});
    }
})