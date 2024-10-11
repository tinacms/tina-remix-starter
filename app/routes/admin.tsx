import { redirect } from "@remix-run/node";

export const loader = async () => {
  //? There has to be a better way to do this
  // Redirect from /admin to /admin/index.html
  return redirect("/admin/index.html");
};
