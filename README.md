# AtividadeDjwCanvas
Feito por Carlos e Cauã Silva 🎮

## HTML
<p>Foi feita a estrutura básica do html e adicionado um canvas com a largura de 1000px e altura de 700px, com a id "myCanvas", e dentro uma imagem.</p>

## CSS
<p>Foi adicionado uma cor de fundo para o body e para o canvas a partir da id "myCanvas" junto com a borda.</p>

## JavaScript
<p> Primeiro criamos duas const, uma foi chamada de canvas para pegar o id "myCanvas" e outra chamada ctx para mostrar o que vai ser renderizado.</p>

<p>Logo após foi criado outra const chamada "imgbola" para indicar uma nova imagem, e em baixo adicionamos a imagem colocando o seu src</p>

### Função imagem
<p>Começamos criando a função imagem que irá posicionar e alterar o tamanho da imagem com o código "ctx.drawImage(imgbola, 480, 330, 40, 40);", onde primeiro ele irá pegar o elemento para posicionar e mudar o tamanho que é a const imgbola, logo após será a posição em x, depois em y e por fim o width(largura) e o height(altura) da imagem, o código imgbola.onload foi utilizado para carregar a imagem. Esse código fez com que a imagem da bola fique posicionada no meio.</p>

### Função retangulo
<p>Após a função imagem criamos a função retangulo que será o personagem. Nessa função adicionamos 3 retangulos com o código "ctx.fillRect(posição x, posição y, width(largura), height(altura))", todos juntos com a mesma posição no eixo x e y e mesma largura, porém com altura e cores diferentes. A cor foi adicionada a partir do código "ctx.fillStyle = 'cor'".</p>

### Função linha
<p>Após a função retangulo criamos a função linha que será posicionada no meio da tela do canvas. Primeiro começamos adicionando uma cor para borda da linha com o código "ctx.strokeStyle" e logo após modificamos a largura da linha com o código "ctx.lineWidth". Depois usamos o código "ctx.beginPath()" para iniciar o caminho da forma, e com o código "ctx.moveTo(posição x, posição y)" decidimos o ponto de inicio da linha e com o "ctx.lineTo(posição x, posição y)" o ponto final da linha. Por fim usamos o código "ctx.stroke()" para desenhá-la.</p>

### Função circulo
<p>Após a função linha criamos a função circulo que irá ficar exatamente no centro da tela do canvas. Primeiro adicionamos os códigos "ctx.strokeStyle", "ctx.lineWidth", "ctx.beginPath()" que foi explicado a cima, depois usamos o código "ctx.arc(500, 350, 100, 0, Math.PI*2, true)" para criar a borda do circulo, onde o primeiro valor é a coordenada x do centro do círculo, o segundo a coordenada y do centro do círculo, a terceira é o raio do círculo em pixels, a quarta é o ângulo inicial do arco em radianos(no caso o valor utilizado foi zero), no quinto é o ângulo final do arco em radianos(o valor utilizado foi 2 PI que é igual a 360°, o que significa que irá formar um circulo), e por fim o valor true que significa que o arco irá em sentido anti-horário. E foi adicionado uma cor para preencher o circulo com o código "ctx.fillStyle" e "ctx.fill" para adicionar, por fim o "ctx.stroke()" para desenhá-lo.</p>

### Função curvas 
<p>Após a função circulo criamos as funções curva e curva2, que serão adicionadas no canto esquerdo e direito da tela do canvas. Primeiro adicionamos cor a borda dos arcos, e logo após utilizamos o código "ctx.beginPath()". Depois usamos o mesmo código que usamos para fazer o circulo "ctx.arc(0,350,150,Math.PI/2(mesma coisa que 90°),3*Math.PI/2(mesma coisa que 270°),true)" porém com mudanças nos valores formando uma curva. Na função curva2 apenas mudamos o valor da coordenada x e o valor true que é anti-horário para false(ou apenas apagar o true) que fica no sentido horário, assim invertendo a direção da curva.</p>

### Finalizando
<p>Para finalizar, chamamos as funções a partir dos seus nomes, na ordem: circulo(); linha(); curva(); curva2(); retangulo(); imagem();.</p>

## Resultado
<img src="img/print.png">