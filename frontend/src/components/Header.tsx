import {Navbar, Typography} from "@material-tailwind/react";

const Header = () => {
    return (
        <div className='min-h-[70px] border-b-2 border-amber-200 bg-white'>
            <div className="container mx-auto px-2">
                <Navbar className='h-[70px]'>
                    <ul className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 h-full">
                        <Typography
                            as="li"
                            variant='small'
                            color="blue-gray"
                            className="p-1 font-bold"
                        >
                            <a href="#" className="flex items-center  text-gray-700">
                                Titluri
                            </a>
                        </Typography>
                    </ul>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;
