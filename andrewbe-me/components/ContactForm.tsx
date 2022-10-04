export default function ContactForm() {
  return (
    <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="subject" value="andrewbeme web enquiry"  />
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
      <p className="flex flex-col">
        <label htmlFor="yourname" className="font-semibold" >
          name:
        </label>
        <input type="text" name="name" id="yourname" className="bg-brand-grey rounded-main my-4 h-10 pl-4 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary" />
      </p>
      <p className="flex flex-col">
        <label htmlFor="youremail" className="font-semibold">
          email
        </label>
        <input type="email" name="email" id="youremail" className="bg-brand-grey rounded-main my-4 h-10 pl-4 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary" />
      </p>
      <p className="flex flex-col">
        <label htmlFor="yourmessage" className="font-semibold">
          how can I help?
        </label>
        <textarea name="message" id="yourmessage" className="h-32 my-10 bg-brand-grey my-4 rounded-main pl-4 pt-1 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary"></textarea>
      </p>
      <p className="flex justify-end mt-14">
        <button type="submit" className="py-6 px-5 bg-primary text-white text-xl rounded-main h-20 w-44 hover:bg-secondary">Send</button>
      </p>
    </form>
  )
}