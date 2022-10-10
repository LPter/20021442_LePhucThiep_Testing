
function handleClickTest(password, confirmPassword) {
    const num = Number(password);
    let flag = false;
    if (Number.isInteger(num) && password.length === 6) {
        flag = true;
    }

    if (flag) {
        if (password === confirmPassword) {
            return "Confirm password success";
        } else {
            return "ConfirmPassword must matches";
        }
    } else {
        return "Password is invalid";
    }
}

module.exports = handleClickTest;