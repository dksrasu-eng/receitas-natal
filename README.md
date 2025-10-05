# Delícias Natalinas

Este é um site de receitas natalinas criado com Next.js, seguindo as especificações de um projeto para um livro de receitas digital e festivo.

## Visão Geral do Projeto

O site "Delícias Natalinas" é uma plataforma exclusiva que oferece 100 receitas festivas, incluindo pratos salgados, doces e bebidas. O acesso é restrito por uma senha fixa para criar uma experiência de clube de receitas.

### Funcionalidades

- **Acesso Restrito**: Página de login com senha fixa.
- **Catálogo de Receitas**: 100 receitas detalhadas com fotos, ingredientes, modo de preparo e mais.
- **Busca e Filtros**: Ferramentas para encontrar receitas por nome, categoria, dificuldade, etc.
- **Favoritos**: Salve suas receitas preferidas no navegador.
- **Compartilhamento e Impressão**: Opções para compartilhar e imprimir receitas facilmente.
- **Design Responsivo**: Experiência otimizada para desktops e dispositivos móveis.
- **SEO Otimizado**: Dados estruturados para melhor indexação por buscadores.

## 🔐 Senha de Acesso

O acesso ao site é protegido por uma senha fixa.

- **Senha**: `77621`

Esta senha é **imutável** e não pode ser alterada pela interface do usuário. Ela está definida no backend da aplicação.

### Onde a senha está definida?

A senha está hardcoded no arquivo `src/lib/auth.ts`. Esta é uma medida de segurança para garantir que apenas o valor pré-definido seja aceito.

```typescript
// src/lib/auth.ts
export const PASSWORD = '77621';
export const COOKIE_NAME = 'delicias-natalinas-session';
```

## 🚀 Como Executar Localmente

Siga os passos abaixo para rodar o projeto em seu ambiente de desenvolvimento.

### Pré-requisitos

- Node.js (versão 18.x ou superior)
- npm, yarn ou pnpm

### Instalação

1.  Clone o repositório:
    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd delicias-natalinas
    ```

2.  Instale as dependências:
    ```bash
    npm install
    ```

### Executando o Projeto

1.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

2.  Abra seu navegador e acesse [http://localhost:9002](http://localhost:9002).

3.  Você será redirecionado para a página de login. Use a senha `77621` para acessar o conteúdo.

## 📜 Lista de Receitas (Amostra)

O site contém 100 receitas. Aqui está uma amostra para referência:

### Salgadas
1. Peru de Natal Clássico
2. Bacalhau à Gomes de Sá Festivo
3. Tender Bolinha com Molho de Laranja e Mel
4. Arroz com Amêndoas e Champanhe
5. Farofa Rica de Natal
... (45 outras)

### Doces
51. Rabanada Tradicional
52. Panetone Caseiro
53. Torta Holandesa de Natal
54. Manjar de Coco com Ameixa
55. Bolo de Nozes com Baba de Moça
... (25 outras)

### Bebidas
81. Quentão de Vinho Branco
82. Sangria Natalina
83. Coquetel de Frutas Vermelhas (sem álcool)
84. Chocolate Quente Cremoso Especial
85. Eggnog (Gema de Ovo) Clássico
... (15 outras)

O conjunto completo de dados das 100 receitas está disponível no arquivo `src/data/recipes.json`.
# del-cias-natalinas-completed
# del-cias-natalinas-completed
