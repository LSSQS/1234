/*******************************
脚本名称:  校研u学院
描述:
脚本作者：泪随青丝散
更新时间：2099年5月2日 下午5:46
问题反馈：1147057208
QQ会员群：1147057208
TG反馈群：无
TG频道群：无
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

^https:\/\/www\.unischool\.cn\/(api\/student\/v1\/course_template\/goods\/query|api\/student\/v1\/tutorial\/detail\/query|api\/student\/v1\/tutorial\/detail\/category\/query|api\/student\/v1\/goods\/vip\/get_by_product_name\?|api\/student\/campus\/homepage\/v1\/student_info|api\/student\/v1\/student_hw\/hw_task\/query\?|api\/student\/v1\/user\/area\/book_detail\?) url script-response-body https://raw.githubusercontent.com/LSSQS/1234/main/wyux.js

[mitm] 

hostname = www.unischool.cn

*******************************/

var body = $response.body.replace(/"moduleStatus":\d/g,'"moduleStatus":1')
.replace(/"vipTask":\w+/g,'"vipTask":false')
.replace(/"experience":\w+/g,'"experience":true')
.replace(/"lastStudyHere":\w+/g,'"lastStudyHere":true')
.replace(/"lockStatus":\d/g,'"lockStatus":1')
.replace(/"vip":\w+/g,'"vip":true')
.replace(/"purchased":\w+/g,'"purchased":true')
$done({ body });