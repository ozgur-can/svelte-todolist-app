<script>
  import { completedCount, count } from "../../stores.js";
  let taskCompletedCount, taskAllCount;

  count.subscribe((value) => (taskAllCount = value));
  completedCount.subscribe((value) => (taskCompletedCount = value));
</script>

<div class="todoCard__header">
  <div>To-do list</div>
  <div>
    <span id="todoCard__completedItemCounter">{taskCompletedCount}</span>/<span
      id="todoCard__itemCounter">{taskAllCount}</span
    >
  </div>
</div>

<style lang="scss">
  @import "./styles.scss";
</style>
