import{o as a,a as n,z as l}from"./vue-libs-d2aebc66.js";const t={class:"van-doc-markdown-body"},c=l(`<h1>mutilClick</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>mutilClick连点触发</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> scrollX <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;lj-utils/directives/scrollX&#39;</span>;
<span class="hljs-attr">directives</span>: {
   <span class="hljs-attr">scrollX</span>: scrollX,
},
<span class="hljs-comment">// vue3 setup</span>
<span class="hljs-keyword">import</span> vScrollX <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;lj-utils/directive/scrollX&#39;</span>;
<span class="hljs-comment">// 或</span>
<span class="hljs-keyword">import</span> {scrollX <span class="hljs-keyword">as</span> vScrollX} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;lj-utils/directive/scrollX&#39;</span>;
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>
  <span class="hljs-attr">v-scroll-x</span>
  <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 100px; width: 100vw; background: grey; overflow: auto&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 200vw; background: grey&quot;</span>&gt;</span>test text<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre></div>`,5),p=[c],h={__name:"README",setup(e,{expose:s}){return s({frontmatter:{}}),(r,i)=>(a(),n("div",t,p))}};export{h as default};
