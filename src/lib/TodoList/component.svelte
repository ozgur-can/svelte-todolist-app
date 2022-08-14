<script lang="ts">
  import { onMount } from "svelte";
  import type { ITodo } from "../types";
  import TodoItem from "../TodoItem/component.svelte";
  import TodoAddItem from "../TodoAddItem/component.svelte";
  import { completedCount, count } from "../../stores";

  onMount(() => {
    count.set(todos.length);
    const completedTasks = todos.filter((task) => task.isCompleted === true);
    completedCount.set(completedTasks.length);
  });

  export let todos: ITodo[] = [];
  let todoText = "";

  const onDeleteHandler = (id: number) => {
    if (!todos || (todos && todos.length === 0)) return;
    else {
      // update counter
      count.update((n) => n - 1);

      // check isCompleted prop from selected task
      const isCompleted = todos.find(
        (item) => item.id === id && item.isCompleted
      );

      // update counter
      if (isCompleted) {
        completedCount.update((n) => n - 1);
      }

      // delete todo with id
      todos = todos.filter((item) => item.id !== id);
    }
  };

  const onAddHandler = () => {
    if (!todos || todoText === "") return;
    else {
      // update todo array
      todos = [
        ...todos,
        {
          id: todos.length,
          isCompleted: false,
          text: todoText,
        },
      ];
      // clear input
      todoText = "";
      // update counter
      count.update((n) => n + 1);
    }
  };
</script>

<!-- usage 1 -->
<!-- <TodoAddItem {onAddHandler} bind:todoText={todoText} /> -->

<!-- usage 2 -->
<TodoAddItem {onAddHandler} bind:todoText />
<ul class="todoCard__list" id="todoCard__list">
  {#each todos as todo}
    <TodoItem task={todo} {onDeleteHandler} />
  {/each}
</ul>

<style lang="scss">
  @import "./styles.scss";
</style>
