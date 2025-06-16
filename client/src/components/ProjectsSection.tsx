export default function ProjectsSection() {
  const projects = [
    {
      title: "News Recommendation System At Scale",
      description:
        "A news recommendation system built using MIcrosoft News Dataset (MIND) containing 750K users and 17.5M click events. It uses Collaborative Filtering, KNN and Graph Projections which helps to recommend similar news articles based on user preferences and enable rank-ordered recommendation queries personalized to each user.",
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      link: "https://github.com/Prasath2001/News-Recommendation-at-scale-using-Neo4j",
    },
    {
      title: "Music Meta Brain",
      description:
        "A contextual information retrieval system which leverages knowledge graph built in an unsupervised setting which helps to extract relevant information for music search queries. It is helpful in extracting relevant and similar documents to the queries generated.",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      link: "https://github.com/Prasath2001/Music-Meta-Brain",
    },
    {
      title: "Sentiment Detection Web App",
      description:
        "It is an end-to-end interactive web app used to predict and visualize probability distribution of emotions using Multinomial Logistic Regression Pipeline.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      link: "https://github.com/Prasath2001/Sentiment-Prediction-App-using-Streamlit",
    },
    {
      title: "Balancing The Imbalanced",
      description:
        "Resolved the imbalance in credit card fraud detection dataset which is highly imbalanced containing 0.01% of fraud transactions. Built a Random Forest model to construct a comparison flow chart for 8 resampling techniques. It helps to reduce the number of False Positives and leads to better precision and recall measures.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      link: "https://www.kaggle.com/code/prasathm2001/resampling-techniques-to-handle-imbalanced-dataset",
    },
    {
      title: "Time Series Analysis On Beverage Drink Consumption",
      description:
        "Analyzed the trend in beer consumption of Australians during 2000 - 2018 using R. Trailed to find patterns and modeled exponential smoothing and trend methods. The beer sales were increasing annually with a seasonal decrease in mid-quarters every year.",
      image:
        "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      link: "https://www.kaggle.com/code/prasathm2001/time-series-analysis-part-1/notebook",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-poppins font-bold mb-12 text-center bg-gradient-to-br from-primary via-secondary to-primary bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glassmorphism rounded-2xl p-6 hover-lift group"
            >
              <div className="mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-primary mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-primary via-secondary to-primary px-6 py-3 rounded-2xl text-sm font-semibold hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:shadow-primary/25"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
