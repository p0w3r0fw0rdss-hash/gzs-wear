import { NextResponse } from 'next/server';

export async function GET() {
  const PRINTIFY_API_KEY = process.env.PRINTIFY_API_KEY;
  const SHOP_ID = process.env.PRINTIFY_SHOP_ID;

  if (!PRINTIFY_API_KEY || !SHOP_ID) {
    return NextResponse.json({ error: 'Missing Printify credentials' }, { status: 500 });
  }

  try {
    const response = await fetch(`https://api.printify.com/v1/shops/${SHOP_ID}/products.json`, {
      headers: {
        'Authorization': `Bearer ${PRINTIFY_API_KEY}`,
      },
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
