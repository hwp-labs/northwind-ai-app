import { APP } from "@/constants/APP";
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

interface Props {
  username?: string;
}

export const WelcomeEmail = ({ username = "John" }: Props) => {
  const previewText = `Welcome to ${APP.name}, ${username}!`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="m-auto font-sans">
          <Container className="mx-auto mb-10 max-w-[465px] p-5">
            <Heading className="_text-center mx-0 my-8 p-0 text-2xl font-normal text-white">
              Welcome to <strong>{APP.name}</strong>, {username}!
            </Heading>
            <Section className="">
              <Img
                src={APP.socialPreview}
                alt=""
                width="1280"
                height="640"
                className="mx-auto my-0 invert"
              />
            </Section>
            <Section className="">
              <Text className="text-start text-sm leading-relaxed text-white">
                We're excited to have you onboard at <strong>{APP.name}</strong>
                . We hope you enjoy your journey with us. If you have any
                questions or need assistance, feel free to reach out.
              </Text>
            </Section>
            <Section className="">
              <Text className="text-start text-sm text-white">
                Cheers,
                <br />
                {APP.owner}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
