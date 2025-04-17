import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Page, Browser } from '@playwright/test';
import SwagLabsPage from '../Pages/objects/swagLabs'; // Ensure the file exists and matches this path


export class CustomWorld extends World {

    page!: Page;
    browser!: Browser;
    swaglabs!: SwagLabsPage;

    constructor(options: any) {
        super(options);
    }
}

setWorldConstructor(CustomWorld);