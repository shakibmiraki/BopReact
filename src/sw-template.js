if ("function" === typeof importScripts) {
  // eslint-disable-next-line no-undef
  importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js");
  // importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js");

  /* global workbox */
  if (workbox) {
    console.log("Workbox is loaded");

    /* injection point for manifest files.  */
    // workbox.precaching.precacheAndRoute([]);
    workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

    /* custom cache rules*/
    // workbox.routing.registerNavigationRoute("/index.html", {
    //   blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
    // });

    //image caching
    workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg|svg)$/,
      new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
          new workbox.expiration.ExpirationPlugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          }),
        ],
      })
    );

    // Font caching
    workbox.routing.registerRoute(
      /\.(?:woff2|woff|ttf)$/,
      new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
          new workbox.expiration.ExpirationPlugin({
            maxEntries: 30,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          }),
        ],
      })
    );

    // JS, CSS caching
    workbox.routing.registerRoute(
      /\.(?:js|css|ico)$/,
      new workbox.strategies.StaleWhileRevalidate({
        cacheName: "static-resources",
        plugins: [
          new workbox.expiration.ExpirationPlugin({
            maxEntries: 60,
            maxAgeSeconds: 20 * 24 * 60 * 60, // 20 Days
          }),
        ],
      })
    );
  } else {
    console.log("Workbox could not be loaded. No Offline support");
  }
}
