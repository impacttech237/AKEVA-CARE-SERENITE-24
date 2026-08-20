export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/contact" || url.pathname === "/contact/") {
      url.pathname = "/demander-un-devis";
      return Response.redirect(url, 301);
    }

    return env.ASSETS.fetch(request);
  },
};
