import{b as j,R as g,dm as f,j as s,H as C,a8 as _,dq as b,t as u,v as e,B as x,ab as y,ac as m}from"./index-Bdq-MROr.js";import{K as v}from"./chunk-6HTZNHPT-DU6r5KLe.js";import{b as t,u as F}from"./chunk-AYRG2MQL-skn56JIp.js";import{D as h}from"./date-picker-CQaZo_tA.js";import"./prompt-Is_Gz9sa.js";import"./clsx-B-dksMZM.js";import"./popover-wEuZpluk.js";import"./index-Bbqi4xRY.js";import"./x-mark-mini-WtBfAEyd.js";import"./triangle-left-mini-BJGlQY3c.js";var S=m.object({starts_at:m.date().nullable(),ends_at:m.date().nullable()}),D=({campaign:a})=>{const{t:r}=j(),{handleSuccess:o}=F(),n=_({defaultValues:{starts_at:a.starts_at?new Date(a.starts_at):void 0,ends_at:a.ends_at?new Date(a.ends_at):void 0},resolver:y(S)}),{mutateAsync:l,isPending:c}=b(a.id),p=n.handleSubmit(async i=>{await l({starts_at:i.starts_at||null,ends_at:i.ends_at||null},{onSuccess:({campaign:d})=>{u.success(r("campaigns.configuration.edit.successToast",{name:d.name})),o()},onError:d=>{u.error(d.message)}})});return s.jsx(t.Form,{form:n,children:s.jsxs(v,{onSubmit:p,className:"flex flex-1 flex-col",children:[s.jsx(t.Body,{children:s.jsxs("div",{className:"flex flex-col gap-y-4",children:[s.jsx(e.Field,{control:n.control,name:"starts_at",render:({field:i})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{children:r("campaigns.fields.start_date")}),s.jsx(e.Control,{children:s.jsx(h,{granularity:"minute",hourCycle:12,shouldCloseOnSelect:!1,...i})}),s.jsx(e.ErrorMessage,{})]})}),s.jsx(e.Field,{control:n.control,name:"ends_at",render:({field:i})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{children:r("campaigns.fields.end_date")}),s.jsx(e.Control,{children:s.jsx(h,{granularity:"minute",shouldCloseOnSelect:!1,...i})}),s.jsx(e.ErrorMessage,{})]})})]})}),s.jsx(t.Footer,{children:s.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[s.jsx(t.Close,{asChild:!0,children:s.jsx(x,{variant:"secondary",size:"small",children:r("actions.cancel")})}),s.jsx(x,{isLoading:c,type:"submit",variant:"primary",size:"small",children:r("actions.save")})]})})]})})},T=()=>{const{t:a}=j(),{id:r}=g(),{campaign:o,isLoading:n,isError:l,error:c}=f(r);if(l)throw c;return s.jsxs(t,{children:[s.jsxs(t.Header,{children:[s.jsx(t.Title,{asChild:!0,children:s.jsx(C,{children:a("campaigns.configuration.edit.header")})}),s.jsx(t.Description,{className:"sr-only",children:a("campaigns.configuration.edit.description")})]}),!n&&o&&s.jsx(D,{campaign:o})]})};export{T as Component};
