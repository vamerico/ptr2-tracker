# PTR2 Tracker — Guia de instalação

## Pré-requisitos
- Node.js instalado (https://nodejs.org)

---

## Como rodar / gerar o .exe

### 1. Instalar dependências
Abra o terminal (cmd ou PowerShell) dentro da pasta `ptr2-tracker` e rode:

```
npm install
```

### 2. Testar o app antes de gerar o .exe
```
npm start
```
O app vai abrir. Verifique se está tudo funcionando.

### 3. Gerar o instalador .exe
```
npm run dist
```
Aguarde alguns minutos. Quando terminar, o instalador estará em:
```
ptr2-tracker/dist/PTR2 Tracker Setup X.X.X.exe
```

Basta rodar esse `.exe` em qualquer máquina Windows — **não precisa de Node.js instalado**.

---

## Funcionalidades
- ✅ Issues editáveis inline (descrição, prioridade, responsável)
- ✅ Status com clique para avançar (Open → In progress → Blocked → Resolved)
- ✅ Cronograma com arrastar e soltar por dia
- ✅ Gerador de relatório (interno e para o cliente)
- ✅ Exportar CSV
- ✅ Dados salvos automaticamente no disco

---

## Onde os dados são salvos?
Os dados ficam em:
- Windows: `C:\Users\<seu_usuario>\AppData\Roaming\ptr2-tracker\ptr2-issues.json`

Você pode fazer backup desse arquivo a qualquer momento.
