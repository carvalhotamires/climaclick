# ClimaClick 🌦️ (Clima Dashboard)

Aplicação web em **React + TypeScript + Vite** que permite buscar cidades e visualizar previsão do tempo usando a **Open‑Meteo** (sem necessidade de API key).  
Inclui **favoritos** com persistência local, **rotas**, **componentização**, **consumo de API**, e tratamento de **loading/erro/empty state**.

## 🌐 Deploy Online
O deploy foi realizado na plataforma Vercel. Você pode testar a aplicação completa acessando o link abaixo:

🔗 **[Acessar o Clima Click](https://climaclick.vercel.app/)**

---

## 👥 Integrantes
- Bruno Guimarães Alves
- Lanusse Helena de Almeida Silveira
- Lucivânia Ramiro de Araújo
- Messias da Silva Guedes
- Tamires Carvalho da Silva

---

## ✅ Requisitos atendidos (check rápido)
- **Componentização:** componentes reutilizáveis com props + biblioteca de UI
- **Rotas:** Home / Favoritos / Sobre
- **Hooks:** useState / useEffect (e hooks utilitários se houver)
- **Consumo de API:** Open‑Meteo (Geocoding + Forecast)
- **Tratamento de estados:** loading, erro e dados inexistentes
- **Organização do projeto:** pastas pages/, components/, services/, hooks/, types/
- **UI/UX:** layout consistente e responsivo, sem erros no console

---

## 🧩 Funcionalidades
- Busca de cidades (Geocoding)
- Exibição do clima atual e previsão
- Favoritar/desfavoritar cidades (persistência no navegador)
- Estados de loading, erro e “nenhum resultado”

---

## 🗺️ Rotas da aplicação
- `/home` — Home
- `/favorites` — Favoritos
- `/about` — Sobre

---

## 🌐 APIs utilizadas
- **Open‑Meteo Geocoding API:** converte nome da cidade → latitude/longitude
- **Open‑Meteo Forecast API:** retorna clima atual + previsão (hourly/daily)

> Observação: a Open‑Meteo não exige API_KEY, facilitando testes do professor.

---

## 🧱 Tecnologias
- React + TypeScript
- Vite
- React Router DOM
- Biblioteca de UI: (MUI / Chakra / Ant Design)  <-- preencher
- Requisições HTTP: fetch ou axios  <-- preencher
- (Opcional) Gráficos: (Recharts / Chart.js etc.) <-- se usarem

---

## 📁 Estrutura de pastas (exemplo)
src/
- assets/
- components/
- common/
- layout/
- ui/
- context/
- hooks/
- pages/
- services/
- theme/

---

## ▶️ Como rodar o projeto
### Pré-requisitos
- Node.js (versão LTS recomendada)
- npm ou yarn

### Instalação
```bash
npm install
```

### Rodar em desenvolvimento
```bash
npm run dev
```

### Build de produção
```bash
npm run build
npm run preview
```

---

## 🧪 Qualidade / QA (o que foi verificado)
- Sem erros no console
- Rotas navegando corretamente
- Loading e erro tratados nas requisições
- Responsivo (mobile/desktop)
- Favoritos persistem após recarregar a página

---

## 📌 Decisões técnicas (para a apresentação)
- Escolha da Open‑Meteo por ser **sem API key** e adequada para fins educacionais
- Separação em services/ para isolar regras de consumo de API
- Componentes reutilizáveis para manter consistência visual e reduzir repetição.

---

## 📄 Licença

Projeto desenvolvido para fins acadêmicos.
