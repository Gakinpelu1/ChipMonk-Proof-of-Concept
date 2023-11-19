
import { test, expect, BrowserContext} from '@playwright/test';


test.describe('navigagte to the main page and verify the links are operating', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://chipmonkbaking.com/') 
        //await page.locator('.minimize-tolstoy-modal').click()     
        await page.waitForTimeout(300)
    
        //if the video modal apprears, this will close it
        const videoModal = page.locator('.minimize-tolstoy-modal')
        if (await videoModal.isVisible()) {
        await videoModal.click()
        }

        //If the "Okay" button/modal appears, this will close it
        const okayButton = page.getByRole('button', { name: 'Okay', exact:true  })
        if (await okayButton.isVisible()) {
        await okayButton.click()
        }  
    })

 //VERIFY THE MAIN COMPONENTS ON THE LANDING PAGE
    test('it should verify key components on the landing page', async ({page}) => {
        //Verify Header text
        await expect (page.getByRole('heading', { name: 'ALL THE TASTE NONE OF THE SUGAR' })).toBeVisible()
        //Verify top Site Navigation Bar is visible
        await expect (page.locator('#SiteNav')).toBeVisible()
        //Verify the reviews banner is visible in the middle of the page
        await expect (page.locator('.total-reviews-container')).toBeVisible()
        //Verify the Shopify section is visible
        await expect (page.locator('#shopify-section-1595948356137')).toBeVisible()
        //Verify the pop-up video is visible
        await expect (page.locator('.video__image')).toBeVisible()
        //verify the nutrition table is visible
        await expect(page.locator('.comparison--table')).toBeVisible()
        //verify newsletter section is visible
        await expect(page.locator('.newsletter-section')).toBeVisible()
        //verify the 'Start Shopping' button is visible
        await expect(page.getByText('START SHOPPING')).toBeVisible()
        //verify the footer is visible
        await expect(page.locator('#shopify-section-footer')).toBeVisible()
        })


    test('it should click on the Cookies link in the main nav bar to get to Keto Cookies', async ({page}) => {
        await page.getByRole('button', { name: 'COOKIES', exact:true }).click({force:true})
        //click on the okay button if it appears
        const okayButton = page.getByRole('button', { name: 'Okay', exact:true  })
        if (await okayButton.isVisible()) {
        await okayButton.click()
        }
        //click on Keto Cookies link
        await page.getByLabel('KETO COOKIES').click({force:true})
        await expect(page).toHaveURL('https://chipmonkbaking.com/products/ketocookies')
        })

    test('it should click on the Cookies link in the main nav to get to Protein Cookikes', async ({page}) => {
        await page.getByRole('button', { name: 'COOKIES', exact:true}).click({force:true})
        //click on the okay button if it appears
        const okayButton = page.getByRole('button', { name: 'Okay', exact:true  })
        if (await okayButton.isVisible()) {
        await okayButton.click()
        }
        //click on ProteinCookies link
        await page.getByRole('link', { name: 'PROTEIN COOKIES', exact:true }).click({force:true})
        await expect(page).toHaveURL('https://chipmonkbaking.com/products/protein-cookies')
    })

    test('it should click on the Cookies link in the main nav to get to Gluten Free Cookies', async ({page}) => {
        await page.getByRole('button', { name: 'COOKIES', exact:true }).click({force:true})
        //click on the okay button if it appears
        const okayButton = page.getByRole('button', { name: 'Okay', exact:true  })
        if (await okayButton.isVisible()) {
        await okayButton.click()
        }
        //click on Keto Cookies link
        await page.getByRole('link', { name: 'GLUTEN FREE COOKIES', exact:true }).click({force:true})
        await expect(page).toHaveURL('https://chipmonkbaking.com/products/gluten-free-cowboy-cookies')
    })

    test('it should click on the Cookies link in the main nav to get to Cookie Bites', async ({page}) => {
        //click on Cookie Bites link
        await page.getByRole('link', { name: 'COOKIE BITES', exact:true }).click({force:true})
        //click on the okay button if it appears
        const okayButton = page.getByRole('button', { name: 'Okay', exact:true  })
        if (await okayButton.isVisible()) {
        await okayButton.click()
        }
        await expect(page).toHaveURL('https://chipmonkbaking.com/products/ketobites')
    })

    test('it should click on the Cookies link in the main nav to get to Bundles', async ({page}) => {
        //click on Bundles link
        await page.getByRole('link', { name: 'BUNDLES', exact:true }).click({force:true})
        //click on the okay button if it appears
        const okayButton = page.getByRole('button', { name: 'Okay', exact:true  })
        if (await okayButton.isVisible()) {
        await okayButton.click()
        }
        //await page.getByLabel('BUNDLES').click()
        await expect(page).toHaveURL('https://chipmonkbaking.com/collections/bundles')
    })

    test('it should click on the Home Baking link in the main nav to get to Dry Mixes', async ({page}) => {
        //click on Home Baking
        await page.getByRole('button', { name: 'HOME BAKING', exact:true }).click({force:true})
        await page.waitForTimeout(3000) 
        await page.getByRole('link', { name: 'DRY MIXES', exact:true }).click({force:true})
        await expect(page).toHaveURL('https://chipmonkbaking.com/products/ketocookiemixes')
    })

    test('it should click on the Home Baking link in the main nav to get to Sweeteners', async ({page}) => {
         //click on Home Baking
         await page.getByRole('button', { name: 'HOME BAKING', exact:true }).click({force:true})
         //click on the okay button if it appears
        const okayButton = page.getByRole('button', { name: 'Okay', exact:true  })
        if (await okayButton.isVisible()) {
        await okayButton.click()
        }
         await page.getByRole('link', { name: 'SWEETENER', exact:true }).click({force:true})
        //await page.getByLabel('SWEETENER').click()
        await expect(page).toHaveURL('https://chipmonkbaking.com/products/ketosweeteners')
    })
    test('it should click on the Home Baking link in the main nav to get to Keto Dark Chocolate Chips', async ({page}) => {
         //click on Home Baking
         await page.getByRole('button', { name: 'HOME BAKING', exact:true }).click({force:true})
         //click on the okay button if it appears
        const okayButton = page.getByRole('button', { name: 'Okay', exact:true  })
        if (await okayButton.isVisible()) {
        await okayButton.click()
        }
        
        await page.getByRole('link', { name: 'KETO DARK CHOCOLATE CHIPS', exact:true }).click({force:true})
        //await page.getByLabel('KETO DARK CHOCOLATE CHIPS').click()
        await expect(page).toHaveURL('https://chipmonkbaking.com/products/allulose-sweetened-dark-chocolate-chips')
    })
    test('it should click on the Home Baking link in the main nav to get to Keto Recipes', async ({page}) => {
         //click on Home Baking
         await page.getByRole('button', { name: 'HOME BAKING', exact:true }).click({force:true})
         //click on the okay button if it appears
        const okayButton = page.getByRole('button', { name: 'Okay', exact:true  })
        if (await okayButton.isVisible()) {
        await okayButton.click()
        }
         await page.getByRole('link', { name: 'KETO RECIPES', exact:true }).click({force:true})
        //await page.getByLabel('KETO RECIPES').click()
        await expect(page).toHaveURL('https://chipmonkbaking.com/blogs/news/tagged/recipes')
    })
   

})












