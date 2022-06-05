// Write your solution here!
const cats =["Milo","Otis","Garfield"]
function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    return [...cats,
        name,
    ]
}
function prependCat(name){
    return [
      ...cats, 
      name,
    ]
}
function removeLastCat(){
    return cats.slice(0,2)
}

