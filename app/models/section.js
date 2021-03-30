import Model, { attr, hasMany } from '@ember-data/model';

export default class SectionModel extends Model {
  @attr('string') name;
  @hasMany('product') products;
}
