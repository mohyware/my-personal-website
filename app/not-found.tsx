import Link from 'next/link';
export default function notFound() {
    return (
        <div className='flex items-center justify-center w-full min-h-[70vh] my-12 px-4'>
            <div className='flex flex-col items-center w-full gap-8'>
                <h1 className='text-9xl md:text-16xl w-full select-none text-center font-black '>
                    404
                </h1>
                <p className='text-3xl font-semibold text-center'>Oops! Page not found</p>
                <div className='flex flex-row justify-between gap-8'>
                    <Link href="/" as={"/"}
                        className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 px-3 py-1 mt-2 rounded-full text-gray-800"
                        id="headlessui-menu-button-:r4:" aria-haspopup="true" aria-expanded="false" data-headlessui-state="" type="button">
                        <span >Return To Home</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}