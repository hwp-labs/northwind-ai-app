import { toast } from "sonner";

type Payload = { title: string; message: string } | string;

export function useToast() {
  const success = (payload: Payload) => {
    toast.success(payload as string, {
      style: { background: "oklch(0.6 0.118 184.704)" },
    });
  };

  const error = (payload: Payload) => {
    toast.warning(payload as string, {
      style: { background: "oklch(0.577 0.245 27.325)" },
    });
  };

  return { success, error };
}
