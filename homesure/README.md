# HomeSure 
### Your Trusted On-Demand Mobile Service Delivery Platform.
HomeSure is an on-demand service delivery platform that connects households and businesses with trusted artisans for essential services such as plumbing, carpentry, electrical repairs, cleaning, and more.

It functions like an "Uber for Trades," providing immediate, doorstep access to professionals across a wide range of categories, including:

* **Home Services:** Plumbing, Carpentry, Electrical Repairs, HVAC, Cleaning.
* **Tech Services:** Mobile Phone Repairs, Laptop Repairs.
* **Personal Services:** Barbing, Makeup Artists.
* **Logistics/Other:** Gas Refill, General Handyman services.

---

## Key Features

| Customer Experience | Artisan Experience |
| :--- | :--- |
| **Instant Booking:** Request a service immediately or schedule an appointment for later. | **Real-Time Job Queue:** Receive instant notifications for nearby, relevant service requests. |
| **Real-Time Tracking:** Track the artisan's ETA and location on a live map. | **Flexible Work:** Accept or decline jobs based on location and schedule. |
| **Transparent Pricing:** Receive in-app quotes for approval before any work begins. | **In-App Quoting & Invoicing:** Generate and submit professional quotes and invoices directly to the customer. |
| **Secure Payments:** Integrated payment gateway for seamless, cashless transactions. | **Verified Payouts:** Track earnings and receive automated, scheduled payments. |
| **Ratings & Reviews:** Rate the service to ensure quality control across the platform. | **Professional Profile:** Manage certifications, service portfolio, and track performance metrics. |

---

## Technology Stack

HomeSure is built on a modern, scalable architecture designed for real-time responsiveness.

* **Customer/Artisan Mobile Apps:** [e.g., React Native, Flutter, Swift/Kotlin]
* **Backend & API:** [e.g., Node.js (Express), Python (Django/Flask), Go]
* **Database:** [e.g., PostgreSQL, MongoDB]
* **Real-Time/Mapping:** [e.g., WebSockets, Google Maps Platform / OpenStreetMap]
* **Payment Gateway:** [e.g., Stripe, Paystack, M-Pesa]

```mermaid

graph TD
    %% ========== CUSTOMER SIDE ==========
    subgraph Customer_Flow["CUSTOMER APPLICATION"]
        C_A[Landing Page] --> C_B{User Status};
        C_B -- New User --> C_C[Customer Signup];
        C_B -- Existing User --> C_D[Customer Login];
        C_C --> C_E;
        C_D --> C_E;
        
        C_E[Home Screen: Map & Service Categories] --> C_F(Select Category & Location);
        C_F --> C_G{Live Matching & Quotes};
        
        C_G -- Accepts ETA & Fee --> C_H{Artisan Profile & Booking};
        C_G -- Declines / No Match --> C_E;
        
        C_H -- Book Now --> C_I[Live Tracking Screen];
        C_H -- Schedule Later --> C_J[Schedule Date/Time];
        C_J --> C_I;
        
        C_I -- Job Complete --> C_K(Artisan Submits Invoice);
        C_K --> C_L[Payment Screen: Review & Pay];
        C_L --> C_M[Ratings & Review];
        C_M --> C_N[Booking History];
        
        C_E -. Tab .-> C_P[Bookings Tab];
        C_E -. Tab .-> C_Q[Saved/Invoice Tab];
        C_E -. Tab .-> C_R[Profile Tab];
        
        C_P --> C_I;
        C_Q --> C_L;
    end
    ```

    ```mermaid
    graph TD
    %% ========== ARTISAN SIDE ==========
    subgraph Artisan_Flow["ARTISAN APPLICATION"]
        A_A[Artisan Landing Page] --> A_B[Artisan Signup Form];
        A_B --> A_C[Document Upload Screen];
        A_C --> A_D[Skills & Categories Selection];
        A_D --> A_E[Bank Account Setup];
        A_E --> A_F[Application Submitted];
        A_F --> A_G{Admin Approval?};
        A_G -- Rejected --> A_H[Rejection Notice];
        A_G -- Approved --> A_I[Welcome Screen & Tutorial];
        
        A_I --> A_J[Home Screen: Toggle Online/Offline];
        A_J -- Online --> A_K{Incoming Job Request};
        A_K -- New Request --> A_L[Job Details Screen];
        A_L --> A_M{Accept or Decline?};
        A_M -- Decline --> A_J;
        A_M -- Accept --> A_N[Customer Details & Navigation];
        
        A_N --> A_O[Arrived Button - Start Diagnostic];
        A_O --> A_P[Diagnostic Phase - Timer Running];
        A_P --> A_Q[Submit Quote/Invoice Screen];
        A_Q --> A_R{Customer Approves Quote?};
        A_R -- Declined --> A_S[Collect Diagnostic Fee & End];
        A_R -- Approved --> A_T[Work in Progress Status];
        
        A_T --> A_U[Mark Job Complete Button];
        A_U --> A_V[Final Invoice Confirmation];
        A_V --> A_W[Payment Received Notification];
        A_W --> A_X[Rate Customer];
        A_X --> A_J;
        
        A_J -. Tab .-> A_Y[Earnings Tab];
        A_J -. Tab .-> A_Z[Job History];
        A_J -. Tab .-> A_AA[Profile & Documents];
        A_J -. SOS .-> A_AB[Emergency Support Button];
        
        A_N -. GPS Failed .-> A_AC[Manual Navigation Instructions];
        A_K -. No Response 2min .-> A_AD[Request Expired];
        A_V -. Payment Failed .-> A_AE[Payment Pending - Contact Support];
        
        A_S --> A_J;
        A_AE --> A_Y;
    end
    ```

    ```mermaid
    
    graph TD
    %% ========== ADMIN DASHBOARD ==========
    subgraph Admin_Panel["ADMIN DASHBOARD"]
        AD_A[Admin Login] --> AD_B[Dashboard Home];
        
        AD_B --> AD_C[Overview Analytics];
        AD_C --> AD_C1[Real-time: Active bookings, Online artisans];
        AD_C --> AD_C2[Charts: Bookings, Popular services, Heatmap];
        
        AD_B --> AD_D[Artisan Management];
        AD_D --> AD_E[Pending Applications List];
        AD_E --> AD_F[Application Review Screen];
        AD_F --> AD_G{Approve/Reject};
        AD_G -- Approve --> AD_H[Send Welcome Email & Activate];
        AD_G -- Reject --> AD_I[Send Rejection Email];
        
        AD_D --> AD_J[Active Artisans List];
        AD_J --> AD_K[Artisan Profile Detail];
        AD_K --> AD_L[View: Ratings, Jobs, Earnings, Docs];
        AD_K --> AD_M[Actions: Suspend, Flag, Edit];
        
        AD_D --> AD_N[Suspended/Flagged Artisans];
        AD_N --> AD_O[Review Flags & Reinstate/Ban];
        
        AD_B --> AD_P[Customer Management];
        AD_P --> AD_Q[Customer List & Search];
        AD_Q --> AD_R[Customer Profile Detail];
        AD_R --> AD_S[View: History, Payments, Issues];
        AD_R --> AD_T[Actions: Refund, Ban, Contact];
        
        AD_B --> AD_U[Live Bookings Monitor];
        AD_U --> AD_V[Active Bookings Map View];
        AD_V --> AD_W[Filter: Status, Service, Location];
        AD_U --> AD_X[Booking Details Drill-down];
        AD_X --> AD_Y[View: Journey, Chats, GPS];
        AD_X --> AD_Z[Actions: Intervene, Cancel, Refund];
        
        AD_B --> AD_AA[Financial Dashboard];
        AD_AA --> AD_AB[Transactions List];
        AD_AB --> AD_AC[Filter: Pending, Completed, Failed];
        AD_AB --> AD_AD[Transaction Detail];
        AD_AD --> AD_AE[View: Breakdown, Fees, Commission];
        
        AD_AA --> AD_AF[Payout Management];
        AD_AF --> AD_AG[Process Artisan Payouts];
        AD_AF --> AD_AH[View: Payout History, Failed];
        
        AD_AA --> AD_AI[Revenue Analytics];
        AD_AI --> AD_AJ[Charts: Revenue Trends, Commission];
        
        AD_B --> AD_AK[Support Tickets];
        AD_AK --> AD_AL[Ticket Queue];
        AD_AL --> AD_AM[Filter: Open, In Progress, Resolved];
        AD_AL --> AD_AN[Ticket Detail];
        AD_AN --> AD_AO[View: Issue, User, Chat History];
        AD_AN --> AD_AP[Actions: Respond, Escalate, Close];
        
        AD_AK --> AD_AQ[Disputes Management];
        AD_AQ --> AD_AR[List: Payment, Quality Disputes];
        AD_AR --> AD_AS[Dispute Resolution Screen];
        AD_AS --> AD_AT[View: Evidence, Chat, Photos];
        AD_AS --> AD_AU[Actions: Rule, Refund, Ban];
        
        AD_B --> AD_AV[Platform Settings];
        AD_AV --> AD_AW[Service Categories Config];
        AD_AW --> AD_AX[Add/Edit Services & Base Prices];
        
        AD_AV --> AD_AY[Pricing & Fees Config];
        AD_AY --> AD_AZ[Set: Commission, Cancellation Fees];
        
        AD_AV --> AD_BA[Geographic Settings];
        AD_BA --> AD_BB[Set: Service Areas, Radius, Surge];
        
        AD_AV --> AD_BC[System Configuration];
        AD_BC --> AD_BD[Set: Timeouts, Payment Gateway];
        
        AD_B --> AD_BE[Reports & Analytics];
        AD_BE --> AD_BF[Generate Reports];
        AD_BF --> AD_BG[Options: Revenue, Performance, Demand];
        AD_BF --> AD_BH[Export: PDF, Excel, CSV];
        
        AD_B --> AD_BI[Admin Users];
        AD_BI --> AD_BJ[List: Accounts, Roles, Permissions];
        AD_BI --> AD_BK[Add/Edit/Remove Admins];
        
        AD_B --> AD_BL[Quick Actions Panel];
        AD_BL --> AD_BM[Emergency: Broadcast, Maintenance];
        AD_BL --> AD_BN[Bulk: Message Artisans, Notify];
        
        AD_H --> AD_J;
        AD_I --> AD_E;
        AD_AU --> AD_AQ;
    end
    
    %% ========== CROSS-PLATFORM CONNECTIONS ==========
    C_K -.-> A_Q;
    A_R -.-> C_L;
    A_G -.-> AD_F;
    AD_H -.-> A_I;
    AD_Z -.-> C_I;
    AD_Z -.-> A_N;
    
    style Customer_Flow fill:#e1f5ff
    style Artisan_Flow fill:#fff4e1
    style Admin_Panel fill:#f0e1ff
```
