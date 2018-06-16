import Canvas from './Canvas'

class StartPageCanvas extends Canvas {
	
	private _rem: number;

	constructor(canvasId: string) {
		super(canvasId)
		this._initCanvas()
	}

	private _initCanvas(): void {
		this._initSize()
		this._drawTitle()
	}

	// init canvas size and rem for mobile
	private _initSize(): void {
		let cw = 0	// clientWidth
		let ch = 0	// clientHeight
		cw = document.documentElement.clientWidth
		ch = document.documentElement.clientHeight
		this.canvas.style.height = `${ch}px`
		document.body.style.height = `${ch}px`
		// init rem
		document.body.style.fontSize = `${cw / 30}px`
		this._rem = cw / 30
	}

	private _drawTitle(): void {
		this.ctx.font = '48px serif'
		this.ctx.fillStyle = '#27e5da'
		this.ctx.fillText('PAINT', 3 * this._rem, 3 * this._rem)
	}

}

let canvas = new StartPageCanvas('#start-canvas')