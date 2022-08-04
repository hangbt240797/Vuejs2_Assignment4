const app = Vue.createApp({
  data() {
    return {
      styleNameInput: "",
      hideText: false,
      backgroundColorText: '',
      colorTextInput: '',
      colorBackgroundInput: '',
      fontSize: 30
    };
  },
  computed: {
    setNameClass() {
      if (this.styleNameInput === "user1") {
        return { user1: true };
      } else if (this.styleNameInput === "user2") {
        return { user2: true };
      }
    }
  },
  methods:{
    clickHide(){
      this.hideText = !this.hideText;
    }
  }
});
app.mount("#assignment4");
