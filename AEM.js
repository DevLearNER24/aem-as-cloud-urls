javascript:(function() {
    function checkAEM() {
        let isAEM = false;

        // Check if any URLs contain common AEM paths
        const commonPaths = ['/content', '/etc', '/libs', '/dam'];
        const scripts = document.getElementsByTagName('script');
        const links = document.getElementsByTagName('link');
        const images = document.getElementsByTagName('img');
        const urls = [...scripts, ...links, ...images].map(el => el.src || el.href);

        urls.forEach(url => {
            commonPaths.forEach(path => {
                if (url.includes(path)) {
                    isAEM = true;
                    console.log(`Found AEM-related path in URL: ${url}`);
                }
            });
        });

        // Check for AEM-specific HTML comments
        const htmlSource = document.documentElement.innerHTML;
        if (htmlSource.includes('<!-- Generated by CQ') || htmlSource.includes('cq5') || htmlSource.includes('wcm')) {
            isAEM = true;
            console.log('Found AEM-specific HTML comment.');
        }

        // Display results in an alert
        if (isAEM) {
            alert('This site appears to be using Adobe Experience Manager (AEM). Check the console for more details.');
        } else {
            alert('No signs of Adobe Experience Manager (AEM) found.');
        }
    }

    checkAEM();
})();