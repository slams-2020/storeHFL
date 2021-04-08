import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import {action} from '@ember/object';

export default class AbstractRoute extends Route {
  @service userAuth;
  @service router;

  @action logout() {
    this.userAuth.logout();
  }

  redirect() {
    if (!this.userAuth.isAuth) {
      this.transitionTo('index');
    }
  }
}
