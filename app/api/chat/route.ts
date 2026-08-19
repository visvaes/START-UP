import { NextRequest, NextResponse } from 'next/server'

// Mock responses for demo mode
const mockResponses: Record<string, string[]> = {
  service: [
    'We offer comprehensive software consulting services including: technology advisory, software architecture design, cloud modernization, legacy system refactoring, DevOps implementation, and custom software development. Our team specializes in helping clients across 30+ industries optimize their technology stack.',
    'Our services span the entire software lifecycle: from strategic planning and architecture design to implementation and deployment. We focus on solutions that drive measurable business value.'
  ],
  technology: [
    'We have deep expertise across modern technology stacks including: Cloud platforms (AWS, Azure, Google Cloud), programming languages (Python, Java, C#, TypeScript), frameworks (React, Angular, .NET), databases (SQL, NoSQL), and DevOps tools (Docker, Kubernetes, CI/CD).',
    'Our consultants stay current with emerging technologies like AI/ML, blockchain, microservices, and serverless architectures.'
  ],
  experience: [
    "SoftCorp brings 30+ years of collective experience with 750+ IT experts. We've successfully delivered over 4,300 projects across industries like Healthcare, Finance, Retail, Manufacturing, and Government.",
    'Our team has helped companies modernize legacy systems, migrate to cloud, implement AI solutions, and build scalable platforms.'
  ],
  default: [
    "That's an interesting question! We'd be happy to help you with your software consulting needs. Could you tell us more about your specific requirements or challenges?",
    'Our consulting team is ready to assist. What aspect of software development or technology strategy would you like to explore?',
    'Great question! We have expertise in many areas. Would you like to know more about any specific service or technology?'
  ]
}

function getRelevantResponse(userMessage: string): string {
  const messageLower = userMessage.toLowerCase()
  
  if (messageLower.includes('service') || messageLower.includes('offer') || messageLower.includes('what do you')) {
    return mockResponses.service[Math.floor(Math.random() * mockResponses.service.length)]
  }
  if (messageLower.includes('technolog') || messageLower.includes('stack') || messageLower.includes('skill') || messageLower.includes('expertise')) {
    return mockResponses.technology[Math.floor(Math.random() * mockResponses.technology.length)]
  }
  if (messageLower.includes('experience') || messageLower.includes('background') || messageLower.includes('company') || messageLower.includes('about')) {
    return mockResponses.experience[Math.floor(Math.random() * mockResponses.experience.length)]
  }
  
  return mockResponses.default[Math.floor(Math.random() * mockResponses.default.length)]
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('Received chat request (DEMO MODE):', JSON.stringify(body, null, 2))
    
    const messages = Array.isArray(body.messages) ? body.messages : []
    const lastUserMessage = messages.filter((m: any) => m.role === 'user').pop()?.content || ''
    
    // Get relevant mock response
    const reply = getRelevantResponse(lastUserMessage)
    console.log('Generated response:', reply)

    return NextResponse.json({ reply })
  } catch (error) {
    console.error('Chat API error:', error instanceof Error ? error.message : String(error))
    return NextResponse.json(
      { error: `Internal server error: ${error instanceof Error ? error.message : String(error)}` },
      { status: 500 }
    )
  }
}
