interface Props {
  data: unknown;
}

export const Debugger = ({ data }: Props) => {
  return (
    <pre className="text-muted-foreground max-h-[480px] w-full overflow-y-auto border px-4 py-4 text-xs border-contrast">
      {JSON.stringify(data, null, 2)}
    </pre>
  );
};
