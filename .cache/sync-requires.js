const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\projetos-gatsby\\hellow-world\\.cache\\dev-404-page.js"))),
  "component---src-layouts-blog-post-layout-js": hot(preferDefault(require("C:\\projetos-gatsby\\hellow-world\\src\\layouts\\blogPostLayout.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\projetos-gatsby\\hellow-world\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("C:\\projetos-gatsby\\hellow-world\\src\\pages\\about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("C:\\projetos-gatsby\\hellow-world\\src\\pages\\contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\projetos-gatsby\\hellow-world\\src\\pages\\index.js"))),
  "component---src-pages-text-js": hot(preferDefault(require("C:\\projetos-gatsby\\hellow-world\\src\\pages\\text.js")))
}

