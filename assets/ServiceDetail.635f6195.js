import{d as c,u as d,e as p,o as i,a as o,b as e,f as u,t as b,F as v}from"./index.c4c67a91.js";const _={class:"pt-0 pb-3 sm:py-16 container mx-auto"},g={class:"grid grid-cols-12 py-6"},q={class:"col-span-12 py-0 sm:py-0 sm:col-span-3"},h={class:"text-center font-semibold sm:text-left animate-fadeInLeft"},f={key:0,class:"flex mb-5 sm:px-8 gap-4 flex-row w-full"},x=e("div",{class:"bg-serviceDemo1 bg-no-repeat bg-center bg-cover w-1/2 h-64"},null,-1),y=e("div",{class:"bg-serviceDemo2 bg-no-repeat bg-center bg-cover w-1/2 h-64"},null,-1),k=[x,y],w={key:1,class:"flex mb-5 sm:px-8 gap-4 flex-row w-full"},T=e("div",{class:"bg-serviceDemo2 bg-no-repeat bg-center bg-cover w-1/2 h-64"},null,-1),C=e("div",{class:"bg-serviceDemo1 bg-no-repeat bg-center bg-cover w-1/2 h-64"},null,-1),E=[T,C],R={class:"px-8"},L={class:"font-medium service-subtitle text-2xl pb-3 pt-3 uppercase"},D={key:0},$=e("p",{class:"font-thin"},"Fliesen Text. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora minima totam, ratione quas ipsum beatae, tenetur repudiandae eius doloribus, ipsa aut est sed doloremque voluptatibus sapiente voluptate odio minus eveniet. Et est maxime odit neque blanditiis fugit natus officiis cumque. Repellendus quod neque ab architecto, dolor quaerat voluptas commodi quas quam tempore ex maxime velit suscipit atque omnis, error accusantium.",-1),F=e("br",null,null,-1),N=e("p",{class:"font-thin"},"Fliesen Text. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora minima totam, ratione quas ipsum beatae, tenetur repudiandae eius doloribus, ipsa aut est sed doloremque voluptatibus sapiente voluptate odio minus eveniet. Et est maxime odit neque blanditiis fugit natus officiis cumque. Repellendus quod neque ab architecto, dolor quaerat voluptas commodi quas quam tempore ex maxime velit suscipit atque omnis, error accusantium.",-1),S=[$,F,N],I={key:1},B=e("p",{class:"font-thin"},"aussenanlagen Text. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora minima totam, ratione quas ipsum beatae, tenetur repudiandae eius doloribus, ipsa aut est sed doloremque voluptatibus sapiente voluptate odio minus eveniet. Et est maxime odit neque blanditiis fugit natus officiis cumque. Repellendus quod neque ab architecto, dolor quaerat voluptas commodi quas quam tempore ex maxime velit suscipit atque omnis, error accusantium.",-1),A=e("br",null,null,-1),M=e("p",{class:"font-thin"},"aussenanlagen Text. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora minima totam, ratione quas ipsum beatae, tenetur repudiandae eius doloribus, ipsa aut est sed doloremque voluptatibus sapiente voluptate odio minus eveniet. Et est maxime odit neque blanditiis fugit natus officiis cumque. Repellendus quod neque ab architecto, dolor quaerat voluptas commodi quas quam tempore ex maxime velit suscipit atque omnis, error accusantium.",-1),V=[B,A,M],j={key:2},z=e("p",{class:"font-thin"},"Else Text. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora minima totam, ratione quas ipsum beatae, tenetur repudiandae eius doloribus, ipsa aut est sed doloremque voluptatibus sapiente voluptate odio minus eveniet. Et est maxime odit neque blanditiis fugit natus officiis cumque. Repellendus quod neque ab architecto, dolor quaerat voluptas commodi quas quam tempore ex maxime velit suscipit atque omnis, error accusantium.",-1),G=e("br",null,null,-1),H=e("p",{class:"font-thin"},"Else Text. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora minima totam, ratione quas ipsum beatae, tenetur repudiandae eius doloribus, ipsa aut est sed doloremque voluptatibus sapiente voluptate odio minus eveniet. Et est maxime odit neque blanditiis fugit natus officiis cumque. Repellendus quod neque ab architecto, dolor quaerat voluptas commodi quas quam tempore ex maxime velit suscipit atque omnis, error accusantium.",-1),J=[z,G,H],K=e("p",null,null,-1),Q={__name:"ServiceDetail",setup(O){const n=c(),m=d(),r=p(null),s=l=>{m.push(`/services/${l}`),window.scrollTo({left:0,top:r.value.offsetTop,behavior:"smooth"})};return(l,t)=>(i(),o(v,null,[e("div",_,[e("div",g,[e("div",q,[e("ul",h,[e("li",{onClick:t[0]||(t[0]=a=>s("malerarbeiten")),class:"hover:bg-gray-400 text-white p-4 bg-mainColor mb-1 cursor-pointer"},"Malerarbeiten"),e("li",{onClick:t[1]||(t[1]=a=>s("trockenbau")),class:"hover:bg-gray-400 p-4 text-white bg-mainColor mb-1 cursor-pointer"},"Trockenbau"),e("li",{onClick:t[2]||(t[2]=a=>s("stuckateur")),class:"hover:bg-gray-400 p-4 text-white bg-mainColor bg-s mb-1 cursor-pointer"},"Stuckateur Arbeiten"),e("li",{onClick:t[3]||(t[3]=a=>s("esstisch")),class:"hover:bg-gray-400 p-4 text-white bg-mainColor mb-1 cursor-pointer"},"Esstisch"),e("li",{onClick:t[4]||(t[4]=a=>s("fliesen")),class:"hover:bg-gray-400 p-4 text-white bg-mainColor mb-1 cursor-pointer"},"Fliesen"),e("li",{onClick:t[5]||(t[5]=a=>s("aussenanlagen")),class:"hover:bg-gray-400 text-white p-4 bg-mainColor cursor-pointer"},"Au\xDFenanlagen")])]),e("div",{ref_key:"serviceImgs",ref:r,class:"col-span-12 sm:col-span-9 animate-fadeInRight"},[u(n).params.serviceName=="fliesen"?(i(),o("div",f,k)):(i(),o("div",w,E)),e("div",R,[e("h2",L,b(u(n).params.serviceName),1),u(n).params.serviceName=="fliesen"?(i(),o("div",D,S)):u(n).params.serviceName=="aussenanlagen"?(i(),o("div",I,V)):(i(),o("div",j,J))])],512)])]),K],64))}};export{Q as default};
