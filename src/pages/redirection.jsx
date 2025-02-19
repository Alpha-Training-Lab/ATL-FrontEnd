import logo from '/Theme=dark.png';
import warningIcon from '../assets/svgs/SealWarning.svg';
import { PrimaryButton, SecondaryButton, LinkButton } from '../components/buttons';
// import { Link } from 'react-router-dom';


const RedirectionPage = () => {
    return (
        <div>
            <main className='w-full flex flex-col justify-center items-center py-[50px] gap-[10px]'>
                <LinkButton to= '/'>
                    <img src={logo} alt='ATL logo' className='w-[100px] h-[80px] md:w-[120px] md:h-[100px] object-contain'></img>
                </LinkButton>
                <div className='flex flex-col gap-[50px] items-center border  rounded-[20px] m-[20px] p-[20px] py-[50px] md:mx-[10%] lg:mx-[20%] lg:px-[50px] '>
                    <div className='flex flex-col gap-[5px] '>
                        <h3 className='text-[32px] text-center leading-tight md:text-[40px]'>You are One Step Closer</h3>
                        <p className='text-[15px] leading-tight text-center'>To become a member of ALPHA TRAINING LAB <span className='hidden'>and gain unrestricted access to all community benefits and resources</span>, You are required to join the ATL INDUCTION CENTER. A group on telegram designed to prepare you for the journey to creating a better life for yourself.</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-semibold text-[18px] md:text-[24px]'>After joining the group, you are required to;</p>
                        <ul className='list-disc pl-5 italic text-[13px] md:text-[15px]'>
                            <li>Read and understand the content of the group from the top to the bottom (You can request for link to the top)</li>
                            <li>Drop a summary of your understanding of the group content on the group after reading.</li>
                            <li>You will be contacted by the group admins and receive your BAM Code.</li>
                            <li>Revisit the ATL website to submit you kyc using the bamcode you were given.</li>
                        </ul>
                    </div>
                    <div className='flex flex-row gap-[10px] text-[13px] px-[10px] py-[10px] bg-DangerBg text-RedColor rounded-[0px]'>
                        <img src={warningIcon} alt='icon' className='w-[25px] h-[25px]'></img>
                        <p className='md:text-[15px]'>Kindly note that; Admins bear the right to decline your summary if it is unacceptable and you will be givien a BAM code. No BAM Code, No KYC. NO KYC, No Approval</p>
                    </div>
                    <div className='flex flex-col gap-[10px] items-center md:gap-[20px]'> 
                        <div className='flex flex-col gap-[10px] md:flex-row'>
                            <PrimaryButton onClick={() => window.open("https://t.me/+e6Cswk2fgUIzNjk0", "_blank")}  rel='noopener noreferrer'>
                                Join the session
                            </PrimaryButton>
                            <SecondaryButton onClick={() => window.location.href = '/ICredirection/SubmitKYC'}>
                                Submit your KYC
                            </SecondaryButton>
                        </div>
                        <p className='text-[14px]'>Already a member? <LinkButton to='/login'>Log in</LinkButton></p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default RedirectionPage;