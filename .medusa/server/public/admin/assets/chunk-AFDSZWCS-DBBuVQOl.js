import{C as h}from"./chunk-UGE5SYTC-C1emUQ3o.js";import{V as l}from"./chunk-F6ZOHZVB-gRzDdzTB.js";import{b as x,df as y,a8 as b,t as c,j as e,B as o,ab as j,a1 as m,dg as d,a3 as n,a4 as _,af as C}from"./index-Bdq-MROr.js";import{K as v}from"./chunk-6HTZNHPT-DU6r5KLe.js";import{u as F,R as a}from"./chunk-AYRG2MQL-skn56JIp.js";var T={name:"",description:"",campaign_identifier:"",starts_at:null,ends_at:null,budget:{type:"usage",currency_code:null,limit:null}},S=m({name:n().min(1),description:n().optional(),campaign_identifier:n().min(1),starts_at:d().nullable(),ends_at:d().nullable(),budget:m({limit:C().min(0).nullish(),type:_(["spend","usage"]),currency_code:n().nullish()})}),V=()=>{const{t:i}=x(),{handleSuccess:u}=F(),{mutateAsync:p,isPending:g}=y(),r=b({defaultValues:T,resolver:j(S)}),f=r.handleSubmit(async s=>{await p({name:s.name,description:s.description,campaign_identifier:s.campaign_identifier,starts_at:s.starts_at,ends_at:s.ends_at,budget:{type:s.budget.type,limit:s.budget.limit?s.budget.limit:void 0,currency_code:s.budget.currency_code}},{onSuccess:({campaign:t})=>{c.success(i("campaigns.create.successToast",{name:t.name})),u(`/campaigns/${t.id}`)},onError:t=>{c.error(t.message)}})});return e.jsx(a.Form,{form:r,children:e.jsxs(v,{onSubmit:f,className:"flex size-full flex-col overflow-hidden",children:[e.jsxs(a.Header,{children:[e.jsx(a.Title,{asChild:!0,children:e.jsx(l,{children:i("campaigns.create.title")})}),e.jsx(a.Description,{asChild:!0,children:e.jsx(l,{children:i("campaigns.create.description")})})]}),e.jsx(a.Body,{className:"flex size-full flex-col items-center overflow-auto py-16",children:e.jsx(h,{form:r})}),e.jsx(a.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(a.Close,{asChild:!0,children:e.jsx(o,{size:"small",variant:"secondary",children:i("actions.cancel")})}),e.jsx(o,{size:"small",variant:"primary",type:"submit",isLoading:g,children:i("actions.create")})]})})]})})};export{S as C,T as D,V as a};
