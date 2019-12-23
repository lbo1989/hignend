function validate2() {
    var re = /^[a-zA-Z0-9]{4,12}$/ // 아이디와 패스워드가 적합한지 검사할 정규식
    var re2 = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    // 이메일이 적합한지 검사할 정규식

    var id = document.getElementById("join_id");
    var pw = document.getElementById("join_pw");
    var email = document.getElementById("join_email");
    var checkpw = document.getElementById("join_pwcheck");
    var uname = document.getElementById("join_name");
    var birth = document.getElementById("join_birth");
    var birthM = document.getElementById("join_select_m");
    var birthD = document.getElementById("join_select_d");
    var gender = document.getElementById("join_gender");

    var bM = birthM.options[birthM.selectedIndex].value;
    var bD = birthD.options[birthD.selectedIndex].value;
    var gen = gender.options[gender.selectedIndex].value;

    if (!check(re, id, "아이디는 4~12자의 영문 대소문자와 숫자로만 입력")) {
        return false;
    }

    if (!check(re, pw, "패스워드는 4~12자의 영문 대소문자와 숫자로만 입력")) {
        return false;
    }
    if (pw.value != checkpw.value) {

        alert("비밀번호가 다릅니다. 다시 확인해 주세요.");
        checkpw.value = "";
        checkpw.focus();
        return false;
    }
    if (uname.value == "") {
        alert("이름을 입력해 주세요");
        uname.focus();
        return false;
    }
    if (birth.value == "") {
        alert("생년월일을 입력해 주세요");
        birth.focus();
        return false;
    }
    if (bM == "월") {
        alert("생년월일을 입력해 주세요");
        birthM.focus();
        return false;
    }
    if (bD == "일") {
        alert("생년월일을 입력해 주세요");
        birthD.focus();
        return false;
    }
    if (gen == "성별") {
        alert("성별을 입력해 주세요");
        gender.focus();
        return false;
    }

    if (email.value == "") {
        alert("이메일을 입력해 주세요");
        email.focus();
        return false;
    }

    if (!check(re2, email, "적합하지 않은 이메일 형식입니다.")) {
        return false;
    }
    alert("회원가입이 완료되었습니다.");

}

function check(re, what, message) {
    if (re.test(what.value)) {
        return true;
    }
    alert(message);
    what.value = "";
    what.focus();
    //return false;
}
