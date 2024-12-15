import React from 'react'
import Image from 'next/image'
import CircularButton from '../buttons/circularButton'
import wiiButton from '@/public/buttons/wiiButton.svg'
import letterButton from '@/public/buttons/letterButton.svg'

export default function BottomBar() {
    return (
        <div className="fixed bottom-0 h-[309px] w-full">
            <Image
                src="/navbar/navBar.svg"
                alt="Navigation bar"
                fill
                objectFit="cover"
                priority
            />
            <div className="absolute inset-0 flex justify-between items-center px-8">
                <CircularButton href="https://www.google.com" image={wiiButton} />
                <CircularButton href="https://www.youtube.com" image={letterButton} />
            </div>
        </div>
    )
}
