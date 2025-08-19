/*******************************
脚本名称:  纷玩岛
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

 ^https://(api.livelab.com.cn)/performance/app/project/(dynamic/get_project_info|get_performs|seatPlanStatus|get_project_info) url script-response-body https://raw.githubusercontent.com/LSSQS/1234/main/fwdys.js

[mitm] 

hostname = api.livelab.com.cn

*******************************/

var body = $response.body.replace(/"ashShowDesc":".*?"/g,'"ashShowDesc":""')
.replace(/"stopSale":\d/g,'"stopSale":0')
.replace(/"ashShow":\d/g,'"ashShow":0')
.replace(/"display":\d/g,'"display":1')
.replace(/"selectable":\d/g,'"selectable":1')
.replace(/"type":\d/g,'"type":1')
.replace(/"availableTicketQuantity":\d/g,'"availableTicketQuantity":6')
.replace(/"soldOutFlag":\w+/g,'"soldOutFlag":false')
.replace(/"buttonStatus":\d+/g,'"buttonStatus":1')
.replace(/"status":\d+/g,'"status":22')
.replace(/"saleTime":"\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}"/g,'"saleTime":"2025-07-17 13:00:00"')
.replace(/"standbyStatus":\d+/g,'"standbyStatus":10')
.replace(/"standbyChannel":null,/g,'"standbyChannel":"1,2,3",')
.replace(/"tags":\[\]\,/g,'"tags":[],')
.replace(/"tags":\[\{\"type":\d+,\"tag":"\w+"\}\],/g,'"tags":[],')
$done({ body });
