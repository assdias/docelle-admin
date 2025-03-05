import{B as L}from"./chunk-BKJC5BGQ-BC1R0k-V.js";import{L as b}from"./chunk-6WKBBTKM-CvGCSMU1.js";import{S as v,a as N}from"./chunk-RNCCSLPH-pBd51VYR.js";import{d as w,cZ as k,a as S,j as e,c_ as _,q as u,b as o,H as j,T as l,B as T,L as C,eo as B,_ as z,A as D,s as q,ep as P,t as p}from"./index-Bdq-MROr.js";import{a as A}from"./chunk-OIAPXGI2-CRHqC9vR.js";import{T as d}from"./chunk-2RQLKDBF-DzIu_1_y.js";import{u as E}from"./use-prompt-DOzEld64.js";import{P as K}from"./pencil-square-C74A9tK5.js";import{T as F}from"./trash-bcUEvN9u.js";import{C as m}from"./container-BzJLPZyc.js";import{S as I}from"./status-badge-Du1zePF5.js";import"./chunk-EQTBJSBZ-DjvNC3o5.js";import"./Trans-Dd1q9-dO.js";import"./x-mark-mini-WtBfAEyd.js";import"./check-CizfQ2P9.js";import"./prompt-Is_Gz9sa.js";var g="name,*sales_channels,*address,*fulfillment_sets,*fulfillment_sets.service_zones,*fulfillment_sets.service_zones.shipping_options,*fulfillment_sets.service_zones.shipping_options.shipping_profile",Q=()=>({queryKey:_.lists(),queryFn:async()=>await q.admin.stockLocation.list({fields:g}).catch(t=>{throw t.status===401?P("/login"):t})}),re=async t=>{const s=Q();return u.getQueryData(s.queryKey)??await u.fetchQuery(s)};function H(t){const{t:s}=o(),{salesChannels:i}=t;return e.jsx("div",{className:"flex flex-col px-6 py-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(l,{size:"small",weight:"plus",className:"text-ui-fg-subtle flex-1",as:"div",children:s("stockLocations.salesChannels.label")}),e.jsx("div",{className:"flex-1 text-left",children:i!=null&&i.length?e.jsx(L,{rounded:!0,inline:!0,n:3,list:i.map(n=>n.name)}):"-"})]})})}function h(t){const{t:s}=o(),{fulfillmentSet:i,type:n}=t,a=!!i;return e.jsx("div",{className:"flex flex-col px-6 py-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(l,{size:"small",weight:"plus",className:"text-ui-fg-subtle flex-1",as:"div",children:s(`stockLocations.fulfillmentSets.${n}.header`)}),e.jsx("div",{className:"flex-1 text-left",children:e.jsx(I,{color:a?"green":"grey",children:s(a?"statuses.enabled":"statuses.disabled")})})]})})}function O(t){var f,x;const{location:s}=t,{t:i}=o(),n=E(),{mutateAsync:a}=B(s.id),r=async()=>{await n({title:i("general.areYouSure"),description:i("stockLocations.delete.confirmation",{name:s.name}),confirmText:i("actions.remove"),cancelText:i("actions.cancel")})&&await a(void 0,{onSuccess:()=>{p.success(i("shippingProfile.delete.successToast",{name:s.name}))},onError:y=>{p.error(y.message)}})};return e.jsxs(m,{className:"flex flex-col divide-y p-0",children:[e.jsx("div",{className:"px-6 py-4",children:e.jsxs("div",{className:"flex flex-row items-center justify-between gap-x-4",children:[e.jsx("div",{className:"shadow-borders-base flex size-7 items-center justify-center rounded-md",children:e.jsx("div",{className:"bg-ui-bg-field flex size-6 items-center justify-center rounded-[4px]",children:e.jsx(z,{className:"text-ui-fg-subtle"})})}),e.jsxs("div",{className:"grow-1 flex flex-1 flex-col",children:[e.jsx(l,{weight:"plus",children:s.name}),e.jsx(l,{className:"text-ui-fg-subtle txt-small",children:A({address:s.address}).join(", ")})]}),e.jsxs("div",{className:"flex grow-0 items-center gap-4",children:[e.jsx(D,{groups:[{actions:[{label:i("actions.edit"),icon:e.jsx(K,{}),to:`/settings/locations/${s.id}/edit`}]},{actions:[{label:i("actions.delete"),icon:e.jsx(F,{}),onClick:r}]}]}),e.jsx("div",{className:"bg-ui-border-strong h-[12px] w-[1px]"}),e.jsx(b,{to:`/settings/locations/${s.id}`,children:i("actions.viewDetails")})]})]})}),e.jsx(H,{salesChannels:s.sales_channels}),e.jsx(h,{type:"pickup",fulfillmentSet:(f=s.fulfillment_sets)==null?void 0:f.find(c=>c.type==="pickup")}),e.jsx(h,{type:"shipping",fulfillmentSet:(x=s.fulfillment_sets)==null?void 0:x.find(c=>c.type==="shipping")})]})}var $=O,M=()=>{const{t}=o();return e.jsxs(m,{className:"flex h-fit items-center justify-between gap-x-4 px-6 py-4",children:[e.jsxs("div",{children:[e.jsx(j,{children:t("stockLocations.domain")}),e.jsx(l,{className:"text-ui-fg-subtle txt-small",children:t("stockLocations.list.description")})]}),e.jsx(T,{size:"small",className:"shrink-0",variant:"secondary",asChild:!0,children:e.jsx(C,{to:"create",children:t("actions.create")})})]})};function ce(){const t=w(),{stock_locations:s=[],isError:i,error:n}=k({fields:g},{initialData:t}),{getWidgets:a}=S();if(i)throw n;return e.jsxs(d,{widgets:{after:a("location.details.after"),before:a("location.details.before"),sideAfter:a("location.details.side.after"),sideBefore:a("location.details.side.before")},showJSON:!0,children:[e.jsxs(d.Main,{children:[e.jsx(M,{}),e.jsx("div",{className:"flex flex-col gap-3 lg:col-span-2",children:s.map(r=>e.jsx($,{location:r},r.id))})]}),e.jsx(d.Sidebar,{children:e.jsx(J,{})})]})}var J=()=>{const{t}=o();return e.jsxs(m,{className:"p-0",children:[e.jsx("div",{className:"flex items-center justify-between px-6 py-4",children:e.jsx(j,{level:"h2",children:t("stockLocations.sidebar.header")})}),e.jsx(v,{to:"/settings/locations/shipping-profiles",labelKey:t("stockLocations.sidebar.shippingProfiles.label"),descriptionKey:t("stockLocations.sidebar.shippingProfiles.description"),icon:e.jsx(N,{})})]})};export{ce as Component,re as loader};
