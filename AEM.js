javascript:(function(){function checkAEM(){let isAEM=false;const commonPaths=['/content','/etc','/libs','/dam'];const scripts=document.getElementsByTagName('script');const links=document.getElementsByTagName('link');const images=document.getElementsByTagName('img');const urls=[...scripts,...links,...images].map(el=>el.src||el.href);let hasAEMPath=false;urls.forEach(url=>{commonPaths.forEach(path=>{if(url&&url.includes(path)){hasAEMPath=true;console.log('Found AEM-related path in URL: '+url);}});});const htmlSource=document.documentElement.innerHTML;let hasAEMComment=htmlSource.includes('<!-- Generated by CQ')||htmlSource.includes('cq5')||htmlSource.includes('wcm');if(hasAEMPath&&hasAEMComment){isAEM=true;}if(isAEM){alert('This site appears to be using Adobe Experience Manager (AEM). Check the console for more details.');}else{alert('No signs of Adobe Experience Manager (AEM) found.');}}checkAEM();})();