<script lang="ts">
  import { completedCount } from "../../stores";

  export let task: import("../types").ITodo;
  export let onDeleteHandler: (taskId: number) => void;

  // INFO: checkbox onchange (alternative usage) for line 15
  // bind:checked={task.isCompleted}
  // const onChange = () => {
  //   task.isCompleted = !task.isCompleted;
  // };

  const onCheckBoxChange = () => {
    // update counters
    if (task.isCompleted) {
      completedCount.update((n) => n + 1);
    } else {
      completedCount.update((n) => n - 1);
    }
  };
</script>

<li class={task.isCompleted ? "todoCard__item--completed" : "todoCard__item"}>
  <span>{task.text}</span>
  <div class="todoCard__itemButtons">
    <input
      bind:checked={task.isCompleted}
      type="checkbox"
      on:change={onCheckBoxChange}
    />
    <button
      class="todoCard__deleteItemButton"
      on:click={() => onDeleteHandler(task.id)}>del</button
    >
  </div>
</li>

<style lang="scss">
  @import "./styles.scss";
</style>
