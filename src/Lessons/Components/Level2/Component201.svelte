<script>
    
    let App = [
        '<script>',
        "    import Box from './Box.svelte'",
        '<\/script>',
        '    \n',
        '<Box>',
        '    \n',
        '    </Box>'
    ]

    let Box = [
    '<style>',
	'   .box {',
    `   	width: 300px;`,
    '   	border: 1px solid #aaa;',
    '   	border-radius: 2px;',
    '   	box-shadow: 2px 2px 8px rgba(0,0,0,0.1);',
    '   	padding: 1em;',
    '   	margin: 0 0 1em 0;',
    '   }',
    '<\/style>',
    '\n',
    '<div class="box">',
    '    <!-- content should be injected here -->',
    '</div>'
    ]

    let displayedContent = App
</script>

<style>
    .wrapper {

    }
    .code-area {
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
<span>
    <button on:click={() => displayedContent = App}>App.svelte</button><button on:click={() => displayedContent = Box}>Box.svelte</button>
</span>
    
    <h2>Svelte Components: Slots</h2>
<br />
<div class="code-area">
    {#each displayedContent as line, index}
        <code>{index}  {line}</code><br />
    {/each}
    </div>
 