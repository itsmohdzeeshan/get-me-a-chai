import React from 'react'

const Footer = () => {

    const currentYear = new Date().getFullYear()

    return (
        <footer className='border-t border-white/10 bg-black/40 backdrop-blur-lg text-gray-400'>

            <div className='max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm'>

                <p>
                    © {currentYear} <span className='text-white font-medium'>GetMeAChai</span>. All rights reserved - Built with ❤️
                </p>

                <div className='flex gap-6'>
                    <span className='hover:text-white cursor-pointer transition'>Privacy</span>
                    <span className='hover:text-white cursor-pointer transition'>Terms</span>
                    <span className='hover:text-white cursor-pointer transition'>Contact</span>
                </div>

            </div>

        </footer>
    )
}

export default Footer