import Image from 'next/image'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">{title}</h2>
      {children}
    </section>
  )
}

function ProjectImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="my-6">
      <div className="relative w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-100" style={{ minHeight: 200 }}>
        <Image src={src} alt={alt} width={900} height={500} className="w-full h-auto object-contain" unoptimized />
      </div>
      {caption && <figcaption className="text-center text-xs text-gray-400 mt-2">{caption}</figcaption>}
    </figure>
  )
}

export default function IterativeDesignPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-purple-100 text-purple-700">design</span>
          <span className="text-xs text-gray-400">2021</span>
          <span className="text-xs text-gray-400">· UX designer</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Iterative Design & User Testing: 412 Food Rescue
        </h1>
        <p className="text-gray-500 mb-1">
          <strong>Role:</strong> UX Designer &nbsp;·&nbsp; <strong>Course:</strong> CSCI 1300, Brown University
        </p>
        <p className="text-gray-500">
          <strong>Team:</strong> Miranda Mo, Jennifer He, Milanca Wang
        </p>
      </div>

      <Section title="Context">
        <p className="text-gray-700 leading-relaxed">
          We chose <strong>412 Food Rescue</strong>, a startup focused on redistributing surplus food from retailers
          to food banks and community organizations. Our goal was to design a mobile app experience that streamlines
          the process — from food pickup scheduling to delivery coordination.
        </p>
        <p className="text-gray-700 leading-relaxed mt-3">
          We chose mobile over web because it makes it easier to photograph surplus food, navigate while driving,
          and coordinate logistics in real time.
        </p>
      </Section>

      <Section title="Pre-Design Questions">
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Who is directly affected? Food providers (grocery stores, restaurants), volunteers, food banks/NGOs.</li>
          <li>Who is indirectly affected? Recipients of redistributed food, local communities.</li>
          <li>Ethical considerations: gas emissions from delivery routes, volunteer safety, data privacy of food providers.</li>
          <li>How do we make the app accessible to volunteers with varying tech literacy?</li>
        </ul>
      </Section>

      <Section title="User Flow & Low-Fi Wireframes">
        <p className="text-gray-700 leading-relaxed mb-4">
          We identified three distinct user types, each with a different flow through the app:
        </p>
        <div className="flex flex-col gap-4">
          <ProjectImage src="/images/projects/iterative/food_providers.jpg" alt="Food Providers flow" caption="Food Providers" />
          <ProjectImage src="/images/projects/iterative/volunteer.jpg" alt="Volunteer flow" caption="Volunteers" />
          <ProjectImage src="/images/projects/iterative/food_pantry.jpg" alt="Food Pantry flow" caption="Food Banks / NGOs" />
        </div>
      </Section>

      <Section title="High-Fidelity Prototypes">
        <ProjectImage
          src="/images/projects/iterative/diagonal.gif"
          alt="High-fidelity prototype"
          caption="Initial hi-fi prototype"
        />
        <p className="text-gray-700 leading-relaxed mt-4">
          Improvements from low-fi to hi-fi included:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mt-2">
          <li>Added a consistent color palette (warm greens/oranges reflecting food & community)</li>
          <li>Introduced bottom navigation for easier thumb reach</li>
          <li>Added map integration for delivery route visualization</li>
          <li>Incorporated progress indicators for food pickup status</li>
        </ul>
      </Section>

      <Section title="Final Changes from In-class Critique">
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Darkened body text for better contrast and readability</li>
          <li>Added estimated drive duration to delivery assignments</li>
          <li>Removed date from the main navigation (redundant with schedule view)</li>
          <li>Made contact buttons interactive with real tap targets</li>
          <li>Improved map screen layout to reduce cognitive load</li>
          <li>Added a congratulatory end screen after successful food delivery</li>
        </ul>
      </Section>

      <Section title="Before & After">
        <ProjectImage
          src="/images/projects/iterative/before-and-after.png"
          alt="Before and after comparison"
          caption="Before and after critique changes"
        />
      </Section>

      <Section title="Final Visual Design">
        <div className="flex flex-col gap-4">
          <ProjectImage src="/images/projects/iterative/food_supplier.gif" alt="Food supplier flow" caption="Food Supplier" />
          <ProjectImage src="/images/projects/iterative/volunteer.gif" alt="Volunteer flow" caption="Volunteer" />
          <ProjectImage src="/images/projects/iterative/ngo.gif" alt="NGO flow" caption="Food Bank / NGO" />
        </div>
      </Section>

      <Section title="User Testing">
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Hypothesis:</strong> Users can complete a food pickup assignment within 3 taps from the home screen.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Scenario:</strong> You are a volunteer for 412 Food Rescue. You&apos;ve just received a notification
          about a nearby pickup. Navigate the app to accept the assignment and find the pickup location.
        </p>

        <h3 className="font-semibold text-gray-700 mb-3 mt-5">Quantitative Metrics</h3>
        <div className="flex flex-col gap-4">
          <ProjectImage src="/images/projects/iterative/task1.jpg" alt="Task 1 metrics" caption="Task 1" />
          <ProjectImage src="/images/projects/iterative/task2.jpg" alt="Task 2 metrics" caption="Task 2" />
          <ProjectImage src="/images/projects/iterative/task3.jpg" alt="Task 3 metrics" caption="Task 3" />
        </div>

        <h3 className="font-semibold text-gray-700 mb-3 mt-6">Qualitative Findings</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Users appreciated the clean, uncluttered layout but wanted more visible confirmation after actions</li>
          <li>Some confusion about the difference between &quot;pending&quot; and &quot;active&quot; assignments</li>
          <li>The map screen was praised for clarity; route alternatives were requested</li>
          <li>Users wanted push notifications integrated more visibly into the app flow</li>
        </ul>
      </Section>

      <Section title="Conclusion">
        <p className="text-gray-700 leading-relaxed">
          This project taught us the value of iterative refinement — each round of feedback meaningfully improved
          usability and visual clarity. The final designs addressed the core needs of all three user types while
          maintaining a cohesive visual identity. Future work would include implementing real-time route optimization
          and deeper NGO inventory management tools.
        </p>
      </Section>
    </div>
  )
}
