Feature: Todo List Management

  Scenario: Adding a new todo item
    Given I am on the todo list page
    When I add a new todo "Buy groceries"
    Then I should see "Buy groceries" in the todo list
