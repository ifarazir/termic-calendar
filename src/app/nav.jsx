import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { CalendarFold } from "lucide-react";
import Link from "next/link";

const Nav = () => {
    return (
        <header className="print:hidden sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
                <Link
                    href="/"
                    className="flex items-center gap-x-2"
                >
                    <CalendarFold className="w-6 h-6" strokeWidth={1.25} />
                    <h1 className="text-base font-medium"><span className="font-black">ابزارک</span>/ تقویم ساز ترم</h1>
                </Link>

                <div className="hidden md:block">
                    <NavigationMenu>
                        <NavigationMenuList className="flex flex-row-reverse">
                            <NavigationMenuItem>
                                <Link href="/docs" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        بازنویسی
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        درون ریزی
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        برون ریزی
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Button>
                                    <NavigationMenuLink>
                                        افزودن درس
                                    </NavigationMenuLink>
                                </Button>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </header>
    );
};

export default Nav;