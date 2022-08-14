<script lang="ts">
  let todoText: string = "";
  export let onAddHandler: (todoText: string) => void;
</script>

<div class="todoCard__addNewItem">
  <input
    bind:value={todoText}
    class="todoCard__inputBox"
    id="todoCard__inputBox"
    placeholder="Add Item"
  />
  <button
    class="todoCard__addNewItemButton"
    id="todoCard__addNewItemButton"
    on:click={() => {
      onAddHandler(todoText);
      todoText = "";
    }}>+</button
  >
</div>

<style lang="scss">
  @import "./styles.scss";
</style>
