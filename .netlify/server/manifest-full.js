export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.bd680dd5.js","app":"_app/immutable/entry/app.d3455fe9.js","imports":["_app/immutable/entry/start.bd680dd5.js","_app/immutable/chunks/index.cfd97b44.js","_app/immutable/chunks/singletons.a89b96e9.js","_app/immutable/chunks/index.86ef7dbd.js","_app/immutable/entry/app.d3455fe9.js","_app/immutable/chunks/index.cfd97b44.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
