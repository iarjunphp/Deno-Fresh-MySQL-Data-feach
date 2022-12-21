import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import {models} from "../models/index.ts"

export const handler: Handlers = {
  async GET(_req, ctx) {
    const users = await models.user.all();
    return ctx.render({users: users});
  },
};

export default function Home({ data }: PageProps) {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div>
        {JSON.stringify(data.users)}
      </div>
    </>
  );
}
