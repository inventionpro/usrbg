class usrbg {
  constructor(v = 2) {
    if (![1, 2].includes(v)) throw new Error('Invalid usrbg version')
    this.v = v;
  }
  async load() {
    let data;
    switch (this.v) {
      case 1:
        data = await fetch('https://raw.githubusercontent.com/Discord-Custom-Covers/usrbg/master/dist/usrbg.json');
        data = await data.json();
        this.data = data;
        break;
      case 2:
        data = await fetch('https://usrbg.is-hardly.online/users');
        data = await data.json();
        this.data = data;
        break;
    }
  }
  has(id) {
    if (this.v == 1) {
      return !!this.data.filter(e=>e.uid==id)[0];
    } else if (this.v == 2) {
      return !!this.data.users[id];
    }
  }
  get(id) {
    if (!this.has(id)) return null;
    return this.v==1?this.data.filter(e=>e.uid==id)[0].img:`${this.data.endpoint}/${this.data.bucket}/${this.data.prefix}${id}?${this.data.users[id]}`;
  }
}

module.exports = usrbg;
