tinhTong = () => {
    let mang = [1,3,5,7,9];
    //phanTu = document.getElementById('mang').value;
   // mang.push(phanTu);
     console.log(mang);
    let sum = 0;
    mang.forEach(e => {
        sum += e;
    });
    alert("Tổng các phần tử trong mảng là: "+ sum)
}
testDom=()=>{
    let hello=document.getElementById('hello_txt');
    hello.outerHTML=('<h2 id="hello_txt" style="color: red;">Hello2</h2>')
    
}
testBack=()=>{
    let hello=document.getElementById('hello_txt');
    hello.outerHTML=('<h1 id="hello_txt">Hello</h1>')
    
}