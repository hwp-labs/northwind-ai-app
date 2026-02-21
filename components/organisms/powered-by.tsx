import { APP } from "@/constants/APP";

export const PoweredBy = () => {
  return (
    <a href={APP.repositoryApiUrl} target="_blank" rel="noopener noreferrer">
      <figure className="flex-row-cs gap-2.5">
        <figcaption className="text-xs_ font-[Raleway]">Powered by</figcaption>
        <img
          src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi"
          alt="FastAPI"
        />
      </figure>
    </a>
  );
};
