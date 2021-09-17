import { writable } from "svelte/store"

export const repos = writable([{
	name: "Sample",
	description: "Click the 'View my projects' button to load",
	homepage: "#"
}, {
	name: "Sample",
	description: "Click the 'View my projects' button to load",
	homepage: "#"
}])