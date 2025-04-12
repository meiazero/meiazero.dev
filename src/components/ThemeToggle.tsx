"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleCurrentTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <Button onClick={toggleCurrentTheme} variant='outline' size='icon'>
      <MoonIcon className='block size-3/5 dark:hidden' />
      <SunIcon className='hidden size-3/5 dark:block' />
    </Button>
  );
}
