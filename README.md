![Preview](./preview.gif)

**StevenFocus** é uma aplicação de produtividade temática inspirada no universo de Steven Universe. O projeto combina a técnica de Pomodoro com um sistema de Gerenciamento de Tarefas (To-Do List) para ajudar Crystal Gems (e humanos) a manterem o foco em suas missões diárias.

**Disponível em**: https://stevenfocus.vercel.app/

---

### 🚀 Tecnologias utilizadas

Este projeto foi contruído utilizando:

- **React (Vite) + JS (ES¨+):** Framework para interface reativa e linguagem para hooks e manipulação de elementos
- **Tailwind CSS:** Estilização responsiva e customizada, utilizando classes utilitárias
- **React Hook Form:** Gerenciamento de formuários e validação de entrada de dados
- **Context API & Custom Hooks:** Gerenciamento de estado global para temas e tarefas
- **LocalStorage**: Persistência de dados local para manter as tarefas e configurações do usuário
- **Intersection Observer API**: Implementação de efeitos visuais de scroll e máscara dinâmicas na lista de tarefas

---

### ✨ Funcionalidades

- **Cronômetro Pomodoro:** Alternância entre tempo de foco e descanso
- **Feedback Sonoro:** Sons imersivos (tick de relógio e alerta) que respeitam o tempo restante do timer (desativável nas preferências)
- **Background dinâmico**: Vídeo de fundo que se adapta ao timer atual e ao tamanho da tela. Cores da interface também atualizam conforme o timer atual
- **Lista de tarefas**: para gerenciamento simples de tarefas

---

### 🛠️ Como rodar o projeto localmente

**1.** Clone o repositório:
```bash
git clone https://github.com/brtorresdel/stevenfocus.git
```

**2.** Entre na pasta:
```bash
cd stevenfocus
```

**3.** Instale as dependências:
```bash
npm install
```

**4.** Inicie o servidor de desenvolvimento:
```bash
npm run dev
```