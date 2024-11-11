// JavaScript用ファイル
new Vue({
    el: '#app',
    data: {
      password1: '',
      password2: ''
    },
    computed: {
      // 入力されている、且つパスワードが一致しているかを確認する算出プロパティ
      passwordMismatch() {
        return this.password1 && this.password2 && this.password1 !== this.password2; 
      },
      // 入力されているかは、this.･･･ で判定可能
      // 例）一致TRUE（パスワード：aaaa、パスワード確認：aaaa）
      // 例）不一致FALSE（パスワード：aaaa、パスワード確認：aaab）

      // ボタンをTRUEなら登録を表示orFALSEなら使用不可を表示にする算出プロパティ
      canRegister() {
        return this.password1 && this.password2 && this.password1 === this.password2;
      }
    }
  });