import React from "react";
import SubpageLayout from "@/app/components/layout/SubpageLayout";

export default function RefundPolicyPage() {
  const policies = [
    {
      title: "1. Invite-Only Beta Trial",
      content: "Alpha Suite is currently in an invite-only beta testing phase. Trial licenses are provided to selected developers and alpha testers for zero charge. No credit card information is collected or billed during this sandbox test segment.",
    },
    {
      title: "2. Premium Software Licensing Subscriptions",
      content: "Once commercial billing begins, licenses will run on monthly or annual cycles. Subscription fees allow you to run the local desktop engine and query historical ticks. You can toggle auto-renewal settings in your billing console. Access remains active until the end of your prepaid period.",
    },
    {
      title: "3. 7-Day First-Time Refund Guarantee",
      content: "We offer a 7-day money-back guarantee for first-time premium license key purchases. Refund requests submitted after 7 days from the initial transaction date are not eligible for compensation. Processing fees charged by third-party payment gateways (e.g. UPI, card processors) are non-refundable and will be deducted.",
    },
    {
      title: "4. Account Suspensions & Violations",
      content: "Refunds are not granted in cases where a license is suspended due to violations of our terms (such as reverse engineering client WASM binaries, attempting to distribute license keys, or spamming broker websocket streams).",
    },
  ];

  return (
    <SubpageLayout
      title="Refund Policy"
      subtitle="Last updated: May 22, 2026. Review terms regarding billing cycles, beta licenses, and first-time subscription guarantees."
      category="Legal"
    >
      <div className="max-w-3xl space-y-8 pb-8">
        <p className="text-xs text-[var(--text-muted)] leading-relaxed">
          Thank you for choosing Alpha Suite. We aim to keep our licensing simple and transparent. Please review our policies on cancellations and refund eligibility.
        </p>

        <div className="space-y-8 mt-6">
          {policies.map((p, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-sm font-bold font-heading text-[var(--text-primary)]">
                {p.title}
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                {p.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SubpageLayout>
  );
}
