export const projects = [
    {
        id: "1",
        title: "E-Commerce Redesign",
        category: "UX Research & Strategy",
        overview: "A comprehensive redesign of the checkout flow to reduce cart abandonment.",
        role: "Product Manager",
        duration: "3 Months",
        heroImage: null, // Placeholder
        details: {
            problem: "The cart abandonment rate was 75%, significantly higher than industry average (60%). User feedback indicated a confusing checkout process.",
            objectives: [
                "Reduce cart abandonment by 15%",
                "Decrease average checkout time by 30 seconds",
                "Improve mobile conversion rate"
            ],
            userSegments: [
                "New Users (Guest Checkout)",
                "Returning Loyal Customers",
                "International Shoppers"
            ],
            keyFeatures: [
                { title: "One-Page Checkout", description: "Consolidated shipping, billing, and review into a single streamlined view." },
                { title: "Guest Checkout", description: "Removed mandatory account creation before purchase." },
                { title: "Address Auto-Complete", description: "Integrated Google Maps API for faster address entry." }
            ],
            process: [
                {
                    phase: "Research",
                    description: "Conducted 5 user interviews and analyzed Hotjar heatmaps to identify friction points."
                },
                {
                    phase: "Planning",
                    description: "Created a new user journey map focusing on minimizing clicks. Prioritized features using RICE framework."
                },
                {
                    phase: "Design & Wireframing",
                    description: "Collaborated with UI/UX designers to create low-fidelity wireframes, iterating based on internal feedback."
                }
            ]
        },
        links: {
            demo: "#",
            repo: "#"
        }
    },
    // Add more projects here
];
