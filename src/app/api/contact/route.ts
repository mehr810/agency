/* eslint-disable */

import { NextResponse } from "next/server";

interface ContactFormBody {
  name: string;
  email: string;
  message: string;
  subscribe?: boolean;
}

async function submitToHubSpot(formId: string, fields: any[], pageName: string, pageUri: string) {
  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${formId}`;

  const payload = {
    fields,
    context: {
      pageUri,
      pageName,
    },
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errorData = await res.text();
    throw new Error(`HubSpot API error: ${errorData}`);
  }

  return res.json();
}

export async function POST(req: Request) {
  try {
    const body: ContactFormBody = await req.json();

    const portalId = process.env.HUBSPOT_PORTAL_ID;
    const contactFormId = process.env.HUBSPOT_CONTACT_FORM_ID;
    const newsletterFormId = process.env.HUBSPOT_NEWSLETTER_FORM_ID;

    if (!portalId || !contactFormId) {
      throw new Error("❌ Missing HubSpot environment variables.");
    }

    // 1️⃣ Submit Contact Form
    const contactFields = [
      { name: "firstname", value: body.name },
      { name: "email", value: body.email },
      { name: "message", value: body.message },
    ];

    const contactRes = await submitToHubSpot(
      contactFormId,
      contactFields,
      "Contact Us",
      "https://yourdomain.com/contact"
    );

    // 2️⃣ If subscribed → also submit Newsletter Form
    let newsletterRes = null;
    if (body.subscribe && newsletterFormId) {
      const newsletterFields = [
        { name: "email", value: body.email },
        { name: "firstname", value: body.name },
      ];

      newsletterRes = await submitToHubSpot(
        newsletterFormId,
        newsletterFields,
        "Newsletter Opt-in",
        "https://yourdomain.com/newsletter"
      );
    }

    return NextResponse.json({
      success: true,
      contact: contactRes,
      newsletter: newsletterRes,
    });
  } catch (error: any) {
    console.error("❌ HubSpot error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
