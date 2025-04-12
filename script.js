


//efeito hover nos projetos
const projetos = document.querySelectorAll('.projeto');

// Função que aplica o efeito de hover nos projetos
projetos.forEach(projeto => {
  const img = projeto.querySelector('img');
  const span = projeto.querySelector('span');
  
  // Evento mouseover: Aplica o efeito de hover
  projeto.addEventListener('mouseover', () => {
    // Ampliar a imagem
    img.style.transform = 'scale(1.1)';
    
    // Mudar a cor do texto
    span.style.color = '#007bff';  // Cor azul ao passar o mouse
    span.style.fontWeight = 'bold';  // Coloca o texto em negrito
  });
  
  // Evento mouseout: Remove o efeito de hover
  projeto.addEventListener('mouseout', () => {
    // Reverter a ampliação da imagem
    img.style.transform = 'scale(1)';
    
    // Reverter a cor do texto
    span.style.color = 'black';  // Cor original do texto
    span.style.fontWeight = 'normal';  // Texto não mais em negrito
  });
});
    
  
// Seleciona todos os elementos com a classe 'habilidade'
const habilidades = document.querySelectorAll('.habilidade');

// Função que aplica o efeito de hover nas habilidades
habilidades.forEach(habilidade => {
  const img = habilidade.querySelector('img');
  const span = habilidade.querySelector('span');
  
  
  habilidade.addEventListener('mouseover', () => {
   
    img.style.transform = 'scale(1.1)';  
    
   
    span.style.color = '#007bff';  
    span.style.fontWeight = 'bold';  
  });
  
 
  habilidade.addEventListener('mouseout', () => {

    img.style.transform = 'scale(1)';  
    
    
    span.style.color = 'black'; 
    span.style.fontWeight = 'normal'; 
  });
});  

