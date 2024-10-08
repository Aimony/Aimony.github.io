/*
 * @Author: Aimony
 * @Date: 2024-10-05 23:18:35
 * @LastEditors: Aimony
 * @FilePath: \vblog\.prettierrc.js
 */
// .prettierrc.js
module.exports = {
  tabWidth: 2, // 缩进4个字符
  printWidth: 120, //超过多少换行
  singleQuote: true, //字符串是否使用单引号，默认为false，使用双引号
  semi: false, //行位是否使用分号，默认为true
  trailingComma: 'all', //是否使用尾逗号，有三个可选值"<none|es5|all>"
  arrowParens: 'avoid', // x => x
  bracketSameLine: true, // 使括号在同一行显示
  requirePragma: false, //顶部注释
  htmlWhitespaceSensitivity: 'ignore',
  singleAttributePerLine: false,
}
