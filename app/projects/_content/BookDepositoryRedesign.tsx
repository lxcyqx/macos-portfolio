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

function BeforeAfter({ original, redesign, label }: { original: string; redesign: string; label: string }) {
  return (
    <div className="mb-6">
      <p className="text-sm font-semibold text-gray-600 mb-2">{label}</p>
      <div className="grid grid-cols-2 gap-3">
        <figure>
          <div className="relative w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
            <Image src={original} alt={`${label} — original`} width={450} height={300} className="w-full h-auto object-contain" unoptimized />
          </div>
          <figcaption className="text-center text-xs text-gray-400 mt-1">Original</figcaption>
        </figure>
        <figure>
          <div className="relative w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
            <Image src={redesign} alt={`${label} — redesign`} width={450} height={300} className="w-full h-auto object-contain" unoptimized />
          </div>
          <figcaption className="text-center text-xs text-gray-400 mt-1">Redesign</figcaption>
        </figure>
      </div>
    </div>
  )
}

export default function BookDepositoryRedesignPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-purple-100 text-purple-700">design</span>
          <span className="text-xs text-gray-400">2021</span>
          <span className="text-xs text-gray-400">· UX designer</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Book Depository Redesign</h1>
        <p className="text-gray-500 mb-1">
          <strong>Role:</strong> UX Designer &nbsp;·&nbsp; <strong>Course:</strong> CSCI 1300, Brown University
        </p>
        <p className="text-gray-500">
          <strong>Partner:</strong>{' '}
          <a href="https://www.linkedin.com/in/mirandamo/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Miranda Mo
          </a>
        </p>
      </div>

      <ProjectImage src="/images/projects/redesign/banner.jpg" alt="Book Depository Redesign banner" />

      <Section title="Context">
        <p className="text-gray-700 leading-relaxed">
          Redesign was a project for CSCI 1300: User Interfaces and User Experiences, a course at Brown University
          taught by{' '}
          <a href="https://jeffhuang.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Jeff Huang
          </a>
          . My partner for this project was Miranda Mo.
        </p>
        <p className="text-gray-700 leading-relaxed mt-3">
          Our goal was to choose a site or app and redesign it using some of the usability principles we had learned in class.
        </p>
      </Section>

      <Section title="Wireframes">
        <p className="text-gray-700 leading-relaxed mb-4">
          We chose to redesign Book Depository, a UK based book retailer that is known for free delivery worldwide.
          Integrating UX principles of learnability, usability, and memorability, we improved the user experience of
          the website to aid the site&apos;s intuitive navigation. We first analyzed the original website, prototyped
          low/high fidelity of a book information page, and then coded our responsive (4K widescreen desktop, laptop,
          tablet, and mobile) designs with HTML/CSS.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Below are images of the original home page, sign in, book information, bestsellers, and basket screen.
          We noticed the large amount of content, especially on the home page and in the navigation bar, and thought
          about how we could simplify the pages while keeping the main functionalities.
        </p>

        <BeforeAfter
          original="/images/projects/redesign/home-page.png"
          redesign="/images/projects/redesign/Home.png"
          label="Home Page"
        />
        <BeforeAfter
          original="/images/projects/redesign/signin.png"
          redesign="/images/projects/redesign/Login.png"
          label="Sign In"
        />
        <BeforeAfter
          original="/images/projects/redesign/bookinfo.png"
          redesign="/images/projects/redesign/Book-Info.png"
          label="Book Information"
        />
        <BeforeAfter
          original="/images/projects/redesign/bestseller.png"
          redesign="/images/projects/redesign/Bestsellers.png"
          label="Bestsellers"
        />
        <BeforeAfter
          original="/images/projects/redesign/cart.png"
          redesign="/images/projects/redesign/Shopping-Cart.png"
          label="Cart"
        />

        <p className="text-gray-700 leading-relaxed mt-4">
          We created five wireframes, one for each screen (home page, sign in, book information, bestsellers, and
          shopping basket). The main changes include simplifying the navigation bar, increasing the size of the books,
          and reducing large amounts of white space that did not contribute to breathability. These changes decluttered
          distracting content and additional words to increase usability by helping users focus on the page&apos;s main
          functions.
        </p>
      </Section>

      <Section title="Navigation Flow">
        <p className="text-gray-700 leading-relaxed mb-4">
          Next, we created a flow chart of the navigation flow between the five different pages that we chose.
        </p>
        <ProjectImage src="/images/projects/redesign/Flowchart.jpg" alt="Navigation flowchart" caption="Navigation flowchart" />
      </Section>

      <Section title="UI Principles Comparison">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700 w-1/4">UI Principle</th>
                <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700 w-[37.5%]">Original Interface</th>
                <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700 w-[37.5%]">Redesigned Interface</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-gray-200 font-medium text-gray-700 align-top">Intuitive Design</td>
                <td className="p-3 border border-gray-200 text-gray-600 align-top leading-relaxed">
                  Redundant features on the page in different areas, making it less intuitive what the difference is
                  between all of them and which to click. Identifiable navigation bar, making navigation accessible on
                  all pages, though it is a bit cluttered.
                </td>
                <td className="p-3 border border-gray-200 text-gray-600 align-top leading-relaxed">
                  Eliminated components on the screen and placed them in different areas to create more minimal web
                  pages. Simplified the navigation bar (e.g. putting wishlist and order status in profile page).
                </td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="p-3 border border-gray-200 font-medium text-gray-700 align-top">Ease of Learning</td>
                <td className="p-3 border border-gray-200 text-gray-600 align-top leading-relaxed">
                  No option to move items in the basket to wishlist or to save for later, which is a feature that is
                  incorporated in other popular sites (e.g. Amazon, Walmart, eBay), thus interfering with a new
                  user&apos;s already established mental model of a shopping site. Amount of content on a single page
                  can make learning more difficult.
                </td>
                <td className="p-3 border border-gray-200 text-gray-600 align-top leading-relaxed">
                  Added &ldquo;Move to wishlist&rdquo; button in the basket page. Simplified design across the web
                  pages, including just the essential features for the respective pages.
                </td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200 font-medium text-gray-700 align-top">Ease of Use</td>
                <td className="p-3 border border-gray-200 text-gray-600 align-top leading-relaxed">
                  The amount of content on the page is distracting and takes away from the focus, which should be the
                  books. Does not allow batch action mode in basket page. Can only add book to wishlist after clicking
                  into the book.
                </td>
                <td className="p-3 border border-gray-200 text-gray-600 align-top leading-relaxed">
                  Enlarged display of books on the screen and increased font size relative to screen to draw focus.
                  Added checkboxes in the basket page to perform actions on several items at once. Made it so that the
                  &ldquo;Add to basket&rdquo; and &ldquo;Add to Wishlist&rdquo; button shows up on hover or on
                  long-press when using a tablet or phone.
                </td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="p-3 border border-gray-200 font-medium text-gray-700 align-top">Memorability</td>
                <td className="p-3 border border-gray-200 text-gray-600 align-top leading-relaxed">
                  Navigation bar and search bar create a site that is easy to use and colors draw eyes to certain
                  areas, such as the &ldquo;add to basket&rdquo; button and the basket button.
                </td>
                <td className="p-3 border border-gray-200 text-gray-600 align-top leading-relaxed">
                  Kept these features but created a much more simplified interface by grouping certain items together
                  to make it more memorable (e.g. added &ldquo;Shop by category&rdquo; dropdown instead of listing
                  multiple categories in the navigation bar and moving items related to user profile to be in the
                  profile upon pressing the user icon).
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="High-Fidelity Redesign">
        <p className="text-gray-700 leading-relaxed mb-4">
          After creating our five wireframes, we made a high-fidelity mockup of the basket and book information screen.
        </p>
        <ProjectImage src="/images/projects/redesign/web-1.png" alt="High-fidelity mockup 1" />
        <ProjectImage src="/images/projects/redesign/web-2.png" alt="High-fidelity mockup 2" />
      </Section>

      <Section title="Responsive Redesign">
        <p className="text-gray-700 leading-relaxed mb-4">
          The next step in the project was to create a responsive website that would maintain visual appeal across
          different screen sizes. First, we adapted the designs to four screen sizes: standard desktop (laptop), 4K,
          tablet, and mobile.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Then, we chose to code the book information page because content shifts to different locations on the
          desktop, mobile, and tablet screens. Below are annotated mockups of how elements on the screen respond to
          different screen sizes.
        </p>
        <ProjectImage src="/images/projects/cover/redesign-cover-gray.gif" alt="Responsive redesign demo" caption="Responsive demo" />
        <ProjectImage src="/images/projects/redesign/Desktop_annotation.jpg" alt="Desktop annotations" caption="Desktop annotations" />
        <ProjectImage src="/images/projects/redesign/Mobile_Tablet annotation.jpg" alt="Mobile and tablet annotations" caption="Mobile & tablet annotations" />
      </Section>

      <Section title="Design Choices">
        <p className="text-gray-700 leading-relaxed mb-4">
          In creating a redesign, we first considered the most important features on the page and navigation from one
          page to another. Our redesign is a much more minimalistic version of the original site, but we made sure to
          include the important features on the page, such as the navigation bar, book cover, description, reviews,
          ratings, and footer. We simplified the navigation bar to only include the important aspects: logo, search
          bar, basket, profile, and &ldquo;shop by category&rdquo; drop down. Eliminating the additional components
          of the navigation bar that are in the original site still keeps the navigation flow intact while reducing
          the distractions from the additional words.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The original website for Book Depository has three main colors: dark purple, blue, and hot pink. In our
          redesign, we changed the color palette to have one accent color to make the site more minimalistic and to
          unify the content. We chose a dark turquoise for the navigation bar, buttons, and footer. This accent color
          draws attention to the important parts on the screen while not being too bright and distracting. It also
          connotes intellectual curiosity and professionalism, aiding the credibility of the website.
        </p>
        <p className="text-gray-700 leading-relaxed">
          For font, we chose Helvetica Neue for readability and limited it to two font sizes (with the exception of
          the crossed out book price which is a third font) and used bolded words to highlight important phrases on
          the page. The original website uses a grid and has blocks around sections on the page to group important
          information together visually. We thought that these blocks were a good way to help with grouping content
          in a way that makes sense, so we included blocks in our redesign but increased the padding between the
          words and the border of the box to improve readability. We made the background of the web page a light
          gray color (similar to what is done in the original website) and in addition added a drop shadow to the
          boxes to further emphasize the distinction between various sections on the page.
        </p>
      </Section>

      <Section title="Conclusion">
        <p className="text-gray-700 leading-relaxed">
          Our goal was to redesign an interface using the usability criteria and design principles that we learned in
          class. We chose a site that has room for improvement. Through this process, we were able to go from
          ideation to creating low-fidelity and high-fidelity mockups to making a responsive website using HTML and CSS.
        </p>
      </Section>
    </div>
  )
}
