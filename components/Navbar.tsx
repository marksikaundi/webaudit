'use client'

import * as React from "react"
import Link from "next/link"
import { Menu, X } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-semibold">
              WebAudit
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-300 hover:text-white">
                Features
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Feature 1</DropdownMenuItem>
                <DropdownMenuItem>Feature 2</DropdownMenuItem>
                <DropdownMenuItem>Feature 3</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-300 hover:text-white">
                Company
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>About</DropdownMenuItem>
                <DropdownMenuItem>Careers</DropdownMenuItem>
                <DropdownMenuItem>Contact</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-300 hover:text-white">
                Resources
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Blog</DropdownMenuItem>
                <DropdownMenuItem>Guides</DropdownMenuItem>
                <DropdownMenuItem>Help Center</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-300 hover:text-white">
                Docs
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Getting Started</DropdownMenuItem>
                <DropdownMenuItem>API Reference</DropdownMenuItem>
                <DropdownMenuItem>Examples</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/pricing" className="text-gray-300 hover:text-white">
              Pricing
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              Sign in
            </Button>
            <Button variant="secondary">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/features"
                className="block px-3 py-2 text-gray-300 hover:text-white"
              >
                Features
              </Link>
              <Link
                href="/company"
                className="block px-3 py-2 text-gray-300 hover:text-white"
              >
                Company
              </Link>
              <Link
                href="/resources"
                className="block px-3 py-2 text-gray-300 hover:text-white"
              >
                Resources
              </Link>
              <Link
                href="/docs"
                className="block px-3 py-2 text-gray-300 hover:text-white"
              >
                Docs
              </Link>
              <Link
                href="/pricing"
                className="block px-3 py-2 text-gray-300 hover:text-white"
              >
                Pricing
              </Link>
              <div className="pt-4 flex flex-col space-y-2">
                <Button variant="ghost" className="justify-start">
                  Sign in
                </Button>
                <Button variant="secondary">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

