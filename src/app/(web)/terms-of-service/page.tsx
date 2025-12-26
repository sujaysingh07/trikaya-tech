import Container from "@/src/components/ui/Container";
import { generatePageMetadata } from "@/src/lib/generatePageMetadata";
import { generateCanonical } from "@/src/lib/utils";

export const metadata = generatePageMetadata({
  title:
        "Terms of Service | Trikaya Platform Rules",
  description: 'Read the terms and conditions for using Trikaya. Understand your rights and responsibilities as a member of our hiring and learning ecosystem.',
  canonical: generateCanonical("/terms-of-service"),
});
const TermsOfService = () => {
  return (
    <Container className="w-full bg-white py-16 text-gray-800">
      <div className="mx-auto max-w-6xl px-5 md:px-10 lg:px-20">
        <h1 className="mb-6 text-4xl font-bold">Terms of Service</h1>
        <p className="mb-5 text-sm text-gray-500">
          These terms govern your use of the Trikaya platform and outline the
          rights and responsibilities of all users.
        </p>
        <p className="mb-10 text-sm text-gray-500">
          Effective Date: January 8, 2025
        </p>

        <div className="space-y-10 leading-relaxed">
          {/* Welcome Section */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold">Welcome to Trikaya</h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your access to
              and use of the Trikaya platform, including our website, mobile
              applications, and related services (collectively, the
              &quot;Service&quot;). <br /> <br /> Please read these Terms
              carefully before using our Service. By accessing or using any part
              of the Service, you agree to be bound by these Terms. If you
              disagree with any part of these terms, then you may not access the
              Service.
            </p>
          </section>

          {/* Acceptance of Terms */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold">Acceptance of Terms</h2>

            <h3 className="mt-4 mb-2 text-xl font-medium">Agreement</h3>
            <p>
              By accessing and using the Trikaya platform, you accept and agree
              to be bound by the terms and provision of this agreement. If you
              do not agree to abide by the above, please do not use this
              service.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">Modifications</h3>
            <p>
              We reserve the right to modify these terms at any time. We will
              notify users of significant changes via email or platform
              notifications. Continued use of the platform after changes
              constitutes acceptance of the new terms.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">Eligibility</h3>
            <p>
              You must be at least 18 years old and legally capable of entering
              into contracts to use our platform. By using our services, you
              represent and warrant that you meet these requirements.
            </p>
          </section>

          {/* User Accounts and Responsibilities */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              User Accounts and Responsibilities
            </h2>

            <h3 className="mt-4 mb-2 text-xl font-medium">
              Account Registration
            </h3>
            <p>
              You must provide accurate, current, and complete information
              during registration and keep your account information updated. You
              are responsible for safeguarding your account credentials.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">
              Profile Information
            </h3>
            <p>
              You are responsible for the accuracy of all information in your
              profile, including skills, experience, and educational background.
              False or misleading information may result in account suspension.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">
              Professional Conduct
            </h3>
            <p>
              You agree to conduct yourself professionally when interacting with
              other users, employers, and our platform. Harassment,
              discrimination, or inappropriate behavior is strictly prohibited.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">Account Security</h3>
            <p>
              You are responsible for maintaining the confidentiality of your
              account and password. You agree to notify us immediately of any
              unauthorized use of your account.
            </p>
          </section>

          {/* Platform Usage */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold">Platform Usage</h2>

            <h3 className="mt-4 mb-2 text-xl font-medium">Permitted Use</h3>
            <p>
              The platform is intended for professional career development, job
              searching, skill verification, and recruitment purposes.
              Commercial use outside of these purposes requires written
              permission.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">
              Prohibited Activities
            </h3>
            <p>
              You may not use the platform for illegal activities, spamming,
              harassment, impersonation, or any activity that could harm the
              platform or its users. Violation may result in immediate account
              termination.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">
              Content Guidelines
            </h3>
            <p>
              All content you post must be accurate, relevant, and professional.
              You may not post content that is offensive, discriminatory, or
              violates intellectual property rights.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">
              Skill Verification
            </h3>
            <p>
              Blockchain-verified skills must be earned through legitimate
              means. Attempting to falsify or manipulate skill verification
              processes is strictly prohibited and may result in legal action.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Intellectual Property
            </h2>

            <h3 className="mt-4 mb-2 text-xl font-medium">
              Platform Ownership
            </h3>
            <p>
              The Trikaya platform, including all software, algorithms, designs,
              and content, is owned by Trikaya and protected by intellectual
              property laws.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">User Content</h3>
            <p>
              You retain ownership of content you create, but grant us a license
              to use, modify, and display your content as necessary to provide
              our services.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">Trademark</h3>
            <p>
              Trikaya, our logo, and related marks are trademarks of our
              company. You may not use these marks without written permission.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">DMCA Compliance</h3>
            <p>
              We respect intellectual property rights and will respond to valid
              DMCA takedown notices. Users who repeatedly infringe copyrights
              may have their accounts terminated.
            </p>
          </section>

          {/* Disclaimers and Limitations */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Disclaimers and Limitations
            </h2>

            <h3 className="mt-4 mb-2 text-xl font-medium">
              Service Availability
            </h3>
            <p>
              We strive to maintain platform availability but do not guarantee
              uninterrupted service. We reserve the right to modify, suspend, or
              discontinue services with reasonable notice.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">
              Employment Outcomes
            </h3>
            <p>
              While we facilitate connections between candidates and employers,
              we do not guarantee job placement or employment outcomes. All
              hiring decisions are made independently by employers.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">
              Limitation of Liability
            </h3>
            <p>
              Our liability is limited to the maximum extent permitted by law.
              We are not liable for indirect, incidental, or consequential
              damages arising from platform use.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">User Interactions</h3>
            <p>
              We are not responsible for interactions between users or between
              users and employers. Users engage with others at their own risk
              and discretion.
            </p>
          </section>

          {/* Privacy and Data Protection */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Privacy and Data Protection
            </h2>
            <p>
              Our collection and use of personal data is governed by our Privacy
              Policy. By using the platform, you consent to such collection and
              use.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">
              Blockchain Records
            </h3>
            <p>
              Skill verifications stored on blockchain are permanent and
              publicly verifiable, though they contain no personally
              identifiable information.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">Data Security</h3>
            <p>
              We implement industry-standard security measures to protect your
              data, but cannot guarantee absolute security. Users are
              responsible for maintaining their own account security.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">
              Third-Party Services
            </h3>
            <p>
              Our platform may integrate with third-party services. Your use of
              such services is subject to their respective terms and privacy
              policies.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold">Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without
              prior notice or liability, for any reason whatsoever, including
              without limitation if you breach the Terms. <br />
              Upon termination, your right to use the Service will cease
              immediately. You may delete your account at any time by contacting
              our support team.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold">Governing Law</h2>
            <p>
              These Terms shall be interpreted and governed by the laws of the
              State of Karnatka India, without regard to its conflict of law
              provisions. Any disputes arising from these Terms will be resolved
              through binding arbitration in Bangalore, Karnatka, India.
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default TermsOfService;
