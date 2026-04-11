import Image from 'next/image'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">{title}</h2>
      {children}
    </section>
  )
}

export default function StepInternshipPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-700">engineering</span>
          <span className="text-xs text-gray-400">2021</span>
          <span className="text-xs text-gray-400">· full-stack developer</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">STEP Capstone: Groupple</h1>
        <p className="text-gray-500 mb-1">
          <strong>Role:</strong> Full-Stack Developer &nbsp;·&nbsp; <strong>Context:</strong> Google STEP Internship
        </p>
        <p className="text-gray-500 mb-1">
          <strong>Team:</strong> Himani Yadav, Anika Bagga
        </p>
        <a
          href="http://groupple.ue.r.appspot.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-500 hover:underline"
        >
          🔗 Live Site: groupple.ue.r.appspot.com
        </a>
      </div>

      <Section title="Context">
        <p className="text-gray-700 leading-relaxed">
          <strong>Groupple</strong> was built during the Google STEP (Student Training in Engineering Program) internship
          as our capstone project. Built on a Java Servlet framework and deployed on Google App Engine,
          Groupple is a social media site designed to help people stay connected during COVID-19 through
          shared group challenges.
        </p>
        <p className="text-gray-700 leading-relaxed mt-3">
          Users can create groups, propose weekly challenges through a voting system, complete challenges together,
          and discover new groups based on location and shared interests.
        </p>
      </Section>

      <Section title="Figma Prototype">
        <p className="text-gray-700 leading-relaxed">
          Before writing code, I created a Figma prototype to establish the visual language and user flows.
          This served as the foundation for our UI, which we then refined collaboratively with the team.
        </p>

        {/* Maps gif if it exists */}
        <div className="relative w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-100 mt-4" style={{ minHeight: 200 }}>
          <Image
            src="/images/projects/groupple/maps.gif"
            alt="Groupple maps feature"
            width={900}
            height={500}
            className="w-full h-auto"
            unoptimized
          />
        </div>
      </Section>

      <Section title="My Features">
        <div className="space-y-6">
          <div className="bg-blue-50 rounded-xl p-5">
            <h3 className="font-semibold text-blue-800 mb-2">📊 Polling System</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Users can submit options for the group&apos;s weekly challenge. Votes are tallied in real time,
              and the top-voted option automatically becomes the active challenge every 7 days.
              Built with a Java Servlet backend, Datastore persistence, and a JavaScript frontend with live updates.
            </p>
          </div>

          <div className="bg-purple-50 rounded-xl p-5">
            <h3 className="font-semibold text-purple-800 mb-2">🔍 Predictive Search</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              A user search bar with autocomplete, autocorrect, and whitespace normalization — built from scratch
              using a trie data structure. Handles partial matches, typos, and messy input gracefully.
              Searches scale across the full user database efficiently.
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-5">
            <h3 className="font-semibold text-green-800 mb-2">📈 User Ranking</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              When searching for users to invite to a group, results are ranked by degree of social connection:
              direct group members appear first, followed by friends-of-friends, then others.
              Implemented using a BFS traversal over the social graph.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Teammate Features">
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Profile pages</strong> with editable bios, profile photos, and challenge history</li>
          <li><strong>Posts & comments</strong> — a group feed for sharing challenge progress</li>
          <li><strong>Group tagging with TF-IDF</strong> — automatic tag generation from group descriptions for discoverability</li>
          <li><strong>Location-based restaurant recommendations</strong> using the Google Places API</li>
        </ul>
      </Section>

      <Section title="Design Document">
        <p className="text-gray-700 leading-relaxed mb-4">
          Our full design document covers system architecture, API design, data modeling, and feature specifications.
        </p>
        <a
          href="/images/projects/groupple/design-doc.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          📄 View Design Document (PDF)
        </a>
      </Section>

      <Section title="Conclusion">
        <p className="text-gray-700 leading-relaxed">
          Groupple was an ambitious pivot — we moved beyond the original feature scope to implement genuinely
          complex algorithmic features: predictive search with a trie, social graph ranking with BFS,
          and TF-IDF topic tagging. While not every Figma feature made it into the final product,
          the implemented features pushed meaningful applications of data structures and algorithms
          that would hold up in production.
        </p>
        <p className="text-gray-700 leading-relaxed mt-3">
          This internship was my introduction to full-stack development at scale and shaped how I think
          about building systems that need to handle real user data gracefully.
        </p>
      </Section>
    </div>
  )
}
