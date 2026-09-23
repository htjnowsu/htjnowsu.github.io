/* 首页素材依次淡入。图片位于 Hexo 项目的 source/img/。 */
(() => {
  const layers = [
    ["home-paper", "最下侧纸张.png", "", 0.2],
    ["home-poem", "中间文字.png", "首页手写文字", 0.8],
    ["home-book", "左侧书本.png", "", 1.7],
    ["home-book-quote", "左侧书本上方英文.png", "", 2.5],
    ["home-upper-quote", "右侧上方英文.png", "", 3.3],
    ["home-portrait", "右侧最上图案.png", "", 4.1],
    ["home-branch", "右侧植物图案.png", "", 4.9],
    ["home-sticker", "右侧下方英文.png", "", 5.7]
  ];

  function mount() {
    const header = document.querySelector("#page-header.full_page");
    if (!header || header.querySelector(".home-collage")) return;

    const collage = document.createElement("div");
    collage.className = "home-collage";

    for (const [className, fileName, alt, delay] of layers) {
      const image = document.createElement("img");
      image.className = className;
      image.src = `/img/${encodeURIComponent(fileName)}`;
      image.alt = alt;
      image.decoding = "async";
      image.style.setProperty("--enter", `${delay}s`);
      collage.appendChild(image);
    }

    header.appendChild(collage);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount, { once: true });
  } else {
    mount();
  }

  document.addEventListener("pjax:complete", mount);
})();
