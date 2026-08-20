import { articlesRepo } from "@/lib/db/resources";
import { makeListHandlers } from "@/lib/api/collection-handlers";

export const { GET, POST } = makeListHandlers(articlesRepo);
