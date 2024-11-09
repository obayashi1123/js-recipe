const ohashi = {
  name: "おーはし",
  age: 22,
  hobbies: ["読書", "自転車", "猫と遊ぶこと"],
  isHappy: true,
  address: {
    country: "日本",
    city: "東京",
  },
  hometown: "栃木",
  sayaaa: function () {
    console.log("あああああああああ")
  },
}

// TRY: 練習問題１
// hikakin オブジェクト を真似して自分のプロフィールをオブジェクトで作ってください。
// オブジェクトにはたくさんのプロパティを追加してください。

// ブラウザのコンソールを開いてオブジェクトが正しく作れているか確認してみましょう👀

console.log(ohashi)

// TRY: 練習問題２
// ohashi オブジェクトに入っている sayaaaa メソッドを実行してください。
console.log(ohashi.sayaaa())
