import logo from '/Theme=dark.png';
import { PrimaryButton } from '../components/Buttons'
import { Link } from 'react-router-dom';


const LoginPage = () => {
    return (
        <main className='flex flex-col justify-center items-center min-h-screen p-[50px] gap-[30px]'>
            <img src={logo} alt='atl logo' className='w-[100px] h-[80px] md:w-[120px] md:h-[100px] object-contain'  onClick={() => window.location.href = '/'}/> 
            <div className='flex flex-col gap-[20px] w-[550px] rounded-[20px]'>
                <form className='w-full flex flex-col gap-[40px] p-[20px] border border-greyColor rounded-[20px]'>
                    <div className='flex flex-col gap-[5px]'>
                        <div className='flex flex-col gap-[20px]'>
                            <div className='flex flex-col gap-[5px]'>
                                <label htmlFor='email' className='text-[14px] text-bold pl-[15px]'>Email address</label>
                                <input type="text" id="email" name="email" placeholder="Enter your email address" className="p-[10px] pl-[15px] border border-greyColor bg-inherit rounded-[100px]"/>
                                {/* <input type='text' for/> */}
                            </div>
                            <div className='flex flex-col gap-[5px]'>
                                <label htmlFor='password' className='text-[14px] text-bold pl-[15px]'>Password</label>
                                <input type='password' id='password' name='password' className='p-[10px] px-[20px] border border-greyColor bg-inherit rounded-[100px]' />
                            </div>
                        </div>
                        <Link className='text-primary hover:underline w-full text-[14px] text-right pr-[10px]'>
                            Reset password
                        </Link>
                    </div>
                    <div className='w-[100%] flex flex-col justify-center items-center gap-[10px]'>
                        <PrimaryButton className='w-full'>Log in</PrimaryButton>
                        <div className='flex gap-[5px] items-center'>
                            Not a member?
                            <Link onClick={() => window.location.href = '/ICredirection/SubmitKYC'} className='text-[14px] text-primary hover:text-greyColor hover:underline'>Click here</Link> 
                        </div>
                    </div>
                </form>
                {/* <div className='flex flex-col items-center gap-[10px] p-[20px] border border-greyColor rounded-[10px]'>
                    <p>Or</p>
                    <div className='flex flex-col w-full gap-[5px]'>
                        <div className='flex p-[5px] w-[100%] bg-greyColor rounded-[100px] justify-center'>
                            <img className='#'></img>
                            login with google
                        </div>
                        <div className='flex p-[5px] w-[100%] bg-greyColor rounded-[100px] justify-center'>
                            <img className='#'></img>
                            login with facebook
                        </div>
                        <div className='flex p-[5px] w-[100%] bg-greyColor rounded-[100px] justify-center'>
                            <img className='#'></img>
                            login with ssh
                        </div>
                    </div>
                </div> */}
            </div>
        </main>
    );
};

export default LoginPage;