// components/QRCodeComponent.tsx
'use client';

import Image from 'next/image';

export default function QRCodeCard() {
    return (
        <div className="">
            <Image
                src="/images/image-qr-code.png"
                alt='QR Code'
                width={288}
                height={288}
                className=''
            />

            <div className="">
                <h1 className="">
                    Improve your front-end skills by building projects
                </h1>
                <p className="">
                    Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.
                </p>
            </div>

            <div className="">
                Challenge by{' '}
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