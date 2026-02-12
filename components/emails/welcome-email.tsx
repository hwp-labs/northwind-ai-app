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
//
import { ContactHelper } from "@/lib/supabase/services/contacts/helper";
import { ContactSchema } from "@/lib/supabase/services/contacts/types";
import { APP } from "@/constants/APP";
import { VALUE_PROPOSITION } from "@/constants/LOCALE";

interface Props {
  data: ContactSchema;
}

export const WelcomeEmail = ({ data }: Props) => {
  const contact = new ContactHelper(data);
  //
  return (
    <Html>
      <Head />
      <Preview>Welcome aboard, {contact.DisplayName}!</Preview>
      <Tailwind>
        <Body className="bg-background text-foreground m-auto font-sans">
          <Container className="mx-auto mb-10 max-w-[465px] p-5">
            <Heading
              className="_text-center mx-0 my-8 p-0 font-normal text-white"
              style={{ fontSize: 24 }}
            >
              Welcome aboard,{" "}
              <strong className="font-semibold">{contact.DisplayName}</strong>!
            </Heading>
            <Text
              className="text-start leading-relaxed"
              style={{ fontSize: 16 }}
            >
              {APP.description}
            </Text>
            <Section className="hidden_">
              <Img
                src={APP.socialPreview}
                alt=""
                width="320"
                height="160"
                className="mx-auto my-4 invert"
              />
            </Section>
            <Section>
              {VALUE_PROPOSITION.map((item, i) => (
                <Text
                  key={i}
                  className="text-start leading-relaxed"
                  style={{ fontSize: "16px" }}
                >
                  &gt;_&nbsp; {item.description}
                </Text>
              ))}
            </Section>
            <Section className="">
              <Text
                className="text-start leading-relaxed"
                style={{ fontSize: "16px" }}
              >
                Cheers,
                <br />
                EMANUEL
                <br />
                AI Product Engineer, {APP.owner}
                <br />
                (+234)81 6996 0927
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
