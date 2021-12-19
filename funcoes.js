// function posicao(){
// 	var elemento = document.getElementById('ponto');
// 	var v_top = Math.floor(Math.random() * (570 - 0 + 1)) + 0;
// 	var v_left = (Math.floor(Math.random() * (570 - 0 + 1)) + 0)-285;

// 	elemento.style.left = v_left+"px";
// 	elemento.style.top = v_top+"px";
// 	//alert('Pouse onde o ponto vermelho está indicando!');
// }

function posicao(){
	var elemento = document.getElementById('ponto');
	var local = document.getElementById('coordenadas');
	var top_min = -36;
	var top_max = 560;
	var left_min = -295;
	var left_max = 295; 
	var v_top = Math.floor(Math.random() * (top_max - top_min + 1)) + top_min;
	var v_left = Math.floor(Math.random() * (left_max - left_min + 1)) + left_min;

	elemento.style.left = v_left+"px";
	elemento.style.top = v_top+"px";
	local.innerHTML = "Posição = Top: " + v_top + " Left: " + v_left;

	//alert('Pouse onde o ponto vermelho está indicando!');
}	