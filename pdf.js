function gerar() {
  var conteudo = document.getElementById("conteudo").value
  var nome = prompt("Digite o nome para o arquivo!"," PDF CM settings")
  var cor = prompt("Cor de fundo. (em inglês)","black").toLowerCase()
  var letra = prompt("Cor da letra. (em inglês)","white").toLowerCase()
  var pai = document.getElementById("pai")
  pai.innerHTML = `
  <div style="text-align: center; background-color: ${cor}; color: ${letra}; height: 100%; width: 100%;">
  <h2>${nome}</h2>
  <br>
  
  <p>${conteudo}</p>
  
  </div>
  `
  const estilos = {
    
  
    
    filename: nome
    
  }
  
  
  html2pdf().set(estilos).from(pai).save()
  
  
}