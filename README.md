# USRBG
A usrbg wrapper for [usrbg](https://github.com/Discord-Custom-Covers/usrbg)

## Usage
```js
let usrbg = require('usrbg');

let instance = new usrbg(); // Create usrbg instance
// Optionaly pass a version: 1 or 2

(async()=>{
  await instance.load() // Load data
  
  console.log(instance.has('user id')) // Does user have a usrbg banner?
  console.log(instance.get('user id')) // Get banner url
})()
```
