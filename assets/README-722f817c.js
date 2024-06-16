import{o as a,a as n,z as l}from"./vue-libs-9169e31b.js";const t={class:"van-doc-markdown-body"},p=l(`<h1>scrollX PC 鼠标横向滑动 scroll</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>scroll PC 使用鼠标移动scroll区域</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><pre><code class="language-js"><span class="hljs-comment">// vue2</span>
<span class="hljs-keyword">import</span> vScroll <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;lj-component/directives/vScroll&#39;</span>;
<span class="hljs-attr">directives</span>: {
   <span class="hljs-attr">scroll</span>: vScroll,
},
<span class="hljs-comment">// vue3 setup</span>
<span class="hljs-keyword">import</span> vScroll <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;lj-component/directive/vScroll&#39;</span>;
<span class="hljs-comment">// 或</span>
<span class="hljs-keyword">import</span> {vScroll} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;lj-component/directive/vScroll&#39;</span>;
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>
  <span class="hljs-attr">v-scroll</span>
  <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 100px; width: 100vw; background: grey; overflow: auto&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 200vw; background: grey&quot;</span>&gt;</span>test text<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span>
  <span class="hljs-attr">v-scroll:x</span>
  <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 100px; width: 100vw; background: grey; overflow: auto&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 200vw; background: grey&quot;</span>&gt;</span>test text<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span>
  <span class="hljs-attr">v-scroll:y</span>
  <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 100px; width: 100vw; background: grey; overflow: auto&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 200vw; background: grey&quot;</span>&gt;</span>test text<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre></div>`,5),c=[p],i={__name:"README",setup(e,{expose:s}){return s({frontmatter:{}}),(r,h)=>(a(),n("div",t,c))}};export{i as default};
