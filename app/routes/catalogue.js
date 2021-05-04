import Route from '@ember/routing/route';
import { action, set } from '@ember/object';
import RSVP from 'rsvp';

export default class CatalogueRoute extends Route {
  model() {
    return RSVP.hash({
      hide: true,
      products: this.store.findAll('product', { include: 'packs,section' }),
    });
  }

  @action hide(model) {
    set(model, 'hide', false);
    setTimeout(() => {
      set(model, 'hide', true);
    }, 2000);
  }
}
