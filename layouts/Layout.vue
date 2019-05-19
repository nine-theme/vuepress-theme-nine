<template>
    <div class="main">
        <Content/>
    </div>
</template>

<script>
import Content from '@vuepress/core/lib/client/components/Content'
export default {
    name: 'NineLayout',
    components: {
        Content
    }
}
</script>

<style lang="scss" scoped>
.main {
    height: 100%;
}
</style>

