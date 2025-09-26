# 🦸‍♂️ Marvel Heroes

Aplicação React para busca e visualização de personagens da Marvel, desenvolvida como teste técnico para vaga de desenvolvedor front-end.

## 🚀 Funcionalidades

- ✅ **Listagem de personagens** com paginação (10 por página)
- ✅ **Busca por nome** em tempo real
- ✅ **Detalhes do personagem** com mídias relacionadas
- ✅ **Design responsivo** adaptado para mobile
- ✅ **Sistema de tema** claro/escuro
- ✅ **Testes unitários** com cobertura completa

## 🛠️ Tecnologias

- **React 18** - Hooks nativos (useState, useEffect, useMemo, useCallback)
- **TypeScript** - Tipagem rigorosa
- **Styled Components** - CSS-in-JS com tema dinâmico
- **Vitest** - Testes com metodologia TDD
- **Marvel API** - Dados dos personagens
- **Vite** - Build tool otimizado

## 🏗️ Arquitetura

```
src/
├── components/          # Componentes React reutilizáveis
├── contexts/           # Context API para tema
├── hooks/              # Custom hooks
├── services/           # Integração com APIs
├── styles/             # Tokens de design e temas
└── types/              # Definições TypeScript
```

## 🚀 Como executar

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Chaves da Marvel API

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/marvel-heroes.git
cd marvel-heroes
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
# Crie um arquivo .env.local na raiz do projeto
VITE_MARVEL_PUBLIC_KEY=sua_chave_publica
VITE_MARVEL_PRIVATE_KEY=sua_chave_privada
```

4. Execute o projeto:
```bash
npm run dev
```

5. Execute os testes:
```bash
npm test
```

## 🧪 Metodologia de Desenvolvimento

- **TDD (Test-Driven Development)** - Testes escritos antes da implementação
- **Commits semânticos** - Histórico organizado e descritivo
- **Clean Code** - Código legível e bem estruturado
- **Performance** - Otimizações com memoização

## 📱 Responsividade

- **Desktop** - Layout completo com todas as informações
- **Mobile** - Interface adaptada, ocultando descrições para economia de espaço
- **Tablets** - Híbrido entre desktop e mobile

## 🎨 Sistema de Tema

- **Detecção automática** da preferência do sistema
- **Persistência** no localStorage
- **Transições suaves** entre temas
- **Acessibilidade** com contraste adequado

## 👩‍💻 Desenvolvido por

**Gabriella Possidério**

---

*Projeto desenvolvido seguindo as melhores práticas de React e metodologia TDD para demonstração de habilidades técnicas.*
