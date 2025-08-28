import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy - The Essex Way Clinic',
  description: 'Privacy policy for The Essex Way Clinic - How we collect, use, and protect your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-12 bg-off-white">
        <div className="section-container">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-primary-black hover:text-elegant-gray mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary-black">Privacy Policy</h1>
            
            <div className="prose prose-gray max-w-none space-y-6">
              <p className="text-charcoal">
                <strong>Last Updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>
              </p>

              <section>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-black">1. Introduction</h2>
                <p className="text-charcoal">
                  The Essex Way Clinic ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-black">2. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-charcoal">Personal Information</h3>
                <p className="text-charcoal mb-3">
                  We may collect personal information that you provide to us, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-charcoal">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Date of birth and age (for treatment eligibility)</li>
                  <li>Medical history relevant to treatments</li>
                  <li>Treatment preferences and consultation notes</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Before and after photographs (with your explicit consent)</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-charcoal">Automatically Collected Information</h3>
                <p className="text-charcoal mb-3">
                  When you visit our website, we automatically collect certain information about your device:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-charcoal">
                  <li>IP address and browser type</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website addresses</li>
                  <li>Operating system and device information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-black">3. How We Use Your Information</h2>
                <p className="text-charcoal mb-3">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-charcoal">
                  <li>Provide and manage our CryoPen treatment services</li>
                  <li>Schedule and confirm appointments</li>
                  <li>Communicate with you about your treatments and aftercare</li>
                  <li>Process payments and maintain records</li>
                  <li>Send appointment reminders and follow-up communications</li>
                  <li>Improve our services and website functionality</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Market our services (with your consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-black">4. Medical Information</h2>
                <p className="text-charcoal">
                  We treat all medical information with the highest level of confidentiality. 
                  Medical records and treatment information are stored securely and accessed only 
                  by authorized personnel involved in your care. We comply with all applicable 
                  healthcare privacy regulations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-black">5. Information Sharing</h2>
                <p className="text-charcoal mb-3">
                  We do not sell, trade, or rent your personal information. We may share your information only:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-charcoal">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations or court orders</li>
                  <li>With trusted service providers who assist in operating our business (under strict confidentiality agreements)</li>
                  <li>To protect the rights, property, or safety of The Essex Way Clinic, our patients, or others</li>
                  <li>In connection with a business transfer or merger (your data protection rights will be maintained)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-black">6. Data Security</h2>
                <p className="text-charcoal">
                  We implement appropriate technical and organizational security measures to protect 
                  your personal information against accidental or unlawful destruction, loss, alteration, 
                  unauthorized disclosure, or access. However, no method of transmission over the Internet 
                  or electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-black">7. Your Rights</h2>
                <p className="text-charcoal mb-3">
                  Under UK data protection laws, you have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-charcoal">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information (subject to legal requirements)</li>
                  <li>Object to processing of your personal information</li>
                  <li>Request restriction of processing your personal information</li>
                  <li>Request transfer of your personal information</li>
                  <li>Withdraw consent at any time (where processing is based on consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-black">8. Cookies</h2>
                <p className="text-charcoal">
                  We use cookies and similar tracking technologies to track activity on our website 
                  and hold certain information. Cookies are files with small amounts of data which 
                  may include an anonymous unique identifier. You can instruct your browser to refuse 
                  all cookies or to indicate when a cookie is being sent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-black">9. Third-Party Services</h2>
                <p className="text-charcoal">
                  Our website may contain links to third-party websites. We are not responsible for 
                  the privacy practices of these external sites. We encourage you to review the privacy 
                  policies of any third-party sites you visit.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-black">10. Children's Privacy</h2>
                <p className="text-charcoal">
                  While we provide treatments for children aged 6 and above, we do not knowingly collect 
                  personal information from children under 16 without parental consent. All consultations 
                  and treatments for minors require parental or guardian consent and presence.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-black">11. Data Retention</h2>
                <p className="text-charcoal">
                  We retain your personal information only for as long as necessary to provide our services 
                  and comply with legal obligations. Medical records are retained in accordance with NHS 
                  guidelines and professional standards.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-black">12. Changes to This Privacy Policy</h2>
                <p className="text-charcoal">
                  We may update our Privacy Policy from time to time. We will notify you of any changes 
                  by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-black">13. Contact Us</h2>
                <p className="text-charcoal mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-off-white rounded-lg p-6">
                  <p className="font-semibold text-primary-black mb-2">The Essex Way Clinic</p>
                  <p className="text-charcoal">Email: info@essexwayclinic.com</p>
                  <p className="text-charcoal">Phone: 07414 452 441</p>
                  <p className="text-charcoal">Address: Essex, United Kingdom</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-black">14. Supervisory Authority</h2>
                <p className="text-charcoal">
                  If you are not satisfied with our response to your concerns, you have the right to 
                  lodge a complaint with the Information Commissioner's Office (ICO):
                </p>
                <div className="bg-off-white rounded-lg p-6 mt-4">
                  <p className="text-charcoal">Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary-black hover:underline">ico.org.uk</a></p>
                  <p className="text-charcoal">Phone: 0303 123 1113</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}