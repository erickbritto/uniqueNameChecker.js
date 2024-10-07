
# Verificador de Nomes Duplicados em Checkboxes

Este script tem como objetivo verificar e desmarcar checkboxes duplicados em uma tabela HTML com base em nomes repetidos. Ele garante que, para cada nome duplicado na tabela, apenas um checkbox esteja marcado, desmarcando os outros automaticamente.

## Funcionalidade

O código percorre uma tabela HTML onde há uma coluna com nomes e uma coluna de checkboxes. Ele identifica se há nomes repetidos na tabela e, caso encontre duplicatas, desmarca todas, exceto o primeiro checkbox correspondente a esse nome.

### Como o código funciona:

1. Seleciona todos os checkboxes presentes na tabela.
2. Verifica a coluna onde os nomes estão localizados (neste caso, a 5ª coluna de cada linha).
3. Para cada checkbox, armazena o nome associado em um objeto, onde a chave é o nome e o valor é um array contendo os checkboxes correspondentes.
4. Se o nome aparecer mais de uma vez, desmarca todos os checkboxes duplicados, mantendo apenas o primeiro marcado.

## Uso

Basta adicionar o script a uma página que contenha uma tabela com nomes e checkboxes, e chamar a função `verificarNomesRepetidos()` para que o script faça a verificação e ajuste os checkboxes automaticamente.

### Estrutura da Tabela Esperada

O código assume que os dados estão dispostos em uma tabela HTML com a seguinte estrutura:

```html
<tr>
    <td>...</td>
    <td align="left">Nome da pessoa</td>
    <td><input type="checkbox" ...></td>
</tr>
```

### Exemplo de Chamada

```html
<script>
    verificarNomesRepetidos();
</script>
```

## Personalização

- Caso a coluna dos nomes não seja a 5ª, você pode ajustar a linha do código que seleciona a coluna correta:

```javascript
const nomeElemento = checkbox.closest('tr').querySelector('td:nth-child(5)');
```

Basta alterar o valor `5` para o número da coluna correspondente aos nomes.

## Requisitos

Este código não possui dependências externas, funcionando apenas com JavaScript puro em um ambiente HTML.

## Contribuição

Sinta-se à vontade para contribuir ou sugerir melhorias ao script.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
