import AppDispatcher from '../../dispatcher/AppDispatcher';
import GlobalConstants from '../../constants/GlobalConstants';
import AppStore from './AppStore';

export default {
  toggleMenu: () => {
    AppDispatcher.dispatch({
      actionType: GlobalConstants.MENU_TOGGLE,
      menuOpen: !AppStore.getMenuState()
    });
  },

  hideMenu: () => {
    AppDispatcher.dispatch({
      actionType: GlobalConstants.MENU_TOGGLE,
      menuOpen: false
    });
  },

  setType: (type) => {
    AppDispatcher.dispatch({
      actionType: GlobalConstants.SET_TYPE,
      type: type
    });
  }
}