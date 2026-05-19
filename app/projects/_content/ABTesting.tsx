import Image from 'next/image'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">{title}</h2>
      {children}
    </section>
  )
}

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h3 className="text-base font-semibold text-gray-700 mb-3">{title}</h3>
      {children}
    </div>
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

function Hypothesis({ metric, nullH, alt }: { metric: string; nullH: string; alt: string }) {
  return (
    <div className="mb-5 p-4 bg-gray-50 rounded-xl border border-gray-100">
      <p className="text-sm font-semibold text-gray-700 mb-2">{metric}</p>
      <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Null:</span> {nullH}</p>
      <p className="text-sm text-gray-600"><span className="font-medium">Alternative:</span> {alt}</p>
    </div>
  )
}

export default function ABTestingPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-purple-100 text-purple-700">design</span>
          <span className="text-xs text-gray-400">2021</span>
          <span className="text-xs text-gray-400">· UX researcher</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">A/B Testing & Eye Tracking</h1>
        <p className="text-gray-500 mb-1">
          <strong>Role:</strong> UX Researcher &nbsp;·&nbsp; <strong>Course:</strong> CSCI 1300, Brown University
        </p>
        <p className="text-gray-500">
          <strong>Team:</strong> Miranda Mo, Jennifer He, Milanca Wang
        </p>
      </div>

      <ProjectImage src="/images/projects/cover/eyetracking-cover.jpg" alt="A/B Testing & Eye Tracking cover" />

      <Section title="Context">
        <p className="text-gray-700 leading-relaxed mb-3">
          This project was made for CSCI 1300: User Interfaces and User Experiences, a class at Brown University
          taught by Jeff Huang. Our goal was to research how affordances affect user behavior by analyzing data
          through A/B testing and eye tracking.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          For this project, we created two new and improved versions of a taxi booking site. For <strong>Version A</strong>,
          we used a vertical layout. We added grid boxes around each taxi option and a drop shadow to emphasize the
          different sections. We also used different font sizes for the name of the taxi and the description to add
          distinction between the different pieces of information. For <strong>Version B</strong>, we used a horizontal
          layout that placed all of the taxi options next to each other contained within the whole screen. We also
          added grid boxes around each taxi to make the content more readable. For both versions, we used the same
          color palette so that color was not a factor — instead, we focused on how the two different layouts would
          affect behavioral trends such as click through rate, time to click, dwell time, and return rate.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <figure>
            <div className="relative w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
              <Image src="/images/projects/eye-tracking/version-A.png" alt="Version A" width={450} height={300} className="w-full h-auto object-contain" unoptimized />
            </div>
            <figcaption className="text-center text-xs text-gray-400 mt-1">Version A — vertical layout</figcaption>
          </figure>
          <figure>
            <div className="relative w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
              <Image src="/images/projects/eye-tracking/version-B.png" alt="Version B" width={450} height={300} className="w-full h-auto object-contain" unoptimized />
            </div>
            <figcaption className="text-center text-xs text-gray-400 mt-1">Version B — horizontal layout</figcaption>
          </figure>
        </div>
      </Section>

      <Section title="Part 1: A/B Testing">
        <p className="text-gray-700 leading-relaxed mb-6">
          First, we made a series of hypotheses on how the two versions of our sites would perform based on four
          metrics (click through rate, time to click, dwell time, and return rate). Then, we tested our hypotheses
          by having users navigate through one of our two sites and analyzed the data to conclude whether our results
          are statistically significant, using either a Chi-Squared test or T-test.
        </p>

        <Subsection title="Hypotheses">
          <Hypothesis
            metric="Click Through Rate"
            nullH="The click-through rate of Version A will be equal to that of Version B."
            alt="The click-through rate of Version A will be greater than that of Version B because the layout of Version A is cleaner and entices the user to select a service offered."
          />
          <Hypothesis
            metric="Time to Click"
            nullH="The time to click will be the same in Version A and Version B."
            alt="The time to click a button on Version A will be shorter than that of Version B because the button on Version A is larger, and there is less content on the initial screen for Version A compared to Version B."
          />
          <Hypothesis
            metric="Dwell Time"
            nullH="The dwell time will be the same in Version A and Version B."
            alt="The dwell time for Version A will be shorter than that of Version B because users of Version B see all taxi companies on the page at once and are more likely to choose to click on a company that they will likely stick with."
          />
          <Hypothesis
            metric="Return Rate"
            nullH="The return rate of Version A will be equal to that of Version B."
            alt="The return rate for Version A will be higher than the return rate for Version B because users of Version B see more content on the screen and are more likely to read the information for all of the taxi companies before clicking on the reserve button. On the other hand, users of Version A see less content on the screen and are more likely to click on the reserve button before fully reading information for the other taxi companies, thus causing them to return back to the web page."
          />
        </Subsection>

        <Subsection title="Data Analysis">
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-gray-600 mb-2">Click Through Rate</h4>
            <p className="text-gray-700 leading-relaxed text-sm mb-3">
              We began by creating a pivot table in Excel with count of page load time (how many times page was
              loaded) and max of click time (0 if they didn&apos;t click on any links), tallied those with max click
              time of 0, and subtracted them from the total number of entries to find the percentage of people who
              clicked. We chose to use the Chi-squared test for click through rate because this is categorical data
              (yes or no for each user).
            </p>
            <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
              <div>
                <p className="font-medium text-gray-600 mb-1">Observed</p>
                <table className="w-full border-collapse text-xs">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 p-2 text-left"></th>
                      <th className="border border-gray-200 p-2">Click</th>
                      <th className="border border-gray-200 p-2">No click</th>
                      <th className="border border-gray-200 p-2">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-gray-200 p-2 font-medium">A</td><td className="border border-gray-200 p-2 text-center">29</td><td className="border border-gray-200 p-2 text-center">5</td><td className="border border-gray-200 p-2 text-center">34</td></tr>
                    <tr><td className="border border-gray-200 p-2 font-medium">B</td><td className="border border-gray-200 p-2 text-center">28</td><td className="border border-gray-200 p-2 text-center">10</td><td className="border border-gray-200 p-2 text-center">38</td></tr>
                    <tr className="bg-gray-50"><td className="border border-gray-200 p-2 font-medium">Total</td><td className="border border-gray-200 p-2 text-center">57</td><td className="border border-gray-200 p-2 text-center">15</td><td className="border border-gray-200 p-2 text-center">72</td></tr>
                  </tbody>
                </table>
              </div>
              <div>
                <p className="font-medium text-gray-600 mb-1">Expected</p>
                <table className="w-full border-collapse text-xs">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 p-2 text-left"></th>
                      <th className="border border-gray-200 p-2">Click</th>
                      <th className="border border-gray-200 p-2">No click</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-gray-200 p-2 font-medium">A</td><td className="border border-gray-200 p-2 text-center">26.9</td><td className="border border-gray-200 p-2 text-center">7.1</td></tr>
                    <tr><td className="border border-gray-200 p-2 font-medium">B</td><td className="border border-gray-200 p-2 text-center">30.1</td><td className="border border-gray-200 p-2 text-center">7.9</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-sm mb-3">
              <p className="text-gray-600"><span className="font-medium">Interface A:</span> 85.3% &nbsp;·&nbsp; <span className="font-medium">Interface B:</span> 73.7%</p>
              <p className="text-gray-600 mt-1">χ² = 1.4897, df = 1, p-value reference = 3.84</p>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              We did not reject the null hypothesis because our calculated value (1.4898) was less than the reference
              value (3.84) at p = 0.05 and df = 1. The difference between click-through rates was not statistically
              significant.
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-sm font-semibold text-gray-600 mb-2">Time to Click</h4>
            <p className="text-gray-700 leading-relaxed text-sm mb-3">
              We calculated the average time to click by deleting people with no clicks, subtracting the page load
              time of a click entry with the click time, then averaging users&apos; results for Version A and B. We
              chose to use a t-test because we are comparing the average time to click for each interface.
            </p>
            <div className="bg-gray-50 rounded-lg p-3 text-sm mb-3">
              <p className="text-gray-600"><span className="font-medium">Interface A:</span> 8,846.86 ms &nbsp;·&nbsp; <span className="font-medium">Interface B:</span> 9,119.82 ms</p>
              <p className="text-gray-600 mt-1">p-value = 0.1490, df = 55, reference t = 1.673</p>
              <p className="text-gray-600 mt-1">95% CI: −271.96 ± 3,052.70 (contains 0)</p>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              We did not reject the null hypothesis because our calculated p-value (0.1490) was greater than 0.05.
              The difference between average time to click was not statistically significant.
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-sm font-semibold text-gray-600 mb-2">Dwell Time</h4>
            <p className="text-gray-700 leading-relaxed text-sm mb-3">
              We deleted users who did not click and return to the page, then subtracted the first click time from
              the next page load time to calculate dwell time. We used a t-test to compare average dwell times.
            </p>
            <div className="bg-gray-50 rounded-lg p-3 text-sm mb-3">
              <p className="text-gray-600"><span className="font-medium">Interface A:</span> 24.39 seconds &nbsp;·&nbsp; <span className="font-medium">Interface B:</span> 76.38 seconds</p>
              <p className="text-gray-600 mt-1">t = 0.7360, df = 36, reference t = 1.688</p>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Since |t| (0.7360) was less than 1.688, the data was not statistically significant. We did not reject
              the null hypothesis that dwell time would be the same in Version A and Version B.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-600 mb-2">Return Rate</h4>
            <p className="text-gray-700 leading-relaxed text-sm mb-3">
              We found the total number of people who clicked for each version, then determined who returned by
              checking whether the maximum page load time exceeded the maximum click time. We used a Chi-squared
              test because this is categorical data.
            </p>
            <div className="mb-3 overflow-x-auto">
              <table className="w-full border-collapse text-xs">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 p-2 text-left"></th>
                    <th className="border border-gray-200 p-2">Clicked & Returned</th>
                    <th className="border border-gray-200 p-2">Clicked & Did Not Return</th>
                    <th className="border border-gray-200 p-2">Total Clicked</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-200 p-2 font-medium">Interface A</td><td className="border border-gray-200 p-2 text-center">18</td><td className="border border-gray-200 p-2 text-center">11</td><td className="border border-gray-200 p-2 text-center">29</td></tr>
                  <tr><td className="border border-gray-200 p-2 font-medium">Interface B</td><td className="border border-gray-200 p-2 text-center">20</td><td className="border border-gray-200 p-2 text-center">8</td><td className="border border-gray-200 p-2 text-center">28</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-200 p-2 font-medium">Total</td><td className="border border-gray-200 p-2 text-center">38</td><td className="border border-gray-200 p-2 text-center">19</td><td className="border border-gray-200 p-2 text-center">57</td></tr>
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-sm mb-3">
              <p className="text-gray-600"><span className="font-medium">Interface A:</span> 63.3% &nbsp;·&nbsp; <span className="font-medium">Interface B:</span> 72.4%</p>
              <p className="text-gray-600 mt-1">χ² = 0.5616, df = 1, p-value reference = 3.84</p>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Since 0.5616 is not greater than 3.84, the difference between versions A and B is not statistically
              significant. We did not reject the null hypothesis.
            </p>
          </div>
        </Subsection>
      </Section>

      <Section title="Part 2: Eye Tracking">
        <p className="text-gray-700 leading-relaxed mb-4">
          For the eye tracking portion of this project, we used an eye tracker on two participants, one for each
          version of the site. Then, we used JavaScript and Python to create a heatmap and an animated replay of
          the users&apos; eye movements based on data collected from each eye tracking session.
        </p>

        <Subsection title="Hypothesis">
          <p className="text-gray-700 leading-relaxed text-sm">
            We instructed the user to book the cheapest taxi. Our hypothesis is that users of Version A will focus
            on the descriptions and spend more time searching for the taxi that they want to click due to having to
            scroll through options. Meanwhile, users of Version B are able to view all of the information at once
            since it is all contained on one screen, so they will not look at the information as closely and will
            click on a button in a shorter amount of time. Since our instruction for the eye-tracking experiment
            differs from that of the A/B testing data collection (to simply choose a taxi), our hypotheses differ
            slightly from Part 1.
          </p>
        </Subsection>

        <Subsection title="Eye Tracking Replays">
          <div className="grid grid-cols-2 gap-3">
            <figure>
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                <Image src="/images/projects/eye-tracking/version-a-eyetracking.png" alt="Version A eye tracking replay" width={450} height={300} className="w-full h-auto object-contain" unoptimized />
              </div>
              <figcaption className="text-center text-xs text-gray-400 mt-1">Version A — eye tracking</figcaption>
            </figure>
            <figure>
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                <Image src="/images/projects/eye-tracking/version-b-eyetracking.png" alt="Version B eye tracking replay" width={450} height={300} className="w-full h-auto object-contain" unoptimized />
              </div>
              <figcaption className="text-center text-xs text-gray-400 mt-1">Version B — eye tracking</figcaption>
            </figure>
          </div>
        </Subsection>

        <Subsection title="Heatmaps">
          <div className="grid grid-cols-2 gap-3">
            <figure>
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                <Image src="/images/projects/eye-tracking/version-a-heatmap-new.png" alt="Version A heatmap" width={450} height={300} className="w-full h-auto object-contain" unoptimized />
              </div>
              <figcaption className="text-center text-xs text-gray-400 mt-1">Version A — heatmap</figcaption>
            </figure>
            <figure>
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                <Image src="/images/projects/eye-tracking/version-b-heatmap.png" alt="Version B heatmap" width={450} height={300} className="w-full h-auto object-contain" unoptimized />
              </div>
              <figcaption className="text-center text-xs text-gray-400 mt-1">Version B — heatmap</figcaption>
            </figure>
          </div>
        </Subsection>

        <Subsection title="Interpretation">
          <p className="text-gray-700 leading-relaxed text-sm">
            The eye tracking data shows that the user for Version A focused on the description section for each
            section as they scrolled through the site, while the user for Version B does not focus on the description
            as much and looks at the images before clicking a button. Additionally, the number of data points shows
            that the user for Version A spent a longer time on the site than the user for Version B. These findings
            support our hypothesis.
          </p>
        </Subsection>
      </Section>

      <Section title="Part 3: Comparison">
        <p className="text-gray-700 leading-relaxed mb-4">
          Based on the data analysis and eye-tracking results, we propose that Memphis Taxis Co. use Interface A
          due to its higher click-through rate and lower click time. The click-through rate of Interface A (85.3%)
          is higher than that of Interface B (73.7%), which may be caused by the cleaner design simplifying
          information retrieval and the decision-making process. The average time to click for Interface A
          (8,847.86 ms) is also lower than that of Interface B (9,119.82 ms), suggesting that Interface A&apos;s
          vertical layout helps people consider options individually and make quicker decisions, unlike Interface B
          where users read and compare each option before deciding. The eye-tracking heatmap shows that Interface
          A&apos;s user focused on several descriptions before making her final decision and had a longer click
          time than Interface B&apos;s eye-tracking user — contrary to the A/B Test results — due to a different
          command given to the user. Therefore, despite the results that advocate for Interface A, we should conduct
          more tests to achieve statistically significant results and use the same commands for A/B data collection
          and eye-tracking.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          When comparing A/B testing and eye tracking, we noticed that eye tracking has no measurement for
          behavioral trends such as return rate and dwell time, since the session ends once the user clicks a button.
          The advantage of A/B testing is that it captures time-based metrics like dwell time and return rate. The
          advantage of eye tracking is that it reveals where on the screen users are looking, informing specific
          design choices — and the visual heatmap enables direct comparisons between versions.
        </p>
        <p className="text-gray-700 leading-relaxed">
          One metric that could be used unethically is click through rate, if images or text are intentionally
          misleading in order to get users to click. Another is conversion rate — the number of users who completed
          a desired goal divided by total visitors — which can be manipulated to push users into unwanted purchases
          without taking into consideration what is most desirable for the user.
        </p>
      </Section>

      <Section title="Conclusion">
        <p className="text-gray-700 leading-relaxed">
          This project effectively combines design with data collection. We used the eye tracker to create a heatmap
          which offered different data visualization from that of the A/B Testing results. Both provided insightful
          results into how users interact with the two different sites. To further build on this project, we would
          keep our hypotheses for A/B Testing and eye-tracking more consistent and conduct tests on a larger group
          of users.
        </p>
      </Section>
    </div>
  )
}
