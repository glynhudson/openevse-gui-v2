<script>
export let checked = false
export let label
export let tooltip = ""
export let onChange = () => {}

let focus = false;
function togglefocus() {
		focus = !focus
	}
</script>

<div class="is-inline-block is-flex	direction-column">
	<div class="control-label is-capitalized has-text-info has-text-weight-semibold">{label}</div>
	<label class="b-checkbox checkbox focus-no-outline is-normal is-size-6 is-capitalized">
		<input 
			type="checkbox" class="checkbox {focus?'is-info':''}" 
			bind:checked={checked}
			on:focus={togglefocus} on:blur={togglefocus}
			on:change={onChange}
		>
		<span 
			class="check is-info has-tooltip has-tooltip-arrow"
			data-tooltip={tooltip} >
		</span>
		
	</label>
	
</div>

<!-- <div class="field">
	<label class="b-checkbox checkbox">
	  <input type="checkbox" value="false" checked>
	  <span class="check"></span>
	  <span class="control-label">Basic</span>
	</label>
  </div> -->