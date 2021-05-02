import Route from '@ember/routing/route';
import RSVP from "rsvp";
import { action } from '@ember/object';

export default class SectionDeleteRoute extends Route {
  model() {
    return RSVP.hash({
      section: this.store.findAll('section'),
    });
  }
  @action Delete(d){
    d.save();
  }
  @action cancelRemove(d){
    d.rollbackAttributes();
  }
}
