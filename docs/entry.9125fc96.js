async function u(c,i,s){const o=document.querySelectorAll(`astro-root[uid="${c}"]`);if(o.length===0)throw new Error(`Unable to find the root for the component ${i.name}`);let n=null,r=o[0].querySelector("astro-fragment");if(r==null&&o[0].hasAttribute("tmpl")){let e=o[0].querySelector("template[data-astro-template]");e&&(n=e.innerHTML,e.remove())}else r&&(n=r.innerHTML);const a=async()=>{const e=await s();for(const t of o)e(t,n)},l=new IntersectionObserver(e=>{for(const t of e)if(!!t.isIntersecting){l.disconnect(),a();break}});for(const e of o)for(let t=0;t<e.children.length;t++){const f=e.children[t];l.observe(f)}}export{u as default};
