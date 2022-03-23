"use strict";

// The name of your game, no spaces or special characters.
var name = "Karyanuri Sehat";

// The version of the cache, changing this will force everything to be cached
// again.
var version = "0.2.0";

var files = [

	// General Files
	"manifest.json",

	// HTML Files
	"index.html",

	// Style Sheets
	"style/font-awesome.min.css",
	"style/kayros.min.css",
	"style/animate.min.css",
	"style/csshake.min.css",
	"style/monogatari.css",
	"style/main.css",

	// JavaScript Files
	"js/polyfill.min.js",
	"js/particles.min.js",
	"js/jquery.min.js",
	"js/artemis.min.js",
	"js/typed.min.js",
	"js/typed.min.js.map",
	"js/monogatari.js",
	"js/strings.js",
	"js/options.js",
	"js/storage.js",
	"js/script.js",
	"js/main.js",

	// Fonts
	"fonts/fontawesome-webfont.eot",
	"fonts/fontawesome-webfont.svg",
	"fonts/fontawesome-webfont.ttf",
	"fonts/fontawesome-webfont.woff",
	"fonts/fontawesome-webfont.woff2",
	"fonts/FontAwesome.otf",

	// Scene Images
	"img/scenes/rs.jpeg",

	// Character Images
	"img/characters/Sari/angry.png",
	"img/characters/Sari/curious.png",
	"img/characters/Sari/happy.png",
	"img/characters/Sari/normal.png",
	"img/characters/Sari/surprised.png",
	"img/characters/Sari/worried.png",

	// UI Images
	"img/ui/main-screen.svg"
];

self.addEventListener("install", function (event) {
	event.waitUntil(
		caches.open(`${name}-v${version}`).then(function (cache) {
			return cache.addAll(files);
		})
	);
});

self.addEventListener("activate", function (event) {
	event.waitUntil(
		caches.keys().then(function (keyList) {
			return Promise.all(keyList.map(function (key) {
				if (key !== `${name}-v${version}`) {
					return caches.delete(key);
				}
			}));
		})
	);

	return self.clients.claim();
});

self.addEventListener("fetch", function (event) {
	if (event.request.method !== "GET") {
		return;
	}

	event.respondWith(
		caches.match(event.request).then(function (cached) {
			var networked = fetch(event.request)
							.then(fetchedFromNetwork, unableToResolve)
							.catch(unableToResolve);
			return cached || networked;

			function fetchedFromNetwork (response) {
				var cacheCopy = response.clone();

				caches.open(`${name}-v${version}`).then(function add (cache) {
					cache.put(event.request, cacheCopy);
				});

				return response;
			}

			function unableToResolve () {
				return new Response("<h1>Service Unavailable</h1>", {
					status: 503,
					statusText: "Service Unavailable",
					headers: new Headers({
						"Content-Type": "text/html"
					})
				});
			}
		})
	);
});
