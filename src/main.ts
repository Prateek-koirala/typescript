let bands: string[]=[]
let myObj: object 
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}


const exampleObj = {
    prop1: 'Prateek',
    prop2: true,
}

exampleObj.prop1 = 'Pramit'

type Guitarist = {
    name : string,
    active : boolean,
    albums : (string|number)[]
}

let evh: Guitarist={
    name:'Eddie',
    active:false,
    albums:[1984,5150,'OU812']
}

let jp: Guitarist = {
    name: 'Jimmy',
    active:false,
    albums:['I','II','IV']
}

const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name}!`
}
console.log(greetGuitarist(jp))


enum Grade {
    U =1,
    D,
    C,
    B,
    A,
}

 console.log(Grade.U)

 