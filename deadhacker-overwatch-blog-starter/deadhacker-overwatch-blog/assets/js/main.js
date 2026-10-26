(() => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
    });
  }

  const search = document.querySelector("#post-search");
  const list = document.querySelector("#archive-list");
  if (search && list) {
    const items = Array.from(list.querySelectorAll(".archive-item"));
    const count = document.querySelector("#visible-count");
    const empty = document.querySelector("#search-empty");
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    if (category) search.value = category.replaceAll("-", " ");

    const filter = () => {
      const query = search.value.trim().toLocaleLowerCase();
      let visible = 0;
      items.forEach(item => {
        const haystack = (item.dataset.search || "").toLocaleLowerCase();
        const matches = haystack.includes(query);
        item.hidden = !matches;
        if (matches) visible++;
      });
      if (count) count.textContent = String(visible);
      if (empty) empty.hidden = visible !== 0;
    };
    search.addEventListener("input", filter);
    filter();
  }
})();
