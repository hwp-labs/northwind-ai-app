import { toast } from "sonner";
import { sleep } from "@/utils";
import { APP } from "@/constants/APP";

type Payload = string | { title: string; description: string };

export function useToast() {
  const _parsePayload = (payload: Payload) =>
    typeof payload === "string"
      ? [payload, undefined]
      : [payload.title, payload.description];

  const success = (payload: Payload) => {
    const [title, description] = _parsePayload(payload);

    toast.success(title, {
      description,
      style: { background: APP.colors.success },
    });
  };

  const error = (payload: Payload) => {
    const [title, description] = _parsePayload(payload);

    toast.warning(title, {
      description,
      style: { background: APP.colors.danger },
    });
  };

  const previewAsync = async (_: unknown) => {
    const [title, description] = [
      "Lorem ipsum dolor",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    ];

    toast(title, { description });

    await sleep(1.5);
    toast.info(title, {
      description,
      style: { background: APP.colors.info },
    });

    await sleep(1.5);
    toast.success(title, {
      description,
      style: { background: APP.colors.success },
    });

    await sleep(1.5);
    toast.warning(title, {
      description,
      style: { background: APP.colors.warning },
    });

    await sleep(1.5);
    toast.error(title, {
      description,
      style: { background: APP.colors.danger },
    });
  };

  return { success, error, previewAsync };
}
