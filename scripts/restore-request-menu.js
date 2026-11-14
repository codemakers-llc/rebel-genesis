// Repairs an accidentally removed/hidden Genesis PROTO request-submission menu entry.
// Preserves every other menu setting, request, evaluation, and audit record.
import {readFile,writeFile,rename} from 'node:fs/promises';
const file=new URL('./data/runtime.json',import.meta.url);
const data=JSON.parse(await readFile(file,'utf8'));
const views=data.views||[];
if(!views.some(v=>v.route==='/requests'))throw new Error('Registered /requests view not found; repair the view catalog first');
const module=(data.catalogs?.modules||[]).find(m=>/requests/i.test(m.name));
if(!module)throw new Error('Requests module is missing; no changes made');
const items=data.menuItems||[];
let item=items.find(m=>m.route==='/requests');
if(item){item.visible=true;item.moduleId=module.id;item.label='Request List & Creation';item.icon='file-text';}
else{item={id:Math.max(0,...items.map(x=>Number(x.id)||0))+1,label:'Request List & Creation',route:'/requests',moduleId:module.id,icon:'file-text',order:3,visible:true};items.push(item)}
data.menuItems=items;
const temp=new URL('./data/runtime.json.tmp',import.meta.url);
await writeFile(temp,JSON.stringify(data,null,2)+'\n');await rename(temp,file);
console.log('Restored navigation: Requests → Request List & Creation (/requests). All requests preserved.');
