import React from 'react'
import { Heart, Phone, Instagram } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'default' | 'secondary'
  size?: 'default' | 'lg'
}

export const Button = ({
  children,
  className = '',
  variant = 'default',
  size = 'default',
  ...props
}: ButtonProps) => {
  const baseClasses =
    'inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variantClasses = {
    default: 'bg-[#E67E22] text-white hover:bg-[#D35400] focus:ring-[#E67E22]',
    secondary:
      'bg-[#3498DB] text-white hover:bg-[#2980B9] focus:ring-[#3498DB]',
  }

  const sizeClasses = {
    default: 'h-10 px-4 py-2 text-sm',
    lg: 'h-11 px-8 text-base',
  }

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  )
}