import { test, expect} from '@playwright/test';

test.describe('should navigate to the Edmunds main page', async () => {

    test.beforeEach(async ({page}) => {
        await page.goto('https://www.edmunds.com/')        

    })

    test('it should verify the title of the main page', async ({page}) => {
        await expect(page).toHaveTitle('New Cars, Used Cars, Car Reviews and Pricing | Edmunds');
    })

    test('it should go to the New Car Pricing page', async ({page}) => {
        await page.locator('#global_nav_select_new_car').click({force:true})
        await expect(page).toHaveTitle('New Cars for Sale - Pricing and Deals | Edmunds');
    })

    test.only('it should select an Alfa Romeo Giulia', async ({page}) => {
        //select new New Car link fromo home page
        await page.getByRole('link', { name: 'New Car Pricing' }).click()
        //select the  make of the car
        await page.waitForTimeout(3000)
        await page.locator('.icon-arrow-down3').nth(1).click()
       
        //await page.locator('#new_cars_index_mmy_make_select').selectOption({label: 'Alfa Romeo'})
       
        //await page.getByLabel('Select Make').click({force:true})
        //await page.getByText('alfa-romeo').click({force:true})
        //select the model of the car
        await page.getByLabel('Select Model').click({force:true})
        await page.getByAltText('Giulia').click({force:true})
        //click the "Go" button
        await page.locator('#new_cars_index_mmy_make_model_tab_submit').click({force:true})
        await expect(page).toHaveTitle('2023 Alfa Romeo Giulia Prices, Reviews, and Pictures | Edmunds')

    })

})