hienThiA = () => {
    let a = 200 + 100;
    alert("a=" + a);
}
let mangA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
hienThiMang = () => {

    alert("Mảng A=["+mangA+"]");
}
hienThiMangMoi = () => {
    let remove = mangA.splice(6, 1);
    let newA = mangA.map(newA => newA * 3);
    alert("Mảng A=["+ newA +"]");
}

