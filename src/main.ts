// let a:number;
// let b:number;
declare type SumProps = {
    a:number,
    b:number
}
function sum (props:SumProps) {
    const {
        a,b
    }
    = props
    return a+b
}

console.log(sum({a:5,b:10}));