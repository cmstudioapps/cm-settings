
if (tela < 680) {
  
  tela = "Celular"
  
  
} else {
  
  tela = "Tablet/pc/TV"
  
  
}
fetch('', {
    
    method: 'post',
    headers: {
      
      'Accept': 'application/json',
      'Content-type': 'application/json'
      
    },
    body: JSON.stringify({
      
      Usuário: nome,
      Rede: rede,
      aceessando: acessando,
      Tela: tela,
      Data: dia,
      ID: ID
      
      
      
    })
    
    
  })
  
  window.addEventListener("contextmenu", function(e) {
    
    
    e.preventDefault()
    
    
  })
  
  
  //ferramentas:
  
  
  function sites() {
    
    window.location.href = "sites.html"
    
  }
  
  function converter() {
    
    window.location.href = "conversor.html"
    
  }
  
  function pdf() {
    
    window.location.href = "pdf.html"
    
  }
  
  function troco() {
    
    window.location.href = "troco.html"
    
  }
  
  function palavras() {
    
    window.location.href = "palavras.html"
    
  }