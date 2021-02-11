<script>
  import Component101 from "./Lessons/Components/Level1/Component101.svelte";
  import Component201 from "./Lessons/Components/Level2/Component201.svelte";
  import CodeInput from "./CodeInput.svelte";
  import Lesson from "./Lesson.svelte";
  import C102 from "./Lessons/Components/Level1/Component102.svelte";

  let lessons = [
    { name: "Components 101", component: Component101 },
    { name: "Components 201", component: Component201 },
    { name: "Drag", component: C102 }
  ];

  let selected = lessons[0];
</script>


<div class="body">

  <div class="prime">
    <h1>SVELTE</h1>
  </div>

  <div class="flash">
    <h1>-</h1>
  </div>

  <div class="second">
    <h1>LINK</h1>
  </div>
</div>

<div class="center">
  <select bind:value={selected}>
    {#each lessons as lesson}
      <option value={lesson}>{lesson.name}</option>
    {/each}
  </select>
</div>

<Lesson>
  <svelte:component this={selected.component} />
</Lesson>







<style>
  :root {
    --back: #ffffff;
    --back-light: #f6fafd;
    --back-api: #eff8ff;
    --prime: #ff3e00;
    --second: #676778;
    --flash: #40b3ff;
    --heading: var(--second);
    --text: #444;
    --sidebar-text: rgba(255, 255, 255, 0.75);
    --border-w: 0.3rem;
    --border-r: 0.4rem;
  }

  .prime {
    height: 200px;
    width: 200px;
    background-color: var(--prime);
    color: var(--sidebar-text);
    justify-content: flex-end;
  }

  .prime h1,
  .flash h1,
  .second h1 {
    margin: 0.2em;
  }

  .flash {
    height: 200px;
    width: 200px;
    background-color: var(--flash);
    color: var(--sidebar-text);
    justify-content: center;
  }

  .second {
    height: 200px;
    width: 200px;
    background-color: var(--second);
    color: var(--sidebar-text);
    justify-content: start;
  }

  .body {
    background-color: var(--back);
    height: 30%;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
  }

  .body div {
    border-radius: 3%;
    text-shadow: 2px 2px 5px var(--back-api);
    box-shadow: 10px 10px 5px var(--text);
    margin: 1em;
    display: flex;
    align-items: center;
  }

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
