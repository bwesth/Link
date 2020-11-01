<script>
import Component01 from "./Lessons/Components/Level1/Component101.svelte";
import Component201 from './Lessons/Components/Level2/Component201.svelte'
import CodeInput from "./CodeInput.svelte";
import Lesson from "./Lesson.svelte";

</script>
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
		--sidebar-text: rgba(255, 255, 255, .75);
		--border-w: .3rem;
		--border-r: .4rem;
	}

	.prime {
		height: 200px;
		width: 200px;
		background-color: var(--prime);
		color: var(--sidebar-text);
	}

	.flash {
		height: 200px;
		width: 200px;
		background-color: var(--flash);
		color: var(--sidebar-text);
	}

	.second {
		height: 200px;
		width: 200px;
		background-color: var(--second);
		color: var(--sidebar-text);
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
		justify-content: center;
		align-content: center;
		align-items: center;
	}

</style>

<div class="body">

	<div class="prime">
		Prime
	</div>
	
	<div class="flash">
		Flash
	</div>
	
	<div class="second">
		Second
	</div>
</div>

<Lesson>
	<Component01 />
	<br /><br /><br />
	<Component201 />
</Lesson>
