
# Adobe Launch: Understanding the _satellite Object

## Overview
In Adobe Launch, the `_satellite` object is a global JavaScript object that provides various methods and properties to interact with and control your tag management system. This document covers the key functionalities of the `_satellite` object along with examples and use cases.

## _satellite Methods and Properties

### 1. **_satellite.getVar('variableName')**
- Retrieves the value of a Data Element or a custom variable.
- **Use Case**: Validating data elements or variables on the page.

### 2. **_satellite.track('ruleName')**
- Manually triggers a rule by its name.
- **Use Case**: Testing rules without requiring specific user actions.

### 3. **_satellite.isDebug = true**
- Enables detailed logging in the browser console.
- **Use Case**: Helps in debugging and understanding whatâ€™s happening during execution.

### 4. **_satellite.setVar('variableName', 'value')**
- Sets or overrides the value of a Data Element or variable dynamically.
- **Use Case**: Temporarily modifying variables for testing purposes.

### 5. **_satellite.notify('Your message here', logLevel)**
- Sends a custom message to the browser console.
- **Parameters**:
  - `logLevel`: (1 = standard message, 2 = warning, 3 = error).
- **Use Case**: Custom debugging messages for monitoring the flow.

### 6. **_satellite.trackEvent('eventName')**
- Manually triggers specific events for tracking purposes.
- **Use Case**: Validating custom events or interactions on the page.

### 7. **_satellite.pageBottom()**
- Triggers any tags or rules associated with the bottom of the page load.
- **Use Case**: Useful for testing rules that rely on the full page load completion.

### 8. **_satellite.buildDate**
- Provides the date when the current Launch library was built.
- **Use Case**: Helps in identifying the build version for troubleshooting caching issues.

### 9. **_satellite.reset()**
- Resets all tags and rules on the page.
- **Use Case**: Allows re-testing of rules without refreshing the entire page.

### 10. **_satellite.publishDate**
- Shows the date when the current library version was published live.
- **Use Case**: Verifying recent updates or deployments.

## Additional Notes
- The `_satellite` object provides a versatile toolkit for managing and testing Adobe Launch implementations.
- These methods are particularly valuable for debugging, troubleshooting, and validating your tracking setup in real-time.

## Sources for In-Depth Knowledge

1. **Adobe Experience League**:
   - [Satellite Object Reference](https://experienceleague.adobe.com/docs/experience-platform/tags/client-side/satellite-object.html)
   - [Core Extension Overview](https://experienceleague.adobe.com/docs/experience-platform/tags/extensions/client/core/overview.html)

2. **Bounteous Blog**:
   - [Debug Mode and Satellite Logger](https://www.bounteous.com/insights/2019/11/13/debug-mode-and-satellitelogger-adobe-launch/)

3. **Jimalytics**:
   - [Data Elements Guide for Adobe Launch](https://jimalytics.com/tag-management/adobe-launch-data-elements-guide/)

These resources provide comprehensive insights and practical examples for utilizing the `_satellite` object effectively in your Adobe Launch projects.