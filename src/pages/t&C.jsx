import Header from "../components/header";
import Footer from "../components/footer";
import CTA from '../components/cta';

const TermsAndConditions = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-start px-[15px] py-[100px] md:px-[30px] md:pt-[100px] lg:px-[60px]">
        <div className="flex flex-col gap-[20px]">
          <h3 className="text-[20px] md:text-[32px] lg:text-[40px] leading-none text-center mb-6 md:px-[180px] md:leading-tight lg:px-[350px]">Alpha Training Lab <span className="text-primary">Terms & Conditions</span></h3>
          <div className="md:px-[100px] lg:px-[200px]">
            <p className="text-gray-700">
              Welcome to <span className="font-bold">Alpha Training Lab(ATL)</span>. By accessing and using our platform, you agree to comply with the following terms and conditions. Please read them carefully.
            </p>
            <div className="flex flex-col gap-[10px]">
                <h2 className="text-xl font-semibold mt-6">1. Membership and Community Rules</h2>
                <div className="text-gray-700 pl-[20px]">
                  <p>1.1 ATL is a life empowerment community focused on financial independence and education.</p>
                  <p>1.2 Respect for all members is mandatory. Any form of disrespect, harassment, or impersonation will lead to removal.</p>
                  <p>1.3 Members must use their real photos as profile pictures.</p>
                  <p>1.4 You are responsible for verifying individuals before engaging in any financial transactions. ATL will not be liable for any misappropriation of funds.</p>
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <h2 className="text-xl font-semibold mt-6">2. Financial Guidance Disclaimer</h2>
                <div className="text-gray-700 pl-[20px]">
                  <p>2.1 ATL provides financial education, mentorship, and investment guidance but is <span className="font-bold">not</span> responsible for any financial losses or investment decisions made by members.</p>
                  <p>2.2 We do not take money from members to invest on their behalf.</p>
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <h2 className="text-xl font-semibold mt-6">3. Intellectual Property</h2>
                <div className="text-gray-700 pl-[20px]">
                  <p>3.1 All content shared within ATL, including resources, training materials, and discussions, belongs to ATL.</p>
                  <p>3.2 Members are not allowed to republish or redistribute ATL content without permission.</p>
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <h2 className="text-xl font-semibold mt-6">4. Membership Termination</h2>
                <div className="text-gray-700 pl-[20px]">
                  <p>4.1 Any member found violating ATL rules or engaging in fraudulent activities may be removed from the community.</p>
                  <p>4.2 Members reported for misconduct or unethical behavior can also be removed after review.</p>
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <h2 className="text-xl font-semibold mt-6">5. Changes to Terms</h2>
                <div className="text-gray-700 pl-[20px]">
                  <p>5.1 ATL reserves the right to update these terms at any time. Members will be notified of significant changes.</p>
                </div>
            </div>
          </div>
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
