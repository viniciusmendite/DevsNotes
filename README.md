## DevsNotes

<div style="text-align: justify">&emsp; DevsNotes é um app similar ao bloco de notas, desenvolvi para colocar meu conhecimento em prática tendo como resultado um app simples e ao mesmo tempo funcional e com um layout agradável.</div>

### Desenvolvimento

#### Tela de listagem:

<div style="text-align: justify">&emsp; Nessa tela fiz uma condição baseada no conteúdo do array <b>list</b>. Se <i>list</i> tiver alguma anotação salva, então será listada, caso <b>não</b> tenha nenhuma anotação, aparecerá uma tela de aviso.</div><br/>

<kbd><img src="https://github.com/viniciusmendite/PrintScreen/blob/master/devsnotes/tela-listagem.PNG" alt="screen" width="720" height="340" /></kbd>

#### Tela de Nova Anotação e Editar Anotação

<div style="text-align: justify">&emsp; Nessa tela fiz uma condição baseada no parâmetro enviado, que é o <i>index</i> da anotação. Caso ao navegar para tela tenha um <i>index</i> passado no parâmetro, o app irá identificar que o usuário quer editar a anotação que ele selecionou. Caso não haja nenhum valor no parâmetro, o app entende que o usuário quer criar uma nova anotação. No momento que o usuário salva sua anotação, ele é redirecionado para a tela de listagem.
</div><br/>
<div style="text-align: justify">&emsp; Com essa condição, eu consigo utilizar a mesma tela, tanto para editar uma anotação, quanto para criar.</div><br/>

<kbd><img src="https://github.com/viniciusmendite/PrintScreen/blob/master/devsnotes/edit-notes.PNG" alt="screen" width="720" height="340" /></kbd>

#### Excluir Anotação:

<div style="text-align: justify">&emsp; Para essa funcionalidade utilizei o <i>Modal</i> do react native, que é acionado ao manter um toque pressionado na anotação. Nele coloquei duas ações:</div><br/>
<div>&emsp; <b>Excluir:</b> identifico qual o index da anotação pressionada, e com isso utilizo o <b>filter()</b> para receber apenas os index que são diferentes do selecionados, e com isso a anotação vai sumir da lista, dando o efeito de exclusão. <br/>
&emsp; <b>Cancelar:</b> apenas modifica a variável <i>modalVisible</i> para <i>false</i>.
</div><br/>

<kbd><img src="https://github.com/viniciusmendite/PrintScreen/blob/master/devsnotes/delete-note.PNG" alt="screen" width="720" height="340" /></kbd>

#### Redux

<div style="text-align: justify">&emsp; Para persistir os dados utilizei o redux persist junto com o AsyncStorage. Criei o arquivo <b>NotesReducer</b> que nele fiz todas as ações do app, que são: adicionar, editar e deletar.
</div><br/>

<kbd><img src="https://github.com/viniciusmendite/PrintScreen/blob/master/devsnotes/reducer.PNG" alt="screen" width="720" height="340" /></kbd>

### Bibliotecas utilizadas

- react-redux
- redux
- redux-persist
- styled-components
- @react-native-community/async-storage
