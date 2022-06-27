
var listaFotos = new Array("img/foto1.jpg","img/foto2.jpg","img/foto3.jpg","img/fundo1.jpg");

for(var i=0; i<listaFotos.length; i++){
    document.getElementsByTagName("main")[0].innerHTML += "<div style='background-image:url("+listaFotos[i]+"); background-repeat: no-repeat; background-position: center; background-size:cover' class='col' onclick='mostrarDetalhe(this)'></div>";
}

function mostrarDetalhe(div){
    //console.log(div.style.backgroundImage);
    
    var janela = document.getElementById("janela_modal");
    janela.style.display="table";
    janela.onclick = function(){
        janela.style.display="none";
    }
    
    var foto_modal=document.getElementById("foto_modal");
    foto_modal.style.backgroundImage = div.style.backgroundImage;
    
}

