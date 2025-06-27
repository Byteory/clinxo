"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { OtpInput } from "@/components/auth/otp-input"

export function RegisterForm() {
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  })
  const [otp, setOtp] = useState("")
  const [showOtp, setShowOtp] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [otpSent, setOtpSent] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSendOtp = async () => {
    if (!formData.mobile) return

    setIsLoading(true)
    // Simulate OTP sending
    setTimeout(() => {
      setOtpSent(true)
      setShowOtp(true)
      setIsLoading(false)
      console.log("OTP sent to:", formData.mobile)
    }, 1000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!otpSent) {
      alert("Please verify your mobile number first")
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      console.log("Registration attempt:", { ...formData, otp })
      setIsLoading(false)
    }, 1000)
  }

  return (
    <Card className="mx-auto max-w-sm w-full">
      <CardHeader className="space-y-1 pb-4">
        <CardTitle className="text-xl sm:text-2xl">Create Account</CardTitle>
        <CardDescription className="text-sm">Enter your information to create an account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-sm">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
              className="h-10"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="mobile" className="text-sm">
              Mobile Number
            </Label>
            <div className="flex gap-2">
              <Input
                id="mobile"
                type="tel"
                placeholder="+1234567890"
                value={formData.mobile}
                onChange={(e) => handleInputChange("mobile", e.target.value)}
                required
                className="flex-1 h-10"
              />
              <Button
                type="button"
                variant="outline"
                onClick={handleSendOtp}
                disabled={!formData.mobile || otpSent || isLoading}
                className="whitespace-nowrap h-10 px-3 text-xs sm:text-sm bg-transparent"
              >
                {otpSent ? "Sent" : "Send OTP"}
              </Button>
            </div>
          </div>

          {showOtp && (
            <div className="grid gap-2">
              <Label htmlFor="otp" className="text-sm">
                Enter OTP
              </Label>
              <OtpInput value={otp} onChange={setOtp} length={6} />
            </div>
          )}

          <div className="grid gap-2">
            <Label htmlFor="password" className="text-sm">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              required
              className="h-10"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="confirmPassword" className="text-sm">
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
              required
              className="h-10"
            />
          </div>

          <Button type="submit" className="w-full h-10" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Create account"}
          </Button>
        </form>

        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
