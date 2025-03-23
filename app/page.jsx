'use client';
import { assets } from "@/assets/assets";
import Message from "@/components/Message";
import PromptBox from "../components/PromptBox"; // Adjust based on location
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [expand, setExpand] = useState(false);
  const [messages, setMessages] = useState([]); // Stores chat history
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex h-screen">
      <Sidebar expand={expand} setExpand={setExpand} />
      
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pb-8 bg-[#292a2d] text-white relative">
        
        {/* Mobile Sidebar Toggle */}
        <div className="md:hidden absolute px-4 top-6 flex items-center justify-between w-full">
          <Image
            onClick={() => setExpand((prev) => !prev)}
            className={`cursor-pointer ${expand ? "rotate-0" : "rotate-180"}`}
            src={assets.menu_icon}
            alt=""
          />
          <Image className="opacity-70" src={assets.chat_icon} alt="" />
        </div>

        {/* Chat Messages */}
        {messages.length === 0 ? (
          // ✅ Display Welcome Message if No Chat Exists
          <div className="text-center">
            <div className="flex items-center gap-3">
              <Image src={assets.logo_icon} alt="" className="h-16" />
              <p className="text-2xl font-medium">Hi, I'm DeepSeek</p>
            </div>
            <p className="text-sm mt-2">How can I help you today?</p>
          </div>
        ) : (
          // ✅ Display Chat History
          <div>
            <Message role='user' content='what is next js'/>
          </div>
        )}

        {/* ✅ Chat Input Box */}
        <PromptBox
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setMessages={setMessages} // Ensure messages update
        />

        <p className="text-xs absolute bottom-1 text-gray-500">
          AI-generated, for reference only
        </p>
      </div>
    </div>
  );
}
