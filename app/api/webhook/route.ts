import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Send to GHL webhook
    const webhookUrl = 'https://services.leadconnectorhq.com/hooks/Sm8uk9iJCYQXWnTkvYpa/webhook-trigger/168ed094-68d7-4e29-9f05-2c92e6cd928f'
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        source: 'cryopen-assessment',
        timestamp: new Date().toISOString()
      })
    })
    
    if (!response.ok) {
      throw new Error(`Webhook failed: ${response.status}`)
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to send webhook' },
      { status: 500 }
    )
  }
}