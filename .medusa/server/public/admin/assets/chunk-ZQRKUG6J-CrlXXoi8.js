import{c as o}from"./chunk-6GU6IDUA-CDc7wW5L.js";import{ac as t,an as i}from"./index-Bdq-MROr.js";var d=t.union([t.string(),t.number()]).optional().refine(r=>r===""||r===void 0?!0:Number.isInteger(o(r)),{message:i.t("validation.mustBeInt")}).refine(r=>r===""||r===void 0?!0:o(r)>=0,{message:i.t("validation.mustBePositive")}),f=t.union([t.string(),t.number()]).optional().refine(r=>r===""||r===void 0?!0:o(r)>=0,{message:i.t("validation.mustBePositive")});t.array(t.object({key:t.string(),value:t.unknown(),isInitial:t.boolean().optional(),isDeleted:t.boolean().optional(),isIgnored:t.boolean().optional()}));function g(r,a,u){r.clearErrors(a);const l=a.reduce((e,n)=>(e[n]=r.getValues(n),e),{}),s=u.safeParse(l);return s.success?!0:(s.error.errors.forEach(({path:e,message:n,code:m})=>{r.setError(e.join("."),{type:m,message:n})}),!1)}export{f as a,d as o,g as p};
