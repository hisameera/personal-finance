
export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-white flex flex-col">
      {/* Header */}
      <header className="w-full bg-orange-500 text-white py-4 shadow-md flex justify-between items-center px-8">
        <div className="flex items-center gap-3">
          <img src="/PF_logo-nb.jpeg" alt="Personal Finance Logo" className="h-10 w-10 rounded-full shadow" />
          <span className="text-2xl font-bold tracking-wide">Personal Finance India</span>
        </div>
        <nav className="space-x-6">
          <a href="/" className="hover:underline">Home</a>
          <a href="/blog" className="hover:underline">Blog</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>



      {/* Full-width Hero Image */}
      <div className="w-full">
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"
          alt="Finance Hero"
          className="w-full h-80 object-cover mb-0 shadow-lg"
        />
      </div>

      {/* Hero Section Content */}
      <main className="flex flex-col items-center justify-center flex-1 px-4 py-12">
        <div className="w-full flex flex-col md:flex-row items-stretch gap-0 md:gap-0 mt-8">
          <div className="flex-1 flex items-center justify-center shadow-lg p-10 text-center">
            <div>
              <h1 className="text-5xl font-extrabold text-orange-600 mb-6">Personal Finance for Young Indians</h1>
              <p className="text-xl text-gray-700 mb-4">
                Learn, grow, and master your money with easy guides, actionable tips, and real stories.<br />
                Covering everything from taxes to investing, insurance, and more!
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're a young or experienced professional, entrepreneur, or business person, our resources are designed to help you build confidence and make smart decisions. Explore articles, guides, and tools tailored for Indian audiences. Start your journey to financial freedom today!
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
                <a
                  href="/blog"
                  className="py-3 px-8 rounded-lg font-semibold text-white bg-orange-400 hover:bg-orange-500 shadow-md transition"
                >
                  Read Latest Article
                </a>
                <a
                  href="#about"
                  className="py-3 px-8 rounded-lg font-semibold text-white bg-orange-600 hover:bg-orange-700 shadow-md transition"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="py-3 px-8 rounded-lg font-semibold text-white bg-green-600 hover:bg-green-700 shadow-md transition"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
              alt="Home Card Finance"
              className="shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>

        {/* About Section */}
        <div className="w-full flex flex-col md:flex-row items-stretch gap-0 md:gap-0 mt-16">
          <div className="flex-1 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
              alt="About Card Finance"
              className="rounded-l-xl shadow-lg w-full h-full object-cover"
            />
          </div>
          <section id="about" className="flex-1 flex items-center justify-center bg-white/90 rounded-r-xl shadow p-8 text-left">
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-4">About</h2>
              <p className="text-gray-700 text-lg mb-2">
                <strong>Personal Finance India</strong> is dedicated to helping young Indians take control of their financial future. Our mission is to simplify money matters—taxes, investing, insurance, and more—so you can make smart decisions and achieve your goals.
              </p>
              <p className="text-gray-700 text-lg">
                We believe financial literacy is the key to freedom and peace of mind. Our guides, tips, and stories are designed for beginners and young professionals. Join us and start your journey to financial confidence!
              </p>
            </div>
          </section>
        </div>

        {/* Contact Section */}
        <section id="contact" className="max-w-4xl w-full mt-10 bg-white/90 rounded-xl shadow p-8 text-left">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1 flex flex-col">
              <h2 className="text-3xl font-bold text-orange-500 mb-4">Contact</h2>
              <p className="text-gray-700 text-lg mb-2">
                Have questions, feedback, or want to collaborate? Reach out to us!
              </p>
              <ul className="text-gray-700 text-lg mb-4 list-none pl-0 flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <span className="inline-block"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-orange-600"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.591 7.591a2.25 2.25 0 01-3.182 0l-7.591-7.591A2.25 2.25 0 012.25 6.993V6.75" /></svg></span>
                  <span>Email:</span>
                  <a href="mailto:hello@personalfinanceindia.com" className="text-orange-600 underline">hello@personalfinanceindia.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500"><path d="M17.316 6.246c-.366-.366-.958-.366-1.324 0l-1.324 1.324a.937.937 0 0 0 0 1.324l.662.662-2.648 2.648-2.648-2.648.662-.662a.937.937 0 0 0 0-1.324L8.008 6.246a.937.937 0 0 0-1.324 0l-1.324 1.324a.937.937 0 0 0 0 1.324l.662.662-2.648 2.648a.937.937 0 0 0 0 1.324l1.324 1.324a.937.937 0 0 0 1.324 0l2.648-2.648 2.648 2.648a.937.937 0 0 0 1.324 0l1.324-1.324a.937.937 0 0 0 0-1.324l-2.648-2.648.662-.662a.937.937 0 0 0 0-1.324l-1.324-1.324z" /></svg></span>
                  <span>Twitter (X):</span>
                  <a href="https://twitter.com/yourhandle" className="text-orange-600 underline">@yourhandle</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-700"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.5c0-1.104-.896-2-2-2s-2 .896-2 2v4.5h-3v-9h3v1.285c.627-.805 1.627-1.285 2.5-1.285 1.933 0 3.5 1.567 3.5 3.5v5.5z" /></svg></span>
                  <span>LinkedIn:</span>
                  <a href="https://linkedin.com/in/yourprofile" className="text-orange-600 underline">yourprofile</a>
                </li>
              </ul>
            </div>
            <form className="flex-1 flex flex-col bg-transparent shadow-none p-0 mt-0 min-w-[280px]" autoComplete="off">
              <h3 className="text-xl font-bold text-orange-500 mb-2">Send us a message</h3>
              <input type="text" name="name" placeholder="Your Name" className="border rounded px-4 py-2" required />
              <input type="email" name="email" placeholder="Your Email" className="border rounded px-4 py-2" required />
              <input type="tel" name="phone" placeholder="Your Phone Number" className="border rounded px-4 py-2" required pattern="[0-9]{10,}" title="Please enter a valid phone number" />
              <textarea name="message" placeholder="Your Message" className="border rounded px-4 py-2" rows={4} required></textarea>
              <button type="submit" className="bg-orange-500 text-white py-2 px-6 rounded font-semibold hover:bg-orange-600 transition">Send</button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-orange-500 text-white py-6 mt-auto text-center text-sm">
        &copy; {new Date().getFullYear()} Personal Finance India. All rights reserved. | Made with ❤️ for young Indians
      </footer>
    </div>
  );
}
