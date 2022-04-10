/**
 * const,let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数は再宣言可能";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // let変数は上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // let変数は再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可
// val3 = "const変数を上書き";

// const変数は再宣言不可
// const val3 = "const変数の再宣言";

// const val4 = {
//   name: "manami",
//   age: 24
// };
// val4.name = "mana";
// val4.address = "yokohama";
// console.log(val4);

/**
 * テンプレート文字列
 */
// const name = "manami";
// const age = 24;
// // 「私の名前はmanamiです。年齢は24歳です。」
// console.log(`私の名前は${name}です。年齢は${age}歳です。`);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です"));
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// アロー関数
//
/**
 * 分割代入
 */
// const myProfile = {
//   name: "manami",
//   age: 24
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * デフォルト値、引数など
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん！`);
sayHello("manami");
