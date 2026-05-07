export default function ContactForm() {
  return (
    <section className="py-24 bg-[#0B0B0C] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-glass p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Send us a Message</h2>
            <p className="text-gray-400">Have a specific inquiry? Fill out the form below and we'll get back to you within 24 hours.</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors text-white placeholder:text-gray-600"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors text-white placeholder:text-gray-600"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-gray-400 ml-1">Phone Number (Optional)</label>
              <input 
                type="tel" 
                id="phone" 
                placeholder="+966 50 000 0000"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors text-white placeholder:text-gray-600"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Your Message</label>
              <textarea 
                id="message" 
                rows={5} 
                placeholder="How can we help you?"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors text-white placeholder:text-gray-600 resize-none"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-accent-dark hover:bg-accent-dark text-white font-bold py-5 rounded-2xl transition-all active:scale-[0.98] shadow-lg shadow-accent-dark/20"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-accent-dark/10 blur-[100px] -z-10 rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-dark/10 blur-[120px] -z-10 rounded-full" />
    </section>
  );
}
