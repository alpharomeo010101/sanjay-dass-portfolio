(function () {
  var CATEGORY_LABELS = {
    "digital-art": "Digital Art",
    "handmade-art": "Handmade Art",
    "id-cards": "ID Cards",
    "labels": "Labels",
    "menu-cards": "Menu Cards",
    "posters": "Posters",
    "thumbnails": "Thumbnails",
    "visiting-cards": "Visiting Cards",
    "other-projects": "Other Projects"
  };

  function renderGallery(container, items) {
    container.innerHTML = "";
    items.forEach(function (item, idx) {
      var label = item.title || CATEGORY_LABELS[item.category] || item.category;
      var variant = idx % 3 === 1 ? " copper" : idx % 3 === 2 ? " dark-slot" : "";
      var article = document.createElement("article");
      article.className = "slot has-image" + variant;

      var img = document.createElement("img");
      img.src = item.image;
      img.alt = label;
      article.appendChild(img);

      var caption = document.createElement("div");
      caption.className = "slot-caption";

      var no = document.createElement("span");
      no.className = "slot-no";
      no.textContent = String(idx + 1).padStart(2, "0");
      caption.appendChild(no);

      var h3 = document.createElement("h3");
      h3.textContent = label;
      caption.appendChild(h3);

      if (item.description) {
        var p = document.createElement("p");
        p.textContent = item.description;
        caption.appendChild(p);
      }

      article.appendChild(caption);
      container.appendChild(article);
    });
  }

  function init(items) {
    var containers = document.querySelectorAll(".gallery[data-category], .gallery[data-categories]");
    containers.forEach(function (container) {
      var raw = container.getAttribute("data-categories") || container.getAttribute("data-category") || "";
      var cats = raw.split(",").map(function (s) { return s.trim(); }).filter(Boolean);
      var filtered = items.filter(function (item) { return cats.indexOf(item.category) !== -1; });
      // Only replace the placeholder slots once real work items exist for this section.
      if (filtered.length > 0) {
        renderGallery(container, filtered);
      }
    });
  }

  fetch("content/work.json", { cache: "no-store" })
    .then(function (res) { return res.json(); })
    .then(function (data) { init(data.items || []); })
    .catch(function () {
      // If the JSON can't be loaded (e.g. opened as a local file), keep the placeholder slots.
    });
})();
