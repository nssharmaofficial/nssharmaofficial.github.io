module.exports = {
  env: {
    browser: true,
    es6: true,
  },
 
  globals: {
    $: false,
    brackets: false,
    clearTimeout: false,

    console: false,
    alert: false,

    define: false,
    require: false,
    setTimeout: false,

    window: false,
    ArrayBuffer: false,
    Uint32Array: false,
    WebSocket: false,
    XMLHttpRequest: false,
  },
};
