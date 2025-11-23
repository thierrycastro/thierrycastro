# Copilot Instructions for thierrycastro

## Visão Geral
Este projeto é focado em automação de testes de UI utilizando Playwright. O objetivo principal é garantir a qualidade de aplicações web por meio de testes automatizados, seguindo boas práticas de QA.

## Estrutura do Projeto
- `tests/`: Contém os arquivos de testes Playwright. Exemplos de cenários: navegação, assertivas de título, interações com elementos da página.
- `playwright.config.js`: Configuração do Playwright, incluindo paralelismo, retries, browsers e reporter HTML.
- `package.json`: Gerencia dependências e scripts do projeto.
- `playwright-report/`: Relatórios gerados após execução dos testes.
- `test-results/`: Resultados dos testes executados.

## Fluxo de Trabalho
- **Executar testes:**
  - Use o comando `npx playwright test` para rodar todos os testes.
  - Para abrir o relatório HTML: `npx playwright show-report`.
- **Configuração de browsers:**
  - Por padrão, apenas o Chromium está habilitado. Para testar em outros browsers, descomente os projetos em `playwright.config.js`.
- **Ambiente CI:**
  - O projeto está preparado para rodar em CI, com retries e workers ajustados via variáveis de ambiente.

## Padrões e Convenções
- Testes usam o padrão Playwright, com `test.beforeEach` para navegação inicial.
- Use `expect` para assertivas claras e diretas.
- Nomeie os testes de forma descritiva, preferencialmente em português.
- Utilize roles e acessibilidade para selecionar elementos (`getByRole`).

## Integrações e Dependências
- Principais dependências: `@playwright/test`.
- Não há integrações externas configuradas por padrão, mas o projeto pode ser expandido para incluir web servers ou variáveis de ambiente.

## Exemplos
```js
// Exemplo de teste
const { test, expect } = require('@playwright/test');
test('Clicar no link GET STARTED', async ({ page }) => {
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
```

## Recomendações para Agentes
- Priorize clareza e simplicidade nos cenários de teste.
- Mantenha a estrutura dos arquivos e convenções já existentes.
- Consulte `playwright.config.js` para ajustes de ambiente e browsers.
- Documente cenários novos diretamente em `tests/`.

---
Seções incompletas ou dúvidas? Solicite feedback para aprimorar as instruções.