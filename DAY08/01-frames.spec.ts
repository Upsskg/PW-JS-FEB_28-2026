

import { test } from "@playwright/test";

test(`Learn to handle frames using playwright`,async ({page}) => {
    

    await page.goto(`https://developer.servicenow.com/dev.do`);

    const allframes = page.frames(); //[frame1,fram2,....] => always frame1 is main page of the application

    const frameCount = allframes.length
    console.log(frameCount);



    // const title1 = await allframes[0].title(); // title of the page

    // console.log(title1);
    

    // const title2 = await allframes[0].title(); // title of the page

    // console.log(title2);
    

    // for (let index = 0; index < frameCount; index++) {
    //    let frametitle = await allframes[index].title();
    //     console.log(`The title of frames are ${frametitle}`);    
        
    // }



})