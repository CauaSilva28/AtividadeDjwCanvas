# AtividadeDjwCanvas
Feito por Carlos e Cauã Silva

## HTML
<p>Foi feita a estrutura básica do html e adicionado um canvas com a id "myCanvas".</p>

## CSS
<p>Foi adicionado uma cor de fundo para o body e na id "myCanvas" foi adicionado uma imagem de fundo junto com a borda.</p>

## JavaScript
<p> Primeiro criamos duas const, uma foi chamada de canvas para pegar o id "myCanvas" e outra chamada ctx para mostrar o que vai ser renderizado.</p>
<p>Logo após foi adicionado duas variaveis x e y, que serão de movimento do objeto.</p>
<p>Foi criado uma function chamada papaismurf que será a criação do personagem. Nela foi adicionado os comandos ctx.fillStyle para cor, ctx.fillRect para criação de retângulos que são a formação do corpo do personagem e ctx.clearRect que faz com que ao movimentar não fique esticando as formas. Depois chamamos a função.</p>
<p>Por fim foi feito o sistema de movimentação com o evento de keydown, utilizando as teclas "d" para direita, "a" para esquerda, "s" para baixo e "w" para cima, e foi adicionado condições para que o personagem não saia da tela.</p>