

const nums = [2,4,5,2,1,2]; 

let count = 0
const k =2;

for (let index = 0; index < nums.length; index++) {

    if (nums[index]===k){
        count++
    }    
}

 console.log(count);