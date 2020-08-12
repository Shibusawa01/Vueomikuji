
new Vue({
  el: "#title",
  data: {
    title: "今夜の夕食を決めよう！",
    push: "ボタンを押してね",
    menu: "Menu",
    btn: "なにが出るかな？",
  },
  methods: {
    onclick: function () {
      this.number = Math.floor(Math.random() * 5);

      curry = "カレーライス";
      sushi = "寿司";
      spa = "スパゲッティ";
      humb = "ハンバーガー";
      ramen = "ラーメン";

      switch (this.number) {
        case 0:
          this.btn = curry;
          break;
        case 1:
          this.btn = sushi;
          break;
        case 2:
          this.btn = spa;
          break;
        case 3:
          this.btn = humb;
          break;
        case 4:
          this.btn = ramen;
          break;
      }
    }
  }
})
