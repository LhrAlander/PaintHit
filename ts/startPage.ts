import Canvas from './Canvas'

function main(canvasId: string): void {
	let canvas = new Canvas(canvasId)
	canvas.log()
}

main('#start-canvas')