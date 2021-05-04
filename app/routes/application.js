import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class ApplicationRoute extends Route {
  model() {
    return RSVP.hash({
      searched: null,
    });
  }
}
