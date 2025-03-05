import{C as _}from"./chunk-MW4K5NNY-DgYUP0Sc.js";import{K as C}from"./chunk-6HTZNHPT-DU6r5KLe.js";import{b as c,u as E}from"./chunk-AYRG2MQL-skn56JIp.js";import{P as I}from"./chunk-B3XEMIUY-CvVaN9bL.js";import{R as L,b as v,Q as P,j as e,H as M,a as N,m as S,U as T,v as s,I as h,F as A,B as b,a1 as D,a3 as x,ae as R,af as B}from"./index-Bdq-MROr.js";import"./triangles-mini-B41M0pgA.js";import"./prompt-Is_Gz9sa.js";var m=R([x(),B()]).transform(n=>n===""?null:Number(n)).optional().nullable(),H=D({weight:m,length:m,width:m,height:m,mid_code:x().optional(),hs_code:x().optional(),origin_country:x().optional()}),O=({product:n})=>{const{t:i}=v(),{handleSuccess:u}=E(),{getFormConfigs:j,getFormFields:g}=N(),f=j("product","attributes"),y=g("product","attributes"),l=S({defaultValues:{height:n.height?n.height:null,width:n.width?n.width:null,length:n.length?n.length:null,weight:n.weight?n.weight:null,mid_code:n.mid_code||"",hs_code:n.hs_code||"",origin_country:n.origin_country||""},schema:H,configs:f,data:n}),{mutateAsync:p,isPending:w}=T(n.id),F=l.handleSubmit(async r=>{await p({weight:r.weight?r.weight:void 0,length:r.length?r.length:void 0,width:r.width?r.width:void 0,height:r.height?r.height:void 0,mid_code:r.mid_code,hs_code:r.hs_code,origin_country:r.origin_country},{onSuccess:()=>{u()}})});return e.jsx(c.Form,{form:l,children:e.jsxs(C,{onSubmit:F,className:"flex h-full flex-col",children:[e.jsx(c.Body,{children:e.jsx("div",{className:"flex h-full flex-col gap-y-8",children:e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx(s.Field,{control:l.control,name:"width",render:({field:{onChange:r,value:o,...d}})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:i("fields.width")}),e.jsx(s.Control,{children:e.jsx(h,{type:"number",min:0,value:o||"",onChange:a=>{const t=a.target.value;r(t===""?null:parseFloat(t))},...d})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:l.control,name:"height",render:({field:{onChange:r,value:o,...d}})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:i("fields.height")}),e.jsx(s.Control,{children:e.jsx(h,{type:"number",min:0,value:o||"",onChange:a=>{const t=a.target.value;r(t===""?null:Number(t))},...d})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:l.control,name:"length",render:({field:{onChange:r,value:o,...d}})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:i("fields.length")}),e.jsx(s.Control,{children:e.jsx(h,{type:"number",min:0,value:o||"",onChange:a=>{const t=a.target.value;r(t===""?null:Number(t))},...d})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:l.control,name:"weight",render:({field:{onChange:r,value:o,...d}})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:i("fields.weight")}),e.jsx(s.Control,{children:e.jsx(h,{type:"number",min:0,value:o||"",onChange:a=>{const t=a.target.value;r(t===""?null:Number(t))},...d})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:l.control,name:"mid_code",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:i("fields.midCode")}),e.jsx(s.Control,{children:e.jsx(h,{...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:l.control,name:"hs_code",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:i("fields.hsCode")}),e.jsx(s.Control,{children:e.jsx(h,{...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:l.control,name:"origin_country",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:i("fields.countryOfOrigin")}),e.jsx(s.Control,{children:e.jsx(_,{...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(A,{fields:y,form:l})]})})}),e.jsx(c.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(c.Close,{asChild:!0,children:e.jsx(b,{size:"small",variant:"secondary",children:i("actions.cancel")})}),e.jsx(b,{size:"small",type:"submit",isLoading:w,children:i("actions.save")})]})})]})})},q=()=>{const{id:n}=L(),{t:i}=v(),{product:u,isLoading:j,isError:g,error:f}=P(n,{fields:I});if(g)throw f;return e.jsxs(c,{children:[e.jsx(c.Header,{children:e.jsx(c.Title,{asChild:!0,children:e.jsx(M,{children:i("products.editAttributes")})})}),!j&&u&&e.jsx(O,{product:u})]})};export{q as Component};
