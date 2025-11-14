import Container from "@/src/components/ui/Container";
import React from "react";

const TermsOfService = () => {
  return (
    <Container className="w-full bg-white text-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-5 md:px-10 lg:px-20">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-10">
          Effective Date: January 8, 2025
        </p>

        <div className="space-y-10 leading-relaxed">
          {/* Welcome Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Welcome to Trikaya</h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of
              the Trikaya platform, including our website, mobile applications,
              and related services (collectively, the &quot;Service&quot;). By accessing
              or using the Service, you agree to be bound by these Terms. If you
              disagree with any part of these terms, you may not access the
              Service.
            </p>
          </section>

          {/* Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Acceptance of Terms</h2>

            <h3 className="text-xl font-medium mt-4 mb-2">Agreement</h3>
            <p>
              By accessing and using the Trikaya platform, you accept and agree
              to be bound by these Terms. If you do not agree, please
              discontinue use of the Service.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">Modifications</h3>
            <p>
              We reserve the right to modify these Terms at any time. Users will
              be notified of significant changes via email or platform
              notifications. Continued use after changes constitutes acceptance
              of the updated Terms.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">Eligibility</h3>
            <p>
              You must be at least 18 years old and legally capable of entering
              into contracts. By using our services, you represent and warrant
              that you meet these requirements.
            </p>
          </section>

          {/* User Accounts and Responsibilities */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              User Accounts and Responsibilities
            </h2>

            <h3 className="text-xl font-medium mt-4 mb-2">
              Account Registration
            </h3>
            <p>
              You must provide accurate, current, and complete information
              during registration and keep your account information updated. You
              are responsible for safeguarding your credentials.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">
              Profile Information
            </h3>
            <p>
              You are responsible for the accuracy of profile information,
              including skills, experience, and educational background. False
              information may result in account suspension.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">
              Professional Conduct
            </h3>
            <p>
              You agree to conduct yourself professionally when interacting on
              the platform. Harassment, discrimination, or inappropriate
              behavior is prohibited.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">Account Security</h3>
            <p>
              You are responsible for maintaining the confidentiality of your
              account and must notify us immediately of any unauthorized use.
            </p>
          </section>

          {/* Platform Usage */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Platform Usage</h2>

            <h3 className="text-xl font-medium mt-4 mb-2">Permitted Use</h3>
            <p>
              The platform is intended for career development, job searching,
              skill verification, and recruitment. Commercial use outside these
              purposes requires written permission.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">
              Prohibited Activities
            </h3>
            <p>
              You may not use the platform for illegal activities, spamming,
              harassment, impersonation, or harmful behavior. Violations may
              result in immediate termination.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">
              Content Guidelines
            </h3>
            <p>
              All posted content must be accurate, relevant, and professional.
              Offensive or infringing content is prohibited.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">
              Skill Verification
            </h3>
            <p>
              Blockchain-verified skills must be legitimately earned. Attempts
              to falsify verification may lead to account termination or legal
              action.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Intellectual Property
            </h2>

            <h3 className="text-xl font-medium mt-4 mb-2">
              Platform Ownership
            </h3>
            <p>
              The platform and all related materials are owned by Trikaya and
              protected by intellectual property laws.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">User Content</h3>
            <p>
              You retain ownership of your content, but grant us a license to
              use, modify, and display it as needed to deliver services.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">Trademark</h3>
            <p>
              Trikaya trademarks, logos, and branding may not be used without
              written permission.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">DMCA Compliance</h3>
            <p>
              We respect intellectual property rights and respond to valid DMCA
              takedown notices. Repeat offenders may have accounts terminated.
            </p>
          </section>

          {/* Disclaimers and Limitations */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Disclaimers and Limitations
            </h2>

            <h3 className="text-xl font-medium mt-4 mb-2">
              Service Availability
            </h3>
            <p>
              While we strive for uninterrupted service, we cannot guarantee
              availability. Services may be modified or suspended with notice.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">
              Employment Outcomes
            </h3>
            <p>
              We facilitate connections but do not guarantee job placement.
              Hiring decisions are made solely by employers.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">
              Limitation of Liability
            </h3>
            <p>
              We are not liable for indirect or consequential damages arising
              from platform use, to the maximum extent permitted by law.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">User Interactions</h3>
            <p>
              Users engage with others at their own risk. We are not responsible
              for user-to-user or user-to-employer interactions.
            </p>
          </section>

          {/* Privacy and Data Protection */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Privacy and Data Protection
            </h2>
            <p>
              Our collection and use of personal data is governed by our Privacy
              Policy. By using the platform, you consent to such practices.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">
              Blockchain Records
            </h3>
            <p>
              Skill verifications stored on blockchain are permanent and
              publicly verifiable, but contain no personally identifiable
              information.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">Data Security</h3>
            <p>
              We implement industry-standard security measures but cannot
              guarantee absolute security. You are responsible for maintaining
              account security.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">
              Third-Party Services
            </h3>
            <p>
              Our platform may integrate with third-party services. Their terms
              and privacy policies apply to your use of such services.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Termination</h2>
            <p>
              We may terminate or suspend your account immediately for any
              breach of these Terms. Upon termination, your right to use the
              Service ends immediately. You may delete your account anytime by
              contacting support.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of Karnataka,
              India. Any disputes will be resolved through binding arbitration
              in Bangalore, Karnataka.
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default TermsOfService;
