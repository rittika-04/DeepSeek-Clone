import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';

const PromptBox = ({ setInLoading, isLoading }) => {
  const [prompt, setPrompt] = useState('');

  return (
    <form className='w-full max-w-3xl bg-[#2E2F38] p-4 rounded-2xl mt-4 transition-all'>
      {/* Input Container */}
      <div className='flex items-center bg-[#3A3B45] px-4 py-3 rounded-xl'>
        <textarea
          className='w-full bg-transparent text-white placeholder-gray-400 outline-none resize-none overflow-hidden'
          rows={1}
          placeholder='Message DeepSeek'
          required
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
        />
        {/* Fix: Only render Image if the src exists */}
        {assets?.attachment_icon && (
          <Image className='w-5 cursor-pointer' src={assets.attachment_icon} alt='Attach' />
        )}
      </div>

      {/* Buttons */}
      <div className='flex items-center justify-between text-sm mt-3'>
        <div className='flex items-center gap-2'>
          {assets?.deepthink_icon && (
            <p className='flex items-center gap-2 text-xs border border-gray-500 px-3 py-1.5 rounded-full cursor-pointer hover:bg-gray-600 transition'>
              <Image src={assets.deepthink_icon} alt='' className='w-4' />
              DeepThink (R1)
            </p>
          )}
          {assets?.search_icon && (
            <p className='flex items-center gap-2 text-xs border border-gray-500 px-3 py-1.5 rounded-full cursor-pointer hover:bg-gray-600 transition'>
              <Image src={assets.search_icon} alt='' className='w-4' />
              Search
            </p>
          )}
        </div>

        {/* Send Button */}
        <div className='flex items-center gap-2'>
          {assets?.pin_icon && <Image className='w-4 cursor-pointer' src={assets.pin_icon} alt='Pin' />}
          <button
            className={`rounded-full p-2 ${
              prompt ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-600 cursor-not-allowed'
            }`}
          >
            {assets?.arrow_icon && assets?.arrow_icon_dull && (
              <Image className='w-4' src={prompt ? assets.arrow_icon : assets.arrow_icon_dull} alt='Send' />
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default PromptBox;
