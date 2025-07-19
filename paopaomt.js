/*******************************
脚本名称:  泡泡玛特app
描述:预售和回流
脚本作者：泪随青丝散
更新时间：2099年5月2日 下午5:46
问题反馈：1147057208
QQ会员群：1147057208
TG反馈群：无
TG频道群：无
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

https:\/\/.*?\.tj\.wxgateway\.com\/(?:shopserver\/v1\/app\/info|boxserver\/app\/v1\/queue\/xcx\/extract)\? url script-response-body https://raw.githubusercontent.com/LSSQS/1234/main/paopaomt.js

[mitm] 

hostname = *.tj.wxgateway.com

*******************************/

var body = $response.body.replace(/"inventory":\d+,/g,'"inventory":50,')
.replace(/"state":\d,/g,'"state":0,')
$done({ body });