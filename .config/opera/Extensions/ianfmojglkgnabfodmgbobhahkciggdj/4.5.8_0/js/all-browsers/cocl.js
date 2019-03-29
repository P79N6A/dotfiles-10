
function findParent(el, condition) {
  do {
    if (el == document || el == document.body)
      return null;
    if (condition.call(this, el)) {
      return el;
    }
  } while (el = el.parentElement);
  return null;
}

function toArray(o) {
  return Array.prototype.slice.call(o);
}

if (window.location.href.includes("facebook.com")) {
  function getHrefRecursive(el) {
    if (el.tagName.toLowerCase() === "a") {
      return el;
    } else {
      if (el.parentNode && el.parentNode !== document) {
        return getHrefRecursive(el.parentNode);
      } else {
        return null;
      }
    }
  }

  function storySelector(el) {
    return findParent(el, el=>el.getAttribute("id") && el.getAttribute("id").match(/story_id/gi));
  }


  function findAncestor(el) {
    el = storySelector(el);
    if (el && el.querySelectorAll("span.timestampContent").length == 0) {
      return el;
    } else {
      return null;
    }
  }

  function egoist(el) {
    return findParent(el, el=>el.classList.contains("ego_section"));
  }

  function findPredecessor(el) {
    el = egoist(el);
    return el || null;
  }
  let checker = function (event, origin) {
    try {
      let reffel = getHrefRecursive(event.target);
      if (reffel) {
        var reff       = reffel.getAttribute("href");
        origin["href"] = reff;
        if (reff.includes("is_sponsored]=1") || reff.includes("ft[tn]=")) {
          origin["status"] = 16;
        } else if (findPredecessor(event.target)) {
          origin["status"] = 13;
        } else if (findAncestor(event.target)) {
          origin["status"] = 12;
        }
        if (reffel.getAttribute("target") && "_blank" === reffel.getAttribute("target"))
          origin.dixi = true;
        chrome.runtime.sendMessage(origin);

      }
    } catch (e) {}
  }
  document.addEventListener("click", function(event) {
    checker(event, { dixi: !!event.ctrlKey });
  }, true);
  document.addEventListener('contextmenu', function(event) {
    checker(event, { dixi: true });
    return false;
  }, false);
  document.addEventListener("auxclick", function(event) {
    checker(event, { dixi: true });
  });
}
