import Bun from 'bun';

const server = Bun.serve({
  port: 3000,
  fetch(request) {
    console.log(request);
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === '/') {
      return new Response("Welcome to Bun!");
    } else if (path === '/about') {
      return new Response("This is the about page.");
    } else if (path === '/contact') {
      return new Response("This is the contact page.");
    } else {
      return new Response("Page not found.", { status: 404 });
    }
  },
});

console.log(`Listening on http://localhost:${server.port}`);
