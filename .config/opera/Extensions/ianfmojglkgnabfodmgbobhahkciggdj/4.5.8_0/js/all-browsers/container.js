function loadframe () {
  var getZoom = function () {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('version', '1.1');
    document.body.appendChild(svg);
    var zoom = svg.currentScale;
    document.body.removeChild(svg);
    zoom = Math.round(zoom * 100) / 100;
    return zoom;
  };

  var browserZoom = getZoom() || 1;
  if (browserZoom !== 1 && browserZoom !== 0) {
    document.body.style.zoom = 1 / browserZoom;
  }

  chrome.tabs.query({'currentWindow': true, 'active': true}, function (tabArray) {
    if (tabArray) {
      document.getElementById("ifr").src = "sw.html?zoom=" + browserZoom + "&site=" + encodeURIComponent(tabArray[0].url);
    }
  });
}

document.addEventListener('DOMContentLoaded', loadframe());