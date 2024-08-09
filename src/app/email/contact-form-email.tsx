import {
  Body,
  Container,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import React from "react";

type ContactFormEmailProps = {
  name: string;
  email: string;
  message: string;
};

export default function ContactFormEmail({
  submission,
}: {
  submission: ContactFormEmailProps;
}) {
  return (
    <Html>
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Section>
              <Text>You recieved a message from: {submission.name}</Text>
              <Hr />
              <Text> {submission.message}</Text>
              <Hr />
              <Text>The senders email is {submission.email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
