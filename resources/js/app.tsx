import '../css/app.css'
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import Mainlayout from './layouts/mainlayout';

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./pages/**/*.tsx', { eager: true });
        let page :any =pages[`./pages/${name}.tsx`];
        page.default.layout=page.default.layout||((page: any)=><Mainlayout children={page}></Mainlayout>)
        return page;
    },
   //  resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});