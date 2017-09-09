const TODOLIST = 'todoListXX'

export default {
  fetch: (item) => {
    return JSON.parse(window.localStorage.getItem(TODOLIST) || '[]');
  },
  save: (item) => {
    return window.localStorage.setItem(TODOLIST, JSON.stringify(item));
  }
}
