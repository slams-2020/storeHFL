import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class ProductsRoute extends Route {
  model() {
    return this.store.findAll('product', { include: 'packs,section' });
  }

  @action remove(p) {
    p.deleteRecord();
  }
  @action delete(p){
    p.save();
  }
  @action cancelremove(p){
    p.rollbackAttributes();
  }
}
