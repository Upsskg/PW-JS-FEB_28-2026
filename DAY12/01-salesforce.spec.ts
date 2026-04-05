/* Things to remember during a POSTMAN request :

1. endpoint
2. CRUD - POST, GET, PATCH, DELETE
3. Authorization :  bearer token for salesforce application
username and password
4. Headers :
 content-type : application/json
5. Body : raw-> json
{
    "LastName": "Ravindran",
    "Salutation": "Mr.",
    "Company": "TestLeaf"
} */


/* What page fixture does in UI testing is done by request fixture in API testing
1. Page fixture -> Creates Isolated Context--> Page
 
2. Request fixture -> Creates an isolated APIRequestConext comes from the interface APIRequestConext */

import { expect, test } from "@playwright/test";

let inst_url: any
let token: any
let id: any

test.describe.serial(`Salesforce API with Playwright`, async () => {


    test(`Generate Token`, async ({ request }) => {

        //Alignmnet shortcut => alet+shift+f

        const response = await request.post("https://login.salesforce.com/services/oauth2/token",
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                form: {
                    "client_id": "3MVG9VMBZCsTL9hnYaVamF_yN9dU9vnyYTjdMcnDvjqPwwaBINmmrxc5nreM3diNAwBKSsbWXhbOweaL8rdNB",
                    "client_secret": "045B87EED90898F6D00920E973955E048E340B15506294A39847C4C824C8E260",
                    "username": "ravindran.ramdas@testleaf.com",
                    "password": "Ravisalesplay#1234",
                    "grant_type": "password"
                }
            }
        )

        const responseBody = await response.json() // deserialization
        console.log(responseBody);

        inst_url = responseBody.instance_url // https://testleaf22-dev-ed.develop.my.salesforce.com
        token = responseBody.access_token // 00DNS000001rTAX!AQEAQIa7hvQXwW1c4zo8OANV65BHVVHoNo7Fa.h38C1Y4JgbTBUpWOkFfa09ypAA5h4bHT.hWxmdopeH1888g71m5pweKvO4

        console.log(response.status());//
        console.log(response.statusText());

        expect(response.status()).toBe(200)
        expect(response.statusText()).toBe("OK")
        

    })


    test(`Create Lead`, async ({ request }) => {

        //Alignmnet shortcut => alet+shift+f

        const response = await request.post(`${inst_url}/services/data/v65.0/sobjects/Lead/`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                data: {
                    "FirstName": "Ravi",
                    "LastName": "R",
                    "Salutation": "Mr.",
                    "Company": "Qeagle",
                    "Phone": "123456"
                }
            }

        )

        const responseBody = await response.json() // deserialization
        console.log(responseBody.id);//00QNS00000oqMyv2AE
        id = responseBody.id

        /*  */
        
        console.log(response.status());//
        console.log(response.statusText());

        expect(response.status()).toBe(201)
        expect(response.statusText()).toBe("Created")

    })

    test(`Fetch Lead`, async ({ request }) => {

        //Alignmnet shortcut => alt+shift+f

        const response = await request.get(`${inst_url}/services/data/v65.0/sobjects/Lead/${id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }

        )

        const responseBody = await response.json() // deserialization
        console.log(responseBody.Id);

        console.log(response.status());//
        console.log(response.statusText());

        expect(response.status()).toBe(200)
        expect(response.statusText()).toBe("OK")

    })
})