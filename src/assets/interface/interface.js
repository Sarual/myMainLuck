/* ========================================================
                        AA连锁酒店小程序接口配置
======================================================== */
// 环境
var isFormal = false
// 域名
var host = isFormal ? 'localhost:8080' : 'localhost:8080'
export const service = {
  isFormal: isFormal,
  // 登录接口
  login: `${host}/autoLogin`,
  // 更新用户信息
  uploadWechatUserinfo: `${host}/v1/users/upload_wechat_userinfo`,
  wxJsCode2Session: `${host}/v1/users/upload_wechat_userinfo`,
  // 主域
  host
}
export default {
  service
}
