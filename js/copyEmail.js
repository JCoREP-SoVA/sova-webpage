const emails = {
    nayung: "zerome@kookmin.ac.kr",
    hyeonji: "hmj2292@kookmin.ac.kr",
    uihyun: "rabbitdy0101@kookmin.ac.kr",
    hyunsang: "kyr76767@kookmin.ac.kr",
    hangyul: "hkjung1123@kookmin.ac.kr",
    cheolhwan: "ha07058@kookmin.ac.kr",
    haram: "haram1000068@kookmin.ac.kr",
    kwanu: "tlsrhksdn1@kookmin.ac.kr"
}



function copyemail(name) {
    let email = emails[name];
    let ta = document.createElement("textarea");
    document.body.appendChild(ta);
    ta.value = email;
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    alert("이메일이 복사되었습니다ᕕ( ᐛ )ᕗ");
}