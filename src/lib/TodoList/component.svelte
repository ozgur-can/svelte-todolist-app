<script lang="ts">
  import type { ITodo } from "../types";
  import TodoItem from "../TodoItem/component.svelte";
  export let todos: ITodo[] = [];

  const onDeleteHandler = (id: number) => {
    if (todos && todos.length === 0) return;
    else {
      todos = todos.filter((item) => item.id !== id);
    }
  };
</script>

<ul class="todoCard__list" id="todoCard__list">
  {#each todos as todo}
    <TodoItem task={todo} {onDeleteHandler} />
  {/each}
</ul>

<style lang="scss">
  @import "./styles.scss";
</style>
