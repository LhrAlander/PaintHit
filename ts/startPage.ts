import Canvas from './Canvas'

class StartPageCanvas extends Canvas {

	private _rem: number;

	constructor(canvasId: string) {
		super(canvasId)
		this._initCanvas()
	}

	private _initCanvas(): void {
		this._initSize()
		this._drawTitle(3)
	}

	// init canvas size and rem for mobile
	private _initSize(): void {
		let cw = 0	// clientWidth
		let ch = 0	// clientHeight
		cw = document.documentElement.clientWidth
		ch = document.documentElement.clientHeight
		this.canvas.width = cw
		this.canvas.height = ch
		document.body.style.height = `${ch}px`
		// init rem
		document.body.style.fontSize = `${cw / 30}px`
		this._rem = cw / 30
	}

	/**
	 * 
	 * @param ls 字符间距
	 */
	private _drawTitle(ls: number): void {
		//1. 使用`font`设置字体。
		this.ctx.font = "340 30px 萍方";
		//2. 使用`fillStyle`设置字体颜色。
		this.ctx.fillStyle = "#2AD9D5";
		//3. 使用`fillText()`方法显示字体。
		let str = 'PAINT'
		let x = 50;
		let y = 30;
		let last = ''
		for (let i = 0; i < str.length; i++) {
			let s = str.charAt(i)
			let width = this.ctx.measureText(last).width
			x += width + ls
			last = s
			this.ctx.fillText(s, x, y)
		}
	}

}

let canvas = new StartPageCanvas('#start-canvas')