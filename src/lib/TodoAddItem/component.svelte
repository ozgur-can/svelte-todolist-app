<script lang="ts">
  export let todoText: string = "";
  export let onAddHandler: (todoText: string) => void;

  function handleKeydown(e: KeyboardEvent) {
    // add task if "enter" pressed
    if (e && e.key === "Enter" && todoText && todoText.length > 0) {
      onAddHandler(todoText);
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

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
    on:click={() => onAddHandler(todoText)}>+</button
  >
</div>

<style lang="scss">
  @import "./styles.scss";
</style>
