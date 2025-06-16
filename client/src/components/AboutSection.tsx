export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="glassmorphism rounded-3xl p-8 md:p-12 hover-lift">
          <h2 className="text-4xl font-poppins font-bold mb-8 text-center bg-gradient-to-br from-primary via-secondary to-primary bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              Hello 👋 I'm Prasath Murugesan. I was born and grew up in India. I
              have two master's degrees, one in Data Science (integrated
              master's) and another
              in Data Analytics (Big Data Systems).
            </p>

            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              I am a consultant for product teams that seek to build and
              integrate AI solutions into their roadmaps and enable stakeholders
              - helping to move from prototype to production. I have gathered
              experience in solving problems from various domains ranging from
              FinTech, AdTech, Job market, Media & Social Content, Software
              Development, Elections and looking to expand further.
            </p>

            <div className="glassmorphism rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-poppins font-semibold mb-4 text-primary">
                Areas of Interest
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Applied ML, Data Engineering & Analytics, Deep Learning, Natural
                Language Processing, Computer Vision, LLMs, Generative AI, Graph
                models & Knowledge graphs, Learning with limited data.
              </p>
            </div>

            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              Apart from tech and consulting, my hobbies span Tamil Sangam
              literature, Ethics in Tech, Open-Source community, Math,
              Economics, Politics, Cinema and Cricket. I am a big fan of the
              works of AR Rahman and Mari Selvaraj.
            </p>

            <p className="text-lg leading-relaxed mb-8 text-gray-300">
              I am currently teaching myself to design cloud solutions and
              full-stack web development. Trying to be a generalist in a
              specialized world 😊
            </p>

            {/* Tamil Quote */}
            <div className="glassmorphism rounded-2xl p-6 text-center">
              <p className="font-jetbrains text-lg font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                உண்பது நாழி, உடுப்பது இரண்டே
              </p>
              <p className="font-jetbrains text-lg font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                பிறவும் எல்லாம் ஓரோக் கும்மே,
              </p>
              <p className="font-jetbrains text-lg font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                செல்வத்துப் பயனே ஈதல்
              </p>
              <p className="font-jetbrains text-lg font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                துய்ப்பேம் எனினே தப்புந பலவே
              </p>
              <p className="font-jetbrains text-sm text-gray-400">
                - நக்கீரனார் (புறநானூறு)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
