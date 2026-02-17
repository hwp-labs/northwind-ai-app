interface Props {
  fastApi?: boolean;
  vercel?: boolean;
  supabase?: boolean;
}
export const FooterBadges = ({ fastApi, vercel, supabase }: Props) => {
  return (
    <figure className="flex-row-cs gap-4">
      {fastApi && (
        <img
          src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi"
          alt="FastAPI"
        />
      )}
      {vercel && (
        <img
          src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"
          alt="Vercel"
        />
      )}
      {supabase && (
        <img
          src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white"
          alt="Supabase"
        />
      )}
    </figure>
  );
};
