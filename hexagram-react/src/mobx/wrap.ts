import { useEffect, useState } from 'react'

// Avoid allocation
export const empty: any[] = []

export interface StoreEvent {
	readonly type: string
	readonly payload: unknown
}

export const listeners = new Set<Store>()

export const useOnce = (e: () => void) => {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(e, empty)
}

export class Store {
	constructor() {
		listeners.add(this)
	}

	listen(e: StoreEvent): void {
		console.error('.listen must be overridden', e)
	}

	unmount() {
		listeners.delete(this)
	}

	render() {

	}

	// Avoid allocation on re-renders
	readonly unmounter = () => this.unmount.bind(this)
	readonly renderer = this.render.bind(this)
}

export const useStore = <T extends Store>(instancer: () => T): T => {
	const [result] = useState(instancer)

	// eslint-disable-next-line
	useEffect(result.unmounter, empty)

	// eslint-disable-next-line
	useEffect(result.renderer)

	return result
}
