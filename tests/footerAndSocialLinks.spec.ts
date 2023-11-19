import { test, expect, chromium } from '@playwright/test';

test.describe('This verifies all of footer links are operating correctly', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://chipmonkbaking.com/')     
        await page.waitForTimeout(3000) 

        const okayButton = page.getByRole('button', { name: 'Okay', exact:true  })
        if (await okayButton.isVisible()) {
        await okayButton.click()
        }

        const videoModal = page.locator('.minimize-tolstoy-modal')
        if (await videoModal.isVisible()) {
        await videoModal.click()
        }
    })

    test.afterEach(async ({page}) => {
        await page.waitForTimeout(2000)
        })

    //THIS WILL VERIFY THE 'OUR STORY' LINK  
    test('This will verify the "Our Story" works', async ({page}) => {
        await page.getByText('Our Story', {exact: true}).click({force:true})
        await page.waitForTimeout(2000)
        await expect(page).toHaveURL('https://chipmonkbaking.com/pages/our-story')
    })

  //THIS WILL VERIFY THE 'BLOG' LINK 
    test('This will verify the "Blog" link works', async ({page}) => {
        await page.getByText('Blog', {exact: true}).click({force:true})
        await expect(page).toHaveURL('https://chipmonkbaking.com/blogs/news')
    })  

    //THIS WILL VERIFY THE 'VIDEOS' LINK 
    test('This will verify the "Video" link works', async ({page}) => {
        await page.getByText('Videos', {exact: true}).click({force:true})
        await expect(page).toHaveURL('https://chipmonkbaking.com/blogs/news/tagged/videos')
    })
    
    //THIS WILL VERIFY THE 'RECIPES' LINK 
    test('This will verify the "Recipe" link works', async ({page}) => {
        await page.getByText('Recipes', {exact: true}).click({force:true})
        await expect(page).toHaveURL('https://chipmonkbaking.com/blogs/news/tagged/recipes')
    })

    //THIS WILL VERIFY THE 'SEARCH' LINK 
    test('This will verify the "Search" link works', async ({page}) => {
        await page.getByRole('link', {name: 'Search'}).click({force:true})
        await expect(page).toHaveURL('https://chipmonkbaking.com/search')
    })  

    //THIS WILL VERIFY THE 'ALL PRODUCTS' LINK 
    test('This will verify the "All Products" link works', async ({page}) => {
        await page.getByText('All Products', {exact: true}).click({force:true})
        await expect(page).toHaveURL('https://chipmonkbaking.com/collections/all-products')
    })  

    //THIS WILL VERIFY THE 'OUR SWEETENERS' LINK 
    test('This will verify the "" link works', async ({page}) => {
        await page.getByText('Our Sweeteners', {exact: true}).click({force:true})
        await expect(page).toHaveURL('https://chipmonkbaking.com/pages/our-sweeteners')
    })  

    //THIS WILL VERIFY THE 'NUTRITION ANDE INGREDIENTS' LINK 
    test('This will verify the "Nutrition and Ingredients" link in the footer works', async ({page}) => {
        await page.getByText('Nutrition & Ingredients', {exact: true}).click({force:true})
        await expect(page).toHaveURL('https://chipmonkbaking.com/pages/nutrition-ingredients')
    })  

    //THIS WILL VERIFY THE 'FAQ' LINK 
    test('This will verify the "FAQ" link works', async ({page}) => {
        await page.getByText('FAQ', {exact: true}).click({force:true})
        await expect(page).toHaveURL('https://chipmonkbaking.com/pages/faq')
    }) 
    
    //THIS WILL VERIFY THE 'SWAG' LINK 
    test('This will verify the "Swag" link works', async ({page}) => {
        await page.getByText('Swag', {exact: true}).click({force:true})
        await expect(page).toHaveURL('https://chipmonkbaking.com/collections/apparel')
    })
 
    //THIS WILL VERIFY THE 'GIFT CARDS' LINK 
    test('This will verify the "Gift Cards" link works', async ({page}) => {
        await page.getByText('Gift Cards', {exact: true}).click({force:true})
        await expect(page).toHaveURL('https://chipmonkbaking.com/products/chipmonk-baking-gift-card')   
    })

    //THIS WILL VERIFY THE 'PRESS AND MEDIA' LINK 
    test('This will verify the "Press and Media" link works', async ({page}) => {
        await page.getByText('Press & Media', {exact: true}).click({force:true})
        await expect(page).toHaveURL('https://chipmonkbaking.com/pages/chipmonk-in-the-news') 
    })

    //THIS WILL VERIFY THE 'INFLUENCER PARTNERSHIPS' LINK 
    test('This will verify the "Influencer Partnerships" link works', async ({page}) => {
        await page.getByText('Influencer Partnerships', {exact: true}).click({force:true})
        await expect(page).toHaveURL('https://chipmonkbaking.com/pages/collabs')   
    })

    //THIS WILL VERIFY THE 'ACCOUNT' LINK 
    test('This will verify the "Account" link works', async ({page}) => {
        await page.getByText('Account', {exact: true}).click({force:true})
        await expect(page).toHaveURL('https://chipmonkbaking.com/account/login')   
    })

    //THIS WILL VERIFY THE 'STORE LOCATOR' LINK 
    test('This will verify the "Store Locator" link works', async ({page}) => {
        await page.getByText('Store Locator', {exact: true}).click({force:true})
        await expect(page).toHaveURL('https://chipmonkbaking.com/pages/store-locator')   
    })

    //THIS WILL VERIFY THE 'ORDER WHOLESALE' LINK 
    test('This will verify the "Order Wholesale" link works', async ({page}) => {
        await page.getByText('Order Wholesale', {exact: true}).click({force:true})
        await expect(page).toHaveURL('https://chipmonkbaking.com/pages/order-wholesale')   
    })

    //THIS WILL VERIFY THE 'BECOME AN AFFILIATE' LINK 
    test('This will verify the "Become an Affiliate" link works', async ({page}) => {
        await page.getByText('Become An Affiliate', {exact: true}).click({force:true})
        await expect(page).toHaveURL('https://www.shareasale.com/shareasale.cfm?merchantID=102604')   
    })

    //THIS WILL VERIFY THE 'CONTACT US' LINK 
    test('This will verify the "Contact Us" link works', async ({page}) => {
        await page.getByText('Contact Us', {exact: true}).click({force:true})
        await expect(page).toHaveURL('https://chipmonkbaking.com/pages/contact-us')   
    })

    //THIS WILL VERIFY THE 'SUBSCRIBE TO NEWSLETTER' LINK 
    test('This will verify the "Subscribe to Newsletter" link works', async ({page}) => {
        await page.getByText('Subscribe to Newsletter', {exact: true}).click({force:true})
        await expect(page).toHaveURL('https://chipmonkbaking.com/pages/newsletter')   
    })

    //THIS WILL VERIFY THE 'PRIVACY POLICY' LINK 
    test('This will verify the "Privacy Policy" link works', async ({page}) => {
        await page.getByText('Privacy Policy', {exact: true}).click({force:true})
        await expect(page).toHaveURL('https://chipmonkbaking.com/policies/privacy-policy')   
    })

    //THIS WILL VERIFY THE 'REFUND POLICY' LINK 
    test('This will verify the "Refund Policy" link works', async ({page}) => {
        await page.getByText('Refund Policy', {exact: true}).click({force:true})
        await expect(page).toHaveURL('https://chipmonkbaking.com/policies/refund-policy')   
    })

    //THIS WILL VERIFY THE 'TERMS OF SERVICE' LINK 
    test('This will verify the "Terms of Service" link works', async ({page}) => {
        await page.getByText('Terms Of Service', {exact: true}).click({force:true})
        await expect(page).toHaveURL('https://chipmonkbaking.com/pages/terms-of-services')   
    })

    //THIS WILL VERIFY THE 'PROUD MEMBER OF GOTEXAN' LINK 
    test('This will verify the "Proud Member of GoTexan" link works', async ({page}) => {
        await page.getByText('Proud Member of GoTexan', {exact: true}).click({force:true})
        await expect(page).toHaveURL('https://chipmonkbaking.com/pages/gotexan')   
    })

    //THIS WILL VERIFY THE 'JOIN THE CHIPMONK COMMUNITY' LINK 
    test('This will verify the "Join the ChipMonk Community" link works', async ({page}) => {
        await page.getByText('Join the ChipMonk Community', {exact: true}).click({force:true})
        await expect(page).toHaveURL('https://www.facebook.com/groups/1073899496537136')   
    })

    //THIS WILL VERIFY THE 'PRIVATE LABEL AND CONTRACT MANUFACTURING' LINK 
    test('This will verify the "Private Label and Contract" link works', async ({page}) => {
        await page.getByText('Private Label & Contract Manufacturing', {exact: true}).click({force:true})
        await expect(page).toHaveURL('https://chipmonkbaking.com/pages/private-label-contract-manufacturing')   
    })

   /********************************PRODUCTS FOOTER LINKS********************************/

   //THIS WILL VERIFY THE 'KETO COOKIES' LINK 
   test('This will verify the "Keto Cookies" link works', async ({page}) => {
    await page.getByRole('link', { name: 'Keto Cookies', exact: true }).click({force:true})
    await expect(page).toHaveURL('https://chipmonkbaking.com/products/ketocookies')   
    })

    //THIS WILL VERIFY THE ' KETO BITES' LINK 
   test('This will verify the "Keto Bites', async ({page}) => {
    await page.getByText('Keto Bites', {exact: true}).click({force:true})
    await expect(page).toHaveURL('https://chipmonkbaking.com/products/ketobites')   
    })

    //THIS WILL VERIFY THE 'KETO BUNDLES' LINK 
   test('This will verify the "Keto Bundles" link works', async ({page}) => {
    await page.getByText('Keto Bundles', {exact: true}).click({force:true})
    await expect(page).toHaveURL('https://chipmonkbaking.com/collections/bundles')   
    })

    //THIS WILL VERIFY THE 'KETO COOKIES DRY MIXES' LINK 
   test('This will verify the "Keto Cookies Dry Mixes" link works', async ({page}) => {
    await page.getByText('Keto Cookies Dry Mixes', {exact: true}).click({force:true})
    await expect(page).toHaveURL('https://chipmonkbaking.com/products/ketocookiemixes')   
    })

     //THIS WILL VERIFY THE 'KETO SWEETENERS' LINK 
   test('This will verify the "Keto Sweeteners" link works', async ({page}) => {
    await page.getByText('Keto Sweeteners', {exact: true}).click({force:true})
    await expect(page).toHaveURL('https://chipmonkbaking.com/products/ketosweeteners')   
    })

    /*****************************SOCIAL MEDIA LINKS********************************/

    //THIS WILL VERIFY THE FACEBOOK ICON LINK, TAKING THE USER TO THE FB PAGE
    /*Because a new browser tab opens when clicking on the social media links, "more robust" code
    was needed:
        1)Establish the context for the new browser tab
        2)Wait for the "initial" page to load
        3)Once the initial page (the landing page)
        has loaded, wait for the social media link icon to be clicked
        4)verify the title of the new tab that subsequently opened    
    */
   test('This will verify the Facebook icon link works', async ({page}) => {
  
   const browser=await chromium.launch()
   const context=await browser.newContext()

   const page1=await context.newPage()
   await page1.goto('https://chipmonkbaking.com/')
   
   const pagePromise=context.waitForEvent('page')
   await page1.locator('[href="https://www.facebook.com/chipmonkbaking/"]').click()

   //Verify the title on the Social Media link that has opened in the new tab
   const newPage=await pagePromise;
   await expect(newPage).toHaveTitle('ChipMonk Baking | Houston TX | Facebook')

   await page1.waitForTimeout(3000)
   await newPage.waitForTimeout(3000)
   await browser.close()
   })

   //THIS WILL VERIFY THE TWITTER/X ICON LINK, TAKING THE USER TO THE TWITTER/X PAGE
   test('This will verify the Twitter/X icon link works', async ({page}) => {
  
    const browser=await chromium.launch()
    const context=await browser.newContext()
 
    const page1=await context.newPage()
    await page1.goto('https://chipmonkbaking.com/')
    
    const pagePromise=context.waitForEvent('page')
    await page1.locator('[href="https://twitter.com/chipmonkbaking?lang=en"]').click()
 
    //Verify the title on the Social Media link that has opened in the new tab
    const newPage=await pagePromise;
    await expect(newPage).toHaveTitle('ChipMonk Baking (@ChipMonkBaking) / X')
 
    await page1.waitForTimeout(3000)
    await newPage.waitForTimeout(3000)
    await browser.close()
    })

    //THIS WILL VERIFY THE PINTEREST ICON LINK, TAKING THE USER TO THE PINTEREST PAGE
   test('This will verify the Pinterest icon link works', async ({page}) => {
  
    const browser=await chromium.launch()
    const context=await browser.newContext()
 
    const page1=await context.newPage()
    await page1.goto('https://chipmonkbaking.com/')
    
    const pagePromise=context.waitForEvent('page')
    await page1.locator('[href="https://www.pinterest.com/chipmonkbaking"]').click()
 
    //Verify the title on the Social Media link that has opened in the new tab
    const newPage=await pagePromise;
    await expect(newPage).toHaveTitle('ChipMonk Baking (chipmonkbaking) | Official Pinterest account')
 
    await page1.waitForTimeout(3000)
    await newPage.waitForTimeout(3000)
    await browser.close()
    })

    //THIS WILL VERIFY THE INSTAGRAMICON LINK, TAKING THE USER TO THE IG PAGE
   test('This will verify the Instagram icon link works', async ({page}) => {
  
    const browser=await chromium.launch()
    const context=await browser.newContext()
 
    const page1=await context.newPage()
    await page1.goto('https://chipmonkbaking.com/')
    
    const pagePromise=context.waitForEvent('page')
    await page1.locator('[href="https://www.instagram.com/chipmonkbaking/?hl=en"]').click()
 
    //Verify the title on the Social Media link that has opened in the new tab
    const newPage=await pagePromise;
    await expect(newPage).toHaveTitle('ChipMonk | Houston Keto Baking (@chipmonkbaking) • Instagram photos and videos')
 
    await page1.waitForTimeout(3000)
    await newPage.waitForTimeout(3000)
    await browser.close()
    })

    //THIS WILL VERIFY THE YOUTUBE LINK, TAKING THE USER TO THE YOUTUBE PAGE
   test('This will verify the YouTube icon link works', async ({page}) => {
  
    const browser=await chromium.launch()
    const context=await browser.newContext()
 
    const page1=await context.newPage()
    await page1.goto('https://chipmonkbaking.com/')
    
    const pagePromise=context.waitForEvent('page')
    await page1.locator('[href="https://www.youtube.com/channel/UCI8zTuTzKXNcyuvLMKTM2Zg"]').click()
 
    //Verify the title on the Social Media link that has opened in the new tab
    const newPage=await pagePromise;
    await expect(newPage).toHaveTitle('ChipMonk Baking - YouTube')
 
    await page1.waitForTimeout(3000)
    await newPage.waitForTimeout(3000)
    await browser.close()
    })  
})











