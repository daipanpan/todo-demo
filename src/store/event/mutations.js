import * as mutationType from './mutations_types.js';
import * as func from '../function.js'


export default {
  [mutationType.ADDEVENT] (state, obj) {
    state.count++;
    obj.items.id = state.count;
    state.event.unshift(obj.items);
    func.local.save(state);
  },

  [mutationType.EVENTDONE] (state, obj) {
    for (let i=0; i < state.event.length; i++) {
      if (state.event[i].id === obj.id) {
        state.event[i].type = 2;
        let item = state.event[i];
        state.event.splice(i, 1);
        state.event.unshift(item);
        break;
      }
    }
    func.local.save(state);
  },

  [mutationType.EVENTTODO] (state, obj) {
    for (let i=0; i < state.event.length; i++) {
      if (state.event[i].id === obj.id) {
        state.event[i].type = 1;
        let item = state.event[i];
        state.event.splice(i, 1);
        state.event.unshift(item);
        break;
      }
    }
    func.local.save(state);
  }
}
