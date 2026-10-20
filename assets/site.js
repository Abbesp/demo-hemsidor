(function () {
  document.querySelectorAll("[data-nav]").forEach((nav) => {
    const btn = nav.querySelector("[data-nav-btn]");
    const menu = nav.querySelector("[data-menu]");
    const current = nav.querySelector("[data-current]");
    const hint = nav.querySelector("[data-hint]");
    const panels = document.querySelectorAll("[data-panel]");
    function show(id) {
      panels.forEach((panel) => {
        panel.hidden = panel.dataset.panel !== id;
      });
      nav.querySelectorAll("[data-go]").forEach((item) => {
        item.classList.toggle("on", item.dataset.go === id);
      });
      const item = nav.querySelector(`[data-go="${id}"]`);
      if (current && item) current.textContent = item.dataset.label;
      if (hint && item) hint.textContent = item.dataset.hint;
      menu.hidden = true;
      btn.setAttribute("aria-expanded", "false");
    }
    btn.addEventListener("click", () => {
      const open = menu.hidden;
      menu.hidden = !open;
      btn.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("[data-go]").forEach((item) => {
      item.addEventListener("click", () => show(item.dataset.go));
    });
    document.addEventListener("click", (event) => {
      if (!nav.contains(event.target)) {
        menu.hidden = true;
        btn.setAttribute("aria-expanded", "false");
      }
    });
    document.querySelectorAll("[data-jump]").forEach((el) => {
      el.addEventListener("click", (event) => {
        event.preventDefault();
        show(el.dataset.jump);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
    const start = nav.dataset.start || nav.querySelector("[data-go]").dataset.go;
    show(start);
  });

  document.querySelectorAll("[data-picks]").forEach((bar) => {
    const target = document.querySelector(bar.dataset.picks);
    bar.querySelectorAll("[data-pick]").forEach((button) => {
      button.addEventListener("click", () => {
        const cat = button.dataset.pick;
        bar.querySelectorAll("[data-pick]").forEach((item) => item.classList.toggle("on", item === button));
        target.querySelectorAll("[data-cat]").forEach((row) => {
          row.hidden = cat !== "alla" && row.dataset.cat !== cat;
        });
      });
    });
  });

  const toggle = document.querySelector("[data-insight-toggle]");
  if (toggle) {
    let on = true;
    toggle.addEventListener("click", () => {
      on = !on;
      document.querySelectorAll(".insight").forEach((node) => {
        node.hidden = !on;
      });
      toggle.textContent = on ? "Dölj inblickar" : "Visa inblickar";
    });
  }

  document.querySelectorAll("[data-faq]").forEach((root) => {
    const items = [...root.querySelectorAll("[data-q]")];
    function open(index) {
      items.forEach((item, i) => {
        const answer = item.querySelector("[data-a]");
        const mark = item.querySelector("[data-mark]");
        const on = i === index;
        answer.hidden = !on;
        if (mark) mark.textContent = on ? "–" : "+";
      });
    }
    items.forEach((item, i) => {
      item.querySelector("button").addEventListener("click", () => {
        const answer = item.querySelector("[data-a]");
        open(answer.hidden ? i : -1);
      });
    });
    open(0);
  });

  const range = document.querySelector("[data-compare]");
  if (range) {
    const after = document.querySelector("[data-after]");
    const hair = document.querySelector("[data-hair]");
    const paint = () => {
      const pos = range.value;
      after.style.clipPath = `inset(0 ${100 - pos}% 0 0)`;
      hair.style.left = pos + "%";
    };
    range.addEventListener("input", paint);
    paint();
  }
})();
