import { Given, When, Then } from '@cucumber/cucumber';
import puppeteer from 'puppeteer';
import { expect } from 'chai';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let browser, page;

Given('I am on the todo list page', async function () {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    await page.goto(`file://${__dirname}/../../index.html`);
});

When('I add a new todo {string}', async function (todoText) {
    await page.type('#new-todo', todoText);
    await page.click('#add-todo');
});

Then('I should see {string} in the todo list', async function (todoText) {
    const todoItems = await page.$$eval('#todo-list li', items => items.map(item => item.textContent));
    expect(todoItems).to.include(todoText);
    await browser.close();
});
