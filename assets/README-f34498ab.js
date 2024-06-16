import{o as a,a as n,z as t}from"./vue-libs-9169e31b.js";const l={class:"van-doc-markdown-body"},p=t(`<h1>lazy</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>基于视口的图片懒加载 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver" target="_blank">IntersectionObserver</a></p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> vLazy <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;lj-component/directives/vLazy&#39;</span>;
<span class="hljs-attr">directives</span>: {
   <span class="hljs-attr">mutilClick</span>: vLazy,
},
<span class="hljs-comment">// vue3 setup</span>
<span class="hljs-keyword">import</span> vLazy <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;lj-component/directive/vLazy&#39;</span>;
<span class="hljs-comment">// 或</span>
<span class="hljs-keyword">import</span> {vLazy} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;lj-component/directive/vLazy&#39;</span>;
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>使用defaultSrcSet(src) 设置全局默认图<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>data-default:设置默认图（优先）<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">img</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;h-400 w-300 object-cover&quot;</span>
  <span class="hljs-attr">v-lazy</span>=<span class="hljs-string">&quot;&#39;https://picsum.photos/300/300?t=3&#39;&quot;</span>
  <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;&quot;</span>
/&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">img</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;h-400 w-300 object-cover&quot;</span>
  <span class="hljs-attr">data-default</span>=<span class="hljs-string">&quot;https://img.lj4.top/img/2.jpg&quot;</span>
  <span class="hljs-attr">v-lazy</span>=<span class="hljs-string">&quot;&#39;https://picsum.photos/300/300?t=2&#39;&quot;</span>
  <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;&quot;</span>
/&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">img</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;h-400 w-300 object-cover&quot;</span>
  <span class="hljs-attr">data-default</span>=<span class="hljs-string">&quot;https://img.lj4.top/img/1.jpg&quot;</span>
  <span class="hljs-attr">:data-src</span>=<span class="hljs-string">&quot;&#39;https://picsum.photos/300/300?t=1&#39;&quot;</span>
  <span class="hljs-attr">v-lazy</span>
  <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;&quot;</span>
/&gt;</span>
</code></pre></div>`,5),c=[p],j={__name:"README",setup(o,{expose:s}){return s({frontmatter:{}}),(r,h)=>(a(),n("div",l,c))}};export{j as default};
