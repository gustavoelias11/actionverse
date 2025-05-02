# Actionverse

## Observação

__Utilizem os valores das variáveis de `:root`, que está em `style.css`, por padronização.__

_Exemplo:_

```css
header {
    background-color: var(--dark-red);
}
```
Isso garante que, caso seja necessário alterarmos um valor (como uma cor) em todo o site, só vamos precisar modificá-lo em um único lugar (no `:root` em `style.css`), e todas as partes do site que usam essa variável serão atualizadas automaticamente.
