<script>
	import Loader from "./Loader.svelte";
	export let icon
	export let type
	export let types = {}
	export let value
	export let unit
	export let auto_release = true
	export let onClick = () => {}
	export let state = ""

	let displayValue = (val) => {
		switch (type) {
			case 'time':
				let h = Math.round(val/60)
				let m = val % 60
				let ret = h?h+"h":""
				ret += m?!h?m+"mn":m:""
				return ret
			case 'energy':
				return Math.round(val/1000)
			default:
				return val
		}
	}

</script>
<style>
	.tag.but {
		position: relative;
		border:0px;
		top:-4px;
		right: 1px;
		width: 34px;
	}
	.tag.but:hover {
		background-color: hsl(195, 75%, 22%);
	}
</style>

<div class="tags has-addons is-flex is-justify-content-center">
	<!-- <div class="tag is-medium is-info">
		<div class="{auto_release?"has-text-primary":"has-text-danger"} pt-1">
			{#if auto_release}
			<iconify-icon inline icon={"material-symbols:lock-open"} height={18}></iconify-icon>
			{:else}
			<iconify-icon inline icon={"material-symbols:lock"} height={18}></iconify-icon>
			{/if}
		</div>
	</div> -->
	<div class="tag is-medium is-info has-text-weight-bold is-capitalized">
			<iconify-icon inline class="has-text-white" icon={icon} height="14px"></iconify-icon>
			<span class="ml-2">{types[type].name}</span>		
	</div>
	<span class="tag is-medium val has-text-weight-bold is-info">
		{displayValue(value)}{unit}
	</span>
	{#if auto_release}
		{#if state == ""}
		<button class="tag is-medium but is-dark is-clickable m-0 p-0" on:click={onClick}>
			<iconify-icon icon={"fa6-solid:xmark"}></iconify-icon>
		</button>
		{:else if state == "loading"}
		<span class="tag is-medium but is-dark m-0 p-2"><Loader size="is-size-6" /></span>
		{:else if state == "ok"}
		<span class="tag is-medium but is-dark  m-0 p-2"><iconify-icon icon={"fa6-solid:check"}></iconify-icon></span>
		{:else if state == "error"}
		<span class="tag is-medium but is-danger  m-0 p-2"><iconify-icon icon={"fa6-solid:xmark"}></iconify-icon></span>
		{/if}
	{:else}
		<span class="tag is-medium is-dark m-O p-2">
			<iconify-icon inline icon={"material-symbols:lock"} height={18}></iconify-icon>
		</span>
	{/if}
</div>