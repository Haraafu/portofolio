const {chromium}=require('C:/Users/falah/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict');
const fs=require('fs');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
 const page=await browser.newPage({viewport:{width:1282,height:930}});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:3210',{waitUntil:'networkidle'});
 await page.evaluate(()=>{
  window.timeline=[];
  new MutationObserver(()=>{
   const el=document.querySelector('.link-start');
   const phase=el?.className||'done';
   const checks=document.querySelector('.checks-content');
   const state=phase+' '+(checks?.className||'');
   if(window.lastState!==state){window.lastState=state;window.timeline.push({state,time:performance.now()});}
  }).observe(document.body,{subtree:true,attributes:true,childList:true});
 });
 await page.getByRole('button',{name:'START',exact:true}).click();
 await page.locator('.checks-confirmed').waitFor();
 const stack=await page.locator('.check-unit').evaluateAll(els=>els.map(e=>{const r=e.getBoundingClientRect();return {x:r.x,y:r.y,w:r.width,h:r.height,ok:e.classList.contains('checked'),docked:e.classList.contains('is-docked')};}));
 assert.ok(stack.every(r=>r.ok&&r.docked));
 for(let i=1;i<stack.length;i++)assert.ok(stack[i].y-stack[i-1].y<=stack[i-1].h*.96,'Gap between ring artwork');
 assert.ok(stack[0].y>=0&&stack[4].y+stack[4].h<=930);
 await page.screenshot({path:'D:/falah/Documents/Projackssss/portofolio/work/green-stack.png'});
 await page.locator('.checks-sweeping').waitFor();
 const animations=await page.locator('.check-unit').evaluateAll(els=>els.map(e=>({name:getComputedStyle(e).animationName,delay:getComputedStyle(e).animationDelay})));
 assert.ok(animations.every(a=>a.name==='check-sweep'));
 assert.ok(new Set(animations.map(a=>a.delay)).size>1);
 await page.waitForTimeout(130);
 await page.screenshot({path:'D:/falah/Documents/Projackssss/portofolio/work/rings-dispatch.png'});
 await page.locator('.link-start').waitFor({state:'detached',timeout:3000});
 const timeline=await page.evaluate(()=>window.timeline);
 const tunnel=timeline.find(x=>x.state.includes('phase-tunnel'));
 const checks=timeline.find(x=>x.state.includes('phase-checks'));
 const welcome=timeline.find(x=>x.state.includes('phase-welcome'));
 assert.ok(Math.abs(checks.time-tunnel.time-2000)<100);
 assert.ok(Math.abs(welcome.time-checks.time-3000)<100);
 console.log('PASS Touching stack, all-OK confirmation, staggered dispatch, 2s tunnel / 3s rings');
 await page.setViewportSize({width:390,height:844});
 await page.reload({waitUntil:'networkidle'});
 await page.getByRole('button',{name:'START',exact:true}).click();
 await page.locator('.checks-confirmed').waitFor();
 const mobile=await page.locator('.check-unit').evaluateAll(els=>els.map(e=>{const r=e.getBoundingClientRect();return {y:r.y,h:r.height,right:r.right};}));
 for(let i=1;i<mobile.length;i++)assert.ok(mobile[i].y-mobile[i-1].y<=mobile[i-1].h*.96);
 assert.ok(mobile.every(r=>r.right<=390));
 await page.getByRole('button',{name:'Skip intro',exact:true}).click();
 await page.waitForTimeout(1000);
 assert.equal(await page.locator('.link-start').count(),0);
 await page.emulateMedia({reducedMotion:'reduce'});
 await page.reload({waitUntil:'networkidle'});
 await page.getByRole('button',{name:'START',exact:true}).click();
 await page.locator('.link-start').waitFor({state:'detached',timeout:1500});
 assert.deepEqual(errors,[]);
 console.log('PASS Mobile touching stack, Skip, reduced motion, no browser runtime errors');
 fs.writeFileSync('D:/falah/Documents/Projackssss/portofolio/work/dispatch-checks.json',JSON.stringify({stack,animations,timeline,errors},null,2));
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});

