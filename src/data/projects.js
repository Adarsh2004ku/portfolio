// Projects Data
// To add project screenshots:
// 1. Add your screenshot image to public/images/projects/
// 2. Update the image property below with the filename (e.g., "network-security.png")
// 3. If no image is provided, a placeholder will be shown

export const projects = [
  {
    title: "Network Security ML System",
    description:
      "Production-ready network security system using machine learning for threat detection and anomaly analysis.",
    tech: ["Python", "Scikit-learn", "Docker", "MLflow"],
    github: "https://github.com/Adarsh2004ku/Network_Security",
    highlights: [
      "Real-time threat detection",
      "Model monitoring",
      "Automated retraining pipeline",
    ],
    status: "Active Development",
    image: "network-security.png", // Add your screenshot here
    // Alternative: use external URL
    // image: "https://example.com/screenshot.png",
  },
  {
    title: "ETL Pipeline using Apache Airflow",
    description:
      "Containerized ETL pipeline extracting NASA APOD API data with automated workflows using Airflow DAGs deployed via Astro CLI.",
    tech: ["Python", "Apache Airflow", "Docker", "PostgreSQL"],
    github: "https://github.com/Adarsh2004ku/ETL_Pipeline_ASTRO_AIRFLOW",
    highlights: [
      "Automated scheduling",
      "Robust error handling",
      "Production-ready logging",
    ],
    status: "Completed",
    image: "etl-airflow.png", // Add your screenshot here
  },
  {
    title: "End-to-End ML Pipeline with DVC & MLflow",
    description:
      "Reproducible machine learning pipeline with versioned datasets, experiment tracking, and comprehensive model evaluation.",
    tech: ["Python", "DVC", "MLflow", "Scikit-learn"],
    github: "https://github.com/Adarsh2004ku/machinelearning_pipeline",
    highlights: [
      "Version control for data & models",
      "Experiment tracking",
      "Reproducible results",
    ],
    status: "Completed",
    image: "ml-pipeline.png", // Add your screenshot here
  },
  {
    title: "House Price Prediction (MLOps)",
    description:
      "Complete MLOps project with regression models, experiment tracking, and API-based inference ready for deployment.",
    tech: ["Python", "Scikit-learn", "MLflow", "Flask", "Docker"],
    github: "https://github.com/Adarsh2004ku/MLflow_house_price_prediction",
    highlights: [
      "Model versioning",
      "API deployment",
      "Docker containerization",
    ],
    status: "Completed",
    image: "house-price.png", // Add your screenshot here
  },
  {
    title: "Black Friday Sales Analysis",
    description:
      "Comprehensive EDA on Black Friday sales data with predictive modeling to identify purchasing patterns and customer behavior.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    github: "https://github.com/Adarsh2004ku/Black-Friday-Sales",
    highlights: [
      "Statistical analysis",
      "Feature engineering",
      "Actionable insights",
    ],
    status: "Completed",
    image: "black-friday.png", // Add your screenshot here
  },
  {
    title: "Data Science Project Suite",
    description:
      "Collection of data science projects covering various ML techniques, data analysis, and visualization methods.",
    tech: ["Python", "Jupyter", "Pandas", "Matplotlib"],
    github: "https://github.com/Adarsh2004ku/DataScience_project",
    highlights: [
      "Multiple ML algorithms",
      "Data visualization",
      "EDA techniques",
    ],
    status: "Ongoing",
    image: "data-science.png", // Add your screenshot here
  },
];

