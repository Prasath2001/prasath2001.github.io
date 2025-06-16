export default function EducationSection() {
  const educations = [
    {
      institution: "The Pennsylvania State University, PA, USA",
      degree: "Master's in Data Analytics, Big Data Systems",
      period: "2023-2024 • 1 year 6 months",
      description:
        "I call this chapter பெரிய அடி (Big Step/Big Blow) - polysemous. Recipient of Chancellor's Scholarship & Warren V. Musser Scholarship.",
    },
    {
      institution: "PSG College Of Technology, Coimbatore, India.",
      degree: "Master's in Data Science (M.Sc Integrated)",
      period: "2018-2023 • 5 years",
      description:
        "During this time, I was fortunate to meet mentors who shaped my perspectives on what a fruitful career is. I am grateful to Dr. R. Nadarajan and Shamshu Dharwez anna for guiding me since then.",
    },
    {
      institution: "Jawahar Higher Secondary School (CBSE), Neyveli, India.",
      degree: "Higher Secondary Education",
      period: "2012-2018 • 6 years",
      description:
        "I am grateful for the friendships that still continue to this day. To my parents, Sridhar, Sudarsan & Aswin.",
    },
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-poppins font-bold mb-12 text-center bg-gradient-to-br from-primary via-secondary to-primary bg-clip-text text-transparent">
          Education
        </h2>

        <div className="space-y-8">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="glassmorphism rounded-2xl p-8 hover-lift"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-poppins font-semibold text-primary mb-2">
                    {edu.institution}
                  </h3>
                  <p className="text-lg text-secondary font-medium">
                    {edu.degree}
                  </p>
                </div>
                <span className="text-sm text-gray-400 font-jetbrains bg-[var(--surface)]/50 px-4 py-2 rounded-full">
                  {edu.period}
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
