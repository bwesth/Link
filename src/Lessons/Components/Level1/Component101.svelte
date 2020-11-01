<script>
    let scripts = 'let name = World',
    style = 'p {\ncolour: blue\n}',
    html = 'Hello {world}',
    input = ["","","","","",""],
    control = ["<script>", "<\/script>", "<style>", "</style>", "<p>", "</p>"]

    function verify () {
        for (let i = 0; i<input.length; i++) {
            if (input[i] !== control[i]) {
            alert("WRONG!")
            return
            }
        }
        alert("CORRECT!")
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
        <!-- Script tag -->
        <code>1   <input bind:value={input[0]} /></code><br />
        <code>2   {scripts}</code><br />
        <code>3   <input bind:value={input[1]} /></code><br />
        <!-- Style tag --><code>4</code>  <br />
        <code>5   <input bind:value={input[2]} /></code><br />
        <code>6   {style}</code><br />
        <code>7   <input bind:value={input[3]} /></code><br />
        <!-- html --><code>8</code>  <br />
        <code>9   <input bind:value={input[4]} />{html}<input bind:value={input[5]} /></code><br />
    </div>
    <button on:click={verify}>Verify</button>
</div>