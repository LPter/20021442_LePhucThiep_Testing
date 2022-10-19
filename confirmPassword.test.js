const handleClickTest = require('./index');

// // 12 test case kiểm thử bảng quyết định
// test('password: 1111, confirmPassword: 1111', () => {
//     expect(handleClickTest('1111', '1111')).toBe("Password is invalid");
// })

// test('password: 2222, confirmPassword: 1111', () => {
//     expect(handleClickTest('2222', '1111')).toBe("Password is invalid");;
// })

// test('password: 123456, confirmPassword: 123456', () => {
//     expect(handleClickTest('123456', '123456')).toBe("Confirm password success");
// })

// test('password: 123456, confirmPassword: 156111', () => {
//     expect(handleClickTest('123456', '156111')).toBe("ConfirmPassword must matches");
// })

// test('password: 1234567, confirmPassword: 1234567', () => {
//     expect(handleClickTest('1234567', '1234567')).toBe("Password is invalid");
// })

// test('password: 1234567, confirmPassword: 1111111', () => {
//     expect(handleClickTest('1234567', '1111111')).toBe("Password is invalid");
// })

// test('password: ##%%, confirmPassword: ##%%', () => {
//     expect(handleClickTest('##%%', '##%%')).toBe("Password is invalid");
// })

// test('password: ##%%, confirmPassword: #####', () => {
//     expect(handleClickTest('##%%', '#####')).toBe("Password is invalid");
// })

// test('password: ***&&&, confirmPassword: ***&&&', () => {
//     expect(handleClickTest('***&&&', '***&&&')).toBe("Password is invalid");
// })

// test('password: FFFFFF, confirmPassword: HHHHHH', () => {
//     expect(handleClickTest('FFFFFF', 'HHHHHH')).toBe("Password is invalid");
// })

// test('password: ****KKK, confirmPassword: ****KKK', () => {
//     expect(handleClickTest('****KKK', '****KKK')).toBe("Password is invalid");
// })

// test('password: PPPPPPPP, confirmPassword: 00oooiii', () => {
//     expect(handleClickTest('PPPPPPPP', '00oooiii')).toBe("Password is invalid");
// })



// // 4 test case kiểm thử lớp tương đương
// test('password: 123456, confirmPassword: 123456', () => {
//     expect(handleClickTest('123456', '123456')).toBe("Confirm password success");
// })

// test('password: 123456, confirmPassword: 156111', () => {
//     expect(handleClickTest('123456', '156111')).toBe("ConfirmPassword must matches");
// })

// test('password: abcdefg, confirmPassword: abcdefg', () => {
//     expect(handleClickTest('abcdefg', 'abcdefg')).toBe("Password is invalid");
// })

// test('password: abcdefg, confirmPassword: 1abcde', () => {
//     expect(handleClickTest('abcdefg', '1abcde')).toBe("Password is invalid");
// })

// // 4 test case kiểm thử dòng điều khiển
// test('password: 123456, confirmPassword: 123456', () => {
//     expect(handleClickTest('123456', '123456')).toBe("Confirm password success");
// })

// test('password: 123456, confirmPassword: 156111', () => {
//     expect(handleClickTest('123456', '156111')).toBe("ConfirmPassword must matches");
// })

// test('password: abcdefg, confirmPassword: abcdefg', () => {
//     expect(handleClickTest('abcdefg', 'abcdefg')).toBe("Password is invalid");
// })

// test('password: abcdefg, confirmPassword: 1abcde', () => {
//     expect(handleClickTest('1234567', 'abcdefa')).toBe("Password is invalid");
// })

// 2 test case kiểm thử dòng dữ liệu

test('password: 123456, confirmPassword: 123456', () => {
    expect(handleClickTest('123456', '123456')).toBe("Confirm password success");
})

test('password: abcdefg, confirmPassword: abcdefg', () => {
    expect(handleClickTest('abcdefg', 'abcdefg')).toBe("Password is invalid");
})