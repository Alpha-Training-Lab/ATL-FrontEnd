import Header from "../components/header";
import Footer from "../components/footer";
import CTA from '../components/cta';


const PrivacyPolicy = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-start px-[15px] py-[100px] md:px-[30px] md:pt-[100px] lg:px-[60px]">
        <div className="flex flex-col gap-[20px]">
          <h3 className="text-[20px] md:text-[32px] lg:text-[40px] leading-none text-center mb-6 md:px-[180px] md:leading-tight lg:px-[350px]">Alpha Training Lab <span className="text-primary">Privacy Policy</span></h3>
          <div className="md:px-[100px] lg:px-[200px]">
            <p className="text-gray-700">
              This Privacy Policy explains how <span className="font-bold">Alpha Training Lab(ATL)</span> collects, uses, and protects your personal data.
            </p>
            <div className="flex flex-col gap-[10px]">
              <h2 className="text-xl font-semibold mt-6">1. Information We Collect</h2>
              <div className="text-gray-700 pl-[20px]">
                <p>1.1 Personal Information: When you register, we collect details such as your name, email, phone number, and Telegram username.</p>
                <p>1.2 Verification Data: KYC (Know Your Customer) verification requires government-issued ID and proof of residence.</p>
                <p>1.3 Usage Data: We track how you interact with ATL resources for security and improvement purposes.</p>
              </div>
            </div>

            <div className="flex flex-col gap-[10px]">
              <h2 className="text-xl font-semibold mt-6">2. Purpose of Data Collection</h2>
              <div className="text-gray-700 pl-[20px]">
                <p>2.1 To verify and authenticate ATL members.</p>
                <p>2.2 To improve community welfare and enhance security.</p>
                <p>2.3 To provide personalized mentorship and support.</p>
              </div>
            </div>

            <div className="flex flex-col gap-[10px]">
              <h2 className="text-xl font-semibold mt-6">3. Data Protection & Sharing</h2>
              <div className="text-gray-700 pl-[20px]">
                <p>3.1 Your personal data is **not** shared with third parties.</p>
                <p>3.2 We implement security measures to protect your information from unauthorized access.</p>
                <p>3.3 Only authorized ATL administrators can access member data for verification and community management.</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-[10px]">
              <h2 className="text-xl font-semibold mt-6">4. Data Deletion & Member Rights</h2>
              <div className="text-gray-700 pl-[20px]">
                <p>4.1 You can request the deletion of your data. However, this means your membership in ATL will also be revoked.</p>
                <p>4.2 You have the right to access, update, or correct your information at any time.</p>
              </div>
            </div>

            <div className="flex flex-col gap-[10px]">
              <h2 className="text-xl font-semibold mt-6">5. Compliance & Updates</h2>
              <div className="text-gray-700 pl-[20px]">
                <p>5.1 ATL operates as a **global virtual community** and aligns with data protection regulations applicable to online communities.</p>
                <p>5.2 We reserve the right to update this Privacy Policy. Members will be notified of significant changes.</p>
              </div>
            </div>
          </div>
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
