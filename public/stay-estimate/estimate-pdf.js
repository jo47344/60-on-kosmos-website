(function(root){
function buildPdf(lines){
 const clean=s=>String(s).replace(/\u00a0/g,' ').replace(/[–—]/g,'-').normalize('NFKD').replace(/[^\x20-\x7E]/g,'');
 const wrap=s=>{let words=clean(s).split(/\s+/),rows=[],line='';for(let w of words){if((line+' '+w).trim().length>83){rows.push(line);line=w;}else line=(line+' '+w).trim();}rows.push(line);return rows;};
 let text=lines.flatMap(wrap);if(text.length>48)throw new Error('Estimate is too long for one PDF page.');
 let stream='0.13 0.31 0.24 rg 40 758 515 42 re f\nBT /F1 18 Tf 1 1 1 rg 52 772 Td (60 ON KOSMOS) Tj ET\n';
 text.forEach((l,i)=>{let escaped=l.replace(/\\/g,'\\\\').replace(/\(/g,'\\(').replace(/\)/g,'\\)');stream+=`BT /F1 ${i===0?14:10} Tf 0.09 0.18 0.15 rg 48 ${730-i*13.5} Td (${escaped}) Tj ET\n`;});
 const objects=['<< /Type /Catalog /Pages 2 0 R >>','<< /Type /Pages /Kids [3 0 R] /Count 1 >>','<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>','<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',`<< /Length ${stream.length} >>\nstream\n${stream}endstream`];
 let pdf='%PDF-1.4\n',offsets=[0];objects.forEach((o,i)=>{offsets.push(pdf.length);pdf+=`${i+1} 0 obj\n${o}\nendobj\n`;});const start=pdf.length;pdf+=`xref\n0 6\n0000000000 65535 f \n`+offsets.slice(1).map(n=>String(n).padStart(10,'0')+' 00000 n \n').join('')+`trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${start}\n%%EOF\n`;return new TextEncoder().encode(pdf);
}
root.KosmosPdf={buildPdf};if(typeof module!=='undefined')module.exports={buildPdf};})(typeof window!=='undefined'?window:globalThis);
