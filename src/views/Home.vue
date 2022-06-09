<template>
    <div id="Home">
        <div class="category" v-for="ty of types" :key="ty">
            <h2>{{ty}}</h2>
            <div class="api" v-for="api of apis(ty)" :key="api.name">
                <div class="header clickable">
                    <span class="name">{{api.name}}</span>
                    <span class="desc" v-html="api.desc"></span>
                </div>
                <div class="content">
                    <div class="md-docstring" v-html="encodeHtml(api.docs)"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import meta from '../meta.json';
import { marked } from 'marked';
import {$} from '../main';

interface APIEntry
{
    name: string
    path: string
    desc: string
    type: string
    docs: string
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

@Options({components: {}})
export default class Home extends Vue
{
    get types(): string[]
    {
        return meta.map(it => it.type).filter(onlyUnique)
    }

    mounted()
    {
        $('.api').accordion({collapsible: true, header: '.header', heightStyle: 'content',
            active: false})
    }

    encodeHtml(markdown: string): string
    {
        if (!markdown) return ""

        return marked(markdown)
    }

    apis(ty: string): APIEntry[] 
    {
        return meta.filter(it => it.type == ty)
    }
}
</script>

<style lang="sass" scoped>
#Home > * + *
    margin-top: 10px

.category > * + *
    margin-top: 10px


.api
    .header
        text-align: left
        background: #ececec
        padding: 10px
        border-radius: 10px

        .name
            font-weight: bold
            margin-right: 10px
            color: #2298d4
    
    .ui-state-active.header
        border-radius: 10px 10px 0 0!important

</style>

<style lang="sass">
.md-docstring
    text-align: left
    background: #f3f3f3
    padding: 10px
    border-radius: 0 0 10px 10px

    h1, h2
        font-size: 1em !important
</style>