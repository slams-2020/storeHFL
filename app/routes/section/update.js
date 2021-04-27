import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class SectionUpdateRoute extends Route {
  model(params) {
    return RSVP.hash({
      sections: this.store.findAll('section'),
      section: this.store.findRecord('section', params.section_id),
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
