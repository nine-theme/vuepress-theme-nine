---
title: vuepress-theme-nine
date: 2019-04-09
author: wangjia
keys:
 - '123456'
---
## 使用Nine 主题

### 加密
1. 项目加密

```js
module.exports = {
  themeConfig: {
    keyPage: {
      keys: ['123456'],
      color: '#42b983',
      lineColor: '#42b983'
    }
  }
}

```

2. 文章加密
```markdown
---
keys:
 - '123456'
---
```