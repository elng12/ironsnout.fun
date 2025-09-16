# Cloudflare 页面规则配置
# 确保 robots.txt 不被 Cloudflare 管理内容覆盖

# 在 Cloudflare 仪表板中设置页面规则：
# URL: ironsnout.fun/robots.txt
# 设置: 
#   - 缓存级别: 绕过
#   - 浏览器缓存TTL: 4小时
#   - 始终在线: 关闭

# 或者在 Cloudflare Workers 中添加：
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  
  // 如果是 robots.txt，直接从源站获取，不使用 Cloudflare 管理内容
  if (url.pathname === '/robots.txt') {
    return fetch(request, { cf: { cacheTtl: 300 } })
  }
  
  return fetch(request)
}