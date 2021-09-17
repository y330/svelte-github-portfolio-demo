<div class="grid">
	<slot />
</div>

<style>
	.grid {
		/* Supports Grid */
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-auto-rows: minmax(300px, auto);
		grid-gap: 20px;
	}

</style>