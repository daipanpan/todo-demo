const TODOLIST = 'todoListAA';

const localEvent = function (item) {
  this.get = function () {
    return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : '';
  },
  this.save = function (obj) {
    localStorage.setItem(item, JSON.stringify(obj))
  },
  this.clear = function () {
    localStorage.removeItem(item);
  }
};

export const local = new localEvent('todoListAA');