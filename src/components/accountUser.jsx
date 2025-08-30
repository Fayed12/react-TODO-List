import * as React from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { Account } from "@toolpad/core/Account";

const demoSession = {
  user: {
    name: "Mohamed Fayed",
    email: "memad4858@gmail.com",
    image: "/user.jpg",
  },
};

export default function AccountDemoSignedIn() {
  const [session, setSession] = React.useState(demoSession);
  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession(demoSession);
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  return (
    <AppProvider authentication={authentication} session={session}>
      <Account />
    </AppProvider>
  );
}
