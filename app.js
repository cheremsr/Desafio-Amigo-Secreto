let amigos = []; // Lista de amigos começa vazia

    // Função para adicionar nomes de amigos à lista
    function adicionarAmigo() {
      const nomeInput = document.getElementById('amigo');
      const nomeAmigo = nomeInput.value.trim(); // Remove espaços antes e depois

      if (nomeAmigo && !amigos.includes(nomeAmigo)) {
        amigos.push(nomeAmigo); // Adiciona o nome à lista de amigos
        console.log('Amigo adicionado:', nomeAmigo);
        console.log('Lista de amigos:', amigos);
        nomeInput.value = ''; // Limpa o campo de entrada
        atualizarListaAmigos(); // Atualiza a lista de amigos
      } else {
        alert('Nome inválido ou já adicionado.');
      }
    }

    // Função para atualizar a lista de nomes de amigos
    function atualizarListaAmigos() {
      const listaAmigosElement = document.getElementById('listaAmigos');
      listaAmigosElement.innerHTML = ''; // Limpa a lista existente

      amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosElement.appendChild(li);
      });

      console.log('Lista de amigos atualizada:', amigos);
    }

    // Função para sortear apenas um nome
    function sortearAmigo() {
      if (amigos.length === 0) {
        alert('Você precisa adicionar pelo menos um amigo para realizar o sorteio.');
        return;
      }

      // Sorteia um nome aleatório da lista
      const indiceSorteado = Math.floor(Math.random() * amigos.length);
      const amigoSorteado = amigos[indiceSorteado];

      // Exibe o resultado do sorteio
      const resultadoElement = document.getElementById('resultado');
      resultadoElement.textContent = `O amigo escolhido foi: ${amigoSorteado}`;
    }