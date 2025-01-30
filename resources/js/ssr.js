import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import ReactDOMServer from 'react-dom/server';
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

createServer(page =>
  createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: name =>
      resolvePageComponent(
        `./${name}.jsx`,
        import.meta.glob("./Pages/**/*.jsx")
      ),
    setup: ({ App, props }) => <App {...props} />,
  }),
)