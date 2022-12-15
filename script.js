var palace;

function preload() {
	
	palace = loadImage("palace.png")
	
	canvasX = windowWidth*.99
	canvasY = windowHeight*.965
	
	imageScalar = Math.min(canvasX / 1920, canvasY / 1080)
	imageWidth = 1920 * imageScalar
	imageHeight = 1080 * imageScalar
}

function setup() {
	
	var myCanvas = createCanvas(canvasX, canvasY)
	myCanvas.parent("#canvas")
	textHeight = 0.075 * min(canvasX, canvasY)
	textWidth = textHeight / 2.2
	noLoop()
}

function draw() {
	image(palace, 0, 0, imageWidth, imageHeight)
}