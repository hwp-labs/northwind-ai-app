"use client";

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { ContactSchema } from "@/lib/supabase/services/contacts/types";
import { APP } from "@/constants/APP";
import { VALUE_PROPOSITION } from "@/constants/LOCALE";

interface Props {
  data: ContactSchema;
}

export const WelcomeEmail = ({ data }: Props) => {
  const displayName = data.name.split(" ")[0];
  const previewText = `Welcome aboard ${APP.name}, ${displayName}!`;
  //
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="m-auto font-sans">
          <Container className="mx-auto mb-10 max-w-[465px] p-5">
            <Heading className="_text-center mx-0 my-8 p-0 text-2xl font-normal text-white">
              Welcome aboard {APP.name}
              <strong className="font-semibold">, {displayName}!</strong>
            </Heading>
            <Text className="text-start text-sm leading-relaxed text-white">
              {APP.description}
            </Text>
            <Section className="hidden_">
              <Img
                src={APP.socialPreview}
                alt=""
                width="1280"
                height="640"
                className="mx-auto my-0 invert"
              />
            </Section>
            <Section>
              {VALUE_PROPOSITION.map((item, i) => (
                <Text key={i}>&gt;_&nbsp; {item.description}</Text>
              ))}
            </Section>
            <Section className="">
              <Text className="text-start text-sm text-white">
                Cheers,
                <br />
                Emanuel
                <br />
                Applied AI Engineer | {APP.owner}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
