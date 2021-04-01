import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class CatalogueModel extends Model {
  @attr('string') name;
  @belongsTo('section') section;
  @hasMany('product', { inverse: null }) packs;
}
