import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
});

const registrationPrices: Record<string, { amount: number; name: string }> = {
  "package-i-early-bird": {
    amount: 250000, // $2,500 in cents
    name: "Package I: Stem Cell Scholar Series (Early Bird)",
  },
  "package-i-standard": {
    amount: 300000, // $3,000 in cents
    name: "Package I: Stem Cell Scholar Series (Standard)",
  },
  "package-ii": {
    amount: 1000000, // $10,000 in cents
    name: "Package II: Immersive Experience Program",
  },
  "package-iii": {
    amount: 2500000, // $25,000 in cents
    name: "Package III: Global Elite Partners Program",
  },
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      registrationType,
      firstName,
      lastName,
      email,
      phone,
      country,
      organization,
      role,
      specialization,
      interest,
    } = body;

    const registration = registrationPrices[registrationType];

    if (!registration) {
      return NextResponse.json(
        { error: "Invalid registration type" },
        { status: 400 }
      );
    }

    // Create or retrieve customer
    const customers = await stripe.customers.list({
      email: email,
      limit: 1,
    });

    let customer;
    if (customers.data.length > 0) {
      customer = customers.data[0];
    } else {
      customer = await stripe.customers.create({
        email: email,
        name: `${firstName} ${lastName}`,
        phone: phone,
        metadata: {
          country,
          organization,
          role,
          specialization,
          interest: interest || "",
          registrationType,
        },
      });
    }

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `OXYZ Symposium 2026 - ${registration.name}`,
              description: `Registration for the OXYZ International Regenerative Medicine & Strategic Collaboration Symposium 2026`,
              images: [
                `${process.env.NEXT_PUBLIC_BASE_URL || "https://oxyz-symposium.vercel.app"}/images/sym/symposium_hero.jpg`,
              ],
            },
            unit_amount: registration.amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://oxyz-symposium.vercel.app"}/register/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://oxyz-symposium.vercel.app"}/register?canceled=true`,
      metadata: {
        registrationType,
        firstName,
        lastName,
        phone,
        country,
        organization,
        role,
        specialization,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
