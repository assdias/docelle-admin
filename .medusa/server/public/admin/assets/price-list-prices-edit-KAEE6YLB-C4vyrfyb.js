import{u as R,a as S,c as I}from"./chunk-JXBMQ4SZ-BkRJZC5k.js";import{i as T}from"./chunk-G2J2T2QU-CbO33z3W.js";import{R as N,a5 as O,dD as w,e as D,j as l,b as F,r as M,a8 as $,dH as k,t as x,B as v,ab as z,ac as B}from"./index-Bdq-MROr.js";import{D as U}from"./chunk-GE4APTT2-DCAios5A.js";import{c as j}from"./chunk-6GU6IDUA-CDc7wW5L.js";import{K}from"./chunk-6HTZNHPT-DU6r5KLe.js";import{R as h,u as A}from"./chunk-AYRG2MQL-skn56JIp.js";import"./chunk-MWVM4TYO-bKUcYSnf.js";import"./_isIndex-C4iy1AGn.js";import"./index.esm-GbMeVDv3.js";import"./index-C_94Z_JG.js";import"./checkbox-VL5BGotg.js";import"./prompt-Is_Gz9sa.js";var G=B.object({products:I}),H=({priceList:n,products:m,regions:o,currencies:c,pricePreferences:a})=>{const{t:d}=F(),{handleSuccess:u,setCloseOnEscape:s}=A(),r=M.useRef(V(n,m)),t=$({defaultValues:{products:r.current},resolver:z(G)}),{mutateAsync:e,isPending:p}=k(n.id),i=t.handleSubmit(async f=>{const{products:y}=f,{pricesToDelete:g,pricesToCreate:b,pricesToUpdate:E}=J(y,r.current,o);e({delete:g,update:E,create:b},{onSuccess:()=>{x.success(d("priceLists.products.edit.successToast")),u()},onError:L=>{x.error(L.message)}})}),P=S({currencies:c,regions:o,pricePreferences:a});return l.jsx(h.Form,{form:t,children:l.jsxs(K,{onSubmit:i,className:"flex size-full flex-col",children:[l.jsx(h.Header,{}),l.jsx(h.Body,{className:"flex flex-col overflow-hidden",children:l.jsx(U,{columns:P,data:m,getSubRows:f=>{if(T(f)&&f.variants)return f.variants},state:t,onEditingChange:f=>s(!f)})}),l.jsx(h.Footer,{children:l.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[l.jsx(h.Close,{asChild:!0,children:l.jsx(v,{size:"small",variant:"secondary",children:d("actions.cancel")})}),l.jsx(v,{size:"small",type:"submit",isLoading:p,children:d("actions.save")})]})})]})})};function V(n,m){var a,d;const o={},c=(a=n.prices)==null?void 0:a.reduce((u,s)=>{var e;const r=u[s.variant_id]||{};if(!!((e=s.rules)!=null&&e.region_id)){const p=s.rules.region_id;r.region_prices={...r.region_prices,[p]:{amount:s.amount.toString(),id:s.id}}}else r.currency_prices={...r.currency_prices,[s.currency_code]:{amount:s.amount.toString(),id:s.id}};return u[s.variant_id]=r,u},{});for(const u of m)o[u.id]={variants:((d=u.variants)==null?void 0:d.reduce((s,r)=>{const t=c[r.id]||{};return s[r.id]=t,s},{}))||{}};return o}function _(n,m){const o=[],c=m.reduce((a,d)=>(a[d.id]=d.currency_code,a),{});for(const[a,d]of Object.entries(n||{})){const{variants:u}=d||{};for(const[s,r]of Object.entries(u||{})){const{currency_prices:t,region_prices:e}=r||{};for(const[p,i]of Object.entries(t||{}))(i==null?void 0:i.amount)!==""&&typeof(i==null?void 0:i.amount)<"u"&&o.push({variantId:s,currencyCode:p,amount:j(i.amount),id:i.id});for(const[p,i]of Object.entries(e||{}))(i==null?void 0:i.amount)!==""&&typeof(i==null?void 0:i.amount)<"u"&&o.push({variantId:s,regionId:p,currencyCode:c[p],amount:j(i.amount),id:i.id})}}return o}function C(n){return`${n.variantId}-${n.currencyCode}-${n.regionId||"none"}-${n.id||"none"}`}function q(n,m){const o=[],c=[],a=[],d=n.reduce((r,t)=>(r[C(t)]=t,r),{}),u=m.reduce((r,t)=>(r[C(t)]=t,r),{}),s=new Set([...Object.keys(d),...Object.keys(u)]);for(const r of s){const t=d[r],e=u[r];t&&e&&(isNaN(e.amount)&&e.id&&a.push(e.id),t.amount!==e.amount&&e.id&&o.push({id:e.id,variant_id:e.variantId,currency_code:e.currencyCode,rules:e.regionId?{region_id:e.regionId}:void 0,amount:e.amount})),!t&&e&&c.push({variant_id:e.variantId,currency_code:e.currencyCode,rules:e.regionId?{region_id:e.regionId}:void 0,amount:e.amount}),t&&!e&&t.id&&a.push(t.id)}return{pricesToDelete:a,pricesToCreate:c,pricesToUpdate:o}}function J(n,m,o){const c=_(m,o),a=_(n,o);return q(c,a)}var ae=()=>{const{id:n}=N(),[m]=O(),o=m.get("ids[]"),{price_list:c,isLoading:a,isError:d,error:u}=w(n),s=o==null?void 0:o.split(","),{products:r,isLoading:t,isError:e,error:p}=D({id:s,limit:(s==null?void 0:s.length)||9999,price_list_id:[n],fields:"title,thumbnail,*variants"}),{isReady:i,regions:P,currencies:f,pricePreferences:y}=R(),g=!a&&!!c&&!t&&!!r&&i;if(d)throw u;if(e)throw p;return l.jsxs(h,{children:[l.jsx(h.Title,{asChild:!0,children:l.jsxs("span",{className:"sr-only",children:["Edit Prices for ",c==null?void 0:c.title]})}),l.jsx(h.Description,{className:"sr-only",children:"Update prices for products in the price list"}),g&&l.jsx(H,{priceList:c,products:r,regions:P,currencies:f,pricePreferences:y})]})};export{ae as Component};
