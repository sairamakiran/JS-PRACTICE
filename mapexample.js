// let numbers=[1,2,3]
// let doubled = numbers.map(
    //num=>num*2
 //   )
// console.log(doubled)
let usernames = ['user1','user2']
let testusers = usernames.map(
    u=>(
    {
       username:u,
       password:'Test@123'
    }
    )
);
console.log(testusers)
