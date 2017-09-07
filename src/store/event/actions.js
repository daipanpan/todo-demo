export default {
    addevent: ({commit}, param) => commit('ADDEVENT', {items: param}),
    eventdone: ({commit}, param) => commit('EVENTDONE', {id: param}),
    eventtodo: ({commit}, param) => commit('EVENTTODO', {id: param}),
    eventcancel: ({commit}, param) => commit('EVENTCANCEL', {id: param}),
    delevent: ({commit}, param) => commit('DELEVENT', param),
}