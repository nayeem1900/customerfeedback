import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout/Layout';


createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    const page = pages[`./Pages/${name}.jsx`];
    console.log('Available Pages:', pages);
    if (!page) {
        console.error(`Page not found: ./Pages/${name}.jsx`);
        throw new Error(`Page not found: ./Pages/${name}.jsx`);
      }

    page.default.layout = page.default.layout || ((page) => <Layout {...page.props}>{page}</Layout>);
    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})
