import Route from '@ember/routing/route';
import RSVP from "rsvp";
import { action } from '@ember/object';

export default class SectionAddRoute extends Route {
  model() {
    return RSVP.hash({
      sections: this.store.findAll('section'),
      section: {},
    });
  }
  @action save(s) {
    let section = this.store.createRecord('section', s);
    section.save().then(() => {
      this.transitionTo('section');
    });
  }
}
