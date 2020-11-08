<script>
  import C101 from "./C101";
  import { C101inputs } from "./inputs";
  let file = C101;
  let input = [],
    control = [];

  const FileReader = window.FileReader;

  $: code = file;
  $: l = file[0];

  function load(string) {
    for (let i = 0; i < file.length; i++) {
      let line = file[i];
      if (line.includes(string)) {
        control[i] = line;
        file[i] = line.replace(string, "input");
      }
    }
  }

  function start() {
    C101inputs.forEach(element => {
      load(element);
    });
  }

  function verify() {
    console.log(input);
    for (let i = 0; i < control.length; i++) {
      if (input[i] !== control[i]) {
        console.log(input[i] + " is not " + control[i]);
        alert("WRONG");
        return;
      }
    }
    alert("CORRECT");
  }
</script>

<style>
  .code-area {
    padding: 10%;
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

<div>
  <h2>Svelte Components: Basics</h2>
  <br />
  <div class="code-area">
    {#if code[0]}
      {#each code as line, i}
        {#if line.includes('input')}
          <code>
            {i}
            <input bind:value={input[i]} />
          </code>
          <br />
        {:else}
          <code>{i} &nbsp {line}</code>
          <br />
        {/if}
      {/each}
    {/if}
  </div>

  <button on:click={start}>Start</button>
  <button on:click={verify}>Verify</button>
</div>
