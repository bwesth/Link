<script>

    $: mutable = code
    let code = "Change this!"
    let input = ""

    function submit () {
    eval(input)
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
    <textarea bind:value={input} /> <br/>
    <button on:click={submit} > Submit code </button>
    {@html input}
{mutable}
</div>
    
