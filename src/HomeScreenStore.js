import {observable, action } from "mobx";

class HomeScreenStore{

  
  @observable  
  text = 1;

  @action
  updateText = () => {
    this.text = this.text+1;
  }
}
export default new HomeScreenStore();