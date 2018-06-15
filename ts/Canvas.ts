export default class Canvas {
	constructor(private canvasId: string) {
		this.initCanvas()
	}
	private canvas: HTMLCanvasElement
	private ctx: CanvasRenderingContext2D
	private initCanvas(): void {
		this.canvas = document.querySelector(this.canvasId);
		this.ctx = this.canvas.getContext('2d');
	}
	public log(): void {
		console.log(this.canvas, this.ctx)
	}
}