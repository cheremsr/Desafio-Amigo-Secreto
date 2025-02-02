# Projeto: Desafio Amigo Secreto - Oracle Next Education

## Descrição
Este repositório contém um projeto em JavaScript cujo objetivo é permitir ao usuário adicionar amigos a uma lista e realizar o sorteio do nome aleatório de um amigo dessa lista. O código utiliza HTML para a estrutura básica da página e JavaScript para manipulação de dados e interatividade. 
O desafio do amigo secreto foi proposto pela Alura durante o programa de treinamento One (Oracle Next Education), para colocarmos em prática os  conhecimentos adquiridos em javaScript e GitHub.

![Logo do Projeto](https://raw.githubusercontent.com/helois-racibi/Challange-Amigo-Secreto/main/assets/amigo-secreto.png)

## Funcionalidades 

1. **Adicionar amigos:** O usuário pode inserir o nome de um amigo em um campo de texto e clicar em um botão para adicionar à lista, com validação para garantir que o nome não esteja vazio ou duplicado.
- _Validações_:
- Formatação do nome: A primeira letra do nome é sempre convertida para maiúscula e o restante em minúsculas.
- Nomes vazios não são permitidos.
- Não é permitido inserir números no nome.
- Caso o nome já exista na lista, será solicitado um sobrenome para diferenciá-lo.
- É verificado se o novo nome completo (incluindo o sobrenome) já está presente na lista.
- Remoção de acentos para que não ocorram erros durante a comparação.  
- Comparação de nomes desconsiderando diferenças de maiúsculas/minúsculas e acentuação.
  
2. **Atualização da lista:** Após adicionar um amigo, a lista é automaticamente atualizada na página, mostrando todos os amigos adicionados até o momento.

3. **Sorteio aleatório:** O usuário pode clicar em um botão para realizar um sorteio, que escolherá um amigo aleatoriamente da lista e exibirá o nome do amigo sorteado.
- _Validações:_
- Sorteio de nomes: Ao clicar no botão sorteio é realizado um sorteio aleatório entre os nomes de amigos inseridos na lista e assim o resultado é exibido.
- _Validação:_ 
- É indispensável que haja pelo menos dois participantes na lista para que o sorteio seja realizado

4. **Reiniciar sorteio:** Limpa a lista de nomes de amigos e apaga o resultado do sorteio sem que seja feita a atualização da página.

## Tecnologias
- JavaScript
- HTML
- CSS
  
![Logo do Projeto](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSmRTmnk9zgBKrfapEhXlw3dTIp6eoD1Vf1iBVkDMhHYOsgKQ_2TamS6twuNckYT1NM4&usqp=CAU)
