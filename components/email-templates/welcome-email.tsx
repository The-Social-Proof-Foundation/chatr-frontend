import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'

export interface WelcomeEmailProps {
  firstName?: string
  email: string
  baseUrl?: string
}

export const WelcomeEmail = ({ 
  firstName = 'there', 
  email,
  baseUrl = 'https://chatr.social' 
}: WelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Chatr - The future of decentralized communication</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header Section */}
          <Section style={header}>
            <Img
              src={`${baseUrl}/chatr-full-logo-dark.png`}
              width="240"
              height="240"
              alt="Chatr"
              style={logo}
            />
            <Text style={headerText} className="text-plus-jakarta-sans">
              The future of decentralized communication
            </Text>
          </Section>

          {/* Main Content */}
          <Section style={content}>            
            <Text style={text}>
              Thank you for joining Chatr! We&apos;re thrilled to have you as part of our growing community building the future of free speech on the blockchain.
            </Text>

            <Text style={text}>
              We&apos;re working hard to launch and can&apos;t wait to share this revolutionary platform with you. Stay tuned for exclusive updates!
            </Text>

            <Text style={text}>
              Follow us on social media for the latest updates and join our growing community:
            </Text>

            {/* Social Links */}
            <Section style={socialContainer}>
              <Link href="https://x.com/chatr_social" style={socialLink}>
                X (Twitter)
              </Link>
              <Text style={socialSeparator}>•</Text>
              <Link href="https://t.me/chatr_social" style={socialLink}>
                Telegram
              </Link>
              <Text style={socialSeparator}>•</Text>
              <Link href="https://www.mysocial.network/ecosystem/chatr" style={socialLink}>
                MySocial
              </Link>
            </Section>

            <Text style={text}>
              Questions? Join our Telegram community for support and updates.
            </Text>

            <Text style={signature}>
              Best regards,<br />
              <strong>The Chatr Team</strong>
            </Text>
          </Section>

          {/* Footer */}
          <Hr style={hr} />
          <Section style={footer}>
            <Text style={footerText}>
              This email was sent to {email} because you signed up for Chatr updates.
            </Text>
            <Text style={footerLinks}>
              <Link href={`${baseUrl}/unsubscribe?email=${encodeURIComponent(email)}`} style={link}>
                Unsubscribe
              </Link>
              {' • '}
              <Link href={`${baseUrl}/privacy`} style={link}>
                Privacy Policy
              </Link>
              {' • '}
              <Link href={`${baseUrl}/terms`} style={link}>
                Terms of Service
              </Link>
            </Text>
            <Text style={copyright}>
              © {new Date().getFullYear()} The Social Proof Foundation, LLC. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

// Styles
const main = {
  backgroundColor: '#FEFBF3',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
}

const container = {
  backgroundColor: '#FEFBF3',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '600px',
}

const header = {
  backgroundColor: '#FEFBF3',
  padding: '0px 0px',
  textAlign: 'center' as const,
}

const logo = {
  margin: '0 auto 20px',
}

const headerText = {
  color: '#000000',
  fontSize: '16px',
  margin: '0',
  opacity: '0.9',
}

const content = {
  padding: '40px 30px',
}

const text = {
  color: '#171717',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 20px',
}

const socialContainer = {
  textAlign: 'center' as const,
  margin: '24px 0',
}

const socialLink = {
  color: '#000000',
  textDecoration: 'underline',
  fontSize: '14px',
  display: 'inline-block',
  margin: '0 4px',
}

const socialSeparator = {
  color: '#9CA3AF',
  fontSize: '14px',
  margin: '0 4px',
  display: 'inline-block',
}

const signature = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '32px 0 0',
}

const hr = {
  borderColor: '#E5E7EB',
  margin: '20px 0',
}

const footer = {
  padding: '0 30px',
}

const footerText = {
  color: '#6B7280',
  fontSize: '12px',
  lineHeight: '1.6',
  margin: '0 0 8px',
  textAlign: 'center' as const,
}

const footerLinks = {
  color: '#6B7280',
  fontSize: '12px',
  textAlign: 'center' as const,
  margin: '0 0 8px',
}

const link = {
  color: '#171717',
  textDecoration: 'underline',
}

const copyright = {
  color: '#6B7280',
  fontSize: '12px',
  textAlign: 'center' as const,
  margin: '0',
}

export default WelcomeEmail