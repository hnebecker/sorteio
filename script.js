var inputs = document.getElementsByClassName("nome");
var sorteio = Math.floor(Math.random()*10)
var h2 = document.getElementsByTagName("h2")[0]
var h20 = h2.innerText

var inputs = document.getElementsByClassName("nome");
      function sortear() {
        let novo_array_filtrado = [];
        for (i = 0; i < inputs.length; i++) {
            if (inputs[i].value !== "") {
            novo_array_filtrado.push(inputs[i]);
          }
        }
        
        let index_sorteado = Math.floor(
          Math.random() * novo_array_filtrado.length
        );
        return ("A pessoa sorteada foi: " +
        novo_array_filtrado[index_sorteado].value)
          
      }
function resul(){
    h20= h2.innerText = sortear()
}
