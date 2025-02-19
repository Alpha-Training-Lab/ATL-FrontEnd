import logo from '/Theme=dark.png';
import { PrimaryButton, LinkButton } from '../components/buttons';


const LoginPage = () => {
    return (
        <main className='w-full flex flex-col justify-start items-center min-h-screen p-[20px] gap-[30px] md:p-[30px] lg:p-[60px]  '>
            <img src={logo} alt='atl logo' className='w-[100px] h-[80px] object-contain md:w-[120px] md:mt-[5%] lg:mt-[0%]' onClick={() => window.location.href = '/'}/> 
            <div className='w-[100%] flex flex-col gap-[20px] rounded-[20px] md:w-[80%] lg:w-[45%]'>
                <form className='w-full flex flex-col gap-[40px] p-[20px] border border-greyColor rounded-[20px]'>
                    <div className='flex flex-col gap-[10px]'>
                        <div className='flex flex-col gap-[20px]'>
                            <div className='flex flex-col gap-[5px]'>
                                <label htmlFor='email' className='text-[14px] text-bold pl-[15px]'>Email address</label>
                                <input type="text" id="email" name="email" placeholder="Enter your email address" className="p-[10px] pl-[15px] border border-greyColor bg-inherit rounded-[100px]"/>
                            </div>
                            <div className='flex flex-col gap-[5px]'>
                                <label htmlFor='password' className='text-[14px] text-bold pl-[15px]'>Password</label>
                                <input type='password' id='password' name='password' className='p-[10px] px-[20px] border border-greyColor bg-inherit rounded-[100px]' />
                            </div>
                        </div>
                        <LinkButton className='w-full text-right pr-[10px] lg:text-[14px]'>
                            Reset password
                        </LinkButton>
                    </div>
                    <div className='w-[100%] flex flex-col justify-center items-center gap-[15px]'>
                        <PrimaryButton className='w-full'>Log in</PrimaryButton>
                        <div className='flex gap-[5px] items-center lg:text-[14px]'>
                            Not a member?
                            <LinkButton to='/ICredirection/SubmitKYC'>
                                Click here
                            </LinkButton>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default LoginPage;