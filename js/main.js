$(function(){backdrop
    //equivalente ao load de nossa página
    
    // remove o plano de fundo escuro da janela e anula o fechamento pela tecla esc.
    $("#modal01").modal({backdrop:false, keyboard:false});
             
    // abre a janela modal ao carregar a página
    $("#modal01").modal("show");
    
    setTimeout(function(){
        $("#modal01").modal("hide");
               },3000);
});