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
    <figure className="my-4">
      <div className="relative w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
        <Image src={src} alt={alt} width={900} height={500} className="w-full h-auto object-contain" unoptimized />
      </div>
      {caption && <figcaption className="text-center text-xs text-gray-400 mt-2">{caption}</figcaption>}
    </figure>
  )
}

function QA({ question, answers }: { question: string; answers: { label: string; text: string }[] }) {
  return (
    <div className="mb-5">
      <p className="text-sm font-semibold text-gray-700 mb-2">{question}</p>
      {answers.map((a) => (
        <div key={a.label} className="mb-1 pl-3 border-l-2 border-gray-100">
          <span className="text-xs font-medium text-gray-500">{a.label}: </span>
          <span className="text-sm text-gray-600 italic">&ldquo;{a.text}&rdquo;</span>
        </div>
      ))}
    </div>
  )
}

export default function PersonasPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-purple-100 text-purple-700">design</span>
          <span className="text-xs text-gray-400">2021</span>
          <span className="text-xs text-gray-400">· UX researcher</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Personas & Storyboarding</h1>
        <p className="text-gray-500 mb-1">
          <strong>Role:</strong> UX Researcher &nbsp;·&nbsp; <strong>Course:</strong> CSCI 1300, Brown University
        </p>
        <p className="text-gray-500">
          <strong>Partner:</strong> Kate Atschinow
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <ProjectImage src="/images/projects/storyboarding/machine-and-screen.jpg" alt="Machine touchscreen" caption="Touchscreen display" />
      </div>

      <Section title="Context">
        <p className="text-gray-700 leading-relaxed">
          In this project for CSCI 1300: User Interfaces and User Experiences, taught by Jeff Huang, we were asked
          to choose one interface we have interacted with and analyze it using concepts of mental models and personas.
          My partner Kate Atschinow and I chose to analyze the self checkout machine at CVS.
        </p>
      </Section>

      <Section title="Interface Description">
        <p className="text-gray-700 leading-relaxed mb-4">
          The self checkout machine is an alternative for customers to purchase items as opposed to going up to a
          traditional cashier. It helps to shorten checkout lanes and reduce wait times.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The self checkout machine contains four main components: the touchscreen display, item scanner, credit
          card reader, and bagging area. Customers scan each item barcode, place the item in the bag — which is
          verified by weight against previously stored information — press the appropriate buttons on the touchscreen
          display, and then make their payment via their preferred method.
        </p>
        <ProjectImage src="/images/projects/storyboarding/screen.jpg" alt="Self checkout screen" caption="Touchscreen interface" />
      </Section>

      <Section title="Behavioral Observations">
        <p className="text-gray-700 leading-relaxed mb-3">
          Most people we observed using the self checkout machine were college students, mostly because CVS is
          located right by Brown University. This means our sample primarily represented Brown University students
          and some Providence residents, and is not representative of broader demographics who might struggle more
          with the technology.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>A customer required staff assistance when the machine could not process an item.</li>
          <li>Customers often brought friends who assisted with button selection.</li>
          <li>
            Several customers clicked the &ldquo;Skip Bagging&rdquo; option, especially when their items were
            small, and did not place their items on the scale.
          </li>
        </ul>
      </Section>

      <Section title="User Interviews">
        <p className="text-gray-700 leading-relaxed mb-6">
          We interviewed two CVS customers about their experience with the self checkout machine.
        </p>
        <QA
          question="Do you prefer self checkout or going to the cashier?"
          answers={[
            { label: 'User 1', text: 'I prefer self checkout.' },
            { label: 'User 2', text: 'Self checkout.' },
          ]}
        />
        <QA
          question="What are some reasons you prefer one over the other?"
          answers={[
            { label: 'User 1', text: "Because I don't want to interact with the cashier, and I feel like it (the cashier) definitely takes more time." },
            { label: 'User 2', text: "The self-checkout usually has a faster line and I don't have to talk to anyone." },
          ]}
        />
        <QA
          question="How likely are you to use the self checkout machine as opposed to going to the cashier?"
          answers={[
            { label: 'User 1', text: "I'll use the self checkout all the time unless I have too many items or there's a huge line for the self checkout." },
            { label: 'User 2', text: "Very likely. I only use the cashier when I'm using cash or a machine isn't working." },
          ]}
        />
        <QA
          question="What do you think can be improved with the user interface of the self checkout machine?"
          answers={[
            { label: 'User 1', text: "I feel like it's already pretty straight forward but sometimes the scanning is too sensitive so then it'll scan your item twice. And then other times if you have too light of an object, like let's say you bought nail polish and you put it down in the bag it won't detect that you have it in the bag so it'll keep waiting for you to put it in the bag. But then you can just say 'skip bagging' and then scan the next item." },
            { label: 'User 2', text: "After I scan an item it doesn't always register when I put it down in a bag. I've also had problems with it reading my credit card when I put the chip in. Also sometimes it takes multiple tries for the scanner to scan my item." },
          ]}
        />
        <QA
          question="Are there any parts of the interface that you find confusing?"
          answers={[
            { label: 'User 1', text: "No, but also I'm not someone who uses coupons. But if I were to have coupons I would be confused as to how to use it. Normally it's pretty straight forward. I just use my credit card." },
            { label: 'User 2', text: "When I bring my own bag or don't need a bag sometimes I don't know if I should press the button for using my own bag or skip bagging because I have had to press both before." },
          ]}
        />
        <QA
          question="If you could change any features of the design, how would you?"
          answers={[
            { label: 'User 1', text: "I think the Amazon concept is nice, where you can just take the item and leave. It's convenient that it's checkout free and you just get charged through your Amazon account. But some people think it feels like shoplifting." },
            { label: 'User 2', text: "I would make it more clear exactly where you should put the item you're scanning so you don't have to just wave it around. Also make it easier to choose your own bag or skip bagging." },
          ]}
        />
        <QA
          question="How does this self checkout machine compare to self checkout machines you have used in other stores?"
          answers={[
            { label: 'User 1', text: "The only other one I've used is Target and it's exactly the same. There's no discrepancy. I'm pretty sure it's the same exact interface as well." },
            { label: 'User 2', text: "The only difference I've noticed is that the other ones have a security monitor which doesn't necessarily affect my experience with it." },
          ]}
        />
      </Section>

      <Section title="Mental Models">
        <div className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
          <p className="text-sm font-semibold text-gray-700 mb-2">Mental Model #1 — Own Bag Error</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            The user selects &ldquo;Use my own bag&rdquo; and then places the item in their reusable bag after
            scanning. However, an error occurs and the machine does not let them scan their next item. The user
            cannot resolve the issue independently because they don&apos;t understand that &ldquo;Skip
            Bagging&rdquo; would bypass the weight detector error. They ultimately press &ldquo;Request
            Help&rdquo; while stressed.
          </p>
        </div>
        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
          <p className="text-sm font-semibold text-gray-700 mb-2">Mental Model #2 — Skip Bagging Discovery</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            The user scans the item and places it in the plastic bag. The weight detector does not detect that an
            item has been placed there, and the user is not able to scan the next item. This user notices the
            &ldquo;Skip Bagging&rdquo; option and correctly infers it bypasses weight detection, successfully
            resolving the problem with minimal confusion.
          </p>
        </div>
      </Section>

      <Section title="Personas">
        <ProjectImage src="/images/projects/storyboarding/persona1.png" alt="Persona 1" caption="Persona 1" />
        <ProjectImage src="/images/projects/storyboarding/persona2.jpg" alt="Persona 2 — Rushed Robert" caption="Persona 2: Rushed Robert" />
        <p className="text-gray-700 leading-relaxed mt-4">
          <strong>Rushed Robert</strong> is a student at Brown University who likes to use his time efficiently.
          He always looks for a way to do things as quickly as possible so he can keep up with his busy lifestyle.
          He juggles engineering coursework, soccer, and socializing, and chooses self-checkout for shorter lines,
          using plastic bags for convenience. His problem-solving skills help him identify machine malfunctions
          quickly.
        </p>
      </Section>

      <Section title="Storyboard">
        <ProjectImage src="/images/projects/storyboarding/storyboard-(1).jpg" alt="Storyboard" caption="Storyboard of Rushed Robert's self-checkout experience" />
      </Section>

      <Section title="Conclusion">
        <p className="text-gray-700 leading-relaxed">
          Throughout this process of conducting behavioral observations and user interviews, we were able to gauge
          customers&apos; general feelings about self-checkout. Most customers preferred self-checkout over
          traditional cashiers. Key issues centered on weight detection failures when scanned items fell outside
          normal ranges. Constructing mental models and personas helped us understand how different users react
          to and resolve these problems, and revealed the gap between users who discover the &ldquo;Skip
          Bagging&rdquo; workaround independently versus those who need staff assistance.
        </p>
      </Section>
    </div>
  )
}
