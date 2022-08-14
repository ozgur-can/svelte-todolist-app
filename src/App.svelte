<script lang="ts">
  import type { ITodo } from "./lib/types";
  import TodoContainer from "./lib/TodoContainer/component.svelte";
  import TodoHeader from "./lib/TodoHeader/component.svelte";
  import TodoAddItem from "./lib/TodoAddItem/component.svelte";
  import TodoList from "./lib/TodoList/component.svelte";
  import { todos as todosJSON } from "./assets/todos.json";

  let todos: ITodo[] = [...todosJSON];

  const onAddHandler = (text: string) => {
    todos = [
      ...todos,
      {
        id: todos.length,
        isCompleted: false,
        text,
      },
    ];
  };
</script>

<TodoContainer>
  <TodoHeader />
  <TodoAddItem {onAddHandler} />
  <TodoList {todos} />
</TodoContainer>
