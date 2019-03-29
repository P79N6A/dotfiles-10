getK = function (item){
    return new Promise(resolve => {
      chrome.storage.local.get(item, resolve);
    }).then(result=>result[item]);
}

setK = function (o) {
    return new Promise(resolve => {
      chrome.storage.local.set(o, resolve);
    });
}
