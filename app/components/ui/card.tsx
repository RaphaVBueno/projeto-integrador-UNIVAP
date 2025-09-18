import React from 'react'

interface ComponentProps {
  children: React.ReactNode
  className?: string
}

export const Card = ({ children, className = '' }: ComponentProps) => (
  <div
    className={`bg-[#FFFCF5] rounded border border-[#E67D22] shadow-sm transition-shadow duration-300 hover:shadow-lg ${className}`}
  >
    {children}
  </div>
)

export const CardHeader = ({ children, className = '' }: ComponentProps) => (
  <div className={`p-6 ${className}`}>{children}</div>
)

export const CardTitle = ({ children, className = '' }: ComponentProps) => (
  <h3
    className={`font-serif text-xl font-bold text-[#3A3A3A] leading-tight ${className}`}
  >
    {children}
  </h3>
)

export const CardDescription = ({ children, className = '' }: ComponentProps) => (
  <p className={`text-sm text-gray-600 leading-relaxed ${className}`}>
    {children}
  </p>
)

export const CardContent = ({ children, className = '' }: ComponentProps) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
)