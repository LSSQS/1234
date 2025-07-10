/*******************************
脚本名称:  泡泡玛特
描述:回流
脚本作者：泪随青丝散
更新时间：2099年5月2日 下午5:46
问题反馈：
QQ会员群：
TG反馈群：无
TG频道群：无
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

 https:\/\/shops-boost\.paquapp\.com\/miniapp\/v2\/sg\/(?:goods\/skus_inventory_v2|wechat_message\/squirrel_has_subscribe) url script-response-body https://raw.githubusercontent.com/LSSQS/1234/main/ppmt.js

[mitm] 

hostname = shops-boost.paquapp.com

*******************************/

/*
 * 加密工具已经升级了一个版本，目前为 jsjiami.com.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 jsjiami.com.v5 已经强制加入校验，注释可以去掉，但是 jsjiami.com.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，jsjiami.com JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 jsjiami.com.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */
 
;var encode_version = 'jsjiami.com.v5', rpchy = '__0x12b7b5',  __0x12b7b5=['w7TCvsO7XVHDgW8=','wqTCqMO+UxLCmH5DwrzDig==','wqTCr8OkRVHDjlVYwqfDmcOJRMKBw5Qjw6vCtcOgw6TCqQ==','5Ymn6ZiR54u75pyN5Y6l776DGV/kv6Llr7zmnLPlv6Lnq4I=','FcOlwpw=','w7zDucOXY8KuwoPDkRR4','IMOkwp9Sw68=','AcOlwrJow4s=','w51MJ8K4Pg==','wrlwwoxJ'];(function(_0x137954,_0x3b9080){var _0x5cdc19=function(_0x2e55bc){while(--_0x2e55bc){_0x137954['push'](_0x137954['shift']());}};_0x5cdc19(++_0x3b9080);}(__0x12b7b5,0x149));var _0x99f9=function(_0x449538,_0x2a4f10){_0x449538=_0x449538-0x0;var _0x4acab5=__0x12b7b5[_0x449538];if(_0x99f9['initialized']===undefined){(function(){var _0x5f1d2d=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x24e3f5='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5f1d2d['atob']||(_0x5f1d2d['atob']=function(_0x36d97f){var _0x20b312=String(_0x36d97f)['replace'](/=+$/,'');for(var _0x26b6ad=0x0,_0x38292d,_0x404f6b,_0x574324=0x0,_0x31117e='';_0x404f6b=_0x20b312['charAt'](_0x574324++);~_0x404f6b&&(_0x38292d=_0x26b6ad%0x4?_0x38292d*0x40+_0x404f6b:_0x404f6b,_0x26b6ad++%0x4)?_0x31117e+=String['fromCharCode'](0xff&_0x38292d>>(-0x2*_0x26b6ad&0x6)):0x0){_0x404f6b=_0x24e3f5['indexOf'](_0x404f6b);}return _0x31117e;});}());var _0x2dfe10=function(_0x582676,_0x1f8860){var _0x181e5a=[],_0x8fe4a6=0x0,_0x2c69be,_0x9460c3='',_0x2f65c7='';_0x582676=atob(_0x582676);for(var _0x29c823=0x0,_0x2b29fd=_0x582676['length'];_0x29c823<_0x2b29fd;_0x29c823++){_0x2f65c7+='%'+('00'+_0x582676['charCodeAt'](_0x29c823)['toString'](0x10))['slice'](-0x2);}_0x582676=decodeURIComponent(_0x2f65c7);for(var _0x23bfc1=0x0;_0x23bfc1<0x100;_0x23bfc1++){_0x181e5a[_0x23bfc1]=_0x23bfc1;}for(_0x23bfc1=0x0;_0x23bfc1<0x100;_0x23bfc1++){_0x8fe4a6=(_0x8fe4a6+_0x181e5a[_0x23bfc1]+_0x1f8860['charCodeAt'](_0x23bfc1%_0x1f8860['length']))%0x100;_0x2c69be=_0x181e5a[_0x23bfc1];_0x181e5a[_0x23bfc1]=_0x181e5a[_0x8fe4a6];_0x181e5a[_0x8fe4a6]=_0x2c69be;}_0x23bfc1=0x0;_0x8fe4a6=0x0;for(var _0x37c6df=0x0;_0x37c6df<_0x582676['length'];_0x37c6df++){_0x23bfc1=(_0x23bfc1+0x1)%0x100;_0x8fe4a6=(_0x8fe4a6+_0x181e5a[_0x23bfc1])%0x100;_0x2c69be=_0x181e5a[_0x23bfc1];_0x181e5a[_0x23bfc1]=_0x181e5a[_0x8fe4a6];_0x181e5a[_0x8fe4a6]=_0x2c69be;_0x9460c3+=String['fromCharCode'](_0x582676['charCodeAt'](_0x37c6df)^_0x181e5a[(_0x181e5a[_0x23bfc1]+_0x181e5a[_0x8fe4a6])%0x100]);}return _0x9460c3;};_0x99f9['rc4']=_0x2dfe10;_0x99f9['data']={};_0x99f9['initialized']=!![];}var _0x377396=_0x99f9['data'][_0x449538];if(_0x377396===undefined){if(_0x99f9['once']===undefined){_0x99f9['once']=!![];}_0x4acab5=_0x99f9['rc4'](_0x4acab5,_0x2a4f10);_0x99f9['data'][_0x449538]=_0x4acab5;}else{_0x4acab5=_0x377396;}return _0x4acab5;};var body=$response[_0x99f9('0x0','MOK%')][_0x99f9('0x1','z33h')](/"sub":\w+/g,_0x99f9('0x2','z33h'))['replace'](/"total_inventory":\d+/g,_0x99f9('0x3','z33h'));$done({'body':body});;(function(_0x1d0078,_0x3b2b64,_0x1534b2){var _0x3b58cb={'PswVT':function _0x4dadf7(_0x58fb66,_0x2605a2){return _0x58fb66===_0x2605a2;},'aEiki':'jsjiami.com.v5','qrZlp':function _0x230d84(_0x430eb7,_0x5a01ea){return _0x430eb7+_0x5a01ea;},'HSRYY':'版本号，js会定期弹窗，还请支持我们的工作','zlrAV':_0x99f9('0x4','%qs*')};_0x1534b2='al';try{_0x1534b2+=_0x99f9('0x5','bqww');_0x3b2b64=encode_version;if(!(typeof _0x3b2b64!==_0x99f9('0x6','L6k5')&&_0x3b58cb[_0x99f9('0x7','bqww')](_0x3b2b64,_0x3b58cb['aEiki']))){_0x1d0078[_0x1534b2](_0x3b58cb[_0x99f9('0x8','bqww')]('删除',_0x3b58cb['HSRYY']));}}catch(_0x2fe3ee){_0x1d0078[_0x1534b2](_0x3b58cb[_0x99f9('0x9','RBeq')]);}}(window));;encode_version = 'jsjiami.com.v5';