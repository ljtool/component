import{o as a,a as n,z as l}from"./vue-libs-9169e31b.js";const t={class:"van-doc-markdown-body"},c=l(`<h1>mutilClick</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>mutilClick连点触发</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> vMutilClick <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;lj-component/directives/vMutilClick&#39;</span>;
<span class="hljs-attr">directives</span>: {
   <span class="hljs-attr">mutilClick</span>: vMutilClick,
},
<span class="hljs-comment">// vue3 setup</span>
<span class="hljs-keyword">import</span> vMutilClick <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;lj-component/directive/vMutilClick&#39;</span>;
<span class="hljs-comment">// 或</span>
<span class="hljs-keyword">import</span> {vMutilClick} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;lj-component/directive/vMutilClick&#39;</span>;
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">v-mutil-click</span>=<span class="hljs-string">&quot;() =&gt; console.log(2 + &#39;连击&#39;)&quot;</span>&gt;</span>default:2连击<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">data-count</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">v-mutil-click</span>=<span class="hljs-string">&quot;() =&gt; console.log(3 + &#39;连击&#39;)&quot;</span>&gt;</span>
  default:3连击
<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">v-mutil-click</span>=<span class="hljs-string">&quot;() =&gt; console.log(2 + &#39;连击&#39;)&quot;</span>&gt;</span>default:2连击<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
</code></pre></div>`,5),p=[c],d={__name:"README",setup(o,{expose:s}){return s({frontmatter:{}}),(i,r)=>(a(),n("div",t,p))}};export{d as default};
