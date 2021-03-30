import Model, { attr, belongsTo } from '@ember-data/model';

export default class OrderModel extends Model {
  @attr('string') dateCreation;
  @attr('string') status;
  @belongsTo('user') user;
}
