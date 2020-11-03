<script>
  let code = "Change this!";
  let input = "";
  $: mutable = code;
  let number = 1
  $: test = number
  function submit() {
    eval(input);
  }
</script>

<style>
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>

<div class="wrapper">
  <textarea bind:value={input} />
  <br />
  <button on:click={submit}>Submit code</button>
  <p>
    {@html input}
  </p>
  <p>
    {@html mutable}
  </p>
  <p>{number}</p>
  <p>{test}</p>
</div>
