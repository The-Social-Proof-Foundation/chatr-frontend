"use client"

import { useState } from "react"
import Script from "next/script"
import { Footer } from "@/components/footer"
import { EmailSignup } from "@/components/email-signup"
import { ThemeFeather } from "@/components/theme-feather"

export default function Home() {

  return (
    <main className="min-h-screen relative font-plus-jakarta-sans">
      <div className="w-full h-screen relative -translate-y-[50px]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="flex flex-col items-center justify-center text-center px-4 h-full">
            {/* Hero Text */}
            <div className="mb-8 md:mb-12 lg:mb-6">
                {/* Feather Icon */}
                <div className="flex justify-center translate-y-[50px]">
                  <ThemeFeather 
                    size={240}
                    className="pointer-events-auto"
                    alt="Chatr Feather Icon"
                  />
                </div>
                
                <h1 className="font-playfair-display font-semibold text-8xl xl:text-9xl mb-4 md:mb-6 lg:mb-4 pointer-events-auto">
                  Chatr
                </h1>

                <p className="font-plus-jakarta-sans pt-[10px] md:pt-0 text-sm md:text-base text-[var(--primary)] font-medium mb-6 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto select-text pointer-events-auto">
                  We&apos;re building a free speech platform, all on-chain.
                </p>
            </div>

            {/* Email Signup */}
            <div className="pointer-events-auto">
              <EmailSignup />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}