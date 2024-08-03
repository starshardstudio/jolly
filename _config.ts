import {default as lume} from "lume/mod.ts";
import {default as jsx} from "lume/plugins/jsx.ts";


const site = lume({
	prettyUrls: false,
})

site.use(jsx({}))

site.copy("_static")

site.data("styles", ["/_static/styles/base.css"])
site.data("lang", "it")
site.data("date", "Git Last Modified")

site.data("site_title", "Formato Jolly · Star Shard Studio")

site.data("layout", "base.tsx", "/index.md")
site.data("tags", ["index"], "/index.md")

export default site;
