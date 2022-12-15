var palace;
var textHeight;

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
	textHeight = 0.05 * min(canvasX, canvasY)
	noLoop()
}

function draw() {
	image(palace, 0, 0, imageWidth, imageHeight)
	
	push()
	fill(color(153, 176, 191))
	textSize(textHeight)
	stroke(0)
	strokeWeight(5)
	textAlign(CENTER)
	textFont("courier")
	text("Ah, a sanctuary in my thoughts.\nThank you for guiding me here!", imageWidth / 2, imageHeight - textHeight / 2)
	pop()
}
