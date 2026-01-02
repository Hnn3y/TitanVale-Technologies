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
    %% Artisan Onboarding
    A[A. Artisan Landing Page] --> B[B. Artisan Signup Form];
    B --> C[C. Document Upload Screen];
    C --> D[D. Skills & Categories Selection];
    D --> E[E. Bank Account Setup];
    E --> F[F. Application Submitted - Pending Review];
    F --> G{Admin Approval?};
    G -- Rejected --> H[Rejection Notice with Reasons];
    G -- Approved --> I[I. Welcome Screen & Tutorial];
    
    %% Main Artisan Flow
    I --> J[J. Artisan Home Screen: Toggle Online/Offline];
    J -- Online --> K{K. Incoming Job Request};
    K -- New Request --> L[L. Job Details Screen];
    L --> M{M. Accept or Decline?};
    M -- Decline --> J;
    M -- Accept --> N[N. Customer Details & Navigation];
    
    %% Job Execution
    N --> O[O. Arrived Button - Start Diagnostic];
    O --> P[P. Diagnostic Phase - Timer Running];
    P --> Q[Q. Submit Quote/Invoice Screen];
    Q --> R{R. Customer Approves Quote?};
    R -- Declined --> S[S. Collect Diagnostic Fee & End Job];
    R -- Approved --> T[T. Work in Progress Status];
    
    %% Completion
    T --> U[U. Mark Job Complete Button];
    U --> V[V. Final Invoice Confirmation];
    V --> W[W. Payment Received Notification];
    W --> X[X. Rate Customer];
    X --> J;
    
    %% Additional Screens
    J -. Tab .-> Y[Y. Earnings Tab];
    J -. Tab .-> Z[Z. Job History];
    J -. Tab .-> AA[AA. Profile & Documents];
    J -. SOS .-> AB[AB. Emergency Support Button];
    
    %% Error States
    N -. GPS Failed .-> AC[AC. Manual Navigation Instructions];
    K -. No Response 2min .-> AD[AD. Request Expired];
    V -. Payment Failed .-> AE[AE. Payment Pending - Contact Support];
    
    S --> J;
    AE --> Y;

 %% Admin Login
    A[A. Admin Login] --> B[B. Dashboard Home];
    
    %% Main Dashboard Modules
    B --> C[C. Overview Analytics];
    C --> C1[Real-time: Active bookings, Online artisans, Revenue today];
    C --> C2[Charts: Bookings by hour, Popular services, Geographic heatmap];
    
    %% Artisan Management
    B --> D[D. Artisan Management];
    D --> E[E. Pending Applications List];
    E --> F[F. Application Review Screen];
    F --> G{Approve/Reject Decision};
    G -- Approve --> H[Send welcome email, Activate account];
    G -- Reject --> I[Send rejection email with reasons];
    
    D --> J[J. Active Artisans List];
    J --> K[K. Artisan Profile Detail];
    K --> L[View: Ratings, Completed jobs, Earnings, Documents];
    K --> M[Actions: Suspend, Flag, Edit profile, View history];
    
    D --> N[N. Suspended/Flagged Artisans];
    N --> O[Review flags, Reinstate or ban];
    
    %% Customer Management
    B --> P[P. Customer Management];
    P --> Q[Q. Customer List & Search];
    Q --> R[R. Customer Profile Detail];
    R --> S[View: Booking history, Payment methods, Issues reported];
    R --> T[Actions: Refund, Ban, Contact, View disputes];
    
    %% Booking Monitoring
    B --> U[U. Live Bookings Monitor];
    U --> V[V. Active Bookings Map View];
    V --> W[Filter: By status, service type, location, time];
    U --> X[X. Booking Details Drill-down];
    X --> Y[View: Full journey, Chat logs, Payment status, GPS tracking];
    X --> Z[Actions: Intervene, Cancel, Refund, Contact parties];
    
    %% Payment & Finance
    B --> AA[AA. Financial Dashboard];
    AA --> AB[AB. Transactions List];
    AB --> AC[Filter: Pending, Completed, Failed, Refunds];
    AB --> AD[AD. Transaction Detail];
    AD --> AE[View: Amount breakdown, Fees, Artisan payout, Platform commission];
    
    AA --> AF[AF. Payout Management];
    AF --> AG[Pending artisan payouts, Process bulk payouts];
    AF --> AH[View: Payout history, Failed payouts, Bank details];
    
    AA --> AI[AI. Revenue Analytics];
    AI --> AJ[Charts: Revenue trends, Commission earned, Refunds issued];
    
    %% Disputes & Support
    B --> AK[AK. Support Tickets];
    AK --> AL[AL. Ticket Queue];
    AL --> AM[Filter: Open, In Progress, Resolved, Priority];
    AL --> AN[AN. Ticket Detail];
    AN --> AO[View: Issue description, User details, Chat history];
    AN --> AP[Actions: Respond, Escalate, Refund, Close];
    
    AK --> AQ[AQ. Disputes Management];
    AQ --> AR[List: Payment disputes, Service quality, Cancellations];
    AR --> AS[AS. Dispute Resolution Screen];
    AS --> AT[View: Both sides evidence, Chat, Photos];
    AS --> AU[Actions: Rule in favor, Partial refund, Ban user, Close];
    
    %% Settings & Configuration
    B --> AV[AV. Platform Settings];
    AV --> AW[AW. Service Categories Config];
    AW --> AX[Add/Edit/Remove service types, Set base prices];
    
    AV --> AY[AY. Pricing & Fees Config];
    AY --> AZ[Set: Platform commission %, Cancellation fees, Diagnostic fees];
    
    AV --> BA[BA. Geographic Settings];
    BA --> BB[Set: Service areas, Radius limits, Surge pricing zones];
    
    AV --> BC[BC. System Configuration];
    BC --> BD[Set: Matching timeout, Auto-cancellation time, Payment gateway settings];
    
    %% Reports
    B --> BE[BE. Reports & Analytics];
    BE --> BF[BF. Generate Reports];
    BF --> BG[Options: Revenue, Artisan performance, Customer behavior, Service demand];
    BF --> BH[Export: PDF, Excel, CSV];
    
    %% User Management
    B --> BI[BI. Admin Users];
    BI --> BJ[List of admin accounts, Roles & permissions];
    BI --> BK[Add/Edit/Remove admin users];
    
    %% Quick Actions
    B --> BL[Quick Actions Panel];
    BL --> BM[Emergency: Broadcast alert, System maintenance mode];
    BL --> BN[Bulk operations: Message artisans, Send notifications];
    
    H --> J;
    I --> E;
    AU --> AQ;
    end
```
