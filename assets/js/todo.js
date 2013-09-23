var todoApp = angular.module('todoApp', []);

todoApp.controller('TodoController', function($scope, $http) {

    $scope.todos = [];

    // Get all todos
    $http.get('/todo')
        .success(function(todos) {
            $scope.loaded = true;
            $scope.todos = todos;
        }).error(function(err) {
            // Alert if there's an error
            alert(err);
        });

    $scope.addTodo = function(title) {

        if($.trim(title).length === 0){
            ctrl.$setValidity('newTodoTitle', false);
            return;
        }

        $http.post('/todo', {
            title: title
        }).success(function(todo) {
                $scope.newTodoTitle = '';
                $scope.todos.push(todo);
            }).error(function(err) {
                // Alert if there's an error
                return alert(err.message || "an error occurred");
            });
    };

    $scope.changeCompleted = function(todo) {
        // Update the todo
        $http.put('/todo/' + todo.id, {
            completed: todo.completed
        }).error(function(err) {
                return alert(err.message || (err.errors && err.errors.completed) || "an error occurred");
            });
    };

    $scope.removeCompletedItems = function() {
        $http.get('/todo', {
            params: {
                completed: true
            }
        }).success(function(todos) {
                todos.forEach(function(t) { deleteTodo(t); });
            });
    };

    function deleteTodo(todo) {
        $http.delete('/todo/' + todo.id, {
            params: {
                completed: true
            }
        }).success(function() {
                // Find the index of an object with a matching id
                var index = $scope.todos.indexOf(
                    $scope.todos.filter(function(t) {
                        return t.id === todo.id;
                    })[0]);

                if (index !== -1) {
                    $scope.todos.splice(index, 1);
                }
            }).error(function(err) {
                alert(err.message || "an error occurred");
            });
    }

});