(function (window) {
	'use strict';

  // Query caching
  var $mainUI = $('.main, .footer');
  var $todoCount = $('.todo-count strong');
  var $todoList = $('.todo-list');

	var todos = [];

  updateUI();

  // Eventhandler

  // Common
  $('.new-todo').keyup(function($ev){});
  $('.toggle-all').change(function(){});
  $('.clear-completed').click(function(){});

  // Delegated from items
  $todoList.on('change', '.toggle', function(){});
  $todoList.on('click', '.destroy', function(){});
  $todoList.on('dblclick', 'label', function(){});
  $todoList.on('keyup', '.edit', function($ev){});

  // Helper functions
  function initUI() {

    $todoList.empty();
    todos.forEach(function(todo) {
      $todoList.append(createItem(todo));
    });

    updateUI();
  }

  function updateUI() {

    // Show/Hide main and footer
    if (todos.length == 0) {
      $mainUI.addClass('hidden');
    } else {
      $mainUI.removeClass('hidden');
    }
    // Update todo count
    $todoCount.html(todos.length);

  }

  function createItem(todo) {

    var liTpl = $('#todoTpl').html();
    var $li = $(liTpl);

    if (todo.completed) {
      $li.addClass('completed');
      $('.toggle', $li).prop('checked', true).attr('checked','checked');
    }

    $li.attr('data-id', todo.id);
    $('.edit', $li).attr('value', todo.text).val(todo.text);
    $('label', $li).html(todo.text);

    return $li;
  }

})(window);
