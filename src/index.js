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
// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん！`);
// sayHello("manami");

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1, num2);
// sumFunc(arr1[0], arr1[1]);
// console.log(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr8[0]);
// console.log(arr4[0]);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "佐藤"];

// 従来の処理
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const newNameArr = nameArr.map((name) => {
//   if (name === "佐藤") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrue : 条件がfalseの時
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// 数値を3桁区切りで表示する
// const num = "こんにちは";
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };
// console.log(checkSum(1, 10));

/**
 * 論理演算子の本当の意味を知ろう || &&
 */
// const flag1 = true;
// const flaf2 = true;

// if (flag1 || flaf2) {
//   console.log("1か2はtrueになります");
// }

// if (flag1 && flaf2) {
//   console.log("1も2もtrueになります");
// }

// ||は左辺がfalseなら右辺を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左辺がtrueなら右辺を返す
const num = 130;
const fee = num && "金額未設定です";
console.log(fee);
