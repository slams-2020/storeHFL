import Route from '@ember/routing/route';

export default class CatalogueRoute extends Route {
  model(){
    return this.store.findAll('product',{include:'packs,section'});
  }
}
