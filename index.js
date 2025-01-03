class usrbg {
  async load() {
    try {
      let data = await fetch('https://usrbg.is-hardly.online/users');
      data = await data.json();
      this.data = data;
    } catch(err) {
      throw new Error('Failed to load data')
    }
  }
  has(id) {
    if (!this.data) throw new Error('You need to use load before using has');
    return !!this.data.users[id];
  }
  get(id) {
    if (!this.data) throw new Error('You need to use load before using get');
    if (!this.has(id)) return null;
    return `${this.data.endpoint}/${this.data.bucket}/${this.data.prefix}${id}?${this.data.users[id]}`;
  }
}

module.exports = usrbg;
