function mudaFoto(foto){
		
		document.getElementById("icone").src ="_imagens/" +foto+ ".png";
               if (foto == '') {
               	document.getElementById("icone").src ="";
               }   
	}
	