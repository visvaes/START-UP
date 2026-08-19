'use client'

import React, { useState } from 'react'
import { Send, MessageCircle, Star } from 'lucide-react'

interface ReviewMessage {
  id: number
  type: 'user' | 'bot'
  content: string
  timestamp: Date
}

const Review = () => {
  const [messages, setMessages] = useState<ReviewMessage[]>([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! 👋 I\'d love to hear about your experience with our consulting services. How would you rate our work?',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [rating, setRating] = useState(0)
  const [step, setStep] = useState(0) // 0: rating, 1: feedback, 2: contact
  const [reviewData, setReviewData] = useState({
    name: '',
    email: '',
    company: '',
    rating: 0,
    feedback: ''
  })

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: ReviewMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    }
    setMessages([...messages, userMessage])

    // Process based on step
    if (step === 0) {
      setReviewData({ ...reviewData, feedback: inputValue })
      setStep(1)
      const botResponse: ReviewMessage = {
        id: messages.length + 2,
        type: 'bot',
        content: 'Thank you for sharing that! Could you please provide your name and company?',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
    } else if (step === 1) {
      const [name, company] = inputValue.split(',').map(s => s.trim())
      setReviewData({ ...reviewData, name, company })
      setStep(2)
      const botResponse: ReviewMessage = {
        id: messages.length + 2,
        type: 'bot',
        content: 'Great! What\'s your email address so we can follow up with you?',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
    } else if (step === 2) {
      setReviewData({ ...reviewData, email: inputValue })
      const botResponse: ReviewMessage = {
        id: messages.length + 2,
        type: 'bot',
        content: '✅ Thank you for your review! We really appreciate your feedback and will use it to improve our services.',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setStep(3)
    }

    setInputValue('')
  }

  const handleRatingClick = (value: number) => {
    setRating(value)
    setReviewData({ ...reviewData, rating: value })

    const userMessage: ReviewMessage = {
      id: messages.length + 1,
      type: 'user',
      content: `${value} star${value !== 1 ? 's' : ''}`,
      timestamp: new Date()
    }
    setMessages([...messages, userMessage])

    // Bot response
    const botResponse: ReviewMessage = {
      id: messages.length + 2,
      type: 'bot',
      content: `${value === 5 ? '🌟' : value >= 3 ? '😊' : '😌'} Wonderful! Now could you tell us what you liked most about our services?`,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, botResponse])
    setStep(1)
  }

  return (
    <section id="review" className="py-16">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Share Your Feedback</h2>
          <p className="text-slate-600 text-lg">Help us improve by sharing your experience with our consulting services</p>
        </div>

        {/* Chat Box */}
        <div className="bg-white rounded-lg border border-[#BAFF39] shadow-lg overflow-hidden flex flex-col h-[600px]">
          {/* Header */}
          <div className="bg-[#BAFF39] text-[#1f2937] p-6 flex items-center gap-3 border-b border-[#BAFF39]">
            <MessageCircle size={24} />
            <div>
              <h3 className="font-bold text-lg">Review Chat</h3>
              <p className="text-sm text-[#1f2937]/80">We value your honest feedback</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-lg ${
                    msg.type === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-slate-200 text-slate-900 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.content}</p>
                  <span className="text-xs opacity-70 mt-2 block">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}

            {/* Star Rating Selection */}
            {step === 0 && (
              <div className="flex justify-start">
                <div className="bg-slate-200 text-slate-900 rounded-lg rounded-bl-none px-4 py-3 max-w-xs">
                  <p className="text-sm mb-3">Click on stars to rate:</p>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => handleRatingClick(star)}
                        className="text-2xl transition-transform hover:scale-125 cursor-pointer"
                      >
                        <Star
                          size={28}
                          fill={rating >= star ? '#FBBF24' : 'none'}
                          stroke={rating >= star ? '#FBBF24' : '#D1D5DB'}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          {step < 3 && (
            <div className="border-t border-slate-200 p-4 bg-white">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={
                    step === 0
                      ? 'Click stars above...'
                      : step === 1
                      ? 'Your name and company...'
                      : 'Your email address...'
                  }
                  className="flex-1 px-4 py-2 border border-[#BAFF39] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BAFF39] text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={step === 0 || !inputValue.trim()}
                  className="bg-[#BAFF39] text-[#1f2937] p-2 rounded-lg hover:bg-[#d5ff7d] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center border border-[#BAFF39]"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          )}

          {/* Completion Message */}
          {step === 3 && (
            <div className="border-t border-slate-200 p-4 bg-green-50 text-center">
              <p className="text-green-700 font-semibold text-sm">Thank you for your review!</p>
              <button
                onClick={() => {
                  setMessages([
                    {
                      id: 1,
                      type: 'bot',
                      content: 'Hello! 👋 I\'d love to hear about your experience with our consulting services. How would you rate our work?',
                      timestamp: new Date()
                    }
                  ])
                  setInputValue('')
                  setRating(0)
                  setStep(0)
                  setReviewData({ name: '', email: '', company: '', rating: 0, feedback: '' })
                }}
                className="mt-2 text-sm text-blue-600 hover:underline font-medium"
              >
                Start a new review
              </button>
            </div>
          )}
        </div>

        {/* Review Summary */}
        {reviewData.name && (
          <div className="mt-8 bg-[#f5f7f2] rounded-lg p-6 border border-[#BAFF39]">
            <h3 className="font-bold text-slate-900 mb-4">Review Summary</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-slate-600">Name</p>
                <p className="font-semibold text-slate-900">{reviewData.name}</p>
              </div>
              <div>
                <p className="text-slate-600">Company</p>
                <p className="font-semibold text-slate-900">{reviewData.company || 'N/A'}</p>
              </div>
              <div>
                <p className="text-slate-600">Email</p>
                <p className="font-semibold text-slate-900">{reviewData.email || 'N/A'}</p>
              </div>
              <div>
                <p className="text-slate-600">Rating</p>
                <div className="flex gap-1">
                  {[...Array(reviewData.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Review
