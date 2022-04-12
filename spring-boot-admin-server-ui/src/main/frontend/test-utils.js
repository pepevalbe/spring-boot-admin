import {render as tlRender} from '@testing-library/vue';
import components from '@/components';
import i18n from '@/i18n';
import router from '@/router';
import views from '@/views';
import ViewRegistry from '@/viewRegistry';

export const render = (testComponent, options) => {
  const viewRegistry = new ViewRegistry();
  views.forEach(view => view.install({viewRegistry}));

  const sbaConfigRoutes = ['/about/**', '/applications/**', '/instances/**',
    '/journal/**', '/wallboard/**', '/external/**'];

  const mergedOptions = {
    ...options,
    global: {
      plugins: [i18n, router(viewRegistry.routes, sbaConfigRoutes)],
      stubs: ['font-awesome-icon'],
      components: components.getAsMap()
    },
  };

  return tlRender(testComponent, mergedOptions);
}
