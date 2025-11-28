import Container from "@/src/components/ui/Container";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <Container className="w-full bg-white py-16 text-gray-800">
      <div className="mx-auto max-w-6xl px-5 md:px-10 lg:px-20">
        <h1 className="mb-6 text-4xl font-bold">Privacy Policy</h1>
        <p className="mb-5 text-sm text-gray-500">
          Your privacy is important to us. This policy explains how we collect,
          use, and protect your personal information.
        </p>
        <p className="mb-10 text-sm text-gray-500">
          Last updated: January 8, 2025
        </p>

        <div className="space-y-10 leading-relaxed">
          <section>
            <h2 className="mb-3 text-2xl font-semibold">Overview</h2>
            <p>
              At Trikaya, we are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy
              Policy explains how we collect, use, store, and share information
              about you when you use our platform. <br /> <br />
              By using our services, you agree to the collection and use of
              information in accordance with this policy. We will not use or
              share your information except as described in this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Information We Collect
            </h2>

            <h3 className="mt-4 mb-2 text-xl font-medium">
              Personal Information
            </h3>
            <p>
              We collect information you provide directly to us, such as when
              you create an account, complete your profile, apply for jobs, or
              contact us. This may include your name, email address, phone
              number, resume, work history, education, skills, and preferences.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">
              Professional Information
            </h3>
            <p>
              Information about your professional background, including work
              experience, education, skills, certifications, and career
              interests. This information helps us provide personalized job
              recommendations and career coaching.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">Usage Information</h3>
            <p>
              We collect information about how you use our platform, including
              pages visited, features used, search queries, and interaction
              patterns. This helps us improve our services and user experience.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">
              Device Information
            </h3>
            <p>
              We collect information about the devices you use to access our
              platform, including IP address, browser type, operating system,
              and device identifiers.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              How We Use Your Information
            </h2>

            <h3 className="mt-4 mb-2 text-xl font-medium">Platform Services</h3>
            <p>
              To provide, maintain, and improve our platform services, including
              job matching, skill verification, career coaching, and employer
              connections.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">Personalization</h3>
            <p>
              To personalize your experience, including customized job
              recommendations, learning paths, and career advice based on your
              profile and preferences.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">Communication</h3>
            <p>
              To communicate with you about our services, send you job alerts,
              platform updates, and respond to your inquiries.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">
              Analytics and Improvement
            </h3>
            <p>
              To analyze platform usage, conduct research, and improve our
              services, algorithms, and user experience.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">Information Sharing</h2>

            <h3 className="mt-4 mb-2 text-xl font-medium">With Employers</h3>
            <p>
              When you apply for jobs or express interest in opportunities, we
              share relevant profile information with potential employers. You
              control what information is shared through your privacy settings.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">
              Blockchain Verification
            </h3>
            <p>
              Verified skills and certifications may be recorded on blockchain
              networks for transparency and verification purposes. This
              information is cryptographically secured and pseudonymized.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">Service Providers</h3>
            <p>
              We work with trusted third-party service providers who help us
              operate our platform, conduct analytics, and provide customer
              support. These providers are bound by confidentiality agreements.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">
              Legal Requirements
            </h3>
            <p>
              We may disclose information when required by law, to protect our
              rights, or to ensure platform safety and security.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">Data Security</h2>

            <h3 className="mt-4 mb-2 text-xl font-medium">Encryption</h3>
            <p>
              We use industry-standard encryption to protect your data both in
              transit and at rest. All sensitive information is encrypted using
              AES-256 encryption.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">Access Controls</h3>
            <p>
              We implement strict access controls to ensure only authorized
              personnel can access user data, and only for legitimate business
              purposes.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">
              Blockchain Security
            </h3>
            <p>
              Skill verifications stored on blockchain are cryptographically
              secured and immutable, providing additional protection against
              tampering or fraud.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">Regular Audits</h3>
            <p>
              We conduct regular security audits and assessments to identify and
              address potential vulnerabilities in our systems.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Your Rights and Choices
            </h2>

            <h3 className="mt-4 mb-2 text-xl font-medium">Account Control</h3>
            <p>
              You can update, correct, or delete your account information at any
              time through your profile settings.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">Privacy Settings</h3>
            <p>
              You have control over what information is visible to employers and
              other users through comprehensive privacy settings.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">Data Portability</h3>
            <p>
              You can request a copy of your personal data in a machine-readable
              format and transfer it to other services.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">Account Deletion</h3>
            <p>
              You can delete your account at any time. Some information may be
              retained for legal or security purposes as outlined in our data
              retention policy.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">Data Retention</h2>

            <h3 className="mt-4 mb-2 text-xl font-medium">Active Accounts</h3>
            <p>
              You can delete your account at any time. Some information may be
              retained for legal or security purposes as outlined in our data
              retention policy.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">Inactive Accounts</h3>
            <p>
              If your account becomes inactive for an extended period, we may
              delete or anonymize your personal information after providing
              notice.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">Legal Obligations</h3>
            <p>
              Some information may be retained longer to comply with legal
              obligations, resolve disputes, or enforce our agreements.
            </p>

            <h3 className="mt-4 mb-2 text-xl font-medium">
              Blockchain Records
            </h3>
            <p>
              Verified credentials stored on blockchain networks are permanent
              and cannot be deleted, but they are pseudonymized and do not
              contain personally identifiable information.
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
