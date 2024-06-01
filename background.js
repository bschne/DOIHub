chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: "https://sci-hub.st/" + details.url};
    },
    {
        urls: [
            "*://doi.org/*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);
