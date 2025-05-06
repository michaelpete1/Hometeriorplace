import { NextResponse } from 'next/server';

const comments = [
  {
    id: 1,
    name: "Jane Doe",
    comment: "The quality of the furniture is outstanding! It truly elevated the look of my living room."
  },
  {
    id: 2,
    name: "John Smith",
    comment: "Great service and a seamless experience. Highly recommend the custom design service!"
  },
  {
    id: 3,
    name: "Alice Johnson",
    comment: "A beautiful addition to my home. Excellent craftsmanship and attention to detail!"
  }
];

export async function GET() {
  return NextResponse.json(comments);
}
