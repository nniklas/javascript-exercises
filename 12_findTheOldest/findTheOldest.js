const findTheOldest = function(people) {
    const currentDate = new Date().getFullYear()

    let ages = people.map(
        el => {
            if ("yearOfDeath" in el){
                console.log(`current ${ currentDate}, yearofdeath ${el.yearOfDeath}, yearof 
                birth ${el.yearOfBirth} `)
                return el.yearOfDeath - el.yearOfBirth
            } else{
                console.log(" NO yearofDEATH !")
                console.log(`current ${ currentDate}, yearofdeath ${el.yearOfDeath}, yearof 
                    birth ${el.yearOfBirth} `)
                return currentDate - el.yearOfBirth;
                
            }});

    let i = ages.indexOf(Math.max(...ages));
    console.log(ages)
    return people[i]
};



// Do not edit below this line
module.exports = findTheOldest;
