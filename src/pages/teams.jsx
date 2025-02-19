import React, { Component } from 'react';
import Header from '../components/header';
import CTA from '../components/cta';
import Footer from '../components/footer';
import { useAuth } from '../context/AuthContext';
import { PrimaryButton } from '../components/buttons';

// importing images
import Prof from '../assets/images/Keyplayerspg/PROF.jpg';
import Mama from '../assets/images/Keyplayerspg/Mrs Awe.jpg';
// import Shemmy from '../assets/images/Keyplayerspg/Shemmy.jpg';
import Olive from '../assets/images/Keyplayerspg/obt.jpg';
import newOBT from '../assets/images/Keyplayerspg/iti.jpg';
import davidWizz from '../assets/images/Keyplayerspg/Doke.jpg';
import Egbo from '../assets/images/Keyplayerspg/egbo.jpg';
import Gbemi from '../assets/images/Keyplayerspg/gbemi.jpg';
import ATL from '../assets/images/Keyplayerspg/atl.jpg';
import Edith from '../assets/images/Keyplayerspg/Edith.jpg';
import Beauty from '../assets/images/Keyplayerspg/Amanda.jpg';
import imposter from '../assets/images/Keyplayerspg/Sam.jpg';



// Imports ends here
// ----------=============================-------------
const KeyplayersPage = () => {
    const { isLoggedIn } = useAuth();

    // leaders cards Component
    const leaders = [
        {
            image: <img src={Prof} alt="#" className="rounded-[20px] w-[100%] h-[100%] object-cover" />,
            name: "Awe Olaleye",
            role: "Co-Founder",
        },
        {
            image: <img src={Mama} alt="#" className="rounded-[20px] w-[100%] h-[100%] object-cover" />,
            name: "Awe Olumayowa",
            role: "Co-Founder/Director of Affairs",
        },
        {
            image: <img src={ATL} alt="#" className="rounded-[20px] border w-[100%] h-[100%] object-cover" />,
            name: "Ajayi Adeshina",
            role: "Director of Content Creation",
        },
        {
            image: <img src={ATL} alt="#" className="rounded-[20px] border w-[100%] h-[100%] object-cover" />,
            name: "Adeyemo Oluwakemi",
            role: "Co-Director of Lecture Planning",
        },
        {
            image: <img src={ATL} alt="#" className="rounded-[20px] border w-[100%] h-[100%] object-cover" />,
            name: "Ajayi Olubunmi",
            role: "Co-Director of Lecture Planning",
        },
        {
            image: <img src={ATL} alt="#" className="rounded-[20px] w-[100%] h-[100%] object-cover" />,
            name: "Isreal Monyei",
            role: "Co-Director of Onboarding",
        },
        {
            image: <img src={Olive} alt="#" className="rounded-[20px] w-[100%] h-[100%] object-cover" />,
            name: "Patience Agidife",
            role: "Co-Director of Onboarding",
        },
        {
            image: <img src={ATL} alt="#" className="rounded-[20px] border w-[100%] h-[100%] object-cover" />,
            name: "Adeyemi Adekunle",
            role: "Co-Director of Social media",
        },
        {
            image: <img src={Edith} alt="#" className="rounded-[20px] w-[100%] h-[100%] object-cover" />,
            name: "Nwachukwu Edith",
            role: "Co-Director of Social media",
        },
        {
            image: <img src={ATL} alt="#" className="rounded-[20px] border w-[100%] h-[100%] object-cover" />,
            name: "Edema Samuel",
            role: "Co-Director of Online platform",
        },
        {
            image: <img src={Beauty} alt="#" className="rounded-[20px] w-[100%] h-[100%] object-cover " />,
            name: "Amanda Anaga",
            role: "Co-Director of Online platform",
        },
        {
            image: <img src={imposter} alt="#" className="rounded-[20px] w-[100%] h-[100%] object-cover" />,
            name: "Sonowo Samuel",
            role: "Co-Director of Web/App",
        },
        {
            image: <img src={Gbemi} alt="#" className="rounded-[20px] w-[100%] h-[100%] object-cover" />,
            name: "Gbemisola Ajibade",
            role: "Co-Director of Web/App",
        },
        {
            image: <img src={ATL} alt="#" className="rounded-[20px] border w-[100%] h-[100%] object-cover" />,
            name: "Raymond Asogwa",
            role: "Co-Director of Media & Publicity",
        },
        {
            image: <img src={ATL} alt="#" className="rounded-[20px] border w-[100%] h-[100%] object-cover" />,
            name: "Chuku Maobim",
            role: "Co-Director of Media & Publicity",
        },
        {
            image: <img src={ATL} alt="#" className="rounded-[20px] border w-[100%] h-[100%] object-cover" />,
            name: "Adesanya David",
            role: "Co-Director of Mentorship",
        },
        {
            image: <img src={ATL} alt="#" className="rounded-[20px] border w-[100%] h-[100%] object-cover" />,
            name: "Eloho Eziye",
            role: "Co-Director of Mentorship/Group Administration",
        },
        {
            image: <img src={ATL} alt="#" className="rounded-[20px] border w-[100%] h-[100%] object-cover" />,
            name: "Ayeesha Abubakar",
            role: "Co-Director of Event, Calender and Planning",
        },
        {
            image: <img src={ATL} alt="#" className="rounded-[20px] border w-[100%] h-[100%] object-cover" />,
            name: "Savage Babatunde",
            role: "Co-Director of Event, Calender and Planning",
        },
        {
            image: <img src={ATL} alt="#" className="rounded-[20px] border w-[100%] h-[100%] object-cover" />,
            name: "Kate Emagbarha",
            role: "Co-Director of Diaspora Event, Calender and Planning",
        },
        {
            image: <img src={ATL} alt="#" className="rounded-[20px] border w-[100%] h-[100%] object-cover" />,
            name: "David Okechukwu",
            role: "Co-Director of Diaspora Event, Calender and Planning",
        },
        {
            image: <img src={ATL} alt="#" className="rounded-[20px] border w-[100%] h-[100%] object-cover" />,
            name: "Daniel Egbo-Egbo",
            role: "Co-Director of Diaspora Event, Calender and Planning",
        },
        {
            image: <img src={ATL} alt="#" className="rounded-[20px] border w-[100%] h-[100%] object-cover" />,
            name: "Kazeem Nihmat",
            role: "Co-Director of Walfare",
        },
        {
            image: <img src={ATL} alt="#" className="rounded-[20px] border w-[100%] h-[100%] object-cover" />,
            name: "Awoyeye Doyinsola",
            role: "Co-Director of Walfare",
        },
        {
            image: <img src={ATL} alt="#" className="rounded-[20px] border w-[100%] h-[100%] object-cover" />,
            name: "Abimbola Babasanya",
            role: "Co-Director of Documentation & Records",
        },
        {
            image: <img src={ATL} alt="#" className="rounded-[20px] border w-[100%] h-[100%] object-cover" />,
            name: "Joseph Oyewole",
            role: "Co-Director of Documentation & Records",
        },
        {
            image: <img src={ATL} alt="#" className="rounded-[20px] border w-[100%] h-[100%] object-cover" />,
            name: "Ojetimi Yetunde",
            role: "Co-Director of Marketplace & Commerce",
        },
        {
            image: <img src={ATL} alt="#" className="rounded-[20px] border w-[100%] h-[100%] object-cover" />,
            name: "Bori Precious",
            role: "Co-Director of Marketplace & Commerce",
        },
    ];



    // -----------------------------
    // page design starts here
    return (
      <div className="flex flex-col w-full">
        <Header isLoggedIn={isLoggedIn}/>
        <main>
            {/* Hero section or header  */}
            <section className='flex flex-col px-[15px] py-[100px] items-center gap-[30px] md:px-[30px] md:pt-[150px] lg:px-[60px] '>
                <div className='flex flex-col items-center text-center gap-[10px] '>
                    <div className='flex flex-col items-center'>
                        <p className='text-[12px] bg-grey px-[5px] py-[10px] bg-OtherBgColor rounded-full border w-[150px] md:text-[15px] '>Meet our crew;</p>
                        <h3 className='text-[40px] leading-none md:text-[48px] md:px-[100px] lg:text-[60px] '>The <span className='text-primary'>Faces</span> behind Alpha Training Lab</h3>
                    </div>
                    <p>Discover the talented individuals who drive our mission forward.</p>
                </div>
                <PrimaryButton>
                    Contact us
                </PrimaryButton>
            </section>

            {/* keyplayes section */}
            <section className='w-full flex flex-col items-center px-[20px] py-[100px] gap-[20px] md:px-[30px] md:flex-row md:flex-wrap md:gap-[20px] md:justify-between lg:px-[60px] lg:items-start '>
                {leaders.map((leader, index) => (
                    <div key={index} className='flex flex-col items-center gap-[10px] w-[100%] md:w-[48%] md:mb-[10px] lg:w-[23%] min-h-[450px] justify-start lg:gap-[20px] lg:mb-[50px] '>
                        <div className='w-full h-[300px] rounded-[20px] overflow-hidden '>{leader.image}</div>
                        <div className='flex flex-col items-center px-[10px] gap-[5px] lg:gap-[10px] '>
                          <h5 className='text-[32px] mb-[-5px] text-center lg:leading-none '>{leader.name}</h5>
                          <p className='text-[16px] md:text-[18px] text-center text-greyColor leading-none'>{leader.role}</p>
                        </div>
                    </div>
                ))}
            </section>

            <CTA />
        </main>
        <Footer />
      </div>  
    );
};

export default KeyplayersPage;