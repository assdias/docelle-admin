import{C as j}from"./chunk-XDJ7OMBR-XWZSyP79.js";import{K as f}from"./chunk-6HTZNHPT-DU6r5KLe.js";import{b as a,u as v}from"./chunk-AYRG2MQL-skn56JIp.js";import{R as b,b as p,Q as g,j as s,H as C,a8 as y,aq as P,t as u,v as e,I as F,B as m,ab as S,ac as i}from"./index-Bdq-MROr.js";import"./x-mark-mini-WtBfAEyd.js";import"./prompt-Is_Gz9sa.js";var E=i.object({title:i.string().min(1),values:i.array(i.string()).optional()}),I=({product:l})=>{const{t:r}=p(),{handleSuccess:n}=v(),o=y({defaultValues:{title:"",values:[]},resolver:S(E)}),{mutateAsync:c,isPending:d}=P(l.id),x=o.handleSubmit(async t=>{c(t,{onSuccess:()=>{u.success(r("products.options.create.successToast",{title:t.title})),n()},onError:async h=>{u.error(h.message)}})});return s.jsx(a.Form,{form:o,children:s.jsxs(f,{onSubmit:x,className:"flex flex-1 flex-col overflow-hidden",children:[s.jsxs(a.Body,{className:"flex flex-1 flex-col gap-y-4 overflow-auto",children:[s.jsx(e.Field,{control:o.control,name:"title",render:({field:t})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{children:r("products.fields.options.optionTitle")}),s.jsx(e.Control,{children:s.jsx(F,{...t,placeholder:r("products.fields.options.optionTitlePlaceholder")})}),s.jsx(e.ErrorMessage,{})]})}),s.jsx(e.Field,{control:o.control,name:"values",render:({field:t})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{children:r("products.fields.options.variations")}),s.jsx(e.Control,{children:s.jsx(j,{...t,placeholder:r("products.fields.options.variantionsPlaceholder")})}),s.jsx(e.ErrorMessage,{})]})})]}),s.jsx(a.Footer,{children:s.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[s.jsx(a.Close,{asChild:!0,children:s.jsx(m,{variant:"secondary",size:"small",children:r("actions.cancel")})}),s.jsx(m,{type:"submit",size:"small",isLoading:d,children:r("actions.save")})]})})]})})},B=()=>{const{id:l}=b(),{t:r}=p(),{product:n,isLoading:o,isError:c,error:d}=g(l);if(c)throw d;return s.jsxs(a,{children:[s.jsx(a.Header,{children:s.jsx(C,{children:r("products.options.create.header")})}),!o&&n&&s.jsx(I,{product:n})]})};export{B as Component};
