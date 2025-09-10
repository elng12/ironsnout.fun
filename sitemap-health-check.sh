#!/bin/bash
# Sitemap Health Checker Script

echo "🔍 检查 Iron Snout 网站地图状态..."
echo "时间: $(date)"
echo "=================================="

# 检查主sitemap
echo "📋 检查主要站点地图..."
response=$(curl -s -o /dev/null -w "%{http_code}" https://ironsnout.fun/sitemap.xml)
if [ $response -eq 200 ]; then
    echo "✅ sitemap.xml - 状态码: $response"
else
    echo "❌ sitemap.xml - 状态码: $response"
fi

# 检查sitemap索引
echo "📋 检查站点地图索引..."
response=$(curl -s -o /dev/null -w "%{http_code}" https://ironsnout.fun/sitemapindex.xml)
if [ $response -eq 200 ]; then
    echo "✅ sitemapindex.xml - 状态码: $response"
else
    echo "❌ sitemapindex.xml - 状态码: $response"
fi

# 检查robots.txt
echo "🤖 检查 robots.txt..."
response=$(curl -s -o /dev/null -w "%{http_code}" https://ironsnout.fun/robots.txt)
if [ $response -eq 200 ]; then
    echo "✅ robots.txt - 状态码: $response"
else
    echo "❌ robots.txt - 状态码: $response"
fi

# 检查所有sitemap中的URL
echo "🔗 检查站点地图中的所有URL..."
urls=("https://ironsnout.fun/" 
      "https://ironsnout.fun/features.html"
      "https://ironsnout.fun/how-to-play.html"
      "https://ironsnout.fun/faq.html"
      "https://ironsnout.fun/about.html"
      "https://ironsnout.fun/privacy.html"
      "https://ironsnout.fun/contact.html")

for url in "${urls[@]}"; do
    response=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    if [ $response -eq 200 ]; then
        echo "✅ $url - 状态码: $response"
    else
        echo "❌ $url - 状态码: $response"
    fi
done

echo "=================================="
echo "📊 检查完成 - $(date)"

# 通知搜索引擎更新（可选）
echo "🔔 可选：通知搜索引擎更新站点地图"
echo "Google: http://www.google.com/ping?sitemap=https://ironsnout.fun/sitemapindex.xml"
echo "Bing: http://www.bing.com/ping?sitemap=https://ironsnout.fun/sitemapindex.xml"
