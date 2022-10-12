

function blockRect(r1,r2){
	//r1 -> bloqueado
	//r2 -> parede
	//armazenam a distância entre os retângulos
	let posicaoX = r1.centerX() - r2.centerX();
	let posicaoY = r1.centerY() - r2.centerY();
	
	//soma das metades
	let somaMetadeWidth = r1.halfWidth() + r2.halfWidth();
	let somaMetadeHeight = r1.halfHeight() + r2.halfHeight();
	
	if(Math.abs(posicaoX) < somaMetadeWidth && Math.abs(posicaoY) < somaMetadeHeight){
		
		let overlapX = somaMetadeWidth - Math.abs(posicaoX);
		let overlapY = somaMetadeHeight - Math.abs(posicaoY);
		
		if(overlapX >= overlapY){//colisão por cima ou por baixo
			if(posicaoY > 0){//por cima
				r1.posY += overlapY;
				
					const mostrar =Math.floor(Math.random() * 21);
					console.log(`Valor Colisão Acima= ${mostrar}`);
					r1.posY +=20;
					dano();

			} else {
				r1.posY -= overlapY;
				
					const mostrar =Math.floor(Math.random() * 21);
				console.log(`Valor Colisão Abaixo= ${mostrar}`);
				r1.posY -=20;
				dano();
			}
		} else {//colisão pela esquerda ou direita
			if(posicaoX > 0){//colisão pela esquerda
				r1.posX += overlapX;
				
					const mostrar =Math.floor(Math.random() * 21);
					console.log(`Valor Colisão Esquerda= ${mostrar}`);					
					r1.posX +=20
					dano();
				} else {
					r1.posX -= overlapX;
					
					const mostrar =Math.floor(Math.random() * 21);
					console.log(`Valor Colisão Direita= ${mostrar}`);	
					r1.posX -=20
					dano();
			}
		}
	}
}
