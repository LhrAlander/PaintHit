export default class Canvas {
	
	protected canvas: HTMLCanvasElement
	protected ctx: CanvasRenderingContext2D

	constructor(private canvasId: string) {
		this.canvas = document.querySelector(this.canvasId);
		this.ctx = this.canvas.getContext('2d');
	}
}