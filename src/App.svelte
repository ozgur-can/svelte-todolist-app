<script lang="ts">
  import type { ITodo } from "./lib/types";
  import TodoContainer from "./lib/TodoContainer/component.svelte";
  import TodoHeader from "./lib/TodoHeader/component.svelte";
  import TodoList from "./lib/TodoList/component.svelte";
  import { todos as todosJSON } from "./assets/todos.json";
  let todos: ITodo[] = [...todosJSON];
</script>

<TodoContainer>
  <TodoHeader />
  <TodoList {todos} />
</TodoContainer>
