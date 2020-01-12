import {observable } from 'mobx';

class HomeScreenStore{
  @observable property = '';

  @action setProperty(newProperty: string) {
    this.property = newProperty;
  }
}

const homeScreenStore = new HomeScreenStore();
export default homeScreenStore;