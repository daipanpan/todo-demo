
export default {
  getToDo(states){
    return states.event.filter(function(item){
      return (item.type === 1);
    });
  },
  getDone (states) {
    return states.event.filter(function(item){
      return (item.type === 2);
    });
  }
}
