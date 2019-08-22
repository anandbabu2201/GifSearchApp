import store  from '../store/store';

describe('Store', () => {

  it('check if store is valid and has all reducers', () => {
    expect(store.dispatch).toBeDefined();
    expect(store.subscribe).toBeDefined();
    expect(store.getState).toBeDefined();
    const state = store.getState();
    expect(state.gifState).toBeDefined();
  });
});
