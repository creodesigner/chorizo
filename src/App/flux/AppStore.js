import AppDispatcher from '../../dispatcher/AppDispatcher';
import GlobalConstants from '../../constants/GlobalConstants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';
let _menuState = false;
let _type = null;

function setMenuState(menuState) {
  _menuState = menuState;
}

function setType(type) {
  _type = type;
}

class AppStoreClass extends EventEmitter {
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }

  getMenuState() {
    return _menuState;
  }

  getType() {
    return _type;
  }
}

const AppStore = new AppStoreClass();

AppStore.dispatchToken = AppDispatcher.register(action => {
  switch(action.actionType) {
    case GlobalConstants.MENU_TOGGLE:
      setMenuState(action.menuOpen);
      AppStore.emitChange();
      break

    case GlobalConstants.SET_TYPE:
      setType(action.type);
      AppStore.emitChange();
      break

    default:
  }
});

export default AppStore;
