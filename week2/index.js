
// array of objects

var users= [{
  name: "shorif",
  metadata: {
    profilePicture: "",
    pronouns: "he/him",
    address: ""
  }
}];



// map

let arr = [4, 5, 6, 7];


let newArr = arr.map((item)=>{
  return item*2;
})

console.log(newArr);


// filter

let filterArr = arr.filter((item)=>{
  return item%2==0;
});

console.log(filterArr);
