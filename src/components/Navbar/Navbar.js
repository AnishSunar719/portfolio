import { React, useState } from 'react'
import { Link } from 'react-scroll';
import { Logo } from "../../assets/index";
import { navLinksData } from "../../constants/index";
import { BiMenu, BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);


    return (
        <div className='w-full h-auto flex px-4 py-4 border-b-2 border-b-amber-500 items-center justify-between sticky top-0 z-10 bg-colorFooter'>
            <div>
                <img className='w-[5rem] h-[6rem]' src={Logo} alt="logo" />
            </div>
            <div className='flex gap-6'>
                <ul className=' hidden md:flex items-center gap-10'>
                    {navLinksData.map(({ _id, title, link }) => (
                        <li className='text-base font-normal text-lightText tracking-wide cursor-pointer hover:text-designColor duration-100'
                            key={_id}>
                            <Link
                                activeClass='active'
                                to={link}
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-140}
                            >{title}</Link>
                        </li>
                    ))}
                </ul>
                <span onClick={() => setToggleMenu(!toggleMenu)} className='md:hidden text-3xl rounded-lg hover:text-designColor  cursor-pointer'>
                {toggleMenu
                    ? <BiMenuAltRight className='text-4xl' />
                    : <BiMenu className='text-4xl' />
                }
                </span>
                {toggleMenu && (
                    <ul className='flex absolute bg-colorFooter bg-opacity-[90%] top-24 right-9 flex-col items-center text-left border-[1px] '>
                        {navLinksData.map(({ _id, title, link }) => (
                            <li className=' w-full p-2 text-center text-base border-b-[1px] font-normal text-lightText tracking-wide cursor-pointer hover:text-designColor duration-100'
                                key={_id}>
                                <Link
                                    activeClass='active'
                                    to={link}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-140}
                                >{title}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Navbar
