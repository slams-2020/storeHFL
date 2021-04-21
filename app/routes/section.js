import Route from '@ember/routing/route';
import { action } from '@ember/object';
import RSVP from 'rsvp';

export default class SectionRoute extends Route {
  model() {
    return RSVP.hash({
      section: this.store.findAll('section'),
    });
  }

  @action remove(s) {
    s.deleteRecord();
  }
  @action delete(s){
    s.save();
  }
  @action cancelremove(s){
    s.rollbackAttributes();
  }
}
