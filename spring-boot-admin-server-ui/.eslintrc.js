module.exports = {
  env: {
    "browser": true,
    "amd": true,
    "node": true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    "vue/multi-word-component-names": "off"
  }
};
