<template>
    <div id="PrimarySymbol">
        <input type="checkbox" v-model="checkedFilter" @change="filterItems" value="video" /> Video 
        <div v-if="filteredData" class="category" v-for="ty of types" :key="ty">
            <h2>{{ty}}</h2>
            <div class="api" v-for="api of apis(ty)" :key="api.name">
                <div class="header clickable">
                    <span class="name">{{api.name}}</span>
                    <span class="desc" v-html="api.link"></span>
                </div>
            </div>
        </div>
        <div v-else class="category" v-for="type of types" :key="type">
            <h2>{{type}}</h2>
            <div class="api" v-for="api of apis(type)" :key="api.name">
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
import meta_filtered from '../meta_yt_links.json';
import meta from '../meta_primary_symbol.json';
import { marked } from 'marked';
import {$} from '../main';

interface APIEntry
{
    name: string
    desc: string
    type: string
    docs: string
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

@Options({components: {}})
export default class PrimarySymbol extends Vue
{

    checkedFilter = false
    filteredData = false

    get types(): string[]
    {
        if(this.checkedFilter)
            return meta_filtered.map(it => it.type).filter(onlyUnique)
        else
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

    apis(ty: string) 
    {
        if(this.checkedFilter)
            return meta_filtered.filter(it => it.type == ty)
        else
            return meta.filter(it => it.type == ty)
    }

    filterItems() {
        this.filteredData = this.checkedFilter 
    }
}
</script>

<style lang="sass" scoped>
#PrimarySymbol > * + *
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