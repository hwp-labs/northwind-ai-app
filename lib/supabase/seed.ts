import { seedIndustriesAction } from "./services/industries/actions/seedIndustriesAction";

(async () => {
  console.info("🚀 ~ seed ~ started");
  //
  const { data, error } = await seedIndustriesAction({});
  console.log("🚀 ~ seedIndustriesAction ~ data:", data, error)
  //
  console.info("🚀 ~ seed ~ ended");
})();
