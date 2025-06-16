export default function ExperienceSection() {
  const experiences = [
    {
      title: "Associate Solutions Engineer, MiQ Digital USA Inc.",
      period: "Feb 2025 - present • 4 months",
      description:
        "Building custom solutions, scoping product alphas and driving product innovation leveraging AI/ML and Data Engineering.",
    },
    {
      title: "Product Intern, MiQ Digital USA Inc.",
      period: "Jun 2024 - July 2024 • 2 months",
      description:
        "Worked with AdTech product owners to define Gaming GTM strategy, Automated Programmatic + Social DSP data integration pipelines to support data-backed pitching and continuous channel evaluation. Performed analytics on salesforce reports and presented the insights to the commerce sales strategy team with an interactive and actionable customer segmentation dashboard.",
    },
    {
      title: "Research Assistant, The Pennsylvania State University",
      period: "Sept 2023 - Apr 2024 • 8 months",
      description:
        "Developed a RAG-based teaching assistant chatbot in ensuring faculties in providing timely and relevant information into the courses.",
    },
    {
      title: "Machine Learning Engineer Intern, Growfin.ai",
      period: "Dec 2022 - Jun 2023 • 6 months",
      description:
        "Designed and deployed an ML system for capturing remittance information that helps to expedite the bulk invoice to cash flow process and increase the productivity of collection agents by 60%. Extracted and integrated table contents using computer vision models, transfer learning and fine-tuning QA language models, visual question answering transformer model (DONUT) and prompt engineering for QA models.",
    },
    {
      title: "AI Research Intern, AI Institute At University Of South Carolina",
      period: "May 2021 - Nov 2021 • 7 months",
      description:
        "Conducted research to generalize language agent actions in TextWorld Commonsense upgrading the existing AI's abilities to be robust to new environments and resources by 7% using Natural Language Processing and Understanding Framework.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-poppins font-bold mb-12 text-center bg-gradient-to-br from-primary via-secondary to-primary bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20 hover-lift">
                <div
                  className={`absolute left-6 w-4 h-4 rounded-full border-4 border-[var(--surface)] animate-glow ${
                    index % 2 === 0 ? "bg-primary" : "bg-secondary"
                  }`}
                ></div>
                <div className="glassmorphism rounded-2xl p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-poppins font-semibold text-primary">
                      {exp.title}
                    </h3>
                    <span className="text-sm text-gray-400 font-jetbrains">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
