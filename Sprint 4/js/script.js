(function(){
	//variáveis
	let cnv = document.querySelector("#meuCanvas");
	let ctx = cnv.getContext("2d");
	let img = document.getElementById("myImage");
	let blk;

	const height = canvas.height = 480;



	//Teclas
	const LEFT = 37
	const UP = 38
	const RIGHT = 39
	const DOWN = 40;

	const A = 65;
	const W = 87;
	const D = 68;
	const S = 83;
	//Movimentos
	let mvLeft = mvUp = mvRight = mvDown = false;
	
	let plLeft = plUp = plRight = plDown = false;
	//Arrays
	let sprites = [];
	let blocks = [];

	function mudarcor(){
		let filter = ctx.filter = 'hue-rotate(180deg)';
	}

	
	
	
	//Objetos instanciados com os seguintes parâmetros: posX, posY, Largura, Altura e cor
	var player1 = new Sprite(50, 16, 40, 20, "#d9376e",);
	sprites.push(player1);
	
	
	let player2 = new Sprite(210, 110, 40, 20, "black",);
	sprites.push(player2);
	


	

	

	
	let block1 = new Sprite(75, 1000, 10, 10, "#000");
	sprites.push(block1);
	blocks.push(block1);
	
	//entradas
	//Evento disparado quando uma tecla é pressionada
	window.addEventListener("keydown",function(e){
		let key = e.keyCode;
		switch(key){
			case LEFT:
				mvLeft = true;
				break;
			case UP:
				mvUp = true;
				break;
			case RIGHT:
				mvRight = true;
				break;
			case DOWN:
				mvDown = true;
				break;
		}
	},false);
	
	//Evento disparado quando uma tecla é solta
	window.addEventListener("keyup",function(e){
		let key = e.keyCode;
		switch(key){
			case LEFT:
				mvLeft = false;
				break;
			case UP:
				mvUp = false;
				break;
			case RIGHT:
				mvRight = false;
				break;
			case DOWN:
				mvDown = false;
				break;
		}
	},false);
	//Player 2 
	window.addEventListener("keydown",function(r){
		let key = r.keyCode;
		switch(key){
			case A:
				plLeft = true;
				break;
			case W:
				plUp = true;
				break;
			case D:
				plRight = true;
				break;
			case S:
				plDown = true;
				break;
		}
	},false);
	
	//Evento disparado quando uma tecla é solta
	window.addEventListener("keyup",function(r){
		let key = r.keyCode;
		switch(key){
			case A:
				plLeft = false;
				break;
			case W:
				plUp = false;
				break;
			case D:
				plRight = false;
				break;
			case S:
				plDown = false;
				break;
		}
	},false);


	//funções
	function loop(){
		window.requestAnimationFrame(loop,cnv);
		update();
		update2();
		render();
	}
	player1.velocidade = 2;

	//Atualizações
	function update(){
		if(mvLeft && !mvRight){
			player1.posX -=player1.velocidade;
		}
		if(mvRight && !mvLeft){
			player1.posX +=player1.velocidade;
		}
		if(mvUp && !mvDown){
			player1.posY -=player1.velocidade;
		}
		if(mvDown && !mvUp){
			player1.posY +=player1.velocidade;
		}
		//Limites da tela
		player1.posX = Math.max(0, Math.min(cnv.width - player1.width, player1.posX));
		player1.posY = Math.max(0, Math.min(cnv.height - player1.height, player1.posY));
		
		//Colisões
		for(let i in blocks){
			let blk = blocks[i];
			if(blk.visible){	
				blockRect(player1,blk);
				
			}
			if(blk.visible){
				blockRect(player1,player2);
			}
		}
	}
	player2.velocidade = 2;
	//Player 2 
	function update2(){
		if(plLeft && !plRight){
			player2.posX -=player2.velocidade;
		}
		if(plRight && !plLeft){
			player2.posX +=player2.velocidade;
		}
		if(plUp && !plDown){
			player2.posY -=player2.velocidade;
		}
		if(plDown && !plUp){
			player2.posY +=player2.velocidade;
		}
		//Limites da tela
		player2.posX = Math.max(0, Math.min(cnv.width - player2.width, player2.posX));
		player2.posY = Math.max(0, Math.min(cnv.height - player2.height, player2.posY));
		
		//Colisões
		for(let i in blocks){
			var blk = blocks[i];
			if(blk.visible){
					blockRect(player2,blk);
				}								
			}
			if(blk.visible){
				blockRect(player2,player1);				
		}			
		
	}
	let img2 = document.getElementById("myImage2");
	//Renderização ou desenho na tela
	function render(){
		ctx.clearRect(0,0,cnv.width,cnv.height);	
		for(let i in sprites){
			let spr = sprites[i];
			if(i==0){
				ctx.drawImage(img, spr.posX-18, spr.posY-13,80, 40);
				ctx.imageSmoothingQuality = 'high';
				ctx.imageSmoothingEnabled = true;
			}
			if (i==1) {
				ctx.drawImage(img2, spr.posX-18, spr.posY-13,80, 40);
				ctx.imageSmoothingQuality = 'high';
				ctx.imageSmoothingEnabled = true;
			

			}
			
		}	

	}


	loop();
}());