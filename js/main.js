function cesar(f){

  
    const k = parseInt(document.getElementById('chave').value);   

    const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    let palavra = document.getElementById('palavra').value.toUpperCase();   

    let resultado='';

    for(let i = 0; i < palavra.length; i++){

      let letra = palavra[i];
      let p = alfabeto.indexOf(letra);      

      var res;
      if(f > 0){
        res = (p - k) % alfabeto.length;
      }else{        
        res = (p + k) % alfabeto.length;
      }
      
      resultado = resultado+alfabeto[res];
    }

    document.getElementById('resultado').value=resultado;
  }