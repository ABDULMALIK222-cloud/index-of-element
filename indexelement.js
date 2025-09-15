const readline = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});
function indexOfElement(N,X,arr){
    let result =[];
    for(let i =0; i < N; i++){
        if(arr[i] === X){
            result.push(i+1);
        }
    }
    if(result.length === 0){
        console.log(-1);
    }else{
        console.log(result.join(" "));
    }
}
readline.question('',(input)=>{
    const[N,X] = input.split('').map(Number);
    readline.question('',(input)=>{
        const arr = input.split('').map(Number);
        indexOfElement(N,X,arr);
        readline.close();
    });
});
