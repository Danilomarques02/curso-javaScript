let num = document.querySelector('input#fnum')
let lesta = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
   if(Number(n) >= 1 && Number(n) <= 100){
    return true
   }else{
    return false
   }

}

function inLista(n, l){
     if (l.indexOf(Number(n)) != -1) {
        return true
     } else{
      return false  
     }
}

function adicionar(){
    if(isNumero(nu.value) && !inLista(num.value)){

}else{
    window.alert('Valor invalido ou já encontrado na lista.')
}
}