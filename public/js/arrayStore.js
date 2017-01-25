(function (window) {
    'use strict';

    // Class Todo
    // Properties: id: number, text: string, completed: boolean

    var store = {
        getAll: getAll,
        create: create,
        update: update,
        delete: remove
    };

    // Export
    window.todo = {
        store: store
    };
    
    // Implementation
    var todos = [];
    var maxId = 0;

    // cb: function (todos: Todo[])
    function getAll(cb) {
        cb(todos);
    }

    // txt: string
    // cb: function (todo: Todo)
    function create(txt,cb) {
        var todo = {
            id: ++maxId,
            text: txt,
            completed: false
        };
        todos.push(todo);
        cb(todo);
    }

    function update(todo,cb) {
        cb(todo);
    }

    function remove(todo,cb) {
        var foundIx = -1;
        todos.filter(function (elt, ix) {
            if (elt.id === todo.id) {
                foundIx = ix;
            }
            return false;
        });
        todos.splice(foundIx, 1);
        cb();
    }

})(window);