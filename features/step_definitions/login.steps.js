const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { chromium } = require('playwright');

let browser, page;

Given('que acesso a página inicial de login', async () => {
  browser = await chromium.launch({ headless: true }); //abre o navegador
  page = await browser.newPage();
  await page.goto('https://www.saucedemo.com/'); //acessa a página
});

When('preencho o campo Username com {string}', async (username) => {
  await page.locator('#user-name').fill(username); //insere o username
});

When('preencho o campo Password com {string}', async (password) => {
  await page.locator('#password').fill(password); //insere a password
});

When('clico no botão Login', async () => {
  await page.locator('#login-button').click(); //clica no botão
});

Then('devo visualizar a página de produtos com o título {string}', async (titulo) => {
  await expect(page.locator('span[data-test="title"]')).toHaveText(titulo); //valida o título/texto
  await browser.close(); //fecha navegador
});









/*
 No Playwright, o mesmo comando page.fill() já faz as duas coisas: Encontra o campo, limpa o que tiver dentro e digita o texto que tu passar.
 When('preencho o campo Password"', async (password) => {
  await page.fill('#password', password);
});


Playwright versão recomendada:
({await page.locator('#user-name').type("standard_user");
await page.locator('#password').type("secret_sauce");
await page.locator('#login-button').click();*/
