/*
*
*/
$(function () {
var uri = 'http://211.155.86.93:3000/xxb';
$.getJSON(uri, function (data) {
var html = createTable(data);
var $table = $('#body');
$table.append(html);
var tw = $table.width();
var dw = $('body').width();
$table.parent('table').show();
// console.log((dw - tw)/2);
// $('.splash-container').css('padding-left', (dw - tw)/2);
});
/*
*
*/
var funds = [{
"code": "000343",
"bao": "理财通",
"platform": "微信"
}, {
"code": "000330",
"bao": "现金宝",
"platform": "网易理财"
}, {
"code": "000330",
"bao": "零钱宝",
"platform": "苏宁"
}, {
"code": "000198",
"bao": "余额宝",
"platform": "支付宝"
}, {
"code": "003003",
"bao": "百赚",
"platform": "百度理财"
}];
/*
*
*/
function createTr (basic, data) {
var str = [
'<tr>',
'<td>' + basic.bao + '</td>',
'<td>' + data.fundName + '</td>',
'<td>' + basic.platform + '</td>',
'<td>' + data.sevenRateReturn + '</td>',
'<td>' + data.tenThousandReturn + '</td>',
'<td>' + data.date + '</td>',
'</tr>'
]
return str.join('');
}
/*
*
*/
function createTable (data) {
var str = '';
data.forEach(function (item, i) {
var basic = funds[i];
str += createTr(basic, item);
});
return str;
}
});