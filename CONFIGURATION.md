# Hyper Focus - Configurações

A extensão Hyper Focus agora permite que você configure vários parâmetros para personalizar a experiência de foco no código.

## Configurações Disponíveis

### `hyperFocus.dimOpacity`

- **Tipo**: Número (0.1 - 1.0)
- **Padrão**: 0.4
- **Descrição**: Define o nível de opacidade para o código "não relacionado" (esmaecido). Valores menores tornam o código mais transparente.

### `hyperFocus.focusOpacity`

- **Tipo**: Número (0.1 - 1.0)
- **Padrão**: 1.0
- **Descrição**: Define o nível de opacidade para o código em foco.

### `hyperFocus.focusBackgroundColor`

- **Tipo**: String
- **Padrão**: "rgba(128, 128, 220, 0.2)"
- **Descrição**: Cor de fundo para destacar o código em foco. Suporta formatos rgba, hex, etc.

## Como Configurar

### Método 1: Através das Configurações do VS Code

1. Abra as configurações (`Cmd+,` no Mac ou `Ctrl+,` no Windows/Linux)
2. Procure por "Hyper Focus"
3. Ajuste os valores conforme sua preferência

### Método 2: Editando settings.json

Adicione as seguintes linhas ao seu arquivo `settings.json`:

```json
{
  "hyperFocus.dimOpacity": 0.3,
  "hyperFocus.focusOpacity": 1.0,
  "hyperFocus.focusBackgroundColor": "rgba(255, 255, 0, 0.1)"
}
```

## Exemplos de Configuração

### Para um efeito mais sutil:

```json
{
  "hyperFocus.dimOpacity": 0.6,
  "hyperFocus.focusBackgroundColor": "rgba(128, 128, 220, 0.1)"
}
```

### Para um contraste mais forte:

```json
{
  "hyperFocus.dimOpacity": 0.2,
  "hyperFocus.focusBackgroundColor": "rgba(255, 255, 0, 0.3)"
}
```

### Para usar apenas esmaecimento (sem cor de fundo):

```json
{
  "hyperFocus.dimOpacity": 0.3,
  "hyperFocus.focusBackgroundColor": "transparent"
}
```

## Notas

- As configurações são aplicadas imediatamente quando alteradas
- Se o modo foco estiver ativo, as decorações serão atualizadas automaticamente
- Os valores de opacidade variam de 0.1 (quase transparente) a 1.0 (completamente opaco)
