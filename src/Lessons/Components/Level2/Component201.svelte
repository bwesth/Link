<script>
  import app from "./App.js";
  import box from "./Box.js";

  let displayedContent = app;
</script>

<style>
  .wrapper {
  }
  .code-area {
    height: 100%;
    width: 40%;
    padding: 5%;
    background-color: #676778;
    color: #40b3ff;
  }
  input {
    width: 20%;
    background-color: #8d8da5;
    color: #40b3ff;
    margin: 0;
    border: 0;
  }
</style>

<h2>Svelte Components: Slots</h2>
<span>
  <button on:click={() => (displayedContent = app)}>App.svelte</button>
  <button on:click={() => (displayedContent = box)}>Box.svelte</button>
</span>

<br />
<div class="code-area">
  {#each displayedContent as line, index}
    <code>{index} &nbsp {line}</code>
    <br />
  {/each}
</div>
