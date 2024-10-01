# AEM as a Cloud Service (AEMaaCS) - Publishing Overview

This document outlines the key aspects of how publishing works in AEM as a Cloud Service, highlighting differences and similarities with traditional AEM environments.

## 1. Containerized Architecture in AEMaaCS

- **Containers**: AEMaaCS uses a containerized architecture where AEM runs in transient containers that are created and destroyed based on demand.
- **Images**: Each container runs an image of AEM, which contains the deployed code.
- **Content Persistence**: Content such as pages and digital assets are **stored externally** in the **Content Repository Service** and accessed by all AEM instances.
- **Autoscaling**: Since content is stored outside the containers, images remain small, which allows for **faster autoscaling** as new containers are created.

## 2. Sling Content Distribution in AEMaaCS

- **Sling Content Distribution**: Replaces traditional content replication. A pipeline service running on **Adobe I/O** (Adobe’s serverless platform) handles content distribution.
- **Atomic Publish Actions**: Publishing is **atomic**, meaning that when multiple pieces of content are published, they either all succeed or all fail, ensuring consistency.
- **Queue System**: When content is published, it’s placed into a **queue**, to which publish instances are subscribed.
  
## 3. Golden Master Publish Instance

- **Golden Master**: There is a special publish instance known as the **Golden Master**. All other publish instances are created from this master copy, ensuring consistency.
- **Non-Accessible by End Users**: The Golden Master is only for internal purposes and is not directly accessed by end users.

## 4. Publish Instances and Queue Subscription

- **Queue Subscription**: Each **publish instance** subscribes to the queue and "picks up" content when new updates are published.
- **Event-Driven System**: Publish instances know there is new content available because the system uses an **event-driven architecture**. When content is published, an **event** is triggered that notifies all subscribed publish instances.
- **Consistency**: All publish instances receive the same content update from the queue, ensuring synchronization across environments.

## 5. Publishing Workflow for Editors

### 5.1. Publishing While Editing a Page

- **Page Information Icon**: From the **Page Editor**, users can select the **Publish Page** option from the **Page Information icon** (the "i" icon).
- **Same as Traditional AEM**: This process is the same as in non-cloud versions of AEM, but with the cloud pipeline managing the back-end delivery.

### 5.2. Publishing from the Console

In the **Sites Console** (page tree view), you have two main publishing options:

- **Quick Publish**: A "one-click" publish option that performs a **shallow publish** of the selected page, without deeper dependency checks.
- **Manage Publication**: Provides more granular control over the publishing process. Users can select multiple pages, check dependencies (e.g., referenced assets or child pages), schedule the publish, or review changes.

## 6. Back-End Efficiency

- **Cloud-Native Architecture**: Though the interface and workflow remain similar to traditional AEM, AEMaaCS leverages cloud-native systems like **Sling Content Distribution** and **Adobe I/O pipelines** for more efficient, scalable, and reliable content distribution.
- **Event-Driven Publishing**: Publish actions are driven by events, ensuring that updates happen efficiently without unnecessary polling.

## 7. Key Takeaways

- The **user-facing actions** (publishing from the editor or console) remain consistent with traditional AEM, so there’s no need for retraining users.
- The **underlying cloud architecture** ensures more efficient, scalable, and flexible content distribution across AEMaaCS environments.
- **Consistency and reliability** are achieved through atomic actions, a queue system, and the use of the Golden Master instance for all other publish instances.
