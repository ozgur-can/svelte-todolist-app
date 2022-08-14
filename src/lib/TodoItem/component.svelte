<script lang="ts">
  export let task: import("../types").ITodo;
  export let onDeleteHandler: (taskId: number) => void;

  // INFO: checkbox onchange (alternative usage) for line 15
  // bind:checked={task.isCompleted}
  // const onChange = () => {
  //   task.isCompleted = !task.isCompleted;
  // };
</script>

<li class={task.isCompleted ? "todoCard__item--completed" : "todoCard__item"}>
  <span>{task.text}</span>
  <div class="todoCard__itemButtons">
    <input bind:checked={task.isCompleted} type="checkbox" />
    <button
      class="todoCard__deleteItemButton"
      on:click={() => onDeleteHandler(task.id)}>del</button
    >
  </div>
</li>

<style lang="scss">
  @import "./styles.scss";
</style>
