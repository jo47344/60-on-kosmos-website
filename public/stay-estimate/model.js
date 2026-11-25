(function(root){
const rates=typeof module!=='undefined'?require('./rates.js'):root.KosmosRates,rooms=rates.rooms;
function estimate({adults,nights,mode='separate',doubleShare=false,allRooms=false,crewPreference='any',manual=null}){
 if(!Number.isInteger(adults)||adults<1||adults>9||!Number.isInteger(nights)||nights<1||nights>366)return{error:'Please enter 1–9 adults and a stay of 1–366 nights.'};
 if(mode==='couple'&&adults!==2)return{error:'The couple option is for two adults sharing one double bed.'};
 if(mode==='supervisor'&&adults<2)return{error:'Include the supervisor and at least one crew member in the adult count. For a solo stay, choose private room.'};
 if(mode==='custom'){
  if(!Array.isArray(manual)||manual.length!==4||manual.some((n,i)=>!Number.isInteger(n)||n<0||n>rooms[i].cap))return{error:'Choose a valid adult count for each room.'};
  if(manual.reduce((a,b)=>a+b,0)!==adults)return{error:'The adults assigned to rooms must equal the total adult count, including any supervisor.'};
  if(manual[3]===2&&!doubleShare)return{error:'Two adults in Green Double share one double bed. Confirm that arrangement, or assign one adult to that room.'};
 }
 const tier=nights>=28?'monthly':nights>=7?'weekly':'night',out=[];
 function add(allocation){
  if(mode==='supervisor'){
   if(allocation[3]!==1)return;
   if(crewPreference==='twins'&&allocation[2]!==0)return;
   if(crewPreference==='triple'&&allocation[2]!==Math.min(3,adults-1))return;
  }
  const both=allocation[0]===2&&allocation[1]===2;
  const rows=rooms.flatMap((r,j)=>{const n=allocation[j];if(!n&&!allRooms)return[];let rate=r[tier];if(tier!=='night'&&both&&j<2)rate=rates.bothTwins[tier];if(tier!=='night'&&j===3&&n<=1)rate=rates.doubleSolo[tier];return[{name:r.name,beds:r.beds,guests:n,rate,pp:n?rate/n:null,supervisor:mode==='supervisor'&&j===3}];});
  const before=rows.reduce((s,r)=>s+r.rate,0),groupDiscount=nights>=2&&nights<=6&&rows.length===4?before*rates.shortGroupDiscount:0,nightly=before-groupDiscount;
  out.push({rows,allocation,nightly,total:nightly*nights,pp:nightly/adults,groupDiscount,tier,adults,nights,allRooms,mode,crewPreference});
 }
 function visit(i,left,allocation){if(i===4){if(left===0)add(allocation);return;}let cap=rooms[i].cap;if(mode==='private')cap=1;if(i===3&&mode!=='couple'&&!doubleShare)cap=1;if(mode==='supervisor'&&i===3)cap=1;if(mode==='couple'&&i!==3)cap=0;for(let n=Math.min(cap,left);n>=0;n--){if(mode==='couple'&&i===3&&n!==2)continue;visit(i+1,left-n,[...allocation,n]);}}
 if(mode==='custom')add(manual);else visit(0,adults,[]);
 out.sort((a,b)=>a.total-b.total||a.rows.length-b.rows.length);
 if(out.length)return{best:out[0],alternatives:out.slice(1,4)};
 return{error:mode==='private'?'We have four rooms, so private rooms for more than four adults need another arrangement. Ask us about sharing options.':mode==='supervisor'?'That crew arrangement does not fit. Green Double is reserved for one supervisor; the two Twins hold four crew and Triple holds three. Change your crew preference or ask for a custom quote.':'We can accommodate eight adults in separate beds. Nine adults requires two to share the double bed. Please adjust the sharing preference.'};
}
root.KosmosEstimate={rooms,estimate};if(typeof module!=='undefined')module.exports={rooms,estimate};})(typeof window!=='undefined'?window:globalThis);
