# USRBG
A api wrapper for [usrbg](https://github.com/Discord-Custom-Covers/usrbg)

## Usage
```js
let usrbg = require('usrbg');

let instance = new usrbg(); // Create usrbg instance

(async()=>{
  await instance.load() // Load data
  
  console.log(instance.has('user id')) // Does user have a usrbg banner?
  console.log(instance.get('user id')) // Get banner url
})()
```
> [!NOTE]\
> usrbg api version 1 no longer works
