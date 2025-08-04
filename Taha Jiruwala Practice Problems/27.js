// Access to Restricted Area

function canAccessRestrictedArea (age, badge){
    if(age >= 18 && badge === true){
        return true 
    } 
    return false
}

console.log(canAccessRestrictedArea(19, true));
console.log(canAccessRestrictedArea(15, true));
console.log(canAccessRestrictedArea(19, false));