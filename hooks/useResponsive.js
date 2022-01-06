import { tailwindScreens } from "utils";
import { useMediaQuery } from "react-responsive";

export default function useResponsive() {
  const xxl = useMediaQuery({
    query: `(max-width: ${tailwindScreens.xxl.max})`,
  });
  const xl = useMediaQuery({ query: `(max-width: ${tailwindScreens.xl.max})` });
  const md = useMediaQuery({ query: `(max-width: ${tailwindScreens.md.max})` });
  const sm = useMediaQuery({ query: `(max-width: ${tailwindScreens.sm.max})` });
  const xs = useMediaQuery({ query: `(max-width: ${tailwindScreens.xs.max})` });
  const xxs = useMediaQuery({
    query: `(max-width: ${tailwindScreens.xxs.max})`,
  });

  return {
    xxl,
    xl,
    md,
    sm,
    xs,
    xxs,
  };
}
