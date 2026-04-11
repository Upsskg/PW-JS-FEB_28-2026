// /* Things to remember during a POSTMAN request :

// 1. endpoint
// 2. CRUD - POST, GET, PATCH, DELETE
// 3. Authorization :  bearer token for salesforce application
// username and password
// 4. Headers :
//  content-type : application/json
// 5. Body : raw-> json
// {
//     "LastName": "Ravindran",
//     "Salutation": "Mr.",
//     "Company": "TestLeaf"
// } */


import axios from "axios";

async function createIssue(){


const response = await axios.post("https://manual-testing-demoproject.atlassian.net/rest/api/2/issue",

    /* axios.post(url, data, config) */
    /********************Request Body***************************** */ 
    {
     "fields": {
                "project": {
                    "key": "P2"
                },
                "issuetype": {
                    "name": "Bug"
                },
                "summary": "Test Case for Login Fnctionality Created through Playwright API",
                "description": "Checking Login Functionalty"
            }
        },

    

     /********************Headers***************************** */ 
    {
         headers:{
         "Content-Type":"application/json",
    
         },
 /********************Authorization***************************** */ 

     auth:{
         username :"ravindranr90@gmail.com",
         password : "ATATT3xFfGF0VER1u9eSFR6m2Jj-GR390OI2Xhuki5Zz-7MqzByTdcxLskKMixZ68YWYuo4YFVo9TOeu1Sx4B-hrKl2SzZiIMnI1mhghRYDq8_BxCG8ogjPULmn0WT8nonnGDx8Ml44gpfKZ8VSNODRonFoib1qeVviTiiQun1oscI_vVahLuQ0=1456EC7C"
     }
    }




 )

console.log(response);

 }

createIssue()



