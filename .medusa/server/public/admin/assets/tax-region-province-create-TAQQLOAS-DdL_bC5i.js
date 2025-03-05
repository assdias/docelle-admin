import{a as F}from"./chunk-THZJC662-D8uxQDqu.js";import{P}from"./chunk-YRY2CZ6I-Cq_5sOo-.js";import{R as E,fb as M,j as e,b as S,a8 as $,fa as z,t as _,H as w,T as C,v as t,r as v,I as R,V as B,b3 as L,B as N,ab as H,E as T,ac as i}from"./index-Bdq-MROr.js";import{S as K}from"./chunk-CBJWO6K6-KcVgXR8B.js";import{K as V}from"./chunk-6HTZNHPT-DU6r5KLe.js";import{R as m,u as A}from"./chunk-AYRG2MQL-skn56JIp.js";import{T as O}from"./triangles-mini-B41M0pgA.js";import"./index.esm-GbMeVDv3.js";import"./prompt-Is_Gz9sa.js";var I=v.forwardRef(({className:a,disabled:o,placeholder:u,country_code:r,valueAs:f="iso_2",...h},p)=>{var j;const{t:n}=S(),l=v.useRef(null);v.useImperativeHandle(p,()=>l.current);const b=((j=l.current)==null?void 0:j.value)==="",s=F(r);s||(o=!0);const g=Object.entries((s==null?void 0:s.options)??{}).map(([x,y])=>e.jsx("option",{value:f==="iso_2"?x:y,children:y},x)),d=s?n(`taxRegions.fields.sublevels.placeholders.${s.type}`):"",c=s?e.jsx("option",{value:"",disabled:!0,className:"text-ui-fg-muted",children:u||d}):null;return e.jsxs("div",{className:"relative",children:[e.jsx(O,{className:T("text-ui-fg-muted transition-fg pointer-events-none absolute right-2 top-1/2 -translate-y-1/2",{"text-ui-fg-disabled":o})}),e.jsxs("select",{disabled:o,className:T("bg-ui-bg-field shadow-buttons-neutral transition-fg txt-compact-small flex w-full select-none appearance-none items-center justify-between rounded-md px-2 py-1.5 outline-none","placeholder:text-ui-fg-muted text-ui-fg-base","hover:bg-ui-bg-field-hover","focus-visible:shadow-borders-interactive-with-active data-[state=open]:!shadow-borders-interactive-with-active","aria-[invalid=true]:border-ui-border-error aria-[invalid=true]:shadow-borders-error","invalid::border-ui-border-error invalid:shadow-borders-error","disabled:!bg-ui-bg-disabled disabled:!text-ui-fg-disabled",{"text-ui-fg-muted":b},a),...h,ref:l,children:[c,g]})]})});I.displayName="CountrySelect";var k=i.object({province_code:i.string().min(1),name:i.string().optional(),code:i.string().min(1),rate:i.object({float:i.number().optional(),value:i.string().optional()}).optional(),is_combinable:i.boolean().optional()}),q=({parent:a})=>{const{t:o}=S(),{handleSuccess:u}=A(),r=$({defaultValues:{province_code:"",code:"",is_combinable:!1,name:"",rate:{value:""}},resolver:H(k)}),{mutateAsync:f,isPending:h}=z(),p=r.handleSubmit(async s=>{var d;const g=s.name&&((d=s.rate)!=null&&d.float)?{name:s.name,rate:s.rate.float,code:s.code,is_combinable:s.is_combinable}:void 0;await f({country_code:a.country_code,province_code:s.province_code,parent_id:a.id,default_tax_rate:g},{onSuccess:({tax_region:c})=>{_.success(o("taxRegions.create.successToast")),u(`/settings/tax-regions/${a.id}/provinces/${c.id}`)},onError:c=>{_.error(c.message)}})}),n=F(a.country_code),l=(n==null?void 0:n.type)||"sublevel",b=o(`taxRegions.fields.sublevels.labels.${l}`);return e.jsx(m.Form,{form:r,children:e.jsxs(V,{onSubmit:p,className:"flex h-full flex-col overflow-hidden",children:[e.jsx(m.Header,{}),e.jsx(m.Body,{className:"flex flex-1 flex-col overflow-hidden",children:e.jsx("div",{className:"flex flex-1 flex-col items-center overflow-y-auto",children:e.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8 px-2 py-16",children:[e.jsxs("div",{children:[e.jsx(w,{children:o(`taxRegions.${l}.create.header`)}),e.jsx(C,{size:"small",className:"text-ui-fg-subtle",children:o(`taxRegions.${l}.create.hint`)})]}),e.jsx("div",{className:"grid gap-4 md:grid-cols-2",children:e.jsx(t.Field,{control:r.control,name:"province_code",render:({field:s})=>e.jsxs(t.Item,{children:[e.jsx(t.Label,{tooltip:!n&&o("taxRegions.fields.sublevels.tooltips.sublevel"),children:b}),e.jsx(t.Control,{children:n?e.jsx(I,{country_code:a.country_code,...s}):e.jsx(R,{...s,placeholder:"KR-26"})}),e.jsx(t.ErrorMessage,{})]})})}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-x-1",children:[e.jsx(w,{level:"h2",className:"!txt-compact-small-plus",children:o("taxRegions.fields.defaultTaxRate.label")}),e.jsxs(C,{size:"small",leading:"compact",className:"text-ui-fg-muted",children:["(",o("fields.optional"),")"]}),e.jsx(B,{content:o("taxRegions.fields.defaultTaxRate.tooltip"),children:e.jsx(L,{className:"text-ui-fg-muted"})})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[e.jsx(t.Field,{control:r.control,name:"name",render:({field:s})=>e.jsxs(t.Item,{children:[e.jsx(t.Label,{children:o("fields.name")}),e.jsx(t.Control,{children:e.jsx(R,{...s})}),e.jsx(t.ErrorMessage,{})]})}),e.jsx(t.Field,{control:r.control,name:"rate",render:({field:{value:s,onChange:g,...d}})=>e.jsxs(t.Item,{children:[e.jsx(t.Label,{children:o("taxRegions.fields.taxRate")}),e.jsx(t.Control,{children:e.jsx(P,{...d,value:s==null?void 0:s.value,onValueChange:(c,j,x)=>g({value:c,float:x==null?void 0:x.float})})}),e.jsx(t.ErrorMessage,{})]})}),e.jsx(t.Field,{control:r.control,name:"code",render:({field:s})=>e.jsxs(t.Item,{children:[e.jsx(t.Label,{children:o("taxRegions.fields.taxCode")}),e.jsx(t.Control,{children:e.jsx(R,{...s})}),e.jsx(t.ErrorMessage,{})]})})]})]}),e.jsx(K,{control:r.control,name:"is_combinable",label:o("taxRegions.fields.isCombinable.label"),description:o("taxRegions.fields.isCombinable.hint")})]})})}),e.jsx(m.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(m.Close,{asChild:!0,children:e.jsx(N,{size:"small",variant:"secondary",children:o("actions.cancel")})}),e.jsx(N,{size:"small",type:"submit",isLoading:h,children:o("actions.save")})]})})]})})},ee=()=>{const{id:a}=E(),{tax_region:o,isPending:u,isError:r,error:f}=M(a),h=!u&&!!o;if(r)throw f;return e.jsx(m,{children:h&&e.jsx(q,{parent:o})})};export{ee as Component,ee as TaxProvinceCreate};
