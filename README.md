# Panetones para Vender

Landing de vendas do material em PDF **Panetones para Vender** (Isabella Moretti). A estrutura, o ritmo e a paleta seguem a página de referência: Poppins, barra fixa, cartões arredondados, grade de dois preços, verde `#064e3b` / laranja `#ea580c` / creme `#fff7ed`.

Todos os botões de compra apontam para `https://google.com`, definido em `src/config/sales.ts` (`CHECKOUT_URL`). Preços e textos ficam no mesmo lugar: `src/config/sales.ts` e `src/content/`.

Não há prazo falso de promoção, preço riscado inventado, depoimento fictício nem promessa de renda. O bloco de prova social e a condição de reembolso estão marcados como **PLACEHOLDER**.

## Rodar localmente

```bash
npm install
npm run dev -- -p 43123
```

Abra [http://127.0.0.1:43123](http://127.0.0.1:43123).

Build estático:

```bash
npm run build
npx serve out -p 43123
```

## Rotas

`/` e cada raiz de idioma usam o plano **R$ 9,99 / R$ 27,00**. As três matrizes também existem sozinhas.

| Página | Essencial | Completo |
| --- | --- | --- |
| `/` e `/pt` e `/pt/9-99-27` | R$ 9,99 | R$ 27,00 |
| `/pt/19-90-47-90` | R$ 19,90 | R$ 47,90 |
| `/pt/47-90-97` | R$ 47,90 | R$ 97,00 |
| `/en` e `/en/9-99-27` | R$ 9,99 | R$ 27,00 |
| `/en/19-90-47-90` | R$ 19,90 | R$ 47,90 |
| `/en/47-90-97` | R$ 47,90 | R$ 97,00 |
| `/es` e `/es/9-99-27` | R$ 9,99 | R$ 27,00 |
| `/es/19-90-47-90` | R$ 19,90 | R$ 47,90 |
| `/es/47-90-97` | R$ 47,90 | R$ 97,00 |
| `/fr` e `/fr/9-99-27` | R$ 9,99 | R$ 27,00 |
| `/fr/19-90-47-90` | R$ 19,90 | R$ 47,90 |
| `/fr/47-90-97` | R$ 47,90 | R$ 97,00 |

Os preços permanecem em reais em todos os idiomas. O rodapé de cada página liga os outros idiomas e as outras faixas.

## Deploy

Projeto Next.js com `output: "export"`. Na Vercel, importe o repositório. Nenhuma variável de ambiente é necessária.
