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
      img.style.cursor = "zoom-in";
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
      article.addEventListener("click", function () {
        openLightbox(item.image, label, item.description || "");
      });
      container.appendChild(article);
    });
  }

  var lightboxEl = null;

  function buildLightbox() {
    var overlay = document.createElement("div");
    overlay.className = "work-lightbox";
    overlay.innerHTML =
      '<button type="button" class="work-lightbox-close" aria-label="Close">&times;</button>' +
      '<figure><img alt=""><figcaption></figcaption></figure>';
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay || e.target.classList.contains("work-lightbox-close")) {
        closeLightbox();
      }
    });
    document.body.appendChild(overlay);
    return overlay;
  }

  function openLightbox(src, title, description) {
    if (!lightboxEl) lightboxEl = buildLightbox();
    var img = lightboxEl.querySelector("img");
    var caption = lightboxEl.querySelector("figcaption");
    img.src = src;
    img.alt = title || "";
    caption.textContent = description ? title + " — " + description : title || "";
    lightboxEl.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightboxEl) return;
    lightboxEl.classList.remove("open");
    document.body.style.overflow = "";
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });

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
