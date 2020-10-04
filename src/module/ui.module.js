const DRAWER_OPEN = 'DRAWER_OPEN';

export const drawerOpen = () => ({
  type: DRAWER_OPEN,
});

const initialState = {
  isDrawerOpen: false,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DRAWER_OPEN:
      return {
        isDrawerOpen: !state.isDrawerOpen,
      };
    default:
      return { ...state };
  }  
}
