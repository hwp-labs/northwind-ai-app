import { seedIndustriesAction } from "./services/industries/actions/seedIndustriesAction";

(async () => {
  console.info("🚀 ~ seed ~ started");
  // 
  await seedIndustriesAction({});
  // 
  console.info("🚀 ~ seed ~ ended");
})();
