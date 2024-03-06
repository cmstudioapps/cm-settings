function gerar() {
  var conteudo = document.getElementById("conteudo").value
  var nome = prompt("Digite o nome para o arquivo!"," PDF CM settings")
  var cor = prompt("Cor de fundo. (em inglês)","black").toLowerCase()
  var letra = prompt("Cor da letra. (em inglês)","white").toLowerCase()
  const estilos = {
    
    margin: [10,10,10,10],
    backgroundColor: cor,
    color: letra,
    filename: nome
    
  }
  
  
  html2pdf().set(estilos).from(conteudo).open()
  
  
}