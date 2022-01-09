function fn() {
    let a = document.getElementById('inpfields').value
    let b = getFact(a)
    let result=document.createElement('p')
    result.innerText=b
    document.body.appendChild(result)
}

function getFact(n) {
    if (n == 0) {
        return 1;
    }
    else
    return n * getFact(n - 1);
}
