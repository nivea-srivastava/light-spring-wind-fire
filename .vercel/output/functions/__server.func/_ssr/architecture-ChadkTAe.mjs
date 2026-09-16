import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/architecture-ChadkTAe.js
var import_jsx_runtime = require_jsx_runtime();
function ArchitecturePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-wash text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "bg-paper border-b border-hair",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "listing-wrap h-16 flex items-center justify-between",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "font-semibold text-rausch",
						children: "← Casa Aurora"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-semibold",
						children: "Architecture"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/architecture.svg",
						download: true,
						className: "text-sm underline",
						children: "Download SVG"
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "listing-wrap py-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-mute max-w-3xl mb-8",
				children: "High-level scaling strategy for a production vacation-rental marketplace — frontend, backend, storage, search, and deployment — with a note on how this listing-page clone maps onto that system."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-paper rounded-card shadow-card overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/architecture.svg",
					alt: "Production vacation-rental marketplace architecture diagram covering clients, edge delivery, frontend scale, backend services, data and search, the booking path, and deployment.",
					className: "w-full h-auto"
				})
			})]
		})]
	});
}
//#endregion
export { ArchitecturePage as component };
