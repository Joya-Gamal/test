var age=Number(window.prompt("please enter your age"));
if(age<10)
{
    console.log("you are child");
}
else if(age==10){
   console.log("you are a child");
}
else{
    console.log("you are not child");
}
var user={
    name:"ahmed",
    age:20,
    height:175,
    Gender:true,
    child :{
       name:"Mohammed",
       age:3,
       hight:90,
       Gernder:true
    },
    eat:function( x)
    {
         if(x=="yes")
         {
             console.log("okay");
         }
         else{
             console.log("let's have a meal");
         }
    }
}

var windows={
    lert:function(x)
    {
        console.log(x);
    }
}

var friends=["ali ","khaled","zaki"];
console.log(friends.reverse());
friends.push(1);
console.log(friends.join('-'));