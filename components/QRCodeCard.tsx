// components/QRCodeComponent.tsx
'use client';

import Image from 'next/image';

export default function QRCodeCard() {
    return (
        <div className="max-w-xs mx-auto bg-white p-4 rounded-2xl text-center shadow-lg transition transform hover:scale-105 hover:shadow-2xl duration-300">
            {/* flex flex-col items-center gap-6 text-center dark:bg-[#1c1c1c] dark:text-white */}
            <Image
                src="/images/image-qr-code.png"
                alt='QR Code'
                width={288}
                height={288}
                className='rounded-xl mb-4 w-full shadow-lg transition-transform duration-300 hover:scale-105'
            />

            <div className="px-2">
                <h1 className="text-lg font-bold text-slate-800 mb-2">
                    Improve your front-end skills by building projects
                </h1>
                <p className="text-sm text-slate-500 mb-4">
                    Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.
                </p>
            </div>

            <div className="text-xs text-center text-slate-400 mt-2">
                Challenge by {' '}
                <a
                    className=""
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Frontend Mentor 
                </a>. Code by{' '}
                <a
                    className=""
                    href="https://github.com/AmazedWonder"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Perpetual Okorie
                </a>.
            </div>
        </div>
    );
}