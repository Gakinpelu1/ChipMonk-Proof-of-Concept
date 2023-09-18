import { test, expect} from '@playwright/test';

test.describe('This will grab one of each item available', async () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://chipmonkbaking.com/') 
        //await page.locator('.minimize-tolstoy-modal').click()     
        await page.waitForTimeout(3000) 
        //minimize the Hi Jose video if visible
        const videoModal = page.locator('.minimize-tolstoy-modal')
        if (await videoModal.isVisible()) {
        await videoModal.click()
        }
    })
    
    test('it should make a one-time purchase and add the card all available items', async ({page})=> {

                        //*************BUY ALL THE ITEMS UNDER 'COOKIES'*************

        //***BUY KETO COOKIES
        await page.getByRole('button', { name: 'COOKIES', exact:true }).click({force:true})
        await page.waitForTimeout(3000) 
        //click on Keto Cookies link
        await page.getByLabel('KETO COOKIES').click({force:true})
        //Pick Your (random) Flavor
        await page.locator('.swatch-element').nth(Math.floor(Math.random()* 8)).click({force:true})
        //choose random Delivery
        await page.locator('#selling_plan_5452005736607').selectOption({ index:(Math.floor(Math.random()* 3))})
        ///choose One-time purchase
        await page.getByText('One-time purchase', {exact:true}).click({force:true})
        //choose 6 cookies
        await page.locator('#SingleOptionSelector-1').selectOption({label:'6 Cookies' })
        await page.getByRole('button', {name: 'ADD TO CART'}).click({force:true})
        await page.waitForTimeout(3000) 
        //cart flyout should be visible
        await expect(page.locator('.rebuy-cart__flyout')).toBeVisible()
    })
       

         //****BUY PROTEIN COOKIES

    test('should put some Protein cookies in the cart', async ({page})=> {
        await page.waitForTimeout(3000)
    await page.getByRole('button', { name: 'COOKIES', exact:true }).click({force:true})
        //await page.waitForTimeout(3000) 

        const needClickButton = page.locator('#title-Close')
        if (await needClickButton.isVisible()) {
        await needClickButton.click()
        }

        //click on Protein Cookies link
        await page.locator('[href="/products/protein-cookies"]').first().click({force:true})
        //Pick Your (random) Flavor
        await page.locator('.swatch-element').nth(Math.floor(Math.random()* 4)).click({force:true})
        //choose random Delivery
        await page.locator('#selling_plan_6945906950320').selectOption({ index:(Math.floor(Math.random()* 3))})
        ///choose One-time purchase
        await page.getByText('One-time purchase', {exact:true}).click({force:true})
        //choose 6 cookies
        await page.locator('#SingleOptionSelector-1').selectOption({label:'6 Cookies' })
        await page.getByRole('button', {name: 'ADD TO CART'}).click({force:true})
        await page.waitForTimeout(3000) 
        //cart flyout should be visible
        await expect(page.locator('.rebuy-cart__flyout')).toBeVisible()
        //click on Continue Shopping button

        })

    test('it should add aome Gluten Free Cookies to the cart', async ({page})=> {
        //****BUY GLUTEN FREE COOKIES
        await page.waitForTimeout(3000)
        await page.getByRole('button', { name: 'COOKIES', exact:true }).click({force:true})
        await page.waitForTimeout(3000) 
        //click on Gluten Free Cookies link
        await page.locator('[href="/products/gluten-free-cowboy-cookies"]').first().click({force:true})
        //There is only one flavor-Chocolate!
        //await page.locator('.swatch-element').nth(Math.floor(Math.random()* 2)).click({force:true})
        //Default amount set to 12 cookies
        //await page.locator('#SingleOptionSelector-1').selectOption({label:'12 Cookies' })
        await page.getByRole('button', {name: 'ADD TO CART'}).click({force:true})
        await page.waitForTimeout(3000) 
        //cart flyout should be visible
        await expect(page.locator('.rebuy-cart__flyout')).toBeVisible()

    })

    test('it should add some Keto Cookie bites to the cart', async ({page}) => {
        //Buy some Cookie /Bites
        await page.getByRole('link', { name: 'COOKIE BITES', exact:true }).click({force:true})
         await page.waitForTimeout(3000) 
         //Pick Your (random) Flavor
         await page.locator('.swatch-element').nth(Math.floor(Math.random()* 9)).click({force:true})
         //choose random Delivery
         await page.locator('#selling_plan_5452006457503').selectOption({ index:(Math.floor(Math.random()* 3))})
         ///choose One-time purchase
         await page.getByText('One-time purchase', {exact:true}).click({force:true})
         //choose 1 pouch of cookies
         await page.locator('#SingleOptionSelector-1').selectOption({ index:(Math.floor(Math.random()*3)) })
         await page.getByRole('button', {name: 'ADD TO CART'}).click({force:true})
         //cart flyout should be visible
         await expect(page.locator('.rebuy-cart__flyout')).toBeVisible()
    })

    test('it should add some Bundles to the cart', async ({page}) => {
        //Buy some random Bundle 
        await page.getByRole('link', { name: 'BUNDLES', exact:true }).click({force:true})
         await page.waitForTimeout(3000) 
         //Pick Your (random) Bundle
         await page.locator('.grid-view-item__image-wrapper').nth(Math.floor(Math.random()* 6)).click({force:true})

         const needClickButton = page.locator('#title-Close')
        if (await needClickButton.isVisible()) {
        await needClickButton.click()
        }

         const cookieBundleUrl = page.getByText('Build-a-Cookie-Bundle');
         const buildABiteBundle =  page.getByText('Build-a-Bite Bundle');
         const cookieAndBiteBundle =  page.getByText('Cookie & Bite Bundle');
         const ultimateKetoSample = page.getByText('Ultimate Keto Dessert Sampler Bundle')
         const bakersBundle = page.getByText("Baker's Bundle")
         const nineFlavorsBundle = page.getByText('9 Flavor Cookie Bite Bundle')

         if ( await cookieBundleUrl.isVisible()) { 
            //select a flavor
            await page.locator('#mw_product_option_option_129673_87f5477b-f049-4cd4-8c7b-d804e7c080cf').selectOption({index: (Math.floor(Math.random()*5))})
           //select flavor 2
            await page.locator('#mw_product_option_option_129673_a1514327-9725-430f-8643-1da15342258b').selectOption({index: (Math.floor(Math.random()*5))})
            //select flavor 3
            await page.locator('#mw_product_option_option_129673_68a35eb7-3c92-4aa5-8417-cfd27747c84f').selectOption({index: (Math.floor(Math.random()*5))})
            //select random amojunt of cookies
            await page.locator('#SingleOptionSelector-0').selectOption({ index:(Math.floor(Math.random()*4)) })
            await page.getByRole('button', {name: 'ADD TO CART'}).nth(1).click({force:true})
            //cart flyout should be visible
            await expect(page.locator('.rebuy-cart__flyout')).toBeVisible()
            } else if
            (
            await buildABiteBundle.isVisible()) {
            //select flavor 1    
            await page.locator('#mw_product_option_option_130649_7201c0ed-ca24-44b5-8a89-53daa601f484').selectOption({index: (Math.floor(Math.random()*5))})
            //select flavor 2
            await page.locator('#mw_product_option_option_130649_561bcc79-42e3-4122-9f33-b67fdad07e15').selectOption({index: (Math.floor(Math.random()*5))})   
            //select flavor 3
            await page.locator('#mw_product_option_option_130649_eefb2bfa-1486-47d3-b874-498bb14e035c').selectOption({index: (Math.floor(Math.random()*5))})
            await page.locator('#SingleOptionSelector-0').selectOption({ index:(Math.floor(Math.random()*4)) })
            await page.getByRole('button', {name: 'ADD TO CART'}).nth(1).click({force:true})
            //cart flyout should be visible
            await expect(page.locator('.rebuy-cart__flyout')).toBeVisible()
            } else if
            (await cookieAndBiteBundle.isVisible()) {
            //Select cookie flavor
            await page.locator('#mw_product_option_option_130650_7201c0ed-ca24-44b5-8a89-53daa601f484').selectOption({index: (Math.floor(Math.random()*13))})
            //bite flavor
            await page.locator('#mw_product_option_option_130650_3fe13116-170a-4b8c-8a4e-a20d64cfa646').selectOption({index: (Math.floor(Math.random()*11))})
            await page.getByRole('button', {name: 'ADD TO CART'}).nth(1).click({force:true})
            //cart flyout should be visible
            await expect(page.locator('.rebuy-cart__flyout')).toBeVisible()
            } else if
            (await ultimateKetoSample.isVisible()) {
            //select quantity
            page.locator('#quanity').selectOption({index: (Math.floor(Math.random()*5))})
            await page.getByRole('button', {name: 'ADD TO CART'}).nth(1).click({force:true})
            //cart flyout should be visible
            await expect(page.locator('.rebuy-cart__flyout')).toBeVisible()   
            } else if
            (await bakersBundle.isVisible()) {
            //get Dry Mix
            await page.locator('#mw_product_option_option_176863_821a5890-24b2-4e87-9503-a9dc15dd5a95').selectOption({index: (Math.floor(Math.random()*5))})
            //get Dry Mix
            await page.locator('#mw_product_option_option_176863_7201c0ed-ca24-44b5-8a89-53daa601f484').selectOption({index: (Math.floor(Math.random()*5))})
            //get Dry Mix
            await page.locator('#mw_product_option_option_176863_561bcc79-42e3-4122-9f33-b67fdad07e15').selectOption({index: (Math.floor(Math.random()*5))})
            //get Dry Mix
            await page.locator('#mw_product_option_option_176863_eefb2bfa-1486-47d3-b874-498bb14e035c').selectOption({index: (Math.floor(Math.random()*5))})
            //get Dry Mix
            await page.locator('#mw_product_option_option_176863_4d3b773d-79a8-4de4-8fdb-ae4994887b78').selectOption({index: (Math.floor(Math.random()*5))})
            await page.getByRole('button', {name: 'ADD TO CART'}).nth(1).click({force:true})
            //cart flyout should be visible
            await expect(page.locator('.rebuy-cart__flyout')).toBeVisible()    
            } else if
            (await nineFlavorsBundle.isVisible()){
            
            await page.getByRole('button', {name: 'ADD TO CART'}).nth(1).click({force:true})
            //cart flyout should be visible
            await page.waitForTimeout(3000)
            await expect(page.locator('.rebuy-cart__flyout')).toBeVisible()}
            
         
    })



        //*************Buy Home Baking things*************


        //*************Verify Cart items*************

        //*************Verify total*************



    })

        
    

    
