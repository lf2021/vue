// 这是ES6的模块化语法，浏览器暂时不支持，所以需要基于webpack将有兼容性的js代码转换为没有兼容性的代码
import $ from 'jquery'
import './css/1.css'
import './css/1.less'
import './css/1.scss'

$(function () {
  $('li:odd').css('backgroundColor', 'red')
  $('li:even').css('backgroundColor', 'lightBlue')
})

class Person {
  static info = 'aaa'
}

console.log(Person.info);
