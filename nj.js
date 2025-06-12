/*******************************
脚本名称:  诺匠修车
描述:解锁回流
脚本作者：泪随青丝散
更新时间：2099年5月2日 下午5:46
问题反馈：1147057208
QQ会员群：1147057208
TG反馈群：无
TG频道群：无
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

^https:\/\/xcx\.agame\.vip\/mimiDemo\/fwq\/xintiaomacadminxxxxxxxx\.php? url script-response-body https://raw.githubusercontent.com/LSSQS/1234/main/nj.js

[mitm] 

hostname = xcx.agame.vip

*******************************/

var body = $response.body.replace(/"adminvip":\w+/g,'"adminvip":true')
$done({ body });