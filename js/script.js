
chuyenTiep = () => {
    let web = document.getElementById("web_txt").value;
    //console.log(web)
    switch (web) {
        case '1':
            window.open("https://quantrimang.com");
            break;
        case '2':
            window.open("https://download.com.vn/");
            break;
        case '3':
            window.open("https://vndoc.com/")
            break;
        default:
            window.open("https://meta.vn/")
           break;
    }
}
doiMau=()=>{
    let web = document.getElementById("web_txt").value;
    //console.log(web)
    switch (web) {
        case '1':
            document.getElementById('web1').style.color="red";
            document.getElementById('web2').style.color="black";
            document.getElementById('web3').style.color="black";
            document.getElementById('web4').style.color="black";
            break;
        case '2':
            document.getElementById('web1').style.color="black";
            document.getElementById('web2').style.color="red";
            document.getElementById('web3').style.color="black";
            document.getElementById('web4').style.color="black";
            break;
        case '3':
            document.getElementById('web1').style.color="black";
            document.getElementById('web2').style.color="black";
            document.getElementById('web3').style.color="red";
            document.getElementById('web4').style.color="black";
            break;
        default:
            document.getElementById('web1').style.color="black";
            document.getElementById('web2').style.color="black";
            document.getElementById('web3').style.color="black";
            document.getElementById('web4').style.color="red";
           break;
    }
}