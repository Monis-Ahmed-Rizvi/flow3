// Mock user data
export const userData = {
  name: "John Doe",
  email: "john.doe@example.com",
  company: "TechCorp Inc.",
  avatar: "https://via.placeholder.com/32"
};

// Mock statistics
export const userStats = {
  totalAnalyses: 12,
  insightsGenerated: 47,
  dashboardsCreated: 8,
  lastAnalysisDate: "April 18, 2025"
};

// Mock previous analyses
export const previousAnalyses = [
  { 
    id: 1, 
    name: "Q1 Sales Analysis", 
    date: "April 18, 2025", 
    filename: "sales_q1_2025.csv", 
    type: "sales", 
    icon: "bar"
  },
  { 
    id: 2, 
    name: "Customer Segmentation Analysis", 
    date: "April 10, 2025", 
    filename: "customer_data.csv", 
    type: "customer", 
    icon: "pie"
  },
  { 
    id: 3, 
    name: "Marketing Campaign Performance", 
    date: "April 02, 2025", 
    filename: "marketing_2025.csv", 
    type: "marketing", 
    icon: "line"
  }
];

// Mock chart data
export const salesData = [
  { month: 'Jan', value: 4000, target: 3500 },
  { month: 'Feb', value: 3000, target: 3200 },
  { month: 'Mar', value: 5000, target: 4800 },
  { month: 'Apr', value: 2780, target: 2600 },
  { month: 'May', value: 1890, target: 2000 },
  { month: 'Jun', value: 2390, target: 2400 }
];

export const productData = [
  { name: 'Product A', value: 35 },
  { name: 'Product B', value: 25 },
  { name: 'Product C', value: 20 },
  { name: 'Product D', value: 15 },
  { name: 'Product E', value: 5 }
];

export const regionData = [
  { name: 'North', value: 42 },
  { name: 'South', value: 23 },
  { name: 'East', value: 20 },
  { name: 'West', value: 15 }
];

// Mock insights
export const insights = [
  { 
    id: 1, 
    title: "North region consistently outperforms all other regions by 32%",
    action: "Analyze North region sales strategies",
    source: "Q1 Sales Analysis"
  },
  { 
    id: 2, 
    title: "Tuesday shows highest conversion rate (34.2%)",
    action: "Increase promotion budget on Tuesdays",
    source: "Marketing Campaign Performance"
  },
  { 
    id: 3, 
    title: "Product A + C frequently purchased together",
    action: "Create bundle offer for these products",
    source: "Customer Segmentation Analysis"
  },
  { 
    id: 4, 
    title: "Sales dropped consistently during weekends",
    action: "Test weekend-specific promotions",
    source: "Q1 Sales Analysis"
  }
];