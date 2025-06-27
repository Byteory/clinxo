"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { Input } from "@/components/ui/input"

interface OtpInputProps {
  value: string
  onChange: (value: string) => void
  length: number
}

export function OtpInput({ value, onChange, length }: OtpInputProps) {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""))
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (value) {
      setOtp(value.split("").slice(0, length))
    }
  }, [value, length])

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false

    const newOtp = [...otp]
    newOtp[index] = element.value
    setOtp(newOtp)
    onChange(newOtp.join(""))

    // Focus next input
    if (element.value && index < length - 1) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pasteData = e.clipboardData.getData("text")
    const pasteArray = pasteData.split("").slice(0, length)

    if (pasteArray.every((char) => !isNaN(Number(char)))) {
      const newOtp = new Array(length).fill("")
      pasteArray.forEach((char, index) => {
        newOtp[index] = char
      })
      setOtp(newOtp)
      onChange(newOtp.join(""))
    }
  }

  return (
    <div className="flex gap-1 sm:gap-2 justify-center">
      {otp.map((digit, index) => (
        <Input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          className="w-10 h-10 sm:w-12 sm:h-12 text-center text-base sm:text-lg font-semibold"
        />
      ))}
    </div>
  )
}
