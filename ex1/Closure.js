//closure: função chamável dentro de outra função
function Dog(){
    function bark(){
        console.log("auau")
    }
    return bark;    
}

const dog = Dog();
dog();
