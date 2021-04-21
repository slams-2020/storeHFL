import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class SectionUpdateRoute extends Route {
  model() {
    return RSVP.hash({
      sections: this.store.findAll('section'),
    });
  }
  @action save(section) {
    section.save().then(() => {
      this.transitionTo('section');
    });
  }
  renderTemplate(){
    this.render('section.add');
  }
}
