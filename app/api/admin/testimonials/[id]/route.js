import { testimonialsRepo } from "@/lib/db/resources";
import { makeItemHandlers } from "@/lib/api/collection-handlers";

export const { GET, PUT, DELETE } = makeItemHandlers(testimonialsRepo);
