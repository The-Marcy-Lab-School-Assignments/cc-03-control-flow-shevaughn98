//1
function countfromone(){
    for(let i = 0; i <= 10; i++){
        console.log(i);
    }
  
}
//countfromone()
//2
function counteveryodd(num){
    for(let i = 1; i <= num; i++){
        if (i % 2 !== 0){
            console.log(i)
        }
    }
    
  
}
//counteveryodd(10)
//3
function isNegative(number){
    if(number < 0){
        return true
    }else{
        return false
    }
  
}
//console.log(isNegative())
//4
function betweenFiveAndTwenty(numbs){
    if( numbs >= 5 && numbs <= 20 ){
        return false
    }else{
        return true
    }
  
}
//console.log(betweenFiveAndTwenty())
//5 
function isAllLowerCase("string"){
    const lowercase = "string".toLowerCase()
    if(lowercase === "string"){
        return true
    }else{
        return false
    }
        
    }
  
}
console.log(isAllLowerCase())
