/*******************************
脚本名称:  纷玩岛候补最终版
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

 ^https://(api.livelab.com.cn)/performance/app/project/(dynamic/get_project_info|get_performs|seatPlanStatus|get_project_info) url script-response-body https://raw.githubusercontent.com/LSSQS/1234/main/fwdhb.js

[mitm] 

hostname = api.livelab.com.cn

*******************************/

var body = $response.body.replace(/"ashShowDesc":".*?"/g,'"ashShowDesc":""')
.replace(/"stopSale":\d/g,'"stopSale":0')
.replace(/"ashShow":\d/g,'"ashShow":0')
.replace(/"display":\d/g,'"display":1')
.replace(/"selectable":\d/g,'"selectable":1')
.replace(/"availableTicketQuantity":\d/g,'"availableTicketQuantity":6')
.replace(/"soldOutFlag":\w+/g,'"soldOutFlag":true')
.replace(/"buttonStatus":\d+/g,'"buttonStatus":19')
.replace(/"status":\d+/g,'"status":22')
.replace(/"saleTime":"\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}"/g,'"saleTime":"2025-07-17 13:00:00"')
.replace(/"standbyStatus":\d+/g,'"standbyStatus":20')
.replace(/"standbyChannel":null,/g,'"standbyChannel":"1,2,3",')
.replace(/"tags":\[\{\"type":12,\"tag":"候补人数已满"\}\]\,/g,'"tags":[{"type":51,"tag":"可候补"}],')
.replace(/"tags":\[\]\,/g,'"tags":[{"type":51,"tag":"可候补"}],')
.replace(/"tags":\[\{\"type":4,\"tag":"缺票登记"\}\]\,/g,'"tags":[{"type":51,"tag":"可候补"}],')
.replace(/"type":52,"tag":"候补人数已满"/g,'"type":51,"tag":"可候补"')
$done({ body });